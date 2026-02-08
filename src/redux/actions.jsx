// Types d'actions
export const MODIFIER_DUREE = 'MODIFIER_DUREE';
export const AJOUTER_COURS = 'AJOUTER_COURS';

// Créateurs d'actions
export function modifierDureeAction(id, nouvelleDuree) {
  return {
    type: MODIFIER_DUREE,
    payload: { id, nouvelleDuree }
  };
}

export function ajouterCoursAction(nouveauCours) {
  return {
    type: AJOUTER_COURS,
    payload: nouveauCours
  };
}