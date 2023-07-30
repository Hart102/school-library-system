const Text = ({ title, text }) => {
    return (
        <article className="w-100 px-lg-5 my-3">
            <b>{title} :</b> <p>{text}</p>
        </article>
    )
}

export default Text