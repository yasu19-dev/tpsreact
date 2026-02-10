const initialState = {
  stagiaires: [
    {
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        nom: 'Zaid',
        prenom: 'SAOUSAOU',
        filiere: 'Développement Web',
    },
    {
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        nom: 'Yasmine',
        prenom: 'HARROUDI',
        filiere: 'Data Science',
    }
  ],
};

const stagiaireReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STAGIAIRE':
        return {
        ...state,
        stagiaires: [...state.stagiaires, action.payload],
        };
    default:
      return state;
  }
};

export default stagiaireReducer;