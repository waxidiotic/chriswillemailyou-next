import { Pane, Spinner } from 'evergreen-ui';

export default function FullPageSpinner() {
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
    >
      <Spinner />
    </Pane>
  );
}
