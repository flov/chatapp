import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { FormEvent, MutableRefObject, RefObject, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../firebase';

export const MessageForm = ({
  dummyRef,
}: {
  dummyRef: RefObject<HTMLDivElement>;
}) => {
  const [user] = useAuthState(auth);
  const [text, setText] = useState('');

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    if (!text) return;
    await addDoc(collection(db, 'messages'), {
      createdAt: serverTimestamp(),
      text,
      uid: user?.uid,
      photoURL: user?.photoURL,
    });
    dummyRef?.current?.scrollIntoView({ behavior: 'smooth' });
    setText('');
  };

  return (
    <form
      onSubmit={submitForm}
      className="fixed bottom-0 flex justify-around w-full p-4 bg-black"
    >
      <input
        type="text"
        name="text"
        className="block w-full p-4 mr-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(e) => setText(e.target.value)}
      />
      <input
        className="px-5 py-2 text-sm font-semibold leading-5 text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-800"
        type="submit"
        value="🔮 Send Message 🔮"
      />
    </form>
  );
};
