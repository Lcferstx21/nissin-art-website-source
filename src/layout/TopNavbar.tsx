import { Menu, X } from "lucide-react";
import nissinLogo from "../assets/logo.svg";
import logoMark from "../assets/logomarknishin.svg";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DropdownMenu } from "./DropdownMenu";
import { throttle } from "lodash"; // 引入lodash的throttle
import { useTranslation } from "react-i18next";
import i18n from "i18next";
// import beian from "../assets/beianlogo.png";

type TopNavbarProps = {
  showHeader: boolean;
};

export function TopNavbar({ showHeader }: TopNavbarProps) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // 用于控制logo大小
  const [isExpanded, setIsExpanded] = useState(false); // 用于控制导航栏是否展开

  const location = useLocation();

  // 使用节流处理滚动事件
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 500); // 100ms节流

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 每次路由变化时滚动到页面顶部
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // 关闭菜单
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      // 禁用滚动
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      // 恢复滚动
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  // 控制导航栏伸缩
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };
  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  // 切换语言
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
      className={`top-0 left-0 z-[600] ${showHeader ? "sticky top-0 left-0" : "relative"} transition-all duration-300`}
    >
      <div
        className={`relative flex justify-between pt-[30px] px-8 md:px-12 bg-white lg:pr-[80px] lg:pl-[87px] transition-all duration-75 ${
          isScrolled
            ? isExpanded
              ? "pb-[50px]" // 页面滚动且悬浮时加大padding
              : "pb-[10px]" // 页面滚动时但没有悬浮保持较小padding
            : "pb-[10px]" // 页面在顶部时保持固定padding
        }`}
      >
        {/* 左侧logo */}
        <div className="flex-grow flex items-start min-w-0  z-50  ">
          <a href={`${import.meta.env.VITE_BASE_URL}`}>
            <img
              src={nissinLogo}
              className={`transition-all duration-300 ${
                isScrolled ? "w-[70px] h-auto" : "w-[115px] h-[125px]"
              } object-contain`}
            />
          </a>
        </div>

        {/* 手机端菜单按钮 */}
        <Button
          className="md:hidden"
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* 网页端文字按钮 */}
        <div className="hidden md:flex ml-[4rem] gap-[1.5rem] lg:gap-[80px] items-start pt-[10px] ">
          {/* 含子菜单大按钮 */}
          <div className="flex gap-[1rem] lg:gap-[2rem]">
            <DropdownMenu
              linkTo="/aboutus"
              label={t("navbar.about")}
              links={[
                { label: t("navbar.sub_message"), path: "messageW" },
                {
                  label: t("navbar.sub_coreAdvantages"),
                  path: "coreAdvantagesW",
                },
                { label: t("navbar.sub_philosophy"), path: "philosophyW" },
              ]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <DropdownMenu
              linkTo="/results"
              label={t("navbar.results")}
              links={[
                {
                  label: t("navbar.sub_resultAchievements"),
                  path: "resultAchievements",
                },
                { label: t("navbar.sub_interviews"), path: "interviews" },
              ]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <DropdownMenu
              linkTo="/team"
              label={t("navbar.team")}
              links={[
                { label: t("navbar.sub_dc"), path: "dc" },
                { label: t("navbar.sub_fa"), path: "fa" },
                { label: t("navbar.sub_de"), path: "de" },
                { label: t("navbar.sub_acg"), path: "acg" },
                { label: t("navbar.sub_ca"), path: "ca" },
              ]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <DropdownMenu
              linkTo="/schedule"
              label={t("navbar.schedule")}
              links={[
                { label: t("navbar.sub_kcts"), path: "kcts" },
                { label: t("navbar.sub_sxzd"), path: "sxzd" },
                { label: t("navbar.sub_xbkc"), path: "xbkc" },
                { label: t("navbar.sub_dxykc"), path: "dxykc" },
              ]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          {/* 小按钮 */}
          <div className="flex gap-[1rem] lg:gap-[2rem]">
            <Link to="/contact">
              <Button size="btnS" variant="underline">
                {t("navbar.contact")}
              </Button>
            </Link>
            <Link to="/join">
              <Button size="btnS" variant="underline">
                {t("navbar.join")}
              </Button>
            </Link>
            <Link to="/qa">
              <Button size="btnS" variant="underline">
                {t("navbar.qa")}
              </Button>
            </Link>
          </div>

          <div>
            <div className="flex gap-2">
              <Button
                size="language"
                variant={i18n.language === "zh" ? "language" : undefined}
                onClick={() => i18n.changeLanguage("zh")}
              >
                CN
              </Button>
              <Button
                size="language"
                variant={i18n.language === "ja" ? "language" : undefined}
                onClick={() => i18n.changeLanguage("ja")}
              >
                JP
              </Button>
              <Button
                size="language"
                variant={i18n.language === "en" ? "language" : undefined}
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 手机端菜单页 */}
      <div
        className={`flex flex-col fixed inset-0 z-[101] bg-white  transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between px-[32px] pt-[16px]">
          {/* logo */}
          <a href={`${import.meta.env.VITE_BASE_URL}`}>
            <img
              src={nissinLogo}
              className="transition-all duration-300 w-[70px] h-auto object-contain"
            />
          </a>
          <Button
            className="md:hidden"
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <div className="grid grid-cols-2 h-full">
          {/* btn */}
          <div className="flex flex-col gap-[50px] pl-[40px] pb-[20px] justify-end">
            <div className="flex flex-col gap-5 sm:gap-8 flex-shrink-0">
              <Link to={"/aboutus"}>
                <Button size="btnL" variant="underline">
                  {t("navbar.about")}
                </Button>
              </Link>

              <Link to={"/results"}>
                <Button size="btnL" variant="underline">
                  {t("navbar.results")}
                </Button>
              </Link>
              <Link to={"/team"}>
                <Button size="btnL" variant="underline">
                  {t("navbar.team")}
                </Button>
              </Link>
              <Link to={"/schedule"}>
                <Button size="btnL" variant="underline">
                  {t("navbar.schedule")}
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <Link to={"/contact"}>
                <Button size="btnS" variant="underline">
                  {t("navbar.contact")}
                </Button>
              </Link>
              <Link to={"/join"}>
                <Button size="btnS" variant="underline">
                  {t("navbar.join")}
                </Button>
              </Link>

              <Link to={"/qa"}>
                <Button size="btnS" variant="underline">
                  {t("navbar.qa")}
                </Button>
              </Link>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => changeLanguage("zh")}
                size="language"
                variant={i18n.language === "zh" ? "language" : undefined}
              >
                CN
              </Button>
              |
              <Button
                onClick={() => changeLanguage("ja")}
                size="language"
                variant={i18n.language === "ja" ? "language" : undefined}
              >
                JP
              </Button>
              |
              <Button
                onClick={() => changeLanguage("en")}
                size="language"
                variant={i18n.language === "en" ? "language" : undefined}
              >
                EN
              </Button>
            </div>

            <img src={logoMark} className="max-w-[40px] h-auto" />
          </div>
        </div>

        {/* 备案信息 */}
        {/* <div className="text-xs font-thin pl-[40px] pb-[20px]">
          <span className="whitespace-pre-wrap">
            {t("pageBottom.copyright")}
          </span>
          <p>
            <a href="https://beian.miit.gov.cn/" target="_blank">
              粤ICP备2025364934号-1
            </a>
          </p>{" "}
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
    </div>
  );
}
