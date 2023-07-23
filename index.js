// Code your solutions in this file

function writeCards(names, event) {
    const cards = [];
    for(let i = 0; i < names.length; i++ ){     
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        cards.push(message)
    }  
    return cards;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"] , "surprise"));


const numbers = []

function countDown(numbers){
    let i = 0  ;
    while(i < 11){
        console.log(i++)
    }
    return numbers;
}

countDown(numbers);



