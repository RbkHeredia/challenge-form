import '../styles/added.css'
import icon from '/images/icon-complete.svg'

export default function Added () {

  function refreshPage() {
    window.location.reload(false);
  }
  return (
      <div className="thankyou">
        <img src={icon}/>
        <h1>Thank You!</h1>
        <p>We've added your card details</p>
        <div className='cont-button'>
          <button onClick={refreshPage}>Continue</button>
        </div>
      </div>
    
  )
}