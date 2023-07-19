export const FormInput = ({ label, value, inputRef, type, placeholder, onchange }) => {
    return (
        <div className="col-md-5 mb-3">
            <label
                htmlFor={label}
                className="text-capitalize fw-light">
                {label}
            </label>
            <br />
            <input
                type={type}
                value={value}
                ref={inputRef}
                placeholder={placeholder}
                onChange={onchange}
                className="form-control bg-transparent"
            />
        </div>
    )
}