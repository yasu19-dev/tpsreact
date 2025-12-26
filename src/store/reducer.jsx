const initialState = {
    articles: [
{ id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
{ id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
],
}

const reducer = (state=initialState, action)=> {
    switch (action.type){
        case 'ADD_ARTICLE' :
            const article ={
                id:state.articles[state.articles.length-1].id+1,
                title:action.article.title,
                body:action.article.body
            }
            return {...state, articles:[...state.articles,article]}
        case 'DELETE_ARTICLE' :
            return {...state, articles: state.articles.filter(art=>art.id!== action.id)}
        case 'UPDATE_ARTICLE':
            return {...state, 
                   articles: state.articles.map(art => 
            (art.id === action.payload.id) ? action.payload : art
        )
    };
        default:
            return state;
    }
}

export default reducer;