
// update function input connect
function updateProduct(productId,isIncrease,price){

  let productNumber= document.getElementById(productId +'-number');
 let productCount=productNumber.value ;


 if(isIncrease==true){
  productNumber.value =parseInt(productCount)+1;
 }else if (productCount>0){
  productNumber.value =parseInt(productCount)-1;
 }
 productCount=productNumber.value 

 let productTotal=document.getElementById(productId+'-total')
 productTotal.innerText=productCount*price;

 totalQuantity();
}

function productQuantity(id){
  let productInput =document.getElementById(id+'-number');
  let productNumber=parseFloat(productInput.value);
  return productNumber;

}

function totalQuantity(){
  let phoneAmount=productQuantity('phone')*100;
  let caseAmount=productQuantity('case')*50;
  let subTotal=phoneAmount+caseAmount;
 let tax=subTotal/10
 let total=subTotal+tax;

document.getElementById('sub-total').innerText=subTotal;
document.getElementById('tax-total').innerText=tax;
document.getElementById('price-total').innerText=total;


}
 




// mobile plus button
document.getElementById("phone-plus").addEventListener("click",function(){
  updateProduct('phone',true,100);
 

})


// mobile minus button
document.getElementById("phone-minus").addEventListener("click",function(){updateProduct('phone',false,100)
})
  
 

// case plus button
document.getElementById('case-plus').addEventListener('click',function(){
  updateProduct('case',true,50)
})


// case minus button
document.getElementById('case-minus').addEventListener('click',function(){updateProduct('case',false,50)
})
  



