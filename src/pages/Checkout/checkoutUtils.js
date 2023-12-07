export const handleSelect = async (cartList, setCartList, cartItemId, postData, userId, selectedState, setCartDataChange) => {
    setCartList(cartList.map((item)=>{
        return item.id == cartItemId ? {...item, isSelected: !item.isSelected} : item
    }))

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

export const handleSelectAll = async (cartList, setCartList, postData, userId, allChecked, setAllChecked, setCartDataChange) => {
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
        await selectCartItem(postData, cartList[i].id, allChecked, userId)
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

export const handleDelete = async (cartItemId, postData, setCartDataChange, cartList, setCartList) => {
    setCartList(cartList.filter(item=>{
        if(item.id == cartItemId){
            return false
        }
        return true
    }))
    await postData(`${import.meta.env.VITE_API_URL}/TsOrderDetail/DeleteFromCart`, 'checkoutFlow', false, {id: cartItemId})
    setCartDataChange(prev=>!prev)
}
