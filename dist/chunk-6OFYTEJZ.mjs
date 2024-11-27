// src/i18n/languages.ts
import { de, enUS, es, pl, ru, tr } from "date-fns/locale";
var languages = [
  {
    code: "en",
    display_name: "English",
    ltr: true,
    date_locale: enUS
  },
  {
    code: "es",
    display_name: "Espa\xF1ol",
    ltr: true,
    date_locale: es
  },
  {
    code: "de",
    display_name: "Deutsch",
    ltr: true,
    date_locale: de
  },
  {
    code: "pl",
    display_name: "Polski",
    ltr: true,
    date_locale: pl
  },
  {
    code: "ru",
    display_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    ltr: true,
    date_locale: ru
  },
  {
    code: "tr",
    display_name: "T\xFCrk\xE7e",
    ltr: true,
    date_locale: tr
  }
];

export {
  languages
};
