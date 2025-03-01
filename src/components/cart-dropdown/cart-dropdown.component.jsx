import './cart-dropdown.styles.scss';
import Button from "../Button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import {Link, useNavigate} from "react-router";

const CartDropdown = () => {
	const {cartItems} = useContext(CartContext);
	const navigate = useNavigate();
	const goToCheckOutHandler = () => {
		navigate('/checkout');
	}
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)}
			</div>

			<Button onClick={goToCheckOutHandler}>
				GO TO CHECKOUT
			</Button>

		</div>
	)
}

export default CartDropdown;