import { Link } from "react-router-dom"

const Section2 = ()=> {
    return (
        <div className="section2">
            <h3 className="section2__h3">Description about <b>Friends Calculator</b></h3>
            <p className="section2__p">This calculator seeks to simplify any type of meeting. It is based on the expenses of each person and thus, determine the money that each of them should receive or deliver.</p>
            <p className="section2__p">The name of each person and the amount of money they have spent are entered. Only with these data, this calculator will determine the total amount and what corresponds to each one</p>
            <Link className="section2__a" to='/calculator'>Try it now!</Link>
        </div>
    )
}

export default Section2