import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import { FaInstagram, FaTwitter, FaBehance } from 'react-icons/fa'
import ContactForm from './ContactForm'
import Answer from './Answer'
import questions from '../questions'
const Sidebar = () => {
  const { sidebarActive, setSidebarActive, active, setActive } =
    useGlobalContext()

  if (active === 'About') {
    return (
      <>
        <aside>
          <div className={`${sidebarActive ? 'sidebar active' : 'sidebar'}`}>
            <div className='index'>02</div>
            <div className='content about-content'>
              <section className='about-section'>
                <h2>Hi There! </h2>
                <br />

                <p>
                  My name is Samson and i'm an aspiring front-end developer. I
                  have a background in motion design /augmented reality and I've
                  been a freelance 3D artist for the past 2 years. I love
                  working with new technologies to create art and to experiment
                  with creative ideas. I am curious, obssesive and passionate
                  about learning new things, and my ever expanding appetite for
                  knowledge has recently led me down the rabbit hole of web
                  development
                </p>
                <br />

                <span>
                  This website was crafted by myself, and designed by some
                  friends <h3>@ Studio Opla</h3>
                </span>
                <br />
                <br />

                <p>
                  This also happens to be my very first website, so pardon the
                  bugs and inconsistent formatting :)
                </p>
              </section>
              <section className='about-section removeBorder'>
                <p>
                  I have a strong background in design and 3D
                  modelling/animation that can help push my web designs and
                  expand the possibilities of any creative project given a
                  limited budget and timeline.Here is a list of my knowledge/
                  expertise:
                </p>
                <br />

                <ul>
                  <li>
                    <h3>Front-end:</h3> Html | CSS | Javascript | Three.js |
                    React
                  </li>

                  <li>
                    <h3>3D:</h3> C4D | Z-brush | Unreal | Octane | Houdini |
                    SparkAR
                  </li>
                  <li>
                    <h3>Design:</h3> Photoshop | Illustrator | AfterEffects |
                    Figma
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
      </>
    )
  }

  if (active === 'More Info') {
    return (
      <>
        <aside>
          <div className={`${sidebarActive ? 'sidebar active' : 'sidebar'}`}>
            <div className='index'>03</div>
            <div className='content questions-content'>
              <div className='questions-spacer'></div>
              {questions.map((question) => {
                return <Answer key={question.id} question={question} />
              })}
            </div>
          </div>
        </aside>
      </>
    )
  }

  if (active === 'Updates') {
    return (
      <>
        <aside>
          <div className={`${sidebarActive ? 'sidebar active' : 'sidebar'}`}>
            <div className='index'>04</div>
            <div className='content updates-content'>
              <section className='updates-section'>
                <h2>Follow me on my socials to see what i'm up to</h2>
                <br />
                <br />
                <ul>
                  <li>
                    <span>
                      <FaInstagram />
                    </span>
                    <a href='http://instagram.com/samson.img'> Instagram</a>
                  </li>
                  <li>
                    <span>
                      <FaTwitter />
                    </span>
                    <a href='http://twitter.com'> Twitter</a>
                  </li>
                  <li>
                    <span>
                      <FaBehance />
                    </span>
                    <a href='http://behance.com'> Behance</a>
                  </li>
                </ul>
              </section>
              <section className='updates-section removeBorder'>
                <ContactForm />
              </section>
            </div>
          </div>
        </aside>
      </>
    )
  }
}

export default Sidebar
