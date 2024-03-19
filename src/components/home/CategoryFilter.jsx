import React, { useReducer, useState } from "react";
import { FaChevronRight, FaChevronDown, FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineFilterAlt,MdOutlineFilterAltOff } from "react-icons/md";



const DEFAULT_LIST = [
  {
    url: "https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    place: "Hotel room in Ueno",
    title: "Superior Familly Room",
    rooms: "6 guests • 4 beds • 1 private bath",
    facilities: "Kitchen • Wifi • Air conditioning",
    reviewsRate: "4.5",
    totalReviews: "636",
    totalPrice: "253",
    perNightPrice: "$63",
  },
  {
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    place: "Hotel room in Ueno",
    title: "Superior Familly Room",
    rooms: "6 guests • 4 beds • 1 private bath",
    facilities: "Kitchen • Wifi • Air conditioning",
    reviewsRate: "4.5",
    totalReviews: "636",
    totalPrice: "253",
    perNightPrice: "$63",
  },
  {
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    place: "Hotel room in Ueno",
    title: "Superior Familly Room",
    rooms: "6 guests • 4 beds • 1 private bath",
    facilities: "Kitchen • Wifi • Air conditioning",
    reviewsRate: "4.5",
    totalReviews: "636",
    totalPrice: "253",
    perNightPrice: "$63",
  },
  {
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    place: "Hotel room in Ueno",
    title: "Superior Familly Room",
    rooms: "6 guests • 4 beds • 1 private bath",
    facilities: "Kitchen • Wifi • Air conditioning",
    reviewsRate: "4.5",
    totalReviews: "636",
    totalPrice: "253",
    perNightPrice: "$63",
  },
];

const filterItems = [
  {
    title: "Property Type",
    list:['Hotel','Guest House','House','Apartment']
  },
  {
    title: "Price",
    list:['From below 50$','From 50% to 99$','From 100$ to 199$','Above 200$']
  },
  {
    title: "Reviews",
    list:['Hotel','Guest House','House','Apartment']
  },
  {
    title: "Rooms And Beds",
    list:['From below 50$','From 50% to 99$','From 100$ to 199$','Above 200$']
  }
]

