import { ResultsStudent } from "../components/ResultStudent";
import { ResultData } from "../components/ResultData";
import { ResultDataEn } from "../components/ResultDataEn";
import { ResultDataJa } from "../components/ResultDataJa";

import TextAnimation from "../components/TextAnimation";
import AnimatedNumber from "../components/AnimatedNumber";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../ i18n";

export function Results() {
  const { t } = useTranslation();

  const dataNow = (() => {
    switch (i18n.language) {
      case "zh":
        return ResultData;
      case "en":
        return ResultDataEn;
      case "ja":
        return ResultDataJa;
      default:
        return ResultData;
    }
  })();

  // 创建 ref 来定位到每个部分
  const resultAchievementsRef = useRef<HTMLDivElement>(null);
  const interviewsRef = useRef<HTMLDivElement>(null);

  // 使用 state 来保存当前可见的部分
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    console.log("Active section changed to:", activeSection); // 输出当前的activeSection
  }, [activeSection]);

  // 使用 IntersectionObserver 监听滚动事件
  useEffect(() => {
    const options = {
      root: null, // 视口
      rootMargin: "0px", // 视口上下边缘的偏移量
      threshold: 0.1, // 目标进入视口 10% 时触发
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // 根据元素的 id 设置当前可见部分
        }
      });
    }, options);

    // 监听每个部分
    const sections = [resultAchievementsRef, interviewsRef];
    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    // 清除观察器
    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []);

  // 滚动到相应的部分
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const yOffset = -180; // 导航栏的高度偏移
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col w-full items-center gap-[128px] pb-[104px] px-[20px] md:px-[156px]">
      {/* 侧边导航栏 */}{" "}
      {i18n.language === "zh" && (
        <div className="flex md:hidden fixed top-[200px] right-[10px] flex-col gap-[50px] z-[10]">
          <div className="rotate-90 text-[12px] tracking-[1.12px] w-[56px] font-medium">
            {t("results.sidebarTitle")}
          </div>
          <div className="flex flex-col justify-start gap-[60px] items-center font-normal">
            {/* 合格实绩 */}
            <div
              className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
                activeSection === "resultAchievements"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
              onClick={() => scrollToSection(resultAchievementsRef)}
            >
              {t("results.achievements")}
            </div>

            {/* 合格采访 */}
            <div
              className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
                activeSection === "interviews"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
              onClick={() => scrollToSection(interviewsRef)}
            >
              {t("results.interviews")}
            </div>
          </div>
        </div>
      )}
      <div
        className="flex flex-col gap-[128px]"
        ref={resultAchievementsRef}
        id="resultAchievements"
      >
        <div className="relative w-full pt-[80px] flex flex-col-reverse px-[50px] gap-[30px] md:gap-0 md:flex-row md:justify-between md:px-0">
          <img
            className="absolute top-[0%] -left-[30%] md:left-auto md:right-[0%] max-w-full h-auto object-cover"
            src={`${import.meta.env.VITE_BASE_URL}zIe1KM.svg`}
            alt=""
          />
          <div className="text-[13px] leading-[28px] tracking-[1.12px] md:text-[16px] md:tracking-[1.5px] md:leading-[2.063rem] font-medium">
            <p className="m-0">{t("results.introText1")}</p>
            <p className="m-0">{t("results.introText2")}</p>
            <p className="m-0">{t("results.introText3")}</p>
          </div>
          <div>
            <AnimatedNumber />
            <span className="text-[20px] leading-[23px] tracking-[1.5px] pl-2">
              {t("results.totalAchievements")}
            </span>
          </div>
        </div>

        <div className="w-full relative px-[10%]">
          <div className="flex flex-row items-start justify-center flex-wrap content-start gap-y-[40px] gap-x-[4.5rem] text-center whitespace-pre-line">
            {[
              {
                number: "116",
                title: "topArtUniversities",
                description: "topArtUniversitiesDesc",
              },
              {
                number: "160",
                title: "tokyoArtUniversities",
                description: "tokyoArtUniversitiesDesc",
              },
              {
                number: "104",
                title: "kansaiArtUniversities",
                description: "kansaiArtUniversitiesDesc",
              },
              {
                number: "40",
                title: "nationalPublicUniversities",
                description: "nationalPublicUniversitiesDesc",
              },
              {
                number: "14",
                title: "prestigiousPrivateUniversities",
                description: "prestigiousPrivateUniversitiesDesc",
              },
              {
                number: "104",
                title: "fashionUniversities",
                description: "fashionUniversitiesDesc",
              },
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[48px]">
                  <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium text-black text-center">
                    <TextAnimation text={item.number} />
                  </div>
                  <div className="tracking-[1.5px] leading-[1.438rem] font-medium min-h-[48px]">
                    {t(`results.${item.title}`)}
                  </div>
                </div>
                <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[250px] md:w-[13.5rem]">
                  {t(`results.${item.description}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 合格采访 */}
      <div className="flex flex-col" ref={interviewsRef} id="interviews">
        <div className="grid grid-cols-12 gap-[24px] relative">
          <div className="col-span-12 md:col-span-3 text-[24px] md:text-[36px] tracking-[10px] md:tracking-[2px]">
            {t("results.interviewsTitle")}
          </div>
          <div className="hidden col-span-9 top-[0rem] left-[18rem] text-[15px] tracking-[1.5px] leading-[2.063rem] font-medium text-justify md:inline-block w-[52.5rem]">
            {t("results.interviewsIntro")}
          </div>
        </div>

        <div>
          {dataNow.map((data) => (
            <ResultsStudent
              key={data.no}
              studentName={data.studentName}
              School={data.School}
              studentContentA={data.studentContentA}
              studentContentB={data.studentContentB}
              videoLink={data.videoLink}
              videoCover={data.videoCover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
