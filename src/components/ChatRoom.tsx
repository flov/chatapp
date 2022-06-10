import { collection } from 'firebase/firestore';
import { Fragment } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import { ChatMessage } from './ChatMessage';
import { MessageForm } from './MessageForm';

export const ChatRoom = () => {
  const [value, loading, error] = useCollection(collection(db, 'messages'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <>
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && (
          <strong>Collection loading: {JSON.stringify(loading)}</strong>
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
      </div>
      <MessageForm />
    </>
  );
};
