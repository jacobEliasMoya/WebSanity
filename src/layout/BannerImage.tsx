type Props = {
    bgImage:string,
    bannerText:string
}

const BannerImage = (props: Props) => {
  return (
    <section className='bg-cover bg-center w-full h-30 md:h-80 grid grid-cols-1 items-center justify-center flex-col rounded-b-xl'
    style={{
        backgroundImage: `url(${props.bgImage})`,
    }}>
        <h1 className="font-dm-serif text-3xl md:text-6xl lg:text-8xl text-white text-center drop-shadow-lg shadow-black">{props.bannerText}</h1>
    </section>
  )
}

export default BannerImage