import Cards from './Cards';
import listaTarjeta from '../rickandmorty.json';

function Main() {
    return (
      <div className="Main">
          {listaTarjeta.map(function(infoTarjeta, idx) {
								return(
									<Cards tarjeta={infoTarjeta} key={idx} />
								)
				})
			}	
      </div>
    );
  }
  
  export default Main;
  