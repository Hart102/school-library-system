export const Card = ({ className, icon, title, text }) => {
    return (
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center py-lg-0 py-5 shadow-sm">
            <div className={className}>{icon}</div>
            <div className="text-center my-3">
                <p className="text-uppercase fw-bold">{title}</p>
                <h1 className="fw-bold my-3">{text}</h1>
            </div>
        </div>
    )
}