import { useState } from "react";
import logo from "../assets/logoWhite.svg";
import { ArrowDown } from "lucide-react";

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const desktopVideo = publicAsset("video/nissin-pc.mp4");
const mobileVideo = publicAsset("video/nissin-mobile.mp4");
const desktopPoster = publicAsset("video/nissin-poster-pc.webp");
const mobilePoster = publicAsset("video/nissin-poster-mobile.webp");

export function SplashScreen() {
  const [isDesktopVideoReady, setIsDesktopVideoReady] = useState(false);
  const [isMobileVideoReady, setIsMobileVideoReady] = useState(false);

  const handleScrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-slate-400 w-full h-svh overflow-hidden transition-transform duration-700 ease-in-out">
      {/* 背景视频 */}
      <img
        src={desktopPoster}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 hidden h-full w-full object-cover sm:block"
      />
      <video
        className={`absolute top-0 left-0 hidden h-full w-full object-cover transition-opacity duration-700 sm:block ${
          isDesktopVideoReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop={true}
        muted
        playsInline
        preload="auto"
        poster={desktopPoster}
        onCanPlay={() => setIsDesktopVideoReady(true)}
        onPlaying={() => setIsDesktopVideoReady(true)}
      >
        <source src={desktopVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <img
        src={mobilePoster}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 block h-svh w-full object-cover sm:hidden"
      />
      <video
        className={`absolute top-0 left-0 block h-svh w-full object-cover text-black transition-opacity duration-700 sm:hidden ${
          isMobileVideoReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop={true}
        muted
        playsInline
        preload="auto"
        poster={mobilePoster}
        onCanPlay={() => setIsMobileVideoReady(true)}
        onPlaying={() => setIsMobileVideoReady(true)}
      >
        <source src={mobileVideo} type="video/mp4" />
        Your browser does not support the video.
      </video>

      {/* 叠加的 Logo */}
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center z-[999] hidden sm:flex">
        <img
          src={logo}
          alt="Logo"
          className="w-[20vw] max-w-[163px] min-w-[100px] h-auto"
        />
      </div>

      {/* 滚动提醒 */}
      <button
        type="button"
        onClick={handleScrollToNext}
        className="z-[1001] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end text-white gap-[18px] pb-[85px] sm:pb-[36px] cursor-pointer bg-transparent border-0"
        aria-label="Scroll to next section"
      >
        <div className="text-[13px] tracking-[1.12px]">scroll</div>
        <ArrowDown />
      </button>
    </div>
  );
}
