export const cart = [{
    productID: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}, {
    productID: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];

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