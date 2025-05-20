import { ArrowDown } from "lucide-react";

function Footer() {
  return (
    <div className="sm:mt-25 mt-15 w-full">
      <div className="flex justify-between sm:mx-10 mx-2 items-center">
        <div className="flex relative cursor-pointer text-base-content/85">
          <h1 className="text-3xl font-medium">Eclypse</h1>
          <ArrowDown className="align-super size-3 ml-1 rotate-225" />
        </div>
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-2 bg-white rounded-full items-center justify-center cursor-pointer">
          <ArrowDown className="font-light !text-black size-6 rotate-180" />
        </div>
      </div>

      <div className="flex relative justify-between mt-10 sm:mx-10 mx-2 items-end">
        <div className="flex relative sm:gap-8 items-end">
          <div className="hidden sm:block text-base-content/80  sm:text-sm text-xs">
            <h1>Home &nbsp; &nbsp;  <span className="text-base-content/40 text-xs">/</span> &nbsp; &nbsp; About &nbsp; &nbsp;  <span className="text-base-content/40 text-xs">/</span>&nbsp;  Buy &nbsp;  <span className="text-base-content/40 text-xs">/</span></h1>
            <h1 className="py-0.5">Our Customers &nbsp; &nbsp;  <span className="text-base-content/40 text-xs">/</span></h1>
            <h1>Contacts</h1>
          </div>
          <div className="sm:hidden block text-base-content/80  sm:text-sm text-xs">
            <h1>Home &nbsp; <span className="text-base-content/40 text-xs">/</span> &nbsp; About &nbsp; <span className="text-base-content/40 text-xs">/</span>&nbsp;  Buy &nbsp;  <span className="text-base-content/40 text-xs">/</span></h1>
            <h1 className="py-0.5">Our Customers &nbsp;  <span className="text-base-content/40 text-xs">/</span></h1>
            <h1>Contacts</h1>
          </div>

          <div>
            <h1 className="font-light text-xs text-base-content/40 mb-2">CONTACT</h1>
            <h1 className="mb-5 text-base-content/95 font-medium text-xs sm:text-lg">+91 123-456-7890</h1>
            <h1 className="font-light text-xs text-base-content/40 mb-2">EMAIL</h1>
            <h1 className="font-light text-base-content/60 text-xs sm:text-sm">eclypse@gmail.com</h1>
          </div>
        </div>
        <div>
          <h1 className="text-xs text-base-content/50">© Eclypse 2025</h1>
        </div>
      </div>
    </div>
  );
}
export default Footer;
