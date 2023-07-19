import { Title } from "../Title"
import { CardContent } from "./CardContent"
import { Card } from "./Card"

const Overview = () => {
    return (
        <section className="overview row bg-white rounded shadow-sm py-3 px-3">
            <Title text='overview' />
            <span className="border-bottom"></span>
            <span className="mb-3"></span>
            {CardContent && CardContent.map((content) => (
                <div className='col-md-4'  key={content.id}>
                    <Card
                        text={content.text}
                        title={content.title}
                        className={`icon ${content.id}`}
                        icon={<content.icon color="white"/>}
                    />
                </div>
            ))}
        </section>
    )
}

export default Overview