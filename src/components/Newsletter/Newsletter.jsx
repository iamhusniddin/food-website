import React from "react";
import NewsImg from "../../assets/food2-plate.png";
import { Input } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const backgroundStyle = {
  backgroundImage: `url(${NewsImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "right",
  height: "100%",
  width: "100%",
};

function Newsletter() {
  return (
    <>
      <div className="bg-primary " style={backgroundStyle}>
        <div className="container bg-black/60 sm:bg-transparent py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="space-y-4 text-center sm:text-left">
              {/* text section */}
              <h1
                data-aos="fade-up"
                className="text-2xl sm:text-3xl font-semibold text-white/90"
              >
                Ready to get Started
              </h1>
              <p data-aos="fade-up" data-aos-delay="200" className="text-white">
                Let's stay in touch to share what we believe in.
              </p>
            </div>
            {/* input section */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-center sm:text-left"
            >
              <Search
                className="max-w-[400px] px-4 py-2"
                placeholder="Enter Email Address"
                allowClear
                enterButton="SEND"
                size="large"
                onSearch={onSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
