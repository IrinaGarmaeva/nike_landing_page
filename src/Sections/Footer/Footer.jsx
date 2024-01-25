import { FOOTER_LINKS, SOCIAL_MEDIA } from "../../common/constants";
import { footerLogo } from "../../assets/images";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-container bg-black padding-x padding-t pb-8">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="nike logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {SOCIAL_MEDIA.map((media) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={media.alt}
              >
                <a href={media.link} target="_blank" rel="noopener noreferrer"><img src={media.src} alt={media.alt} width={24} height={24} /></a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <p className=" font-montserrat">&copy; {currentYear} Nike Inc. All rights reserved</p>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
