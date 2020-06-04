import React from 'react'
import { Link } from "react-router-dom";

export default function Actions({ view }) {
    let b_label_t = 'ver '
    let b_label_w = 'ver '
    let b_span_t = 'Mañana'
    let b_span_w = 'Semana'
    let b_link_t = '/tomorrow'
    let b_link_w = '/week'
    
    switch (view) {
        case 'tomorrow':
            b_label_t = 'Volver a '
            b_span_t = 'Hoy'
            b_link_t = '/'
        break;

        case 'week':
            b_label_w = 'Volver a '
            b_span_w = 'Hoy'
            b_link_w = '/'
        break;
        
        default:
        break;
    }
    return (
        <div className='buttons'>
            <Link to={b_link_w}>{b_label_w}<span>{b_span_w}</span></Link>
            <Link to={b_link_t}>{b_label_t}<span>{b_span_t}</span></Link>
        </div>
    )
}