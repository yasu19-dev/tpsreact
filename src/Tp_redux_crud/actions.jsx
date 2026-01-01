export const ADD_USER = (user)=>
{
    return {type: 'ADD_USER', payload:user}
}

export const UPDATE_USER = (newUser)=>
{
    return {type: 'UPDATE_USER',payload:newUser}
}

export const DELETE_USER = (id)=>
{
    return {type: 'DELETE_USER', payload:id}
}