const initialState = {
  property: false,
  price: false,
};
const reducer = (state, action) => {
  console.log(action,state);
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        [action.item]: !state[action.item],
      };
    default:
      return state;
    }
  };
  
  const CategoryFilter = () => {
    const [activeItems, dispatch] = useReducer(reducer, initialState);
    const [openFilter,setOpenFilter] = useState(false)

  const handleFilterItem = (item) => {
    dispatch({ type: "TOGGLE", item });
  };
  const handleFilterClick = () =>{
    setOpenFilter(!openFilter)
  }

  return (
    <section className="w-full flex flex-col justify-evenly lg:flex-row items-center lg:items-start mb-0 lg:mb-10 px-0 lg:px-10 overflow-hidden">
      <section className="flex justify-center flex-col mt-14 items-center  lg:w-[20%] w-full ">
        <div className="lg:hidden  w-[95%] mb-6">
          {!openFilter ? (
            <div
              className="inline-flex items-center justify-center text-xl rounded-md px-14 py-3 duration-200 ease-in-out cursor-pointer bg-cyan-400 hover:bg-cyan-600 text-white border-gray-300"
              onClick={handleFilterClick}
            >
              <MdOutlineFilterAlt className="inline-block mr-3 mt-1.5" />
              <span>Open</span>
            </div>
          ) : (
            <div
              className="inline-flex items-center justify-center text-xl rounded-md px-14 py-3 duration-200 ease-in-out cursor-pointer bg-cyan-400 hover:bg-cyan-600 text-white border-gray-300"
              onClick={handleFilterClick}
            >
              <MdOutlineFilterAltOff className="inline-block mr-3 mt-1.5" />
              <span>Close</span>
            </div>
          )}
        </div>
        <div
          className={`lg:flex justify-center items-center ${
            openFilter ? "flex" : "hidden"
          } w-[95%] lg:w-[80%]`}
        >
          <div className="w-full px-4 border rounded-md bg-white min-w-60">
            {filterItems.map((item, index) => {
              return (
                <section key={item.index}>
                  <div className=" py-4">
                    <div
                      className="px-2 py-3 font-bold bg-gray-50  relative cursor-pointer"
                      onClick={() => handleFilterItem(index)}
                    >
                      {activeItems[index] ? (
                        <FaChevronDown className="absolute right-2 top-[36%]" />
                      ) : (
                        <FaChevronRight className="absolute right-2 top-[36%]" />
                      )}
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                  {activeItems[index] && (
                    <div className="">
                      {item.list.map((listItem, index) => {
                        return (
                          <div
                            key={index}
                            className=" py-0.5 px-2 flex items-center h-10"
                          >
                            <input
                              className="relative top-[1.3px]"
                              type="checkbox"
                              name=""
                              id=""
                            />
                            <div className="mx-1 " htmlFor="checkbox">
                              {listItem}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </section>
      <section className="lg:w-[70%] mt-14 w-[95%] flex justify-between md:justify-center items-center px-2 md:px-10 bg-white md:text-sm   border rounded-lg">
        <div className="w-full flex justify-between items-start  rounded-md  flex-col ">
          {/* section starts  */}
          {DEFAULT_LIST.map((items, index) => {
            return (
              <>
                <div
                  key={index}
                  className={`flex justify-between w-full items-center my-4 md:my-10 rounded-md ${
                    index !== 0 ? "mt-4" : ""
                  }`}
                >
                  <div className="flex justify-between items-center rounded-md ">
                    <div className="pr-4">
                      <img
                        className="min-[340px]:w-[5rem] min-[400px]:w-[9rem] min-[450px]:w-[12rem]  xl:min-w-[24rem] md:min-w-[13rem] w-[7rem] h-[8rem] sm:w-[19rem] rounded-md sm:h-[10rem] md:h-[13rem] object-cover"
                        src={items.url}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start h-full text-[.6rem] sm:text-xs md:text-xs">
                      <div className="h-full flex-col flex justify-between items-start">
                        <p className="text-xs sm:text-base">{items.place}</p>
                        <h1 className="text-base sm:text-xl">{items.title}</h1>
                        <span className=" w-[4rem] block h-[1px] my-4 rounded-md bg-gray-400"></span>
                        <p>{items.rooms}</p>
                        <p>{items.facilities}</p>
                      </div>
                      <div className="flex justify-start items-center">
                        <span className="">
                          <FaStar className="text-cyan-500 text-md " />
                        </span>
                        <h1 className="px-1">{items.reviewsRate}</h1>
                        <p>({items.totalReviews} reviews)</p>
                      </div>
                    </div>
                  </div>
                  {/* last div starts */}
                  <div className="flex flex-col h-40 justify-between items-start text-[.6rem] md:text-xs lg:text-base ">
                    <div className="self-end">
                      <FaHeart className="cursor-pointer hover:text-red-500" />
                    </div>
                    <div>
                      <div>
                        <p>
                          $<span>{items.totalPrice}</span> total
                        </p>
                      </div>
                      <div>
                        <h1>
                          <span className="font-bold">
                            {items.perNightPrice}
                          </span>
                          /night
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-gray-200"></div>
              </>
            );
          })}
          <div className=" w-[95%] m-3 flex justify-center items-center">
            <div
              className="inline-flex items-center justify-center text-xl rounded-md px-14 py-1.5 duration-200 ease-in-out cursor-pointer bg-cyan-400 hover:bg-cyan-600 text-white border-gray-300"
              >
              Next
            </div>
          </div>
        </div>
        <hr />
      </section>
    </section>
  );
};

export default CategoryFilter;
