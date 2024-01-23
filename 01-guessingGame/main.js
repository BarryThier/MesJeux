const guessNumber = () => {
    let findNumber = Math.ceil(Math.random() * 10);
    let score = 1;
    alert(findNumber);
    let numberOfUtilisateur = prompt('Devinez une valeur comprise entre (1 et 10 inclus)');
    while(findNumber != numberOfUtilisateur)  {
       prompt('ECHEC. Devinez à nouveau une valeur comprise entre (1 et 10)')
       score ++;
    }
   
    alert(`Félicitation vous avez trouvé en  ${score} coups et la vraie valeur est : ${findNumber}`);

}
guessNumber();
