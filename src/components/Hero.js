import { useEffect } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'
import { useGlobalContext } from '../context/context'

const Home = () => {
  const { active, setActive, heroActive, setHeroActive } = useGlobalContext()

  return (
    <>
      <div className={`${heroActive ? 'hero-text active' : 'hero-text'}`}>
        SAMSON.IMG
      </div>
    </>
  )
}

export default Home
