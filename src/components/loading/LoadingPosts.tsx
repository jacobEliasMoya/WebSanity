
const LoadingPosts = () => {

    const loadingMaxNum:number[] = [1,2,3];

  return (
    <section className='w-full min-h-screen grid grid-cols-1  flex-col '>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-4 md:gap-8">
            {loadingMaxNum?.map((item)=>(
                <div key={`loading-post-${item}`} className=' flex flex-col gap-4 md:gap-8 w-full h-full overflow-hidden '>
                    <div className='w-full rounded-xl flex flex-col gap-4 font-inter p-8 h-40 md:h-80  bg-gradient-to-br from-neutral-100 to-neutral-300 animate-pulse [animation-duration:.5s]' ></div>

                    <h1 className='rounded-xl w-full text-lg lg:text-2xl p-8 text-white tracking-wide font-dm-serif  leading-none   h-40 lg:min-h-30 flex items-center justify-center text-center text-balance bg-gradient-to-br from-neutral-100 to-neutral-300 animate-pulse [animation-duration:.5s]'></h1>
                    
                    <div className='w-full rounded-xl flex bg-gradient-to-br from-neutral-100 to-neutral-300 flex-col gap-4 font-inter p-8 h-full animate-pulse [animation-duration:.5s]' ></div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default LoadingPosts