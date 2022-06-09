import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../src/firebase';
import { Auth } from '../src/components/Auth';
import { ChatRoom } from '../src/components/ChatRoom';

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="chatApp">
      <header></header>
      <div className={styles.container}>
        <Auth />
        {user && <ChatRoom />}
      </div>
      <footer></footer>
    </div>
  );
};

export default Home;
