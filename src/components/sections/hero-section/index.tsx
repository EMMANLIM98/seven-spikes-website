import Image from 'next/image';
import HeroLogos from '../hero-logos';
import { CounterStat } from './counter-stat';

export default function HeroSection() {
  return (
    <section
      className="pt-16 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero/hero-img.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-[120rem] mx-auto relative z-10">
        <div className="wrapper">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center pb-16">
              <h1 className="mx-auto max-w-full text-center font-bold text-white mb-8 text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.15] xl:whitespace-nowrap">
                Building the Future, Connecting the World
              </h1>

              <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
                <CounterStat target={1000} suffix="+" label="Finished Projects" />
                <CounterStat target={2500} suffix="+" label="Team Members" />
                <CounterStat target={15} suffix="+" label="Years Experience" />
              </div>
            </div>
          </div>
          <div className="max-w-[1000px] mx-auto relative">
            <div className="p-3 sm:p-[18px] relative z-30 rounded-[32px] border border-white/30 dark:border-white/10 bg-white/20">
              <video
                src="/images/seven-spikes/Seven Spikes Video.mp4"
                controls
                autoPlay
                muted
                loop
                className="w-full rounded-2xl block"
                width={966}
                height={552}
              />
            </div>
            <div className="absolute hidden lg:block z-10 -top-20 -translate-y-20 left-1/2 -translate-x-1/2">
              <svg
                width="1300"
                height="1001"
                viewBox="0 0 1300 1001"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.7" filter="url(#filter0_f_9279_7148)">
                  <circle cx="800" cy="500.03" r="300" fill="#4E6EFF" />
                </g>
                <g opacity="0.3" filter="url(#filter1_f_9279_7148)">
                  <circle cx="500" cy="500.03" r="300" fill="#FF58D5" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_9279_7148"
                    x="300"
                    y="0.029541"
                    width="1000"
                    height="1000"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_9279_7148"
                    />
                  </filter>
                  <filter
                    id="filter1_f_9279_7148"
                    x="0"
                    y="0.029541"
                    width="1000"
                    height="1000"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_9279_7148"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="max-[1100px]:hidden">
          <div className="absolute top-14 left-10 floating-1 rounded-full border border-[#f2df94]/35 bg-[#452624]/55 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(69,38,36,0.35)] backdrop-blur-md">
            General Trading & Logistics
          </div>
          <div className="absolute left-[90px] top-[290px] floating-2 rounded-full border border-[#f2df94]/30 bg-[#a25b36]/50 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(162,91,54,0.28)] backdrop-blur-md max-[1240px]:left-[40px]">
            Real Estate & Hospitality
          </div>
          <div className="absolute right-10 top-[110px] floating-3 rounded-full border border-white/25 bg-[#bfa92e]/35 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(191,169,46,0.22)] backdrop-blur-md">
            Consultancy Services
          </div>
          <div className="absolute top-[300px] right-[130px] floating-4 rounded-full border border-[#f2df94]/30 bg-[#452624]/60 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(69,38,36,0.35)] backdrop-blur-md max-[1240px]:right-[60px] max-[1350px]:right-[90px] max-[1500px]:right-[110px]">
            Road Contracting & Infrastructure
          </div>
          <div className="absolute left-1/2 top-[145px] floating-2 -translate-x-1/2 rounded-full border border-white/20 bg-[#a25b36]/45 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(162,91,54,0.28)] backdrop-blur-md">
            Building Construction & Facility Management
          </div>
        </div>
      </div>
      <div className="hero-glow-bg pointer-events-none w-full h-167.5 absolute z-10 bottom-0 opacity-60"></div>
      <HeroLogos />
    </section>
  );
}
