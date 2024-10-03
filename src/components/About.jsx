import pic from '../assets/images/pic.jpg'

const About = () => {
    return (
      <section className='about'>
        <div className='about-text'>
            <h1 className='text-lg text-pink-600 font-bold'>About Us</h1>
            <p>Far far away, behind the word mountains, 
                far from the countries Vokalia and 
                Consonantia, there live the blind texts. 
                Separated they live in Bookmarksgrove
                 right at the coast of the Semantics, 
                 a large language ocean.</p>
                
                <div className='about-btn'>
                <button type="button" className='bg-pink-600 p-3 text-white'>Admission</button>
                <button type="button" className='rounded-full bg-pink-600 py-2 px-4 text-white'>Learn More</button>
                </div>
        </div>

        <div className='about-image'>
            <img src={pic} alt=""  />
        </div>
      </section>
    )
}

export default About