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

				{/* Form Section */}
				<div className="card-1 p-5" style={{ width: "100%", borderRadius: "0", minWidth: "60rem", fontSize: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
					<h1 style={{ color: '#0f4c81', textTransform: 'uppercase', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>New Patient Signup</h1>
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
								<select
									id='city'
									name='city'
									required
									value={formData.city}
									onChange={handleChange}
									className='form-control'
									style={{ fontSize: "1.5rem" }}
								>
									<option value=''>Select City</option>
									<option value='city1'>City 1</option>
									<option value='city2'>City 2</option>
									<option value='city3'>City 3</option>
								</select>
							</div>
						</div>
						<div className='form-group mb-4 row'>
							<label htmlFor='state' className='col-4 col-form-label'>
								State
							</label>
							<div className='col-8'>
								<select
									id='state'
									name='state'
									required
									value={formData.state}
									onChange={handleChange}
									className='form-control'
									style={{ fontSize: "1.5rem" }}
								>
									<option value=''>Select State</option>
									<option value='AL'>Alabama</option>
									<option value='AK'>Alaska</option>
									<option value='AZ'>Arizona</option>
									<option value='AR'>Arkansas</option>
									<option value='CA'>California</option>
									<option value='CO'>Colorado</option>
									<option value='CT'>Connecticut</option>
									<option value='DE'>Delaware</option>
									<option value='FL'>Florida</option>
									<option value='GA'>Georgia</option>
									<option value='HI'>Hawaii</option>
									<option value='ID'>Idaho</option>
									<option value='IL'>Illinois</option>
									<option value='IN'>Indiana</option>
									<option value='IA'>Iowa</option>
									<option value='KS'>Kansas</option>
									<option value='KY'>Kentucky</option>
									<option value='LA'>Louisiana</option>
									<option value='ME'>Maine</option>
									<option value='MD'>Maryland</option>
									<option value='MA'>Massachusetts</option>
									<option value='MI'>Michigan</option>
									<option value='MN'>Minnesota</option>
									<option value='MS'>Mississippi</option>
									<option value='MO'>Missouri</option>
									<option value='MT'>Montana</option>
									<option value='NE'>Nebraska</option>
									<option value='NV'>Nevada</option>
									<option value='NH'>New Hampshire</option>
									<option value='NJ'>New Jersey</option>
									<option value='NM'>New Mexico</option>
									<option value='NY'>New York</option>
									<option value='NC'>North Carolina</option>
									<option value='ND'>North Dakota</option>
									<option value='OH'>Ohio</option>
									<option value='OK'>Oklahoma</option>
									<option value='OR'>Oregon</option>
									<option value='PA'>Pennsylvania</option>
									<option value='RI'>Rhode Island</option>
									<option value='SC'>South Carolina</option>
									<option value='SD'>South Dakota</option>
									<option value='TN'>Tennessee</option>
									<option value='TX'>Texas</option>
									<option value='UT'>Utah</option>
									<option value='VT'>Vermont</option>
									<option value='VA'>Virginia</option>
									<option value='WA'>Washington</option>
									<option value='WV'>West Virginia</option>
									<option value='WI'>Wisconsin</option>
									<option value='WY'>Wyoming</option>
								</select>
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
								<select
									id='language'
									name='language'
									required
									value={formData.language}
									onChange={handleChange}
									className='form-control'
									style={{ fontSize: "1.5rem" }}
								>
									<option value=''>Select Language</option>
									<option value='en'>English</option>
									<option value='es'>Spanish</option>
									<option value='zh'>Chinese</option>
									<option value='hi'>Hindi</option>
									<option value='fr'>French</option>
									<option value='vi'>Vietnamese</option>
									<option value='ko'>Korean</option>
									<option value='de'>German</option>
									<option value='ar'>Arabic</option>
									<option value='ru'>Russian</option>
									<option value='pt'>Portuguese</option>
									<option value='ja'>Japanese</option>
									<option value='it'>Italian</option>
									<option value='pl'>Polish</option>
									<option value='fa'>Persian</option>
									<option value='ur'>Urdu</option>
									<option value='bn'>Bengali</option>
									<option value='tl'>Tagalog</option>
									<option value='gu'>Gujarati</option>
									<option value='kn'>Kannada</option>
									<option value='ta'>Tamil</option>
									<option value='mr'>Marathi</option>
									<option value='te'>Telugu</option>
									<option value='pa'>Punjabi</option>
									<option value='or'>Odia</option>
									<option value='ml'>Malayalam</option>
									<option value='si'>Sinhala</option>
									<option value='my'>Burmese</option>
									<option value='km'>Khmer</option>
								</select>
							</div>
						</div>
						<button type='submit' className='btn btn-primary w-100' style={{ fontSize: "1.5rem" }}>Sign Up</button>
					</form>
				</div>

			</div>
		</div>
	);
};

