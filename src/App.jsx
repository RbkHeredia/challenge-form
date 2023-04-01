import { useState } from 'react';
import bgDesktop from '/images/bg-main-desktop.png'
import './App.css';
import FormCard from './components/form';
import CardFront from './components/card-front';
import CardBack from './components/card-back';

function App() {

  const [dates, setDates] = useState({name:'hola'})


  const onChange = (event) =>{
    const value = event.target.value;
    const name = event.target.name;
    setDates({
      ...dates, [name]: value
    });
  }

  const handleForm = ({name, value}) =>{
    setDates({
      ...dates, [name]: value
    })
  }


  return (
    <div className="App">
      <img className='image' src={bgDesktop} alt=''/>
      <FormCard dates={dates} onChange={onChange} handleForm={handleForm}/>
      <CardFront cardNumber={dates.cardNumber} name={dates.name} mm={dates.mm} yy={dates.yy}/>
      <CardBack cvc={dates.cvc}/>
    </div>
  )
}

export default App
