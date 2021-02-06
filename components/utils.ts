/* eslint-disable no-useless-catch */
import firebase from 'firebase';

import 'firebase/auth';

const login = async (email: string, password: string) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  await firebase.auth().signOut();
};

const register = async (email: string, password: string) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    throw error;
  }
};

const resetPassword = async (email: string) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
  } catch (error) {
    throw error;
  }
};

export { login, logout, register, resetPassword };
