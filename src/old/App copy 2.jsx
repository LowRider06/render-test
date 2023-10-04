import { useState } from 'react'
import Person from '../components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  

/*
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction",


const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
*/

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      important: Math.random() > 0.5,
      id: persons.length + 1,
    }
   
   let nameExists = persons.find(person => person.name === newName)

    if(nameExists) {
      alert(`${newName} is already in the Phonebook`)
    } 
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }  
  }

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
    console.log(event.target.value)
    console.log(newName)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}


export default App