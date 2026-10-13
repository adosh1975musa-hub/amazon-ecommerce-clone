export const cart = [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    }, {
        productId: '15b6f1e0-3c5b-4d8a-9f2e-1c2b3a4d5e6f',
        quantity: 1
    }];

export function addToCart(productId) {
    let matchingProduct;

    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            matchingProduct = cartItem;
        }
    });

    if (matchingProduct) {
        matchingProduct.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}