import background2 from '../assets/background2.mp4'
const About = () => {
  return (
    <div>
      <video src={background2} className='videoBg' autoPlay loop muted></video>
      <h1>About me</h1>
    </div>
  )
}

export default About
