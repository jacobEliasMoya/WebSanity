import { useEffect, useState } from 'react'
import { Nav } from '../../types/navigation'
import { MdLightMode } from 'react-icons/md'
import logo from '../../assets/logo.png'

const Header = () => {

  const initialNav:Array<Nav> = [
    {
      id: 0,
      name: 'Home',
      url: '/',
      title: 'Home',
      icon: undefined,
      target: undefined,
      additionalClasses: ''
    },
    {
      name: ' Services',
      url: '/',
      title: ' Services',
      icon: undefined,
      target: undefined,
      additionalClasses: '',
      id: 1
    },
    {
      name: ' Portfolio',
      url: '/',
      title: ' Portfolio',
      icon: undefined,
      target: undefined,
      additionalClasses: '',
      id: 2
    },
    {
      name: 'About',
      url: '/',
      title: 'About',
      icon: undefined,
      target: undefined,
      additionalClasses: '',
      id: 3
    },
    {
      name: 'Dark Mode',
      url: '/',
      title: '',
      icon: <MdLightMode />,
      target: undefined,
      additionalClasses: '',
      id: 4
    },
  ]

  const [navigationElms,setNavigationElms] = useState<Nav[]>();

  useEffect(()=>{
    initialNav ? setNavigationElms(initialNav) : '';
  },[])

  return (
    <header className=" shadow-lg shadow-neutral-300 sticky top-0 w-[97%] mx-auto rounded-full bg-neutral-100 text-neutral-950 font-inter font-thin text-xl mt-8 flex justify-between items-center p-2">
      <img src={logo} alt="" className='shadow-md shadow-neutral-300 rounded-full' />
      <ul className={`flex justify-end items-center gap-4 w-3/5 px-8 h-full`}>
        { navigationElms?.map((item)=>(
          <li key={`nav-${item.id}`} className="first:text-red-300 first:font-normal last:text-yellow-200 last:w-2 last:h-2 last:bg-blue-300 last:rounded-full p-4 relative after:absolute after:bottom-0 after:h-2  after:left-0 after:w-full hover:after:h-full after:transition-all after:-z-10 z-10 flex flex-row gap-2 items-center justify-center">
            <a aria-label={item.title} href={item.url} target={item.target ? item.target : '' } className=""> {item.title} {item.icon} </a>
          </li>
        )) }  
      </ul>
    </header>
  )
}

export default Header