import './cart-dropdown.component.scss';
import Button from "../Button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart-context";
import {Link} from "react-router";

const CartDropdown = () => {
	const {cartItems} = useContext(CartContext);
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)}
			</div>
			<Link to='/checkout'>
				<Button>
					GO TO CHECKOUT
				</Button>
			</Link>
		</div>
	)
}

export default CartDropdown;