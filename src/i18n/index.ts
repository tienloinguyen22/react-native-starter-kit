import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';

export enum Languages {
  VI = 'vi',
  EN = 'en',
}

export const initializeI18Next = (): void => {
  const languageDetector = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: 'languageDetector' as any,
    async: true,
    detect: (cb: Function) => cb(Languages.EN),
    init: () => {
      // blank
    },
    cacheUserLanguage: () => {
      // blank
    },
  };

  i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      lng: Languages.EN,
      fallbackLng: Languages.EN,
      debug: __DEV__,
      resources: { en: { translation: en } },
    });
};
