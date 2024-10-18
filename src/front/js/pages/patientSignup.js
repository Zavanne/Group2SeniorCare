import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

export const PatientSignUp = () => {
	const { actions } = useContext(Context);
	const navigate = useNavigate();

	// State to capture form inputs
	const [formData, setFormData] = useState({
		name: '',
		date_of_birth: '',
		email: '',
		password: '',
		city: '',
		state: '',
		zipcode: '',
		language: ''
	});

	// Handle form input changes
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		});
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// Call the action to send form data (e.g., to the backend)
		const success = actions.patientSignUp(formData); // Example action
		console.log('Form submitted', formData);
		if (success) {
			navigate('/patient-login');
		} else {
			alert('There was a problem creating your account. Please try again later.');
		}
	};

	return (
		<div className='text-center mt-5'>
			<div className='container'>
				{/* Image Section */}
				<img
					src='https://i.ibb.co/s3gBtK4/banner-6617553-1280.jpg'
					alt='Patient'
					style={{ width: '100%', borderRadius: '10px 10px 0 0' }}
				/>

				{/* Form Section */}
				<h1>Patient SignUp</h1>
				<div className='row d-flex justify-content-center'>
					<div className='col-6 text-start'>
						<form onSubmit={handleSubmit}>
							<div className='form-group my-4'>
								<label htmlFor='name'>
									<strong>Full Name</strong>
								</label>
								<input
									type='text'
									id='name'
									name='name'
									placeholder='Enter your full name'
									required
									value={formData.name}
									onChange={handleChange}
								/>
							</div>
							<div className='form-group my-4'>
								<label htmlFor='date_of_birth'>
									<strong>Date of Birth</strong>
								</label>
								<input
									type='date'
									id='date_of_birth'
									name='date_of_birth'
									required
									value={formData.date_of_birth}
									onChange={handleChange}
								/>
							</div>
							<div className='form-group my-4'>
								<label htmlFor='email'>
									<strong>Email Address</strong>
								</label>
								<input
									type='email'
									id='email'
									name='email'
									placeholder='Enter your email'
									required
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
							<div className='form-group my-4'>
								<label htmlFor='password'>
									<strong>Password</strong>
								</label>
								<input
									type='password'
									id='password'
									name='password'
									placeholder='Create a password'
									required
									value={formData.password}
									onChange={handleChange}
								/>
							</div>
							<div className='form-group my-4'>
								<label htmlFor='city'>
									<strong>City</strong>
								</label>
								<input
									type='text'
									id='city'
									name='city'
									placeholder='Enter your city'
									required
									value={formData.city}
									onChange={handleChange}
								/>
							</div>
							<div className='form-group my-4'>
								<label htmlFor='state'>
									<strong>State</strong>
								</label>
								<input
									type='text'
									id='state'
									name='state'
									placeholder='Enter your state'
									required
									value={formData.state}
									onChange={handleChange}
								/>
							</div>
							<div className='form-group my-4'>
								<label htmlFor='zipcode'>
									<strong>Zipcode</strong>
								</label>
								<input
									type='text'
									id='zipcode'
									name='zipcode'
									placeholder='Enter your zipcode'
									required
									value={formData.zipcode}
									onChange={handleChange}
								/>
							</div>
							<div className='form-group my-4'>
								<label htmlFor='language'>
									<strong>Language</strong>
								</label>
								<input
									type='text'
									id='language'
									name='language'
									placeholder='Enter your language'
									required
									value={formData.language}
									onChange={handleChange}
								/>
							</div>
							<button type='submit'>Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};


