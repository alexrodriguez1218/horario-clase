import React from 'react'

// import react icons
import { MdFlightTakeoff } from 'react-icons/md'

export default function AdClass({ label, notClasses, matter, day, view, link }) {
    switch (view) {
        case 'tomorrow':
            label = 'Estas son tus clases de mañana'
            return (
                <>
                    {label} <span>{day}</span>
                </>
            )
    
        default:
            return (
                <>
                    {label}
                    {notClasses && (<br />)}
                    <span>{matter}</span>
                    {link && (<><br /><a href={link} target='_blank' rel="noopener noreferrer"><MdFlightTakeoff /> Vamos a clase</a></>) }
                    
                </>
            )
    }
}
