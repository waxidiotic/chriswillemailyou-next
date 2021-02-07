import { IconButton, LogOutIcon, Pane, Strong, Text } from 'evergreen-ui';

import { logout } from '@components/utils';

export default function Nav() {
  return (
    <Pane
      height={48}
      margin={16}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Text size={400}>Logged in as&nbsp;</Text>
      <Strong size={400}>Alex Bussey</Strong>
      <IconButton icon={LogOutIcon} marginLeft={16} onClick={logout} />
    </Pane>
  );
}
