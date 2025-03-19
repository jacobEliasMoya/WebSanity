import BannerImage from './layout/BannerImage'
import Header from './layout/Header'
import PostSection from './layout/PostSection'
import blackBG from './assets/black organic shed background.webp'
import RandomQuote from './layout/RandomQuote'

function App() {

  return (
    <main className=" min-h-dvh w-full flex items-start flex-col">
      <Header/>
      <BannerImage bgImage={blackBG} bannerText={'Jakespace'} />
      
      <div className="w-full lg:w-10/12 mx-auto p-8 lg:pt-18">
        <PostSection/>
      </div>

      <RandomQuote/>
    </main>
  )
}

export default App
