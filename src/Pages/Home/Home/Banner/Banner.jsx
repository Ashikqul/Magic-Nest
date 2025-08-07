import img from '../../../../assets/img.jpg';

export default function Banner() {
  return (
    <section id='hero' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D0B1D] to-[#1f1b2e] text-white px-4 lg:pl-80">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 py-10 md:py-16">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 animate-fade-in">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e100ff] via-[#9e1a7b] to-[#8C2266]">
              Sheikh Ashikqul Islam

            </span>
          </h1>
          <p className="text-base md:text-lg font-medium text-white/80 animate-fade-in delay-300">
            A passionate <span className="text-white font-bold">Web Designer</span> based in <strong>Bangladesh</strong>
          </p>
          <a href="#contact">
            <button id='Contact'  className="mt-6 px-6 py-3 bg-gradient-to-r from-[#8C2266] to-[#e100ff] hover:from-[#e100ff] hover:to-[#8C2266] text-white rounded-full shadow-lg transition-all duration-300 animate-bounce hover:scale-105">
              Work with Me ↗
            </button>
          </a>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative animate-zoom-in">
          {/* Glow effect behind image */}
          <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-tr from-[#ff6a00] to-[#ffd500] absolute top-0 -z-10 blur-2xl opacity-40"></div>
          
          <img
            src={img}
            alt="Ashikqul Islam"
            className="z-10 w-[200px] md:w-[300px] lg:w-[350px] rounded-xl shadow-2xl hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

      </div>
    </section>
  );
}
