import Citizen from './Citizen';
import "../index.css"
{/*Parameters for the button.js file specially for the button add/close */}
const Citizens = ({ citizens, onDelete, onEdit }) => {
    return (
        <>
            {citizens.map((citizen) => (<Citizen key={citizen.id} citizen={citizen} onDelete={onDelete} onEdit={onEdit} />))}
        </>
    )
}

export default Citizens;
