export const addUserAction = (user)=>{
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export const updateUserAction = (user)=>{
    return {
        type: 'UPDATE_USER',
        payload: user
    }
}

export const deleteUserAction = (id)=>{
    return {
        type: 'DELETE_USER',
        payload: id
    }
}

export const filterUserAction = (idVille)=>{
    return {
        type: 'FILTER_USER',
        payload: idVille
    }
}

export const clearfilterAction = ()=>{
    return {
        type: 'CLEAR_FILTER'
    }
}