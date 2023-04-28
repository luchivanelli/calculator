import { useState } from "react"
import ErrorMessage from "./ErrorMessage"
import { useFormik } from "formik"
import PersonsList from "./PersonsList"
import Result from "./Result"

const Persons = ()=> {
    const [persons, setPersons] = useState([])
    const [value, setValue] = useState([])

    const calculateFunction = ()=> {
        const totalPersons = persons.length
        let totalMoney = 0
        persons.map(person => {
            totalMoney = totalMoney + parseInt(person.money)
            return totalMoney
        })
        setValue([{persons: totalPersons, money: totalMoney}])
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            money: ''
        },
        onSubmit: ({name, money})=> {
            if (name !== '' && money !== '') {
                setPersons([
                    ...persons,
                    {name: name, money: money}
                ])
            }
            
            formik.resetForm()
        }
    })



    return (
        <div className="persons">
            <h3 className="persons__title">Add person</h3>

            <form onSubmit={formik.handleSubmit} className="persons__form">
                <div className="persons__form__section">
                    <label>Name:</label>
                    <input className="persons__form__section__input" type="text" {...formik.getFieldProps('name')}/>
                    {formik.touched.name && formik.errors.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
                </div>
                <div className="persons__form__section">
                    <label>Spent money:</label>
                    <span>$</span><input className="persons__form__section__input" type="number"{...formik.getFieldProps('money')}/>
                    {formik.touched.money && formik.errors.money ? <ErrorMessage>{formik.errors.money}</ErrorMessage> : null}
                </div>
                <button type="submit" className="persons__form__submit">Add</button>
            </form>

            <PersonsList persons={persons}/>

            {persons.length !== 0 ? <button type="button" onClick={calculateFunction} className="persons__calculate">Calculate</button> : null}      

            {value.length === 1 ? <Result value={value} persons={persons} /> : null}
        </div>
    )
}

export default Persons

