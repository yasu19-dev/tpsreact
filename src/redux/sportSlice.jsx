import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sportifs: [
    { idSportif: 1, nom: "adam", prenom: "Dev", email: "adam@gmail.com", ville: "Tangier", password: "adam" },
    { idSportif: 2, nom: "kimo", prenom: "dev", email: "kimo@gmail.com", ville: "Tangier", password: "kimo" },
    { idSportif: 3, nom: "admin", prenom: "admin", email: "admin@gmail.com", ville: "Tangier", password: "admin" },
  ],
  sports: [
    { idSportif: 1, nomSport: "Football", niveau: "Intermediate" },
    { idSportif: 2, nomSport: "Football", niveau: "Intermediate" },
    { idSportif: 1, nomSport: "Tennis", niveau: "Advanced" },
    { idSportif: 2, nomSport: "Swimming", niveau: "Beginner" },
  ],
  currentUser: null, 
};

const sportSlice = createSlice({
  name: 'sport',
  initialState,
  reducers: {
    inscription: (state, action) => {
      // Auto-incrément de l'ID
      const newId = state.sportifs.length > 0 ? state.sportifs[state.sportifs.length - 1].idSportif + 1 : 1;
      const newSportif = { ...action.payload, idSportif: newId };
      state.sportifs.push(newSportif);
    },
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    supprimerSport: (state, action) => {
      state.sports = state.sports.filter(s => 
        !(s.idSportif === action.payload.idSportif && s.nomSport === action.payload.nomSport)
      );
    },
    modifierNiveau: (state, action) => {
       // action.payload = { idSportif, nomSport, nouveauNiveau }
       const sport = state.sports.find(s => 
         s.idSportif === action.payload.idSportif && s.nomSport === action.payload.nomSport
       );
       if(sport) {
         sport.niveau = action.payload.nouveauNiveau;
       }
    }
  },
});

export const { inscription, login, logout, supprimerSport, modifierNiveau } = sportSlice.actions;
export default sportSlice.reducer;