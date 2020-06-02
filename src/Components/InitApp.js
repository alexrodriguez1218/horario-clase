import React, { useState } from 'react'
import { createPortal } from 'react-dom'

// importo images
import HeroBienvenida from '../img/Bienvenida.png'
import Boy from '../img/b_boy.png'
import Girl from '../img/b_girl.png'

function InitApp({ open, handleName, handleGender }) {
    const [gender, setGender] = useState('boy')
    const [name, setName] = useState('')

    const onClickImg = (event, choose) => {
        setGender(choose)
        const imgGender = document.querySelector('.gender').querySelectorAll('img')
        imgGender.forEach((i) => {
            i.classList.remove('active')
        })
        event.target.classList.add('active')
        
    }

    const onChangeName = e => setName(e.target.value)

    
    const onSubmitForm = (event) => {
        event.preventDefault()
        window.localStorage.setItem('name', name)
        window.localStorage.setItem('gender', gender)
        handleName(name)
        handleGender(gender)
    }
    
    return !open && createPortal(
        <div className='modal'>
            <form onSubmit={onSubmitForm}>
                <img className='heroBienvenida' src={HeroBienvenida} alt='Imagen de bienvenida, consulta el nombre del estudiante y que es... niño o niña?' />
                <input onChange={onChangeName} required />
                <div className='gender'>
                    <img className='active' src={Boy} alt='Opcion de niño' onClick={(e)=>onClickImg(e, 'boy')} />
                    <img src={Girl} alt='Opcion de niña' onClick={(e)=>onClickImg(e, 'girl')} />
                </div>
                <button>A Estudiar!!!</button>
            </form>
        </div>, document.getElementById('modal')
    )
}

export default InitApp