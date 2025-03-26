const LoadingNavigation = () => {

    const loadingMaxNum:number[] = [1,2,3,4];

  return (
    <nav>
        <ul className={`hidden md:grid grid-cols-4 h-full`}>
        { loadingMaxNum.map(()=>(
            <li className="text-black  first:bg-zinc-300  first:font-normal relative after:absolute after:bottom-0 after:h-2  after:left-0 after:w-full hover:after:h-full after:transition-all after:-z-10 z-10 flex flex-row gap-2 items-center justify-center border-2 border-y-0 border-black border-r-0 first:border-l-0 last:border-r-2 hover:bg-zinc-300 ">
                <a className="w-full h-full flex items-center justify-center"> 
                    <span className="text-sm md:text-lg hidden lg:block bg-gradient-to-br from-neutral-100 to-neutral-300 rounded-lg w-2/3 h-7 animate-pulse [animation-duration:.5s]"></span> 
                </a>
            </li>
        ))}  
        </ul>
    </nav>
  )
}

export default LoadingNavigation