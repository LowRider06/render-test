
import personService from '../services/persons'

const DeleteButton = ({id, persons, setPersons, setErrorMessage}) => {


    const deleteEntry = (id, persons, setPersons, setErrorMessage) => {
        const personToDelete = persons.filter((person) => person.id === id)[0]

        personService.deleteEntry(id, persons, setPersons)
        .catch((err) => {
            if(err.response.status === 404) {
                setErrorMessage(`error 404 entry not found ${personToDelete.name} it was probably already deleted`)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            }
        })
    }

    return (
        
        <button onClick={() => deleteEntry(id, persons, setPersons, setErrorMessage)}>delete entry</button> 
    )
}

export default DeleteButton