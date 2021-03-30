function Cards(props) {
    return (
     <div className='cards'>
     <img src={props.tarjeta.image} alt=""/>
     <div className='info'> 
        <h3 className='cards'> {props.tarjeta.name} </h3>
       <p> {props.tarjeta.status} </p>
        <p> {props.tarjeta.species}  </p>
        <p> {props.tarjeta.origin.name} </p> 
       </div>
     </div>
    );
}
export default Cards; 