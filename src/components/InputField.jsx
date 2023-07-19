const InputField = ({ objectValue, onchange, value, index }) => {
    const { label, type, placeholder } = objectValue;
    return (
        <div className="col-md-5 mb-3">
            <label
                htmlFor={label}
                className="text-capitalize fw-light">
                {label}
            </label>
            <br />
            <input
                type={type || 'text'}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onchange(e, index)}
                className="form-control bg-transparent"
            />
        </div>
    )
}

export default InputField