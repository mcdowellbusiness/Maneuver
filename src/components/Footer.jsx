import { nsfLogo } from "@/assets";

const Footer = () => {
  return (
    <div className="relative py-8 flex items-center text-tertiary w-3/5 mx-auto z-20">
      <img src={nsfLogo} className="w-28 mr-8" alt="nsf logo" />
      <p className="">
        This work is part of a larger project funded by the Advanced
        Technological Education Program of the National Science Foundation, DUE
        #1700674. Any opinions, findings, conclusions or recommendations
        expressed in this site are those of the author(s) and do not necessarily
        reflect the views of the National Science Foundation.
      </p>
    </div>
  );
};

export default Footer;
