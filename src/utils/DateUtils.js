export const dateList = [
    addDays(Date.now(), 7), 
    addDays(Date.now(), 8), 
    addDays(Date.now(), 9),
    addDays(Date.now(), 10),
    addDays(Date.now(), 11),
    addDays(Date.now(), 12)
]

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
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