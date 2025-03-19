import { useEffect, useState } from "react";
import { QuoteInterface } from "../types/QuoteApiInterface";


const RandomQuote = () => {

    const [quote,setQuote] = useState<QuoteInterface >()

    useEffect(()=>{
        fetch('https://api.quotable.io/random').then(data=>data.json()).then(data=>setQuote(data))
    },[])

    useEffect(()=>{
        console.log(quote)
    },[quote])


  return (
        <section className='bg-cover bg-center w-full min-h-15 fixed bottom-0 bg-zinc-300/70 backdrop-blur-md border-t-2 flex-row flex items-center justify-start py-2 px-4'>
            <div className="w-4/6 flex-row flex items-center justify-start gap-10">
                <h2 className="font-dm-serif text-xl  text-center " >Quote of the Day</h2>
                <h3 className="font-inter text-md  text-center " >"{quote ? quote.content.split('.')[0] + "." : 'looking for your quote  '}"</h3>
            </div>

            <div className="w-2/6 flex-row flex items-center justify-end gap-10">
                <h2 className="font-dm-serif text-2xl  text-center " >{quote ? quote.author : 'looking for your author  '}</h2>
            </div>
        </section>  
    )
}

export default RandomQuote