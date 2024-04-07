import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function WebHeader() {
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    const scrollHeader = window.scrollY >= 10 ? "bg-dark shadow-md" : "";
    setShowHeader(scrollHeader);
  };

  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow((show) => !show);
  };

  return (
    <header className={`${showHeader} text-white fixed w-full top-0 z-50`}>
      <div className="container">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="flex font-medium text-lg lg:text-2xl bg-[#e95420] py-4 px-8"
          >
            Wahyu Zull
          </a>

          <nav className="hidden py-4 md:flex">
            <ul className="flex">
              <li>
                <a
                  href="#"
                  className="px-6 hover:text-orange-500 hover:underline hover:decoration-solid transition-all ease-in-out duration-300"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="px-6 hover:text-orange-500 hover:underline hover:decoration-solid transition-all ease-in-out duration-300"
                >
                  Tentang saya
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="px-6 hover:text-orange-500 hover:underline hover:decoration-solid transition-all ease-in-out duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="px-6 hover:text-orange-500 hover:underline hover:decoration-solid transition-all ease-in-out duration-300"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="p-2 md:hidden"
            onClick={handleToggle}
          >
            <Bars3Icon className="w-5 h-5 text-white" />
          </button>
        </div>

        <div
          className={`${
            show ? "" : "translate-x-full"
          } transform transition-all ease-in-out duration-150 absolute top-full w-[200px] right-0 bg-[#e95420] text-white md:hidden`}
        >
          <ul className="">
            <li className="p-4 hover:bg-white hover:text-black hover:underline hover:decoration-solid transition-all ease-in-out duration-300">
              <a href="#">Beranda</a>
            </li>
            <li className="p-4 hover:bg-white hover:text-black hover:underline hover:decoration-solid transition-all ease-in-out duration-300">
              <a href="#about">Tentang saya</a>
            </li>
            <li className="p-4 hover:bg-white hover:text-black hover:underline hover:decoration-solid transition-all ease-in-out duration-300">
              <a href="#project">Portfolio</a>
            </li>
            <li className="p-4 hover:bg-white hover:text-black hover:underline hover:decoration-solid transition-all ease-in-out duration-300">
              <a href="#contact">Kontak</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default WebHeader;
