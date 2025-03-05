import { useEffect, useState } from 'react'
import axios from 'axios';

const Section = () => {

    const [posts, setPosts] = useState<any[]>()

    useEffect(()=>{
        axios.get('https://jacobmoya.com/cms/wp-json/wp/v2/posts')
        .then(response => setPosts(response.data))
        .catch(error => console.error(error));
    },[])

    return (
    <section className='w-dvw min-h-dvh flex items-center justify-center flex-col'>
       {posts? posts.map((item)=>(
        <>
            <h1> {item.title.rendered} </h1>
            <p dangerouslySetInnerHTML={{__html:item.content.rendered}}></p>
        </>
       )) : null}
    </section>
    )
}

export default Section