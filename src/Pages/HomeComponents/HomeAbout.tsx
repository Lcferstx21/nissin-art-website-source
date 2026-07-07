import { Link } from "react-router-dom";
import image10 from "../../assets/image10.png";
import { Button } from "../../components/Button";
import { ArrowRight, ChevronRight } from "lucide-react";
import TextAnimation from "../../components/TextAnimation";

import { useTranslation } from "react-i18next";

export function HomeAbout() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[600px] w-full bg-white ">
      {/* 按钮和主题 */}
      <div className="relative flex justify-between z-[1] ">
        {/* 主题 */}
        <div>
          <div className="h-[60px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-medium text-black text-4xl tracking-[20.00px] leading-[60px] whitespace-nowrap">
            {t("homeAbout.title")}
          </div>
          <div className=" w-[215px] h-[60px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-normal text-black text-[15px] tracking-[1.12px] leading-[60px] whitespace-nowrap">
            {t("homeAbout.subTitle")}
          </div>
        </div>
        {/* 右箭头按钮 */}
        <div className="ml-auto flex-shrink-0">
          <Link to="/aboutus">
            <Button variant="ghost" size="icon">
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      {/* pic+大slogan */}
      <div className="relative  -translate-y-[32px] min-h-[190px] ">
        {/* pic */}
        <div className="hidden relative md:flex justify-end ">
          <img className="w-full  max-w-[617px] " src={image10} />
        </div>

        {/* 描こう、夢を。 */}
        <div className="absolute bottom-9 lg:left-[22%] text-black  text-[40px] md:text-[64px] font-medium leading-[60px] tracking-[10px] ">
          <div className=" relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
            <TextAnimation text="描こう、夢を。" />
          </div>
        </div>
      </div>

      {/* 文案 */}
      <div className="flex justify-end ">
        <p className=" w-[840px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-medium text-transparent text-base text-justify tracking-[1.50px] leading-[33px]">
          <span className="text-black tracking-[0.24px]">
            {t("homeAbout.description")}
          </span>
        </p>
      </div>

      {/* 5个卖点 */}
      <div className="relative sm:min-w-[840px] min-h-[150px] max-h-[170px] lg:absolute lg:right-[0px] mt-[53px]">
        <div className="w-1/3 h-14 left-0 top-0 absolute">
          <div className="whitespace-pre-line left-[22px] top-0 absolute text-black text-base font-medium font-['Noto Sans SC'] leading-7 tracking-wide">
            {t("homeAbout.sellingPoints.0")}
          </div>
          <div className="w-6 h-6 left-0 top-0 absolute">
            <ChevronRight />
          </div>
        </div>

        <div className="w-1/3 h-14 left-0 top-[96px] absolute">
          <div className="whitespace-pre-line left-[22px] top-0 absolute text-black text-base font-medium font-['Noto Sans SC'] leading-7 tracking-wide">
            {t("homeAbout.sellingPoints.1")}
          </div>
          <div className="w-6 h-6 left-0 top-[1px] absolute">
            <ChevronRight />
          </div>
        </div>

        <div className="w-1/3 h-14 left-[288px] top-0 absolute">
          <div className="whitespace-pre-line left-[22px] top-0 absolute text-black text-base font-medium font-['Noto Sans SC'] leading-7 tracking-wide">
            {t("homeAbout.sellingPoints.2")}
          </div>
          <div className="w-6 h-6 left-0 top-0 absolute">
            <ChevronRight />
          </div>
        </div>

        <div className="w-1/3 h-14 left-[288px] top-[96px] absolute">
          <div className="whitespace-pre-line left-[23px] top-0 absolute text-black text-base font-medium font-['Noto Sans SC'] leading-7 tracking-wide">
            {t("homeAbout.sellingPoints.3")}
          </div>
          <div className="w-6 h-6 left-0 top-[1px] absolute">
            <ChevronRight />
          </div>
        </div>

        <div className="w-1/3 h-14 left-[576px] top-0 absolute">
          <div className="whitespace-pre-line left-[21px] top-0 absolute text-black text-base font-medium font-['Noto Sans SC'] leading-7 tracking-wide">
            {t("homeAbout.sellingPoints.4")}
          </div>
          <div className="w-6 h-6 left-0 top-0 absolute">
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
