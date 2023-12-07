export const handleSelect = async (cartItemId, postData, userId, selectedState, setCartDataChange) => {
    await selectCartItem(postData, cartItemId, selectedState, userId)
    setCartDataChange(prev=>!prev)
}

const selectCartItem = async (postData, cartItemId, selectedState, userId) => {
    await postData(`${import.meta.env.VITE_API_URL}/TsOrderDetail/UpdateSelectedCartItem`, 'checkoutFlow', false, {
        cartItemId: cartItemId,
        isSelected: selectedState? false : true,
        userId: userId
    })
}

export const handleSelectAll = (cartList, postData, userId, selectedState, setAllChecked, setCartDataChange) => {
    cartList.forEach((cartItem, index) => {
        selectCartItem(postData, cartItem.id, selectedState, userId)
    })
    
    setTimeout(()=>{
        setAllChecked(!selectedState)
        setCartDataChange(prev=>!prev)
    }, 200)
    // if(!isSelectedAll(cart)) {
    //     setCart(cart.map((item, index)=>{
    //         return {...item, selected: true}
    //     }))
    //     setAllChecked(true)
    //     return
    // } else {
    //     setCart(cart.map((item, index)=>{
    //         return {...item, selected: false}
    //     }))
    //     setAllChecked(false)
    // }
}

export const isSelectedAll = (cart) => {
    if(cart.length < 1) return false
    for (let i=0; i<cart.length; i++) {
        if(!cart[i].isSelected) return false
    }
    return true
}

export const handleDelete = async (cartItemId, postData, setCartDataChange) => {
    // const deleteTarget = e.target.id
    // setCart(cart.filter(item=>{
    //     if(item.id == deleteTarget){
    //         return false
    //     }
    //     return true
    // }))
    await postData(`${import.meta.env.VITE_API_URL}/TsOrderDetail/DeleteFromCart`, 'checkoutFlow', false, {id: cartItemId})
    setCartDataChange(prev=>!prev)
}
