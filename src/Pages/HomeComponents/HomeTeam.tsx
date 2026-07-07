import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ArrowRight } from "lucide-react";
import { TeamW } from "../../components/TeamW";
import { useTranslation } from "react-i18next";

export function HomeTeam() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-[46px] relative  w-full bg-white ">
      {/* 按钮和主题 */}
      <div className="relative flex justify-between z-[1] ">
        {/* 主题 */}
        <div>
          <div className="h-[60px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-medium text-black text-4xl tracking-[20.00px] leading-[60px] whitespace-nowrap">
            {t("homeTeam.title")}
          </div>
          <div className="w-auto relative text-[0.938rem] tracking-[1.12px] leading-[3.75rem] font-medium font-noto-sans-sc text-black whitespace-pre-wrap text-center flex items-center justify-center h-[3.5rem]">
            {t("homeTeam.subtitle")}
          </div>
        </div>
        {/* 右箭头按钮 */}
        <div className="ml-auto flex-shrink-0">
          <Link to="/team">
            <Button variant="ghost" size="icon">
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      {/* 师资团队 */}

      <div className="flex flex-col gap-[60px]">
        <TeamW category="博士" categoryTitle={t("team.categoryTitle.doctor")} />
        <TeamW
          category="纯艺方向"
          categoryTitle={t("team.categoryTitle.fineArts")}
        />
        <TeamW
          category="设计方向"
          categoryTitle={t("team.categoryTitle.design")}
        />
        <TeamW
          category="ACG数媒电影"
          categoryTitle={t("team.categoryTitle.acg")}
        />
        <TeamW
          category="文化艺术方向"
          categoryTitle={t("team.categoryTitle.culturalArts")}
        />
      </div>
    </div>
  );
}
