export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function addItemToCart(productID) {
    let inside = 0;
    cart.forEach((product) => {
      if(product.productID === productID){
          product.quantity += 1;
          inside = 1;
      }
    });
    if(!inside){
      let obj = {
        productID: productID,
        quantity: 1,
        deliveryID: 0
      };
      cart.push(obj);
    }
    saveToStorage();
}

export function removeProduct(productID) {
    cart.forEach((cartItem,index) => {
            if(productID === cartItem.productID){
                    cart.splice(index,1);
            }
        })
        saveToStorage();
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}