import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import nissinLogo from "../assets/logo.svg";
// import beian from "../assets/beianlogo.png";
import logoMark from "../assets/logomarknishin.svg";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export function MobileHome() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col relative inset-0 z-[101] bg-white h-svh">
      <div className="flex justify-between px-[32px] pt-[16px]">
        {/* logo */}
        <a href={`${import.meta.env.VITE_BASE_URL}`}>
          <img
            src={nissinLogo}
            className="transition-all duration-300 w-[70px] h-auto object-contain"
          />
        </a>
      </div>

      <div className="grid grid-cols-2 h-full">
        {/* btn */}
        <div className="flex flex-col gap-[50px] pl-[40px] pb-[20px] justify-end">
          <div className="flex flex-col gap-5 sm:gap-8 flex-shrink-0">
            <Link to={"/aboutus"}>
              <Button size="btnL" variant="underline">
                {t("mobileHome.aboutUs")}
              </Button>
            </Link>

            <Link to={"/results"}>
              <Button size="btnL" variant="underline">
                {t("mobileHome.results")}
              </Button>
            </Link>
            <Link to={"/team"}>
              <Button size="btnL" variant="underline">
                {t("mobileHome.team")}
              </Button>
            </Link>
            <Link to={"/schedule"}>
              <Button size="btnL" variant="underline">
                {t("mobileHome.schedule")}
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <Link to={"/contact"}>
              <Button size="btnS" variant="underline">
                {t("mobileHome.contact")}
              </Button>
            </Link>
            <Link to={"/join"}>
              <Button size="btnS" variant="underline">
                {t("mobileHome.join")}
              </Button>
            </Link>

            <Link to={"/qa"}>
              <Button size="btnS" variant="underline">
                {t("mobileHome.faq")}
              </Button>
            </Link>
          </div>

          <div className="flex gap-2">
            <Button
              size="language"
              variant={i18n.language === "zh" ? "language" : undefined}
              onClick={() => i18n.changeLanguage("zh")}
            >
              CN
            </Button>
            |
            <Button
              size="language"
              variant={i18n.language === "ja" ? "language" : undefined}
              onClick={() => i18n.changeLanguage("ja")}
            >
              JP
            </Button>
            |
            <Button
              size="language"
              variant={i18n.language === "en" ? "language" : undefined}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </Button>
          </div>
          <div className="flex gap-2 items-center">
            <img src={logoMark} className="max-w-[40px] h-auto" />
            {/* <div className="text-xs font-light text-nowrap">
              广州日进国际文化传播有限公司
            </div> */}
          </div>
        </div>
      </div>

      {/* 备案信息 */}
      {/* <div className="text-xs font-thin pl-[40px] pb-[20px]">
        <span className="whitespace-pre-wrap">{t("pageBottom.copyright")}</span>
        <p>
          <a href="https://beian.miit.gov.cn/" target="_blank">
            粤ICP备2025364934号-1
          </a>
        </p>
        <p>
          <img src={beian} alt="" className="w-4 inline-block align-middle" />
          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=44010602013454"
            rel="noreferrer"
            target="_blank"
          >
            粤公网安备44010602013454号
          </a>
        </p>
      </div> */}
    </div>
  );
}
