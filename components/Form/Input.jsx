
const Input = (props) => {
    // console.log(props);
    const { errorMessage, touched, placeholder, ...inputProps } = props
    return (
        <div className="w-full">
            <label className="relative block">
                <input
                    type="text"
                    className={`h-14 w-full border mb-5 outline-none rounded-md px-4 peer ${errorMessage && touched ? "border-red-500" : "border-primary"}`}
                    required
                    {...inputProps}
                />
                <span className="capitalize absolute top-3 px-4 left-0 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-500 peer-valid:top-0 peer-valid:text-xs peer-valid:text-gray-500 transition-all">{placeholder}</span>
                {touched ? <span className="text-red-500 text-sm block mb-3">{errorMessage}</span> : ""}
            </label>
        </div>
    )
}

export default Input