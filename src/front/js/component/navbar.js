import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../img/image.png";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate= useNavigate()
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="d-flex align-items-center">
          <img src={image} alt="CareConnect" className="img-fluid" style={{width: "300px"}} onClick={()=>{
            navigate("/")
          }}/>
        </div>
        <button class="navbar-toggler" type="button" onClick={handleToggle}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Facts & Data
              </Link>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link class="dropdown-item" to="/facts-and-data">Facts & Data Page</Link></li>
              <li><Link class="dropdown-item" to="/facts-and-data/elderly">Elderly</Link></li>
              <li><Link class="dropdown-item" to="/facts-and-data/patients">Patients</Link></li>
              <li><Link class="dropdown-item" to="/facts-and-data/caregivers">Caregivers</Link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Compensation
            </Link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link class="dropdown-item" to="/compensation">Compensation Page</Link></li>
              <li><Link class="dropdown-item" to="/compensation/elderly">Elderly</Link></li>
              <li><Link class="dropdown-item" to="/compensation/patients">Patients</Link></li>
              <li><Link class="dropdown-item" to="/compensation/caregivers">Caregivers</Link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Health Resources
            </Link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link class="dropdown-item" to="/health-resources">Health Resources Page</Link></li>
              <li><Link class="dropdown-item" to="/health-resources/mental-health">Mental Health</Link></li>
              <li><Link class="dropdown-item" to="/health-resources/physical-health">Physical Health</Link></li>
              <li><Link class="dropdown-item" to="/health-resources/nutrition">Nutrition</Link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              How To
            </Link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link class="dropdown-item" to="/how-to">How To Page</Link></li>
              <li><Link class="dropdown-item" to="/how-to/patients">Patients</Link></li>
              <li><Link class="dropdown-item" to="/how-to/caregivers">Caregivers</Link></li>
              <li><Link class="dropdown-item" to="/how-to/elderly">Elderly</Link></li>
            </ul>
          </li>
            
          </ul>
        </div>
        <div class="d-flex justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home |</Link>
            </li>
            {sessionStorage.getItem("token")?( <li class="nav-item">
              <button class="nav-link" onClick={()=>{
                sessionStorage.clear()
                navigate("/")
              }} >Logout |</button>
            </li>):""}
            {!sessionStorage.getItem("token")?(  <li class="nav-item">
              <Link class="nav-link" to="/patient-login">Patient Login |</Link>
            </li>):""}
            {!sessionStorage.getItem("token")?(  <li class="nav-item">
              <Link class="nav-link" to="/caregiver-login">Caregiver Login |</Link>
            </li>):""}
            
            <li class="nav-item">
              <Link class="nav-link" to="/about-us">About Us </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

