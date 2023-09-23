import { auth } from '../firebassApp';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return user;
};

export default useAuth;
