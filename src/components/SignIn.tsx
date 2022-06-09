import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export const SignIn = () => {
  const signIn = () => signInWithPopup(auth, googleProvider);

  return <button onClick={signIn}>Sign in with Google</button>;
};
