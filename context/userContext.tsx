import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import firebase from 'firebase/app';

interface IUserContext {
  user?: firebase.UserInfo | null;
  setUser?: {};
  loadingUser?: boolean;
}

export const UserContext = createContext<IUserContext>({});

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<firebase.UserInfo | null>();
  const [loadingUser, setLoadingUser] = useState<boolean>(true);

  useEffect(() => {
    // listen for authenticated user
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          // user is signed in
          const {
            uid,
            displayName,
            email,
            phoneNumber,
            photoURL,
            providerId,
          } = user;
          setUser({
            uid,
            displayName,
            email,
            phoneNumber,
            photoURL,
            providerId,
          });
        } else setUser(null);
      } catch (error) {
        // probably a connection error, handle accordingly
      } finally {
        setLoadingUser(false);
      }
    });

    // unsubscribe auth listener on unmount
    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
