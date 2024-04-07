import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
// import avatar from "../assets/avatar.png";
import background from "../assets/background-section.jpg";

function WebHello() {
  return (
    <section
      className="py-24 text-white bg-cover bg-center"
      loading="lazy"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="flex flex-col justify-between h-[460px]">
          <div>
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-[#e95420] mb-2">
                Wahyu Zuliyono
              </h1>
              <p className="text-xl mb-6">Web Developer</p>
              <p className="text-base font-light text-gray-300 mb-6">
                Hai! 🖐 salam kenal. Selamat datang di website saya. <br />
                Saya sedang belajar web development dengan harapan bisa
                berpindah karir di dunia Website Development.
              </p>
            </div>
            <div className="flex items-center">
              <a
                href="https://wa.me/+6285727084912"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2.5 bg-[#e95420] rounded-md transition-all ease-in-out duration-300 hover:text-orange-500 hover:bg-white"
              >
                <SiWhatsapp size={24} />
                Kontak saya
              </a>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <a
                href="#about"
                className="mb-6 border  p-1.5 rounded-full animate-bounce"
              >
                &darr;
              </a>
            </div>
            <div className="flex justify-end text-right">
              <div>
                <div className="flex items-center justify-end mb-2">
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/wahyu.zull"
                      target="_blank"
                      rel="noreferrer"
                      className="text-center"
                    >
                      <SiInstagram color="white" size={20} />
                    </a>
                    <a
                      href="https://github.com/WahyuZull"
                      target="_blank"
                      rel="noreferrer"
                      className="text-center"
                    >
                      <SiGithub color="white" size={20} />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="text-center"
                    >
                      <SiLinkedin color="white" size={20} />
                    </a>
                    <a
                      href="https://wa.me/+6285727084912"
                      target="_blank"
                      rel="noreferrer"
                      className="text-center"
                    >
                      <SiWhatsapp color="white" size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-xs font-extralight text-gray-300">
                  Photo by Daniel Putzer from{" "}
                  <a
                    href="https://www.pexels.com/photo/photography-of-macbook-half-opened-on-white-wooden-surface-633409/"
                    className="underline"
                  >
                    Pexels
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebHello;
