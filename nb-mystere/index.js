/*

Mini projet Le nombre mystère
Dans votre dossier sites/js/res04-js-j1, créez un nouveau dossier nb-mystere.

Le but du jeu c'est de faire deviner un nombre de votre choix (entre 0 et 100) à l'utilisateur.

Vous allez devoir lui demander de saisir un nombre grâce à window.prompt.

Si le nombre de l'utilisateur est inférieur au votre, utilisez window.alert pour lui dire que c'est plus.

Si le nombre de l'utilisateur est supérieur au votre, utilisez window.alert pour lui dire que c'est moins.

Si son nombre est égal au votre : dites lui qu'il a gagné. Le jeu doit tourner jusqu'à ce que l'utilisateur gagne.

Si vous avez besoin de transformer une chaine de caractère en nombre : utilisez parseInt().

let nb = "42"; // nb est de type String
let number = parseInt(nb); // number est un Number

*/

let randNum = 0;
let valeurChoisie = 0;
let isGoodValue = false;
let regame = true;
let answerRegame = "";
let endgame = false;
let isGoodRegameAnswer = false;


Game();

function Game(){
    while(regame === true)
    {
        randNum = Math.floor(Math.random() * 100);
        window.alert("Trouvez le nombre secret entre 0 et 100");
        while(endgame === false)
        {
            do
            {
                valeurChoisie = window.prompt("Quel nombre choisissez-vous?");
                valeurChoisie = parseInt(valeurChoisie);
            
                if(Number.isInteger(valeurChoisie)){
                
                    if(valeurChoisie < 101 && valeurChoisie > -1){
                        isGoodValue = true;
                    }
                    else
                    {
                        window.alert("Vous devez taper un nombre entre 0 et 100");
                        isGoodValue = false;
                    }
                }
                else
                {
                    window.alert("Vous devez taper un nombre");
                    isGoodValue = false;
                }
            
                if(valeurChoisie === null)
                {
                    return;
                }
            }while(!isGoodValue);
        
            if(valeurChoisie < randNum)
            {
                window.alert("Le nombre mystere est plus grand que " + valeurChoisie);
            }
            else if(valeurChoisie > randNum)
            {
                window.alert("Le nombre mystere est plus petit que " + valeurChoisie);
            }
            else
            {
                window.alert("Ouiiiiiii! Le nombre mystere est bien " + valeurChoisie);
                endgame = true;
            }
        }
        
        
        if(endgame)
        {
            while(!isGoodRegameAnswer)
            {
                answerRegame = window.prompt("Voulez-vous rejouer? y/n");
        
                if(answerRegame == 'y')
                {
                    isGoodRegameAnswer = true;
                
            
                }
                else if(answerRegame == 'n')
                {
                    isGoodRegameAnswer = true;
                }
                else if(answerRegame === null)
                {
                    return;
                }   
                else
                {
                    isGoodRegameAnswer = false;
                    window.alert("pardon?");
                }
            }
            if(answerRegame == 'y'){
                regame = true;
                endgame = false;
            }
            else
            {
                regame = false;
                endgame = true;
            }
        }
    }
}

