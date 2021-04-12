const Input = ({className, placeholder, value, onChange})=>{
    return(
        <input
            className={['input', className].join(' ')}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input