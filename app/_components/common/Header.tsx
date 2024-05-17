'use client'
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import EnglitchaLogo from './engiltcha_logo';


export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const animationStyle = useSpring({
    opacity: isOpen ? 1 : 0,
    maxHeight: isOpen ? '100vh' : '0',
    config: { duration: 300 },
  })
  return (<header className=" border-b  mx-auto max-w-7xl px-5 py-4 md:py-6 flex items-center flex-col justify-between">
    <div className='w-full flex items-center justify-between'>
      <EnglitchaLogo />
      <nav >
        <ul className="hidden md:flex gap-6 text-base items-center">
          {menuItems}
        </ul>
        <div className='flex md:hidden'>
          <Hamburger easing='ease-in' toggled={isOpen} toggle={() => { setOpen(!isOpen) }} />
        </div>
      </nav>
    </div>

    <animated.div style={animationStyle} className="w-full flex flex-col gap-1 md:hidden text-base">
      {menuItems}
    </animated.div>
  </header>)
}


const menuItemsData = [{ id: 0, title: 'About', url: '/about' }, { id: 1, title: 'Faculty', url: '/faculty' }, { id: 2, title: 'Syllabus', url: '/syllabus' }, { id: 3, title: 'Routine', url: '/routine' }, { id: 4, title: 'Notice', url: '/notice' }];

const menuItems = menuItemsData.map((item) => (<a className=' shadow-md md:shadow-none rounded-sm md:rounded-none text-sm md:text-base p-2 md:p-0 ' key={item.id} href={item.url}>{item.title}</a>))


