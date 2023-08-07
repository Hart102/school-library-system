const Button = ({ type, btnText, onclick, style }) => {
    return (
        <button
            type={type}
            onClick={onclick}
            className={`btn btn-success my-2 ${style}`}>
            {btnText}
        </button>
    )
}

export default Button