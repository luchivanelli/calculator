import { NavLink } from "react-router-dom"

const Navbar = ()=> {
    return (
        <ul className="navbar">
            <li className="navbar__link">
                <NavLink to='/' className={({isActive})=> isActive ? 'navbar__link__a-active' : 'navbar__link__a'}>Home</NavLink>
            </li>
            <li className="navbar__link">
                <NavLink to='/calculatorApp' className={({isActive})=> isActive ? 'navbar__link__a-active' : 'navbar__link__a'}>Calculator</NavLink>
            </li>
        </ul>
    )
}

export default Navbar