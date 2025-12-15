// Creer une classe Document contenant les attributs id et dateEdition

class Document{
    constructor(id, dateEdition){
        this.id = id;
        this.dateEdition = dateEdition;
    }  
}

// Creer la classe Livre qui hérite de la classe Document contenant en plus les attributs titre et auteur

class Livre extends Document{
    constructor(id, dateEdition, titre, auteur){
        super(id, dateEdition);
        this.titre = titre;
        this.auteur = auteur;
    }
    infoLivre(){
        return `Livre id: ${this.id} titre: ${this.titre} date Edition: ${this.dateEdition}`
    }
}

// Creer deux instances de Document
let doc1 = new Document(1,'19/03/2000');
let doc2 = new Document(1,'14/05/2001');


