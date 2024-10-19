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

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {

        // Trigger an action to save the updated patient data
        actions.updatePatientProfile(formData);
        setEditMode(false); // Exit edit mode
    };

    const handleDiscard = () => {
        setEditMode(false)
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

        })

    }

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

        })

    }, [refresh])
    return (
        <div>
            
            {editMode ? (
                <div>


                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={store.patient?.name}
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    name="date_of_birth"
                                    placeholder={store.patient?.date_of_birth}
                                    value={formData.date_of_birth}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={store.patient?.email}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder={store.patient?.phone}
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Emergency Contact</label>
                                <input
                                    type="text"
                                    name="emergency_contact"
                                    placeholder={store.patient?.emergency_contact}
                                    value={formData.emergency_contact}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Allergies</label>
                                <input
                                    type="text"
                                    name="allergies"
                                    placeholder={store.patient?.allergies}
                                    value={formData.allergies}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Blood Type</label>
                                <input
                                    type="text"
                                    name="blood_type"
                                    placeholder={store.patient?.blood_type}
                                    value={formData.blood_type}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Hobbies</label>
                                <input
                                    type="text"
                                    name="hobbies"
                                    placeholder={store.patient?.hobbies}
                                    value={formData.hobbies}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder={store.patient?.city}
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>State</label>
                                <input
                                    type="text"
                                    name="state"
                                    placeholder={store.patient?.state}
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Zipcode</label>
                                <input
                                    type="text"
                                    name="zipcode"
                                    placeholder={store.patient?.zipcode}
                                    value={formData.zipcode}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Language</label>
                                <input
                                    type="text"
                                    name="language"
                                    placeholder={store.patient?.language}
                                    value={formData.language}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>



                    <div className="d-flex justify-content-end">
                        <button className="btn btn-secondary" onClick={() => handleDiscard()}>
                            Discard Changes
                        </button>
                        <button className="btn btn-primary" onClick={handleSave}>
                            Save
                        </button>
                    </div>


                </div>
            ) : (
                <div className="card-1 p-6" style={{ width: "100%", borderRadius: "0", minWidth: "50rem", fontSize: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                    <div className="d-flex justify-content-end">
                        <button className="btn" onClick={() => setEditMode(!editMode)}>
                            <i className="fa-solid fa-user-pen"></i>
                        </button>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Name</label>
                                <p>{store.patient?.name}</p>
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <p>{store.patient?.date_of_birth}</p>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <p>{store.patient?.phone}</p>
                            </div>
                            <div className="form-group">
                                <label>Emergency Contact</label>
                                <p>{store.patient?.emergency_contact}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Allergies</label>
                                <p>{store.patient?.allergies}</p>
                            </div>
                            <div className="form-group">
                                <label>Blood Type</label>
                                <p>{store.patient?.blood_type}</p>
                            </div>
                            <div className="form-group">
                                <label>Hobbies</label>
                                <p>{store.patient?.hobbies}</p>
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <p>{store.patient?.city}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>State</label>
                                <p>{store.patient?.state}</p>
                            </div>
                            <div className="form-group">
                                <label>Zipcode</label>
                                <p>{store.patient?.zipcode}</p>
                            </div>
                            <div className="form-group">
                                <label>Language</label>
                                <p>{store.patient?.language}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Active</label>
                                <p>{store.patient?.is_active ? "Yes" : "No"}</p>
                            </div>
                            <div className="form-group">
                                <label>Currently Employed</label>
                                <p>{store.patient?.is_current ? "Yes" : "No"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};





