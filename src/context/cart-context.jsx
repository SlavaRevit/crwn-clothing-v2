import {createContext, useState} from "react";

const addCartItem = (cartItems, productToAdd, action) => {
	const existingCartItem = cartItems.find(
		item => item.id === productToAdd.id);

	if (existingCartItem) {
		switch (action) {
			case 'plus':
				return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
					{...cartItem, quantity: cartItem.quantity + 1} : cartItem)
			case 'minus':
				return cartItems
					.map(cartItem => {
						if (cartItem.id !== productToAdd.id) {
							return cartItem;
						}
						return {
							...cartItem,
							quantity: cartItem.quantity - 1
						};
					})
					.filter(cartItem => cartItem.quantity > 0);
			default:
				return cartItems;
		}
	}

	return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {
	},
	cartItems: [],
	addItemToCart: () => {
	},
})


export const CartContextProvider = ({children}) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productToAdd, action) => {
		setCartItems(addCartItem(cartItems, productToAdd, action));
	}

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
	}
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	)
}