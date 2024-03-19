import React from "react";
import { FaChevronRight, FaChevronDown, FaStar } from "react-icons/fa";
import ReviewsItem from "../common/ReviewsItem";
const reviewItems = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Miller",
    comment:
      "Nulla laboris fugiat fugiat minim minim excepteur eiusmod quis. Laborum est minim id cillum nostrud cillum consectetur.",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Miller",
    comment:
      "Nulla laboris fugiat fugiat minim minim excepteur eiusmod quis. Laborum est minim id cillum nostrud cillum consectetur.",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Miller",
    comment:
      "Nulla laboris fugiat fugiat minim minim excepteur eiusmod quis. Laborum est minim id cillum nostrud cillum consectetur.",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Miller",
    comment:
      "Nulla laboris fugiat fugiat minim minim excepteur eiusmod quis. Laborum est minim id cillum nostrud cillum consectetur.",
  },
];
const Reviews = () => {
  return (
    <main className="w-full flex justify-center items-center mt-11  bg-neutral-50 py-6 ">
      <div className="sm:w-11/12 w-full ">
        <section className="py-6 px-7 ">
          <h1 className="text-2xl font-bold ">
            Reviews{" "}
            <span className="text-sm px-1">
              <FaStar className="inline text-amber-300 mb-1 mr-1" />
              4.20
            </span>{" "}
            <span className="font-normal px-1 text-base">(99 reviews)</span>
          </h1>
        </section>
        <section className="md:grid md:grid-cols-2 flex flex-col ">
          {reviewItems.map((item, index) => {
            return (
              <div key={index} className="flex flex-col py-4 px-7">
                <div className="flex gap-3 py-2">
                  <div className="">
                    <img
                      className="rounded-full w-10 h-10 shrink-0 "
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3 className="font-bold">{item.name}</h3>
                    <span className="">
                      <FaStar className="inline text-amber-300"/>
                      <FaStar className="inline text-amber-300"/>
                      <FaStar className="inline text-amber-300"/>
                      <FaStar className="inline text-amber-300"/>
                      
                    </span>
                  </div>
                  <div className="text-sm ">
                    <span>2d ago</span>
                  </div>
                </div>
                <div>
                  <p>{item.comment}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Reviews;
