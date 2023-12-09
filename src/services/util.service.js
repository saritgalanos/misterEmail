
export const utilService = {
    makeId,
    saveToStorage,
    loadFromStorage,
    getImgUrl,
    getStarIconUrl,
    getTrashIconUrl,
    getMonthName,
    getDateToDisplay
}

function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function saveToStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function loadFromStorage(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
}

function getImgUrl(url) {
    return new URL(url, import.meta.url).href
}

function getStarIconUrl(isStar) {
    const starIcon = isStar ? "yellowstar" : "star"
    return utilService.getImgUrl(`../assets/imgs/${starIcon}.png`)
}

function getTrashIconUrl(isTrash) {
    const trasjIcon = isTrash ? "trash" : "trash"
    return utilService.getImgUrl(`../assets/imgs/${trasjIcon}.png`)
}



function getMonthName(date) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    return monthNames[date.getMonth()]
}

function getDateToDisplay(date) {

    const minutes = date.getMinutes();
    const hours = date.getHours()
    return `${hours}:${minutes}`
    // const timestampDate = new Date(timestampInMilliseconds);
    

    // const isToday = (
    //     date.getFullYear() === timestampDate.getFullYear() &&
    //     date.getMonth() === timestampDate.getMonth() &&
    //     date.getDate() === timestampDate.getDate()
    //   )
    //   return `${date.}`

    //today - get houre
    //this year but not today - get month and day
    //before this year - get year
}
