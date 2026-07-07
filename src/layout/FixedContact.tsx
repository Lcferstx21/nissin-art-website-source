import { MessageCircleMore, ArrowUpToLine } from "lucide-react";
import nissinCode from "../assets/nissinCode.png";
import { useTranslation } from "react-i18next";

type FixedContactProps = {
  showHeader: boolean;
};

export function FixedContact({ showHeader }: FixedContactProps) {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滚动
    });
  };
  return (
    <div
      className={`z-[8] flex gap-4 md:gap-6 flex-col justify-center items-center bottom-[5px] left-[5px] md:bottom-[20px] md:left-[20px] z-[100]rounded-md p-3 ${showHeader ? "fixed" : "hidden"}`}
    >
      <div className="bg-neutral-100 rounded  w-[40px] h-[40px] md:w-[70px] md:h-[70px] flex items-center justify-center flex-col group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
        <img src={nissinCode} className="hidden group-hover:block" alt="" />
        <MessageCircleMore className="w-10 md:w-12" />
        <div className="text-[8px] md:text-[13px] group-hover:hidden">
          {t("navbar.contact")}
        </div>
        <div className="text-[10px] md:text-[13px] hidden group-hover:block ">
          WeChat
        </div>
      </div>

      <button
        className="bg-neutral-100 rounded  w-[40px] h-[40px] md:w-[70px] md:h-[70px] flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
        onClick={scrollToTop}
      >
        <ArrowUpToLine className="w-6 md:w-12" />
      </button>
    </div>
  );
}
