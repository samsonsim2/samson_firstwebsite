import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { isCompositeComponent } from 'react-dom/test-utils'
import { useGlobalContext } from '../context/context'
import Hero from '../components/Hero'
import background from '../assets/background.mp4'
import { FaArrowUp } from 'react-icons/fa'
const Home = () => {
  const { active, setActive, heroActive, setHeroActive } = useGlobalContext()

  return (
    <>
      <div>
        <video src={background} className='videoBg' autoPlay loop muted></video>
        <h1>Welcome to my site</h1>
      </div>
      <div className='contact_container'>
        <div>
          <ul>
            <li>
              <h4>Contact me at:</h4>
            </li>
            <li>
              Samsonsim2@gmail.com <FaArrowUp className='icon' />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h4>Follow me at:</h4>
            </li>
            <li>
              {' '}
              <a
                href='http://instagram.com/samson.img'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram <FaArrowUp className='icon' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
