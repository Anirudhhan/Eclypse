import { MoveUpRight } from "lucide-react";
import MidGridSection from "../components/MidGridSection";

function Home() {

  return (
    <div className="text-white w-full justify-center">
      <div className="bg-[#070707] sm:pt-20 sm:mx-40 min-h-screen justify-center">
        <div className="flex justify-between items-end sm:mx-10 mx-5 sm:mt-20 mt-5 h-40 relative">
          <div>
            <h1 className="sm:text-8xl text-3xl">
              Eclypse<span className="sm:text-4xl text-sm align-super">®</span>
            </h1>
          </div>

          <div className="text-sm pb-2 pr-2">
            <span>
              <span className="text-base-content/60">&copy;</span> 2025
            </span>
          </div>
        </div>

        <div className="sm:mx-10 mx-5 pb-20 pt-5">
          <div className="relative sm:h-[555px] h-[250px] w-full">
            <video
              src="/videos/intro.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="sm:rounded-md rounded-sm w-full h-full object-cover brightness-80"
            />
            <p className="sm:text-4xl font-light text-sm text-white absolute bottom-1 right-2  px-2 py-1 rounded">
              A silhouette worth remembering
            </p>
          </div>
          <h1 className="sm:mt-50 mt-20 sm:text-5xl w-[80%] sm:w-[70%] font-light">
            Rooted in a philosophy of quiet luxury, our garments are designed to
            speak softly in cut, in movement, in presence.
          </h1>

          <div className="sm:mt-20 mt-10">
            <div className="inline-flex items-center border-b group cursor-pointer hover:bg-white py-2">
              <h1 className="font-light sm:text-2xl text-md hover:ml-3 hover:text-black duration-400 mr-2">
                Learn more about Eclypse
              </h1>
              <MoveUpRight className="transition-opacity duration-450 group-hover:hidden" />
            </div>
          </div>

          <MidGridSection />

        </div>
      </div>
    </div>
  );
}

export default Home;
