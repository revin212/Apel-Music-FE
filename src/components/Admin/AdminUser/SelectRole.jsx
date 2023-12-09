import { FormControl, OutlinedInput, MenuItem, Select } from '@mui/material'
import useGetData from '../../../hooks/useGetData';
import { useEffect } from 'react';

const roleList = [
    {
        id:1,
        name:'Admin'
    },
    {
        id:2,
        name:'User'
    },
]

export const SelectRole = ({ data, setData, roleName, setRoleName }) => {
    // const url = '/MsCategory/GetShortList'
    // const { data: categoryData, loading, errorState, getData } = useGetData()

    // useEffect(() => {
    //     getData(url)
    // }, [])

    const handleChange = (e) => {
        setRoleName(e.target.value)
        const selectedIndex = roleList.map(function(e) { return e.name; }).indexOf(e.target.value);
        setData({
            ...data,
            roleId: roleList[selectedIndex].id
        })
      };

  return (
    <FormControl sx={{ m: 0, width:'100%', maxWidth:'250px'}} size="small" id='date-select-wrapper'>
        <Select
            displayEmpty
            id="demo-select-small"
            value={roleName}
            color='text'
            label="category"
            name="category"
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
                if (!selected) {
                return <em>Pilih Role</em>;
                }
    
                return selected;
            }}
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem disabled value="">
            <em>Pilih Role</em>
            </MenuItem>
            {roleList.map((item)=>{return <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>})}
        </Select>
    </FormControl>
  )
}