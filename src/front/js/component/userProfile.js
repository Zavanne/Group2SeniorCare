import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const UserProfile = ({ refresh }) => {
    const { store, actions } = useContext(Context);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: store.patient?.name || "",
        date_of_birth: store.patient?.date_of_birth || "",
        email: store.patient?.email || "",
        phone: store.patient?.phone || "",
        emergency_contact: store.patient?.emergency_contact || "",
        allergies: store.patient?.allergies || "",
        blood_type: store.patient?.blood_type || "",
        hobbies: store.patient?.hobbies || "",
        city: store.patient?.city || "",
        state: store.patient?.state || "",
        zipcode: store.patient?.zipcode || "",
        language: store.patient?.language || "",
        is_active: store.patient?.is_active || false,
        is_current: store.patient?.is_current || false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        actions.updatePatientProfile(formData);
        setEditMode(false);
    };

    const handleDiscard = () => {
        setEditMode(false);
        setFormData({
            name: store.patient?.name || "",
            date_of_birth: store.patient?.date_of_birth || "",
            email: store.patient?.email || "",
            phone: store.patient?.phone || "",
            emergency_contact: store.patient?.emergency_contact || "",
            allergies: store.patient?.allergies || "",
            blood_type: store.patient?.blood_type || "",
            hobbies: store.patient?.hobbies || "",
            city: store.patient?.city || "",
            state: store.patient?.state || "",
            zipcode: store.patient?.zipcode || "",
            language: store.patient?.language || "",
            is_active: store.patient?.is_active || false,
            is_current: store.patient?.is_current || false,
        });
    };

    useEffect(() => {
        setFormData({
            name: store.patient?.name || "",
            date_of_birth: store.patient?.date_of_birth || "",
            email: store.patient?.email || "",
            phone: store.patient?.phone || "",
            emergency_contact: store.patient?.emergency_contact || "",
            allergies: store.patient?.allergies || "",
            blood_type: store.patient?.blood_type || "",
            hobbies: store.patient?.hobbies || "",
            city: store.patient?.city || "",
            state: store.patient?.state || "",
            zipcode: store.patient?.zipcode || "",
            language: store.patient?.language || "",
            is_active: store.patient?.is_active || false,
            is_current: store.patient?.is_current || false,
        });
    }, [refresh, store.patient]);

    const renderFormField = (label, name, type = "text", icon) => (
        <div className="form-group mb-4 profile-field">
            <label htmlFor={name} className="form-label text-muted mb-1 small">
                {icon && <i className={`fa-solid ${icon} me-2`}></i>}
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                aria-label={label}
                value={formData[name]}
                onChange={handleInputChange}
                className={`form-control form-control-lg border-0 bg-light ${!editMode ? 'readonly-input' : ''}`}
                disabled={!editMode}
                placeholder={store.patient?.[name]}
            />
        </div>
    );

    return (
        <div className="container py-5">
            <div className="profile-card bg-white rounded-3 shadow-sm p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="h3 mb-1 fw-bold text-primary">Patient Profile</h2>
                        <p className="text-muted mb-0">Manage your personal information</p>
                    </div>
                    <button 
                        className={`btn ${editMode ? 'btn-light' : 'btn-primary'} rounded-circle p-3`}
                        onClick={() => setEditMode(!editMode)}
                        aria-label={editMode ? "Cancel editing" : "Edit profile"}
                    >
                        <i className={`fa-solid ${editMode ? "fa-times" : "fa-user-pen"}`}></i>
                    </button>
                </div>
                
                <div className="profile-content">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="profile-section p-4 bg-light rounded-3 h-100">
                                    <h3 className="h5 mb-4 text-primary">Personal Information</h3>
                                    {renderFormField("Full Name", "name", "text", "fa-user")}
                                    {renderFormField("Date of Birth", "date_of_birth", "date", "fa-calendar")}
                                    {renderFormField("Email Address", "email", "email", "fa-envelope")}
                                    {renderFormField("Phone Number", "phone", "tel", "fa-phone")}
                                    {renderFormField("Emergency Contact", "emergency_contact", "text", "fa-ambulance")}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-section p-4 bg-light rounded-3 h-100">
                                    <h3 className="h5 mb-4 text-primary">Medical Information</h3>
                                    {renderFormField("Allergies", "allergies", "text", "fa-virus")}
                                    {renderFormField("Blood Type", "blood_type", "text", "fa-droplet")}
                                    {renderFormField("Primary Language", "language", "text", "fa-language")}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="profile-section p-4 bg-light rounded-3">
                                    <h3 className="h5 mb-4 text-primary">Additional Information</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            {renderFormField("City", "city", "text", "fa-city")}
                                            {renderFormField("State", "state", "text", "fa-map")}
                                        </div>
                                        <div className="col-md-6">
                                            {renderFormField("Zipcode", "zipcode", "text", "fa-location-dot")}
                                            {renderFormField("Hobbies & Interests", "hobbies", "text", "fa-heart")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {editMode && (
                            <div className="action-buttons position-sticky bottom-0 bg-white py-3 mt-4 border-top">
                                <div className="d-flex justify-content-end gap-3">
                                    <button 
                                        className="btn btn-light btn-lg px-4"
                                        onClick={handleDiscard}
                                        type="button"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        className="btn btn-primary btn-lg px-4"
                                        onClick={handleSave}
                                        type="submit"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <style>
                {`
                    .profile-card {
                        border: none;
                        transition: all 0.3s ease;
                    }

                    .profile-section {
                        transition: all 0.3s ease;
                    }

                    .profile-section:hover {
                        background-color: #f8f9fa !important;
                    }

                    .form-control {
                        transition: all 0.3s ease;
                        border-radius: 0.5rem;
                        padding: 0.75rem 1rem;
                    }

                    .form-control:focus {
                        box-shadow: none;
                        border-color: var(--bs-primary);
                        background-color: white !important;
                    }

                    .readonly-input {
                        background-color: transparent !important;
                        border: none;
                        padding-left: 0;
                        color: var(--bs-body-color);
                        cursor: default;
                    }

                    .readonly-input:focus {
                        background-color: transparent !important;
                    }

                    .profile-field {
                        position: relative;
                    }

                    .btn {
                        transition: all 0.3s ease;
                    }

                    .btn-primary {
                        background-color: var(--bs-primary);
                        border: none;
                    }

                    .btn-primary:hover {
                        transform: translateY(-1px);
                        box-shadow: 0 4px 12px rgba(var(--bs-primary-rgb), 0.2);
                    }

                    .action-buttons {
                        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
                    }

                    .form-label {
                        font-weight: 500;
                        letter-spacing: 0.5px;
                    }

                    .text-primary {
                        color: var(--bs-primary) !important;
                    }

                    @media (max-width: 768px) {
                        .profile-section {
                            margin-bottom: 1rem;
                        }
                    }
                `}
            </style>
        </div>
    );
};