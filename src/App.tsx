import Header from './layout/Header'
import Section from './layout/PostSection'


function App() {

  // const [isDark,setIsDark] = useState<boolean>(false)

  // const handleDarkMode = () => {
  //   setIsDark(prev=> !prev)
  // }

  return (
    <main className=" min-h-dvh w-full grid grid-cols-1 gap-4 md:gap-8 ">
      <Header/>
      <div className="w-full md:w-10/12 mx-auto pb-8 px-4 ">
        <Section/>
      </div>
    </main>
  )
}

export default App
