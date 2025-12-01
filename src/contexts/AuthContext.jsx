import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For local testing with mock keys, we can bypass Firebase auth state listener
    // if the keys are mocks. But to keep it simple, we'll try to listen.
    // If it fails or hangs, we might need a fallback.

    // MOCK USER FOR TESTING
    if (import.meta.env.VITE_FIREBASE_API_KEY === 'mock_key') {
       console.log("Using mock auth user");
       setCurrentUser({ email: 'test@example.com', uid: 'test-uid' });
       setLoading(false);
       return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
