import './cart-icon.component.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CartIcon = () => {
	const {isCartOpen, setIsCartOpen, cartItems} = useContext(CartContext);

	const quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)

	const handleCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	}

	return (
		<div className="cart-icon-container" onClick={handleCartOpen}>
			<ShoppingIcon className="shopping-icon"/>
			<span className="item-count">{quantity}</span>
		</div>
	)
};

export default CartIcon;