import Members from '../../components/Members/Members'
import Overview from "../../components/Overview/Overview"
import { SearchMembers } from "../../components/Search/SearchMembers"
import { TableLayout, ResponsiveTable, Table } from "../../components/Table/Table"

const Index = () => {
  return (
    <>
      <Overview />
      <TableLayout >
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