export const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:'250px',md:'374px'},
    height: {xs:'520px',md:'502px'},
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
    gap: '12px',
    maxHeight:'350px', 
    overflowY:'scroll'
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