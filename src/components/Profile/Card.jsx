const Card = ({ title, text }) => {
    return (
        <div className="col-md-4 text-center">
            <b>{title}</b>
            <p className="text-lowercase">{text}</p>
        </div>
    )
}

export default Card
