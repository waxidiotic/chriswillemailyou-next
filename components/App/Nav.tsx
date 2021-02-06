import { IconButton, LogOutIcon, Pane, Strong, Text } from 'evergreen-ui';

export default function Nav() {
  return (
    <Pane
      width="100%"
      height={48}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Text size={400}>Logged in as&nbsp;</Text>
      <Strong size={400}>Alex Bussey</Strong>
      <IconButton icon={LogOutIcon} marginLeft={16} />
    </Pane>
  );
}
