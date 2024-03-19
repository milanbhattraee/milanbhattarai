import React from 'react'
import SearchNav from "../../components/home/SearchNav"
import Carausel from "../../components/home/Carausel"
import TravelWithUs from '../../components/home/TravelWithUs';
import Category from '../../components/common/Category';
import CategoryFilter from '../../components/home/CategoryFilter';
import TimeLine from '../../components/home/TimeLine';
import BookBanner from '../../components/home/BookBanner';
import FAQ from '../../components/home/FAQ';
import OurPartners from '../../components/home/OurPartners';
import Copyright from '../../components/common/Copyright';

const Home = () => {
  return (
    <>
      <div className="mt-[4rem] bg-gray-100">
        <SearchNav />
        <Carausel />
        <TravelWithUs />
        <Category />
        <CategoryFilter />
        <TimeLine />
        <BookBanner />
        <FAQ />
        <OurPartners />
        <Copyright />
      </div>
    </>
  );
}

export default Home