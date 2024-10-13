import React from 'react';
import './IPadAppDevelopment.css';

const IPadAppDevelopment = () => {
  const steps = [
    { title: 'Step 1', description: 'Design an intuitive and user-friendly interface for iPad devices.' },
    { title: 'Step 2', description: 'Develop responsive and dynamic features optimized for the iPad.' },
    { title: 'Step 3', description: 'Test across various iPad devices for consistent performance.' },
    { title: 'Step 4', description: 'Deploy the application and ensure it meets Apple’s guidelines.' },
    { title: 'Step 5', description: 'Continuously update and maintain the application for future iPadOS versions.' },
    { title: 'Step 6', description: 'Optimize the app for better performance and scalability.' },
    { title: 'Step 7', description: 'Enhance security measures and ensure data protection compliance.' },
    { title: 'Step 8', description: 'Integrate user feedback and provide regular updates.' },
  ];

  const benefits = [
    { title: 'Creative UI/UX', description: 'Custom, user-centric designs tailored specifically for iPad users.' },
    { title: 'Optimized Performance', description: 'Smooth and seamless performance on all iPad models.' },
    { title: 'Scalable Solutions', description: 'Apps that are built to grow with your business.' },
    { title: 'Dedicated Support', description: 'Comprehensive support and maintenance for your app.' },
    { title: 'Future-Proof Technology', description: 'Leverage cutting-edge technologies that ensure your app is built for the future.' },
    { title: 'Security & Compliance', description: 'Top-notch security features to protect your data and ensure compliance with industry standards.' },
  ];

  const technologies = [
    'Swift',
    'Objective-C',
    'Xcode',
    'iOS SDK',
    'Firebase',
    'CoreData',
    'In-app Purchases',
    'Augmented Reality (ARKit)',
  ];

  const caseStudies = [
    { title: 'Fitness Pro App', description: 'Helped a fitness company create an intuitive app for iPad to streamline virtual training sessions.' },
    { title: 'eCommerce Platform', description: 'Developed a scalable eCommerce app that enhanced the online shopping experience for iPad users.' },
    { title: 'Educational App', description: 'Built an interactive e-learning platform tailored for iPad, optimizing user engagement with touch gestures.' },
  ];

  const testimonials = [
    { name: 'John Doe', feedback: 'The iPad app developed by this team was game-changing for our business! Highly recommend their services.' },
    { name: 'Jane Smith', feedback: 'Excellent design and execution. The app works flawlessly on all iPad models. Great support!' },
  ];

  return (
    <section className="ipad-app-development">
      <div className="content-wrapper">
        <h1 className="title">iPad App Development</h1>
        <p className="intro-text">Innovative, creative, and fully responsive iPad App solutions.</p>

        {/* Procedure Section */}
        <div className="procedure-section">
          <h2 className="section-title">Development Process</h2>
          <div className="procedure-cards">
            {steps.map((step, index) => (
              <div key={index} className="procedure-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="step-number">{step.title}</div>
                  </div>
                  <div className="card-back">
                    <div className="step-description">{step.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="benefit-cards">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="technologies-section">
          <h2 className="section-title">Technologies We Use</h2>
          <ul className="technologies-list">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Case Studies Section */}
        <div className="case-studies-section">
          <h2 className="section-title">Case Studies</h2>
          <div className="case-studies-cards">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="case-study-card">
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h2 className="section-title">Testimonials</h2>
          <div className="testimonials-cards">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p>"{testimonial.feedback}"</p>
                <h4>- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPadAppDevelopment;
