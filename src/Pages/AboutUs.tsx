import { useEffect, useRef, useState } from "react";
import TextAnimation from "../components/TextAnimation";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export function AboutUs() {
  const { t } = useTranslation();

  // 创建 ref 来定位到每个部分
  const messageRef = useRef<HTMLDivElement>(null);
  const coreAdvantagesRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const messageRefW = useRef<HTMLDivElement>(null);
  const coreAdvantagesRefW = useRef<HTMLDivElement>(null);
  const philosophyRefW = useRef<HTMLDivElement>(null);

  // 使用 state 来保存当前可见的部分
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    console.log("Active section changed to:", activeSection); // 输出当前的activeSection
  }, [activeSection]);
  useEffect(() => {
    console.log(messageRef.current); // 应该输出对应的 DOM 元素
    console.log(coreAdvantagesRef.current);
    console.log(philosophyRef.current);
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
    const sections = [messageRef, coreAdvantagesRef, philosophyRef];
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
    <div className="flex flex-col px-[20px]">
      {/* 手机端 */}
      <div className="flex sm:hidden flex-col gap-[60px]">
        {/* 侧边导航栏 */}
        {i18n.language === "zh" && (
          <div className=" fixed top-[200px] right-[10px] flex flex-col gap-[50px] z-[10]">
            <div className="rotate-90 text-[12px] tracking-[1.12px] w-[56px] font-medium">
              {t("aboutUs.title")}
            </div>
            <div className="flex flex-col justify-start gap-[60px] items-center font-normal">
              {/* 寄语 */}
              <div
                className={`rotate-90 text-[12px] tracking-[1.12px] w-[28px] inline-block relative ${
                  activeSection === "message"
                    ? "after:scale-x-100"
                    : "after:scale-x-0"
                } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
                onClick={() => scrollToSection(messageRef)}
              >
                {t("aboutUs.message")}
              </div>

              {/* 核心优势 */}
              <div
                className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
                  activeSection === "coreAdvantages"
                    ? "after:scale-x-100"
                    : "after:scale-x-0"
                } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
                onClick={() => scrollToSection(coreAdvantagesRef)}
              >
                {t("aboutUs.coreAdvantages")}
              </div>

              {/* 学院理念 */}
              <div
                className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
                  activeSection === "philosophy"
                    ? "after:scale-x-100"
                    : "after:scale-x-0"
                } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
                onClick={() => scrollToSection(philosophyRef)}
              >
                {t("aboutUs.philosophy")}
              </div>
            </div>
          </div>
        )}
        {/* 寄语  */}
        <div ref={messageRef} id="message">
          <div className="relative h-[230px] pt-[20px] flex flex-col justify-end">
            <div className="absolute top-[15px] text-[40px] tracking-[10px] leading-[3.75rem] font-medium  text-black">
              <TextAnimation text="描こう、" />
              <TextAnimation text="夢を。" />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_BASE_URL}imgiphone.png`}
                alt=""
              />
            </div>
          </div>
          <div className="text-[13px] pt-[30px] px-[50px] tracking-[1.12px] leading-[28px] font-medium">
            {(
              t("aboutUs.messageText", { returnObjects: true }) as string[]
            ).map((paragraph, index) => (
              <p className="m-0" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* 核心优势 */}
        <div ref={coreAdvantagesRef} id="coreAdvantages">
          <div className="flex flex-col">
            <div className="tracking-[10px] text-[20px] h-[45px]">
              <TextAnimation text={t("aboutUs.coreAdvantages")} />
            </div>
            <div className="tracking-[2px] text-[16px]">
              <TextAnimation text={t("aboutUs.coreAdvantagesTitle")} />
            </div>
          </div>

          <div className="flex flex-col pt-[40px]">
            {/* 遍历 coreAdvantagesItems 来渲染每个优势项 */}
            {(
              t("aboutUs.coreAdvantagesItems", {
                returnObjects: true,
              }) as Array<{
                title1: string;
                title2: string;
                description: string;
              }>
            ).map((item, index) => (
              <div key={index} className="flex flex-col pt-[40px]">
                <div>
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}hxys${index + 1}.png`}
                    className="w-[270px] -translate-x-[20px]"
                    alt={`核心优势图片 ${index + 1}`}
                  />

                  <div className="flex flex-col px-[50px] gap-[40px] pt-[30px]">
                    <div className="text-[16px] tracking-[1.12px] leading-[28px]">
                      {item.title1}
                      <br />
                      {item.title2}
                    </div>
                    <div className="text-[13px] tracking-[1.12px] leading-[25px]">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 学院理念 */}
        <div
          className="flex flex-col gap-[40px]"
          ref={philosophyRef}
          id="philosophy"
        >
          <div className="tracking-[10px] text-[20px] ">
            <TextAnimation text={t("aboutUs.philosophy")} />
          </div>

          <div className="px-[50px] tracking-[1.12px] text-[13px] leading-[28px] ">
            {(
              t("aboutUs.philosophyText", { returnObjects: true }) as string[]
            ).map((paragraph, index) => (
              <p key={index} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Philosophy Values */}
          <div className="flex flex-col gap-[32px] pb-[45px] pr-[25px]">
            {(
              t("aboutUs.philosophyValues", { returnObjects: true }) as Array<{
                title: string;
                subtitle: string;
                description: string;
              }>
            ).map((value, index) => (
              <div key={index} className="grid grid-cols-5 gap-[50px]">
                <div className="col-span-2 text-[14px] leading-[26px] tracking-[2px]">
                  {value.title}
                  <br />
                  {value.subtitle}
                </div>
                <div className="col-span-3 text-[11px] tracking-[1px] leading-[18px]">
                  {value.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 网页端 */}
      <div className="hidden sm:flex relative flex-col items-center gap-[100px] py-[100px] px-[100px]">
        <div id="messageW" ref={messageRefW}>
          <div className="relative grid grid-cols-12">
            <div className="col-span-2 z-10">
              <div className="absolute top-1/2  text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black">
                <TextAnimation text="描こう、夢を。" />
              </div>
            </div>
            <div className="col-span-10 relative">
              <img
                className="w-full h-auto object-cover"
                src={`${import.meta.env.VITE_BASE_URL}image 10.png`}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 pt-[30px]">
            <div className="col-span-3"></div>{" "}
            <div className="col-span-9 tracking-[1.5px] leading-[2.063rem] font-medium">
              <p className="m-0">{t("aboutUs.messageText.0")}</p>
              <p className="m-0">
                <p className="m-0">{t("aboutUs.messageText.1")}</p>
              </p>
              <p className="m-0">
                <p className="m-0">{t("aboutUs.messageText.2")}</p>
              </p>
              <p className="m-0">
                <p className="m-0">{t("aboutUs.messageText.3")}</p>
              </p>
              <p className="m-0">
                <p className="m-0">{t("aboutUs.messageText.4")}</p>
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-[128px] items-center w-full text-center text-[2.25rem] text-black font-noto-sans-sc">
          <div
            className="relative w-[72rem] h-[62.688rem]"
            id="coreAdvantagesW"
            ref={coreAdvantagesRefW}
          >
            <div className="absolute top-[0rem] left-[0rem] w-[28.75rem] h-[4.188rem]">
              <div className="absolute top-[0rem] left-[calc(50%_-_230px)] tracking-[2px] leading-[3.75rem] font-medium">
                {t("aboutUs.coreAdvantages")}
              </div>
              <div className="absolute top-[0.438rem] left-[calc(50%_+_56px)] text-[1.25rem] tracking-[2px] leading-[3.75rem] font-medium whitespace-nowrap">
                {t("aboutUs.coreAdvantagesTitle")}
              </div>
            </div>
            <div className="absolute top-[7rem] left-[17.938rem] w-[54.063rem] h-[55.688rem] text-left text-[1rem]">
              <div className="absolute top-[12.5rem] left-[0.063rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                <p className="m-0">
                  {t("aboutUs.coreAdvantagesItems.0.title1")}
                </p>
                <p className="m-0">
                  {t("aboutUs.coreAdvantagesItems.0.title2")}
                </p>
              </div>
              <div className="absolute top-[42.5rem] left-[0.063rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                <p className="m-0">
                  {t("aboutUs.coreAdvantagesItems.1.title1")}
                </p>
                <p className="m-0">
                  {t("aboutUs.coreAdvantagesItems.1.title2")}
                </p>
              </div>
              <div className="absolute top-[12.5rem] left-[18.063rem] tracking-[0.5px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                <p className="m-0">
                  {t("aboutUs.coreAdvantagesItems.2.title1")}
                </p>
                <p className="m-0">
                  {t("aboutUs.coreAdvantagesItems.2.title2")}
                </p>
              </div>
              <div className="absolute top-[42.5rem] left-[18.125rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                <p className="m-0">
                  {t("aboutUs.coreAdvantagesItems.3.title1")}
                </p>
                <p className="m-0">
                  {t("aboutUs.coreAdvantagesItems.3.title2")}
                </p>
              </div>
              <div className="absolute top-[12.5rem] left-[36rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                <p className="m-0">
                  {t("aboutUs.coreAdvantagesItems.4.title1")}
                </p>
                <p className="m-0">
                  {t("aboutUs.coreAdvantagesItems.4.title2")}
                </p>
              </div>
              <div className="absolute top-[47.563rem] left-[0.063rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                {t("aboutUs.coreAdvantagesItems.0.description")}
              </div>
              <div className="absolute top-[17.563rem] left-[0.063rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                {t("aboutUs.coreAdvantagesItems.1.description")}
              </div>
              <div className="absolute top-[17.563rem] left-[18.063rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                {t("aboutUs.coreAdvantagesItems.2.description")}
              </div>
              <div className="absolute top-[47.563rem] left-[18.125rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                {t("aboutUs.coreAdvantagesItems.3.description")}
              </div>
              <img
                className="absolute top-[30rem] left-[0rem] w-[16.5rem] h-[10.5rem] object-cover"
                src={`${import.meta.env.VITE_BASE_URL}image 8.png`}
              />
              <div className="absolute top-[17.563rem] left-[36rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                {t("aboutUs.coreAdvantagesItems.4.description")}
              </div>
              <img
                className="absolute top-[0rem] left-[0rem] w-[16.5rem] h-[10.5rem] object-cover"
                alt=""
                src={`${import.meta.env.VITE_BASE_URL}image 3.png`}
              />
              <img
                className="absolute top-[0rem] left-[18rem] w-[16.5rem] h-[10.5rem] object-cover"
                alt=""
                src={`${import.meta.env.VITE_BASE_URL}image 6.png`}
              />
              <img
                className="absolute top-[30rem] left-[18rem] w-[16.5rem] h-[10.5rem] object-cover"
                alt=""
                src={`${import.meta.env.VITE_BASE_URL}image 9.png`}
              />
              <img
                className="absolute top-[0rem] left-[36rem] w-[16.5rem] h-[10.5rem] object-cover"
                alt=""
                src={`${import.meta.env.VITE_BASE_URL}image7.png`}
              />
            </div>
          </div>

          <div
            className="relative w-[70.438rem] h-[690px] text-left"
            id="philosophyW"
            ref={philosophyRefW}
          >
            <div className="absolute top-[0rem] left-[calc(50%_-_563.5px)] tracking-[2px] leading-[3.75rem] font-medium">
              {t("aboutUs.philosophy")}
            </div>
            <div className="absolute top-[0.5rem] left-[17.938rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[52.5rem]">
              {t("aboutUs.philosophyText.0")}
              {t("aboutUs.philosophyText.1")}
              {t("aboutUs.philosophyText.2")}
            </div>
            <div className="absolute top-[240px] left-[5.938rem] w-[58.5rem] h-[28.375rem] text-[1.25rem]">
              {/* 1 */}
              <div className="absolute top-[0rem] left-[0rem] w-[58.5rem] h-[4.5rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_468px)] tracking-[2px] leading-[1.875rem] font-medium">
                  <p className="m-0">{t("aboutUs.philosophyValues.0.title")}</p>
                  <p className="m-0">
                    {t("aboutUs.philosophyValues.0.subtitle")}
                  </p>
                </div>
                <div className="absolute top-[0rem] left-[18rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[40.5rem] h-[4.5rem]">
                  {t("aboutUs.philosophyValues.0.description")}
                </div>
              </div>

              {/* 2 */}
              <div className="absolute top-[6rem] left-[0rem] w-[58.5rem] h-[4.5rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_468px)] tracking-[2px] leading-[1.875rem] font-medium">
                  <p className="m-0">{t("aboutUs.philosophyValues.1.title")}</p>
                  <p className="m-0">
                    {t("aboutUs.philosophyValues.1.subtitle")}
                  </p>
                </div>
                <div className="absolute top-[0rem] left-[18rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[40.5rem] h-[4.5rem]">
                  {t("aboutUs.philosophyValues.1.description")}
                </div>
              </div>

              {/* 3 */}
              <div className="absolute top-[11.875rem] left-[0rem] w-[58.5rem] h-[4.5rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_468px)] tracking-[2px] leading-[1.875rem] font-medium">
                  <p className="m-0">{t("aboutUs.philosophyValues.2.title")}</p>
                  <p className="m-0">
                    {t("aboutUs.philosophyValues.2.subtitle")}
                  </p>
                </div>
                <div className="absolute top-[0rem] left-[18rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[40.5rem] h-[4.5rem]">
                  {t("aboutUs.philosophyValues.2.description")}
                </div>
              </div>

              {/* 4 */}
              <div className="absolute top-[17.875rem] left-[0rem] w-[58.5rem] h-[4.5rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_468px)] tracking-[2px] leading-[1.875rem] font-medium">
                  <p className="m-0">{t("aboutUs.philosophyValues.3.title")}</p>
                  <p className="m-0">
                    {t("aboutUs.philosophyValues.3.subtitle")}
                  </p>
                </div>
                <div className="absolute top-[0rem] left-[18rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[40.5rem] h-[4.5rem]">
                  {t("aboutUs.philosophyValues.3.description")}
                </div>
              </div>

              {/* 5 */}
              <div className="absolute top-[23.875rem] left-[0rem] w-[58.5rem] h-[4.5rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_468px)] tracking-[2px] leading-[1.875rem] font-medium">
                  <p className="m-0">{t("aboutUs.philosophyValues.4.title")}</p>
                  <p className="m-0">
                    {t("aboutUs.philosophyValues.4.subtitle")}
                  </p>
                </div>
                <div className="absolute top-[0rem] left-[18rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[40.5rem] h-[4.5rem]">
                  {t("aboutUs.philosophyValues.4.description")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
