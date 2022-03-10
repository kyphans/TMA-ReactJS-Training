export const addProductToCart = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: product,
    }
}

export const removeProductToCart = (product) => {
    return {
        type: 'REMOVE_PRODUCT_TO_CART',
        payload: product,
    }
}