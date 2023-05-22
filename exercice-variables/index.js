//Exercice 0

const character = "Legolas";
console.log(character);

let i = 0;

let name = "Legolas";
console.log(name);
name = "Gimli";
console.log(name);

let nombreGrand = 1515141514645;
console.log(nombreGrand);

let virgule = 15.15141514645;
console.log(virgule);

let negatif = -15151;
console.log(negatif);

let yes = true;
console.log(yes);

let no = false;
console.log(no);


//Exercice 1.1

while(i < 11){
    console.log(i);
    i++;
}

i = 25;

while(i > 19){
    console.log(i);
    i--;
}

i = 0;

while(i < 21){
    console.log(i);
    i = i+2;
}


//Exercice 1.2
i = 0;

while(i < 11){
    if(i%2 == 0){
        console.log("Pair");
    }
    else
    {
        console.log("Impair");
    }
    i++;
}

//Exercice 1.3

i = 0;

while(i < 101)
{
    if(i < 51)
    {
        if(i%2 == 0){
            console.log(i);
            console.log("Pair");
        }
    }
    else
    {
        if(i%3 == 0)
        {
            console.log(i);
            if(i%2 == 0){
                console.log("Pair");
            }
            else
            {
                console.log("Impair");
            }
            
        }
    }
    i++;
}
