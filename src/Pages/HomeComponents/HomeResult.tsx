import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ArrowRight } from "lucide-react";
import TextAnimation from "../../components/TextAnimation";
import AnimatedNumber from "../../components/AnimatedNumber";
import { useTranslation } from "react-i18next";

export function HomeResult() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-[43px] relative  w-full bg-white ">
      {/* 按钮和主题 */}
      <div className="grid grid-cols-[3fr_8fr_1fr] relative z-[1] ">
        {/* 主题 */}
        <div>
          <div className="min-h-[60px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-medium text-black text-4xl tracking-[20.00px] leading-[60px]">
            {t("homeResult.title")}
          </div>
          <div className=" w-[215px] h-[60px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-normal text-black text-[15px] tracking-[1.12px] leading-[60px] whitespace-nowrap">
            {t("homeResult.subTitle")}
          </div>
        </div>

        {/* 文案 */}

        <div className="max-w-[52.5rem] relative text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium font-noto-sans-sc text-black text-justify inline-block h-[9.25rem]">
          <p className="m-0">{t("homeResult.description.0")}</p>
          <p className="m-0">{t("homeResult.description.1")}</p>
          <p className="m-0">{t("homeResult.description.2")}</p>
        </div>

        <div className="absolute right-0 bottom-[40px]">
          <AnimatedNumber />
          <span className="text-[20px] leading-[23px] tracking-[1.5px] pl-2">
            {t("homeResult.animatedNumberSuffix")}
          </span>
        </div>

        {/* 右箭头按钮 */}
        <div className="ml-auto flex-shrink-0">
          <Link to="/results">
            <Button variant="ghost" size="icon">
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      {/* 六个大学的介绍 */}

      <div className="grid grid-cols-12">
        <div className="col-span-3" />

        <div className="col-span-9 w-full relative flex flex-row items-start flex-wrap content-start gap-y-[40px] gap-x-[4.5rem] text-center ">
          <div className=" relative flex flex-col gap-[20px] ">
            <div className="flex flex-col gap-[48px]">
              <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                <TextAnimation text="116" />
              </div>
              <div className="tracking-[1.5px] leading-[1.438rem] font-medium min-h-[48px] whitespace-pre-line">
                {t("homeResult.universities.0.name")}
              </div>
            </div>
            <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
              {t("homeResult.universities.0.description")}
            </div>
          </div>

          <div className=" relative flex flex-col gap-[20px] justify-start">
            <div className="flex flex-col gap-[48px]">
              <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                <TextAnimation text="160" />
              </div>
              <div className="tracking-[1.5px] leading-[1.438rem] font-medium  min-h-[48px]">
                {t("homeResult.universities.1.name")}
              </div>
            </div>
            <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
              {t("homeResult.universities.1.description")}
            </div>
          </div>

          <div className=" relative flex flex-col gap-[20px] justify-start">
            <div className="flex flex-col gap-[48px]">
              <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                <TextAnimation text="104" />
              </div>
              <div className="tracking-[1.5px] leading-[1.438rem] font-medium  min-h-[48px] whitespace-pre-line">
                {t("homeResult.universities.2.name")}
              </div>
            </div>
            <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
              {t("homeResult.universities.2.description")}
            </div>
          </div>

          <div className=" relative flex flex-col gap-[20px] justify-start">
            <div className="flex flex-col gap-[48px]">
              <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                <TextAnimation text="40" />
              </div>
              <div className="tracking-[1.5px] leading-[1.438rem] font-medium  min-h-[48px] whitespace-pre-line">
                {t("homeResult.universities.3.name")}
              </div>
            </div>
            <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
              {t("homeResult.universities.3.description")}
            </div>
          </div>
          <div className=" relative flex flex-col gap-[20px] justify-start">
            <div className="flex flex-col gap-[48px]">
              <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                <TextAnimation text="14" />
              </div>
              <div className="tracking-[1.5px] leading-[1.438rem] font-medium  min-h-[48px] whitespace-pre-line">
                {t("homeResult.universities.4.name")}
              </div>
            </div>
            <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
              {t("homeResult.universities.4.description")}
            </div>
          </div>
          <div className=" relative flex flex-col gap-[20px] justify-start">
            <div className="flex flex-col gap-[48px]">
              <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                <TextAnimation text="104" />
              </div>
              <div className="tracking-[1.5px] leading-[1.438rem] font-medium  min-h-[48px] whitespace-pre-line">
                {t("homeResult.universities.5.name")}
              </div>
            </div>
            <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
              {t("homeResult.universities.5.description")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
