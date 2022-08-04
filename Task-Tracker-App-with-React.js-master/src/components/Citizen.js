import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"

const Citizen = ({ citizen, onDelete, onEdit }) => {
    return (
        <div>
            <div className="citizen">
                <div>
                    
                    <p className="citizenName">
                        <span className="textBold">Citizen Name:</span> {citizen.names}
                    </p>
                    <p className="citizenDate"><span className="textBold">Date of Birth:</span> {citizen.doB}</p>
                    <p className="citizenNin"><span className="textBold">National Identification Number:</span> {citizen.niN}</p>
                    <p className="citizendistrict"><span className="textBold">District:</span> {citizen.district}</p>
                    <p className="citizendoV"><span className="textBold">Date of Vaccination:</span> {citizen.doV}</p>
                    <p className="citizentoV"><span className="textBold">Type of Vaccination:</span> {citizen.toV}</p>
                    <p className="citizengender"><span className="textBold">Gender:</span> {citizen.gender}</p>
                    <p className="citizenContact"><span className="textBold">Contact:</span> {citizen.contact}</p>
                    <p className="citizenIncharge"><span className="textBold">Incharge:</span> {citizen.incharge}</p>
                </div>
                <div>
                    <p><FaTimes onClick={() => onDelete(citizen.id)} className="delIcon" /></p>
                    <p><FaPencilAlt onClick={() => onEdit(citizen.id)} className="editIcon" /></p>
                </div>
            </div>
        </div>
    )
}

export default Citizen
