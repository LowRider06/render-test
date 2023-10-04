import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteEntry = (id, persons, setPersons) => {
    const remainingPersons = persons.filter((person) => person.id !== id)
    const personToDelete = persons.filter((person) => person.id === id)[0]

    if (window.confirm(`Do you really want to delete ${personToDelete.name}`)) {
        setPersons(remainingPersons)
        return axios.delete(`${baseUrl}/${id}`)
    }
}
  

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  deleteEntry: deleteEntry
}