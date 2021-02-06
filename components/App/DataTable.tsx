import { Table } from 'evergreen-ui';

export default function DataTable() {
  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>Date</Table.TextHeaderCell>
        <Table.TextHeaderCell>Venue</Table.TextHeaderCell>
        <Table.TextHeaderCell>People</Table.TextHeaderCell>
        <Table.TextHeaderCell>Total Cost</Table.TextHeaderCell>
        <Table.TextHeaderCell>Paid</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          {' '}
          <Table.TextCell>1 Feb 2021</Table.TextCell>
          <Table.TextCell>Flying Cock</Table.TextCell>
          <Table.TextCell>0</Table.TextCell>
          <Table.TextCell>$127.40</Table.TextCell>
          <Table.TextCell>-</Table.TextCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
