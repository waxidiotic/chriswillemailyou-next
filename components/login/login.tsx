import { useState, FormEvent } from 'react';
import {
  Button,
  Heading,
  IconButton,
  Pane,
  SegmentedControl,
  TextInputField,
  ArrowLeftIcon,
} from 'evergreen-ui';
import { LoginMethod, AuthAction } from './types';
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

const Login = () => {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('PASSWORD');
  const [authAction, setAuthAction] = useState<AuthAction>('LOGIN');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        height={400}
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
        <Heading size={700} marginBottom={authAction !== 'LOGIN' ? 24 : 0}>
          {getAuthActionText(authAction)}
        </Heading>
        {authAction === 'LOGIN' ? (
          <SegmentedControl
            width={300}
            margin={24}
            value={loginMethod}
            options={[
              { label: 'Login with Password', value: 'PASSWORD' },
              // { label: 'Request Login Email', value: 'MAGIC_LINK' },
            ]}
            onChange={(value) => setLoginMethod(value as LoginMethod)}
          />
        ) : null}
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
        {loginMethod === 'PASSWORD' ? (
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
        <Button
          appearance="primary"
          marginBottom={16}
          isLoading={isLoading}
          onClick={() => {
            setIsLoading(true);
            if (authAction === 'LOGIN') {
              login(loginMethod, emailAddress, password).then(() =>
                setIsLoading(false)
              );
            } else if (authAction === 'REGISTER') {
              register(emailAddress, password).then(() => setIsLoading(false));
            } else {
              resetPassword(emailAddress).then(() => setIsLoading(false));
            }
          }}
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
};

export default Login;
