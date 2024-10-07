import React, { useState } from "react";
import "./Hero.css";
import photo1 from "./App.jpg";
import photo2 from "./Web Development.jpg";
import Video from "./HomePage.mp4"; // Update this path

const Hero = () => {
  const slides = [
    {
      video: Video, // Use your uploaded video
      heading: "Digital Solutions",
      description:
        "At DigiAppify, we specialize in delivering innovative software, website, and app development services, expertly tailored to your unique business needs and goals.",
      isVideo: true, // Flag to indicate it's a video
    },
    {
      image: photo1, // Image for the second slide
      heading: "App Development",
      description:
        "At DigiAppify, we craft high-quality mobile apps tailored to your business, delivering seamless experiences and scalable solutions for iOS, Android, and cross-platform platforms.",
    },
    {
      image: photo2, // Image for the third slide
      heading: "Web Development",
      description: "We build responsive, high-performance websites and custom web apps that drive growth, improve engagement, and enhance overall user experiences effectively.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className="hero-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Content */}
      <div className="slide">
        {slides[currentIndex].isVideo ? (
          <video className="video" autoPlay muted loop>
            <source src={slides[currentIndex].video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={slides[currentIndex].image} alt="slide" className="image" />
        )}
        <div className="text-content">
          <h2>{slides[currentIndex].heading}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        className={`arrow left-arrow ${isHovered ? "visible" : ""}`}
        onClick={goToPrevious}
      >
        &#10094;
      </div>

      {/* Right Arrow */}
      <div
        className={`arrow right-arrow ${isHovered ? "visible" : ""}`}
        onClick={goToNext}
      >
        &#10095;
      </div>
    </div>
  );
};

export default Hero;
