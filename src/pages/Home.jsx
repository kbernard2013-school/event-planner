import logo from "../assets/eboneevents-logo.jpeg";
import heroImage from "../assets/hero.jpeg";

function Home() {
  return (
    <div> 
      <img src={logo} alt="Ebonee Events Logo" />

      <h1>Ebonee Events</h1>

      <section className="quote-banner">
        <h2>Making Every Event Unforgettable and Memorable</h2>
      </section>

      <h3>"Some people look for a beautiful place. Others make a place beautiful."
         — Hazrat Inayat Khan</h3>

      <p>
        Ebonee Events provides a multitude of services including balloon decor, equipment rentals,
        machine rentals, and event coordination services. Our main 
        focus is to provide a unique and memorable experience for our clients. 
        We are dedicated to enhancing your event with our services.
      </p>

      <h4>Our Services</h4>
      
      <section className="services">
      <div className="card">
        <h3> Balloon Décor</h3>
        <p>Custom arches and balloon displays.</p>
      </div>

      <div className="card">
        <h3> Machine Rentals</h3>
        <p>Popcorn, cotton candy, and snow cone machines.</p>
      </div>

      <div className="card">
        <h3> Equipment Rentals</h3>
        <p>Tables, chairs, tents, and linens.</p>
      </div>

      <div className="card">
        <h3> Event Coordination</h3>
        <p>Professional planning and event management.</p>
      </div>
    </section>

      <h5>Company Bio</h5>
      <p>Ebonee Events is a premier event planning company dedicated 
        to providing exceptional event planning and coordination services.
        It started with a vision to create unforgettable experiences for our clients.
        The founder Kamara, has been decorating and coordinating events for over a decade.
        She first laid her hands on a center piece and that lead to multiple creative projects.
        With craftmanship and attention to detail, she strives to exceed expectations
         and create lasting memories.</p> 

     <h6>Contact Information</h6>

      <p>📞Phone: (561) 555-1234</p>
      <p>📧Email: info.eboneeevents@gmail.com</p> 
      <p>📍Location: West Palm Beach, FL</p>


    </div>
  );
}

export default Home;