import { auth } from '../firebase';

export const SignOut = () => {
  return (
    auth.currentUser && (
      <>
        <button
          className="inline-block px-6 py-2.5 shadow-md focus:bg-blue-700 hover:bg-blue-700 bg-blue-600 text-white rounded focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      </>
    )
  );
};
