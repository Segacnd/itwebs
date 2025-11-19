

export const convertDate = (date) => {
    // const year = date.getFullYear();
    // const month = date.getMonth();
    // const day = date.getDay();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const fullData = [[day, month, year].join('.'), [hours, minutes].join(':')].reverse().join(' ');
    return date.split('T')[0]+' '+date.split('T')[1];
}