import Data from '../data.json'

function getNextClass(classes=[], nowDate) {
    const hour = nowDate.getHours()
    const minute = nowDate.getMinutes()
    let  nextMatter = null

    const nowActivity = classes.filter(c => c.hours === hour && minute <= 42 )[0] || null
    if (!nowActivity ) {        
        // valido si tengo proxima clase
        nextMatter = classes.filter(c => c.hours > hour )[0] || null
        
    }
    return { nowActivity, nextMatter }
}

function getData(type = 'today') {
    
    const { week, Classes, matter } = Data

    const nowDate = new Date()
    const day = nowDate.getDay()
    

    
    
    const nowDay = week[day]

    let nowClasses = []
    
    if (Classes[day]) {
        nowClasses = Classes[day].map((c) => {
            const infoMatter = matter.filter(m => m.id === c.matterId) || []
            return {...c, ...infoMatter[0]}
        })
    }    
    
    const nextClases = getNextClass(nowClasses, nowDate)
    return { nowDay, nowClasses, nextClases }
}


export default getData
