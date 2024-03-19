import React from 'react'

const Virtual = () => {
  return (
    <main className='w-full mt-4 flex justify-center items-center -z-10 flex-col'>
        <h1 className='font-bold text-4xl self-start py-5 ml-16 text-gray-800'>Virtual Tour</h1>
        <div className="fullscreen-video w-11/12 ">
      <video autoPlay loop muted className='w-full'>
        {/* Source of your video */}
        <source src="https://previews.customer.envatousercontent.com/6af398e7-8684-4318-b8c4-de74405a531e/watermarked_preview/watermarked_preview.mp4" type="video/mp4" />
        {/* Add more source elements for different video formats */}
        {/* <source src="your_video.webm" type="video/webm" /> */}
        {/* <source src="your_video.ogv" type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
    </main>
  )
}

export default Virtual