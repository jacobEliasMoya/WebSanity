import { useQuery } from '@apollo/client'
import { BlogInterface, GET_BLOGS } from '../queries/getBlogs'
import { useEffect, useState } from 'react';

const PostSection = () => {

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
                    <div className=' flex flex-col gap-4 md:gap-8 w-full h-full overflow-hidden '>
                        <h1 className='rounded-xl w-full text-lg lg:text-2xl p-8 text-white font-dm-serif bg-black  tracking-wide leading-none border-2 border-red-500 h-40 lg:min-h-30 flex items-center justify-center text-center text-balance'>{item.title}</h1>
                        <div className='w-full rounded-xl flex border-2 border-red-500 text-white flex-col gap-4 font-inter p-8 h-full' dangerouslySetInnerHTML={{__html:item.content}} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PostSection