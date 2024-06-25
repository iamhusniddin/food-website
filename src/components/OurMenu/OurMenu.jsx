import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/banner.png";
import Img2 from "../../assets/food2-plate.png";
import Img3 from "../../assets/hero.png";

const MenuData = [
  {
    id: 1,
    name: "Fresh Bowl",
    price: "$299",
    img: Img1,
  },
  {
    id: 2,
    name: "Salad Bowl",
    price: "$199",
    img: Img2,
  },
  {
    id: 3,
    name: "Rice Bowl",
    price: "$150",
    img: Img3,
  },
  {
    id: 4,
    name: "Noodle Soup",
    price: "$200",
    img: Img1,
  },
  {
    id: 5,
    name: "Chicken Bowl",
    price: "$300",
    img: Img2,
  },
];

function OurMenu() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div>
      <div className="container py-12 bg-primary text-white   ">
        {/* Header section */}
        <div className="mb-7 space-y-5">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center text-4xl font-bold"
          >
            Our Menu
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center sm:max-w-sm mx-auto text-sm opacity-75"
          >
            {" "}
            REAL FOOD. REAL INGREDIENTS.
          </div>
        </div>

        {/* Slider section */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Slider {...settings}>
            {MenuData.map((menu) => (
              <div className=" my-12">
                <div className="flex flex-col gap-4 py-4 px-6 mx-4 rounded-xl">
                  {/* Image section */}
                  <div className="mb-3 flex justify-center">
                    <img
                      className="rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1"
                      src={menu.img}
                      alt=""
                    />
                  </div>
                  {/* text content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 text-center">
                      <h1 className="text-xl">{menu.name}</h1>
                      <p className="text-3xl">
                        <span className="font-cursive text-4xl">Only</span>{" "}
                        {menu.price}.00
                      </p>
                      <a className="underline hover:text-blue-900" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurMenu;
