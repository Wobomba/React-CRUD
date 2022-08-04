// Importing Components
import Header from './components/Header';
import Citizens from './components/Citizens';
import AddCitizen from './components/AddCitizen';
// Importing React Hooks
import { useState, useEffect } from 'react';
// Importing Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";

function App() {
    // All States
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [citizens, setCitizens] = useState([]); // Task State
    const [showAddCitizen, setShowAddCitizen] = useState(false); // To reveal add task form

    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3500);
    }, [])

    // Fetching from Local Storage
    const getCitizens = JSON.parse(localStorage.getItem("citizenAdded"));

    useEffect(() => {
        if (getCitizens == null) {
            setCitizens([])
        } else {
            setCitizens(getCitizens);
        }
        // eslint-disable-next-line
    }, [])

    // Add Task
    const addCitizen = (citizen) => {
        const id = uuidv4();
        const newCitizen = { id, ...citizen }

        setCitizens([...citizens, newCitizen]);

        Swal.fire({
            icon: 'success',
            title: 'Congrats',
            text: 'Detail added'
        })

        localStorage.setItem("citizenAdded", JSON.stringify([...citizens, newCitizen]))
    }

    // Delete Task
    const deleteCitizen = (id) => {
        const deleteCitizen = citizens.filter((citizen) => citizen.id !== id)

        setCitizens(deleteCitizen);

        Swal.fire({
            icon: 'success',
            title: 'Oops!',
            text: 'Delete successful'
        })

        localStorage.setItem("citizenAdded", JSON.stringify(deleteCitizen))
    }

    // Edit Task
    const editCitizen = (id) => {

        const names1 = prompt("Name:")
        const Nin1 = prompt("National Identification Number:")
        const contacts = prompt("Contact:")
        const type_of_vaccination = prompt("Type of Vaccination:")
        const date_of_vaccination = prompt("Date of Vaccination:")
        const gender = prompt("Gender:")
        const incharge = prompt("Incharge:")
        const district = prompt("District")
        const date_of_birth = prompt ("Date of Birth")



        let data = JSON.parse(localStorage.getItem('citizenAdded'))

        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    names1: names1,
                    Nin1: Nin1,
                    contacts: contacts,
                    type_of_vaccination: type_of_vaccination,
                    date_of_vaccination: date_of_vaccination,
                    date_of_birth: date_of_birth,
                    gender: gender,
                    incharge: incharge,
                    district: district,
                    id: uuidv4()
                }
            }
            return x;
        })

        Swal.fire({
            icon: 'success',
            title: 'Congrats',
            text: 'Edit complete'
        })

        localStorage.setItem("citizenAdded", JSON.stringify(myData));
        window.location.reload();
    }

    return (
        <>
        {/*Visually hidden loading icons */}
            {
                loading
                    ?
                    <div className="spinnerContainer">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="container">
                        {/* App Header that has open and App Name */}
                        <Header showForm={() => setShowAddCitizen(!showAddCitizen)} changeTextAndColor={showAddCitizen} />

                        {/* Revealing of Add Task Form */}
                        {showAddCitizen && <AddCitizen onSave={addCitizen} />}

                        {/* Task Counter */}
                        <h3>Number of Citizens: {citizens.length}</h3>

                        {/* Displaying of available citizens */}
                        {
                            citizens.length > 0
                                ?
                                (<Citizens citizens={citizens} onDelete={deleteCitizen} onEdit={editCitizen} />)
                                :
                                ('No Citizen Found!')
                        }
                    </div>
            }
        </>
    )
}

export default App;