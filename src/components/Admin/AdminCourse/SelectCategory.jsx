import { FormControl, OutlinedInput, MenuItem, Select } from '@mui/material'
import useGetData from '../../../hooks/useGetData';
import { useEffect } from 'react';
import './SelectCategory.css'

export const SelectCategory = ({ data, setData, categoryName, setCategoryName }) => {
    const url = '/MsCategory/GetShortList'
    const { data: categoryData, loading, errorState, getData } = useGetData()

    useEffect(() => {
        getData(url)
    }, [])

    useEffect(() => {
        if(data.categoryId){
            const categoryIndex = categoryData.map(function(e) { return e.id; }).indexOf(data.categoryId);
            setCategoryName(categoryData[categoryIndex].name);
        }
    }, [data])

    const handleChange = (e) => {
        setCategoryName(e.target.value)
        const selectedIndex = categoryData.map(function(e) { return e.name; }).indexOf(e.target.value);
        setData({
            ...data,
            categoryId: categoryData[selectedIndex].id
        })
      };

  return (
    <FormControl sx={{ m: 0, width:'100%', maxWidth:'250px'}} size="small" id='date-select-wrapper'>
        <Select
            displayEmpty
            id="demo-select-small"
            value={categoryName}
            color='text'
            label="category"
            name="category"
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
                if (!selected) {
                return <em>Pilih Kategori</em>;
                }
    
                return selected;
            }}
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem disabled value="">
            <em>Pilih Kategori</em>
            </MenuItem>
            {categoryData.map((item)=>{return <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>})}
        </Select>
    </FormControl>
  )
}