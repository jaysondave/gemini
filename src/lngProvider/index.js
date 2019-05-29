import enLang from './entries/en-US';
import itLang from './entries/it_IT';
import {addLocaleData} from 'react-intl';

const AppLocale = {
  en: enLang,
  it: itLang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.it.data);

export default AppLocale;
