import { Box, Stack, Typography } from "@mui/material"
import { classDescStyle, classListWrapperStyle, classWrapperStyle, containerStyle, imgStyle, imgWrapperStyle } from './MyClassStyles'
import { dummyDataCheckout } from "../../utils/dummyDataCheckout"
import { dateToString } from "../../utils/DateUtils"
import { useState } from "react"

export const MyClass = () => {
    const [classList, setClassList] = useState(dummyDataCheckout.slice(0,2))

  return (
    <Box sx={containerStyle}>
        <Box sx={classListWrapperStyle}>
            {classList.map((item, i)=>{
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
                            <Typography fontWeight={600} fontSize={20} sx={{color: 'secondary.main'}}>
                                IDR {new Intl.NumberFormat(["ban", "id"]).format(item.price)}
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
                )}
            )}
        </Box>
    </Box>
  )
}
