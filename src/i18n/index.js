import VueI18n from "vue-i18n";
import zhCN from "vxe-table/lib/locale/lang/zh-CN";
import enUS from "vxe-table/lib/locale/lang/en-US";
import ZH from '@/i18n/language/zh/zh.js'
import EN from '@/i18n/language/en/en.js'
const messages = {
  zh_CN: {
    ...zhCN,
    ...ZH
  },
  en_US: {
    ...enUS,
    ...EN
  }
};
export function loadI18n(Vue) {
    Vue.use(VueI18n);
    const i18n = new VueI18n({
      locale: "zh_CN",
      messages
    });
    return i18n
}