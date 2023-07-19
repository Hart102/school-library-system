const Button = ({ type, btnText, onclick, style }) => {
    return (
        // <div>
            <button
                type={type}
                onClick={onclick}
                className={`btn my-2 ${style}`}>
                {btnText}
            </button>
        // </div>
    )
}

export default Button