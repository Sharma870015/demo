import React from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", review: "Amazing service! Helped grow my business by 200% in just 6 months." },
    { name: "Jane Smith", review: "Highly professional and responsive team and they deliver on time. Recommended!" },
    { name: "Alice Johnson", review: "Outstanding experience! Will definitely work with them again." },
    { name: "Robert Brown", review: "Their support is excellent, and they deliver on time.Recommended!" },
    { name: "Emily Davis", review: "Fantastic! They went above and beyond and they deliver on time." },
    { name: "Michael Johnson", review: "Impressed with their creativity and dedication.Amazing service!" }
  ];

  return (
    <section className="testimonials">
      <h2 className="FeedHead">What Our Clients Say</h2>
      
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav={false} // Disable next/previous arrows
        dots={true} // Enable dot controls
        autoplay={true}
        autoplayTimeout={5000} // Set delay between transitions
        autoplayHoverPause={true} // Pause autoplay on hover
        items={4} // Display four testimonials at a time
        animateOut="fadeOut" // Apply fade-out effect on slide change
        animateIn="fadeIn" // Apply fade-in effect on slide change
        responsive={{
          0: {
            items: 1 // Show 1 testimonial on small screens
          },
          600: {
            items: 2 // Show 2 testimonials on medium screens
          },
          1000: {
            items: 4 // Show 4 testimonials on large screens
          }
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>{testimonial.review}</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default Testimonials;
