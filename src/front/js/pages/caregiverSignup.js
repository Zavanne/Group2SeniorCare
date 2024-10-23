import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		phone: "",
		location: "",
		experience: "",
		qualifications: "",
		availability: "",
		gender: ""
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const success = actions.caregiverSignup(formData);
		console.log("Form submitted", formData);
		if (success) {
			navigate("/caregiver-login");
		} else {
			alert("There was a problem creating your account. Please try again later.")
		}
	};

	return (
		<div
			style={{
				backgroundImage: `url("https://images.unsplash.com/photo-1676311563574-8857a67d86df?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<div className='container' style={{ marginLeft: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
				<div className="card-1 p-5" style={{ width: "100%", borderRadius: "0", minWidth: "60rem", fontSize: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.5)", marginLeft: "150rem" }}>
					<h1 style={{ color: '#0f4c81', textTransform: 'uppercase', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Become a Caregiver</h1>
					<form onSubmit={handleSubmit} style={{ width: "100%" }}>
						<div className='form-group mb-4 row'>
							<label htmlFor='name' className='col-4 col-form-label'>
								Full Name
							</label>
							<div className='col-8'>
								<input
									type="text"
									id="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Enter your full name"
									className="form-control"
									style={{ fontSize: "1.5rem" }}
									required
								/>
							</div>
						</div>

						<div className='form-group mb-4 row'>
							<label htmlFor='email' className='col-4 col-form-label'>
								Email Address
							</label>
							<div className='col-8'>
								<input
									type="email"
									id="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Enter your email"
									className="form-control"
									style={{ fontSize: "1.5rem" }}
									required
									pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
								/>
							</div>
						</div>

						<div className='form-group mb-4 row'>
							<label htmlFor='password' className='col-4 col-form-label'>
								Password
							</label>
							<div className='col-8'>
								<input
									type="password"
									id="password"
									value={formData.password}
									onChange={handleChange}
									placeholder="Enter your password"
									className="form-control"
									style={{ fontSize: "1.5rem" }}
									required
								/>
							</div>
						</div>

						<div className='form-group mb-4 row'>
							<label htmlFor='phone' className='col-4 col-form-label'>
								Phone Number
							</label>
							<div className='col-8'>
								<input
									type="tel"
									id="phone"
									value={formData.phone}
									onChange={handleChange}
									placeholder="Enter your phone number"
									className="form-control"
									style={{ fontSize: "1.5rem" }}
									required
								/>
							</div>
						</div>

						<div className='form-group mb-4 row'>
							<label htmlFor='location' className='col-4 col-form-label'>
								Location
							</label>
							<div className='col-8'>
								<input
									type="text"
									id="location"
									value={formData.location}
									onChange={handleChange}
									placeholder="Enter your location"
									className="form-control"
									style={{ fontSize: "1.5rem" }}
									required
								/>
							</div>
						</div>

						<div className='form-group mb-4 row'>
							<label htmlFor='experience' className='col-4 col-form-label'>
								Years of Experience
							</label>
							<div className='col-8'>
								<select
									id="experience"
									value={formData.experience}
									onChange={handleChange}
									className="form-control"
									style={{ fontSize: "1.5rem" }}
									required
								>
									<option value="">Select years of experience</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
									<option>7</option>
									<option>8</option>
									<option>9</option>
									<option>10</option>
								</select>
							</div>
						</div>

						<div className='form-group mb-4 row'>
							<label htmlFor='qualifications' className='col-4 col-form-label'>
								Qualifications
							</label>
							<div className='col-8'>
								<select
									id="qualifications"
									value={formData.qualifications}
									onChange={handleChange}
									className="form-control"
									style={{ fontSize: "1.5rem" }}
									required
								>
									<option value="">Select your qualifications</option>
									<option>CNA</option>
									<option>RN</option>
									<option>Caregiving Certificate</option>
								</select>
							</div>
						</div>

						<div className='form-group mb-4 row'>
							<label htmlFor='availability' className='col-4 col-form-label'>
								Availability
							</label>
							<div className='col-8'>
								<select
									id="availability"
									value={formData.availability}
									onChange={handleChange}
									className="form-control"
									style={{ fontSize: "1.5rem" }}
									required
								>
									<option value="">Select your availability</option>
									<option>Full-time</option>
									<option>Part-time</option>
									<option>Flexible</option>
								</select>
							</div>
						</div>

						<div className='form-group mb-4 row'>
							<label htmlFor='gender' className='col-4 col-form-label'>
								Gender
							</label>
							<div className='col-8'>
								<select
									id="gender"
									value={formData.gender}
									onChange={handleChange}
									className="form-control"
									style={{ fontSize: "1.5rem" }}
									required
								>
									<option value="">Select gender</option>
									<option>Male</option>
									<option>Female</option>
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