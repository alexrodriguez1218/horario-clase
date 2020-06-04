import React, { useState } from 'react';

// import imagenes 
import HeroBoy from "../img/Hero.png";
import HeroGirl from "../img/HeroGirl.png";

// import icons
import { MdSettings } from 'react-icons/md'

// Importo servicio de datos
import Data from '../Services/ProcessData'

// importo components
import InfoStudent from './infoStudent'
import ListClass from './ListClasses'
import InitApp from './InitApp'
import Actions from "./Actions";
// import context
function Today({ Action = 'today' }) {  
  // init estado
  const [name, setName] = useState(window.localStorage.getItem('name') || null)
  const [gender, setGender] = useState(window.localStorage.getItem('gender') || null)
  

  var data = Data(Action)


  if (Action === 'today') {
    setInterval(() => {
      data = Data(Action)
    }, 60000)
  } 

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
          <Actions view ={Action} />
          {name && <InfoStudent name={name} classCuston={gender} day={nowDay} view={Action} />}
        </div>
      </div>
      <div className='Panel-Horario'>
        <ListClass data={nowClasses} nextClases={nextClases} day={nowDay} view={Action} />
      </div>
      <InitApp open={name} handleName={setName} handleGender={setGender} />
    </div>
  );
}

export default Today;
