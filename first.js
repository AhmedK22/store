
/*var demo = document.getElementById("demo");
demo.addEventListener('click' , function(){

  prompt("enter your name");
})*/






var productnameinp = document.getElementById("productinputname");
var productprice = document.getElementById("productinputprice");
var productcategory = document.getElementById("productinputcategory");
var productdesc = document.getElementById("productinputdesc");
var arr = [];
var btnnn=document.getElementById("btnnn");
//var myupdate=document.getElementById("up");
var cost=0;

var ajexx=/^[A-Z][a-z]{3,6}$/;

function check(){
  if(ajexx.test(productnameinp.value)==false){

    productnameinp.classList.add("is-invalid");
    productnameinp.classList.remove("is-valid");

    return false;
  }
  else{
    productnameinp.classList.add("is-valid");
    productnameinp.classList.remove("is-invalid");

    return true;

  }
}
productnameinp.addEventListener("blur" , check);


 if(localStorage.getItem("products")==null){
  arr=[];


}
 else{
  arr= JSON.parse(localStorage.getItem("products"));
  display();
}



function addproduct() {

  if(check()== true){

	
   var products = {
          
	      myname:productnameinp.value,
        price:productprice.value,
        category:productcategory.value,
        desc:productdesc.value,
            }
      
 arr.push(products);
 
 
localStorage.setItem ("products" , JSON.stringify(arr));

 display();
 clearform();
 
          }
     
          }
          
          
  function clearform() {
            productnameinp.value="";
            productprice.value="";
            productcategory.value="";
            productdesc.value="";
  }




function display() {
  var cartona="";

for( i=0;i<arr.length;i++){
    cartona +=`<tr><td>`+i+`</td>
    <td>`+arr[i].myname+`</td>
    <td>`+arr[i].price+`</td>
    <td>`+arr[i].category+`</td>
    <td>` +arr[i].desc+`</td>
    <td><button id="btnn" onclick= "del(`+i+`)">delete</button></td>
    <td><button onclick= "update(`+i+`)">update</button></td></tr>`



}
document.getElementById("elbody").innerHTML=cartona;

}




function searchh(term){
  var carton="";

  for( var i=0 ; i < arr.length ; i++){
    if(arr[i].myname.includes(term) == true){

      carton+=`<tr><td>`+i+`</td>
      <td>`+arr[i].myname+`</td>
      <td>`+arr[i].price+`</td>
      <td>`+arr[i].category+`</td>
      <td>` +arr[i].desc+`</td></tr>`
      
  }


}
document.getElementById("elbody").innerHTML=carton;
}

function del(index) {
  arr.splice(index,1);
  localStorage.setItem ("products" , JSON.stringify(arr));

 display();
  
  
}

function update(index) {
  cost= index;
  productnameinp.value=arr[index].myname;
  productprice.value=arr[index].price;
  
  productcategory.value=arr[index].category;
  
  productdesc.value = arr[index].desc;
  btnnn.innerHTML="saveupdate";
}



btnnn.addEventListener("click" , function(){

  if(btnnn.innerHTML=="addproduct"){
    addproduct();

  }
  else{
    saveproduct();
  }
})



function saveproduct(){
  var product = {
          
    myname:productnameinp.value,
    price:productprice.value,
    category:productcategory.value,
    desc:productdesc.value,
         }
         arr[cost]=product;
         localStorage.setItem ("products" , JSON.stringify(arr));
          display();
          clearform();
          btnnn.innerHTML="addproduct";

}

