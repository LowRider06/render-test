
const PersonForm = ({addPerson, newName, handleNameChange,
                        newNumber, handleNumberChange
        }) => {
    return(
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
    )
}

export default PersonForm