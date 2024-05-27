import IText from "../interfaces/IText";
import Button from "./Button";
import Description from "./Description";
import Heading from "./Heading";
import Input from "./Input";

const FooterTitle: React.FC<IText> = ({ text }) => {
  return (
    <h1 className="mb-8 text-4xl capitalize font-bold text-primary">{text}</h1>
  );
};

const Footer = () => {
  const links = ["list movies", "popular movies", "top movies"];
  return (
    <div className="w-full grid grid-cols-12 gap-6 px-40">
      <div className="col-span-7 flex flex-col">
        <Heading text="ReactMovie" />
        <Description
          text="ReactMovie adalah sebuah platform yang menyediakan sebuah informasi
      dari berbagai film dengan detail detail yang menarik dan di rangkum
      secara terstruktur untuk memudahkan user mencari informasi yang
      akurat"
        />
      </div>
      <div className="col-span-2 flex flex-col">
        <FooterTitle text="links" />
        {links.map((link, index) => {
          return (
            <a
              href=""
              className="mb-2 underline text-xl font-bold text-white"
              key={index}
            >
              {link}
            </a>
          );
        })}
      </div>
      <div className="col-span-3">
        <FooterTitle text="subscription" />
        <div className="flex gap-4">
          <Input />
          <button className="text-white bg-primary rounded py-1 px-2">
            subscription
          </button>
        </div>
      </div>
      <div className="col-span-12 text-center mt-20 mb-6">
        <p className="text-white font-light">
          &copy;Copyright 2024 by Leo Marselio
        </p>
      </div>
    </div>
  );
};

export default Footer;
