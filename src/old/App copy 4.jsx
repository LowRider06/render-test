import { useState } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState(
    [
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]
  ) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      important: Math.random() > 0.5,
      id: persons.length + 1,
    }
   
   let nameExists = persons.find(person => person.name === newName)
   let numberExists = persons.find(person => person.number === newNumber)

    if(nameExists || numberExists) {
      alert(`name ${newName} or number ${newNumber}is already in the Phonebook`)
    } 
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }  
  }

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
    let form = event.target
    console.log(form)
    console.log(form.value)

  }

  const handleFilterChange = (event) => {
    event.preventDefault()
    console.log(`filter value = ${event.target.value} `)
    setFilter(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with
        <input
          value={filter}
          onChange={handleFilterChange}
          name="filter"
        />

      </div>

      <h2>
        Add new
      </h2>

      <form onSubmit={addPerson}>
        <div>
          name: 
          <input
            value={newName}
            onChange={handleNameChange}
            name="name"
          />
        </div>
        <div>
          number: 
            <input
            value={newNumber}
            onChange={handleNumberChange}
            name="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>


          <Filter  persons={persons} filter={filter}/>

      </ul>
    </div>
  )
}


export default App