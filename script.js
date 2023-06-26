function calculerCarreAvecDelai(nombre, delai) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof nombre === 'number') {
        const carre = nombre * nombre;
        resolve(carre);
      } else {
        reject(new Error('La valeur fournie n\'est pas un nombre.'));
      }
    }, delai);
  });
}

calculerCarreAvecDelai(5, 2000)
  .then((resultat) => {
    console.log('Le carré du nombre est :', resultat);
  })
  .catch((erreur) => {
    console.error('Erreur :', erreur.message);
  });

  