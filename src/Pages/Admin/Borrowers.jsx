import BorrowersTable from "../../components/BorrowersTable"
import Overview from "../../components/Overview/Overview"
import SearchMembers from "../../components/Search/SearchMembers"
import { ResponsiveTable, Table, TableLayout } from "../../components/Table"

const Borrowers = () => {
  return (
    <>
      <Overview />
      <TableLayout >
       <b>Borrowers</b>
        <SearchMembers />
        <ResponsiveTable>
          <Table>
            <BorrowersTable />
          </Table>
        </ResponsiveTable>
      </TableLayout>
    </>
  )
}

export default Borrowers