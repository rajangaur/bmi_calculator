import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState(0);
  
  //LOGIC
  let calcBmi = (e) => {
    e.preventDefault(); 
    if(weight === 0 || height === 0){
      alert("Please Enter correct Weight and Height");
    }else{
      let bmi = (weight/(height*height)*703);
      setBmi(bmi.toFixed(1));

      //

      if(bmi<25){
        setMessage("You are UNDERWEIGHT");
      }else if(bmi >= 25 && bmi < 30){
        setMessage("You are a HealthyWEIGHT");
      }else{
        setMessage("You are OVERWEIGHT");
      }
    }
  }

  //RELOAD
  let reload = () => {
    window.location.reload();
  }



  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form>
          <div className='weight parameter'>
            <label>Weight (lbs) : </label>
            <input
            type="text"
            placeholder='Enter weight value'
            value={weight} 
            onChange={(event) =>  setWeight(event.target.value)}
            />
          </div>
          <div className='height parameter'>
            <label>Height (in) : </label>
            <input 
            type="text"
            placeholder='Enter height value'
            value={height} 
            onChange={(event) => setHeight(event.target.value)}
            />
            <div className="btn-container">
              <button className="btn" type="submit" onClick={(e) => calcBmi(e)}>Submit</button>
              <button className="btn btn-outline" type="submit" onClick={reload}>Reload</button>
            </div>
          </div>

          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

