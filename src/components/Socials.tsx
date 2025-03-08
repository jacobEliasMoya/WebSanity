import { FaLinkedin } from "react-icons/fa6"
import { FaEnvelope, FaGithub,  FaMobile } from "react-icons/fa"
import { ReactElement, useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

interface Socials {
    id:number
    name:string,
    url:string,
    title: string,
    icon: ReactElement,
    target:string|undefined,
    desktopHidden: boolean
 }

type Props = {
    additionalClasses:string 
}
    
const Socials = (props: Props) => {
    const initialSocials:Array<Socials> = [
        {
            id:0,
            name: 'Call Now',
            url: 'tel:+19096446073',
            title: 'Call Now',
            icon: <FaMobile className={`${props.additionalClasses}`} />,
            target: undefined,
            desktopHidden: false
        },
        {   
            id:1,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jacob-moya-317998174/',
            title: 'View LinkedIn',
            icon: <FaLinkedin className={`${props.additionalClasses}`}/>,
            target: '_blank',
            desktopHidden: false
        },
        {
            name: 'Email Me',
            url: 'mailto:jemoya1994@gmail.com',
            title: 'Email Me',
            icon: <FaEnvelope className={`${props.additionalClasses}`}/>,
            target: undefined,
            desktopHidden: false,
            id: 2
        },
        {
            name: 'Github',
            url: 'https://github.com/jacobEliasMoya/',
            title: 'My Github',
            icon: <FaGithub className={`${props.additionalClasses}`} />,
            target: '_blank',
            desktopHidden: false,
            id: 3
        },
        {
            name: 'mobile',
            url: '/',
            title: 'My Github',
            icon: <GiHamburgerMenu className={`${props.additionalClasses}`} />,
            target: '_blank',
            desktopHidden: true,
            id: 4
        }
    ]

    const [socialElms,setSocialElms] = useState<Socials[]>();
    
    useEffect(()=>{
        initialSocials ? setSocialElms(initialSocials) : null;
    },[])

    return (
        <div className="full first:text-red-500 text-white first:font-normal   relative after:absolute after:bottom-0 after:h-2  after:left-0 after:w-full hover:after:h-full after:transition-all after:-z-10 z-10 grid lg:grid-cols-4 text-3xl col-start-3">
            {socialElms ? socialElms.map((item)=>(
                <a key={item.id} href={item.url} title={item.title} target={item.target} className={`hover:bg-red-500 hover:text-black first:border-l-2 last:border-r-0 lg:border-l-0 p-4 px-8 border-2 border-red-500 h-full border-y-0  items-center justify-center flex border-l-2 ${item.desktopHidden ? 'lg:hidden' : 'hidden lg:flex'}`} aria-label={item.title} >
                    {item.icon}
                </a>
            )):''}
        </div>
    )
}

export default Socials