import { useState } from "react";
import { supabase } from "../supabase";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event_date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("contact_requests")
      .insert([formData]);

    if (error) {
      alert("Error submitting request.");
      console.error(error);
    } else {
      alert("Thank you! Your request has been submitted.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        event_date: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="date"
          name="event_date"
          value={formData.event_date}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Tell us about your event"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">
          Request a Quote
        </button>
      </form>
    </div>
  );
}

export default Contact;