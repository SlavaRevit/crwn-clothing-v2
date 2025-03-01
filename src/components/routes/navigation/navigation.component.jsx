import {Outlet, Link} from "react-router";
import './navigation.component.scss';

import {ReactComponent as CrwnLogo} from "../../../assets/crown.svg";
import {useContext} from "react";
import {UserContext} from "../../../context/user.context";
import {signOutUser} from "../../../utils/firebase/firebase";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../../context/cart-context";

const Navigation = () => {
	const {currentUser} = useContext(UserContext);
	const {isCartOpen} = useContext(CartContext);

	return (
		<>
			<div className="navigation">
				<Link to="/" className="logo-container">
					<CrwnLogo className='logo'/>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">SHOP</Link>
					<Link className="nav-link" to="/shop">CONTACT</Link>

					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
					) : (
						<Link className="nav-link" to="/auth">SIGN IN</Link>
					)}
					<CartIcon/>

				</div>
				{isCartOpen && <CartDropdown/>}


			</div>
			<Outlet/>
		</>

	)
}

export default Navigation;
