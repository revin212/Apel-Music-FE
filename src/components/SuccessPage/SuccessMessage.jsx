import { Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { SkeletonEmailConfirm } from '../Skeleton/SkeletonEmailConfirm'

const titleStyle = {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '36px',
    letterSpacing: '0em',
    color: 'secondary.main',
    marginBottom: '8px'
}

const descStyle = {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0em',
    color: 'text.gray2',
    marginBottom: '40px',
    textAlign: 'center'
}

export const SuccessMessage = ({title, desc, buttonList, loading=false}) => {
  return (
    <Stack sx={{alignItems:'center', justifyContent:'start', flexGrow:'1', px:{xs:'16px', md:'auto'}}}>
        {loading && <SkeletonEmailConfirm />}
        {!loading && 
        <Stack gap={'40px'} sx={{alignItems:'center', justifyContent:'center'}}>
            <img src="/images/Group 2.png" alt="logo" width='250px' height='250px' />
            <Stack sx={{alignItems:'center', justifyContent:'center'}}>
                <Typography sx={titleStyle}>
                        {title}
                </Typography>
                <Typography sx={descStyle}>
                    {desc}
                </Typography>
                
                    <Stack direction={{xs:'column', sm:'row'}} gap={'24px'} alignItems={'center'} justifyContent={'center'}>
                    {buttonList?.map((button, i) => {
                        return (
                            <Link key={i} to={button.link} style={{textDecoration:'none'}}>
                                <Button variant={button.variant ? button.variant : 'contained' } sx={{display:'flex', alignItems: 'center', width:button.width}}>
                                    {button.icon? button.icon : null}
                                    {button.desc}
                                </Button>
                            </Link>
                        )
                    })}
                    </Stack>
            </Stack>
        </Stack>}
    </Stack>
  )
}
