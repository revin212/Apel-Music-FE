import { Box, Button, Container, TextField  } from "@mui/material";
import Sx from "./style"
const ForgotPassword = () => {
    return(
        <Box sx={Sx.WrapperResetBox()}>
            <div className="sub-reset-wrapper">
                <div className="reset-title-wrapper">
                    <h2 className="reset-title" sx={{
                        fontWeight: 'light'
                    }}>
                        Reset Password
                    </h2>
                    <p className="reset-subtitle">
                        Silahkan masukan terlebih dahulu email anda
                    </p>
                </div>
                <div className="reset-email">
                    <TextField variant="outlined" label="Masukkan Email" />
                </div>
            </div>
            <div className="reset-button-group">
                <Button variant="outlined">Batal</Button>
                <Button variant="contained">Konfirmasi</Button>
            </div>
        </Box>
    )
}

export default ForgotPassword;