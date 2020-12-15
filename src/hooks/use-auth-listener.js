import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

// Listener will allow us to be aware of the users state
// using the following custom hook

//this function will help us keep the user signed in, if they close the tab for example

export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
          if (authUser) {
            localStorage.setItem('authUser', JSON.stringify(authUser));
            setUser(authUser);
          } else {
            localStorage.removeItem('authUser');
            setUser(null);
          }
        });
    
        return () => listener();
      }, []);
    
      return { user };
    }
