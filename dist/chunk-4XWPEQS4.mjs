// src/i18n/languages.ts
import { de, enUS, es, fr, pl, ptBR, ru, th, tr } from "date-fns/locale";
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
    code: "fr",
    display_name: "Fran\xE7ais",
    ltr: true,
    date_locale: fr
  },
  {
    code: "pl",
    display_name: "Polski",
    ltr: true,
    date_locale: pl
  },
  {
    code: "ptBR",
    display_name: "Portugu\xEAs (Brasil)",
    ltr: true,
    date_locale: ptBR
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
  },
  {
    code: "th",
    display_name: "\u0E44\u0E17\u0E22",
    ltr: true,
    date_locale: th
  }
];

export {
  languages
};
