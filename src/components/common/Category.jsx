import React, { useState } from "react";

const Category = () => {
  const categoryItems = [
    { url: "images/carausel/slide1.jpg", tag: "All" },
    { url: "images/carausel/slide2.jpg", tag: "Mountains" },
    { url: "images/carausel/slide4.jpg", tag: "Temples" },
    {
      url: "https://images.unsplash.com/photo-1621354598022-16599af1b8b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Parks",
    },
    {
      url: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "hotels",
    },
    { url: "images/carausel/slide5.jpg", tag: "Resort" },
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Technology",
    },
    {
      url: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Holidays",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="flex text-center  justify-start flex-col items-center  mx-auto w-full">
      
      <div className=" ">
        <h1 className="text-2xl pt-8  text-sky-400 font-bold">
          Select A Category
        </h1>
      </div>
      <div className="container w-[100%] flex justify-start items-center overflow-hidden overflow-x-auto mx-auto min-h-40 ">
        <div className="flex gap-6  justify-start items-center mx-auto  md:px-20">
          {categoryItems.map((items, index) => (
            <div
              key={index}
              className="w-20 h-20 rounded-full flex-shrink-0 mx-4"
              onClick={() => setCurrentIndex(index)}
            >
              <img
                className={`rounded-full w-full h-full cursor-pointer duration-200 ease-in-out ${
                  currentIndex === index
                    ? "border-4 border-orange-400"
                    : "border-none"
                } `}
                src={items.url}
                alt=""
              />
              <h1 className="mt-1  sm:text-sm md:text-md">{items.tag}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
