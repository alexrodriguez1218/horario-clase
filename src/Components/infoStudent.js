import React from 'react'

function InfoStudent({ day, classCuston, name, view}) {
    
    const labelDay = view === 'today' ? 'Hoy es ' : 'Mañana será '
    return (
        <div className={`Label ${classCuston}`} >
            <p>Hola <br /> <span className='NameStudent'>{name}</span></p>
            <p>{labelDay} <br /> <span className='day'>{day}</span></p>
          </div>
    )
}

export default InfoStudent