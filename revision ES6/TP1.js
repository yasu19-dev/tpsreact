// Ex 1:
const input = [1, 2, 3, 4, 5];
const carre = input.map(num => num*num);
console.log(carre);

// Ex 2:
const personnes = [
{ nom: "Rami", age: 33, estMember: true },
{ nom: "Fatihi", age: 24, estMember: false },
{ nom: "Chakib", age: 45, estMember: true },
{ nom: "Mounir", age: 37, estMember: false },
];

const nomAges = personnes.filter(pers => pers.age > 35 && pers.estMember === true)
                .map(pers => pers.nom);
console.log(nomAges)

// Ex 3:
const input2 = [1, -2, 3, 4, -5]
    const numPositifs = input2.filter(num => num > 0);
    console.log(numPositifs);

    const somme = input2.reduce((acc,num) => acc+num,0);
    console.log("Somme des nombres : " +somme)

    const sommePositifs = input2.filter(num => num > 0).reduce((acc,num) => acc+num,0);
    console.log("Somme des nombres Positifs : " +sommePositifs)


