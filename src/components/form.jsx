import { useState } from 'react';
import "../styles/form.css";


export default function FormCard({ handleForm, dates, isValidate }) {
  const [errors, setErrors] = useState({name:'', cardNumber:''})
  const [validField, setValidField] = useState({
    name:false,
    cardNumber:false,
    mm:false,
    yy:false,
    cvc:false
  })
  const [message, setMessage] = useState('')

  const validateName = (name) =>{
    return /^[a-zA-Z ]+$/.test(name)
  }

  const validateNumber = (number) =>{
    return /[\/#!$%\^&\*;:{}=\-_`~()”“"…]/.test(number)
  }

  const handleCard = (event ) => {
    let maxLength = event.target.maxLength;
    let option = event.target.name;
    let value = event.target.value;
    
    if (value.length <= maxLength) {
      handleForm({name:option, value:value });
    } else setValidField({...validField, [option]:false})

    if (option === 'name'){
      if (!validateName(value)){
        setErrors({...errors, [option]:'Wrong format'})
        setValidField({...validField, name:false})
      } else {
        setErrors({...errors, [option]:''})
        if (value.length >= 4 && !errors.name){
          setValidField({...validField, name:true})
        } else setValidField({...validField, name:false})
      }
    }
    
    if (option === 'cardNumber' || option === 'mm' || option === 'yy' || option === 'cvc' ){
      if (validateNumber(value)){
        setErrors({...errors, [option]:'Wrong format'})
      } else {
        setErrors({...errors, [option]:''})
        if (value.length >= maxLength){
          setValidField({...validField, [option]:true})
        } 
      }
    }
  };
  
  const handleSubmit = (event) =>{
    
    event.preventDefault()
    if (validField.name && validField.cardNumber && validField.mm && validField.yy && validField.cvc){
      isValidate();
    } else {
      setMessage("Can't be blank")
    } 
    
  }
  return (
    
        
         <form className='form' >

          <div className='input-section'>
            <label htmlFor="name">Cardholder name</label>
            <input onChange={handleCard} maxLength={15} value={dates.name} placeholder="e.g. Jane Applessed" name="name" className='input' id='name'/>
            {errors.name && <p className='span' >{errors.name}</p>}
            {!validField.name && <p className='span' >{message}</p>}
          </div>

          <div className='input-section'>
            <label htmlFor="cardNumber">Card number</label>
            <input type='number' value={dates.cardNumber} onChange={handleCard} maxLength={16} placeholder="e.g. 1234 5678 9123 0000" name="cardNumber" className='input' id='cardNumber'/>
            {errors.cardNumber && <p className='span' >{errors.cardNumber}</p>}
            {!validField.cardNumber && <p className='span' >{message}</p>}
          </div>

          <div className="input-section2">
            
            <div className="date-section">
            <p className='exp'>exp. date (MM/YY)</p>

              <div className="dates">
                <div className='input-section short'>
                <input maxLength={2} onChange={handleCard} value={dates.mm} aria-label="exp.date MM" placeholder='MM' name="mm" type='number' className='input' id='mm'/>
                {errors.mm && <p className='span' >{errors.mm}</p>}
                {!validField.mm && <p className='span' >{message}</p>}
                </div>
                <div className='input-section short'>
                <input maxLength={2} onChange={handleCard} value={dates.yy} aria-label="exp.date YY" placeholder='YY' name="yy" type='number' className='input' id='yy'/>
                {errors.yy && <p className='span' >{errors.yy}</p>}
                {!validField.yy && <p className='span' >{message}</p>}
                </div>
              </div>
            </div>
            <div className="date-section">
              <label htmlFor="name">cvc</label>
              <input maxLength={3} onChange={handleCard} value={dates.cvc} placeholder="e.g. 123" name="cvc" type='number' className='input' id='cvc'/>
              {!validField && <p className='span' >{message}</p>}
              {!validField.cvc && <p className='span' >{message}</p>}

            </div>
          </div>
           
          <div className="input-section2">
           <button onClick={handleSubmit}>Confirm</button>
          </div>
         </form>
       
   
  );
}
