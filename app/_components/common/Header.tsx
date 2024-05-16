'use client'
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import MobileNavMenu from './MobileNav';
import EnglitchaLogo from './engiltcha_logo';


export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (<header className=" border-b  mx-auto max-w-7xl px-5 py-5 flex items-center flex-col justify-between gap-10">
    <div className='w-full flex items-center justify-between'>
      <EnglitchaLogo />
      <nav >
        <ul className="hidden md:flex gap-6 text-base items-center">
          {menuItems}
        </ul>
        <div className='flex md:hidden'>
          <Hamburger toggled={isOpen} toggle={() => { setOpen(!isOpen) }} />
          {/* <button onClick={() => { console.log(isOpen) }}>something</button> */}
        </div>
      </nav>
    </div>

    <MobileNavMenu isOpen={isOpen} />
  </header>)
}


const menuItemsData = [{ id: 0, title: 'About', url: '/about' }, { id: 1, title: 'Syllabi', url: '/syllabi' }, { id: 2, title: 'Schedule', url: '/schedule' }, { id: 3, title: 'Announcements', url: '/announcements' }];

const menuItems = menuItemsData.map((item) => (<a key={item.id} href={item.url}>{item.title}</a>))


