import { useState } from "react";
import { ChevronLeft, Quote } from "lucide-react";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: (
        <>
          Understated, but unforgettable. It
          <br />
          feels like it was made for me
        </>
      ),
      name: "Random Woman",
      location: "NY, USA",
      avatar: "/images/testimonial1.jpg",
    },
    {
      quote: "Exceptional quality and attention to detail. Worth every penny",
      name: "John Smith",
      location: "London, UK",
      avatar: "/images/testimonial2.jpg",
    },
    {
      quote: "The perfect balance of style and comfort. I wear it everywhere",
      name: "Anna Lee",
      location: "Tokyo, Japan",
      avatar: "/images/testimonial3.jpg",
    },
  ];

  // const nextTestimonial = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const prevTestimonial = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
  //   );
  // };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextTestimonial();
  //     }, 10000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className=" text-base-content/70 font-medium w-full py-18 sm:pb-35 px-8 sm:mt-20 relative border-b border-gray-700">
      <div className="sm:mx-auto">
        <h2 className="sm:text-lg text-sm font-light tracking-widest uppercase sm:mb-16">
          Our Customers
        </h2>

        <div className="flex items-center sm:mt-20">
          <div className="w-3/4">
            <div className="relative flex">
              <Quote className="sm:size-12 font-serif rotate-180 mr-2 sm:mr-5 text-white" />
              <p className="sm:text-5xl font-light leading-tight text-base-content/95">
                {testimonials[currentIndex].quote}
              </p>
            </div>

            <div className="sm:mt-20 mt-6 ml-5 sm:ml-15">
              <p className="sm:text-2xl font-light text-base-content/75 text-sm">
                {testimonials[currentIndex].name}
              </p>
              <p className="sm:text-base-content/40 text-xs sm:text-sm font-light sm:font-medium sm:mt-2">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          <div className="relative w-1/4 flex flex-col items-end justify-center space-y-4">
            {/* Row for the button and first avatar */}
            <div className="flex items-center space-x-3">
              <button
                className="flex items-center justify-center hover:bg-gray-900 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="80 mt-12 sm:mt-0" />
              </button>

              {testimonials[0] && (
                <div
                  className={`rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                    currentIndex === 0 ? "sm:w-32 sm:h-32 w-15 h-15 mt-10 sm:mt-0" : "w-12 h-12 opacity-70"
                  }`}
                  onClick={() => setCurrentIndex(0)}
                >
                  <img
                    src={testimonials[0].avatar}
                    alt={`${testimonials[0].name} avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Remaining avatars */}
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={index + 1}
                className={`sm:w-12 sm:h-12 w-10 h-10 rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                  currentIndex === index + 1 ? "" : "opacity-70"
                }`}
                onClick={() => setCurrentIndex(index + 1)}
              >
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
