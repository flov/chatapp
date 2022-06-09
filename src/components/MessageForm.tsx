import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { FormEvent, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../firebase';

export const MessageForm = () => {
  const [user] = useAuthState(auth);
  const [text, setText] = useState('');

  const handleAddMessage = async () =>
    await addDoc(collection(db, 'messages'), {
      createdAt: serverTimestamp(),
      text,
      uid: user?.uid,
      photoURL: user?.photoURL,
    });

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!text) return;
    handleAddMessage();
  };

  const addMessage = async (name: string) => {
    if (!name) return;
    await addDoc(collection(db, 'todos'), {
      name,
      completed: false,
      createdAt: serverTimestamp(),
    });
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        name="text"
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" value="🔮" />
    </form>
  );
};
