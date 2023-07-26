import * as Icon from 'react-bootstrap-icons'
import { useSelector } from "react-redux"
import Title from "../Title"
import { Card } from "./Card"



const Overview = () => {
    const membersList = useSelector((state) => state.members.value)
    const booksList = useSelector((state) => state.books.value)



    const overViewData = [
        {
            id: 'first-icon',
            title: 'Members',
            icon: Icon.People,
            text: membersList
        },
        {
            id: 'second-icon',
            title: 'total books',
            icon: Icon.Book,
            text: booksList 
        },
        {
            id: 'third-icon',
            title: 'borrowers',
            icon: Icon.People,
            text: membersList
        }
    ]

    return (
        <section className="overview row bg-white rounded shadow-sm py-3 px-3">
            <Title text='overview' />
            <span className="border-bottom"></span>
            <span className="mb-3"></span>

            {/* {overViewData.map((content, index) => (

                <div className='col-md-4' key={index}>
                    <Card
                        text={content.text.success.length}
                        title={content.title}
                        className={`icon ${content.id}`}
                        icon={<content.icon color="white" />}
                    />
                </div>
            ))} */}
        </section>
    )
}

export default Overview
