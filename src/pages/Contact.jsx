function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <p>We'd love to help plan your next event!</p>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <input
          type="date"
        />

        <textarea
          placeholder="Tell us about your event"
          rows="5"
        ></textarea>

        <button type="submit">
          Request a Quote
        </button>
      </form>
    </div>
  );
}

export default Contact;