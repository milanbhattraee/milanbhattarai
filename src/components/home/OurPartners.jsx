import React from "react";
const partnersItems = [
  {
    title: "City Hotel and Bar",
    location: "Buddhashanti - 2 Budhabare Jhapa",
    img: "https://images.unsplash.com/photo-1524379559281-99e8d5af4725?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hotel",
  },
  {
    title: "City Hotel and Bar",
    location: "Buddhashanti - 2 Budhabare Jhapa",
    img: "https://images.unsplash.com/photo-1524379559281-99e8d5af4725?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hotel",
  },
  {
    title: "City Hotel and Bar",
    location: "Buddhashanti - 2 Budhabare Jhapa",
    img: "https://images.unsplash.com/photo-1524379559281-99e8d5af4725?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hotel",
  },
  {
    title: "City Hotel and Bar",
    location: "Buddhashanti - 2 Budhabare Jhapa",
    img: "https://images.unsplash.com/photo-1524379559281-99e8d5af4725?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hotel",
  },
  {
    title: "City Hotel and Bar",
    location: "Buddhashanti - 2 Budhabare Jhapa",
    img: "https://images.unsplash.com/photo-1524379559281-99e8d5af4725?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hotel",
  },
  {
    title: "City Hotel and Bar",
    location: "Buddhashanti - 2 Budhabare Jhapa",
    img: "https://images.unsplash.com/photo-1524379559281-99e8d5af4725?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hotel",
  },
];
const OurPartners = () => {
  return (
    <main className="w-full flex  flex-col items-center bg-gray-100 py-2  justify-center">
      <section className="w-[80%]  flex flex-col py-2 ">
        <h1 className="text-xl font-bold py-2">Our Partners</h1>
        <h6 className="text-sm font-semibold py-2">
          Our partners who are ready to serve you
        </h6>
      </section>
      <section className="grid lg:w-[80%] w-[95%] md:grid-cols-2 place-items-center grid-cols-1 gap-x-20 gap-y-2">
        {partnersItems.map((item, index) => {
          return (
            <div
              key={index}
              className=" flex h-26 w-full justify-between items-center bg-white my-3 p-4 rounded-md"
            >
              <section className="flex gap-5 ">
                <div>
                  <img className="w-16 h-16 rounded-md" src={item.img} alt="" />
                </div>
                <div className="">
                  <h6 className="text-md font-semibold">{item.title}</h6>
                  <p className=" text-sm md:text-md">{item.location}</p>
                </div>
              </section>
              <div>
                <h3 className="font-bold px-5">{item.category}</h3>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default OurPartners;
