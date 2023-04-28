import { Link } from "react-router-dom"

const Result = ({value, persons})=> { 
    //value = {persons: cantPersons , money: cantMoneyTotal}
    //persons = {name, money}

    let totalMoney = value[0].money / value[0].persons
    let newArray = []

    persons.map(person=> {
        newArray.push({name: person.name, money: Math.round(person.money- totalMoney), data: ''})
        newArray.sort((x,y) => x.money - y.money) //ordenamos de menor a mayor
        return (newArray)
    })
    
    newArray.map(person => {
        if (person.money < 0) {

            while (person.money !== 0) {
                let p = newArray.find(person => person.money > 0)

                if ((person.money * -1) > p.money) {
                    person.data === '' ? 
                    person.data = `-${person.name} gives $${p.money} to ${p.name} ` : 
                    person.data = person.data + `and $${p.money} to ${p.name} `

                    person.money = ((person.money * -1) - p.money) * -1
                    p.money = 0
                } else {
                    person.data === '' ? 
                    person.data = `-${person.name} gives $${(person.money * -1)} to ${p.name} ` :
                    person.data = person.data + `and $${(person.money * -1)} to ${p.name} `

                    p.money = p.money - (person.money * -1)
                    person.money = 0
                } 
            }
        } 
        return newArray
    })
    
    console.log(newArray)
    
    return (
        <div className="data">
            {newArray.map(per => {
            if (per.data !== '') {
                return <p key={per.name} className="data__person">{per.data}</p>
            }
        })}
        <Link to='/' className="data__back">Back</Link>
        </div>
    )

}

export default Result

