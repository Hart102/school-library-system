import Members from '../../components/MembersTable'
import Overview from "../../components/Overview/Overview"
import SearchMembers from "../../components/Search/SearchMembers"
import { TableLayout, ResponsiveTable, Table } from "../../components/Table"

const Index = () => {
  return (
    <>
      <Overview />
      <TableLayout >
        <b>Members</b>
        <SearchMembers />
        <ResponsiveTable>
          <Table>
            <Members />
          </Table>
        </ResponsiveTable>
      </TableLayout>
    </>
  )
}

export default Index