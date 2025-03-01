import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from "../../../utils/firebase/firebase";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";

import './authentication.component.scss';

const Authentication = () => {

	const logGoogleUser = async () => {
		const {user} = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	}

	return (
		<div className="authentication-container">
			{/*<h1>Sign in PAGE</h1>*/}
			{/*<button onClick={logGoogleUser}>Sign in with Google Account</button>*/}
			<SignInForm/>
			<SignUpForm/>
		</div>
	)
}

export default Authentication;
