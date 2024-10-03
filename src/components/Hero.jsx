import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faPlay } from "@fortawesome/free-solid-svg-icons"


const Hero = () => {
  return (
    <section className="hero-bg">


      <div className="overlay">
       

       <div className="hero-text">
       <h1 className="text-2xl font-bold font-sans">Learning Center for  your kids</h1>
        <p>
          We give your child the best care in the world with our selfless tutors.
        </p>

        <button type="button" className="rounded-full bg-pink-600 py-2 px-4">Get Started</button>
       </div>

       <div>
        <button className="feature-icon bg-pink-600" ><FontAwesomeIcon icon={faPlay} /></button>
       </div>

      </div>
    </section>
  );
};

export default Hero;
