import React, { useState } from "react";
import SearchBar from "../../common/SearchBar";
import { FaCheckCircle } from "react-icons/fa";
import {FaMinus,FaPlus} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";




const PlacesDescription = () => {
  const placesItem = useSelector((store) => store.explorePlaces);
  
  const [ticketCount, setTicketCount] = useState(0);
  ticketCount < 0 && setTicketCount(0);
  
  const navigate = useNavigate();
  const { id } = useParams();

  
  

  return (
    <main className="w-full overflow-hidden">
      
      <section className="w-full h-16 bg-neutral-50 border shadow-lg fixed  flex justify-center mt- items-center">
        <div className=" rounded-md absolute left-2 md:left-12 lg:left-20 sm:left-8 cursor-pointer text-white">
          <FaXmark className="text-4xl text-cyan-500 hover:text-cyan-700" onClick={()=>{navigate("/placestogo")}} />
        </div>
        <div className="w-full flex justify-center items-center mb-5">
          <SearchBar />
        </div>
      </section>
      <section className="w-full px-2 md:px-9 mt-16 mx-auto flex justify-between py-10 lg:flex-row flex-col gap-12">
        <div className="lg:h-[30rem] h-auto px-2 shrink-0 lg:flex-col flex-row  flex justify-start lg:p-0 gap-2 overflow-auto">
          {placesItem.map((item, index) => {
            return (
              <div
                className="h-auto shrink-0 lg:flex-col flex-row  flex justify-start overflow-"
                key={item.id}
              >
                {id != index && (
                  <NavLink
                    to={`/placestogo/description/${index}`}
                    className=" flex-shrink-0 h-60"
                  >
                    <img
                      className="w-52 h-full rounded-md object-cover"
                      src={item.img}
                      alt=""
                    />
                  </NavLink>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center px-2 sm:px-8 sm:flex-row flex-col">
          <div className="sm:w-[34rem] h-[30rem] w-full mx-auto flex ">
            <img
              className="rounded-md h-full w-full object-cover"
              src={placesItem[id].img}
              alt=""
            />
          </div>

          <div className="md:h-[30rem] h-auto lg:w-6/12 w-full flex sm:pl-8 justify-center items-center ">
            <div className="">
              <div className="">
                <h1 className="text-cyan-400 py-3 mt-6 sm:mt-0 text-3xl font-bold">
                  {placesItem[id].name}
                </h1>
                <p>Buddhashanti -2 Budhabare Jhapa</p>
                <h1 className="text-cyan-400 py-2 text-3xl font-bold">
                  Rs {placesItem[id].price} /-
                </h1>
                <p className="">
                  In ullamco labore mollit et exercitation fugiat exercitation
                  minim ex sint ullamco exercitation amet officia mollit. Qui
                  cillum pariatur
                </p>
              </div>
              <div className="py-4">
                <h1>
                  <span className="font-bold">10</span> Tickets Available
                </h1>
              </div>
              <div className="flex gap-2  py-1 items-center">
                <FaCheckCircle className="inline text-green-400" />
                <p>Bus Up and Down Ticket</p>
              </div>
              <div className="flex gap-2 py-1 items-center ">
                <FaCheckCircle className="inline text-green-400" />
                <p>Park Entry Ticket</p>
              </div>
              <div className="py-2">
                <label htmlFor="countries" className="block">
                  End Date
                </label>

                <input
                  className=" bg-gray-200 w-full  outline-none py-1 px-4 rounded-md my-2"
                  type="date"
                  name=""
                  id=""
                />
              </div>
              <div className="py-1">
                <label htmlFor="ticket" className="block">
                  Ticket
                </label>
                <div className="flex py-1 gap-3">
                  <button
                    className="p-2 bg-gray-200 rounded-sm"
                    onClick={() => {
                      setTicketCount(ticketCount - 1);
                    }}
                  >
                    <FaMinus />
                  </button>
                  <div className="my-auto w-6 px-4 flex justify-center">
                    {ticketCount}
                  </div>
                  <button
                    className="p-2 bg-gray-200 rounded-sm"
                    onClick={() => {
                      setTicketCount(ticketCount + 1);
                    }}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlacesDescription;
