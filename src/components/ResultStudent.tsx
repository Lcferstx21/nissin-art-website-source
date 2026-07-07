import { ArrowUp, Minus, Play, Plus, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ResultsStudentProps {
  studentName: string;
  School: string;
  studentContentA: string;
  studentContentB: string;
  videoLink: string;
  videoCover: string;
}

export function ResultsStudent({
  studentName,
  School,
  studentContentA,
  studentContentB,
  videoLink,
  videoCover,
}: ResultsStudentProps) {
  const { t } = useTranslation();

  const [istoggled, setIsToggled] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const [isFading, setIsFading] = useState(false); // 控制图片的淡出状态

  const handleClick = () => {
    setIsFading(true);
    setTimeout(() => {
      setShowIframe(true);
    }, 100);
  };

  return (
    <div className="relative pt-[60px] flex flex-col">
      {/* 基本信息 */}

      {/* 移动端 */}
      <div className="grid grid-cols-4 gap-[50px] pb-[30px]  md:hidden ">
        <div className="relative col-span-3 w-full bg-white felx flex-col">
          <>
            {!showIframe && (
              <div
                onClick={handleClick}
                className="absolute bottom-[45px] right-[10px] z-10 bg-white rounded-full p-[10px] cursor-pointer "
              >
                <Play className="w-[20px] aspect-video" />
              </div>
            )}

            {!showIframe && (
              <img
                src={videoCover}
                onClick={handleClick}
                className={`w-full z-9 absolute transition-opacity duration-300 ease-in-out ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              />
            )}
            <div className="w-full h-[142px]"></div>
            {showIframe && (
              <iframe
                src={`${videoLink}?autoplay=1`}
                allowFullScreen={true}
                allow="autoplay; encrypted-media"
                className="w-full absolute top-0   bg-slate-200  aspect-video z-1"
              />
            )}
          </>
          <div className="font-normal text-xs flex pt-[25px] tracking-[2px] text-neutral-400">
            {showIframe ? (
              <div
                onClick={() => {
                  setTimeout(() => {
                    setIsFading(false);
                  }, 100);
                  setShowIframe(false);
                }}
                className="flex"
              >
                <X className="w-[15px] h-[15px]" />
                {t("results.close")}
              </div>
            ) : (
              <div className="flex cursor-pointer" onClick={handleClick}>
                <ArrowUp className="w-[15px] h-[15px]" />
                <div>{t("results.play")}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-12 gap-[24px]">
        <div className="hidden md:block md:col-span-3">
          {
            !istoggled && (
              <div className="relative w-full bg-white felx flex-col">
                <>
                  {!showIframe && (
                    <div
                      onClick={handleClick}
                      className="absolute bottom-[45px] right-[10px] z-10 bg-white rounded-full p-[10px] cursor-pointer "
                    >
                      <Play className="w-[20px] h-[20px]" />
                    </div>
                  )}

                  {!showIframe && (
                    <img
                      src={videoCover}
                      onClick={handleClick}
                      className={`w-full cursor-pointer z-9 absolute transition-opacity duration-300 ease-in-out ${
                        isFading ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  )}
                  <div className="w-full aspect-video"></div>
                  {showIframe && (
                    <iframe
                      src={`${videoLink}?autoplay=1`}
                      allowFullScreen={true}
                      allow="autoplay; encrypted-media"
                      className="w-full absolute top-0   bg-slate-200  aspect-video z-1"
                    />
                  )}
                </>
                <div
                  className={`font-normal text-xs flex pt-[25px] tracking-[2px] text-neutral-400 ${
                    showIframe ? "justify-end" : ""
                  }`}
                >
                  {showIframe ? (
                    <div
                      onClick={() => {
                        setTimeout(() => {
                          setIsFading(false);
                        }, 100);
                        setShowIframe(false);
                      }}
                      className="flex cursor-pointer"
                    >
                      {t("results.close")}
                      <X className="w-[15px] h-[15px]" />
                    </div>
                  ) : (
                    <div className="flex cursor-pointer" onClick={handleClick}>
                      <ArrowUp className="w-[15px] h-[15px]" />
                      <div>
                        <div>{t("results.play")}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              // <iframe
              //   src={videoLink}
              //   allowFullScreen={true}
              //   className="w-full  bg-slate-200  aspect-video "
              // />
            )
            // <img className="w-full h-[168px] bg-slate-300" />
          }
        </div>

        <div className="hidden md:block col-span-1"></div>

        <div className="col-span-12 pr-[50px] md:pr-0 md:col-span-6 flex flex-col gap-[20px] ">
          <div className="text-[20px] tracking-[2px] leading-[30px] font-medium">
            {studentName}
          </div>

          <div className="text-[12px] font-normal tracking-[2px] leading-[20px] md:leading-[30px] whitespace-pre-wrap">
            {School}
          </div>

          <div className="text-[14px] md:text-[16px]  tracking-[1.5px] leading-[25px] md:leading-[33px] font-medium text-justify inline-block ">
            {studentContentA}
          </div>
        </div>
        <div className="hidden md:col-span-2 md:flex justify-end">
          <button onClick={() => setIsToggled(!istoggled)}>
            {istoggled ? <Minus /> : <Plus />}
          </button>
        </div>
      </div>

      {/* 展开的 */}
      {istoggled && (
        <div className="relative grid grid-cols-12 gap-[24px] pt-[40px]">
          <div className="col-span-4"></div>
          <div className="col-span-8 flex flex-col gap-[40px]">
            <div className="text-[13px] font-normal tracking-[1.5px] leading-[25px]">
              {studentContentB}
            </div>
            <div>
              <iframe
                src={videoLink + "&autoplay=0"}
                allowFullScreen={true}
                className="w-full  aspect-video  min-h-[383px] bg-slate-200"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
