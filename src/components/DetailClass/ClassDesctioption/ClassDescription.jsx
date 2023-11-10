import { Stack, Box, Typography, FormControl, OutlinedInput, MenuItem, Select, Button } from '@mui/material'
import React, { useState } from 'react'
import { bodyStyle, categoryStyle, classNameStyle, imageStyle, priceStyle, titleStyle } from './ClassDescriptionStyles'
import { dateList, dateToString } from '../../../utils/DateUtils'

export const dummyData = {
    id:'1',
    category: 'Drum',
    name: 'Kursus Drummer Special Coach (Eno Netral)',
    price: 8500000,
    image: '/images/Rectangle 12-7.png',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit es ullamcorper lore m dictates eum erat inter partur adip tempor cum soluta ut aliquet consequ velit sed diam nonumy euismod tempor cum sol',
}

export const ClassDescription = () => {
    const [jadwal, setJadwal] = useState('');

  const handleChange = (event) => {
    setJadwal(event.target.value);
  };

  return (
    <Stack direction='column' gap='40px' paddingTop='40px' paddingBottom='60px' paddingInline={{xs: '30px',sm:'50px',md:'70px'}}>
        <Stack direction={{xs:'column',md:'row'}} gap='40px'>
            <Stack direction='row' justifyContent={{xs:'center',md:'auto'}} sx={{width:'100%',maxWidth:{xs:'100%', md:'400px'}, height:'min-content'}}>
            <img src={dummyData.image} alt={dummyData.name} style={imageStyle} />
            </Stack>
            <Stack direction='column' gap='60px'>
                <Stack direction='column' gap='16px'>
                    <Typography variant='body1' sx={categoryStyle}>
                        {dummyData.category}
                    </Typography>
                    <Typography variant='h4' sx={classNameStyle}>
                        {dummyData.name}
                    </Typography>
                    <Typography variant='subtitle1' sx={priceStyle}>
                        IDR {new Intl.NumberFormat(["ban", "id"]).format(dummyData.price)}
                    </Typography>

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
                </Stack>
                <Stack direction='row' gap='16px'>
                    <Button variant='outlined' sx={{maxWidth:'233px', width:'100%'}}>Masukkan Keranjang</Button>
                    <Button variant='contained' sx={{maxWidth:'233px', width:'100%'}}>Beli Sekarang</Button>
                </Stack>
            </Stack>
        </Stack>
        <Stack gap='16px'>
        <Typography variant='h4' sx={titleStyle}>
                Drummer Class
            </Typography>
            <Typography variant='body1' sx={bodyStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </Stack>
    </Stack>
  )
}
