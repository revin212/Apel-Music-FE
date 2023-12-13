export const dateList = [
    dateAddDays(Date.now(), 7), 
    dateAddDays(Date.now(), 8), 
    dateAddDays(Date.now(), 9),
    dateAddDays(Date.now(), 10),
    dateAddDays(Date.now(), 11),
    dateAddDays(Date.now(), 12)
]

export function dateAddDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

export function dateAddMinutes(date, minutes) {
    var result = new Date(date);
    result.setTime(result.getTime() + (minutes*60000));
    return result;
}

export const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
export const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const dateSatuan = (number) => {
    if(number < 10) {
        return `0${number}`
    }
    return `${number}`
}

export const dateToString = (date) => {
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} `
}

export const dateToStringInvoice = (date) => {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

export const dateToStringInvoiceHeader = (date) => {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${dateSatuan(date.getHours())}:${dateSatuan(date.getMinutes())} WIB`
}

export const dateToStringJadwal = (date) => {
    return `${date.getFullYear()}-${dateSatuan(date.getMonth()+1)}-${dateSatuan(date.getDate())}`
}