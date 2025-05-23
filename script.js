// exercice 1

let couleurs = ["rouge", "vert", "bleu"]
couleurs.push("jaune")
couleurs.shift()
console.log(couleurs);




// exercice 2

let nombres = [2, 7, 10, 23, 42];
let nbr = false;

for (const nombre of nombres) {
    if (nombre === 10) {
        nbr = true;
    }
}

if (nbr === true) {
    console.log(`10 est présent dans le tableau`);
} else {
    console.log(`10 n'est pas présent dans le tableau`);
}


// exercice 3

const ages = [12, 17, 22, 10, 34, 16];
let majorite = [];
for (const age of ages) {
    if (age >= 18) {

        majorite.push(age);

    }
}
console.log(majorite);

// exercice 4

const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

const joursInverses = [];

for (let i = jours.length - 1; i >= 0; i--) {
    joursInverses.push(jours[i]);

}
console.log(joursInverses);

// exercice 5

const notes = [15, 12, 17, 10, 8]
let result = 0
for (let i = 0; i < notes.length; i++) {
    result += notes[i]

}

console.log(result);

// exercice 6

const livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-exupery",
    pages: 96
}

console.log(livre.titre, livre.auteur);
livre.pages = 100;
console.log(livre.pages);
livre.langue = "français"
console.log(livre.langue);

// exercice 7

// let personne = { 
//     nom: "Alice",
//     age :25,
//     ville: "Paris"
// }


// for (const cle in personne) {

//     console.log( `cle ${cle}: valeur ${personne(cle)}`);

// }

// exercice 8

const etudiants = [
    {
        nom: `Roger`,
        age: 18,
        note: 15
    },

    {
        nom: `Bernard`,
        age: 19,
        note: 12
    },

    {
        nom: `Christian`,
        age: 22,
        note: 9
    },

    {
        nom: `Sébastien`,
        age: 16,
        note: 19
    }
];

for (let i = 0; i < etudiants.length; i++) {
    console.log(` ${etudiants[i].nom}, ${etudiants[i].note} / 20`);


}

// exercice 9

function bonjour(nom) {
    console.log(`Bonjour ${nom}`);

}

bonjour(`Sébastien`);

// exercice 10

function carre(nombre) {

    return nombre * nombre;
}

console.log(carre(3));
console.log(carre(5));

// exercice 11


function sommeTableau(nombres) {
    let somme = 0;
    for (let i = 0; i < nombres.length; i++) {
        somme = somme + nombres[i];
    }
    return somme;

}

console.log(sommeTableau([4, 7, 2, 9]));
// exercice 12

function adulte(age) {
    if (age >= 18) {
        return `Adulte`;
    } else {
        return `Mineur`;
    }
}

console.log(`16 ans :${adulte(16)}`);
console.log(`21 ans :${adulte(21)}`);
console.log(`12 ans :${adulte(12)}`);




// exercice 13

function filtrerAdultes(ages) {
    const adultes = [];
    for (let i = 0; i < ages.length; i++) {

        const ageActuel = ages[i];

        if (ageActuel >= 18) {
            adultes.push(ageActuel);
        }
    }
    return adultes;
}
const adultesAges = [12, 17, 22, 10, 34, 16];
const majorites = filtrerAdultes(adultesAges);
console.log(filtrerAdultes(adultesAges));

// exercice 15

const students = [
    {
        name:`Sébastien`, note: 15
    },

    { 
        name:`Sylvain`, note: 19
    },

    {
        name:`Eric`, note: 10
    }
];


function findBestStudent(note) {
    let note = students.note;
    for (let i = 0; i < students.length; i++) {
        const bestNote = note[i];
        if (bestNote > i) {
            students.push(note);
        }
        return students;
    }
}

console.log(findBestStudent(bestNote));
