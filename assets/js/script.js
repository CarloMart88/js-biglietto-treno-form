// //definizione variabili 

const distance = document.getElementById(`distance`).value; 
const age = document.getElementById(`age`).value;

let price = percorso * 0.21 ;

let discountBaby = ((price * 20)/100);
let discountOld = ((price * 40)/100);

let ticket  ;


if(age < 18 ) {
  
 let ticket = price - discountBaby ;

 parseFloat(console.log(ticket))

}else if(age > 65) { 
  
 let ticket = price - discountOld ;

 parseFloat(console.log(ticket))

}else {
 
 let ticket = price *1;

 parseFloat(console.log(ticket))
}

