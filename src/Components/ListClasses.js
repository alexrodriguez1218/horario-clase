import React from 'react'

// import componentes
import Card from './Card'
import NotClasses from './NotClasses'
import AdClass from './AdClass'
//importo funciones
import getHourRender from '../Services/getHoursRender'


function ListClasses({ data, nextClases, day, view }) {

    const { nowActivity, nextMatter } = nextClases
    let label = '¡No tienes clase por el momento!'
    let matter = 'No olvides hacer las sumas y el dictado diario'
    let linkClass = ''
    if (nowActivity) {
        label = 'Estamos en '
      matter = `${nowActivity.name} - ${getHourRender(nowActivity.hours)}:${getHourRender(nowActivity.minutes)} ${nowActivity.jornada}`
      linkClass = nowActivity.linkConnection
    } else if (nextMatter) {
        label = 'Próxima clase'
      matter = `${nextMatter.name} - ${getHourRender(nextMatter.hours)}:${getHourRender(nextMatter.minutes)} ${nextMatter.jornada}`
      linkClass = nextMatter.linkConnection
    }
    const notClasses = ((!nowActivity && !nextMatter) || view !== 'today') && 'disabled'
    return (
        <div className='Panel-Horario__Container'>
          {
            data.length > 0
              ? (
              <>
                <div className='Header'>
                  <AdClass label={label} notClasses={notClasses} matter={matter} day={day} view={view} link={linkClass} />
                </div>
                <div className='List-card'>
                  {
                    data.map(({matterId, name, hours, jornada, minutes, teacher, color,  idConnection, pwdConnection, linkConnection}) => {
                      return <Card
                          key={matterId}
                          matter={name}
                          hours={hours}
                          minutes={minutes}
                          jornada={jornada}
                          teacher={teacher}
                          color={color}
                          idConnection={idConnection}
                          pwdConnection={pwdConnection}
                          linkConnection={linkConnection}
                          disabled={notClasses}
                          />
                    })
                  }
                </div>
              </>
              )
              :
              <NotClasses />
         }
        </div>
    )
}


export default ListClasses