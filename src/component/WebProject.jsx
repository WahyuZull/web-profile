import {
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiVite,
  SiWebpack,
} from "@icons-pack/react-simple-icons";
import Project from "../assets/masjid_menara_kudus.jpg";

function WebProject() {
  return (
    <section id="project" className="py-24 bg-dark">
      <div className="container text-white">
        <h1 className="uppercase font-medium text-center text-[#e95420]">
          Proyek
        </h1>
        <p className="text-center text-white text-4xl font-bold mb-4">
          Web Development
        </p>
        <p className="text-center text-gray-300 mb-12">
          Berikut adalah beberapa proyek website yang pernah saya buat.
        </p>
        <div className="flex flex-col items-center gap-14">
          <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-neutral-700 via-neutral-800 to-neutral-700 rounded-md p-8 max-w-2xl shadow-xl">
            <div className="rounded-md overflow-hidden h-[250px] w-full mb-6 lg:h-[350px]">
              <picture>
                <source srcSet={Project} media="all" type="image/jpeg" />
                <img
                  data-src={Project}
                  loading="lazy"
                  alt="wahyu zull"
                  className="object-cover object-center h-full w-full"
                />
              </picture>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              <a
                href="https://doyanmakan-restocatalogue.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Restaurant Catalogue
              </a>
            </h2>
            <p className="text-base text-gray-300 mb-4">
              Website ini saya buat untuk memenuhi Submisson terakhir pada kelas
              Menjadi Front-End Web Developer Expert platform{" "}
              <a
                href="dicoding.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline after:content-['_↗']"
              >
                Dicoding
              </a>
              .
            </p>
            <p className="text-base text-gray-300 mb-8">
              Aplikasi web ini adalah PWA(Web Page Aplication) dapat menampilkan
              informasi restoran menggunakan API yang telah disediakan oleh
              platform kelas. Pada aplikasi ini dapat menambahkan review pada
              halaman detil restoran serta dapat menambahkan restoran favorit
              dengan memanfaatkan IndexedDB pada browser.
            </p>
            <div className="flex gap-4">
              <SiHtml5 color="default" size={30} />
              <SiSass color="default" size={30} />
              <SiJavascript color="default" size={30} />
              <SiWebpack color="default" size={30} />
              <SiNetlify color="default" size={30} />
            </div>
          </div>
          <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-neutral-700 via-neutral-800 to-neutral-700 rounded-md p-8 max-w-2xl shadow-xl">
            <div className="rounded-md overflow-hidden h-[250px] w-full mb-6 lg:h-[350px]">
              <picture>
                <source srcSet={Project} media="all" type="image/jpeg" />
                <img
                  data-src={Project}
                  loading="lazy"
                  alt="wahyu zull"
                  className="object-cover object-center h-full w-full"
                />
              </picture>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              <a href="#">Notes App API</a>
            </h2>
            <p className="text-base text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi
              est quidem unde ab autem eum labore sint dolorum maiores, eligendi
              laudantium voluptatum qui facere rem temporibus dolor dolore
              ducimus.
            </p>
            <div className="flex gap-4">
              <SiJavascript color="default" size={30} />
              <SiNodedotjs color="default" size={30} />
            </div>
          </div>
          <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-neutral-700 via-neutral-800 to-neutral-700 rounded-md p-8 max-w-2xl drop-shadow-xl">
            <div className="rounded-md overflow-hidden h-[250px] w-full mb-6 lg:h-[350px]">
              <picture>
                <source srcSet={Project} media="all" type="image/jpeg" />
                <img
                  data-src={Project}
                  loading="lazy"
                  alt="wahyu zull"
                  className="object-cover object-center h-full w-full"
                />
              </picture>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              <a href="#">React Notes App</a>
            </h2>
            <p className="text-base text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi
              est quidem unde ab autem eum labore sint dolorum maiores, eligendi
              laudantium voluptatum qui facere rem temporibus dolor dolore
              ducimus.
            </p>
            <div className="flex gap-4">
              <SiReact color="default" size={30} />
              <SiVite color="default" size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebProject;
