import { Alert, Box, Stack, Typography } from "@mui/material"
import { classDescStyle, classListWrapperStyle, classWrapperStyle, containerStyle, imgStyle, imgWrapperStyle } from './MyClassStyles'
import { dummyDataCheckout } from "../../utils/dummyDataCheckout"
import { dateToString } from "../../utils/DateUtils"
import { useState } from "react"
import { SkeletonMyClass } from "../../components/Skeleton/SkeletonMyClass"

export const MyClass = () => {
    const [classList, setClassList] = useState(dummyDataCheckout.slice(0,2))
    const loading = false
    const errorState = false

  return (
    <Box sx={containerStyle}>
        {errorState && 
        <Alert variant="outlined" severity="error" sx={{color:'warning.main', mt:'48px', mx:'32px'}}>
            Terjadi kesalahan pada server, mohon muat ulang halaman beberapa saat lagi
        </Alert>}
        {!errorState && 
        <Box sx={classListWrapperStyle}>
            {loading && [...Array(3)].map((item, i)=>{
                    return(
                            <SkeletonMyClass key={i} />
                    )
                })}
            {!loading && classList.map((item, i)=>{
                return(
                <Stack key={i} direction={{xs:"column", md:"row"}} gap='24px' alignItems='center' sx={classWrapperStyle}>
                    <Stack sx={imgWrapperStyle}>
                        <img width='200px' height='133px' src={item.thumbnail} style={imgStyle} />
                    </Stack>
                    <Stack>
                        <Box sx={classDescStyle}>
                            <Typography fontWeight={400} fontSize={16} sx={{color:'text.gray3'}}>{item.type}</Typography>
                            <Typography fontWeight={600} fontSize={24} sx={{color:'text.gray1'}}>{item.title}</Typography>
                            <Typography fontWeight={400} fontSize={16} my='4px' sx={{color:'text.gray2'}}>Jadwal : {dateToString(item.jadwal)}</Typography>
                        </Box>
                    </Stack>
                </Stack>
                )}
            )}
            {!loading && classList.length == 0 && 
                <Typography variant="body" sx={{color:'text.gray2', mt:'48px', mx:'32px'}}>
                    Kamu belum mengikuti kelas
                </Typography>
            }
        </Box>}
    </Box>
  )
}
