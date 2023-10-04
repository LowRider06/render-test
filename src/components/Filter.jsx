
import Person from './Person'


const Filter = ({persons, setPersons, filter, setErrorMessage}) => {

    const getFilteredPersons = () => {
        return persons.filter(person => person.name.includes(filter))
    }

    return (
        <div>
            
            {getFilteredPersons().map((person) => {
                return (
                    <Person key={person.id} person={person} 
                    // for rerendering in Delete Button
                    persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage}/>
                )
            })}
        </div>
        
    )
}


export default Filter