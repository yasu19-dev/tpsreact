const initialState = {
    villes:[
        {id:1, nom:'Tanger'},
        {id:2, nom:'Rabat'},
        {id:31, nom:'Casablanca'},
    ],
    users:[
        {id:1, nom:'HARROUDI', prenom: 'Yasmine', ville:1},
        {id:2, nom:'SAOUSAOU', prenom: 'Zaid', ville:2}
    ]
}

const reducer = (state= initialState, action)=>{
    switch(action.type){
        case 'ADD_USER':
            return {...state, users:[...state.users, action.payload]};

        case 'UPDATE_USER':
            const user = state.users.find((u)=>u.id === parseInt(action.payload.id))
            if (user){
                user.nom = action.payload.nom;
                user.prenom = action.payload.prenom;
                user.ville = action.payload.ville;
            }
            return state;

        case 'DELETE_USER':
            return {...state, users:[...state.users.filter((u)=> u.id !== parseInt(action.payload))]};
        
        case 'FILTER_USER':
             return {...state, usersFilter:[...state.users.filter((u)=> u.ville === action.payload)]};
        
        case 'CLEAR_FILTER':
            return {...state, usersFilter:null};


        


        default :
            return state
    }
}
export default reducer