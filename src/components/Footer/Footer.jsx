import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Order",
    link: "/order",
  },
  {
    title: "Testimonials",
    link: "/testimonials",
  },
];

const FooterLinks2 = [
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Delivery",
    link: "/delivery",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

function Footer() {
  return (
    <>
      <div>
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <img data-aos="fade-down" className="w-36" src={Logo} alt="" />

            <div className="space-y-5">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="pt-4 opacity-60"
              >
                Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape
              </p>

              <button
                data-aos="fade-up-right"
                data-aos-delay="300"
                className="primary-btn"
              >
                View Our Menu
              </button>
            </div>
          </div>
          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="py-8 px-4"
            >
              <h1 className="text-xl font-semibold sm:text-left mb-5">
                Important Links
              </h1>
              <ul className="space-y-5">
                {FooterLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      className="hover:text-blue-600 active:text-blue-900 duration-150"
                      href={link.link}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col link */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="py-8 px-4"
            >
              <h1 className="text-xl font-semibold sm:text-left mb-5">
                Quick Links
              </h1>
              <ul className="space-y-5">
                {FooterLinks2.map((link) => (
                  <li key={link.id}>
                    <a
                      className="hover:text-blue-600 active:text-blue-900 duration-150"
                      href={link.link}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* company address section */}
            <div
              data-aos="fade-down"
              className="py-8 px-4 col-span-2 sm:col-auto"
            >
              <h1 className="text-xl font-semibold sm:text-left mb-5">
                Social Networks
              </h1>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/iam_husnidd1n/">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100086488489737&locale=ru_RU">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="https://t.me/iamhusniddin">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* copyright section */}
        <div className="bg-gray-300">
          <div className="text-xs md:text-sm container p-4 flex justify-between">
            <p>@2024 All rights reserved Inc.</p>
            <div className="flex justify-center items-center gap-3">
              <a href="#">Privacy</a>
              <a href="#">Accessibility</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
