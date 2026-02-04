let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addCart(p){

cart.push(p);

localStorage.setItem("cart",JSON.stringify(cart));

alert("Adicionado ao carrinho!");

}
