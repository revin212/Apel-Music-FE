import { FormControl, OutlinedInput, MenuItem, Select } from '@mui/material'
import { dateList, dateToString } from '../../../utils/DateUtils'

export const MuiSelect = ({jadwal, setJadwal}) => {
    const handleChange = (event) => {
        setJadwal(event.target.value);
      };

  return (
    <FormControl sx={{ m: 0, width:'100%', maxWidth:'280px'}} size="small" id='date-select-wrapper'>
        <Select
            name="select-jadwal"
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
            {dateList.map((date,index)=>{return <MenuItem key={index} value={date} sx={{mx:1,my:0.5}}>{dateToString(date)}</MenuItem>})}
        </Select>
    </FormControl>
  )
}
