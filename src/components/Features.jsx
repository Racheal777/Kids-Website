import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard, faPlay, faBowlFood , faMusic, faLandmark, faBookOpen,faBook, faCalculator, faBrush} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <section className="feature">
        <div className="features">
      <div className="feature1 bg-blue-500">
        <span className="feature-icon">
          {" "}
          <FontAwesomeIcon icon={faChalkboard} />{" "}
        </span>

        <h1>Learn</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>

      <div className="feature1 bg-lime-500">
        <span className="feature-icon">
          {" "}
          <FontAwesomeIcon icon={faPlay} />{" "}
        </span>
        <h1>Play</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>

      <div className="feature1 bg-orange-600">
        <span className="feature-icon">
          {" "}
          <FontAwesomeIcon icon={faBowlFood} />{" "}
        </span>
        <h1>Meal</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
    </div>



    <div className="mt-24 mb-20">
        <div className="text  text-center p-3">
    <h1 className="font-bold text-2xl text-pink-600">What we offer</h1>
    <p>Far far away, behind the word mountains, far from the
         countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>

        {/* <div className="grid grid-cols-3 gap-10">
            <div>
                <span className="bg-pink-600 py-3 px-3 text-white rounded-full"> <FontAwesomeIcon icon={faMusic} />{" "}</span>
                <h2 className="py-3">Music Class</h2>
                <p>Far far away, behind the word mountains, far 
                    from the countries Vokalia and Consonantia, 
                    there live the blind texts.</p>
            </div>

            <div>
                <span className="bg-orange-500 py-3 px-3 text-white rounded-full">  <FontAwesomeIcon icon={faBookOpen} />{" "}</span>
                <h2 className="py-3">English Class</h2>
                <p>Far far away, behind the word mountains, far 
                    from the countries Vokalia and Consonantia, 
                    there live the blind texts.</p>
            </div>

            <div>
                <span className="bg-blue-600 py-3 px-3 text-white rounded-full">  <FontAwesomeIcon icon={faLandmark} />{" "}</span>
                <h2 className="py-3">Government Class</h2>
                <p>Far far away, behind the word mountains, far 
                    from the countries Vokalia and Consonantia, 
                    there live the blind texts.</p>
            </div>

            <div>
                <span className="bg-yellow-600 py-3 px-3 text-white rounded-full">  <FontAwesomeIcon icon={faCalculator} />{" "}</span>
                <h2 className="py-3">Maths Class</h2>
                <p>Far far away, behind the word mountains, far 
                    from the countries Vokalia and Consonantia, 
                    there live the blind texts.</p>
            </div>

            <div>
                <span className="bg-red-600 py-3 px-3 text-white rounded-full">  <FontAwesomeIcon icon={faBook} />{" "}</span>
                <h2 className="py-3">Reading for kids</h2>
                <p>Far far away, behind the word mountains, far 
                    from the countries Vokalia and Consonantia, 
                    there live the blind texts.</p>
            </div>

            <div>
                <span className="bg-green-600 py-3 px-3 text-white rounded-full">  <FontAwesomeIcon icon={faBrush} />{" "}</span>
                <h2 className="py-3">Arts Class</h2>
                <p>Far far away, behind the word mountains, far 
                    from the countries Vokalia and Consonantia, 
                    there live the blind texts.</p>
            </div>

        </div> */}
    </div>
    </section>
  );
};

export default Features;
