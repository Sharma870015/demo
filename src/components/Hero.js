import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import photo1 from "./App.jpg";
import photo2 from "./Web Development.jpg";
import photo3 from './Android.jpg';
import photo4 from './IOS App Development.jpg';
import photo5 from './iPad App Development 1980 X 850.jpg';
import photo6 from './window solutions.jpg';
import photo7 from './Cyber Security.jpg';
import photo8 from './wordpress.avif';
import photo9 from './Dynamic.webp';
import photo10 from './CustomWeb.jpeg';
import photo11 from './E-Commerce.webp';
import photo12 from './SEOChng.png';
import photo13 from './Email.jpg';
import photo14 from './PPC services.jpeg';
import photo15 from './SocialMedia.jpg';
import photo16 from './eCommerce.jpg';

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const slides = [
    {
      image: photo7,
      heading: "Grow with Digital Marketing",
      description: "Unlock your brand’s potential with tailored digital marketing strategies designed to boost growth and engagement.",
      buttonText: "Learn More",
      link: "/digital-marketing",
    },
    {
      image: photo12,
      heading: "SEO Services",
      description: "Boost your online visibility and drive organic traffic with tailored SEO strategies that enhance search engine rankings.",
      buttonText: "See SEO Packages",
      link: "/SEO-Services",
    },
    {
      image: photo13,
      heading: "Email Marketing",
      description: "Engage your audience and drive conversions with targeted email campaigns that deliver personalized content and valuable insights.",
      buttonText: "Get Started",
      link: "/EmailMarketingService",
    },
    {
      image: photo14,
      heading: "PPC Services",
      description: "Maximize your online visibility and drive instant traffic with our targeted Pay-Per-Click campaigns tailored to your business goals.",
      buttonText: "Explore PPC",
      link: "/PPC-Services",
    },
    {
      image: photo15,
      heading: "Social Media Marketing",
      description: "Engage your audience and boost brand awareness through strategic social media campaigns designed to drive traffic and conversions.",
      buttonText: "Boost Your Brand",
      link: "/socialMedia-Marketing",
    },
    {
      image: photo16,
      heading: "E-commerce Marketing",
      description: "Optimize your online store’s visibility and sales with targeted marketing strategies, including SEO, email campaigns, and social media outreach.",
      buttonText: "Grow Sales",
      link: "/Ecommerce-marketing",
    },
    {
      image: photo1,
      heading: "Mobile App Development",
      description: "Create innovative mobile apps tailored to your business needs, offering seamless performance and exceptional user experiences across all platforms.",
      buttonText: "Build Your App",
      link: "/mobileApp-development",
    },
    {
      image: photo3,
      heading: "Android App Development",
      description: "Develop high-performance Android apps that deliver seamless functionality, engaging user experiences, and are tailored to meet your business goals.",
      buttonText: "Get Android App",
      link: "/android",
    },
    {
      image: photo4,
      heading: "iOS App Development",
      description: "Build stunning iOS apps that combine elegant design with powerful functionality, delivering exceptional user experiences and seamless performance on all Apple devices.",
      buttonText: "Create iOS App",
      link: "/ios-development",
    },
    {
      image: photo5,
      heading: "iPad App Development",
      description: "Design and develop feature-rich iPad apps that leverage the device's capabilities, providing intuitive interfaces and engaging experiences for users on the go.",
      buttonText: "Develop iPad App",
      link: "/iPad-development",
    },
    {
      image: photo6,
      heading: "Apple Watch App Development",
      description: "Create innovative Apple Watch apps that deliver essential functionality and notifications right to the wrist, enhancing user experiences with seamless interactions and tailored features.",
      buttonText: "Apple Watch App",
      link: "/AppleWatch-App",
    },
    {
      image: photo2,
      heading: "Web Development",
      description: "We build responsive, high-performance websites and custom web apps that drive growth, improve engagement, and enhance overall user experiences effectively.",
      buttonText: "View Web Services",
      link: "/web-development",
    },
    {
      image: photo8,
      heading: "WordPress Web Development",
      description: "Transform your ideas into stunning websites with our expert WordPress development, designed for performance and user engagement.",
      buttonText: "WordPress Solutions",
      link: "/wordpress-development",
    },
    {
      image: photo9,
      heading: "Dynamic Website Development",
      description: "Create interactive and engaging websites that adapt to user needs and deliver real-time content for an enhanced online experience.",
      buttonText: "Dynamic Websites",
      link: "/Dynamic_WebDev",
    },
    {
      image: photo10,
      heading: "Custom Web App Development",
      description: "Design and build tailored web applications to meet your specific business requirements, ensuring optimal performance and user experience.",
      buttonText: "Custom Web Apps",
      link: "/custom-webdev",
    },
    {
      image: photo11,
      heading: "E-Commerce Web App Development",
      description: "Create robust and scalable e-commerce platforms that enhance online shopping experiences and drive sales growth.",
      buttonText: "Start Your Store",
      link: "/E-commerce_WebApp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);

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

  useEffect(() => {
    setShowText(false);
    const timer = setTimeout(() => {
      setShowText(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="hero-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="slide">
        <Link to={slides[currentIndex].link}>
          <img src={slides[currentIndex].image} alt="slide" className="image" />
        </Link>
        <div className={`text-content ${showText ? 'pop-up' : ''}`}>
          <h2>{slides[currentIndex].heading}</h2>
          <p>{slides[currentIndex].description}</p>
          {/* Wrap the button in a Link component */}
          <Link to={slides[currentIndex].link}>
            <button className={`btn-slide-${currentIndex}`}>
              {slides[currentIndex].buttonText}
            </button>
          </Link>
        </div>
      </div>

      <div
        className={`arrow left-arrow ${isHovered ? "visible" : ""}`}
        onClick={goToPrevious}
      >
        &#10094;
      </div>

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
