function MidGridSection() {
  return (
    <div className="container x-4 py-8 mt-15 md:mt-30">
      <div className="mb-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 h-50 md:h-120 rounded-md overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src="/videos/mid1.mp4"
            />
          </div>

          <div className="group relative hidden md:block w-1/3 h-120 rounded-lg overflow-hidden">
            <img
              src="/images/mid2.jpg"
              alt="Red fabric detail"
              className="w-full h-full object-cover group-hover:opacity-75 group-hover:brightness-55  duration-900"
            />
            <p className="opacity-0 group-hover:opacity-100  transition-all duration-900 md:text-4xl text-sm text-white absolute bottom-6 left-3 px-2 py-1 rounded">
              Premium wool blend in signature vermilion
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:mt-8 flex-row gap-4 md:gap-8">
        <div className="block md:hidden w-1/3 h-30 md:h-64 rounded-md overflow-hidden">
          <img
            src="/images/mid2.jpg"
            alt="Red fabric detail"
            className="w-full h-full object-cover brightness-90"
          />
        </div>

        <div className="group relative w-1/3 h-30 md:h-98 rounded-md overflow-hidden">
          <img
            src="/images/mid3.jpg"
            alt="Red fabric close-up"
            className="w-full h-full object-cover contrast-80 group-hover:opacity-75 group-hover:brightness-55  duration-900"
          />
          <p className="opacity-0 group-hover:opacity-100  transition-all duration-900 md:text-4xl text-sm text-white absolute bottom-6 left-3 px-2 py-1 rounded">
            Discreet side pockets with clean finish
          </p>
        </div>

        <div className="relative group w-1/3 h-30 md:h-98 rounded-md overflow-hidden">
          <img
            src="/images/mid4.jpg"
            alt="Hand with scissors"
            className="w-full h-full object-cover contrast-80 group-hover:opacity-75 group-hover:brightness-55  duration-900"
          />
          <p className="opacity-0 group-hover:opacity-100  transition-all duration-900 md:text-4xl text-sm text-white absolute bottom-6 left-3 px-2 py-1 rounded">
            Hand-cut and assembled in small batches
          </p>
        </div>

        <div className="group relative hidden md:block w-[35%] h-98 rounded-sm overflow-hidden">
          <img
            src="/images/brandlogo.jpg"
            alt="Brand logo"
            className="w-full h-full object-cover group-hover:opacity-55 group-hover:bg-black group-hover:brightness-0 duration-900"
          />
          <p className="opacity-0 group-hover:opacity-100 transition-all duration-900 text-7xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded">
            Eclypse<span className="md:text-4xl text-sm align-super">®</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MidGridSection;
