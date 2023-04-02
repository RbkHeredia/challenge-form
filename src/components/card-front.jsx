import '../styles/card-front.css';

const defaultValues = {
  name: 'Jane Appleseed',
  cardNumber: "0000000000000000",
  mm: '00',
  yy: '00'
}

export default function CardFront ({ cardNumber, name, mm, yy }){
  return(
    <div className='card-front'>
      <section className='cont-circle'>
        <div className='circle1'></div>
        <div className='circle2'></div>
      </section>
      <section >
        <h1>{cardNumber === "" ? defaultValues.cardNumber : cardNumber}</h1>
      </section>
      <section>
        <h2>{name === "" ? defaultValues.name : name}</h2>
        <h2>{mm === "" ? defaultValues.mm : mm}/{yy === "" ? defaultValues.yy : yy}</h2>
      </section>
    </div>
  )
}
