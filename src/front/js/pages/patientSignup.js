import backgroundImage from "../../img/marisa-howenstine-nFsOlSE9Mn8-unsplash.jpg";
import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

export const PatientSignUp = () => {
	const { actions } = useContext(Context);
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: '',
		date_of_birth: '',
		email: '',
		password: '',
		address: '',
		address2: '',
		city: '',
		state: '',
		zipcode: '',
		language: '',
		subscribe: false
	});

	const handleChange = (e) => {
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		setFormData({
			...formData,
			[e.target.id]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const success = actions.patientSignUp(formData);
		console.log('Form submitted', formData);
		if (success) {
			navigate('/patient-login');
		} else {
			alert('There was a problem creating your account. Please try again later.');
		}
	};

	return (
		<div style={{
			backgroundColor: 'white',
			height: '100vh',
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'center'
		}}>
			<div style={{ position: 'absolute', bottom: 10, left: 10, color: '#ccc', fontSize: '0.8rem' }}>
				Photo by <a href="https://unsplash.com/@marisahowenstine">Marisa Howenstine</a> on <a href="https://unsplash.com">Unsplash</a>
			</div>
			
			<div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<div className="card-1 p-5" style={{ width: "100%", borderRadius: "0", minWidth: "60rem", fontSize: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
					<h1 style={{ color: '#0f4c81', textTransform: 'uppercase', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>New Patient Signup</h1>
					<form onSubmit={handleSubmit} className="row g-3">
						<div className="col-12">
							<label htmlFor="name" className="form-label">Name</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="Enter your full name"
								value={formData.name}
								onChange={handleChange}
								required
								style={{ fontSize: "1.5rem" }}
							/>
						</div>

						<div className="col-md-6">
							<label htmlFor="email" className="form-label">Email Address</label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="Enter your email"
								value={formData.email}
								onChange={handleChange}
								required
								pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
								style={{ fontSize: "1.5rem" }}
							/>
						</div>

						<div className="col-md-6">
							<label htmlFor="password" className="form-label">Password</label>
							<input
								type="password"
								className="form-control"
								id="password"
								placeholder="Create a password"
								value={formData.password}
								onChange={handleChange}
								required
								style={{ fontSize: "1.5rem" }}
							/>
						</div>

						<div className="col-12">
							<label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
							<input
								type="date"
								className="form-control"
								id="date_of_birth"
								value={formData.date_of_birth}
								onChange={handleChange}
								required
								style={{ fontSize: "1.5rem" }}
							/>
						</div>

						<div className="col-12">
							<label htmlFor="address" className="form-label">Address</label>
							<input
								type="text"
								className="form-control"
								id="address"
								placeholder="1234 Main St"
								value={formData.address}
								onChange={handleChange}
								style={{ fontSize: "1.5rem" }}
							/>
						</div>

						<div className="col-12">
							<label htmlFor="address2" className="form-label">Address 2</label>
							<input
								type="text"
								className="form-control"
								id="address2"
								placeholder="Apartment, studio, or floor"
								value={formData.address2}
								onChange={handleChange}
								style={{ fontSize: "1.5rem" }}
							/>
						</div>

						<div className="col-md-6">
							<label htmlFor="city" className="form-label">City</label>
							<select
								className="form-select"
								id="city"
								value={formData.city}
								onChange={handleChange}
								required
								style={{ fontSize: "1.5rem" }}
							>
								<option value="">Select City</option>
								{/* Keeping your existing city options */}
								<option value="New York">New York</option>
								<option value="Los Angeles">Los Angeles</option>
								{/* ... rest of your cities ... */}
							</select>
						</div>

						<div className="col-md-4">
							<label htmlFor="state" className="form-label">State</label>
							<select
								className="form-select"
								id="state"
								value={formData.state}
								onChange={handleChange}
								required
								style={{ fontSize: "1.5rem" }}
							>
								<option value="">Select State</option>
								{/* Keeping your existing state options */}
								<option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								{/* ... rest of your states ... */}
							</select>
						</div>

						<div className="col-md-2">
							<label htmlFor="zipcode" className="form-label">Zip</label>
							<input
								type="text"
								className="form-control"
								id="zipcode"
								value={formData.zipcode}
								onChange={handleChange}
								required
								style={{ fontSize: "1.5rem" }}
							/>
						</div>

						<div className="col-12">
							<label htmlFor="language" className="form-label">Language</label>
							<select
								className="form-select"
								id="language"
								value={formData.language}
								onChange={handleChange}
								required
								style={{ fontSize: "1.5rem" }}
							>
								<option value="">Select Language</option>
								{/* Keeping your existing language options */}
								<option value="en">English</option>
								<option value="es">Spanish</option>
								{/* ... rest of your languages ... */}
							</select>
						</div>

						<div className="col-12">
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="subscribe"
									checked={formData.subscribe}
									onChange={handleChange}
								/>
								<label className="form-check-label" htmlFor="subscribe">
									Subscribe to our newsletter
								</label>
							</div>
						</div>

						<div className="col-12">
							<button type="submit" className="btn btn-primary w-100" style={{ fontSize: "1.5rem" }}>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
			<img
				src={backgroundImage}
				alt="Decorative"
				style={{
					width: '40%',
					height: '100vh',
				}}
			/>
		</div>
	);
};