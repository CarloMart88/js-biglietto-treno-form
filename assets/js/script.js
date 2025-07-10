// //definizione variabili 

 const button = document.getElementById(`send`);


button.addEventListener(`click` , function(e){
  e.preventDefault();

const MathRandom = () => {
  return Math.floor(Math.random() * 10000)
}



  const owner = document.getElementById(`owner`).value;
  const distance = document.getElementById(`distance`).value; 
  const discount = document.getElementById(`discount`).value;
  const math = document.getElementById(`math`);

  math.innerHTML += MathRandom()
    
    let price = distance * 0.21 ;
    let discountBaby = ((price * 20)/100);
    let discountOld = ((price * 40)/100);

    if (discount == `Minorenne` ){
      document.getElementById(`show-price`).innerText = price - (discountBaby).toFixed(2);

    }else if( discount == `Maggiorenne`) {

      document.getElementById(`show-price`).innerText = price

    }else {

      document.getElementById(`show-price`).innerText = (price - discountOld).toFixed(2);
    }
    


  document.getElementById(`show-owner`).innerText = owner ;
   
  
  console.log( owner , distance , discount , price )

  
})







