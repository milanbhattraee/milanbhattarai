import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";

const Facilities = () => {
  const placesItem = useSelector((store) => store.explorePlaces);
  const ticketAvatar = placesItem.slice(0, 4);

 
  const [ticketCounts, setTicketCounts] = useState(
    ticketAvatar.map(() => 0) 
  );

  const handleIncrement = (index) => {
    const newTicketCounts = [...ticketCounts];
    newTicketCounts[index]++; 
    setTicketCounts(newTicketCounts); 
  };

  const handleDecrement = (index) => {
    const newTicketCounts = [...ticketCounts]; 
    if (newTicketCounts[index] > 0) {
      newTicketCounts[index]--;
      setTicketCounts(newTicketCounts); 
    }
  };

  return (
    <main className="flex justify-between flex-col py-4 items-start sm:px-10 gap-4 bg-gray-100">
      <h1 className="font-bold text-3xl mx-auto p-6 text-cyan-500">
        Our Facilities
      </h1>
      <div className="flex w-full lg:flex-row flex-col">
        <section className="sm:px-0 p-5 s flex gap-3 lg:w-2/4 w-full flex-col justify-center items-center">
          {ticketAvatar.map((item, index) => {
            return (
              <div
                className="flex w-full items-center gap-y-5 justify-evenly"
                key={index}
              >
                <div className="w-28 h-32">
                  <img
                    className="w-full rounded-md h-full object-cover"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center text-center items-center px-3">
                  <h1 className="text-sm sm:text-lg py-2">Bunjee Jumping</h1>
                  <span className="inline-block text-center text-xs sm:text-base w-14 rounded-xl text-green-600 bg-green-100">
                    500
                  </span>
                </div>
                <div className="py-1 text-center">
                  <label
                    htmlFor="ticket"
                    className="block font-bold text-xs sm:text-lg py-3"
                  >
                    No Of Ticket
                  </label>
                  <div className="flex py-1 gap-3">
                    <button
                      className="p-2 bg-gray-200 font-normal  rounded-md"
                      onClick={() => handleDecrement(index)}
                    >
                      <FaMinus />
                    </button>
                    <div className="my-auto w-6 px-4 flex justify-center">
                      {ticketCounts[index]}
                    </div>
                    <button
                      className="p-2 bg-gray-200 rounded-md"
                      onClick={() => handleIncrement(index)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="flex justify-center w-full lg:w-auto items-center">
          <div className="grid grid-cols-2">
            {placesItem.map((item, index) => {
              return (
                <div
                  className="flex lg:w-60 xl:w-80 xl:h-48 p-4 "
                  key={item.id}
                >
                  <img
                    className="w-full rounded-xl h-full object-cover"
                    src={item.img}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className="w-full flex justify-center items-center whitespace-nowrap px-2">
        <div className="bg-zinc-200 md:px-32 px-9 py-3">
          <h1>
            Total Rs <span>4000</span> /-
          </h1>
        </div>
        <div className="bg-green-500 md:px-32 px-7 py-3 cursor-pointer hover:bg-green-600 duration-200">
          <p className="mx-auto">Buy Now</p>
        </div>
      </div>
    </main>
  );
};

export default Facilities;
