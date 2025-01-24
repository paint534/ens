function addToCart(element){

    var productParent = $(element).closest('div.product-item');
    var price = $(productParent).find('.price span').text();
    var productName = $(productParent).find('.productname').text();
    var photo = $(productParent).find('.itemsphotos').text();
    var quantity = $(productParent).find('.product-quantity').val();
    
    var cartItem = {
        productName: productName,
        price: price,
        photo:photo,
        quantity: quantity
    };
    
    var cartItemJSON = JSON.stringify(cartItem);

    var cartArray = new Array();

        if (sessionStorage.getItem('shopping-cart')){
             cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
        }
             cartArray.push(cartItemJSON);

    var cartJSON = JSON.stringify(cartArray);

        sessionStorage.setItem('shopping-cart', cartJSON);

         document.getElementById("dfsdfsdf").innerHTML = cartArray.length;

} 

const element = document.getElementById("cartTableBody");
const numb = element.querySelectorAll(".products");
document.getElementById("demo").innerHTML = numb.length;

