import { useState } from 'react';
import Swal from "sweetalert2";


const AddTask = ({ onSave }) => {
    const [names, setNames] = useState('');
    const [doB, setDoB] = useState('');
    const [niN, setNiN] = useState('');
    const [district, setDistrict] = useState('')
    const [doV, setDoV] = useState('');
    const [toV, setToV] = useState('');
    const [gender, setGender] = useState('');
    const [contact, setContact] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

{/*Input Validation */}
        if (!names && !doB && !NiN && !district && !doV && !toV && !gender && !contact) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task and date or close the form!'
            })
        } else if (!names && doB && names && niN && district && doV && toV && gender && contact) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task!'
            })
        } else if (names && !doB &&  niN && district && doV && toV && gender && contact) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your date!'
            })
        } else if (names && doB &&  !niN && district && doV && toV && gender && contact){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your date!'
            })
        } 

        else {
            onSave({ names, doB, niN, district, doV, toV, gender, contact });
        }

        {/*setting the instances in local storage */}
        setNames('');
        setDoB('');
        setContact('');
        setDistrict('');
        setToV('');
        setDoV('');
        setNiN('');
        setGender('');

    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            {/*Name */}
            <div className="form-control">
                <label>Name</label>
                <input type="text" placeholder="Name" value={names} onChange={(e) => setNames(e.target.value)} />
            </div>
        {/*}
                <input type="text" placeholder="Date of Birth" value={doB} onChange={(e) => setDoB(e.target.value)} />*/}
                
          

            {/*NIN */}
            <div className="form-control">
                <label>National Identification Number</label>
                <input type="text" placeholder="NIN" value={niN} onChange={(e) => setNiN(e.target.value)} />
            </div>

            {/*District */}
            <div className="form-control">
                <label>District</label>
                <input type="text" placeholder="District" value={district} onChange={(e) => setDistrict(e.target.value)} />
            </div>

            {/*Date of vaccination */}
            <div className="form-control">
                <label>Date of Vaccination</label>
                <input type="text" placeholder="Date of Vaccination" value={doV} onChange={(e) => setDoV(e.target.value)} />
            </div>

            {/*Type of vaccination */}
            <div className="form-control">
                <label>Type of Vaccination</label>
                <input type="text" placeholder="Type of Vaccination" value={toV} onChange={(e) => setToV(e.target.value)} />
            </div>

            {/*gender */}
          


            {/*Contact */}
            <div className="form-control">
                <label>Contact</label>
                <input type="tel" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
            </div>


            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask
