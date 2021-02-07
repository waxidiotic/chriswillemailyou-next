import { Pane } from 'evergreen-ui';

import DataTable from './DataTable';
import Nav from './Nav';

export default function AuthenticatedApp() {
  return (
    <Pane marginX="auto" width="80vw">
      <Nav />
      <DataTable />
    </Pane>
  );
}
