import type { NextPage } from 'next';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../src/firebase';
import { Auth } from '../src/components/Auth';
import { ChatRoom } from '../src/components/ChatRoom';

const Home: NextPage = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="chatApp">
      <header className="flex flex-wrap items-center justify-between w-full p-3 bg-black realtive">
        <h1 className="text-2xl font-bold text-white">🔮 Chat App 🔮</h1>
        <Auth />
      </header>
      {user && <ChatRoom />}
    </div>
  );
};

export default Home;
