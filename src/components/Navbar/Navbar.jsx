import React from "react";
import Logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Menu = [
  {
    id: 1,
    name: "Noodle Soup",
    link: "#",
  },
  {
    id: 2,
    name: "Rice Bowls",
    link: "/#",
  },
  {
    id: 3,
    name: "Salad Bowls",
    link: "/#",
  },
  {
    id: 4,
    name: "Beverages",
    link: "/#",
  },
  {
    id: 5,
    name: "Kids",
    link: "/#",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-lightBlue">
      <div className="container py-2">
        <div className="flex justify-between items-center">
          {/* Logo section  */}
          <div data-aos="fade-down" data-aos-once="true">
            <a href="#">
              <img className="w-36" src={Logo} alt="logo" />
            </a>
          </div>

          {/* Link section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="hidden lg:flex justify-between items-center gap-4"
          >
            <ul className="hidden lg:flex justify-between items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    className="inline-block text-xl p-4 hover:text-blue-600 duration-200 active:text-blue-900"
                    href={menu.link}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Responisive Menu for Mobile Device */}
          <div className="lg:hidden">
            <button onClick={handleOpen}>
              <FaBars className="text-3xl" />
            </button>

            {/* Dropdown menu */}
            {open && (
              <div>
                <ul className="bg-white space-y-3 p-4 rounded-md shadow-md absolute right-10 top-24 z-50 ">
                  {Menu.map((menu) => (
                    <li key={menu.id}>
                      <a
                        className="inline-block text-xl p-4 hover:bg-primary hover:text-white w-full rounded-md"
                        href={menu.link}
                      >
                        {menu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
