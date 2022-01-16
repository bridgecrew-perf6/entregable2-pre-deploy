
const Button = ({mostrarOcultar}) => {
    return (
        <div>
            <input
                id="cambiar"
                type='submit' 
                onClick={mostrarOcultar}
                value='Change Cº to Fº'
                className="button"  
            />
        </div>
    )
}



export default Button
