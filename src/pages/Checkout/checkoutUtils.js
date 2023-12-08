export const handleSelect = async (cartList, setCartList, cartItemId, postData, userId, selectedState, setCartDataChange, token) => {
    setCartList(cartList.map((item)=>{
        return item.id == cartItemId ? {...item, isSelected: !item.isSelected} : item
    }))

    await selectCartItem(postData, cartItemId, selectedState, userId, token)
    setCartDataChange(prev=>!prev)
}

const selectCartItem = async (postData, cartItemId, selectedState, userId, token) => {
    await postData(`${import.meta.env.VITE_API_URL}/TsOrderDetail/UpdateSelectedCartItem`, 'checkoutFlow', false, {
        cartItemId: cartItemId,
        isSelected: selectedState? false : true,
        userId: userId
    }, { 'Authorization': `Bearer ${token}` })
}

export const handleSelectAll = async (cartList, setCartList, postData, userId, allChecked, setAllChecked, setCartDataChange, token) => {
    if(!isSelectedAll(cartList)) {
        setCartList(cartList.map((item, index)=>{
            return {...item, isSelected: true}
        }))
        setAllChecked(true)
    } else {
        setCartList(cartList.map((item, index)=>{
            return {...item, isSelected: false}
        }))
        setAllChecked(false)
    }
    
    for (let i=0; i<cartList.length; i++) {
        await selectCartItem(postData, cartList[i].id, allChecked, userId, token)
    }
    setCartDataChange(prev=>!prev)
}

export const isSelectedAll = (cart) => {
    if(cart.length < 1) return false
    for (let i=0; i<cart.length; i++) {
        if(!cart[i].isSelected) return false
    }
    return true
}

export const handleDelete = async (cartItemId, postData, setCartDataChange, cartList, setCartList, token) => {
    setCartList(cartList.filter(item=>{
        if(item.id == cartItemId){
            return false
        }
        return true
    }))
    await postData(`${import.meta.env.VITE_API_URL}/TsOrderDetail/DeleteFromCart`, 'checkoutFlow', false, {id: cartItemId}, { 'Authorization': `Bearer ${token}` })
    setCartDataChange(prev=>!prev)
}
