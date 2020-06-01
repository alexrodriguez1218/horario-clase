import React, { useState } from 'react';

// import imagenes 
import HeroBoy from "./img/Hero.png";
import HeroGirl from "./img/HeroGirl.png";

// import icons
import {MdSettings} from 'react-icons/md'

// Importo servicio de datos
import Data from './Services/ProcessData'

// importo components
import InfoStudent from './Components/infoStudent'
import ListClass from './Components/ListClasses'
import InitApp from './Components/InitApp'

function App() {
  // init estado
  const [name, setName] = useState(window.localStorage.getItem('name') || null)
  const [gender, setGender] = useState(window.localStorage.getItem('gender') || null)
  console.log(gender);
  
  //obtendo datos
  const data = Data()
  const {nowDay, nowClasses, nextClases} = data
  const heroImg = gender === 'girl' ? HeroGirl : HeroBoy
  
  const resetApp = () => {
    window.localStorage.removeItem('name')
    window.localStorage.removeItem('gender')
    window.location.reload()
  }
  
  return (
    <div className="Container">
      <div className='Panel-info'>
        <button className='ResetApp' onClick={resetApp}><MdSettings size='15px'/> <span>Reiniciar App</span> </button>
        <div className='Panel-info__item'>
          <img src={heroImg} alt='Img en donde ubicare las acciones del app' />
          <div className='buttons'>
            <button>ver <span>Semana</span></button>
            <button>ver <span>Mañana</span></button>
          </div>
          {name && <InfoStudent name={name} classCuston={gender} day={nowDay} />}
        </div>
      </div>
      <div className='Panel-Horario'>
        <ListClass data={nowClasses} nextClases={nextClases} />
      </div>
      <InitApp open={name} handleName={setName} handleGender={setGender} />
    </div>
  );
}

export default App;
