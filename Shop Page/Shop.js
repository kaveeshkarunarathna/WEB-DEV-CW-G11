//  Reference - https://www.youtube.com/watch?v=Gnh-9IH6BEc

let payNow = document.querySelector('.btn-buy');
let checkoutForm = document.querySelector('.container');
let exitNow = document.querySelector('.exit')

// Open the checkout form
payNow.onclick = () => {
    checkoutForm.classList.add('active');
    const totalPrice = document.getElementById("cart-total-amountId").innerHTML;
    document.getElementById("total-amountId").innerHTML = totalPrice;

    const shopContainers = document.querySelectorAll(".main");
    shopContainers.forEach(container =>{
        container.style.display = "none";
    });
};
exitNow.onclick = () => {
    checkoutForm.classList.remove('active') ;
};

// cart open close
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
//open cart
cartIcon.onclick = () => {
    cart.classList.add('active');
};
// close cart
closeCart.onclick = () => {
    cart.classList.remove('active');
};

// making add to cart
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

//making function

function ready(){
    //remove item from cart
    var removeCartButton = document.getElementsByClassName('cart-remove');
    for (var i = 0; i < removeCartButton.length; i++){
        var button = removeCartButton[i];
        button.addEventListener("click",removeCartItem);
        
    }
    //quantity change
    var quantityInput = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInput.length; i++){
        var input = quantityInput[i];
        input.addEventListener("change",quantityChanged);
    }
    // Add to Cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click",addCartClicked);
        }
}
// quantity change - function (in cart increase quantity and reduce)
function quantityChanged(event){
    var input =  event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
    updateCartIcon();
} 
// remove cart item
function removeCartItem (event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();    
}
// Add Cart Function
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg);
    updateTotal();
    updateCartIcon();
}
function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox .classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for ( var i = 0; i <cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
            alert("You have Already added this item to cart");
            return;
        }
    }
    var cartBoxContent = `   <img src=${productImg} alt="" class="cart-img">
    <div class="details-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" name="" id="" value="1" class="cart-quantity">
    </div>
    <!-- remove item -->
    <i class='bx bxs-trash-alt cart-remove' ></i>` ;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click" , removeCartItem);
    cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change",quantityChanged);
    updateCartIcon();
}

function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName('cart-price')[0];
      var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
      var price = parseFloat(priceElement.innerText.replace('LKR', ''));
      var quantity = quantityElement.value;
      total += price * quantity;
    }
  
    var totalElement = document.getElementsByClassName('total-price')[0];
    if (total === 0 && cartBoxes.length === 0) {
      totalElement.innerText = 'LKR 0';
    } else {
      totalElement.innerText = 'LKR ' + total;
    }
  }
  // quantity in cart icon
  function updateCartIcon(){
    var cartBoxes = document.getElementsByClassName('cart-box');
    var quantity = 0;

    for (var i = 0; i < cartBoxes.length;i++){
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        quantity += parseInt(quantityElement.value);
    }
    var cartIcon = document.querySelector("#cart-icon");
    cartIcon.setAttribute("data-quantity", quantity); 
}
















