import firebase from 'firebase';
import 'firebase/auth';
import { LoginMethod } from './types';

const login = async (method: LoginMethod, email: string, password?: string) => {
  if (method === 'MAGIC_LINK') {
    // login with magic link
    return;
  }

  // login with email address and password
  if (password) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  }
};

const register = async (email: string, password: string) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.error(error);
  }
};

const resetPassword = async (email: string) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
  } catch (error) {
    console.error(error);
  }
};

export { login, register, resetPassword };
