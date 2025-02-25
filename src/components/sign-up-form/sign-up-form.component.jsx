import {useState} from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';
import FormInput from "../form-input/form-input.component";
import './sign-up-form.component.scss';
import Button from "../Button/Button.component";

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const {displayName, email, password, confirmPassword} = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = event => {
		const {name, value} = event.target;

		setFormFields({...formFields, [name]: value});
	}

	const handleSubmit = async event => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			const {user} = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, {displayName});
			resetFormFields();
		} catch (err) {
			console.log(`user creation encountered an error`, err);
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>sign up with your email and password</span>
			<form action='' onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type='text'
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>

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

				<FormInput
					label="Confirm Password"
					type='password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>
				<Button type='submit' buttonType="inverted">Sign up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
