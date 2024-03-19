import React from 'react'

const About = () => {
  return (
    <main className='w-full'>
    <h1 className='mx-auto py-8 text-2xl font-bold text-gray-900 text-center'>About Happy Land Fun Park</h1>
      <div className='md:w-[90%] w-full flex mx-auto justify-around items-center flex-col md:flex-row'>
        <section className='flex justify-center  items-center'>
          <div className='md:w-[25rem] w-full px-6 py-2'>
            <div className='py-3'>
            <h1 className='text-2xl font-bold text-gray-800'>Benefits</h1>
            <p className=''>
              Consectetur excepteur elit ullamco incididunt voluptate tempor
              exercitation. Lorem commodo ullamco quis velit officia aute
              laboris elit sit exercitation ut esse pariatur occaecat quis
            </p>
            </div>
            <div className='py-3'>
            <h4 className='text-base font-bold text-gray-800'>Laboris consequat ad </h4>
            <p>
              Consectetur excepteur elit ullamco incididunt voluptate tempor
              exercitation. Lorem commodo ullamco quis velit officia aute
              
            </p>
            </div>
            <div className='py-3'>
            <h4 className='text-base font-bold text-gray-800'>Laboris </h4>
            <p>
              Consectetur excepteur elit ullamco incididunt voluptate tempor
              exercitation. Lorem commodo ullamco 
            </p>
            </div>
            <div className='py-3'>
            <h4 className='text-base font-bold text-gray-800'>onsequatad dues e labor </h4>
            <p>
              Consectetur excepteur elit ullamco incididunt voluptate tempor.
            </p>
            </div>
            
          </div>
        </section>
        <section className='flex justify-center w-full md:w-auto px-5 items-center'>
          <div className='sm:w-96 w-[90%] h-[30rem]'>
            <img className='w-full h-full rounded-md object-cover' src="https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/387763459_836922781768543_5225318567016887659_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KcSPJUO0sOcAX-rjzpz&_nc_ht=scontent.fbdp2-1.fna&oh=00_AfDTeJXXFQTZgStsTaoADgxixW06aZtOtVklLAhhnVggmQ&oe=65EFEBAA" alt="" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default About