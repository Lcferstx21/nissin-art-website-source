import { useEffect, useRef, useState } from "react";
import TextAnimation from "../components/TextAnimation";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export function Schedule() {
  const { t } = useTranslation();

  // 创建 ref 来定位到每个部分
  const kctsRef = useRef<HTMLDivElement>(null);
  const sxzdRef = useRef<HTMLDivElement>(null);
  const xbkcRef = useRef<HTMLDivElement>(null);
  const dxykcRef = useRef<HTMLDivElement>(null);

  // 使用 state 来保存当前可见的部分
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    console.log("Active section changed to:", activeSection); // 输出当前的activeSection
  }, [activeSection]);
  useEffect(() => {
    console.log(kctsRef.current); // 应该输出对应的 DOM 元素
    console.log(sxzdRef.current);
    console.log(xbkcRef.current);
    console.log(dxykcRef.current);
  }, []);

  // 使用 IntersectionObserver 监听滚动事件
  useEffect(() => {
    const options = {
      root: null, // 视口
      rootMargin: "-100px", // 视口上下边缘的偏移量
      threshold: 0.1, // 目标进入视口 50% 时触发
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Intersecting section:", entry.target.id);
          setActiveSection(entry.target.id); // 根据元素的 id 设置当前可见部分
        }
      });
    }, options);

    // 监听每个部分
    const sections = [kctsRef, sxzdRef, xbkcRef, dxykcRef];
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

  // 修改后的滚动函数，带有偏移量
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const yOffset = -180; // 导航栏的高度偏移
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full relative  pt-[30px] flex flex-col">
      {/* 侧边导航栏 */}
      {i18n.language === "zh" && (
        <div className="fixed md:hidden top-[200px] right-[10px] flex flex-col gap-[50px] z-[10]">
          <div className="rotate-90 text-[12px] tracking-[1.12px] w-[66px] font-medium">
            {t("schedule.pageTitle")}
          </div>
          <div className="flex  flex-col justify-start gap-[60px] items-center font-normal">
            <div
              className={`rotate-90 text-[12px] tracking-[1.12px] 
               inline-block relative ${
                 activeSection === "kcts"
                   ? "after:scale-x-100"
                   : "after:scale-x-0"
               } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
              onClick={() => scrollToSection(kctsRef)}
            >
              {t("schedule.kcts.sectionTitle")}
            </div>

            <div
              className={`rotate-90 text-[12px] tracking-[1.12px] 
               inline-block relative ${
                 activeSection === "sxzd"
                   ? "after:scale-x-100"
                   : "after:scale-x-0"
               } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
              onClick={() => scrollToSection(sxzdRef)}
            >
              {t("schedule.sxzd.sectionTitle")}
            </div>

            <div
              className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
                activeSection === "xbkc"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
              onClick={() => scrollToSection(xbkcRef)}
            >
              {t("schedule.xbkc.sectionTitle")}
            </div>

            <div
              className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
                activeSection === "dxykc"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
              onClick={() => scrollToSection(dxykcRef)}
            >
              {t("schedule.dxykc.sectionTitle")}
            </div>
          </div>
        </div>
      )}
      <div className="relative flex flex-col">
        <div className="pr-[70px] md:pr-0 w-full flex overflow-clip justify-center">
          <img
            className="hidden md:block w-[45.75rem] h-[22.875rem] object-cover"
            alt=""
            src={`${import.meta.env.VITE_BASE_URL}JZH04855-HDR 1.png`}
          />
          <img
            className=" w-[44.25rem] h-[22.938rem] object-cover"
            src={`${import.meta.env.VITE_BASE_URL}JZH04304 1.png`}
          />
        </div>

        <div className="w-full px-[20px] md:px-[100px] lg:px-[156px] flex flex-col gap-[100px pt-[60px]">
          <div>
            {/* 网页端 */}
            <div className="hidden md:grid grid-cols-12 gap-[24px]">
              <div className="col-span-3"></div>
              <div className="col-span-9 tracking-[1.5px] leading-[2.063rem] font-medium w-full  whitespace-pre-line">
                {t("schedule.TitleText")}
              </div>
            </div>

            {/* 手机端 */}
            <div className="md:hidden px-[50px] tracking-[1.5px] leading-[2.063rem] font-medium whitespace-pre-line">
              {t("schedule.TitleText")}
            </div>
          </div>

          {/* 课程特色网页端 */}
          <div ref={kctsRef} id="kcts">
            <div className="hidden md:grid grid-cols-12 gap-[24px] pt-[80px]">
              <div className="col-span-3">
                <div className="text-[2.25rem] tracking-[2px] font-medium text-nowrap">
                  <TextAnimation
                    text={t("schedule.kcts.sectionTitle")}
                  ></TextAnimation>
                </div>
              </div>

              <div className="col-span-9 relative grid grid-cols-3 gap-[24px] pt-[10px]">
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

            {/* 课程特色手机端 */}
            <div className="flex md:hidden flex-col gap-[50px] pt-[64px]">
              <div className="text-[20px] md:text-[2.25rem] tracking-[10px] md:tracking-[2px] leading-[3.75rem] font-medium">
                {t("schedule.kcts.sectionTitle")}
              </div>

              <div className="relative flex flex-col gap-[30px] pt-[10px] px-[50px]">
                <div className=" flex flex-col gap-[10px] relative">
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
                <div className=" flex flex-col gap-[10px] relative">
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
                <div className=" flex flex-col gap-[10px] relative">
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
                <div className=" flex flex-col gap-[10px] relative">
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

                <div className=" flex flex-col gap-[10px] relative">
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

          {/* 升学指导专攻 */}
          <div className="pt-[100px]" ref={sxzdRef} id="sxzd">
            <div className="text-[20px] md:text-[2.25rem] tracking-[10px] md:tracking-[2px] leading-[3.75rem] font-medium">
              <TextAnimation
                text={t("schedule.sxzd.sectionTitle")}
              ></TextAnimation>
            </div>

            <div className="px-[50px] md:px-0 flex flex-col md:grid grid-cols-4 gap-[24px] pt-[56px] ">
              <div className="flex flex-col gap-[24px]">
                <img
                  className="hidden md:block w-[16.5rem] h-[10.5rem] object-cover"
                  src={`${import.meta.env.VITE_BASE_URL}image 3.png`}
                />
                <img
                  src={`${import.meta.env.VITE_BASE_URL}sxzdP1.png`}
                  className="w-full md:hidden"
                />
                <div className="text-[16px] tracking-[1.12px] leading-[28px] font-medium">
                  {t("schedule.sxzd.fineArt.title")}
                </div>
                <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium">
                  {t("schedule.sxzd.fineArt.description")}
                </div>
              </div>
              <div className="flex flex-col gap-[24px]">
                <img
                  className="hidden md:block w-[16.5rem] h-[10.5rem] object-cover"
                  src={`${import.meta.env.VITE_BASE_URL}image 6.png`}
                />
                <img
                  src={`${import.meta.env.VITE_BASE_URL}sxzdP2.png`}
                  className="w-full  md:hidden"
                />
                <div className="text-[16px] tracking-[1.12px] leading-[28px] font-medium">
                  {t("schedule.sxzd.design.title")}
                </div>
                <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium">
                  {t("schedule.sxzd.design.description")}
                </div>
              </div>
              <div className="flex flex-col gap-[24px]">
                <img
                  className="hidden md:block w-[16.5rem] h-[10.5rem] object-cover"
                  src={`${import.meta.env.VITE_BASE_URL}image7.png`}
                />
                <img
                  src={`${import.meta.env.VITE_BASE_URL}sxzdP3.png`}
                  className="w-full  md:hidden"
                />
                <div className="text-[16px] tracking-[1.12px] leading-[28px] font-medium">
                  {t("schedule.sxzd.digitalMedia.title")}
                </div>
                <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium">
                  {t("schedule.sxzd.digitalMedia.description")}
                </div>
              </div>
              <div className="flex flex-col gap-[24px]">
                <img
                  className="hidden md:block w-[16.5rem] h-[10.5rem] object-cover"
                  src={`${import.meta.env.VITE_BASE_URL}image 8.png`}
                />
                <img
                  src={`${import.meta.env.VITE_BASE_URL}sxzdP4.png`}
                  className="w-full  md:hidden"
                />
                <div className="text-[16px] tracking-[1.12px] leading-[28px] font-medium">
                  {t("schedule.sxzd.literature.title")}
                </div>
                <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium">
                  {t("schedule.sxzd.literature.description")}
                </div>
              </div>
            </div>
          </div>

          {/* 学部课程 */}
          <div className="pt-[100px] pb-[80px]" ref={xbkcRef} id="xbkc">
            <div className="text-[20px] md:text-[2.25rem] tracking-[10px] md:tracking-[2px] leading-[3.75rem] font-medium">
              <TextAnimation text={t("schedule.xbkc.sectionTitle")} />
            </div>
            {/* 手机端学部课程 */}
            <div className="flex flex-col md:hidden gap-[56px]">
              {/* 素描课程 */}
              <div className="flex flex-col gap-[22px] pt-[30px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">
                    {t("schedule.xbkc.drawingCourse.title")}
                  </p>
                  <p className="tracking-[1.12px]">
                    {t("schedule.xbkc.drawingCourse.subtitle")}
                  </p>
                </div>
                <div className="text-[10px] tracking-[1.12px] leading-[18px]">
                  <p>{t("schedule.xbkc.drawingCourse.details.0")}</p>
                  <p>{t("schedule.xbkc.drawingCourse.details.1")}</p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  {t("schedule.xbkc.drawingCourse.description")}
                </div>
              </div>

              {/* 感觉试验 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">
                    {t("schedule.xbkc.visualExperimentation.title")}
                  </p>
                  <p className="tracking-[1.12px]">
                    {t("schedule.xbkc.visualExperimentation.subtitle")}
                  </p>
                </div>
                <div className="text-[10px] tracking-[1.12px] leading-[18px]">
                  <p>{t("schedule.xbkc.visualExperimentation.details.0")}</p>
                  <p>{t("schedule.xbkc.visualExperimentation.details.1")}</p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal whitespace-pre-line">
                  {t("schedule.xbkc.visualExperimentation.description")}
                </div>
              </div>

              {/* 设计课程 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">
                    {t("schedule.xbkc.designCourse.title")}
                  </p>
                  <p className="tracking-[1.12px]">
                    {t("schedule.xbkc.designCourse.subtitle")}
                  </p>
                </div>
                <div className="text-[10px] tracking-[1.12px] leading-[18px]">
                  <p>{t("schedule.xbkc.designCourse.details.0")}</p>
                  <p>{t("schedule.xbkc.designCourse.details.1")}</p>
                  <p>{t("schedule.xbkc.designCourse.details.2")}</p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  {t("schedule.xbkc.designCourse.description")}
                </div>
              </div>

              {/* 面试、小论文指导 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">
                    {t("schedule.xbkc.interviewAndEssay.title")}
                  </p>
                  <p className="tracking-[1.12px]">
                    {t("schedule.xbkc.interviewAndEssay.subtitle")}
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal whitespace-pre-line">
                  {t("schedule.xbkc.interviewAndEssay.description")}
                </div>
              </div>

              {/* 美术专业日语培训 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">
                    {t("schedule.xbkc.japaneseForArtMajors.title")}
                  </p>
                  <p className="tracking-[1.12px]">
                    {t("schedule.xbkc.japaneseForArtMajors.subtitle")}
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  {t("schedule.xbkc.japaneseForArtMajors.description")}
                </div>
              </div>
            </div>
            {/* 网页端学部课程 */}
            <div className="hidden md:grid grid-cols-12 gap-[24px] pt-[50px] ">
              <div className="col-span-1"></div>
              <div className="col-span-10 ">
                <div className="flex flex-col w-full gap-[80px]">
                  {/*素描课程*/}
                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">
                          {t("schedule.xbkc.drawingCourse.title")}
                        </p>
                        <p className="tracking-[1.12px]">
                          {t("schedule.xbkc.drawingCourse.subtitle")}
                        </p>
                      </div>
                      <div className="text-[11px] tracking-[1.12px] leading-[25px] font-medium ">
                        <p>{t("schedule.xbkc.drawingCourse.details.0")}</p>
                        <p>{t("schedule.xbkc.drawingCourse.details.1")}</p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      {t("schedule.xbkc.drawingCourse.description")}
                    </div>
                  </div>

                  {/*感觉试验*/}
                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">
                          {t("schedule.xbkc.visualExperimentation.title")}
                        </p>
                        <p className="tracking-[1.12px]">
                          {t("schedule.xbkc.visualExperimentation.subtitle")}
                        </p>
                      </div>
                      <div className="text-[11px] tracking-[1.12px] leading-[25px] font-medium ">
                        <p>
                          {t("schedule.xbkc.visualExperimentation.details.0")}
                        </p>
                        <p>
                          {t("schedule.xbkc.visualExperimentation.details.1")}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium whitespace-pre-line">
                      {t("schedule.xbkc.visualExperimentation.description")}
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">
                          {" "}
                          {t("schedule.xbkc.designCourse.title")}
                        </p>
                        <p className="tracking-[1.12px]">
                          {" "}
                          {t("schedule.xbkc.designCourse.subtitle")}
                        </p>
                      </div>
                      <div className="text-[11px] tracking-[1.12px] leading-[25px] font-medium ">
                        <p>{t("schedule.xbkc.designCourse.details.0")}</p>
                        <p>{t("schedule.xbkc.designCourse.details.1")}</p>
                        <p>{t("schedule.xbkc.designCourse.details.2")}</p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      {t("schedule.xbkc.designCourse.description")}
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">
                          {" "}
                          {t("schedule.xbkc.interviewAndEssay.title")}
                        </p>
                        <p className="tracking-[1.12px]">
                          {t("schedule.xbkc.interviewAndEssay.subtitle")}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium whitespace-pre-line">
                      {t("schedule.xbkc.interviewAndEssay.description")}
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">
                          {" "}
                          {t("schedule.xbkc.japaneseForArtMajors.title")}
                        </p>
                        <p className="tracking-[1.12px]">
                          {t("schedule.xbkc.japaneseForArtMajors.subtitle")}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      {t("schedule.xbkc.japaneseForArtMajors.description")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>

          {/* 大学院课程 */}
          <div className="pb-[80px]" ref={dxykcRef} id="dxykc">
            <div className="text-[20px] md:text-[2.25rem] tracking-[10px] md:tracking-[2px] leading-[3.75rem] font-medium">
              <TextAnimation text={t("schedule.dxykc.sectionTitle")} />
            </div>

            {/* 手机端大学院课程 */}
            <div className="flex flex-col md:hidden gap-[56px]">
              {/* 研究计划书 */}
              <div className="flex flex-col gap-[22px] pt-[30px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">
                    {t("schedule.dxykc.researchPlan.title")}
                  </p>
                  <p className="tracking-[1.12px]">
                    {t("schedule.dxykc.researchPlan.subtitle")}
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  {t("schedule.dxykc.researchPlan.description")}
                </div>
              </div>

              {/* 作品集辅导课程 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">
                    {t("schedule.dxykc.portfolioCreation.title")}
                  </p>
                  <p className="tracking-[1.12px]">
                    {t("schedule.dxykc.portfolioCreation.subtitle")}
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  {t("schedule.dxykc.portfolioCreation.description")}
                </div>
              </div>

              {/* 制作作品集 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">
                    {t("schedule.dxykc.portfolioPublishing.title")}
                  </p>
                  <p className="tracking-[1.12px]">
                    {t("schedule.dxykc.portfolioPublishing.subtitle")}
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  {t("schedule.dxykc.portfolioPublishing.description")}
                </div>
              </div>

              {/* 面试指导 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">
                    {t("schedule.dxykc.interviewGuidance.title")}
                  </p>
                  <p className="tracking-[1.12px]">
                    {t("schedule.dxykc.interviewGuidance.subtitle")}
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  {t("schedule.dxykc.interviewGuidance.description")}
                </div>
              </div>

              {/* 美术专业日语培训 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">
                    {t("schedule.dxykc.japaneseForArtMajors.title")}
                  </p>
                  <p className="tracking-[1.12px]">
                    {t("schedule.dxykc.japaneseForArtMajors.subtitle")}
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  {t("schedule.dxykc.japaneseForArtMajors.description")}
                </div>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-12 gap-[24px] pt-[50px] ">
              <div className="col-span-1"></div>
              <div className="col-span-10 ">
                <div className="flex flex-col w-full gap-[80px]">
                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">
                          {t("schedule.dxykc.researchPlan.title")}
                        </p>
                        <p className="tracking-[1.12px]">
                          {t("schedule.dxykc.researchPlan.subtitle")}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      {t("schedule.dxykc.researchPlan.description")}
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">
                          {t("schedule.dxykc.portfolioCreation.title")}
                        </p>
                        <p className="tracking-[1.12px]">
                          {t("schedule.dxykc.portfolioCreation.subtitle")}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      {t("schedule.dxykc.portfolioCreation.description")}
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">
                          {t("schedule.dxykc.portfolioPublishing.title")}
                        </p>
                        <p className="tracking-[1.12px]">
                          {t("schedule.dxykc.portfolioPublishing.subtitle")}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      {t("schedule.dxykc.portfolioPublishing.description")}
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">
                          {t("schedule.dxykc.interviewGuidance.title")}
                        </p>
                        <p className="tracking-[1.12px]">
                          {t("schedule.dxykc.interviewGuidance.subtitle")}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      {t("schedule.dxykc.interviewGuidance.description")}
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">
                          {t("schedule.dxykc.japaneseForArtMajors.title")}
                        </p>
                        <p className="tracking-[1.12px]">
                          {t("schedule.dxykc.japaneseForArtMajors.subtitle")}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      {t("schedule.dxykc.japaneseForArtMajors.description")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
