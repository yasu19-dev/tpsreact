const initialState = {
    articles: [
        { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
        { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" }, 
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return { ...state, articles: [...state.articles, action.payload] };
        // ... dans le switch du reducer.js
        case 'UPDATE_ARTICLE':
             return {
             ...state,
            articles: state.articles.map(art => 
            art.id === action.payload.id ? action.payload : art
        )
    };
        case 'DELETE_ARTICLE':
            return { ...state, articles: state.articles.filter(art => art.id !== action.payload) }; 
        default:
            return state; 
    }
};

export default reducer; 