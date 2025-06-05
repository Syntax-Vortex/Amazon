export const cart = [];

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
        quantity: 1
      };
      cart.push(obj);
    }
}