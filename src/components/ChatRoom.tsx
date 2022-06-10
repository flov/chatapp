import { collection } from 'firebase/firestore';
import { Fragment } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import { ChatMessage } from './ChatMessage';
import { MessageForm } from './MessageForm';
import { Circles } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const ChatRoom = () => {
  const [value, loading, error] = useCollection(collection(db, 'messages'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  return (
    <>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && (
        <div className="flex justify-center align-middle mt-14">
          <Circles color="#00BFFF" height={100} width={100} />
        </div>
      )}
      {value &&
        value.docs.map((doc) => {
          const data = doc.data();
          return (
            <Fragment key={doc.id}>
              <ChatMessage
                photoURL={data.photoURL}
                createdAt={data.createdAt}
                uid={data.uid}
                text={data.text}
              />
            </Fragment>
          );
        })}
      <MessageForm />
    </>
  );
};
