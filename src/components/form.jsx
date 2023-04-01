import { useState } from 'react';
import "../styles/form.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required("Can't be blank"),
  cardNumber: Yup.number("Wrong formart, numbers only")
    .required("Can't be blank"),
  mm: Yup.number()
    .max(2, 'Too Long!')
    .required("Can't be blank"),
  yy: Yup.number()
    .max(99, 'Too Long!')
    .required("Can't be blank"),
  cvc: Yup.number()
    .min(99, 'Too Short!')
    .max(16, 'Too Long!')
    .required("Can't be blank"),
});

export default function FormCard({ handleForm, dates }) {
  
  const handleCard = (values) => {
    let error;
    const maxLength = 16;
    if (values.length <= maxLength) {
      handleForm({name:'cardNumber', value:values });
    } 
    if (values.length > maxLength){
      error = 'Too Long'
    }
    return error
  };
  console.log(dates)
  const handleSubmit = (event) =>{
    event.preventDefault()
    /* for (const date in dates){
      if (date !== 'name' || date !== 'cardNumber' || date !== 'mm' || date !== 'yy' || date !== 'cvc' ){
        setErrors({...errors, [date]:"Can't be blank"})
      }
      
    } */
  }

  return (
    <Formik 
      initialValues={{
        name: '',
        cardNumber: dates.cardNumber,
        mm: '',
        yy: '',
        cvc: '',
      }}
      validateOnChange
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}>
        {({ errors, touched, isValidating  }) => (
         <Form className='form'>

          <div className='input-section'>
            <label htmlFor="name">Cardholder name</label>
            <Field placeholder="e.g. Jane Applessed" name="name" className='input' id='name' component='input'/>
            {errors.name && touched.name ? (
              <p className='span' >{errors.name}</p>
            ) : null}
          </div>

          <div className='input-section'>
            <label htmlFor="cardNumber">Card number</label>
            <Field validate={handleCard} placeholder="e.g. 1234 5678 9123 0000" name="cardNumber" className='input' id='cardNumber' component='input'/>
            {errors.cardNumber && touched.cardNumber && 
              <p className='span' >{errors.cardNumber}</p>}
          </div>

          <div className="input-section2">
            
            <div className="date-section">
            <p className='exp'>exp. date (MM/YY)</p>

              <div className="dates">
                <div className='input-section short'>
                <Field aria-label="exp.date MM" placeholder='MM' name="mm" type='number' className='input' id='mm' component='input'/>
                {errors.name && touched.mm ? (
                  <p className='span' >{errors.mm}</p>
                ) : null}
                </div>
                <div className='input-section short'>
                <Field aria-label="exp.date YY" placeholder='YY' name="yy" type='number' className='input' id='yy' component='input'/>
                {errors.yy && touched.yy ? (
                  <p className='span' >{errors.yy}</p>
                ) : null}
                </div>
              </div>
            </div>
            <div className="date-section">
              <label htmlFor="name">cvc</label>
              <Field placeholder="e.g. 123" name="cvc" type='number' className='input' id='cvc' component='input'/>
              {errors.cvc && touched.cvc ? (
                <p className='span' >{errors.cvc}</p>
              ) : null}
            </div>
          </div>
           
          <div className="input-section2">
           <button type="submit">Confirm</button>
          </div>
         </Form>
       )}
    </Formik>
  );
}
