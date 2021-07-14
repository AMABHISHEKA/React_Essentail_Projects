import React from "react"
import Button from './Button';
import "./style.css";

const App = () => {
    return(
       <div className="container">
           <h1>Hello All, Welcome to React Essentails Class</h1>
           <p style = {{textAlign : "center"}}>Let's upgrade is one of the best things.</p>
           <Button buttonText="Lets" />
           <Button buttonText="Upgrade" />
           <Button buttonText="Save class" />
       </div>
    )
}

export default App