// src/lib/data/country-states.ts
function getCountryProvinceObjectByIso2(iso2) {
  if (!iso2) {
    return null;
  }
  const code = iso2.toUpperCase();
  return countryProvinceMap[code] || null;
}
function getProvinceByIso2(iso2) {
  if (!iso2) {
    return null;
  }
  const key = iso2.toUpperCase();
  for (const country in countryProvinceMap) {
    if (countryProvinceMap[country].options[key]) {
      return countryProvinceMap[country].options[key];
    }
  }
  return null;
}
function isProvinceInCountry(countryCode, provinceCode) {
  if (!countryCode || !provinceCode) {
    return false;
  }
  const code = provinceCode.toUpperCase();
  const country = countryProvinceMap[countryCode.toUpperCase()];
  return country?.options[code] !== void 0;
}
var countryProvinceMap = {
  AR: {
    type: "province",
    options: {
      "AR-B": "Buenos Aires",
      "AR-C": "Ciudad Aut\xF3noma de Buenos Aires",
      "AR-K": "Catamarca",
      "AR-H": "Chaco",
      "AR-U": "Chubut",
      "AR-X": "C\xF3rdoba",
      "AR-W": "Corrientes",
      "AR-E": "Entre R\xEDos",
      "AR-P": "Formosa",
      "AR-Y": "Jujuy",
      "AR-L": "La Pampa",
      "AR-F": "La Rioja",
      "AR-M": "Mendoza",
      "AR-N": "Misiones",
      "AR-Q": "Neuqu\xE9n",
      "AR-R": "R\xEDo Negro",
      "AR-A": "Salta",
      "AR-J": "San Juan",
      "AR-D": "San Luis",
      "AR-Z": "Santa Cruz",
      "AR-S": "Santa Fe",
      "AR-G": "Santiago del Estero",
      "AR-V": "Tierra del Fuego",
      "AR-T": "Tucum\xE1n"
    }
  },
  AU: {
    type: "stateOrTerritory",
    options: {
      "AU-ACT": "Australian Capital Territory",
      "AU-NSW": "New South Wales",
      "AU-NT": "Northern Territory",
      "AU-QLD": "Queensland",
      "AU-SA": "South Australia",
      "AU-TAS": "Tasmania",
      "AU-VIC": "Victoria",
      "AU-WA": "Western Australia"
    }
  },
  BR: {
    type: "state",
    options: {
      "BR-AC": "Acre",
      "BR-AL": "Alagoas",
      "BR-AP": "Amap\xE1",
      "BR-AM": "Amazonas",
      "BR-BA": "Bahia",
      "BR-CE": "Cear\xE1",
      "BR-DF": "Distrito Federal",
      "BR-ES": "Esp\xEDrito Santo",
      "BR-GO": "Goi\xE1s",
      "BR-MA": "Maranh\xE3o",
      "BR-MT": "Mato Grosso",
      "BR-MS": "Mato Grosso do Sul",
      "BR-MG": "Minas Gerais",
      "BR-PA": "Par\xE1",
      "BR-PB": "Para\xEDba",
      "BR-PR": "Paran\xE1",
      "BR-PE": "Pernambuco",
      "BR-PI": "Piau\xED",
      "BR-RJ": "Rio de Janeiro",
      "BR-RN": "Rio Grande do Norte",
      "BR-RS": "Rio Grande do Sul",
      "BR-RO": "Rond\xF4nia",
      "BR-RR": "Roraima",
      "BR-SC": "Santa Catarina",
      "BR-SP": "S\xE3o Paulo",
      "BR-SE": "Sergipe",
      "BR-TO": "Tocantins"
    }
  },
  CA: {
    type: "province",
    options: {
      "CA-AB": "Alberta",
      "CA-BC": "British Columbia",
      "CA-MB": "Manitoba",
      "CA-NB": "New Brunswick",
      "CA-NL": "Newfoundland and Labrador",
      "CA-NS": "Nova Scotia",
      "CA-NT": "Northwest Territories",
      "CA-NU": "Nunavut",
      "CA-ON": "Ontario",
      "CA-PE": "Prince Edward Island",
      "CA-QC": "Quebec",
      "CA-SK": "Saskatchewan",
      "CA-YT": "Yukon"
    }
  },
  CL: {
    type: "region",
    options: {
      "CL-AI": "Ais\xE9n del General Carlos Ib\xE1\xF1ez del Campo",
      "CL-AN": "Antofagasta",
      "CL-AR": "Araucan\xEDa",
      "CL-AP": "Arica y Parinacota",
      "CL-AT": "Atacama",
      "CL-BI": "B\xEDo B\xEDo",
      "CL-CO": "Coquimbo",
      "CL-LI": "Libertador General Bernardo O'Higgins",
      "CL-LL": "Los Lagos",
      "CL-LR": "Los R\xEDos",
      "CL-MA": "Magallanes y de la Ant\xE1rtica Chilena",
      "CL-ML": "Maule",
      "CL-RM": "Regi\xF3n Metropolitana de Santiago",
      "CL-TA": "Tarapac\xE1",
      "CL-VS": "Valpara\xEDso"
    }
  },
  CN: {
    type: "province",
    options: {
      "CN-AH": "Anhui",
      "CN-BJ": "Beijing",
      "CN-CQ": "Chongqing",
      "CN-FJ": "Fujian",
      "CN-GD": "Guangdong",
      "CN-GS": "Gansu",
      "CN-GX": "Guangxi Zhuang",
      "CN-GZ": "Guizhou",
      "CN-HA": "Henan",
      "CN-HB": "Hubei",
      "CN-HE": "Hebei",
      "CN-HI": "Hainan",
      "CN-HK": "Hong Kong",
      "CN-HL": "Heilongjiang",
      "CN-HN": "Hunan",
      "CN-JL": "Jilin",
      "CN-JS": "Jiangsu",
      "CN-JX": "Jiangxi",
      "CN-LN": "Liaoning",
      "CN-NM": "Inner Mongolia",
      "CN-NX": "Ningxia Hui",
      "CN-QH": "Qinghai",
      "CN-SA": "Shaanxi",
      "CN-SC": "Sichuan",
      "CN-SD": "Shandong",
      "CN-SH": "Shanghai",
      "CN-SN": "Shanxi",
      "CN-TJ": "Tianjin",
      "CN-XJ": "Xinjiang Uygur",
      "CN-XZ": "Tibet",
      "CN-YN": "Yunnan",
      "CN-ZJ": "Zhejiang"
    }
  },
  CO: {
    type: "province",
    options: {
      "CO-AMA": "Amazonas",
      "CO-ANT": "Antioquia",
      "CO-ARA": "Arauca",
      "CO-ATL": "Atl\xE1ntico",
      "CO-BOL": "Bol\xEDvar",
      "CO-BOY": "Boyac\xE1",
      "CO-CAL": "Caldas",
      "CO-CAQ": "Caquet\xE1",
      "CO-CAS": "Casanare",
      "CO-CAU": "Cauca",
      "CO-CES": "Cesar",
      "CO-COR": "C\xF3rdoba",
      "CO-CUN": "Cundinamarca",
      "CO-DC": "Bogot\xE1 D.C.",
      "CO-GUA": "Guain\xEDa",
      "CO-GUV": "Guaviare",
      "CO-HUI": "Huila",
      "CO-LAG": "La Guajira",
      "CO-MAG": "Magdalena",
      "CO-MET": "Meta",
      "CO-NAR": "Nari\xF1o",
      "CO-NSA": "Norte de Santander",
      "CO-PUT": "Putumayo",
      "CO-QUI": "Quind\xEDo",
      "CO-RIS": "Risaralda",
      "CO-SAP": "San Andr\xE9s y Providencia",
      "CO-SAN": "Santander",
      "CO-SUC": "Sucre",
      "CO-TOL": "Tolima",
      "CO-VAC": "Valle del Cauca",
      "CO-VAU": "Vaup\xE9s",
      "CO-VID": "Vichada"
    }
  },
  CR: {
    type: "province",
    options: {
      "CR-A": "Alajuela",
      "CR-C": "Cartago",
      "CR-G": "Guanacaste",
      "CR-H": "Heredia",
      "CR-L": "Lim\xF3n",
      "CR-P": "Puntarenas",
      "CR-SJ": "San Jos\xE9"
    }
  },
  CH: {
    type: "canton",
    options: {
      "CH-AG": "Aargau",
      "CH-AR": "Appenzell Ausserrhoden",
      "CH-AI": "Appenzell Innerrhoden",
      "CH-BL": "Basel-Landschaft",
      "CH-BS": "Basel-Stadt",
      "CH-BE": "Bern",
      "CH-FR": "Fribourg",
      "CH-GE": "Geneva",
      "CH-GL": "Glarus",
      "CH-GR": "Graub\xFCnden",
      "CH-JU": "Jura",
      "CH-LU": "Lucerne",
      "CH-NE": "Neuch\xE2tel",
      "CH-NW": "Nidwalden",
      "CH-OW": "Obwalden",
      "CH-SG": "St. Gallen",
      "CH-SH": "Schaffhausen",
      "CH-SZ": "Schwyz",
      "CH-SO": "Solothurn",
      "CH-TG": "Thurgau",
      "CH-TI": "Ticino",
      "CH-UR": "Uri",
      "CH-VS": "Valais",
      "CH-VD": "Vaud",
      "CH-ZG": "Zug",
      "CH-ZH": "Zurich"
    }
  },
  EG: {
    type: "governorate",
    options: {
      "EG-ALX": "Alexandria",
      "EG-ASN": "Aswan",
      "EG-AST": "Asyut",
      "EG-BA": "Red Sea",
      "EG-BH": "Beheira",
      "EG-BNS": "Beni Suef",
      "EG-C": "Cairo",
      "EG-DK": "Dakahlia",
      "EG-DT": "Damietta",
      "EG-FYM": "Faiyum",
      "EG-GH": "Gharbia",
      "EG-GZ": "Giza",
      "EG-IS": "Ismailia",
      "EG-JS": "South Sinai",
      "EG-KB": "Qalyubia",
      "EG-KFS": "Kafr el-Sheikh",
      "EG-KN": "Qena",
      "EG-LX": "Luxor",
      "EG-MNF": "Monufia",
      "EG-MT": "Matrouh",
      "EG-PTS": "Port Said",
      "EG-SHG": "Sohag",
      "EG-SHR": "Al Sharqia",
      "EG-SIN": "North Sinai",
      "EG-SUZ": "Suez"
    }
  },
  GT: {
    type: "department",
    options: {
      "GT-AV": "Alta Verapaz",
      "GT-BV": "Baja Verapaz",
      "GT-CM": "Chimaltenango",
      "GT-CQ": "Chiquimula",
      "GT-PR": "El Progreso",
      "GT-ES": "Escuintla",
      "GT-GU": "Guatemala",
      "GT-HU": "Huehuetenango",
      "GT-IZ": "Izabal",
      "GT-JA": "Jalapa",
      "GT-JU": "Jutiapa",
      "GT-PE": "Pet\xE9n",
      "GT-QZ": "Quetzaltenango",
      "GT-QC": "Quich\xE9",
      "GT-RE": "Retalhuleu",
      "GT-SA": "Sacatep\xE9quez",
      "GT-SM": "San Marcos",
      "GT-SR": "Santa Rosa",
      "GT-SO": "Solol\xE1",
      "GT-SU": "Suchitep\xE9quez",
      "GT-TO": "Totonicap\xE1n",
      "GT-ZA": "Zacapa"
    }
  },
  HK: {
    type: "region",
    options: {
      "HK-HKI": "Hong Kong Island",
      "HK-KLN": "Kowloon",
      "HK-NT": "New Territories"
    }
  },
  IN: {
    type: "state",
    options: {
      "IN-AN": "Andaman and Nicobar Islands",
      "IN-AP": "Andhra Pradesh",
      "IN-AR": "Arunachal Pradesh",
      "IN-AS": "Assam",
      "IN-BR": "Bihar",
      "IN-CH": "Chandigarh",
      "IN-CT": "Chhattisgarh",
      "IN-DN": "Dadra and Nagar Haveli and Daman and Diu",
      "IN-DL": "Delhi",
      "IN-GA": "Goa",
      "IN-GJ": "Gujarat",
      "IN-HR": "Haryana",
      "IN-HP": "Himachal Pradesh",
      "IN-JH": "Jharkhand",
      "IN-KA": "Karnataka",
      "IN-KL": "Kerala",
      "IN-LD": "Lakshadweep",
      "IN-MP": "Madhya Pradesh",
      "IN-MH": "Maharashtra",
      "IN-MN": "Manipur",
      "IN-ML": "Meghalaya",
      "IN-MZ": "Mizoram",
      "IN-NL": "Nagaland",
      "IN-OR": "Odisha",
      "IN-PY": "Puducherry",
      "IN-PB": "Punjab",
      "IN-RJ": "Rajasthan",
      "IN-SK": "Sikkim",
      "IN-TN": "Tamil Nadu",
      "IN-TG": "Telangana",
      "IN-TR": "Tripura",
      "IN-UP": "Uttar Pradesh",
      "IN-UT": "Uttarakhand",
      "IN-WB": "West Bengal"
    }
  },
  IE: {
    type: "county",
    options: {
      "IE-CW": "Carlow",
      "IE-CN": "Cavan",
      "IE-CE": "Clare",
      "IE-C": "Cork",
      "IE-D": "Dublin",
      "IE-DL": "Donegal",
      "IE-G": "Galway",
      "IE-KY": "Kerry",
      "IE-KE": "Kildare",
      "IE-KK": "Kilkenny",
      "IE-LS": "Laois",
      "IE-LM": "Leitrim",
      "IE-LK": "Limerick",
      "IE-LD": "Longford",
      "IE-LH": "Louth",
      "IE-MO": "Mayo",
      "IE-MH": "Meath",
      "IE-MN": "Monaghan",
      "IE-OY": "Offaly",
      "IE-RN": "Roscommon",
      "IE-SO": "Sligo",
      "IE-TA": "Tipperary",
      "IE-WD": "Waterford",
      "IE-WH": "Westmeath",
      "IE-WX": "Wexford",
      "IE-WW": "Wicklow"
    }
  },
  IT: {
    type: "province",
    options: {
      "IT-AG": "Agrigento",
      "IT-AL": "Alessandria",
      "IT-AN": "Ancona",
      "IT-AO": "Aosta",
      "IT-AR": "Arezzo",
      "IT-AP": "Ascoli Piceno",
      "IT-AT": "Asti",
      "IT-AV": "Avellino",
      "IT-BA": "Bari",
      "IT-BT": "Barletta-Andria-Trani",
      "IT-BL": "Belluno",
      "IT-BN": "Benevento",
      "IT-BG": "Bergamo",
      "IT-BI": "Biella",
      "IT-BO": "Bologna",
      "IT-BZ": "Bolzano",
      "IT-BS": "Brescia",
      "IT-BR": "Brindisi",
      "IT-CA": "Cagliari",
      "IT-CL": "Caltanissetta",
      "IT-CB": "Campobasso",
      "IT-CI": "Carbonia-Iglesias",
      "IT-CE": "Caserta",
      "IT-CT": "Catania",
      "IT-CZ": "Catanzaro",
      "IT-CH": "Chieti",
      "IT-CO": "Como",
      "IT-CS": "Cosenza",
      "IT-CR": "Cremona",
      "IT-KR": "Crotone",
      "IT-CN": "Cuneo",
      "IT-EN": "Enna",
      "IT-FM": "Fermo",
      "IT-FE": "Ferrara",
      "IT-FI": "Firenze",
      "IT-FG": "Foggia",
      "IT-FC": "Forl\xEC-Cesena",
      "IT-FR": "Frosinone",
      "IT-GE": "Genova",
      "IT-GO": "Gorizia",
      "IT-GR": "Grosseto",
      "IT-IM": "Imperia",
      "IT-IS": "Isernia",
      "IT-SP": "La Spezia",
      "IT-AQ": "L'Aquila",
      "IT-LT": "Latina",
      "IT-LE": "Lecce",
      "IT-LC": "Lecco",
      "IT-LI": "Livorno",
      "IT-LO": "Lodi",
      "IT-LU": "Lucca",
      "IT-MC": "Macerata",
      "IT-MN": "Mantova",
      "IT-MS": "Massa-Carrara",
      "IT-MT": "Matera",
      "IT-VS": "Medio Campidano",
      "IT-ME": "Messina",
      "IT-MI": "Milano",
      "IT-MO": "Modena",
      "IT-MB": "Monza e Brianza",
      "IT-NA": "Napoli",
      "IT-NO": "Novara",
      "IT-NU": "Nuoro",
      "IT-OG": "Ogliastra",
      "IT-OT": "Olbia-Tempio",
      "IT-OR": "Oristano",
      "IT-PD": "Padova",
      "IT-PA": "Palermo",
      "IT-PR": "Parma",
      "IT-PV": "Pavia",
      "IT-PG": "Perugia",
      "IT-PU": "Pesaro e Urbino",
      "IT-PE": "Pescara",
      "IT-PC": "Piacenza",
      "IT-PI": "Pisa",
      "IT-PT": "Pistoia",
      "IT-PN": "Pordenone",
      "IT-PZ": "Potenza",
      "IT-PO": "Prato",
      "IT-RG": "Ragusa",
      "IT-RA": "Ravenna",
      "IT-RC": "Reggio Calabria",
      "IT-RE": "Reggio Emilia",
      "IT-RI": "Rieti",
      "IT-RN": "Rimini",
      "IT-RM": "Roma",
      "IT-RO": "Rovigo",
      "IT-SA": "Salerno",
      "IT-SS": "Sassari",
      "IT-SV": "Savona",
      "IT-SI": "Siena",
      "IT-SR": "Siracusa",
      "IT-SO": "Sondrio",
      "IT-TA": "Taranto",
      "IT-TE": "Teramo",
      "IT-TR": "Terni",
      "IT-TO": "Torino",
      "IT-TP": "Trapani",
      "IT-TN": "Trento",
      "IT-TV": "Treviso",
      "IT-TS": "Trieste",
      "IT-UD": "Udine",
      "IT-VA": "Varese",
      "IT-VE": "Venezia",
      "IT-VB": "Verbano-Cusio-Ossola",
      "IT-VC": "Vercelli",
      "IT-VR": "Verona",
      "IT-VV": "Vibo Valentia",
      "IT-VI": "Vicenza",
      "IT-VT": "Viterbo"
    }
  },
  JP: {
    type: "prefecture",
    options: {
      "JP-01": "Hokkaido",
      "JP-02": "Aomori",
      "JP-03": "Iwate",
      "JP-04": "Miyagi",
      "JP-05": "Akita",
      "JP-06": "Yamagata",
      "JP-07": "Fukushima",
      "JP-08": "Ibaraki",
      "JP-09": "Tochigi",
      "JP-10": "Gunma",
      "JP-11": "Saitama",
      "JP-12": "Chiba",
      "JP-13": "Tokyo",
      "JP-14": "Kanagawa",
      "JP-15": "Niigata",
      "JP-16": "Toyama",
      "JP-17": "Ishikawa",
      "JP-18": "Fukui",
      "JP-19": "Yamanashi",
      "JP-20": "Nagano",
      "JP-21": "Gifu",
      "JP-22": "Shizuoka",
      "JP-23": "Aichi",
      "JP-24": "Mie",
      "JP-25": "Shiga",
      "JP-26": "Kyoto",
      "JP-27": "Osaka",
      "JP-28": "Hyogo",
      "JP-29": "Nara",
      "JP-30": "Wakayama",
      "JP-31": "Tottori",
      "JP-32": "Shimane",
      "JP-33": "Okayama",
      "JP-34": "Hiroshima",
      "JP-35": "Yamaguchi",
      "JP-36": "Tokushima",
      "JP-37": "Kagawa",
      "JP-38": "Ehime",
      "JP-39": "Kochi",
      "JP-40": "Fukuoka",
      "JP-41": "Saga",
      "JP-42": "Nagasaki",
      "JP-43": "Kumamoto",
      "JP-44": "Oita",
      "JP-45": "Miyazaki",
      "JP-46": "Kagoshima",
      "JP-47": "Okinawa"
    }
  },
  KW: {
    type: "governorate",
    options: {
      "KW-AH": "Al Ahmadi",
      "KW-FA": "Al Farwaniyah",
      "KW-HA": "Hawalli",
      "KW-JA": "Al Jahra",
      "KW-KU": "Capital",
      "KW-MU": "Mubarak Al-Kabeer"
    }
  },
  MY: {
    type: "stateOrTerritory",
    options: {
      "MY-01": "Johor",
      "MY-02": "Kedah",
      "MY-03": "Kelantan",
      "MY-04": "Melaka",
      "MY-05": "Negeri Sembilan",
      "MY-06": "Pahang",
      "MY-08": "Perak",
      "MY-09": "Perlis",
      "MY-07": "Pulau Pinang",
      "MY-12": "Sabah",
      "MY-13": "Sarawak",
      "MY-10": "Selangor",
      "MY-11": "Terengganu",
      "MY-14": "Wilayah Persekutuan Kuala Lumpur",
      "MY-15": "Wilayah Persekutuan Labuan",
      "MY-16": "Wilayah Persekutuan Putrajaya"
    }
  },
  MX: {
    type: "state",
    options: {
      "MX-AGU": "Aguascalientes",
      "MX-BCN": "Baja California",
      "MX-BCS": "Baja California Sur",
      "MX-CAM": "Campeche",
      "MX-CMX": "Ciudad de M\xE9xico",
      "MX-COA": "Coahuila de Zaragoza",
      "MX-COL": "Colima",
      "MX-CHP": "Chiapas",
      "MX-CHH": "Chihuahua",
      "MX-DUR": "Durango",
      "MX-GUA": "Guanajuato",
      "MX-GRO": "Guerrero",
      "MX-HID": "Hidalgo",
      "MX-JAL": "Jalisco",
      "MX-MEX": "M\xE9xico",
      "MX-MIC": "Michoac\xE1n de Ocampo",
      "MX-MOR": "Morelos",
      "MX-NAY": "Nayarit",
      "MX-NLE": "Nuevo Le\xF3n",
      "MX-OAX": "Oaxaca",
      "MX-PUE": "Puebla",
      "MX-QUE": "Quer\xE9taro",
      "MX-ROO": "Quintana Roo",
      "MX-SLP": "San Luis Potos\xED",
      "MX-SIN": "Sinaloa",
      "MX-SON": "Sonora",
      "MX-TAB": "Tabasco",
      "MX-TAM": "Tamaulipas",
      "MX-TLA": "Tlaxcala",
      "MX-VER": "Veracruz de Ignacio de la Llave",
      "MX-YUC": "Yucat\xE1n",
      "MX-ZAC": "Zacatecas"
    }
  },
  NZ: {
    type: "region",
    options: {
      "NZ-AUK": "Auckland",
      "NZ-BOP": "Bay of Plenty",
      "NZ-CAN": "Canterbury",
      "NZ-CIT": "Chatham Islands Territory",
      "NZ-GIS": "Gisborne",
      "NZ-WGN": "Greater Wellington",
      "NZ-HKB": "Hawke's Bay",
      "NZ-MWT": "Manawat\u016B-Whanganui",
      "NZ-MBH": "Marlborough",
      "NZ-NSN": "Nelson",
      "NZ-NTL": "Northland",
      "NZ-OTA": "Otago",
      "NZ-STL": "Southland",
      "NZ-TKI": "Taranaki",
      "NZ-TAS": "Tasman",
      "NZ-WKO": "Waikato",
      "NZ-WTC": "West Coast"
    }
  },
  NG: {
    type: "state",
    options: {
      "NG-AB": "Abia",
      "NG-AD": "Adamawa",
      "NG-AK": "Akwa Ibom",
      "NG-AN": "Anambra",
      "NG-BA": "Bauchi",
      "NG-BY": "Bayelsa",
      "NG-BE": "Benue",
      "NG-BO": "Borno",
      "NG-CR": "Cross River",
      "NG-DE": "Delta",
      "NG-EB": "Ebonyi",
      "NG-ED": "Edo",
      "NG-EK": "Ekiti",
      "NG-EN": "Enugu",
      "NG-FC": "Federal Capital Territory",
      "NG-GO": "Gombe",
      "NG-IM": "Imo",
      "NG-JI": "Jigawa",
      "NG-KD": "Kaduna",
      "NG-KN": "Kano",
      "NG-KT": "Katsina",
      "NG-KE": "Kebbi",
      "NG-KO": "Kogi",
      "NG-KW": "Kwara",
      "NG-LA": "Lagos",
      "NG-NA": "Nasarawa",
      "NG-NI": "Niger",
      "NG-OG": "Ogun",
      "NG-ON": "Ondo",
      "NG-OS": "Osun",
      "NG-OY": "Oyo",
      "NG-PL": "Plateau",
      "NG-RI": "Rivers",
      "NG-SO": "Sokoto",
      "NG-TA": "Taraba",
      "NG-YO": "Yobe",
      "NG-ZA": "Zamfara"
    }
  },
  PA: {
    type: "province",
    options: {
      "PA-1": "Bocas del Toro",
      "PA-4": "Chiriqu\xED",
      "PA-2": "Cocl\xE9",
      "PA-3": "Col\xF3n",
      "PA-5": "Dari\xE9n",
      "PA-6": "Herrera",
      "PA-7": "Los Santos",
      "PA-8": "Panam\xE1",
      "PA-9": "Panam\xE1 Oeste",
      "PA-10": "Veraguas",
      "PA-EM": "Ember\xE1",
      "PA-KY": "Guna Yala",
      "PA-NB": "Ng\xE4be-Bugl\xE9"
    }
  },
  PE: {
    type: "province",
    options: {
      "PE-AMA": "Amazonas",
      "PE-ANC": "Ancash",
      "PE-APU": "Apur\xEDmac",
      "PE-ARE": "Arequipa",
      "PE-AYA": "Ayacucho",
      "PE-CAJ": "Cajamarca",
      "PE-CAL": "El Callao",
      "PE-CUS": "Cusco",
      "PE-HUV": "Huancavelica",
      "PE-HUC": "Hu\xE1nuco",
      "PE-ICA": "Ica",
      "PE-JUN": "Jun\xEDn",
      "PE-LAL": "La Libertad",
      "PE-LAM": "Lambayeque",
      "PE-LIMD": "Lima (Department)",
      "PE-LIM": "Lima (Metropolitan)",
      "PE-LOR": "Loreto",
      "PE-MDD": "Madre de Dios",
      "PE-MOQ": "Moquegua",
      "PE-PAS": "Pasco",
      "PE-PIU": "Piura",
      "PE-PUN": "Puno",
      "PE-SAM": "San Mart\xEDn",
      "PE-TAC": "Tacna",
      "PE-TUM": "Tumbes",
      "PE-UCA": "Ucayali"
    }
  },
  PH: {
    type: "region",
    options: {
      "PH-ABR": "Abra",
      "PH-AGN": "Agusan del Norte",
      "PH-AGS": "Agusan del Sur",
      "PH-AKL": "Aklan",
      "PH-ALB": "Albay",
      "PH-ANT": "Antique",
      "PH-APA": "Apayao",
      "PH-AUR": "Aurora",
      "PH-BAS": "Basilan",
      "PH-BAN": "Bataan",
      "PH-BTG": "Batangas",
      "PH-BEN": "Benguet",
      "PH-BOH": "Bohol",
      "PH-BUK": "Bukidnon",
      "PH-BUL": "Bulacan",
      "PH-CAG": "Cagayan",
      "PH-CAM": "Camiguin",
      "PH-CAN": "Camarines Norte",
      "PH-CAS": "Camarines Sur",
      "PH-CAP": "Capiz",
      "PH-CAT": "Catanduanes",
      "PH-CAV": "Cavite",
      "PH-CEB": "Cebu",
      "PH-COM": "Compostela Valley",
      "PH-COT": "Cotabato",
      "PH-DAV": "Davao del Norte",
      "PH-DAS": "Davao del Sur",
      "PH-DAO": "Davao Oriental",
      "PH-EAS": "Eastern Samar",
      "PH-GUI": "Guimaras",
      "PH-IFU": "Ifugao",
      "PH-ILN": "Ilocos Norte",
      "PH-ILS": "Ilocos Sur",
      "PH-ILI": "Iloilo",
      "PH-ISA": "Isabela",
      "PH-KAL": "Kalinga",
      "PH-LUN": "La Union",
      "PH-LAG": "Laguna",
      "PH-LAN": "Lanao del Norte",
      "PH-LAS": "Lanao del Sur",
      "PH-LEY": "Leyte",
      "PH-MAG": "Maguindanao",
      "PH-MAD": "Marinduque",
      "PH-MAS": "Masbate",
      "PH-MDC": "Misamis Occidental",
      "PH-MDR": "Misamis Oriental",
      "PH-MOU": "Mountain Province",
      "PH-NEC": "Negros Occidental",
      "PH-NER": "Negros Oriental",
      "PH-NCO": "North Cotabato",
      "PH-NSA": "Northern Samar",
      "PH-NUE": "Nueva Ecija",
      "PH-NUV": "Nueva Vizcaya",
      "PH-PLW": "Palawan",
      "PH-PAM": "Pampanga",
      "PH-PAN": "Pangasinan",
      "PH-QUE": "Quezon",
      "PH-QUI": "Quirino",
      "PH-RIZ": "Rizal",
      "PH-ROM": "Romblon",
      "PH-WSA": "Samar",
      "PH-SAR": "Sarangani",
      "PH-SIG": "Siquijor",
      "PH-SOR": "Sorsogon",
      "PH-SCO": "South Cotabato",
      "PH-SLE": "Southern Leyte",
      "PH-SUK": "Sultan Kudarat",
      "PH-SLU": "Sulu",
      "PH-SUN": "Surigao del Norte",
      "PH-SUR": "Surigao del Sur",
      "PH-TAR": "Tarlac",
      "PH-TAW": "Tawi-Tawi",
      "PH-ZMB": "Zambales",
      "PH-ZAN": "Zamboanga del Norte",
      "PH-ZAS": "Zamboanga del Sur",
      "PH-ZSI": "Zamboanga Sibugay",
      "PH-00": "Metro Manila"
    }
  },
  PT: {
    type: "district",
    options: {
      "PT-01": "Aveiro",
      "PT-02": "Beja",
      "PT-03": "Braga",
      "PT-04": "Bragan\xE7a",
      "PT-05": "Castelo Branco",
      "PT-06": "Coimbra",
      "PT-07": "\xC9vora",
      "PT-08": "Faro",
      "PT-09": "Guarda",
      "PT-10": "Leiria",
      "PT-11": "Lisboa",
      "PT-12": "Portalegre",
      "PT-13": "Porto",
      "PT-14": "Santar\xE9m",
      "PT-15": "Set\xFAbal",
      "PT-16": "Viana do Castelo",
      "PT-17": "Vila Real",
      "PT-18": "Viseu",
      "PT-20": "Azores",
      "PT-30": "Madeira"
    }
  },
  RO: {
    type: "county",
    options: {
      "RO-AB": "Alba",
      "RO-AR": "Arad",
      "RO-AG": "Arge\u0219",
      "RO-BC": "Bac\u0103u",
      "RO-BH": "Bihor",
      "RO-BN": "Bistri\u021Ba-N\u0103s\u0103ud",
      "RO-BT": "Boto\u0219ani",
      "RO-BV": "Bra\u0219ov",
      "RO-BR": "Br\u0103ila",
      "RO-BZ": "Buz\u0103u",
      "RO-CS": "Cara\u0219-Severin",
      "RO-CL": "C\u0103l\u0103ra\u0219i",
      "RO-CJ": "Cluj",
      "RO-CT": "Constan\u021Ba",
      "RO-CV": "Covasna",
      "RO-DB": "D\xE2mbovi\u021Ba",
      "RO-DJ": "Dolj",
      "RO-GL": "Gala\u021Bi",
      "RO-GR": "Giurgiu",
      "RO-GJ": "Gorj",
      "RO-HR": "Harghita",
      "RO-HD": "Hunedoara",
      "RO-IL": "Ialomi\u021Ba",
      "RO-IS": "Ia\u0219i",
      "RO-MM": "Maramure\u0219",
      "RO-MH": "Mehedin\u021Bi",
      "RO-MS": "Mure\u0219",
      "RO-NT": "Neam\u021B",
      "RO-OT": "Olt",
      "RO-PH": "Prahova",
      "RO-SJ": "S\u0103laj",
      "RO-SM": "Satu Mare",
      "RO-SB": "Sibiu",
      "RO-SV": "Suceava",
      "RO-TR": "Teleorman",
      "RO-TM": "Timi\u0219",
      "RO-TL": "Tulcea",
      "RO-VS": "Vaslui",
      "RO-VL": "V\xE2lcea",
      "RO-VN": "Vrancea"
    }
  },
  RU: {
    type: "region",
    options: {
      "RU-AD": "Adygea",
      "RU-AL": "Altai",
      "RU-ALT": "Altai Krai",
      "RU-AMU": "Amur",
      "RU-ARK": "Arkhangelsk",
      "RU-AST": "Astrakhan",
      "RU-BA": "Bashkortostan",
      "RU-BEL": "Belgorod",
      "RU-BRY": "Bryansk",
      "RU-BU": "Buryat",
      "RU-CE": "Chechen",
      "RU-CHE": "Chelyabinsk",
      "RU-CHU": "Chukotka Okrug",
      "RU-CU": "Chuvash",
      "RU-DA": "Dagestan",
      "RU-IRK": "Irkutsk",
      "RU-IVA": "Ivanovo",
      "RU-YEV": "Jewish",
      "RU-KB": "Kabardino-Balkar",
      "RU-KGD": "Kaliningrad",
      "RU-KLU": "Kaluga",
      "RU-KAM": "Kamchatka Krai",
      "RU-KC": "Karachay-Cherkess",
      "RU-KEM": "Kemerovo",
      "RU-KHA": "Khabarovsk Krai",
      "RU-KHM": "Khanty-Mansi",
      "RU-KIR": "Kirov",
      "RU-KO": "Komi",
      "RU-KOS": "Kostroma",
      "RU-KDA": "Krasnodar Krai",
      "RU-KYA": "Krasnoyarsk Krai",
      "RU-KGN": "Kurgan",
      "RU-KRS": "Kursk",
      "RU-LEN": "Leningrad",
      "RU-LIP": "Lipetsk",
      "RU-MAG": "Magadan",
      "RU-ME": "Mari El",
      "RU-MOW": "Moscow",
      "RU-MOS": "Moscow Province",
      "RU-MUR": "Murmansk",
      "RU-NIZ": "Nizhny Novgorod",
      "RU-NGR": "Novgorod",
      "RU-NVS": "Novosibirsk",
      "RU-OMS": "Omsk",
      "RU-ORE": "Orenburg",
      "RU-ORL": "Oryol",
      "RU-PNZ": "Penza",
      "RU-PER": "Perm Krai",
      "RU-PRI": "Primorsky Krai",
      "RU-PSK": "Pskov",
      "RU-SA": "Sakha",
      "RU-SAK": "Sakhalin",
      "RU-SAM": "Samara",
      "RU-SAR": "Saratov",
      "RU-SMO": "Smolensk",
      "RU-SE": "North Ossetia-Alania",
      "RU-STA": "Stavropol Krai",
      "RU-SVE": "Sverdlovsk",
      "RU-TAM": "Tambov",
      "RU-TOM": "Tomsk",
      "RU-TUL": "Tula",
      "RU-TVE": "Tver",
      "RU-TYU": "Tyumen",
      "RU-TY": "Tuva",
      "RU-UD": "Udmurt",
      "RU-ULY": "Ulyanovsk",
      "RU-VLA": "Vladimir",
      "RU-VGG": "Volgograd",
      "RU-VLG": "Vologda",
      "RU-VOR": "Voronezh",
      "RU-YAN": "Yamalo-Nenets Okrug",
      "RU-YAR": "Yaroslavl",
      "RU-ZAB": "Zabaykalsky Krai"
    }
  },
  ZA: {
    type: "province",
    options: {
      "ZA-EC": "Eastern Cape",
      "ZA-FS": "Free State",
      "ZA-GT": "Gauteng",
      "ZA-NL": "KwaZulu-Natal",
      "ZA-LP": "Limpopo",
      "ZA-MP": "Mpumalanga",
      "ZA-NC": "Northern Cape",
      "ZA-NW": "North West",
      "ZA-WC": "Western Cape"
    }
  },
  KR: {
    type: "province",
    options: {
      "KR-11": "Seoul",
      "KR-26": "Busan",
      "KR-27": "Daegu",
      "KR-28": "Incheon",
      "KR-29": "Gwangju",
      "KR-30": "Daejeon",
      "KR-31": "Ulsan",
      "KR-41": "Gyeonggi",
      "KR-42": "Gangwon",
      "KR-43": "North Chungcheong",
      "KR-44": "South Chungcheong",
      "KR-45": "North Jeolla",
      "KR-46": "South Jeolla",
      "KR-47": "North Gyeongsang",
      "KR-48": "South Gyeongsang",
      "KR-49": "Jeju"
    }
  },
  ES: {
    type: "province",
    options: {
      "ES-A": "A Coru\xF1a",
      "ES-AB": "Albacete",
      "ES-AL": "Almer\xEDa",
      "ES-AN": "Andaluc\xEDa",
      "ES-AR": "Arag\xF3n",
      "ES-AS": "Asturias",
      "ES-AV": "\xC1vila",
      "ES-B": "Barcelona",
      "ES-BA": "Badajoz",
      "ES-BI": "Bizkaia",
      "ES-BU": "Burgos",
      "ES-C": "C\xE1ceres",
      "ES-CA": "C\xE1diz",
      "ES-CM": "Castilla-La Mancha",
      "ES-CL": "Castilla y Le\xF3n",
      "ES-CN": "Canarias",
      "ES-CT": "Catalunya",
      "ES-CE": "Ceuta",
      "ES-CR": "Ciudad Real",
      "ES-CO": "C\xF3rdoba",
      "ES-CU": "Cuenca",
      "ES-EX": "Extremadura",
      "ES-GA": "Galicia",
      "ES-GI": "Girona",
      "ES-GR": "Granada",
      "ES-GU": "Guadalajara",
      "ES-H": "Huelva",
      "ES-HU": "Huesca",
      "ES-IB": "Illes Balears",
      "ES-J": "Ja\xE9n",
      "ES-JA": "Jerez",
      "ES-LE": "Le\xF3n",
      "ES-L": "Lleida",
      "ES-LO": "La Rioja",
      "ES-LU": "Lugo",
      "ES-M": "Madrid",
      "ES-MA": "M\xE1laga",
      "ES-MU": "Murcia",
      "ES-NA": "Navarra",
      "ES-NC": "Nouvelle-Cal\xE9donie",
      "ES-O": "Ourense",
      "ES-P": "Palencia",
      "ES-PM": "Palma",
      "ES-PO": "Pontevedra",
      "ES-SA": "Salamanca",
      "ES-SG": "Segovia",
      "ES-SE": "Sevilla",
      "ES-SO": "Soria",
      "ES-T": "Tarragona",
      "ES-TE": "Teruel",
      "ES-TO": "Toledo",
      "ES-V": "Valencia",
      "ES-VA": "Valladolid",
      "ES-VI": "Vizcaya",
      "ES-Z": "Zaragoza",
      "ES-ZA": "Zamora"
    }
  },
  TH: {
    type: "province",
    options: {
      "TH-10": "Bangkok",
      "TH-11": "Samut Prakan",
      "TH-12": "Nonthaburi",
      "TH-13": "Pathum Thani",
      "TH-14": "Phra Nakhon Si Ayutthaya",
      "TH-15": "Ang Thong",
      "TH-16": "Lop Buri",
      "TH-17": "Sing Buri",
      "TH-18": "Chai Nat",
      "TH-19": "Saraburi",
      "TH-20": "Chon Buri",
      "TH-21": "Rayong",
      "TH-22": "Chanthaburi",
      "TH-23": "Trat",
      "TH-24": "Chachoengsao",
      "TH-25": "Prachin Buri",
      "TH-26": "Nakhon Nayok",
      "TH-27": "Sa Kaeo",
      "TH-30": "Nakhon Ratchasima",
      "TH-31": "Buri Ram",
      "TH-32": "Surin",
      "TH-33": "Si Sa Ket",
      "TH-34": "Ubon Ratchathani",
      "TH-35": "Yasothon",
      "TH-36": "Chaiyaphum",
      "TH-37": "Amnat Charoen",
      "TH-38": "Bueng Kan",
      "TH-39": "Nong Bua Lam Phu",
      "TH-40": "Khon Kaen",
      "TH-41": "Udon Thani",
      "TH-42": "Loei",
      "TH-43": "Nong Khai",
      "TH-44": "Maha Sarakham",
      "TH-45": "Roi Et",
      "TH-46": "Kalasin",
      "TH-47": "Sakon Nakhon",
      "TH-48": "Nakhon Phanom",
      "TH-49": "Mukdahan",
      "TH-50": "Chiang Mai",
      "TH-51": "Lamphun",
      "TH-52": "Lampang",
      "TH-53": "Uttaradit",
      "TH-54": "Phrae",
      "TH-55": "Nan",
      "TH-56": "Phayao",
      "TH-57": "Chiang Rai",
      "TH-58": "Mae Hong Son",
      "TH-60": "Nakhon Sawan",
      "TH-61": "Uthai Thani",
      "TH-62": "Kamphaeng Phet",
      "TH-63": "Tak",
      "TH-64": "Sukhothai",
      "TH-65": "Phitsanulok",
      "TH-66": "Phichit",
      "TH-67": "Phetchabun",
      "TH-70": "Ratchaburi",
      "TH-71": "Kanchanaburi",
      "TH-72": "Suphan Buri",
      "TH-73": "Nakhon Pathom",
      "TH-74": "Samut Sakhon",
      "TH-75": "Samut Songkhram",
      "TH-76": "Phetchaburi",
      "TH-77": "Prachuap Khiri Khan",
      "TH-80": "Nakhon Si Thammarat",
      "TH-81": "Krabi",
      "TH-82": "Phang Nga",
      "TH-83": "Phuket",
      "TH-84": "Surat Thani",
      "TH-85": "Ranong",
      "TH-86": "Chumphon",
      "TH-90": "Songkhla",
      "TH-91": "Satun",
      "TH-92": "Trang",
      "TH-93": "Phatthalung",
      "TH-94": "Pattani",
      "TH-95": "Yala",
      "TH-96": "Narathiwat"
    }
  },
  AE: {
    type: "emirate",
    options: {
      "AE-AJ": "Ajman",
      "AE-AZ": "Abu Dhabi",
      "AE-DU": "Dubai",
      "AE-FU": "Fujairah",
      "AE-RK": "Ras al-Khaimah",
      "AE-SH": "Sharjah",
      "AE-UQ": "Umm al-Quwain"
    }
  },
  UY: {
    type: "department",
    options: {
      "UY-AR": "Artigas",
      "UY-CA": "Canelones",
      "UY-CL": "Cerro Largo",
      "UY-CO": "Colonia",
      "UY-DU": "Durazno",
      "UY-FD": "Flores",
      "UY-FS": "Florida",
      "UY-LA": "Lavalleja",
      "UY-MA": "Maldonado",
      "UY-MO": "Montevideo",
      "UY-PA": "Paysand\xFA",
      "UY-RN": "R\xEDo Negro",
      "UY-RV": "Rivera",
      "UY-RO": "Rocha",
      "UY-SA": "Salto",
      "UY-SJ": "San Jos\xE9",
      "UY-SO": "Soriano",
      "UY-TA": "Tacuaremb\xF3",
      "UY-TT": "Treinta y Tres"
    }
  },
  US: {
    type: "state",
    options: {
      "US-AL": "Alabama",
      "US-AK": "Alaska",
      "US-AZ": "Arizona",
      "US-AR": "Arkansas",
      "US-CA": "California",
      "US-CO": "Colorado",
      "US-CT": "Connecticut",
      "US-FL": "Florida",
      "US-GA": "Georgia",
      "US-HI": "Hawaii",
      "US-ID": "Idaho",
      "US-IL": "Illinois",
      "US-IN": "Indiana",
      "US-IA": "Iowa",
      "US-KS": "Kansas",
      "US-KY": "Kentucky",
      "US-LA": "Louisiana",
      "US-ME": "Maine",
      "US-MD": "Maryland",
      "US-MA": "Massachusetts",
      "US-MI": "Michigan",
      "US-MN": "Minnesota",
      "US-MS": "Mississippi",
      "US-MO": "Missouri",
      "US-NE": "Nebraska",
      "US-NV": "Nevada",
      "US-NJ": "New Jersey",
      "US-NM": "New Mexico",
      "US-NY": "New York",
      "US-NC": "North Carolina",
      "US-ND": "North Dakota",
      "US-OH": "Ohio",
      "US-OK": "Oklahoma",
      "US-PA": "Pennsylvania",
      "US-PR": "Puerto Rico",
      "US-RI": "Rhode Island",
      "US-SC": "South Carolina",
      "US-SD": "South Dakota",
      "US-TN": "Tennessee",
      "US-TX": "Texas",
      "US-UT": "Utah",
      "US-VT": "Vermont",
      "US-VA": "Virginia",
      "US-WA": "Washington",
      "US-DC": "Washington DC",
      "US-WV": "West Virginia",
      "US-WI": "Wisconsin",
      "US-WY": "Wyoming"
    }
  },
  VE: {
    type: "state",
    options: {
      "VE-A": "Distrito Capital",
      "VE-B": "Anzo\xE1tegui",
      "VE-C": "Apure",
      "VE-D": "Aragua",
      "VE-E": "Barinas",
      "VE-F": "Bol\xEDvar",
      "VE-G": "Carabobo",
      "VE-H": "Cojedes",
      "VE-I": "Falc\xF3n",
      "VE-J": "Gu\xE1rico",
      "VE-K": "Lara",
      "VE-L": "M\xE9rida",
      "VE-M": "Miranda",
      "VE-N": "Monagas",
      "VE-O": "Nueva Esparta",
      "VE-P": "Portuguesa",
      "VE-R": "Sucre",
      "VE-S": "T\xE1chira",
      "VE-T": "Trujillo",
      "VE-U": "La Guaira",
      "VE-V": "Yaracuy",
      "VE-W": "Zulia",
      "VE-X": "Dependencias Federales",
      "VE-Y": "Vargas"
    }
  }
};

export {
  getCountryProvinceObjectByIso2,
  getProvinceByIso2,
  isProvinceInCountry
};