import { Link } from "react-router-dom";
import { HomeAbout } from "./HomeComponents/HomeAbout";
import { HomeResult } from "./HomeComponents/HomeResult";
import { HomeSchedule } from "./HomeComponents/HomeSchedule";
import { HomeTeam } from "./HomeComponents/HomeTeam"; // Import the HomeTeam component
import nissinCode from "../assets/nissinCode.png";
import { MobileHome } from "./MobileHome";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();

  return (
    
    <>
      <div className="md:hidden">
        <MobileHome />
      </div>
      <div className="hidden md:flex flex-grow overflow-y-auto overflow-x-hidden flex-col items-center gap-[190px] px-10 md:px-20 lg:px-[156px] pt-[80px] pb-[120px]">
        <HomeAbout />
        <HomeResult />
        <HomeTeam />
        <HomeSchedule />
        <div className="w-full relative  text-center text-[2.25rem]  text-black font-noto-sans-sc flex justify-center">
          <div className=" border-gainsboro border-[1px] border-solid box-border top-[4.313rem] left-[6rem] flex flex-row items-start justify-center gap-[11.25rem] pt-[69px] pb-[57px] pl-[96px] pr-[31px]">
            <div className=" relative tracking-[20px] font-medium flex flex-col items-center justify-center shrink-0">
              <div className="justify-center">{t("home.contactUs")}</div>
              <img src={nissinCode} className="w-[80px] pt-[20px]" alt="" />
            </div>
            <div className="w-[26.563rem] flex flex-col items-start justify-start gap-[4.062rem] text-left text-[1.25rem]">
              <div className="self-stretch relative tracking-[3px] leading-[1.75rem]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  {t("home.welcomeMessage.line1")}
                </p>
                <p className="m-0">{t("home.welcomeMessage.line2")}</p>
              </div>
              <Link to="/contact">
                <div className="flex flex-row items-center justify-start gap-[1.5rem]">
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src={`${import.meta.env.VITE_BASE_URL}arrow_forward.svg`}
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src={`${import.meta.env.VITE_BASE_URL}arrow_forward.svg`}
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src={`${import.meta.env.VITE_BASE_URL}arrow_forward.svg`}
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src={`${import.meta.env.VITE_BASE_URL}arrow_forward.svg`}
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src={`${import.meta.env.VITE_BASE_URL}arrow_forward.svg`}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-8 md:px-12 lg:pl-[87px] ">
        广州日进国际文化传播有限公司
      </div> */}
    </>
  );
}
