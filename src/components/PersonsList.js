const PersonsList = ({persons})=> {
    return (
        <ul className="persons__personslist">
            {persons.map(person => {
                return (
                    <li key={person.name} className="persons__personslist__li">
                        <p className="persons__personslist__li-name">-{person.name}</p>
                        <p className="persons__personslist__li-money">${person.money}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default PersonsList