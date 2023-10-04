import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Footer from './components/Footer'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'
import axios from 'axios'
import personService from './services/persons'

import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)


  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, []) 

  const updatePerson = (event) => {
    event.preventDefault()

    let existingPerson = persons.find(person => person.name === newName)
    
    const personObject = {
      name: newName,
      number: newNumber,
      important: existingPerson.important,
      id: existingPerson.id,
    }
      // set notification message
    setNotificationMessage(`updated  ${personObject.name}`)

      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)

    personService
    .update(existingPerson.id, personObject)
    .then(response => {
      //setPersons(persons.concat(response.data))
      personService.getAll().then((persons) => {
          setPersons(persons.data)
      })
      setNewName('')
      setNewNumber('')
    })    

  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      important: Math.random() > 0.5,
      id: uuidv4(),
    }
   
   let nameExists = persons.find(person => person.name === newName)
   // let numberExists = persons.find(person => person.number === newNumber)


    if(nameExists) {
      // name already exists update the number
      if (window.confirm(`Do you really want to update the number for ${newName}`)) {
        /*

        */
        updatePerson(event)
      }

    } else {
      // set notification message
      setNotificationMessage(`added  ${personObject.name}`)
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
      
      // new name create phonebook entry
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
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
  }

  const handleFilterChange = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <ErrorMessage message={errorMessage} />
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
      < PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
                    newNumber={newNumber} handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <ul>
        {
          //  <Filter  persons={persons} addPerson={addPerson} filter={filter}/>
          <Filter  persons={persons} setPersons={setPersons} filter={filter} setErrorMessage={setErrorMessage}/>
        }  
      </ul>
      <Footer />
    </div>
  )
}

export default App