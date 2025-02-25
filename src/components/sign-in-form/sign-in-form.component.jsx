import FormInput from "../form-input/form-input.component";
import Button from "../Button/Button.component";
import {
	createUserDocumentFromAuth,
	signInWithEmailAndPass, signInWithGooglePopup
} from "../../utils/firebase/firebase";
import {useState} from "react";

import './sign-in-form.component.scss';

const defaultFormField = {
	email: '',
	password: '',
}

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormField);
	const {email, password} = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormField);
	}

	const handleSubmit = async event => {
		event.preventDefault();
		if (!email || !password) return;

		try {
			await signInWithEmailAndPass(email, password);

			resetFormFields();
		} catch (err) {
			console.log(`user creation encountered an error`, err);
		}
	};

	const signInWitGoogle = async () => {
		const {user} = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	}


	const handleChange = async (event) => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	}

	return (
		<div className="sign-in-container">
			<form action='' onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type='email'
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput
					label="Password"
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<div className="buttons-container">
					<Button
						type='submit'
						buttonType="inverted"
					>
						Sign in
					</Button>
					<Button
						onClick={signInWitGoogle}
						buttonType="google"
					>
						Sign in with google
					</Button>
				</div>
			</form>
		</div>
	)
}

export default SignInForm;
