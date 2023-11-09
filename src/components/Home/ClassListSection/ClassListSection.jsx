import { Box, Stack, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { categoryStyle, imageStyle, wrapperStyle, classNameStyle, priceStyle, titleStyle } from './ClassListSectionStyles'
import { dummyData } from './dummyData'

export const ClassListSection = () => {
  return (
    <Box sx={wrapperStyle}>
        <Typography variant='h2' sx={titleStyle}>
            Explore kelas favorit
        </Typography>
        <Grid container columnSpacing={3} rowSpacing={7.5}>
            {dummyData.map((item)=>{
                return (
                    <Grid xs={12} md={4} key={item.id}>
                        <Link href='#' underline='none'>
                        <Stack direction='column' gap='16px'>
                            <img src={item.image} width="350" height="234" alt={item.name} style={imageStyle} />
                            <Box padding='0px, 8px, 0px, 8px'>
                                <Box minHeight='113px' maxWidth='292px'>
                                    <Typography variant='body1' sx={categoryStyle}>
                                        {item.category}
                                    </Typography>
                                    <Typography variant='h4' sx={classNameStyle}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant='subtitle1' sx={priceStyle}>
                                        IDR {new Intl.NumberFormat(["ban", "id"]).format(item.price)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    </Box>
  )
}
