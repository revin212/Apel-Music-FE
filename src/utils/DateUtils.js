export const dateList = [new Date('2022-07-25'), new Date('2022-07-26'), new Date('2022-07-27'), new Date('2022-07-28'), new Date('2022-07-29'), new Date('2022-07-30')]

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

export const dateToStringJadwal = (date) => {
    return `${date.getFullYear()}-${dateSatuan(date.getMonth()+1)}-${dateSatuan(date.getDate())}`
}