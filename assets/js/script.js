// //definizione variabili 

 const button = document.getElementById(`send`);


button.addEventListener(`click` , function(e){
  e.preventDefault();

  const owner = document.getElementById(`owner`).value;
  const distance = document.getElementById(`distance`).value; 
  const discount = document.getElementById(`discount`).value;

    let ticket  ;
    let price = distance * 0.21 ;
    let discountBaby = ((price * 20)/100);
    let discountOld = ((price * 40)/100);
    

  document.getElementById(`show-owner`).innerText = owner ;
  document.getElementById(`show-price`).innerText = price ;
  
  
  console.log( owner , distance , discount , price )

  
})




// let ticket  ;



// if(discount < 18 ) {
  
//  let ticket = price - discountBaby ;

//  parseFloat(console.log(ticket))

// }else if(discount > 65) { 
  
//  let ticket = price - discountOld ;

//  parseFloat(console.log(ticket))

// }else {
 
//  let ticket = price *1;

//  parseFloat(console.log(ticket))
// }

