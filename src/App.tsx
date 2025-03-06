import Header from "./components/layout/Header"
import Section from "./components/layout/Section"

function App() {

  // const [isDark,setIsDark] = useState<boolean>(false)

  // const handleDarkMode = () => {
  //   setIsDark(prev=> !prev)
  // }

  return (
    <main className="bg-white min-h-dvh container mx-auto grid grid-cols-1 gap-8 py-8 p-4">
      <Header/>
      <Section/>
    </main>
  )
}

export default App
