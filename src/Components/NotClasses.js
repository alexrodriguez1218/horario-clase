import React from 'react'

// Import imagenes 
import BoyPlaying from '../img/BoyPlaying.png'


const NotClasses = ()  => (
    <div className='NotClasess'>
        <h1>No tiene clases, descansa y no <br /> descuides tus deberes</h1>
        <img src={BoyPlaying} alt='Img del niño cuando no tienen clases ' />
    </div>
)

export default NotClasses

