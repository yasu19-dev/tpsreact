let livres = [{id : 10, titre: 'POO', auteur:'RAMI', prix: 300},
    {id : 11, titre: 'JS ES6', auteur:'Yasmine', prix: 250},
    {id : 12, titre: 'Algorithme', auteur:'Zaid', prix: 330},
    {id : 13, titre: 'HTML&CSS', auteur:'RAMI', prix: 340}
];

// Creer la liste titres contenant tous les titres de livres
let titres = livres.map(function(livre){
    return livre.titre
})
console.log(titres);
//ou
let titres2 = livres.map(livre => livre.titre);
console.log(titres2);
// Creer la lise titresRAMI contenant btous les livres de l'auteur RAMI
let titresRAMI = livres.filter(livre => livre.auteur == 'RAMI').map(livre => livre.titre);
console.log(titresRAMI);

// Chercher le livre dont l'id egal a 12
let livre12 = livres.find(livre => livre.id == 12);
console.log(livre12);

// Calculer le total des prix
let totalPrix = livres.reduce((totalPrix, livre)=> totalPrix+=livre.prix,0);
console.log('Total prix:'+ totalPrix);

// Creer une copie de livres 
let mesLivres = [...livres];
console.log(mesLivres);


