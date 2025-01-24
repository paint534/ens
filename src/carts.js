
function showCartTable() {
    
     var itemCount = 0;
     var grandTotal = 0;
     var price = 0;
     var quantity = 0;
     var subTotal = 0;
     
     if (sessionStorage.getItem('shopping-cart')) {
     
         var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
         itemCount = shoppingCart.length;
     
         shoppingCart.forEach(function(item){

             var cartItem = JSON.parse(item);
             price = parseFloat(cartItem.price);
             quantity = parseInt(cartItem.quantity);
             subTotal = price * quantity
     
             document.getElementById("cartTableBody").innerHTML  += "<div class='products'><p class='imageitems'>" +
                                                                        "<img  src='./louisimage/"+ cartItem.photo +"'></p>" +
                                                                        "<p class='items'>" + cartItem.productName + "<br>$" +  price.toFixed(2) + "</p></div>";
                 grandTotal += subTotal;

         });
                document.getElementById("totalAmount").innerHTML  = "<div id='sorry' class='sorrytotal' >" +  grandTotal.toFixed(0)  +"</div>" ;
     
        }
        
}

showCartTable();


/////////////////////////////////////////

function myfunctionss(){
    var x  = document.getElementById("sorry").innerHTML;
        document.getElementById("amount").value = x ;
        document.getElementById("totaltoallcarts").innerHTML = x ;

}

setInterval(myfunctionss, 1000);
 var x  = document.getElementById("sorry").innerHTML;
   document.getElementById("amount").value = x ;



