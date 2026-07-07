import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import nissinCode from "../assets/nissinCode.png";
// import beian from "../assets/beianlogo.png";

export function PageBottom() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滚动
    });
  };

  return (
    <div className="flex flex-col z-[100]">
      <div className="w-full relative flex flex-col items-center justify-center text-center text-[0.813rem] text-black font-noto-sans-sc">
        <button
          onClick={scrollToTop}
          className="w-[1.5rem] relative h-[1.5rem] object-contain"
        >
          <ArrowUp />
        </button>
        <div className="self-stretch relative tracking-[1.12px] leading-[1.875rem] font-medium flex items-center justify-center h-[3.313rem] shrink-0">
          {t("pageBottom.backToTop")}
        </div>
      </div>

      <div className="w-full relative bg-[#F5F5F5] h-auto md:h-[32rem] flex flex-col items-center justify-center py-[36px] md:py-[2.562rem] px-[1rem] md:px-[9.375rem] box-border text-center text-[0.813rem] text-black font-noto-sans-sc z-[9]">
        <div className="w-full flex flex-col items-center justify-start gap-[1.937rem]">
          <img
            className="w-[3.75rem] relative h-[3.775rem] object-cover"
            alt=""
            src={`${import.meta.env.VITE_BASE_URL}logomarknishin.svg`}
          />
          <div className="w-full flex flex-col relative h-[9rem] justify-center items-center">
            <div className="tracking-[1.12px] leading-[1.875rem] font-medium justify-center h-[3.313rem]">
              {t("pageBottom.followUs")}
            </div>
            <img
              src={nissinCode}
              className="w-[80px] pb-[5px] py-[10px]"
              alt=""
            />
            <div className="pb-[15px]">WeChat: wingphoenix01</div>

            <div className="top-[3.313rem] left-[28.813rem] flex flex-row items-center justify-center gap-[2.25rem]">
              <a
                href="https://mp.weixin.qq.com/s/-QiUBWRfGR0Z7P6oVTpKZA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[1.5rem] relative h-[1.5rem] object-cover"
                  alt=""
                  src={`${import.meta.env.VITE_BASE_URL}image 12.png`}
                />
              </a>

              <a
                href="https://m.weibo.cn/u/6548754675?wm=3333_2001&from=10E7193010&sourcetype=weixin&s_trans=6548754675_&s_channel=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[1.5rem] relative h-[1.5rem] object-cover"
                  alt=""
                  src={`${import.meta.env.VITE_BASE_URL}image 11.png`}
                />
              </a>

              <a
                href="https://space.bilibili.com/431545873"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[1.688rem] relative h-[1.688rem] object-cover"
                  alt=""
                  src={`${import.meta.env.VITE_BASE_URL}image 15.png`}
                />
              </a>

              <a
                href="https://www.xiaohongshu.com/user/profile/5eba3ba00000000001005dac?xhsshare=WeixinSession&appuid=5eba3ba00000000001005dac&apptime=1722331307&share_id=18d154516954411cb2d0aa5c4a4c742d&exSource="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[1.75rem] relative h-[0.619rem] object-cover"
                  alt=""
                  src={`${import.meta.env.VITE_BASE_URL}xiaohongshu 1.png`}
                />
              </a>
            </div>
          </div>
          <div className="relative min-h-[3.313rem] text-[0.875rem]">
            <div className="tracking-[1.12px] leading-[1.875rem] flex items-center min-h-[3.313rem] ">
              <span className="w-full">
                <p className="m-0">
                  <span>
                    <span className="font-semibold font-noto-sans-sc">
                      {t("pageBottom.tokyoCampus")}
                    </span>
                    <br className="lg:hidden" />
                    <span className="hidden lg:inline-block">
                      &nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="font-normal font-noto-sans-sc">
                      {t("pageBottom.tokyoAddress")}
                    </span>
                    <br />
                    <span className="font-semibold font-noto-sans-sc">
                      {t("pageBottom.guangzhouCampus")}
                    </span>
                    <br className="lg:hidden" />
                    <span className="hidden lg:inline-block">
                      &nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="font-normal  font-noto-sans-sc">
                      {t("pageBottom.guangzhouAddress")}
                    </span>
                  </span>
                </p>

                <p className="font-bold">广州日进国际文化传播有限公司</p>

                {/* 备案信息 */}
                {/* <p className="m-0  text-[0.625rem]">
                  <span className="whitespace-pre-wrap">
                    {t("pageBottom.copyright")}
                  </span>
                  <span>
                    <a href="https://beian.miit.gov.cn/" target="_blank">
                      粤ICP备2025364934号-1
                    </a>
                  </span>
                  <p>
                    <img
                      src={beian}
                      alt=""
                      className="w-4 inline-block align-middle"
                    />
                    <a
                      href="https://beian.mps.gov.cn/#/query/webSearch?code=44010602013454"
                      rel="noreferrer"
                      target="_blank"
                    >
                      粤公网安备44010602013454号
                    </a>
                  </p>
                </p> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
