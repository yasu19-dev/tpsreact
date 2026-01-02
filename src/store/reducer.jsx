const initialeState =  {
    themes: [
        { nom: 'cake', description: 'les cakes et les brownies' },
        { nom: 'pate', description: 'les pates, les lasagnes et les gratins' },
        { nom: 'tarte', description: 'tartes salées et sucrées' }
    ],
    recettes: [] 
};


const reducer = (state = initialeState, action) =>{
    switch(action.type){
        case 'AJOUTER_RECETTE':
            return {...state, recettes:[...state.recettes, action.payload]};
        
        case 'MODIFIER_RECETTE':
            return {...state, recettes: state.recettes.map((recette)=>
                recette.code === action.payload.code ? action.payload : recette
            )};
        case 'SUPPRIMER_RECETTE':
            return {...state, recettes: state.recettes.filter((recette)=>recette.code !== action.payload)};
        
            default:
                return state;
    }
}

export default reducer

