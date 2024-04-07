import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

function WebFooter() {
  const date = new Date();
  const year = date.toLocaleDateString("id-ID", { year: "numeric" });
  return (
    <footer className="bg-black py-4">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-8 px-12 py-4">
          <p className="text-sm text-white">
            All right reserved. &copy; {year} - Wahyu Zuliyono
          </p>
          <div className="flex space-x-4">
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
      </div>
    </footer>
  );
}

export default WebFooter;
