import { FormControl, OutlinedInput, MenuItem, Select } from '@mui/material'
import { dateList, dateToString } from '../../../utils/DateUtils'

export const MuiSelect = ({jadwal, setJadwal}) => {
    const handleChange = (event) => {
        setJadwal(event.target.value);
      };

  return (
    <FormControl sx={{ m: 0, width:'100%', maxWidth:'250px'}} size="small" id='date-select-wrapper'>
        <Select
            displayEmpty
            id="demo-select-small"
            value={jadwal}
            color='text'
            label="Age"
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
                if (selected.length === 0) {
                return <em>Pilih Jadwal Kelas</em>;
                }
    
                return dateToString(selected);
            }}
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem disabled value="">
            <em>Pilih Jadwal Kelas</em>
            </MenuItem>
            {dateList.map((date,index)=>{return <MenuItem key={index} value={date}>{dateToString(date)}</MenuItem>})}
        </Select>
    </FormControl>
  )
}
