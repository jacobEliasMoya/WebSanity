import { HiCode, HiHome, HiQuestionMarkCircle } from 'react-icons/hi'
import { HiComputerDesktop } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import Socials from '../components/Socials'

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
    }
  ]

  const [navigationElms,setNavigationElms] = useState<any[]>();

  useEffect(()=>{
    initialNav ? setNavigationElms(initialNav) : '';
  },[])

  return (
    <header className="z-11 overflow-hidden sticky top-0 w-full mx-auto bg-white/80  backdrop-blur-lg border-b-2 border-black filter font-dm-serif text-lg grid grid-cols-1 h-20 ">
      <div className="grid grid-cols-3 ">
       
        <ul className={`hidden md:grid grid-cols-4 h-full`}>
          { navigationElms?.map((item)=>(
            <li key={item.id} className="text-black  first:bg-zinc-300  first:font-normal relative after:absolute after:bottom-0 after:h-2  after:left-0 after:w-full hover:after:h-full after:transition-all after:-z-10 z-10 flex flex-row gap-2 items-center justify-center border-2 border-y-0 border-black border-r-0 first:border-l-0 last:border-r-2 hover:bg-zinc-300 ">
              <a aria-label={item.title} href={item.url} target={item.target ? item.target : '' } className="w-full h-full flex items-center justify-center"> 
                <span className="text-sm md:text-lg hidden lg:block ">{item.title}</span> 
                <span className={`hidden md:block lg:hidden ${item.additionalClasses}`}>{item.icon}</span> 
              </a>
            </li>
          )) }  
        </ul>

        <div className="w-full h-full flex items-center justify-center border-r-2  md:border-r-0 group"> 
          <a href='/' className='w-full flex items-center justify-center h-full group-hover:bg-zinc-300'>  <img src={logo} alt="" className='h-10 md:h-15 w-auto group-hover:scale-110' /></a>  
        </div>

        <Socials additionalClasses={''}/>
      </div>
    </header>
  )
}

export default Header 