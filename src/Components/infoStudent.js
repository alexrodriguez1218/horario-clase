import React from 'react'

function InfoStudent({day, classCuston, name}) {
    return (
        <div className={`Label ${classCuston}`} >
            <p>Hola <br /> <span className='NameStudent'>{name}</span></p>
            <p>Hoy es <br /> <span className='day'>{day}</span></p>
          </div>
    )
}

export default InfoStudent