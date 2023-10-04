import DeleteButton from './DeleteButton'

const Person = ({ person, persons, setPersons, setErrorMessage}) => {


  return (
    <li key={person.id} className='person'> {person.name} {' '} {person.number} 
    <DeleteButton id={person.id} setErrorMessage={setErrorMessage}
     persons={persons} setPersons={setPersons}/></li>
  )
}

export default Person