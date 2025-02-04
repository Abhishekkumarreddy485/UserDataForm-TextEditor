import React, { useState, useEffect } from "react";
import "./UserForm.css";  // Import the CSS file

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", address: "", email: "", phone: "" });
  const [userId, setUserId] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setUserId(Math.floor(Math.random() * 10000));
  }, []);

  useEffect(() => {
    window.onbeforeunload = formData.name ? () => true : null;
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ ...formData, id: userId }));
    setSubmitted(true);
  };

  return (
    <div className="user-form-container">
      <h2 className="user-form-title">User Registration</h2>
      {submitted ? (
        <p className="success-message">User data saved successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="user-form">
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />

          <label>Address</label>
          <input type="text" name="address" placeholder="Enter your address" onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />

          <label>Phone</label>
          <input type="text" name="phone" placeholder="Enter your phone number" onChange={handleChange} required />

          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default UserForm;
