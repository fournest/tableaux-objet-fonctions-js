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

for (let i = jours.length -1 ; i >= 0; i--) {
    joursInverses.push(jours[i]);
    
}
console.log(joursInverses);


