import { createI18n } from 'vue-i18n/index';

const i18n = createI18n({
  locale: 'vi',
  fallbackLocale: 'vi',
  silentTranslationWarn: true,
  messages: {
    en: require('@lang/en.json'),
    vi: require('@lang/vi.json')
  }
})

export default i18n;
