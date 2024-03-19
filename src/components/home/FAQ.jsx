import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const FaqButtons = ["General", "Companies", "Members", "Society"];
const FaqItem = [
  [
    {
      title: "How is the price calculated?",
      description:
        "When we share a travel deal, we usually post prices per person for flights and prices per person.",
    },
    {
      title: "How do I book the trip?",
      description:
        "For flights the price includes taxes and common fees but make sure to check the details.",
    },
    {
      title: "How to get from the airport to your accommodation?",
      description:
        "We will do our best to provide tips for transfer options but you must organize it on your own.  ",
    },
    {
      title: "How to get from the airport to your accommodation?",
      description:
        "We will do our best to provide tips for transfer options but you must organize it on your own.  ",
    },
  ],
  [
    {
      title: "Excepteur esse sit sit eiusmod cillum nostr ?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
    {
      title: "Excepteur esse sit ?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
    {
      title: "Excepteur esse sit sit eiusmod cillum nostr ?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
    {
      title: "Excepteur esse sit sit eiusmod cillum nostr ?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
  ],
  [
    {
      title: "How do I sign up for a member account ?",
      description:
        "Simply navigate to the 'Sign Up' page, fill out the registration form, and verify your account via email",
    },
    {
      title: "What are the benefits of becoming a member?",
      description:
        "Enjoy exclusive perks, discounts on flights and hotels, personalized recommendations, and member-only promotions.",
    },
    {
      title: "How can I update my membership information?",
      description:
        "Log in to your account, navigate to 'My Account' or 'Profile,' and edit your details.",
    },
    {
      title: "How do I cancel my membership?",
      description:
        "Contact customer support for assistance with the cancellation process.",
    },
  ],
  [
    {
      title: "Excepteur esse sit sit eiusmod cillum nostr ?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
    {
      title: "Excepteur esse sit ?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
    {
      title: "Excepteur esse sit sit eiusmod cillum nostr ?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
    {
      title: "Excepteur esse sit sit eiusmod cillum nostr ?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
  ],
];
const FAQ = () => {
  const [active, setActive] = useState(0);
  const [btnIndex, setBtnIndex] = useState(0);
  const handleButton = (index) =>{
    setBtnIndex(index)
    setActive(0);
  }
  const handleFaqClick = (index) => {
    setActive(index);
  };
  return (
    <main className="w-full border-b border-gray-200 flex md:flex-row flex-col bg-white py-10 items-center relative">
      <h1
        className="absolute top-3 w-full text-center text-xl md:text-2xl font-bold text-indigo-600 pt-7"
    
      >
        Frequently Asked Question
      </h1>
      <section className="w-[40%] flex flex-col mt-14 md:mt-24 justify-center items-center">
        {FaqButtons.map((item, index) => (
          <div
            key={index}
            className={`w-52 text-center my-2 inline-block py-2 border mb-4  rounded-3xl cursor-pointer hover:bg-cyan-400 hover:text-white duration-200 ease-linear ${
              index === btnIndex
                ? "bg-cyan-400 text-white"
                : "border-gray-400 text-black"
            }`}
            onClick={() => handleButton(index)}
          >
            {item}
          </div>
        ))}
      </section>
      <section className="md:w-[50%]  w-full md:text-start text-center flex flex-col  leading-6 pt-8 px-4 md:pt-24 lg:mt- justify-evenly items-center">
        {FaqItem[btnIndex].map((item, index) => {
          return (
            <div
              key={index}
              className=" w-full  items-center bg-white cursor-pointer"
            >
              <div
                className="font-bold flex flex-col py-3 relative"
                onClick={() => handleFaqClick(index)}
                
              >
              
                <h1
                  className={`hover:text-cyan-600 duration-200 ease-linear px-4 ${
                    active === index ? "text-cyan-600" : "text-black"
                  }`}
                >
                  {item.title}
                </h1>
                {active===index ?<FaChevronDown className="absolute right-0 self-center "/>:<FaChevronRight className="absolute right-0 self-center "/>}
              </div>
              <div
                className={`text-sm ${active === index ? "block" : "hidden"} px-4 `}
                onClick={() => handleFaqClick(index)}
              >
                <p>{item.description}</p>
              </div>
              <hr className="my-3" />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default FAQ;
