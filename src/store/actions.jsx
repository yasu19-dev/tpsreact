export const ADD_ARTICLE=(article)=>
{
return {type: 'ADD_ARTICLE',article}
}


export const DELETE_ARTICLE=(id)=>
{
return {type: 'DELETE_ARTICLE',id}
}

// Dans store/actions.js
export const UPDATE_ARTICLE = (data) => {
    return {
        type: 'UPDATE_ARTICLE',
        payload: data  // C'est ici que le reducer va chercher l'info
    }
}
