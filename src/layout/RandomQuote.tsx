const RandomQuote = () => {
  return (
        <section className='bg-cover bg-center w-full h-15 fixed bottom-0 bg-zinc-300/70 backdrop-blur-md border-t-2 flex-row flex items-center justify-start px-8'>
            <div className="w-1/2 flex-row flex items-center justify-start gap-10">
                <h2 className="font-dm-serif text-2xl  text-center " >Quote of the Day</h2>
                <h3 className="font-inter text-md  text-center " >"Dont Eat Yellow Snow"</h3>
            </div>

            <div className="w-1/2 flex-row flex items-center justify-end gap-10">
                <h2 className="font-dm-serif text-2xl  text-center " >Have A Great Day - JM</h2>
            </div>
        </section>  
    )
}

export default RandomQuote