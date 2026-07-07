import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 导入语言文件
import en from "./locales/en.json";
import ja from "./locales/ja.json";
import zh from "./locales/zh.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ja: { translation: ja },
    zh: { translation: zh },
  },
  lng: "zh", // 设置默认语言（可以根据用户选择进行动态切换）
  fallbackLng: "zh", // 当当前语言没有翻译内容时回退到哪个语言
  interpolation: { escapeValue: false }, // 防止 XSS 攻击，设置为 false
  returnObjects: true, // 启用 returnObjects: true
});

export default i18n;
