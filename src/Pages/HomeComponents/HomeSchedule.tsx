import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function HomeSchedule() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-[47px] relative  w-full bg-white ">
      {/* 按钮和主题 */}
      <div className="relative flex justify-between z-[1] ">
        {/* 主题 */}
        <div>
          <div className="h-[60px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-medium text-black text-4xl tracking-[20.00px] leading-[60px] whitespace-nowrap">
            {t("schedule.pageTitle")}
          </div>
          <div className="relative text-[0.938rem] tracking-[1.12px] leading-[3.75rem] font-medium font-noto-sans-sc text-black whitespace-pre-wrap text-left flex items-center h-[3.5rem]">
            {t("schedule.kcts.sectionTitle")}
            &nbsp;&nbsp;|&nbsp;&nbsp; {t("schedule.xbkc.sectionTitle")}
            &nbsp;&nbsp;|&nbsp;&nbsp; {t("schedule.dxykc.sectionTitle")}
          </div>
        </div>
        {/* 右箭头按钮 */}
        <div className="ml-auto flex-shrink-0">
          <Link to="/schedule">
            <Button variant="ghost" size="icon">
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-[24px] ">
        <div className="col-span-3"></div>
        <div className="col-span-9 tracking-[1.5px] leading-[2.063rem] text-[1rem] font-medium">
          {t("schedule.TitleText")}
        </div>
      </div>

      <div className="hidden md:grid grid-cols-12 gap-[24px] pt-[20px]">
        <div className="col-span-3">
          <div className="text-[2.25rem] tracking-[2px] font-medium text-nowrap"></div>
        </div>

        <div className="col-span-9 relative grid grid-cols-3 gap-[24px] ">
          <div className=" flex flex-col gap-[24px] relative">
            <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
              {t("schedule.kcts.studentOriented.title")}
            </div>
            <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
              {t("schedule.kcts.studentOriented.description")}
            </div>
            <img
              className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
              src={`${import.meta.env.VITE_BASE_URL}navigate_next.svg`}
            />
          </div>
          <div className=" flex flex-col gap-[24px] relative">
            <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
              {t("schedule.kcts.taskTeaching.title")}
            </div>
            <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
              {t("schedule.kcts.taskTeaching.description")}
            </div>
            <img
              className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
              src={`${import.meta.env.VITE_BASE_URL}navigate_next.svg`}
            />
          </div>
          <div className=" flex flex-col gap-[24px] relative">
            <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
              {t("schedule.kcts.practiceMode.title")}
            </div>
            <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
              {t("schedule.kcts.practiceMode.description")}
            </div>
            <img
              className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
              src={`${import.meta.env.VITE_BASE_URL}navigate_next.svg`}
            />
          </div>
          <div className=" flex flex-col gap-[24px] relative">
            <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
              {t("schedule.kcts.coreSkills.title")}
            </div>
            <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
              {t("schedule.kcts.coreSkills.description")}
            </div>
            <img
              className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
              src={`${import.meta.env.VITE_BASE_URL}navigate_next.svg`}
            />
          </div>

          <div className=" flex flex-col gap-[24px] relative">
            <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
              {t("schedule.kcts.immersiveSimulation.title")}
            </div>
            <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
              {t("schedule.kcts.immersiveSimulation.description")}
            </div>
            <img
              className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
              src={`${import.meta.env.VITE_BASE_URL}navigate_next.svg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
