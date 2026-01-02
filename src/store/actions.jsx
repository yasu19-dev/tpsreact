export const AJOUTER_RECETTE = (recette) => ({
    type: 'AJOUTER_RECETTE',
    payload: recette
})

export const MODIFIER_RECETTE = (recette) => ({
    type: 'MODIFIER_RECETTE',
    payload: recette
})

export const SUPPRIMER_RECETTE = (code) => ({
    type: 'SUPPRIMER_RECETTE',
    payload: code
})