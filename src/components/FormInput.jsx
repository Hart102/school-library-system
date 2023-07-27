const FormInput = ({ label, value, inputRef, type, placeholder, onchange, className }) => {
    return (
        <div className="col-md-5 mb-3">
            <label
                htmlFor={label} className="text-capitalize fw-light">
                {label}
            </label>
            <br />
            <input
                type={type}
                value={value}
                ref={inputRef}
                onChange={onchange}
                placeholder={placeholder}
                className={`form-control bg-transparent ${className}`}
            />

        </div>
    )
}

export default FormInput