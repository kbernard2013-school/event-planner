import logo from "../assets/eboneevents-logo.jpeg";

function Home() {
  return (
    <div>
      <img src={logo} alt="Ebonee Events Logo" />
      <h1>Ebonee Events</h1>
      <h2>Making Every Event Unforgettable and Memorable</h2>
      <h>"Some people look for a beautiful place. Others make a place beautiful."
         — Hazrat Inayat Khan</h>

      <p>
        Ebonee Events provides a multitude of services including balloon decor, equipment rentals,
        machine rentals, and event coordination services. Our main 
        focus is to provide a unique and memorable experience for our clients. 
        We are dedicated to enhancing your event with our services.
      </p>
      <h2>Our Services</h2>
      
      <ul>
      <li>Balloon Decor</li>
      <li>Equipment Rentals</li>
      <li>Party Machines</li>
      <li>Event Coordination</li>
      </ul>

      <h3>Company Bio</h3>
      <p>Ebonee Events is a premier event planning company dedicated 
        to providing exceptional event planning and coordination services.
        It started with a vision to create unforgettable experiences for our clients.
        The founder Kamara, has been decorating and coordinating events for over a decade.
        She first laid her hands on a center piece and that lead to multiple creative projects.
        With craftmanship and attention to detail, she strives to exceed expectations
         and create lasting memories.</p> 

     <h4>Contact Information</h4>

      <p>Phone: (561) 555-1234</p>
      <p>Email: info.eboneeevents@gmail.com</p> 
      <p>Location: West Palm Beach, FL</p>
    </div>
  );
}

export default Home;