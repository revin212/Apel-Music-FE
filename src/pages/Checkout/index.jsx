import { Box, Checkbox, Container, FormControlLabel, Input, Typography } from "@mui/material"

const Checkout = ({ data }) => {
    return(
        <>
            <Container sx={{
                px: 0,
                mx: '4.5rem',
                mt: '40px',
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'start',
                    gap: '32px',
                    height: '54px',
                    width: '100%',
                    borderBottom: '1px solid',
                    borderColor: 'text.gray4'
                }}>
                    <FormControlLabel control={<Checkbox />} label='Pilih Semua' />
                </Box>
            </Container>
        </>
    )
}

export default Checkout