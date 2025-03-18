import { FaLinkedin } from "react-icons/fa6"
import { FaEnvelope, FaGithub,  FaMobile } from "react-icons/fa"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { SocialTypes } from "../types/socialTypes"

type Props = {
    additionalClasses:string 
}
    
const Socials = (props: Props) => {
    const initialSocials:Array<SocialTypes> = [
        {
            id:0,
            name: 'Call Now',
            url: 'tel:+19096446073',
            title: 'Call Me Now',
            icon: <FaMobile className={`${props.additionalClasses}`} />,
            target: undefined,
            desktopHidden: false
        },
        {   
            id:1,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jacob-moya-317998174/',
            title: 'View My LinkedIn Profile',
            icon: <FaLinkedin className={`${props.additionalClasses}`}/>,
            target: '_blank',
            desktopHidden: false
        },
        {
            name: 'Email Me',
            url: 'mailto:jemoya1994@gmail.com',
            title: 'Send a Eirect Email',
            icon: <FaEnvelope className={`${props.additionalClasses}`}/>,
            target: undefined,
            desktopHidden: false,
            id: 2
        },
        {
            name: 'Github',
            url: 'https://github.com/jacobEliasMoya/WebSanity',
            title: 'View Project Source Code',
            icon: <FaGithub className={`${props.additionalClasses}`} />,
            target: '_blank',
            desktopHidden: false,
            id: 3
        },
        {
            name: 'mobile',
            url: '#',
            title: 'menu toggle',
            icon: <GiHamburgerMenu className={`${props.additionalClasses}`} />,
            target: '_blank',
            desktopHidden: true,
            id: 4
        }
    ]

    const [socialElms,setSocialElms] = useState<SocialTypes[]>();
    
    useEffect(()=>{
        initialSocials ? setSocialElms(initialSocials) : null;
    },[])

    return (
        <div className="w-full first:text-blue-600 text-white first:font-normal   relative after:absolute after:bottom-0 after:h-2  after:left-0 after:w-full hover:after:h-full after:transition-all after:-z-10 z-10 grid lg:grid-cols-4 text-3xl col-start-3">
            {socialElms ? socialElms.map((item)=>(
                <a key={item.id} href={item.url} title={item.title} target={item.target} className={`hover:bg-blue-600 hover:text-black p-4 px-8 border-l-2 last:border-r-0 border-blue-600 h-full hover:text-4xl items-center justify-center flex ${item.desktopHidden ? 'lg:hidden' : 'hidden lg:flex'}`} aria-label={item.title} >
                    {item.icon}
                </a>
            )):''}
        </div>
    )
}

export default Socials