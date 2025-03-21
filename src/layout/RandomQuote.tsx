import { useEffect, useState } from "react";
import axios from "axios";
import { QuoteInterface } from "../types/QuoteApiInterface";

 
const RandomQuote = () => {

    const [quote,setQuote] = useState<QuoteInterface >()

    const progQuote = async () =>{

        const options = {
          method: 'GET',
          url: 'https://get-quotes-api.p.rapidapi.com/random',
          headers: {
            'x-rapidapi-key': 'ee1c72e30dmshb0923a36f539943p1c489cjsnbc83887d6b42',
            'x-rapidapi-host': 'get-quotes-api.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            setQuote(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        progQuote()

    },[])

    return (
        <section className='z-100 fixed bg-cover bg-center min-h-15 w-full  bottom-0 bg-neutral-200/90 backdrop-blur-md border-t-2 transition-all ease  flex-row items-center justify-between flex origin-bottom  p-4 px-5 font-dm-serif text-left'>
            <h2 className=" text-md px-4 " ><span className="text-2xl absolute top-3 left-3">"</span> {quote ? quote.quote.category : 'Browsing' } : {quote ? quote.quote.author : 'Who wrote this .. ' } <span className="text-2xl absolute bottom-3 right-3">"</span></h2>

            <h3 className="text-left px-4 text-md" >  
                {quote ? quote.quote.quote : 'looking for your quote-  '}    
            </h3>
        </section>  
    )
}

export default RandomQuote