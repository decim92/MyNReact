import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import {I18nManager} from 'react-native';

export const translationGetters: {[key: string]: () => any} = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('../../locales/en.json'),
  es: () => require('../../locales/es.json'),
};

type MemoizeResolver<F extends (...args: any) => any> = (
  ...args: Parameters<F>
) => string;

const resolver: MemoizeResolver<typeof i18n.t> = (scope, options) =>
  JSON.stringify({scope, options});

export const translate = memoize<typeof i18n.t>(i18n.t, resolver);

// export const translate = memoize(
//   (key: string) => i18n.t(key),
//   // (key, config) => i18n.t(key, config),
//   // (key, config) => (config ? key + JSON.stringify(config) : key),
// );

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'en', isRTL: false};

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear?.();
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = {[languageTag]:translationGetters[languageTag]()};
  i18n.locale = languageTag;
};
