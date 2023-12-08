export const navbarWrapperStyle = {
    backgroundColor: 'primary.main',
    width: '100%',
    height: '91.51px',
    display: 'flex',
    alignContent: 'center'
}

export const navbarMenuListStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    color: 'primary.main',
    px: {xs:'12px', sm:'35px', md:'50px'},
    my: 'auto'
}

export const homeButtonStyle = {padding: '10px', display: 'flex', alignContent:'center'}

export const notLoginMenuListStyle = {
    listStyleType:'none',
    display: 'flex',
    flexDirection: 'row',
    gap:'40px'
}

export const loggedInMenuListStyle = {
    listStyleType:'none',
    display: {
        xs:'none',
        md:'flex'
    },
    flexDirection: 'row',
    gap:'40px'
}

export const loggedInMobileMenuListStyle = {
    display: 'flex',
    aliignItems: 'center',
    justifyContent: 'center'
}

export const drawerMenuWrapperStyle = {
    width: '200px',
    height: '100vh',
    minHeight: '100vh',
}
