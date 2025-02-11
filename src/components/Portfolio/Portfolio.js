import React, { useEffect } from 'react';
import { Front } from "../styledComponent";
import { FaArrowDown } from "react-icons/fa6";
import './portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css';
import Loud from '../../assets/logo/loudstier.jpg';
import Geeks from '../../assets/logo/geeks.svg';
// import Focify from '../../assets/logo/focify.png';
import CardSection from "./CardSection";
import Sustaine from '../../assets/logo/sustaine.jpg';
import 'aos/dist/aos.css';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Mantra from '../../assets/logo/MantraLabs.jpg';
import Trgt from '../../assets/images/Frame 1000004005.jpg';
import Nexa from '../../assets/logo/nexa.jpg';
import MCDMFlogo from '../../assets/images/Mcdmf1 (1).jpg';
import { projectData } from "./projectData"; // Adjust the path accordingly
const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS animations
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  const services = [
    {
      title: 'Web Development',
      description: ['Interactive Dynamic Design', 'E-Commerce website', 'AI Enhances Web Development'],
      imageUrl: require('../../assets/images/web1.png'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#015177',
      textColor: 'text-white',
    },
    {
      title: 'CMS Development',
      description: ['Online Academy', 'Content Management System', 'Customer Relationship Management'],
      imageUrl: require('../../assets/images/realstateimg1.png'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#FFFF',
      textColor: 'text-white',
    },
    {
      title: 'Mobile App Development',
      description: ['Android Apps', ' iOS Apps', 'Progressive Web Apps'],
      imageUrl: require('../../assets/images/mapp1.png'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#015177',
      textColor: 'text-white',
    },
    {
      title: 'Digital Marketing',
      description: ['SEO (Search Engine Optimization)', 'SMM (Social Media Marketing)', 'Branding'],
      imageUrl: require('../../assets/images/social1.jpg'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#FFFF',
      textColor: 'text-black',
    },
    {
      title: 'UI/UX',
      description: ['Mobile App & Web UI/UX Design', 'Figma and related tools', 'UX Enhancements'],
      imageUrl: require('../../assets/images/uiux1.png'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#015177',
      textColor: 'text-white',
    },
    {
      title: 'Graphic Designing',
      description: ['Logo Designing', 'Social Media Post Designing', 'Web Banners, Visual Designing'],
      imageUrl: require('../../assets/images/grphic.png'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#FFFF',
      textColor: 'text-black',
    },
  ];


  const Box = ({ title, description, icone, bgColor }) => (
    <div className="box text-white-500" style={{ backgroundColor: bgColor }}>
      <div className="icon-container">
        <img src={icone} alt={title} className="icone" />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
  return (
    <>
      <Front>
        <div className="contactheading">
          <h1>Portfolio</h1>
          <p>
            Welcome to B2Y, where innovation meets connectivity. We are thrilled
            to connect with you and explore how our expertise in IT solutions
            can empower your business.
          </p>
          <div className="contactbuttons">
            <button className="arrowbutton" onClick={handleButtonClick}>
              Portfolio
              <span className="arrowicon">
                <FaArrowDown />
              </span>
            </button>
          </div>
        </div>
      </Front>
      <div className="ourservices_section">
        <div className="ourservice container mx-auto px-4 py-6" data-aos="fade-up">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
            <b style={{ color: '#2e3192' }}>Our</b>
            <span style={{ color: '#20d3d3', marginLeft: '0.5rem' }}><b>Clients</b></span>
          </h1>
          <p className="text-xl sm:text-lg leading-relaxed text-center text-gray-600">
            A true partnership is a two-way street — ideas and information flow openly and regularly, based on a foundation of mutual trust and respect for one another’s expertise — and our clients embrace this philosophy.
            <br />
            The best and most productive relationships are synergistic and goal-oriented, and a long-term relationship has the value add of deep-rooted industry and company knowledge and relationships.
            <br />
          </p>
        </div>
      </div>
      <div className="box-container hidden sm:block">
        <Swiper
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Box className="hidden sm:block"
              title="Just Click Service"
              description="Food & Groceries Delivery Services"
              icone={Loud}
              bgColor=""
            />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide-Geeks'>
            <Box
              title="New Service"
              description="A new exciting service"
              icone={Geeks}
              bgColor=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              title="MCDMF"
              description="Expert Astrologist Website"
              icone={Sustaine}
              bgColor=""
            />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide-Nexa'>
            <Box
              title="Astrology Offline"
              description="Expert Astrologist Website"
              icone={Nexa}
              bgColor=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-trgt">
            <Box
              title="New Service"
              description="A new exciting service"
              icone={Trgt}
              bgColor=""
            >
            </Box>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-trgt">
            <Box
              title="New Service"
              description="A new exciting service"
              icone={MCDMFlogo}
              bgColor=""
            >
            </Box>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-trgt">
            <Box
              title="Yadhumadi"
              description="Farmer & Nature Protection NGO"
              icone={Mantra}
              bgColor="box-bg-light-green" // Add custom class for background color if needed
            />
          </SwiperSlide>

        </Swiper>
      </div>
      <div className="container mx-auto p-4 lg:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6" data-aos="fade-up">
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={MCDMFlogo} alt="Client 1" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Mantra} alt="Client 2" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Loud} alt="Client 4" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Sustaine} alt="Client 5" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Nexa} alt="Client 6" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Trgt} alt="Client 7" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Geeks} alt="Client 8" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
      <div className="storyContainer">
        <h1
          className="text-4xl sm:text-4xl lg:text-5xl font-bold text-center mb-6"
          data-aos="fade-up"
        >
          <span style={{ color: '#2e3192' }}>Our </span>
          <span style={{ color: '#20d3d3' }}>Work</span>
        </h1>
        <p className="text-xl sm:text-lg leading-relaxed text-center text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="100">
          Our team is currently working on a mobile app redesign aimed at improving user experience. We're using React Native for the frontend and Node.js for the backend. The project is progressing well, with initial wireframes completed and API integration underway.
        </p>
        <div>
          {projectData.map((project, index) => (
            <CardSection
              key={index}
              imageRight={project.imageRight}
              images={project.images} // ✅ Correctly passing images
              imageSrc={project.images[0]} // ✅ Ensure single image is passed if Swiper is disabled
              title={project.title}
              technologies={project.technologies}
              descriptions={project.descriptions}
              multiImage={project.images.length > 1}
              useSwiper={project.images.length > 1} // ✅ Enable Swiper only if there are multiple images
            />
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-6">
          {services.map((service, index) => {
            const isWhiteBg = service.bgColor === '#FFFF'; // Check if the background color is white
            const textColorClass = isWhiteBg ? 'text-black' : 'text-white'; // Set text color to black if background is white

            return (
              <div
                key={index}
                className={`relative p-4 sm:p-6 shadow-lg rounded-xl overflow-hidden ${textColorClass}`}
                style={{ backgroundColor: service.bgColor }}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${service.bgimage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                  }}
                ></div>
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    backgroundColor: service.bgColor,
                    opacity: 0.8,
                  }}
                ></div>
                <div className="relative z-20 mb-4">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-10 sm:w-[13%] border border-gray-400 object-cover"

                  />
                </div>
                <h3 className="relative z-20 text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                  {service.title}
                </h3>
                <ul className="relative z-20 space-y-2 sm:space-y-4">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2 sm:mr-4 flex justify-center items-center w-5 h-5 sm:w-6 sm:h-6">
                        <ChevronRightIcon className="w-full h-full" />
                      </span>
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>

    </>
  );
};

export default Portfolio;
