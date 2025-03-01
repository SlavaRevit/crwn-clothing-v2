import {createContext, useState} from "react";

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		item => item.id === productToAdd.id);

	if (existingCartItem) {
		return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
			{...cartItem, quantity: cartItem.quantity + 1} : cartItem)
	}

	return [...cartItems, {...productToAdd, quantity: 1}];
}


const deleteItemFromCart = (cartItems, itemToDelete) => {
	return cartItems
		.map(cartItem => {
			if (cartItem.id !== itemToDelete.id) {
				return cartItem;
			}
			return {
				...cartItem,
				quantity: cartItem.quantity - 1
			};
		})
		.filter(cartItem => cartItem.quantity > 0);
}

const deleteItemFromCartTotally = (cartItems, itemToDelete) => {
	return cartItems.filter(item => item.id !== itemToDelete.id);
}

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {
	},
	cartItems: [],
	addItemToCart: () => {
	},
	deleteCartItem: () => {
	},
	deleteItemTotally: () => {
	},
})


export const CartContextProvider = ({children}) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	}

	const deleteCartItem = (productToDelete) => {
		setCartItems(deleteItemFromCart(cartItems, productToDelete));
	}

	const deleteItemTotally = (productToDelete) => {
		setCartItems(deleteItemFromCartTotally(cartItems, productToDelete));
	}

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		deleteCartItem,
		deleteItemTotally,
	}
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	)
}