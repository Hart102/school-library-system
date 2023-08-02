import { BooksTable } from "../../components/BooksTable/BooksTable"
import Overview from '../../components/Overview/Overview'
import SearchBooks from "../../components/Search/SearchBooks"
import { TableLayout, ResponsiveTable, Table } from "../../components/Table/Table"
import Title from "../../components/Title"

const Books = () => {
    return (
        <>
            <Title text={"Books"}/>
            <Overview />
            <TableLayout>
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
