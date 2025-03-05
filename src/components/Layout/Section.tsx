 import { useQuery } from '@apollo/client'
 import { GET_BLOGS } from '../../queries/getBlogs'
import { useEffect } from 'react';

const Section = () => {

    const { data } = useQuery(GET_BLOGS);


    useEffect(()=>{
        data ? console.log(data) : '';
    },[data])
    
    return (
    <section className='w-dvw min-h-dvh flex items-center justify-center flex-col '>
        <> 
            {
                data ? data.posts.nodes.map((item:any) => {
                    <>
                        <h1>{item.title}</h1>
                        <p>{item.title}</p>
                    </>
                }) :    
                <>
                    <h1>Loading</h1>
                    <p>... ...  </p>
                </>
            }
        </>
    </section>
    )
}

export default Section