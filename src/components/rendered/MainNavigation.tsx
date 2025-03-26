import { useQuery } from '@apollo/client'
import { GET_MAIN_NAV, MainNavMenu } from '../../queries/getMainNav'
import { useEffect, useState } from 'react'
import LoadingNavigation from '../loading/LoadingNavigation';


 
const MainNavigation = () => {

    const { data, loading, error} = useQuery(GET_MAIN_NAV);
    const [queriedNav, setQueriedNav] = useState<MainNavMenu>();


    useEffect(()=>{
        if (setQueriedNav) setQueriedNav(data);
    }),[data]

    useEffect(()=>{
    console.log(queriedNav)
    },[queriedNav])

    if(loading) return <LoadingNavigation/>;

    if(error) return;

    return (
        <nav>
            <ul className={`hidden md:grid grid-cols-4 h-full`}>
            { queriedNav?.menu.menuItems.nodes.map((item)=>(
                <li key={item.id} className="text-black  first:bg-zinc-300  first:font-normal relative after:absolute after:bottom-0 after:h-2  after:left-0 after:w-full hover:after:h-full after:transition-all after:-z-10 z-10 flex flex-row gap-2 items-center justify-center border-2 border-y-0 border-black border-r-0 first:border-l-0 last:border-r-2 hover:bg-zinc-300 ">
                    <a aria-label={item.label} href="" target=""className="w-full h-full flex items-center justify-center"> 
                        <span className="text-sm md:text-lg hidden lg:block ">{item.label}</span> 
                    </a>
                </li>
            ))}  
            </ul>
        </nav>
    )
}

export default MainNavigation