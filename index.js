// Code your solutions in this file
let names =["Quiin", "Nelly" ," Clark"];

 let eventName = 'birthday';

function writeCards(names,eventName) {

let cards=[];


for (let i=0; i<names.length;i++) {

   let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;

   cards.push(message);
}

   return cards;
}


countDown(10);

function  countDown(number){

    if (number < 0)
        { console.log("Enter a positive integer.");
            return;
        }

        for (let i = number ; i >= 0; i--)

            {console.log(i)}

}


