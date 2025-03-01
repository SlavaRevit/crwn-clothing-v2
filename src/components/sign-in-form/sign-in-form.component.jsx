import './sign-in-form.component.scss';

import FormInput from "../form-input/form-input.component";
import Button from "../Button/Button.component";
import {
	signInWithEmailAndPass, signInWithGooglePopup
} from "../../utils/firebase/firebase";

import {useState} from "react";

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
		await signInWithGooglePopup();
	}

	const handleChange = async (event) => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	}

	return (
		<div className="sign-in-container">
			<h2>Already have an account?</h2>
			<p>Sign in with Email and Password</p>
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
						type="button"
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
