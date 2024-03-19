import React from 'react'
const ticketHead = ['Name','Price(Rs)','Starting From','Place Near Me','Date'];
const ticketBody = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Miller",
    price: 2000,
    startingFrom: "Budhabare",
    nearPlace: "Happy Land",
    date : "2/12/2024"
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Miller",
    price: 2000,
    startingFrom: "Budhabare",
    nearPlace: "Happy Land",
    date : "2/12/2024"
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Miller",
    price: 2000,
    startingFrom: "Budhabare",
    nearPlace: "Happy Land",
    date : "2/12/2024"
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Miller",
    price: 2000,
    startingFrom: "Budhabare",
    nearPlace: "Happy Land",
    date : "2/12/2024"
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Miller",
    price: 2000,
    startingFrom: "Budhabare",
    nearPlace: "Happy Land",
    date : "2/12/2024"
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Miller",
    price: 2000,
    startingFrom: "Budhabare",
    nearPlace: "Happy Land",
    date : "2/12/2024"
  },
];
const Ticket = () => {
  return (
    <main className="w-full flex justify-center items-center">
      <section className="w-11/12 bg-white flex py-8 shrink-0 md:px-12 border-2 border-gray-300   items-center overflow-hidden overflow-x-auto">
        <table className="mx-auto text-center shrink-0">
          <thead>
            <tr>
              {ticketHead.map((heading, index) =>
                index < 1 ? (
                  <th colSpan={2} className="py-5" key={index}>
                    {heading}
                  </th>
                ) : (
                  <th className="py-5" key={index}>
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {ticketBody.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-200 cursor-pointer border-b border-gray-300 duration-200 ease-in-out bg-white px-9`}
              >
                <td className="flex items-center py-3 px-4 justify-center gap-5">
                  <img
                    className="rounded-full w-10 h-10 shrink-0"
                    src={item.img}
                    alt=""
                  />
                </td>
                <td className="">{item.name}</td>
                <td className="py-3 px-12"><span className='bg-cyan-100 text-cyan-600 rounded-lg px-2'>{item.price}</span></td>
                <td className="py-3 px-12">{item.startingFrom}</td>
                <td className="py-3 px-12">{item.nearPlace}</td>
                <td className="py-3 px-12">{item.date}</td>
                <td className="py-3 px-12">
                  <button className="py-2 px-14 bg-cyan-500 border-none rounded-md text-white hover:bg-cyan-700 duration-200 ease-in-out">
                    More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Ticket