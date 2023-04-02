import '../styles/card-back.css';

const defaultValues = {
  cvc: '000'
}

export default function CardBack ({ cvc }){
  return(
    <div className="card-back">
      <p>{cvc === "" ? defaultValues.cvc : cvc}</p>
    </div>
  )
}
