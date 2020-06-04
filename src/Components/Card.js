import React from 'react'

function Card({ matter, hours, minutes, jornada, teacher, color, idConnection, pwdConnection, linkConnection, disabled }) {
    return (
        <div className={`card ${disabled}`} style={{ borderColor: color }} >
            <h1>{matter}</h1>
            <h2>{hours.toString().padStart(2, "00")}:{minutes.toString().padStart(2, "00")} {jornada}</h2>
            <h3>{teacher}</h3>
            <div className='Buttons'>
                <p>ID: {idConnection}</p>
                <p>Clave: {pwdConnection}</p>
            </div>
        </div>
    )
}

export default Card