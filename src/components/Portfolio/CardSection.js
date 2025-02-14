
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CardSection = ({
  title,
  technologies,
  descriptions,
  imageRight = true,
  useSwiper = false,
  images = [],
  multiImage = false, // New prop for multi-image layout
  }) => {
  return (
    // <div className={`cardSection flex flex-col ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'} bg-gray-100 p-6 rounded-lg shadow-md`} data-aos="fade-right" data-aos-delay="100">
    <div
    className={`cardSection flex flex-col md:!flex-row ${imageRight ? 'md:!flex-row-reverse' : 'md:!flex-row'} bg-gray-100 p-6 rounded-lg shadow-md`}
    data-aos="fade-right"
    data-aos-delay="100"
  >
      {/* Image Section */}
      <div className="port_img w-full md:w-1/2 flex justify-center">
      {multiImage ? (
  <div className="w-full h-auto flex flex-col sm:flex-row gap-0">
    <img
      src={images[0]}
      alt={title}
      className="transition-transform duration-300 ease-in-out hover:translate-y-5 w-full sm:w-1/2 h-[8rem] sm:h-[16rem] rounded-lg object-contain"
    />
    <img
      src={images[1]}
      alt={title}
      className="transition-transform duration-300 ease-in-out hover:translate-y-5 w-full sm:w-1/2 h-[8rem] sm:h-[16rem] rounded-lg object-contain"
    />
  </div>
) 
 : useSwiper ? (
          <Swiper 
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            {images.map((img, index) => (
              <SwiperSlide 
              className="p-2"
              key={index}>
                <img
                  src={img}
                  alt={title}
                  className="transition-transform duration-300 ease-in-out hover:translate-y-5 w-full h-full rounded-lg object-cover mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            src={images[0]}
            alt={title}
            className="storyimg transition-transform duration-300 ease-in-out hover:translate-y-5 w-full h-full rounded-lg object-cover mx-auto border-2 border-gray-300"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="portText w-full md:w-1/2 p-4">
        <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">{title}</h1>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
              {tech}
            </span>
          ))}
        </div>
        {descriptions.map((desc, index) => (
          <p key={index} className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
            <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
              <GoArrowRight />
            </span>
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
