import { BooksTable } from "../../components/BooksTable"
import Overview from '../../components/Overview/Overview'
import SearchBooks from "../../components/Search/SearchBooks"
import { TableLayout, ResponsiveTable, Table } from "../../components/Table"

const Books = () => {
    return (
        <>
            <Overview />
            <TableLayout>
                <b>Books</b>
                <SearchBooks />
                <ResponsiveTable>
                    <Table>
                        <BooksTable />
                    </Table>
                </ResponsiveTable>
            </TableLayout>
        </>
    )
}

export default Books
