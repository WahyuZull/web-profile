import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import foto from "../assets/wahyu.png";

function WebAbout() {
  return (
    <section id="about" className="py-24 bg-dark text-white">
      <div className="container">
        <div className="flex flex-col justify-center gap-8 lg:flex-row">
          <div className="w-full flex justify-center items-start lg:w-1/3">
            <div className="h-[300px] w-[300px] rounded-full overflow-hidden bg-[#e95420]">
              <picture>
                <source srcSet={foto} media="all" type="image/jpeg" />
                <img
                  data-src={foto}
                  loading="lazy"
                  alt="wahyu zull"
                  className="object-cover object-center"
                />
              </picture>
            </div>
          </div>
          <div className="w-full lg:w-2/3 p-4 flex flex-col justify-center">
            <h1 className="uppercase font-medium text-[#e95420]">
              tentang saya
            </h1>
            <p className="text-white text-4xl font-bold mb-4">Mari berteman</p>
            <div className="flex flex-col mb-10">
              <p className="text-gray-300 text-base mb-8">
                <span className="text-[#e95420]">
                  Lulusan SMK Teknik Komputer dan Jaringan{" "}
                </span>
                tahun 2015 dengan minat tinggi pada web development.
                Berkeinginan besar untuk menjadi Professional Web Developer.
              </p>
              <p className="mb-4 uppercase font-medium text-[#e95420]">
                TechStack
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="relative p-4 bg-neutral-700 rounded-md flex items-center overflow-hidden">
                  <p>HTML</p>
                  <div className="absolute -top-2 -right-3">
                    <SiHtml5 color="white" size={52} />
                  </div>
                </div>
                <div className="relative p-4 bg-neutral-700 rounded-md flex items-center overflow-hidden">
                  <p>CSS</p>
                  <div className="absolute -top-2 -right-3">
                    <SiCss3 color="white" size={52} />
                  </div>
                </div>
                <div className="relative p-4 bg-neutral-700 rounded-md flex items-center overflow-hidden">
                  <p>TailwindCSS</p>
                  <div className="absolute -top-2 -right-3">
                    <SiTailwindcss color="white" size={52} />
                  </div>
                </div>
                <div className="relative p-4 bg-neutral-700 rounded-md flex items-center overflow-hidden">
                  <p>Javascript</p>
                  <div className="absolute -top-2 -right-3">
                    <SiJavascript color="white" size={52} />
                  </div>
                </div>
                <div className="relative p-4 bg-neutral-700 rounded-md flex items-center overflow-hidden">
                  <p>NodeJS</p>
                  <div className="absolute -top-2 -right-3">
                    <SiNodedotjs color="white" size={52} />
                  </div>
                </div>
                <div className="relative p-4 bg-neutral-700 rounded-md flex items-center overflow-hidden">
                  <p>ReactJS</p>
                  <div className="absolute -top-2 -right-3">
                    <SiReact color="white" size={52} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <button className="px-3.5 py-2.5 bg-[#e95420] rounded-md font-medium text-white transition-all ease-in-out duration-300 hover:text-orange-500 hover:bg-white">
                Resume
              </button>
              <a
                href="#project"
                className="px-3.5 py-2.5 rounded-md text-[#e95420] font-medium flex gap-2 hover:text-white"
              >
                Portfolio &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebAbout;
