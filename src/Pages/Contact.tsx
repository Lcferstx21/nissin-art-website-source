import ContactForm from "../components/ContactForm";
import TextAnimation from "../components/TextAnimation";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full relative px-[20px] md:px-15 lg:px-[156px] pb-[60px] md:pb-[80px]">
      {/* 侧边栏 */}
      <div className="absolute md:hidden top-[50px] right-[10px] flex flex-col gap-[50px] z-[10]">
        <div className="rotate-90 text-[12px] tracking-[1.12px] font-medium">
          {t("contact.title")}
        </div>
      </div>

      {/* 广州校区 */}
      <div className="flex flex-col pt-[100px] md:pt-[130px] pb-[100px]">
        <div className="flex w-full flex-col md:flex-row">
          <div className="flex flex-col md:w-1/3  text-nowrap">
            <div className="text-[24px] md:text-[36px] tracking-[10px] md:tracking-[2px] pb-[20px]">
              <TextAnimation text={t("contact.guangzhouCampus")} />
            </div>
            <a
              href="https://surl.amap.com/H0nxAVG1r1Dq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] tracking-[2px] underline"
            >
              {t("contact.detailedMap")}
            </a>
            <div className="py-[20px] pr-[20px] flex-col gap-[10px] ">
              <img
                src={`${import.meta.env.VITE_BASE_URL}guangzhou.jpg`}
                alt=""
              />
              <img
                src={`${import.meta.env.VITE_BASE_URL}guangzhouPic.jpg`}
                alt=""
              />
            </div>
          </div>

          <div className="pt-[30px] md:pt-0 lg:pt-[80px] md:w-2/3 text-[12px] md:text-[16px] tracking-[1.5px] leading-[25px] md:leading-[33px]">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-x-[50px] md:gap-4">
              <div>{t("contact.address")}：</div>
              <div className="col-span-3 md:col-span-7">
                {t("contact.guangzhouAddress")}
              </div>
              <div>{t("contact.tel")}：</div>
              <div className="col-span-3 md:col-span-7">18024032750</div>
              <div>{t("contact.qq")}：</div>
              <div className="col-span-3 md:col-span-7">3247449894</div>
              <div>{t("contact.wechat")}：</div>
              <div className="col-span-3 md:col-span-7">nissinart02</div>
              <div className="pt-[30px] break-words">
                {t("contact.transportation")}：
              </div>
              <div className="col-span-3 pt-[30px] md:col-span-7">
                <ol className="list-decimal pl-4">
                  <li>{t("contact.guangzhouTransport.1")}</li>
                  <li>{t("contact.guangzhouTransport.2")}</li>
                  <li>{t("contact.guangzhouTransport.3")}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[40px] w-full border-b-[0.5px] border-neutral-200" />

        {/* 东京校区 */}
        <div className="flex w-full flex-col md:flex-row pt-[40px]">
          <div className="flex flex-col md:w-1/3 text-nowrap">
            <div className="text-[24px] md:text-[36px] tracking-[10px] md:tracking-[2px] pb-[20px]">
              <TextAnimation text={t("contact.tokyoCampus")} />
            </div>
            <a
              href="https://maps.app.goo.gl/BKHXqm9BJwPNeq4x9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] tracking-[2px] underline"
            >
              {t("contact.detailedMap")}
            </a>
            <div className="py-[20px] pr-[20px] flex-col gap-[10px] ">
              <img
                src={`${import.meta.env.VITE_BASE_URL}dongjingNew.webp`}
                alt=""
              />
              <img
                src={`${import.meta.env.VITE_BASE_URL}dongjing2New.webp`}
                alt=""
              />
            </div>
          </div>

          <div className="pt-[30px] md:pt-0 lg:pt-[80px] md:w-2/3 text-[12px] md:text-[16px] tracking-[1.5px] leading-[25px] md:leading-[33px]">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-x-[50px] md:gap-4">
              <div>{t("contact.address")}：</div>
              <div className="col-span-3 md:col-span-7">
                {t("contact.tokyoAddress")}
              </div>
              <div>{t("contact.tel")}：</div>
              <div className="col-span-3 md:col-span-7">
                080-8012-9267/ 070-4486-6405
              </div>
              <div>{t("contact.wechat")}：</div>
              <div className="col-span-3 md:col-span-7">nissinacademy2</div>
              <div className="pt-[30px]  break-words">
                {t("contact.transportation")}：
              </div>
              <div className="pt-[30px] col-span-3 md:col-span-7">
                <ol className="list-decimal pl-4">
                  <li>{t("contact.tokyoTransport.1")}</li>
                  <li>{t("contact.tokyoTransport.2")}</li>
                  {/* <li>{t("contact.tokyoTransport.3")}</li> */}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 表单 */}
      <div>
        <div className="hidden md:block text-[24px] md:text-[36px] tracking-[10px] md:tracking-[2px] pb-[20px]">
          <TextAnimation text={t("contact.booking")} />
        </div>
        <div className="md:hidden text-[24px] md:text-[36px] tracking-[10px] md:tracking-[2px] pb-[20px]">
          <TextAnimation text={t("contact.bookingMobile")} />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
