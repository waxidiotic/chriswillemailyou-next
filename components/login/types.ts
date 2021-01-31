import firebase from 'firebase';

export type LoginMethod = 'PASSWORD' | 'MAGIC_LINK';
export type AuthAction = 'LOGIN' | 'REGISTER' | 'RESET_PASSWORD';
export type AuthError = firebase.auth.Error;
