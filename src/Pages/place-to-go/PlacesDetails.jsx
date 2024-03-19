import React from 'react'
import PlacesDescription from '../../components/place-to-go/placesDetails/PlacesDescription'
import Facilities from '../../components/place-to-go/placesDetails/Facilities'
import About from '../../components/place-to-go/placesDetails/About'
import Virtual from '../../components/place-to-go/placesDetails/Virtual'

const PlacesDetails = () => {
  return (
    <div className='z-20 relative bg-neutral-50 w-full flex justify-center flex-col pb-12'>
        <PlacesDescription />
        <Facilities />
        <About />
        <Virtual />
    </div>
  )
}

export default PlacesDetails