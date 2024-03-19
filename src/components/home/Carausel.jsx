import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Carausel() {
  const slides = [
    { url: "images/carausel/slide1.jpg" },
    { url: "images/carausel/slide2.jpg" },
    { url: "images/carausel/slide3.jpg" },
    { url: "images/carausel/slide4.jpg" },
    { url: "images/carausel/slide5.jpg" },
  ];
  const imageContent = [
    {
      title: "Pokhara",
      slogan:
        "'Discover serenity in the heart of nature - Visit Pokhara, where every moment is a picturesque escape.'",
    },
    {
      title: "Mustang",
      slogan:
        "'Embark on an ancient journey to Mustang, where timeless beauty meets cultural marvels, creating an unforgettable adventure.'",
    },
    {
      title: "Swayambhunath",
      slogan:
        "'Elevate your spirit at Swayambhunath, the sacred stupa where spirituality and history converge in a blissful harmony.'",
    },
    {
      title: "Pashupati",
      slogan:
        "'Experience the divine aura at Pashupatinath, where sacred traditions and spiritual resonance converge in the heart of Nepal'",
    },
    {
      title: "Chitwan",
      slogan:
        "'Explore the wild wonders of Chitwan, where nature's symphony unfolds in the heart of the jungle, offering an unforgettable safari adventure'",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("Pokhara");
  const [currentSlogan, setCurrentSlogan] = useState("Pokhara");
  

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentTitle(imageContent[newIndex].title);
    setCurrentSlogan(imageContent[newIndex].slogan);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {

    // Auto-slide every 3 seconds
    setCurrentTitle(imageContent[currentIndex].title);
    setCurrentSlogan(imageContent[currentIndex].slogan);
    const autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 4000);

    // Clear the interval when component is unmounted or currentIndex changes
    return () => clearInterval(autoSlideInterval);
  }, [currentIndex]);

  return (
    <div className="max-w-[1200px] h-[300px] md:h-[650px] w-full m-auto py-2 px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className='relative w-full h-full rounded-md bg-center bg-cover duration-700 overflow-hidden'
      >
        <div className="absolute w-full flex h-16 md:h-20  flex-col justify-center items-center bottom-0 py-7 bg-black bg-opacity-60  text-white ">
        <h1 className="md:text-2xl  text-md font-extrabold opacity-100">{currentTitle}</h1>
        <p className="px-4  md:text-sm text-center text-[0.6rem]">{currentSlogan}</p>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? "text-blue-500" : "text-gray-300"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carausel;
