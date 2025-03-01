import './check-out.styles.scss';
import {useContext, useEffect} from "react";
import {CartContext} from "../../../context/cart.context";
import './check-out.styles.scss';
import CheckOutItem from "../../check-out-item/check-out-item.component";

const CheckOut = () => {
	const {setIsCartOpen, cartItems, addItemToCart, deleteCartItem} = useContext(
		CartContext);

	useEffect(() => {
		setIsCartOpen(false);
	}, [])

	const total = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity, 0);


	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>

			{cartItems.map(item => {
				return (
					<CheckOutItem ket={item.id} cartItem={item}/>
				)
			})}
			<span className="total">Total {total}</span>
		</div>
	)
}

export default CheckOut;