const Button = ({className, text})=>{
    return(
        <button className={[className, 'btn'].join(' ')}>{text}</button>
    )
}

export default Button