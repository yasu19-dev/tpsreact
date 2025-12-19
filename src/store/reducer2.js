const initialState = { panier: [] };

export default function reducer2 (state = initialState, action) {
  switch (action.type) {
    case 'ADD_PANIER':
        return {
          ...state,
          panier:[...state.panier,{id:action.id,qte_cmd:action.qte_cmd}]
        };
    default: return state;
  }
};