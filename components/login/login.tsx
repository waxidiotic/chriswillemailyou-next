import { useState, FormEvent } from 'react';
import {
  Button,
  Heading,
  IconButton,
  Pane,
  TextInputField,
  ArrowLeftIcon,
  Alert,
} from 'evergreen-ui';

import { AuthAction, AuthError } from './types';
import { login, register, resetPassword } from './utils';

const getAuthActionText = (authAction: AuthAction) => {
  switch (authAction) {
    case 'REGISTER':
      return 'Register';
    case 'RESET_PASSWORD':
      return 'Reset Password';
    default:
    case 'LOGIN':
      return 'Login';
  }
};

export default function Login() {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authAction, setAuthAction] = useState<AuthAction>('LOGIN');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<AuthError>();

  const handleFormAction = async () => {
    setIsLoading(true);

    if (authAction === 'LOGIN') {
      try {
        await login(emailAddress, password);
      } catch (error) {
        setHasError(error);
      }
    } else if (authAction === 'REGISTER') {
      try {
        await register(emailAddress, password);
      } catch (error) {
        setHasError(error);
      }
    } else {
      try {
        await resetPassword(emailAddress);
      } catch (error) {
        setHasError(error);
      }
    }

    setIsLoading(false);
  };

  return (
    <Pane
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      background="tint2"
    >
      <Pane
        elevation={1}
        width={400}
        paddingY={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        background="tint1"
      >
        {authAction !== 'LOGIN' ? (
          <IconButton
            icon={ArrowLeftIcon}
            marginBottom={16}
            onClick={() => setAuthAction('LOGIN')}
          />
        ) : null}
        <Heading size={700} marginBottom={24}>
          {getAuthActionText(authAction)}
        </Heading>
        <TextInputField
          id="email"
          value={emailAddress}
          width={300}
          label="Email Address"
          type="email"
          onChange={(e: FormEvent) =>
            setEmailAddress((e.target as HTMLInputElement).value)
          }
          required
        />
        {authAction !== 'RESET_PASSWORD' ? (
          <TextInputField
            id="password"
            value={password}
            width={300}
            label="Password"
            type="password"
            onChange={(e: FormEvent) =>
              setPassword((e.target as HTMLInputElement).value)
            }
            required
          />
        ) : null}
        {hasError ? (
          <Pane width={300}>
            <Alert intent="danger" title="Error" marginBottom={24}>
              {hasError.message}
            </Alert>
          </Pane>
        ) : null}
        <Button
          appearance="primary"
          marginBottom={16}
          isLoading={isLoading}
          onClick={handleFormAction}
        >
          {getAuthActionText(authAction)}
        </Button>
        {authAction !== 'RESET_PASSWORD' ? (
          <Pane display="flex">
            <Button
              appearance="minimal"
              onClick={() => setAuthAction('RESET_PASSWORD')}
            >
              Reset Password
            </Button>
            {authAction !== 'REGISTER' ? (
              <Button
                appearance="minimal"
                onClick={() => setAuthAction('REGISTER')}
              >
                Register
              </Button>
            ) : null}
          </Pane>
        ) : null}
      </Pane>
    </Pane>
  );
}
