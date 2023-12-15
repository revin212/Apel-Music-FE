export const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:'250px'},
    height: "120px",
    bgcolor: 'white',
    border: 'none',
    '&:focus': {outline: 'none'},
    borderRadius: '10px',
    boxShadow: 24,
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '32px'
  };

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
    maxWidth:'110px', 
    paddingInline:'16px', 
    paddingBlock:'8px', 
    width:'110px',
}