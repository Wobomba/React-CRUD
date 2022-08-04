{/*Button controlling the add and close functionality on the form */}
const Button = ({ color, text, onClick }) => {
    
    return <button onClick={onClick} style={{ backgroundColor: color }} className="btn">{text}</button>
}

export default Button
