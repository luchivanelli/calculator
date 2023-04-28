import { Link } from "react-router-dom"
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import Step from "./Step"

const Section3 = ()=> {
    return (
        <div className="section3">
            <h3 className="section3__h3">Its operation</h3>
            <Step
            number='1'
            img={img1}
            info="The calculator has a small form, where the corresponding data will be filled in"
            />
            <Step 
            number='2'
            img={img2}
            info="The first thing to do is add a person. For that, we write the name and then the amount of money it spent. When you're done, click the 'Add' button"
            />
            <Step 
            number='3'
            img={img3}
            info="Once the information of all the people is completed, the only thing left is to press the 'Calculate' button"
            />
            <Step 
            number='4'
            img={img4}
            info="Magically, you are told how much money one person should give to the other. To finish, press the 'Back' button"
            />
            <Link className="section3__a" to='/calculator'>Try it now!</Link>
        </div>
    )
}

export default Section3