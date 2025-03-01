import './check-out.component.scss';
import {useContext} from "react";
import {CartContext} from "../../../context/cart-context";

const CheckOut = () => {
	const {cartItems, addItemToCart} = useContext(CartContext);


	// const handleMinusQuantity = (item) => {
	// 	return cartItems.map(cartItem => cartItem.id === item.id ?
	// 		{...cartItem, quantity: cartItem.quantity + 1} : cartItem)
	// }
	// const handlePlusQuantity = (item) => {
	// 	return cartItems.map(
	// 		i => i.id === item.id ? {...i, quantity: i.quantity + 1} : item)
	// }

	return (
		<div>
			{cartItems.map(item => (
				<div key={item.id}>
					<img src={item.imageUrl} alt={`${item.name}`}/>
					<span>{item.name}</span>
					<div>
						<button onClick={() => addItemToCart(item, 'minus')}>-</button>
						{item.quantity}
						<button onClick={() => addItemToCart(item, 'plus')}>+</button>
					</div>
					<span>price</span>
					<button>X</button>
				</div>
			))}

		</div>
	)
}

export default CheckOut;