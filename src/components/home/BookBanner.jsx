import React from 'react'

const BookBanner = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="sm:p-8 sm:w-[80%] py-4 w-[90%] rounded-lg bg-cyan-600 flex flex-col sm:justify-center justify-around items-center">
        <section className='w-full flex sm:justify-evenly justify-between items-center font-extrabold max-[322px]:text-[10px] text-[12px] sm:text-sm lg:text-2xl md:text-xl text-white sm:p-8 p-3'>
          <div>
          <h1>10000+ Peoples Served</h1>
          </div>
            <div>
                <h1>500+ Travel Planned</h1>
            </div>
        </section>
        <section className='w-full flex justify-center items-center'>
            <button className=' border-none px-4 py-1 sm:px-8 sm:py-3 bg-orange-300 hover:bg-orange-400 duration-200 ease-in-out rounded-md'>Book a Tour</button>
        </section>
      </div>
    </div>
  );
}

export default BookBanner