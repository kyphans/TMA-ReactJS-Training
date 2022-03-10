const initialState = {
    cart: [],
    totalPrice: 0,
}

const todoReducer = (state = initialState, action) => {
    let newCart

    switch (action.type) {

        case "ADD_PRODUCT_TO_CART":
            newCart = [...state.cart]
            const found = newCart.find(product => product.id === action.payload.id)

            if (found !== undefined) {
                newCart = newCart.map(element => element.id === action.payload.id ? { ...element, quantity: element.quantity + 1 } : element);
                console.log("ket qua  ", newCart);

            } else {
                newCart.push(action.payload)
            }

            return {
                ...state,
                cart: newCart,
            }

        case "REMOVE__PRODUCT_TO_CART":
            newCart = [...state.cart]
            newCart = newCart.filter((product, index) => product !== action.payload)
            return {
                ...state,
                cart: newCart,
            }

        default:
            return state
    }
}

export default todoReducer;