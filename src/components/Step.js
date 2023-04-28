const Step = ({number, img, info})=> {
    return (
        <div className="section3__step">
            <h4 className="section3__step__title">Step {number}:</h4>
            <p className="section3__step__info">{info}</p>
            <img className="section3__step__img" src={img}/>
        </div>
    )
}

export default Step