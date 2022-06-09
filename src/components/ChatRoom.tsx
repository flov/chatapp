import { PhoneMultiFactorGenerator } from 'firebase/auth';
import { getFirestore, collection, Timestamp } from 'firebase/firestore';
import Image from 'next/image';
import { Fragment } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { app, auth, db } from '../firebase';
import { MessageForm } from './MessageForm';

type ChatMessageProps = {
  text: string;
  uid: string;
  createdAt: Timestamp;
  photoURL: string;
};

const ChatMessage = ({ photoURL, text, uid, createdAt }: ChatMessageProps) => {
  const messageClass = uid === auth?.currentUser?.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <Image src={photoURL} width={96} height={96} alt="profile picture" />
      <p>{text}</p>
    </div>
  );
};

export const ChatRoom = () => {
  const [value, loading, error] = useCollection(collection(db, 'messages'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && (
          <strong>Collection loading: {JSON.stringify(loading)}</strong>
        )}
        {value &&
          value.docs.map((doc) => (
            <Fragment key={doc.id}>
              <ChatMessage {...doc.data()} />
            </Fragment>
          ))}
      </p>
      <MessageForm />
    </>
  );
};
