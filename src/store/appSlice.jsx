// store/appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Jeu d'essai pour les Utilisateurs [cite: 10, 13]
  utilisateurs: [
    { login: 'admin1', nom: 'Admin Chief', mot_passe: '1234', role: 'administrateur' }, // [cite: 11]
    { login: 'modo1', nom: 'Modo Test', mot_passe: '1234', role: 'modérateur' }, // [cite: 11]
    { login: 'user1', nom: 'Membre Un', mot_passe: '1234', role: 'Membre' } // [cite: 11]
  ],
  // Jeu d'essai pour les Documents [cite: 8, 13]
  documents: [
    { code_document: 1, nom_document: 'Cours React', etat_document: 1, nom_theme: 'Frontend', login: 'user1' },
    { code_document: 2, nom_document: 'Exercices Laravel', etat_document: 1, nom_theme: 'Backend', login: 'user1' }
  ],
  // Jeu d'essai pour les Commentaires [cite: 9, 13]
  commentaires: [
    { code_commentaire: 1, date_commentaire: '2026-02-18', texte_commentaire: 'Super cours !', etat_commentaire: 1, code_document: 1, login: 'user1' },
    { code_commentaire: 2, date_commentaire: '2026-02-17', texte_commentaire: 'Spam indésirable', etat_commentaire: 2, code_document: 1, login: 'user1' }
  ],
  currentUser: null // Utilisateur connecté
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Inscription et Connexion [cite: 14, 15]
    login: (state, action) => {
      const user = state.utilisateurs.find(u => u.login === action.payload.login && u.mot_passe === action.payload.mot_passe);
      if (user) state.currentUser = user;
    },
    logout: (state) => { state.currentUser = null; },
    register: (state, action) => {
      state.utilisateurs.push({ ...action.payload, role: 'Membre' }); // Inscription membre [cite: 3, 15]
    },
    
    // Actions Modérateur [cite: 5, 20, 21]
    changerEtatCommentaire: (state, action) => {
      const { id, nouvelEtat } = action.payload; // 1 = publié, 2 = bloqué [cite: 6]
      const index = state.commentaires.findIndex(c => c.code_commentaire === id);
      if (index !== -1) state.commentaires[index].etat_commentaire = nouvelEtat;
    },

    // Actions Administrateur [cite: 24, 25, 28]
    modifierRoleUtilisateur: (state, action) => {
      const { login, nouveauRole } = action.payload; // On modifie seulement le rôle [cite: 24]
      const user = state.utilisateurs.find(u => u.login === login);
      if (user) user.role = nouveauRole;
    },
    supprimerUtilisateur: (state, action) => {
      state.utilisateurs = state.utilisateurs.filter(u => u.login !== action.payload);
    },
    reinitialiserMotDePasse: (state, action) => {
      const { login, nouveauMdp } = action.payload;
      const user = state.utilisateurs.find(u => u.login === login);
      if (user) user.mot_passe = nouveauMdp; // Initialisation mot de passe [cite: 25]
    },
    supprimerCommentairesMultiples: (state, action) => {
      const idsToDelete = action.payload; // Tableau d'IDs
      state.commentaires = state.commentaires.filter(c => !idsToDelete.includes(c.code_commentaire)); // Suppression groupée 
    }
  }
});

export const { login, logout, register, changerEtatCommentaire, modifierRoleUtilisateur, supprimerUtilisateur, reinitialiserMotDePasse, supprimerCommentairesMultiples } = appSlice.actions;
export default appSlice.reducer;