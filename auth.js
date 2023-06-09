import firebase from './firebase';

// Sign up with email and password
export const signUpWithEmailAndPassword = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

// Sign in with email and password
export const signInWithEmailAndPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

// Sign out
export const signOut = () => {
  return firebase.auth().signOut();
};

// Check if a user is authenticated
export const isUserAuthenticated = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
