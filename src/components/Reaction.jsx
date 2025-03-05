import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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

  return (
    <div className="relative w-full flex flex-col items-center py-12">
      <h2 className="text-2xl font-bold text-black mb-10">What our users say</h2>

      <div className="relative w-full max-w-6xl flex items-center">
        {/* Left Arrow */}
        <button className="swiper-button-prev-custom absolute z-10 left-[-60px] bg-[#1e3a5f] text-white p-4 rounded-full shadow-md hover:bg-[#112233] transition">
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={{ nextEl: ".swiper-button-next-custom", prevEl: ".swiper-button-prev-custom" }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:scale-105">
                {/* User Icon with Glow */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-gray-500" />
                  </div>
                </div>
                <p className="text-gray-700 text-[16px] mt-4">{testimonial.text}</p>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <button className="swiper-button-next-custom absolute z-10 right-[-60px] bg-[#1e3a5f] text-white p-4 rounded-full shadow-md hover:bg-[#112233] transition">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Reaction;
