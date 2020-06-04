import Data from '../data.json'

function getNextClass(classes=[], nowDate, hour, minute) {
    console.log();
    
    let  nextMatter = null
    
    const nowActivity = classes.filter(c => c.hours === hour && minute <= 42 )[0] || null
    if (!nowActivity ) {        
        // valido si tengo proxima clase
        nextMatter = classes.filter(c => c.hours > hour )[0] || null
        
    }
    return { nowActivity, nextMatter }
}

function getData(type = 'today') {
    const { week, Classes, matter, months } = Data
    const nowDate = new Date()
    let day = nowDate.getDay()
    const hour = nowDate.getHours()
    const minute = nowDate.getMinutes()

    type === 'tomorrow' && day++
    
    const nowDay = `${week[day]}, ${day} de ${months[nowDate.getMonth()]}`

    let nowClasses = []
    
    if (Classes[day]) {        
        nowClasses = Classes[day].map((c) => {
            const infoMatter = matter.filter(m => m.id === c.matterId) || []
            return {...c, ...infoMatter[0]}
        })
    }    
    
    const nextClases = getNextClass(nowClasses, nowDate, hour, minute)
    return { nowDay, nowClasses, nextClases }
}


export default getData
