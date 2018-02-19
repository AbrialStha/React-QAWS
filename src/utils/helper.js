//To check an empty object
export function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

//To find the Index of array of object by given object id
export function findIndex(array, obj) {
    return array.map(x => x.id).indexOf(obj.id)
}

//Format Date My Style
export function formatDate(date) {
    const d = new Date(date)
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = d.getDate();
    var monthIndex = d.getMonth();
    var year = d.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

//Generate unique id for the flashmessage
export function generateId() {
    var timestamp = new Date().getUTCMilliseconds();
    return timestamp;
}