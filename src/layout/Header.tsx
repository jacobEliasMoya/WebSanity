import { HiCode, HiHome, HiQuestionMarkCircle } from 'react-icons/hi'
import { HiComputerDesktop } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {

  const initialNav:Array<any> = [
    {
      id: 0,
      name: 'Home',
      url: '/',
      title: 'Home',
      icon: <HiHome/>,
      target: undefined,
      additionalClasses: ''
    },
    {
      name: ' Services',
      url: '/',
      title: ' Services',
      icon: <HiComputerDesktop/>,
      target: undefined,
      additionalClasses: '',
      id: 1
    },
    {
      name: ' Portfolio',
      url: '/',
      title: ' Portfolio',
      icon: <HiCode/>,
      target: undefined,
      additionalClasses: '',
      id: 2
    },
    {
      name: 'About',
      url: '/',
      title: 'About',
      icon: <HiQuestionMarkCircle/>,
      target: undefined,
      additionalClasses: '',
      id: 3
    },
    {
      name: 'Mobile',
      url: '/',
      title: '',
      icon: <GiHamburgerMenu />,
      target: undefined,
      additionalClasses: '!block lg:!hidden',
      id: 4
    },
  ]

  const [navigationElms,setNavigationElms] = useState<any[]>();

  useEffect(()=>{
    initialNav ? setNavigationElms(initialNav) : '';
  },[])

  return (
    <header className=" shadow-sm shadow-neutral-300 sticky top-0 w-full mx-auto rounded-full bg-neutral-100 text-neutral-950 font-inter font-thin text-xl flex justify-between items-center p-2 h-17">
      <img src={logo} alt="" className='shadow-md shadow-neutral-300 rounded-full h-15' />
      <ul className={`flex justify-end items-center gap-2 md:gap-4 w-3/5 px-4 h-full`}>
        { navigationElms?.map((item)=>(
          <li key={`nav-${item.id}`} className="first:text-neutral-700 first:font-normal p-2 md:p-4 relative after:absolute after:bottom-0 after:h-2  after:left-0 after:w-full hover:after:h-full after:transition-all after:-z-10 z-10 flex flex-row gap-2 items-center justify-center">
            <a aria-label={item.title} href={item.url} target={item.target ? item.target : '' } className=""> 
              <span className="hidden lg:block">{item.title}</span> 
              <span className={`hidden md:block lg:hidden text-neutral-950 ${item.additionalClasses}`}>{item.icon}</span> 
            </a>
          </li>
        )) }  
      </ul>
    </header>
  )
}

export default Header 