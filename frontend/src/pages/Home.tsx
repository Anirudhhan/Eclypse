function Home() {
  return (
    <div className="text-white w-full justify-center">
      <div className="bg-[#070707] sm:pt-20 sm:mx-40 min-h-screen justify-center">
        <div className="flex justify-between items-end mx-10 sm:mt-20 mt-5 h-40 relative">
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
        
        {/* TODO: MAKE RESPONSIVE FOR MOBILE */}
        <div className="mx-10 pb-20 pt-5">
          <div className="relative h-[555px] w-full">
            <video
              src="/videos/intro.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-md w-full h-full object-cover brightness-80"
            />
            <p className="text-4xl text-white absolute bottom-2 right-4  px-2 py-1 rounded">
              A silhouette worth remembering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
