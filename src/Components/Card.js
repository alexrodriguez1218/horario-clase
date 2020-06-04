import React from 'react'

// import react icons
import { MdFlightTakeoff } from 'react-icons/md'


function Card({ matter, hours, minutes, jornada, teacher, color, idConnection, pwdConnection, linkConnection, disabled }) {
    return (
        <div className={`card ${disabled}`} style={{ borderColor: color }} >
            <h1>{matter}</h1>
            <h2>{hours.toString().padStart(2, "00")}:{minutes.toString().padStart(2, "00")} {jornada}</h2>
            <h3>{teacher}</h3>
            <div className='Buttons'>
                <p>Vamos a clase {!disabled && (<a href={linkConnection} target='_BLANK' rel="noopener noreferrer"><MdFlightTakeoff size='25px' /></a>)}</p>
                <p>ID: {idConnection}</p>
                <p>Clave: {pwdConnection}</p>
            </div>
        </div>
    )
}

export default Card