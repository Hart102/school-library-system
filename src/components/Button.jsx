const Button = ({ 
    type, 
    btnText, 
    onclick, 
    style, 
    disabled
 }) => {
    return (
        <button
            type={type}
            onClick={onclick}
            disabled={disabled}
            className={`btn btn-success my-2 ${style}`}>
            {btnText}
        </button>
    )
}

export default Button