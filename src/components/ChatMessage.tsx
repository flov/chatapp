import { Timestamp } from 'firebase/firestore';
import Image from 'next/image';
import { auth } from '../firebase';

export type ChatMessageProps = {
  text: string;
  uid: string;
  createdAt: Timestamp;
  photoURL: string;
};

export const ChatMessage = ({ photoURL, text, uid, createdAt }: ChatMessageProps) => {
  const messageClass = uid === auth?.currentUser?.uid ? 'sent' : 'received';
  return (
    <div className={`m-3 ${messageClass} flex items-center`}>
      <Image src={photoURL} className='mr-2 rounded-full' width={48} height={48} alt="profile picture" />
      <p className='p-3 mx-2 text-white align-middle bg-purple-600 border rounded-full textMessage'>{text}</p>
    </div>
  );
};