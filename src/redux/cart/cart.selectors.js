import { createSelector } from 'reselect';

// input selectors just take in state and return a specific part of the state for use
const selectCart = state => state.cart;

// output selectors make use of the createSelector function and input selectors to return a piece of state too
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total+cartItem.quantity,0)
);




export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total+cartItem.quantity*cartItem.price,0)
);