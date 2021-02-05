import firebase from 'firebase';

export type AuthAction = 'LOGIN' | 'REGISTER' | 'RESET_PASSWORD';
export type AuthError = firebase.auth.Error;
