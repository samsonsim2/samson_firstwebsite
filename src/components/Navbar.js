import { Link } from 'react-router-dom'
import data from '../data.js'
import { useState } from 'react'
import { useGlobalContext } from '../context/context'
const Navbar = () => {
  const {
    active,
    setActive,
    sidebarActive,
    setSidebarActive,
    heroActive,
    setHeroActive,
  } = useGlobalContext()

  const handleClick = (item) => {
    setActive(item)

    if (item != 'Home') {
      if (item !== active) {
        setTimeout(() => {
          setHeroActive(false)

          setTimeout(() => {
            setSidebarActive(false)
            setTimeout(() => {
              setSidebarActive(true)
            }, 100)
          }, 100)
        }, 100)
      }

      if (item == active) {
        setSidebarActive(true)
      }
    }

    if (item === 'Home') {
      if (item === active) {
        setHeroActive(true)
      } else {
        setTimeout(() => {
          setHeroActive(false)
          setTimeout(() => {
            setHeroActive(true)
          }, 100)
        }, 100)

        setSidebarActive(false)

        setActive(item)
      }
    }
  }

  return (
    <nav>
      <div className='nav-bar'>
        {data.map((item, index) => {
          return (
            <Link
              onClick={() => handleClick(item.name)}
              to={`${item.name === 'Home' ? '/' : `${item.name}`}`}
              key={item.id}
              className={`${item.name === active ? 'button active' : 'button'}`}
            >
              <span className='label'>0{index + 1}</span>
              {` ${item.name}`}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
