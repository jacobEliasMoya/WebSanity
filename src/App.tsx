// import { useState } from "react"

import Header from "./components/layout/Header"
import Section from "./components/layout/Section"

function App() {

  // const [isDark,setIsDark] = useState<boolean>(false)

  // const handleDarkMode = () => {
  //   setIsDark(prev=> !prev)
  // }

  return (
    <main className="bg-white min-h-dvh">
      <Header/>
      <Section/>
    </main>
  )
}

export default App
