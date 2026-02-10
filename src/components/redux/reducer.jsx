// redux/reducer.js
const initialState = {
    employes: [
        { nom: "Zaid", prenom: "Riyad", fonction: "Ingenieur", image: "url..." }
    ]
};

const employeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYE':
            return { ...state,
                     employes: [...state.employes, action.payload] };
        default:
            return state;
    }
};
export default employeReducer;