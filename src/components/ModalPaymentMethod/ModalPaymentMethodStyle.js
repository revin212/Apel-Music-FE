export const paymentMethodList = [
    {
        name: 'Gopay',
        image: '/images/logo/Gopay.png'
    },
    {
        name: 'OVO',
        image: '/images/logo/OVO.png'
    },
    {
        name: 'DANA',
        image: '/images/logo/DANA.png'
    },
    {
        name: 'Mandiri',
        image: '/images/logo/Mandiri.png'
    },
    {
        name: 'BCA',
        image: '/images/logo/BCA.png'
    },
    {
        name: 'BNI',
        image: '/images/logo/BNI.png'
    },
]

export const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '374px',
    height: '502px',
    bgcolor: 'white',
    border: 'none',
    '&:focus': {outline: 'none'},
    borderRadius: '10px',
    boxShadow: 24,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  };

  export const methodListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
}

export const itemButtonStyle = {
    color: 'text.n20',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '27px',
    letterSpacing: '0em',
    paddingInline:'16px', 
    paddingBlock:'4px', 
    borderRadius:'8px', 
    '&.Mui-selected': {backgroundColor:'rgba(0, 0, 0, 0.15)'}, 
    '&.Mui-selected:hover': {backgroundColor:'rgba(0, 0, 0, 0.15)'},
}

export const titleStyle = {
    textAlign:'center', 
    color:'text.n20',
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '30px',
    letterSpacing: '0em',
    padding: 0,
    margin: 0,
}

export const buttonStyle = {
    maxWidth:'155px', 
    paddingInline:'16px', 
    paddingBlock:'12px', 
    width:'100%'
}