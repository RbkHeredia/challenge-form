import '../styles/card-back.css';

export default function CardBack ({ cvc }){
  return(
    <div className="card-back">
      <p>{cvc}</p>
    </div>
  )
}

CardBack.defaultProps = {
  cvc: '000'
}