const initialState = {
    users:[
    {id:1, name:'Yasmine Harroudi', email:'yasmine@gmail.com'},
    {id:2, name:'Zaid Saousaou', email:'zaid@gmail.com'}
]};

const reducer = (state= initialState, action)=>{
    switch(action.type){
        case 'ADD_USER':
            return {...state, users:[...state.users, action.payload]}
        case 'UPDATE_USER':
            const user = state.users.find((u)=>u.id === parseInt(action.payload.id))
            if (user) {
                user.name = action.payload.name
                user.email = action.payload.email
            }
            return state
        case 'DELETE_USER':
            return {...state, users:[...state.users.filter((u)=>u.id !== parseInt(action.payload))]}
        default :
            return state

    }
}

export default reducer