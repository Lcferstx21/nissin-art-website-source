import { useTranslation } from "react-i18next";

export function Join() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center flex-col w-full relative py-[130px] px-[20px] md:px-20 lg:px-[156px] pb-[100px]">
      <div>
        <img src={`${import.meta.env.VITE_BASE_URL}join.png`} alt="" />
      </div>
      <div className="px-[100px] md:px-[150px] pt-[40px] text-[16px] leading-[33px] tracking-[1.5px] ">
        <div>{t("join.welcomeMessage")}</div>
        <div className="pb-[40px]">{t("join.instruction")}</div>
        <a
          href="/nissin.pdf" // 文件路径
          download="nissin job posting.pdf" // 下载时显示的文件名
          className="underline"
        >
          {t("join.downloadLinkText")}
        </a>
      </div>
    </div>
  );
}
export default Join;
