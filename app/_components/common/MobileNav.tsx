export default function MobileNavMenu({ isOpen }: any) {
  return (
    <div className="  w-full flex flex-col md:hidden text-base">
      {menuItems}
    </div >
  )
}


const menuItemsData = [{ id: 0, title: 'About', url: '/about' }, { id: 1, title: 'Faculty', url: '/faculty' }, { id: 2, title: 'Syllabus', url: '/syllabus' }, { id: 3, title: 'Routine', url: '/routine' }, { id: 4, title: 'Notice', url: '/notice' }];

const menuItems = menuItemsData.map((item) => (<a className=" p-2 border  font-medium text-base" key={item.id} href={item.url}>{item.title}</a>))
