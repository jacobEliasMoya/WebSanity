import { useQuery } from '@apollo/client'
import { BlogInterface, GET_BLOGS } from '../queries/getBlogs'
import { useEffect, useState } from 'react';

const Section = () => {

    const { data, loading, error } = useQuery(GET_BLOGS);
    const [postData, getPostData] = useState<BlogInterface | null>(null);

    useEffect(()=>{
        getPostData(data)
    }),[]

    if (loading) return; 
    if (error) return; 

    return (
        <section className='w-full min-h-screen grid grid-cols-1 gap-8 flex-col '>
            <div className="w-full">
                <div className="blog-wrap ">
                  {postData?.posts.nodes.map((item)=>(
                    <div className='grid grid-cols-1 gap-4 items-start'>
                        <h1 className='text-2xl font-dm-serif bg-red-700 text-white tracking-wide p-4 rounded-md'>{item.title}</h1>
                        <div className='flex flex-col gap-4 font-inter pl-4' dangerouslySetInnerHTML={{__html:item.content}} />
                        {item.author.node.name}
                        {item.id}
                    </div>
                  ))}
                </div>
            </div>
        </section>
    )
}

export default Section