import {Outlet, Link} from "react-router";
import './navigation.component.scss';

import {ReactComponent as CrwnLogo} from "../../../assets/crown.svg";

const Navigation = () => {
	return (
		<>
			<div className="navigation">
				<Link to="/" className="logo-container">
					<CrwnLogo className='logo'/>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">SHOP</Link>
					<Link className="nav-link" to="/shop">CONTACT</Link>
					<Link className="nav-link" to="/auth">SIGN IN</Link>
					<Link className="nav-link" to="/shop">CART</Link>
				</div>

			</div>
			<Outlet/>
		</>

	)
}

export default Navigation;
