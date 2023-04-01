import '../styles/card-front.css';

export default function CardFront ({ cardNumber, name, mm, yy }){
  return(
    <div className='card-front'>
      <section className='cont-circle'>
        <div className='circle1'></div>
        <div className='circle2'></div>
      </section>
      <section >
        <h1>{cardNumber}</h1>
      </section>
      <section>
        <h2>{name}</h2>
        <h2>{mm}/{yy}</h2>
      </section>
    </div>
  )
}

CardFront.defaultProps = {
    name:'Jane Appleseed',
    cardNumber: '0000 0000 0000 0000',
    mm: '00',
    yy: '00',
    cvc: '000'
}