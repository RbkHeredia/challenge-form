import { useState } from 'react';
import bgDesktop from '/images/bg-main-desktop.png'
import './App.css';
import FormCard from './components/form';
import CardFront from './components/card-front';
import CardBack from './components/card-back';
import Added from './components/added';

function App() {

  const [dates, setDates] = useState({
    name:'', 
    cardNumber:'',
    mm:'',
    yy:'',
    cvc:''  
  })

  const [isSubmitted, setIsSubmitted] = useState(false)


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

  const isValidate = () =>{
    setIsSubmitted(true)
    console.log(isSubmitted)
  }


  return (
    <div className="App">
      <img className='image' src={bgDesktop} alt=''/>
      {!isSubmitted 
        ? <FormCard isValidate={isValidate} dates={dates} onChange={onChange} handleForm={handleForm}/>
        : <Added />}
      
      <CardFront cardNumber={dates.cardNumber} name={dates.name} mm={dates.mm} yy={dates.yy}/>
      <CardBack cvc={dates.cvc}/>
    </div>
  )
}

export default App
