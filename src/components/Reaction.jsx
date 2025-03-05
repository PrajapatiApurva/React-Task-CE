import { useState } from "react";
import user from "../assets/images/user.png";
import { motion } from "framer-motion";
import { User, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "/images/user1.jpg",
    text:
      "1.Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 4,
  },
  {
    id: 2,
    image: "/images/user2.jpg",
    text:
      "2.Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 4,
  },
  {
    id: 3,
    image: "/images/user3.jpg",
    text:
      "3.Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 4,
  },
  {
    id: 4,
    image: "/images/user4.jpg",
    text: "4.Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5,
  },
  {
    id: 5,
    image: "/images/user5.jpg",
    text: "5.Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5,
  },
  {
    id: 6,
    image: "/images/user6.jpg",
    text: "Transform your workflow with smart contract automation.",
    rating: 5,
  },
];

function Reaction() {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="w-full flex items-center justify-center py-6">
      <div className="relative w-full overflow-hidden">
        <h2 className="text-[30px] text-center font-bold mb-6">
          What our users say
        </h2>
        <button
          onClick={prevSlide}
          className="absolute z-10 left-24 top-1/2 transform -translate-y-1/2 bg-Start text-white p-3 rounded-full hover:bg-blue-600"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type:"tween", stiffness: 100 }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex min-w-full h-[239px] w-[350px] justify-center gap-6 mb-12"
            >
              {testimonials
                .slice(
                  slideIndex * itemsPerSlide,
                  (slideIndex + 1) * itemsPerSlide
                )
                .map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white p-6 rounded-3xl shadow-lg w-96 flex flex-col items-start"
                  >
                    <User id="videoSection" className="w-6 h-6 ml-10 text-gray-500 w-[42px] h-[40px] rounded-full object-fill" />
                    <p className="text-gray-700 text-center text-[15px] mt-6 ml-6">
                      {testimonial.text}
                    </p>
                    <div className="flex justify-center w-[100%] mt-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-yellow-400"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </motion.div>
        <button
          onClick={nextSlide}
          className="absolute z-10 right-24 top-1/2 transform -translate-y-1/2 bg-Start text-white p-3 rounded-full hover:bg-blue-600"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Reaction;
