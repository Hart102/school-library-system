const Card = ({ title, text }) => {
    return (
        <div className="col-md-4 text-center">
            <b>{title}</b><p>{text}</p>
        </div>
    )
}

export default Card
