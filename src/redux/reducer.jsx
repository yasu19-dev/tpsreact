import { MODIFIER_DUREE, AJOUTER_COURS } from './actions';

// État initial avec les données fournies dans l'énoncé [cite: 108, 118-129]
const initialState = {
  courses: [
    { 
      id: 1, 
      nom: 'Technicien informatique', 
      duree: 12, 
      formateur: 'MSBAIN', 
      diplome: 'Niveau 6',
      details: 'Gérez un parc informatique sécurisé...' 
    },
    { 
      id: 2, 
      nom: 'Supply chain analyst', 
      duree: 12, 
      formateur: 'MrFAKHRI', 
      diplome: 'Niveau 6',
      details: 'Exploitez et interprétez les données...' 
    } 
  ]
};

// Logique du Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    
    case MODIFIER_DUREE:
      return {
        ...state,
        // On crée un nouveau tableau avec la durée mise à jour pour le cours ciblé 
        courses: state.courses.map(function(c) {
          if (c.id === parseInt(action.payload.id)) {
            return { ...c, duree: action.payload.nouvelleDuree };
          }
          return c;
        })
      };

    case AJOUTER_COURS:
      // On ajoute le nouveau cours à la fin du tableau existant 
      return {
        ...state,
        courses: [...state.courses, action.payload]
      };

    default:
      return state;
  }
}

export default reducer;