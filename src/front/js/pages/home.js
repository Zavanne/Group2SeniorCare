import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Testimonial } from "../component/testimonal";
import RecipesApi from "../component/recipesApi";
import image from "../../img/image.png";

const Home = () => {
    const { store, actions } = useContext(Context);

    const testimonialData = [
        {
            name: "Sarah Collins",
            description: "I was hesitant at first, but CareConnect delivered! The caregiver they provided was attentive, patient, and genuinely caring. They exceeded my expectations and made me feel comfortable and supported. Five stars!",
            image: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "John Rivers",
            description: "I was blown away by the quality of care and compassion provided by the caregiver from CareConnect. They truly went above and beyond to make sure my loved one was comfortable and happy. Highly recommend!",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "David Thompson",
            description: "The caregiver from CareConnect was a godsend! They helped my mother with her daily routines and even took her to appointments. We couldn't have asked for a more caring and professional service. Thank you!",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
            name: "Emily Rodriguez",
            description: "I was skeptical about hiring a caregiver, but the team at CareConnect made the process seamless and stress-free. The caregiver they provided was kind, patient, and knowledgeable. I couldn't be happier with the service!",
            image: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            name: "Michael Adams",
            description: "The caregiver from CareConnect was more than just a caregiver - they were a friend to my father. They went above and beyond to make sure he was comfortable and happy. We're so grateful to have found them!",
            image: "https://randomuser.me/api/portraits/men/3.jpg"
        },

    ];

    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{
                height: "65vh",
                width: "100%",
                backgroundImage: 'url("https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textAlign: "center",
                position: "relative",
                margin: 0
            }}>

                <div style={{ position: "absolute", bottom: 100, right: 350, backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "40px", borderRadius: "10px" }}>
                    <h1>Find a Caregiver in 24 Hours or Less</h1>
                    <input
                        type="text"
                        placeholder="Enter city or zip code"
                        style={{
                            padding: "10px",
                            borderRadius: "30px",
                            margin: "20px 0",
                            width: "300px",
                            border: "none"
                        }}
                    />
                    <button className="cta-button" style={{
                        padding: "10px 30px",
                        borderRadius: "30px",
                        backgroundColor: "#00aaff",
                        color: "#fff",
                        border: "none"
                    }}>
                        Find a Caregiver
                    </button>
                </div>
                <div style={{ position: "absolute", top: 20, left: 20, padding: 0, borderRadius: "10px" }}>
                    <Link to="/signup-caregiver" className="mx-auto" style={{ marginRight: "15px" }}>
                        <button className="cta-button-lg" style={{ padding: "15px 40px", fontSize: "1.5rem" }}>Become A Caregiver</button>
                    </Link>
                    <Link to="/signup-patient" className="mx-auto" style={{ marginLeft: "10px" }}>
                        <button className="cta-button-lg" style={{ padding: "15px 40px", fontSize: "1.5rem" }}>Join As A Patient</button>
                    </Link>
                </div>
                <img src={image} alt="Here to make a difference" style={{
                    position: "absolute",
                    top: 50,
                    right: 25,
                    width: "700px",
                    height: "auto",
                    borderRadius: "10px",
                }} />
                <p style={{ position: "absolute", top: "50%", right: "60%", transform: "translate(-50%, -50%)", fontSize: "2.5rem", fontStyle: "italic" }}>Welcome to a world that cares - John Dow</p>
                

            </section>

            {/* Cards Section */}
            <section className="cards-section" style={{ padding: "60px 0", textAlign: "center", backgroundColor: "#f0f0f0" }}>
                <h2 style={{ marginBottom: "40px", fontFamily: "Montserrat", color: "#333" }}>Why Choose Us</h2>
                <div className="d-flex justify-content-center flex-wrap">
                    {[
                        { title: "Fast Matching", icon: "fa-user-group", text: "We'll match you with a caregiver within 24 hours" },
                        { title: "Experienced Caregivers", icon: "fa-heart", text: "All caregivers have at least 2 years of experience." },
                        { title: "Safety First", icon: "fa-helmet-safety", text: "We ensure caregivers are trained in safety measures." }
                    ].map((card, index) => (
                        <div key={index} style={{
                            width: "300px",
                            backgroundColor: "#fff",
                            margin: "20px",
                            padding: "20px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            borderRadius: "10px"
                        }}>
                            <i className={`fa ${card.icon} p-2`} style={{ fontSize: "24px", color: "#00aaff" }}></i>
                            <h4>{card.title}</h4>
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonial Section */}
            <section style={{ padding: "60px 0", textAlign: "center" }}>
                <h2 style={{ marginBottom: "40px", fontFamily: "Montserrat", color: "#333" }}>What Our Clients Say</h2>
                <div className="row justify-content-center">
                    {testimonialData.map((testimonial) => (
                        <div key={testimonial.name} className="col-md-4" style={{
                            backgroundColor: "#fff",
                            margin: "20px",
                            padding: "20px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            borderRadius: "10px"
                        }}>
                            <img src={testimonial.image} alt={testimonial.name} style={{
                                borderRadius: "50%",
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                marginBottom: "15px"
                            }} />
                            <h4>{testimonial.name}</h4>
                            <p>{testimonial.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Modern CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-grey rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${Math.random() * 20 + 10}px`,
                                height: `${Math.random() * 20 + 10}px`,
                                animation: `pulse ${Math.random() * 4 + 2}s infinite`
                            }}
                        />
                    ))}
                </div>
                <div className="container mx-auto px-6 relative z-10 bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
                    <div className="text-center text-blue-600">
                        <h2 className="text-4xl font-bold mb-8">Ready to Transform Care?</h2>
                        <p className="text-xl mb-12 ">Join thousands who have already discovered a better way to care</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/signup-caregiver">
                                <button className="cta-button-1">Become A Caregiver</button>
                            </Link>
                            <Link to="/signup-patient" className="ml-2">
                                <button className="cta-button-1">Join As A Patient</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer style={{ backgroundColor: "#f9f9f9", padding: "20px 0", textAlign: "center", borderTop: "1px solid #eee" }}>
                <p style={{ color: "#666", fontFamily: "Roboto" }}>© 2024 Caregiver Connect. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default Home;
