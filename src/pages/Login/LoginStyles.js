export const inputStyle = {
    border: '1px solid #CFD6E5',
    borderRadius: '4px',
    fontWeight: '400',
    fontSize: '14px',
    lineeight: '21px',
    padding: '0.5rem',
    "& .MuiInput-input":{
        padding: 0
    },
    "& .MuiInput-input::placeholder": {
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '21px',
        color:'text.gray2',
        opacity: 1,
    }
}

export const titleStyle = {
    fontWeight: '400',
    fontSize: '1.5rem',
    lineHeight: '36px',
    color: 'text.gray1',
    margin: '0',
}

export const subtitleStyle = {
    margin: '0',
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '24px',
    color: 'text.gray2',
}

export const forgotPassStyle = {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '21px',
}

export const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
}

export const errorMsgStyle = {
    width : '100%',
    marginBottom: '32px',
    paddingBlock: '8px',
    paddingInline: '16px',
    border: '1px solid',
    borderRadius: '4px',
    borderColor: 'warning.main',
    color: 'warning.main',
}