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
          value.docs.map((doc) => (
            <Fragment key={doc.id}>
              <ChatMessage {...doc.data()} />
            </Fragment>
          ))}
      </div>
      <MessageForm />
    </>
  );
};
