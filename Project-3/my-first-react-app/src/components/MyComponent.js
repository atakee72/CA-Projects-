import Student from "./Student";
import "../styles/myStyle.css";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function MyComponent() {
    const nums = 1 + 5;
    const timeOfDay = "Morning";
    const greet = "Good morning!";
    const firstName = "Abdurrezzak";
    const surname = "Atak";
    const elephants = ["Ercan", "Roxanne", "Juli", "Can", "Santiago", "Olja", "Monique", "Monique"];

const [student, setStudent] = useState(elephants);



    return <div>
    <h2>Let's get high!</h2>
    <h3>{nums}</h3>
    {timeOfDay === "Morning" && <h4>{greet}</h4>}
    {timeOfDay === "Morning" ? <h5>{greet}</h5> : <h5>Good day!</h5>}
    {firstName === "Ercan" ? <h6>It is you, {firstName} {surname}</h6> : <h6>It is not you! It is {firstName}</h6> }
    <p>
        {elephants[5]}
        {elephants.map ((elephant, i) => {
            return <p key={i}>{i+1} - {elephant}</p>
        })
        }
        {elephants[5]}
        {elephants.map ((elephant, i) => {
            return <p key={i}><Student elephant = {elephant} /></p>
            
        })
        }
    </p>
    <p className="blue">SOme thext here</p>
    <Button>Bootstrap button</Button>
    <Button variant="danger">Primary</Button>
    
    </div>
}

export default MyComponent;