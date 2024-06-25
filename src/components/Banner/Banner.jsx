import React from "react";
import BannerImg from "../../assets/banner.png";

function Banner() {
  return (
    <>
      <div className="min-h-[620px] flex items-center justify-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image section */}
            <div
              data-aos="zoom-in"
              className="flex justify-center items-center"
            >
              <img
                className="max-w-[450px] w-full mx-auto shadow-1"
                src={BannerImg}
                alt=""
              />
            </div>

            {/* Text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <p
                data-aos="fade-up"
                className="uppercase text-3xl font-semibold text-black"
              >
                About
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-5xl text-primary font-bold font-cursive2"
              >
                Fresh Bowl
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
                Our story starts with a passion to share the uniqueness and
                culture of Southeast Asia through culinary means. Our menu
                blends the most authentic and time-tested recipes of Southeast
                Asia with the health and fresh demands of today's modern
                consumer. All of our food is freshly prepared in house and from
                scratch, with the aim to serve you food that is not just tasty,
                but nutritious and of value.
              </p>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="primary-btn">View Our Menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
