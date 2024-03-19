import React from 'react'
import ExplorePlaces from '../../components/place-to-go/ExplorePlaces'
import Ticket from '../../components/common/Ticket';
import Category from '../../components/common/Category';
import Reviews from '../../components/place-to-go/Reviews';
import Copyright from '../../components/common/Copyright';

const PlaceToGo = () => {
  return (
    <div className="mt-[4rem]  bg-gray-100 overflow-hidden">
      <ExplorePlaces />
      <h1 className=' text-center py-3 mt-12 border-t-2  border-x-2 border-gray-300 bg-white w-11/12 mx-auto font-bold text-2xl'>Get A Ticket</h1>
    <Ticket />
    <Category />
      <div className='mt-6'>
      <Ticket />
      </div>
      <Reviews  />
      <Copyright/>
    </div>
  );
}

export default PlaceToGo