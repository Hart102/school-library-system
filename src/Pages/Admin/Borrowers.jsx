import BorrowersTable from "../../components/BorrowersTable/BorrowersTable"
import Overview from "../../components/Overview/Overview"
import SearchMembers from "../../components/Search/SearchMembers"
import { ResponsiveTable, Table, TableLayout } from "../../components/Table/Table"
import Title from "../../components/Title"

const Borrowers = () => {
  return (
    <>
      <Title text={"Borrowers"} />
      <Overview />
      <TableLayout >
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