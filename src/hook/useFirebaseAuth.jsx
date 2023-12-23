import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../firebase/auth';

const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { user, loading };
};

export default useFirebaseAuth;