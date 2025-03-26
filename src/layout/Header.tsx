import logo from '../assets/logo.png'
import MainNavigation from '../components/rendered/MainNavigation'
import Socials from '../components/rendered/Socials'


const Header = () => {


  return (
    <header className="z-11 overflow-hidden sticky top-0 w-full mx-auto bg-white/80  backdrop-blur-lg border-b-1 border-black filter font-dm-serif text-lg grid grid-cols-1 h-20 ">
      <div className="grid grid-cols-3 ">
       
        <MainNavigation/>

        <div className="w-full h-full flex items-center justify-center border-r-2  md:border-r-0 group"> 
          <a href='/' className='w-full flex items-center justify-center h-full group-hover:bg-zinc-300'>  <img src={logo} alt="" className='h-10 md:h-15 w-auto group-hover:scale-110' /></a>  
        </div>

        <Socials additionalClasses={''}/>
      </div>
    </header>
  )
}

export default Header 