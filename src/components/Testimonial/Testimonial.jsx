import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Husniddin",
    text: `I thought the food was good and will 
        return, I did however thought the price was 
        a little on the high side. Tables were clean 
        and so was the overall restaurant.`,
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Munira",
    text: `I had both delivery and ate in the restaurant. 
        I would recommend eating in the establishment. The 
        quality is way better and they are generally generous 
        with the ratios of meat/vegetables/rice.`,
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Abdulaziz",
    text: `I don't know how to rate this place exactly. 
        I have been multiple times and honestly love the food. 
        But it just goes to show how one bad experience can spoil 
        your whole impression of a business.`,
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Rustambek",
    text: `Well... I was starved and waiting for eyeglasses, 
        so popped in for some lunch. The chicken was pretty good. 
        They only gave me a fork so I was pulling it apart with 
        my fingers. `,
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Lola",
    text: `I ordered food from their App for pickup. The actual 
        restaurant is hard to find. I had to call to ask exactly 
        where they were. The person who answered the phone was nice 
        and explained the location.`,
    img: "https://picsum.photos/101/101",
  },
  {
    id: 6,
    name: "Muhammadsalim",
    text: `We do carry out here quite often. Food is usually 
        great and made fresh to order. The large size bowl is huge 
        and I can split that with my wife. My son loves the orange 
        chicken bowl.`,
    img: "https://picsum.photos/102/102",
  },
];
function Testimonial() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div data-aos="fade-up" className="mb-10">
          <h1 className="text-center text-4xl font-bold font-cursive2">
            Testimonials
          </h1>
        </div>

        {/* Slider section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      className="rounded-full w-20 h-20"
                      src={data.img}
                      alt=""
                    />
                  </div>

                  {/* Content section */}
                  <div className="flex fleex-col items-center gap-4">
                    <div className="space-y-4">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
