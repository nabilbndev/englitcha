export default function MobileNavMenu({ isOpen }: any) {
  return (
    <div className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col md:hidden gap-5 text-base`}>
      {menuItems}
    </div >
  )
}


const menuItemsData = [{ id: 0, title: 'About', url: '/about' }, { id: 1, title: 'Syllabi', url: '/syllabi' }, { id: 2, title: 'Schedule', url: '/schedule' }, { id: 3, title: 'Announcements', url: '/announcements' }];

const menuItems = menuItemsData.map((item) => (<a className=" font-semibold text-lg" key={item.id} href={item.url}>{item.title}</a>))
