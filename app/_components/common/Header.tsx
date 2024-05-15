import EnglitchaLogo from './engiltcha_logo';


export default function Header() {
  return (<header className=" border-b  mx-auto max-w-7xl px-5 bg-orange-600-50 py-5 flex items-center justify-between">
    <EnglitchaLogo />
    <nav >
      <ul className="hidden md:flex gap-6 text-base items-center">
        {menuItems}
      </ul>
      <Hamburger />
    </nav>
  </header>)
}


const menuItemsData = [{ id: 0, title: 'About', url: '/about' }, { id: 1, title: 'Syllabus', url: '/syllabus' }, { id: 2, title: 'Routine', url: '/routine' }, { id: 3, title: 'Notice', url: '/notice' }];

const menuItems = menuItemsData.map((item) => (<a key={item.id} href={item.url}>{item.title}</a>))


function Hamburger() {
  return (<div className=' flex flex-col gap-1 md:hidden'>
    <span className='bg-orange-600 h-1 rounded-md w-10'></span>
    <span className='bg-orange-600 h-1 rounded-md w-10'></span>
    <span className='bg-orange-600 h-1 rounded-md w-10'></span>
  </div>)
}