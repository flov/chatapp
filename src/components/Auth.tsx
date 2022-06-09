import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { SignOut } from './SignOut';
import { SignIn } from './SignIn';

export const Auth = () => {
  const [user, loading, error] = useAuthState(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
        <SignOut />
      </div>
    );
  }
  return <SignIn />;
};
