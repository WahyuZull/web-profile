import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import asta from "../assets/asta.png";
import { Carousel } from "flowbite-react";

function WebContact() {
  return (
    <section id="contact" className="pt-24 pb-12 bg-dark">
      <div className="container">
        <h1 className="uppercase font-medium text-center text-[#e95420]">
          kontak
        </h1>
        <p className="text-center text-white text-4xl font-bold mb-4">
          Mencoba menghubungi saya?
        </p>
        <p className="text-center text-gray-300 mb-12">
          Jangan sungkan menghubungi saya melalui kontak saya di bawah ini. 😊
        </p>
        <div className="grid grid-cols-1 text-center gap-6 mb-12  md:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://instagram.com/wahyu.zull"
            target="_blank"
            rel="noreferrer"
            className="bg-neutral-700 flex items-center gap-4 text-white p-4 rounded-md hover:animate-bounce"
          >
            <SiInstagram color="white" size={28} /> Instagram
          </a>
          <a
            href="mailto:wahyu.zuliyono@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg-neutral-700 flex items-center gap-4 text-white p-4 rounded-md hover:animate-bounce"
          >
            <SiGmail color="white" size={28} /> E-mail
          </a>
          <a
            href="https://wa.me/+6285727084912"
            target="_blank"
            rel="noreferrer"
            className="bg-neutral-700 flex items-center gap-4 text-white p-4 rounded-md hover:animate-bounce"
          >
            <SiWhatsapp color="white" size={28} /> Whatsapp
          </a>
          <a
            href="https://github.com/WahyuZull"
            target="_blank"
            rel="noreferrer"
            className="bg-neutral-700 flex items-center gap-4 text-white p-4 rounded-md hover:animate-bounce"
          >
            <SiGithub color="white" size={28} /> GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="bg-neutral-700 flex items-center gap-4 text-white p-4 rounded-md hover:animate-bounce"
          >
            <SiLinkedin color="white" size={28} /> LinkedIn
          </a>
        </div>
        <div className="flex items-center justify-between gap-5">
          <hr className="border border-[#e95420] w-full" />
          <p className="text-white font-japan font-medium text-7xl">&rdquo;</p>
          <hr className="border border-[#e95420] w-full" />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="h-60 w-full">
            <Carousel
              pauseOnHover
              slideInterval={9000}
              indicators={false}
              draggable={false}
            >
              <div className="p-4 text-white flex items-center justify-center w-full lg:gap-8">
                <div className="hidden lg:block lg:h-60">
                  <picture>
                    <source srcSet={asta} media="all" type="image/jpeg" />
                    <img
                      data-src={asta}
                      loading="lazy"
                      alt="Asta Black Clover"
                      className="w-full h-full"
                    />
                  </picture>
                </div>
                <div className="p-4 text-center lg:text-left">
                  <p className="text-xl font-japan mb-12">
                    決して諦めないことが私の魔法です
                  </p>
                  <p className="font-japan">- アスタ -</p>
                  <p className="font-japan">ブラッククローバー</p>
                </div>
              </div>
              <div className="p-4 text-white flex items-center justify-center w-full lg:gap-8">
                <div className="hidden lg:block lg:h-60">
                  <picture>
                    <source srcSet={asta} media="all" type="image/jpeg" />
                    <img
                      data-src={asta}
                      loading="lazy"
                      alt="Asta Black Clover"
                      className="w-full h-full"
                    />
                  </picture>
                </div>
                <div className="p-4 text-center lg:text-left">
                  <p className="text-xl font-japan mb-12">
                    決して諦めないことが私の魔法です
                  </p>
                  <p className="font-japan">- アスタ -</p>
                  <p className="font-japan">ブラッククローバー</p>
                </div>
              </div>
              <div className="p-4 text-white flex items-center justify-center w-full lg:gap-8">
                <div className="hidden lg:block lg:h-60">
                  <picture>
                    <source srcSet={asta} media="all" type="image/jpeg" />
                    <img
                      data-src={asta}
                      loading="lazy"
                      alt="Asta Black Clover"
                      className="w-full h-full"
                    />
                  </picture>
                </div>
                <div className="p-4 text-center lg:text-left">
                  <p className="text-xl font-japan mb-12">
                    決して諦めないことが私の魔法です
                  </p>
                  <p className="font-japan">- アスタ -</p>
                  <p className="font-japan">ブラッククローバー</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebContact;
