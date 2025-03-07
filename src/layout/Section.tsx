import { useQuery } from '@apollo/client'
import { BlogInterface, GET_BLOGS } from '../queries/getBlogs'
import { useEffect, useState } from 'react';

const Section = () => {

    const { data, loading, error } = useQuery(GET_BLOGS);
    const [postData, getPostData] = useState<BlogInterface | null>(null);

    useEffect(()=>{
        getPostData(data)
    }),[]

    if (error) return; 

    if (loading) return;

    return (
        <section className='w-full min-h-screen grid grid-cols-1 gap-8 flex-col '>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-4 md:gap-8">
                {postData?.posts.nodes.map((item)=>(
                <div className=' flex flex-col justify-start rounded-3xl items-start w-full h-full overflow-hidden '>
                    <h1 className='w-full text-lg md:text-xl lg:text-2xl p-8 text-indigo-950 font-dm-serif bg-white tracking-wide leading-none rounded-b-none min-h-40 md:min-h-40 lg:min-h-30 flex items-center justify-center text-center text-balance'>{item.title}</h1>
                    <div className='w-full  flex bg-indigo-900 text-white flex-col gap-4 font-inter p-8 h-full' dangerouslySetInnerHTML={{__html:item.content}} />
                </div>
                ))}
            </div>
        </section>
    )
}

export default Section