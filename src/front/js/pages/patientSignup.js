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
		<div
			style={{
				backgroundImage: `url("https://images.unsplash.com/photo-1610899881397-7891fad5a1e8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>

			<div className='container' style={{ marginLeft: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
				<h1 style={{ color: '#0f4c81', textTransform: 'uppercase', fontSize: '2rem' }}>New Patient Signup</h1>
				{/* Image Section */}

				{/* Form Section */}
				<div className="card-1 p-5" style={{ width: "100%", borderRadius: "0", minWidth: "60rem", fontSize: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
					<form onSubmit={handleSubmit} style={{ width: "100%" }}>
						<div className='form-group mb-4 row'>
							<label htmlFor='name' className='col-4 col-form-label'>
								Name
							</label>
							<div className='col-8'>
								<input
									type='text'
									id='name'
									name='name'
									placeholder='Enter your full name'
									required
									value={formData.name}
									onChange={handleChange}
									className='form-control'
									style={{ fontSize: "1.5rem" }}
								/>
							</div>
						</div>
						<div className='form-group mb-4 row'>
							<label htmlFor='date_of_birth' className='col-4 col-form-label'>
								Date of Birth
							</label>
							<div className='col-8'>
								<input
									type='date'
									id='date_of_birth'
									name='date_of_birth'
									required
									value={formData.date_of_birth}
									onChange={handleChange}
									className='form-control'
									style={{ fontSize: "1.5rem" }}
								/>
							</div>
						</div>
						<div className='form-group mb-4 row'>
							<label htmlFor='email' className='col-4 col-form-label'>
								Email Address
							</label>
							<div className='col-8'>
								<input
									type='email'
									id='email'
									name='email'
									placeholder='Enter your email'
									required
									value={formData.email}
									onChange={handleChange}
									className='form-control'
									style={{ fontSize: "1.5rem" }}
								/>
							</div>
						</div>
						<div className='form-group mb-4 row'>
							<label htmlFor='password' className='col-4 col-form-label'>
								Password
							</label>
							<div className='col-8'>
								<input
									type='password'
									id='password'
									name='password'
									placeholder='Create a password'
									required
									value={formData.password}
									onChange={handleChange}
									className='form-control'
									style={{ fontSize: "1.5rem" }}
								/>
							</div>
						</div>
						<div className='form-group mb-4 row'>
							<label htmlFor='city' className='col-4 col-form-label'>
								City
							</label>
							<div className='col-8'>
								<input
									type='text'
									id='city'
									name='city'
									placeholder='Enter your city'
									required
									value={formData.city}
									onChange={handleChange}
									className='form-control'
									style={{ fontSize: "1.5rem" }}
								/>
							</div>
						</div>
						<div className='form-group mb-4 row'>
							<label htmlFor='state' className='col-4 col-form-label'>
								State
							</label>
							<div className='col-8'>
								<input
									type='text'
									id='state'
									name='state'
									placeholder='Enter your state'
									required
									value={formData.state}
									onChange={handleChange}
									className='form-control'
									style={{ fontSize: "1.5rem" }}
								/>
							</div>
						</div>
						<div className='form-group mb-4 row'>
							<label htmlFor='zipcode' className='col-4 col-form-label'>
								Zipcode
							</label>
							<div className='col-8'>
								<input
									type='text'
									id='zipcode'
									name='zipcode'
									placeholder='Enter your zipcode'
									required
									value={formData.zipcode}
									onChange={handleChange}
									className='form-control'
									style={{ fontSize: "1.5rem" }}
								/>
							</div>
						</div>
						<div className='form-group mb-4 row'>
							<label htmlFor='language' className='col-4 col-form-label'>
								Language
							</label>
							<div className='col-8'>
								<input
									type='text'
									id='language'
									name='language'
									placeholder='Enter your language'
									required
									value={formData.language}
									onChange={handleChange}
									className='form-control'
									style={{ fontSize: "1.5rem" }}
								/>
							</div>
						</div>
						<button type='submit' className='btn btn-primary w-100' style={{ fontSize: "1.5rem" }}>Sign Up</button>
					</form>
				</div>

			</div>
		</div>
	);
};

