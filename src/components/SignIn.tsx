import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export const SignIn = () => {
  const signIn = () => signInWithPopup(auth, googleProvider);

  return (
    <button
      className="inline-block px-6 py-2.5 shadow-md focus:bg-blue-700 hover:bg-blue-700 bg-blue-600 text-white rounded focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      onClick={signIn}
    >
      Sign in with Google
    </button>
  );
};
