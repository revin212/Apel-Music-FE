import { Box, Stack, Typography, Card } from '@mui/material'
import { bodyStyle, titleStyle, wrapperStyle } from './BenefitSectionStyles'

export const BenefitSection = () => {
  return (
    <Box sx={wrapperStyle}>
        <Box sx={{position:'absolute', left:{xs:'0',md:'24px'}, maxWidth:{xs:'2000px', md:'363px'}, top:'40px', zIndex:'-100'}}>
            <img src="https://revinramadhan21.sirv.com/Images/Apel%20Music%20Image/Group%201.png" width="363" height="413" alt="circle" style={{width:'100%', height:'auto'}}/>
        </Box>
        <Stack direction={{xs:'column', md:'row'}} gap={{xs:'100px', md:'24px'}} alignItems='center'>
            <img src="https://revinramadhan21.sirv.com/Images/Apel%20Music%20Image/image%204.png" width="280" height="302" alt="guitarist" />
            <Stack direction='column' gap='24px'>
                <Typography variant='h3' sx={titleStyle}>
                    Benefit ikut Apel Course
                </Typography>
                <Typography variant='body1' sx={bodyStyle}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </Typography>
            </Stack>
        </Stack>
    </Box>
  )
}
