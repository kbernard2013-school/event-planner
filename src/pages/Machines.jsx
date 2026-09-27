import popcorn from "../assets/PopcornPic.webp";
import cottonCandy from "../assets/CottonCandyPic.jpg";
import snowCone from "../assets/SnowConePic.webp";

function Machines() {
  return (
    <div>
      <h1>Machine Rentals</h1>

      <h3>Popcorn Machine</h3>
      <img src={popcorn} alt="Popcorn Machine" />
      <p>Perfect for birthday parties and school events.</p>

      <h3>Cotton Candy Machine</h3>
      <img src={cottonCandy} alt="Cotton Candy Machine" />
      <p>Add a sweet touch to any celebration.</p>

      <h3>Snow Cone Machine</h3>
      <img src={snowCone} alt="Snow Cone Machine" />
      <p>Great for outdoor events and summer parties.</p>
    </div>
  );
}

export default Machines;

