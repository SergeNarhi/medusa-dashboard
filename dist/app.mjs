import "./chunk-4GQOUCX6.mjs";
import {
  TaxRegionDetailBreadcrumb,
  taxRegionLoader
} from "./chunk-PUMOOUZF.mjs";
import {
  useReturnReasons
} from "./chunk-JGYJERUT.mjs";
import {
  Thumbnail
} from "./chunk-TOMHEGT5.mjs";
import {
  I18n
} from "./chunk-ADV5ZEOM.mjs";
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title
} from "./chunk-NQ53YZ7K.mjs";
import {
  FilePreview
} from "./chunk-DLK3KGP5.mjs";
import {
  Divider
} from "./chunk-7XWP2AR2.mjs";
import "./chunk-VDBOSWVE.mjs";
import {
  Skeleton
} from "./chunk-LPEUYMRK.mjs";
import "./chunk-RBEBIPW6.mjs";
import {
  ConditionalTooltip
} from "./chunk-OC7BQLYI.mjs";
import {
  languages
} from "./chunk-4XWPEQS4.mjs";
import "./chunk-LJQNRGKD.mjs";
import {
  notificationQueryKeys,
  useNotifications,
  useProductTags,
  useVariants
} from "./chunk-UMNS46LA.mjs";
import {
  useLogout
} from "./chunk-4YM46CJI.mjs";
import {
  useApiKeys
} from "./chunk-MVS2MLD5.mjs";
import "./chunk-6YTJEFSJ.mjs";
import {
  useTaxRegions
} from "./chunk-ZT6F5MCR.mjs";
import "./chunk-JODJECSK.mjs";
import {
  useProductTypes
} from "./chunk-F2FX7KCH.mjs";
import "./chunk-RVOQ4QHC.mjs";
import {
  useShippingProfiles
} from "./chunk-XTMZKMOZ.mjs";
import "./chunk-BQN4VGEZ.mjs";
import "./chunk-6GGI4OZ2.mjs";
import {
  useMe,
  useUsers
} from "./chunk-PH5TFBJO.mjs";
import "./chunk-GHJM3KWM.mjs";
import {
  usePriceLists
} from "./chunk-6IW74BRC.mjs";
import {
  useCustomerGroups,
  useCustomers
} from "./chunk-6FTYBCYU.mjs";
import {
  useCollections
} from "./chunk-C7J3KXU4.mjs";
import {
  useCampaigns,
  usePromotions
} from "./chunk-22SBRBNJ.mjs";
import "./chunk-STLKFKTM.mjs";
import {
  useStockLocations
} from "./chunk-7IYWGNFM.mjs";
import {
  useOrders
} from "./chunk-FQ3W3CD6.mjs";
import "./chunk-M7TK4QZI.mjs";
import {
  useSalesChannels
} from "./chunk-D5QHHX42.mjs";
import {
  useProductCategories
} from "./chunk-JEH3SANT.mjs";
import {
  useStore
} from "./chunk-CSL6R7SM.mjs";
import {
  useRegions
} from "./chunk-OFR32LXC.mjs";
import "./chunk-JFVS6F3P.mjs";
import {
  DashboardExtensionManager,
  DashboardExtensionProvider,
  ErrorBoundary,
  createRouteMap,
  getRouteExtensions,
  useDashboardExtension
} from "./chunk-MYZNNCXD.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import {
  useProducts
} from "./chunk-GVVSRVWO.mjs";
import {
  useInventoryItems
} from "./chunk-VZXSXNQY.mjs";
import {
  queryClient
} from "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import {
  sdk
} from "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/providers/providers.tsx
import { Toaster, TooltipProvider } from "@medusajs/ui";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

// src/providers/i18n-provider/i18n-provider.tsx
import { I18nProvider as Provider } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var I18nProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const locale = languages.find((lan) => lan.code === i18n.language)?.code || languages[0].code;
  return /* @__PURE__ */ jsx(Provider, { locale, children });
};

// src/providers/theme-provider/theme-provider.tsx
import { useEffect, useState } from "react";

// src/providers/theme-provider/theme-context.tsx
import { createContext } from "react";
var ThemeContext = createContext(null);

// src/providers/theme-provider/theme-provider.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var THEME_KEY = "medusa_admin_theme";
function getDefaultValue() {
  const persisted = localStorage?.getItem(THEME_KEY);
  if (persisted) {
    return persisted;
  }
  return "system";
}
function getThemeValue(selected) {
  if (selected === "system") {
    if (window !== void 0) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }
  return selected;
}
var ThemeProvider = ({ children }) => {
  const [state, setState] = useState(getDefaultValue());
  const [value, setValue] = useState(getThemeValue(state));
  const setTheme = (theme) => {
    localStorage.setItem(THEME_KEY, theme);
    const themeValue = getThemeValue(theme);
    setState(theme);
    setValue(themeValue);
  };
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      const css = document.createElement("style");
      css.appendChild(
        document.createTextNode(
          `* {
            -webkit-transition: none !important;
            -moz-transition: none !important;
            -o-transition: none !important;
            -ms-transition: none !important;
            transition: none !important;
          }`
        )
      );
      document.head.appendChild(css);
      html.classList.remove(value === "light" ? "dark" : "light");
      html.classList.add(value);
      html.style.colorScheme = value;
      window.getComputedStyle(css).opacity;
      document.head.removeChild(css);
    }
  }, [value]);
  return /* @__PURE__ */ jsx2(ThemeContext.Provider, { value: { theme: state, setTheme }, children });
};

// src/providers/theme-provider/use-theme.tsx
import { useContext } from "react";
var useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// src/providers/providers.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var Providers = ({ api, children }) => {
  return /* @__PURE__ */ jsx3(TooltipProvider, { children: /* @__PURE__ */ jsx3(DashboardExtensionProvider, { api, children: /* @__PURE__ */ jsx3(HelmetProvider, { children: /* @__PURE__ */ jsx3(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsx3(I18n, {}),
    /* @__PURE__ */ jsx3(I18nProvider, { children }),
    /* @__PURE__ */ jsx3(Toaster, {})
  ] }) }) }) }) });
};

// src/providers/router-provider/router-provider.tsx
import {
  RouterProvider as Provider2,
  createBrowserRouter
} from "react-router-dom";

// src/providers/router-provider/route-map.tsx
import { Outlet as Outlet4 } from "react-router-dom";
import { t } from "i18next";

// src/components/authentication/protected-route/protected-route.tsx
import { Spinner as Spinner2 } from "@medusajs/icons";
import { Navigate, Outlet, useLocation as useLocation3 } from "react-router-dom";

// src/providers/search-provider/search-provider.tsx
import { useEffect as useEffect6, useState as useState6 } from "react";

// src/components/search/search.tsx
import {
  Badge,
  Button,
  clx,
  DropdownMenu,
  IconButton,
  Kbd,
  Text
} from "@medusajs/ui";
import { Command } from "cmdk";
import {
  Children,
  forwardRef,
  Fragment,
  useCallback as useCallback3,
  useEffect as useEffect4,
  useImperativeHandle,
  useMemo as useMemo2,
  useRef,
  useState as useState4
} from "react";
import { useTranslation as useTranslation4 } from "react-i18next";
import { useLocation, useNavigate as useNavigate2 } from "react-router-dom";
import {
  ArrowUturnLeft,
  MagnifyingGlass,
  Plus,
  Spinner,
  TriangleDownMini
} from "@medusajs/icons";
import { matchSorter } from "match-sorter";

// src/components/search/constants.ts
var SEARCH_AREAS = [
  "all",
  "order",
  "product",
  "productVariant",
  "collection",
  "category",
  "inventory",
  "customer",
  "customerGroup",
  "promotion",
  "campaign",
  "priceList",
  "user",
  "region",
  "taxRegion",
  "returnReason",
  "salesChannel",
  "productType",
  "productTag",
  "location",
  "shippingProfile",
  "publishableApiKey",
  "secretApiKey",
  "command",
  "navigation"
];
var DEFAULT_SEARCH_LIMIT = 3;
var SEARCH_LIMIT_INCREMENT = 20;

// src/components/search/use-search-results.tsx
import { keepPreviousData } from "@tanstack/react-query";
import { useCallback as useCallback2, useEffect as useEffect3, useMemo, useState as useState3 } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";

// src/providers/keybind-provider/hooks.tsx
import debounceFn from "lodash/debounce";
import { useCallback, useContext as useContext2, useEffect as useEffect2, useState as useState2 } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useNavigate } from "react-router-dom";

// src/providers/keybind-provider/keybind-context.tsx
import { createContext as createContext2 } from "react";
var KeybindContext = createContext2(null);

// src/providers/keybind-provider/utils.ts
var findFirstPlatformMatch = (keys) => {
  const match = Object.entries(keys).filter(
    ([, value]) => value.length > 0
  )[0] ?? [];
  return match.length ? {
    platform: match[0],
    keys: match[1]
  } : null;
};
var getShortcutKeys = (shortcut) => {
  const platform = "Mac";
  const keys = shortcut.keys[platform];
  if (!keys) {
    const defaultPlatform = findFirstPlatformMatch(shortcut.keys);
    console.warn(
      `No keys found for platform "${platform}" in "${shortcut.label}" ${defaultPlatform ? `using keys for platform "${defaultPlatform.platform}"` : ""}`
    );
    return defaultPlatform ? defaultPlatform.keys : [];
  }
  return keys;
};
var keysMatch = (keys1, keys2) => {
  return keys1.length === keys2.length && keys1.every(
    (key, index) => key.toLowerCase() === keys2[index].toLowerCase()
  );
};
var findShortcutIndex = (shortcuts, keys) => {
  if (!keys.length) {
    return -1;
  }
  let index = 0;
  for (const shortcut of shortcuts) {
    const shortcutKeys = getShortcutKeys(shortcut);
    if (keysMatch(shortcutKeys, keys)) {
      return index;
    }
    index++;
  }
  return -1;
};
var findShortcut = (shortcuts, keys) => {
  const shortcutIndex = findShortcutIndex(shortcuts, keys);
  return shortcutIndex > -1 ? shortcuts[shortcutIndex] : null;
};
var getShortcutWithDefaultValues = (shortcut, platform = "Mac") => {
  const platforms = ["Mac", "Windows", "Linux"];
  const defaultKeys = Object.values(shortcut.keys)[0] ?? shortcut.keys[platform];
  const keys = platforms.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: shortcut.keys[curr] ?? defaultKeys
    };
  }, {});
  return {
    ...shortcut,
    keys,
    _defaultKeys: shortcut.keys
  };
};

// src/providers/keybind-provider/hooks.tsx
var useShortcuts = ({
  shortcuts = [],
  debounce
}) => {
  const [keys, setKeys] = useState2([]);
  const navigate = useNavigate();
  const removeKeys = useCallback(
    debounceFn(() => setKeys([]), debounce),
    []
  );
  const invokeShortcut = useCallback(
    debounceFn((shortcut) => {
      if (shortcut && shortcut.callback) {
        shortcut.callback();
        setKeys([]);
        return;
      }
      if (shortcut && shortcut.to) {
        navigate(shortcut.to);
        setKeys([]);
        return;
      }
    }, debounce / 2),
    []
  );
  useEffect2(() => {
    if (keys.length > 0 && shortcuts.length > 0) {
      const shortcut = findShortcut(shortcuts, keys);
      invokeShortcut(shortcut);
    }
    return () => invokeShortcut.cancel();
  }, [keys, shortcuts, invokeShortcut]);
  useEffect2(() => {
    const listener = (event) => {
      const target = event.target;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.contentEditable === "true") {
        removeKeys();
        return;
      }
      setKeys((oldKeys) => [...oldKeys, event.key]);
      removeKeys();
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [removeKeys]);
};
var useGlobalShortcuts = () => {
  const { t: t2 } = useTranslation2();
  const navigate = useNavigate();
  const { mutateAsync } = useLogout();
  const handleLogout = async () => {
    await mutateAsync(void 0, {
      onSuccess: () => {
        queryClient.clear();
        navigate("/login");
      }
    });
  };
  const globalShortcuts = [
    // Pages
    {
      keys: {
        Mac: ["G", "O"]
      },
      label: t2("app.keyboardShortcuts.navigation.goToOrders"),
      type: "pageShortcut",
      to: "/orders"
    },
    {
      keys: {
        Mac: ["G", "P"]
      },
      label: t2("app.keyboardShortcuts.navigation.goToProducts"),
      type: "pageShortcut",
      to: "/products"
    },
    {
      keys: {
        Mac: ["G", "C"]
      },
      label: t2("app.keyboardShortcuts.navigation.goToCollections"),
      type: "pageShortcut",
      to: "/collections"
    },
    {
      keys: {
        Mac: ["G", "A"]
      },
      label: t2("app.keyboardShortcuts.navigation.goToCategories"),
      type: "pageShortcut",
      to: "/categories"
    },
    {
      keys: {
        Mac: ["G", "U"]
      },
      label: t2("app.keyboardShortcuts.navigation.goToCustomers"),
      type: "pageShortcut",
      to: "/customers"
    },
    {
      keys: {
        Mac: ["G", "G"]
      },
      label: t2("app.keyboardShortcuts.navigation.goToCustomerGroups"),
      type: "pageShortcut",
      to: "/customer-groups"
    },
    {
      keys: {
        Mac: ["G", "I"]
      },
      label: t2("app.keyboardShortcuts.navigation.goToInventory"),
      type: "pageShortcut",
      to: "/inventory"
    },
    {
      keys: {
        Mac: ["G", "R"]
      },
      label: t2("app.keyboardShortcuts.navigation.goToReservations"),
      type: "pageShortcut",
      to: "/reservations"
    },
    {
      keys: {
        Mac: ["G", "L"]
      },
      label: t2("app.keyboardShortcuts.navigation.goToPriceLists"),
      type: "pageShortcut",
      to: "/price-lists"
    },
    {
      keys: {
        Mac: ["G", "M"]
      },
      label: t2("app.keyboardShortcuts.navigation.goToPromotions"),
      type: "pageShortcut",
      to: "/promotions"
    },
    {
      keys: {
        Mac: ["G", "K"]
      },
      label: t2("app.keyboardShortcuts.navigation.goToCampaigns"),
      type: "pageShortcut",
      to: "/campaigns"
    },
    // Settings
    {
      keys: {
        Mac: ["G", ","]
      },
      label: t2("app.keyboardShortcuts.settings.goToSettings"),
      type: "settingShortcut",
      to: "/settings"
    },
    {
      keys: {
        Mac: ["G", ",", "S"]
      },
      label: t2("app.keyboardShortcuts.settings.goToStore"),
      type: "settingShortcut",
      to: "/settings/store"
    },
    {
      keys: {
        Mac: ["G", ",", "U"]
      },
      label: t2("app.keyboardShortcuts.settings.goToUsers"),
      type: "settingShortcut",
      to: "/settings/users"
    },
    {
      keys: {
        Mac: ["G", ",", "R"]
      },
      label: t2("app.keyboardShortcuts.settings.goToRegions"),
      type: "settingShortcut",
      to: "/settings/regions"
    },
    {
      keys: {
        Mac: ["G", ",", "T"]
      },
      label: t2("app.keyboardShortcuts.settings.goToTaxRegions"),
      type: "settingShortcut",
      to: "/settings/tax-regions"
    },
    {
      keys: {
        Mac: ["G", ",", "A"]
      },
      label: t2("app.keyboardShortcuts.settings.goToSalesChannels"),
      type: "settingShortcut",
      to: "/settings/sales-channels"
    },
    {
      keys: {
        Mac: ["G", ",", "P"]
      },
      label: t2("app.keyboardShortcuts.settings.goToProductTypes"),
      type: "settingShortcut",
      to: "/settings/product-types"
    },
    {
      keys: {
        Mac: ["G", ",", "L"]
      },
      label: t2("app.keyboardShortcuts.settings.goToLocations"),
      type: "settingShortcut",
      to: "/settings/locations"
    },
    {
      keys: {
        Mac: ["G", ",", "M"]
      },
      label: t2("app.keyboardShortcuts.settings.goToReturnReasons"),
      type: "settingShortcut",
      to: "/settings/return-reasons"
    },
    {
      keys: {
        Mac: ["G", ",", "J"]
      },
      label: t2("app.keyboardShortcuts.settings.goToPublishableApiKeys"),
      type: "settingShortcut",
      to: "/settings/publishable-api-keys"
    },
    {
      keys: {
        Mac: ["G", ",", "K"]
      },
      label: t2("app.keyboardShortcuts.settings.goToSecretApiKeys"),
      type: "settingShortcut",
      to: "/settings/secret-api-keys"
    },
    {
      keys: {
        Mac: ["G", ",", "W"]
      },
      label: t2("app.keyboardShortcuts.settings.goToWorkflows"),
      type: "settingShortcut",
      to: "/settings/workflows"
    },
    {
      keys: {
        Mac: ["G", ",", "M"]
      },
      label: t2("app.keyboardShortcuts.settings.goToProfile"),
      type: "settingShortcut",
      to: "/settings/profile"
    },
    // Commands
    {
      keys: {
        Mac: ["B", "Y", "E"]
      },
      label: t2("actions.logout"),
      type: "commandShortcut",
      callback: () => handleLogout()
    }
  ];
  return globalShortcuts;
};

// src/components/search/use-search-results.tsx
var useSearchResults = ({
  q,
  limit,
  area = "all"
}) => {
  const staticResults = useStaticSearchResults(area);
  const { dynamicResults, isFetching } = useDynamicSearchResults(area, limit, q);
  return {
    staticResults,
    dynamicResults,
    isFetching
  };
};
var useStaticSearchResults = (currentArea) => {
  const globalCommands = useGlobalShortcuts();
  const results = useMemo(() => {
    const groups = /* @__PURE__ */ new Map();
    globalCommands.forEach((command) => {
      const group = groups.get(command.type) || [];
      group.push(command);
      groups.set(command.type, group);
    });
    let filteredGroups;
    switch (currentArea) {
      case "all":
        filteredGroups = Array.from(groups);
        break;
      case "navigation":
        filteredGroups = Array.from(groups).filter(
          ([type]) => type === "pageShortcut" || type === "settingShortcut"
        );
        break;
      case "command":
        filteredGroups = Array.from(groups).filter(
          ([type]) => type === "commandShortcut"
        );
        break;
      default:
        filteredGroups = [];
    }
    return filteredGroups.map(([title, items]) => ({
      title,
      items
    }));
  }, [globalCommands, currentArea]);
  return results;
};
var useDynamicSearchResults = (currentArea, limit, q) => {
  const { t: t2 } = useTranslation3();
  const debouncedSearch = useDebouncedSearch(q, 300);
  const orderResponse = useOrders(
    {
      q: debouncedSearch?.replace(/^#/, ""),
      // Since we display the ID with a # prefix, it's natural for the user to include it in the search. This will however cause no results to be returned, so we remove the # prefix from the search query.
      limit,
      fields: "id,display_id,email"
    },
    {
      enabled: isAreaEnabled(currentArea, "order"),
      placeholderData: keepPreviousData
    }
  );
  const productResponse = useProducts(
    {
      q: debouncedSearch,
      limit,
      fields: "id,title,thumbnail"
    },
    {
      enabled: isAreaEnabled(currentArea, "product"),
      placeholderData: keepPreviousData
    }
  );
  const productVariantResponse = useVariants(
    {
      q: debouncedSearch,
      limit,
      fields: "id,title,sku"
    },
    {
      enabled: isAreaEnabled(currentArea, "productVariant"),
      placeholderData: keepPreviousData
    }
  );
  const categoryResponse = useProductCategories(
    {
      // TODO: Remove the OR condition once the list endpoint does not throw when q equals an empty string
      q: debouncedSearch || void 0,
      limit,
      fields: "id,name"
    },
    {
      enabled: isAreaEnabled(currentArea, "category"),
      placeholderData: keepPreviousData
    }
  );
  const collectionResponse = useCollections(
    {
      q: debouncedSearch,
      limit,
      fields: "id,title"
    },
    {
      enabled: isAreaEnabled(currentArea, "collection"),
      placeholderData: keepPreviousData
    }
  );
  const customerResponse = useCustomers(
    {
      q: debouncedSearch,
      limit,
      fields: "id,email,first_name,last_name"
    },
    {
      enabled: isAreaEnabled(currentArea, "customer"),
      placeholderData: keepPreviousData
    }
  );
  const customerGroupResponse = useCustomerGroups(
    {
      q: debouncedSearch,
      limit,
      fields: "id,name"
    },
    {
      enabled: isAreaEnabled(currentArea, "customerGroup"),
      placeholderData: keepPreviousData
    }
  );
  const inventoryResponse = useInventoryItems(
    {
      q: debouncedSearch,
      limit,
      fields: "id,title,sku"
    },
    {
      enabled: isAreaEnabled(currentArea, "inventory"),
      placeholderData: keepPreviousData
    }
  );
  const promotionResponse = usePromotions(
    {
      q: debouncedSearch,
      limit,
      fields: "id,code"
    },
    {
      enabled: isAreaEnabled(currentArea, "promotion"),
      placeholderData: keepPreviousData
    }
  );
  const campaignResponse = useCampaigns(
    {
      q: debouncedSearch,
      limit,
      fields: "id,name"
    },
    {
      enabled: isAreaEnabled(currentArea, "campaign"),
      placeholderData: keepPreviousData
    }
  );
  const priceListResponse = usePriceLists(
    {
      q: debouncedSearch,
      limit,
      fields: "id,title"
    },
    {
      enabled: isAreaEnabled(currentArea, "priceList"),
      placeholderData: keepPreviousData
    }
  );
  const userResponse = useUsers(
    {
      q: debouncedSearch,
      limit,
      fields: "id,email,first_name,last_name"
    },
    {
      enabled: isAreaEnabled(currentArea, "user"),
      placeholderData: keepPreviousData
    }
  );
  const regionResponse = useRegions(
    {
      q: debouncedSearch,
      limit,
      fields: "id,name"
    },
    {
      enabled: isAreaEnabled(currentArea, "region"),
      placeholderData: keepPreviousData
    }
  );
  const taxRegionResponse = useTaxRegions(
    {
      q: debouncedSearch,
      limit,
      fields: "id,country_code,province_code"
    },
    {
      enabled: isAreaEnabled(currentArea, "taxRegion"),
      placeholderData: keepPreviousData
    }
  );
  const returnReasonResponse = useReturnReasons(
    {
      q: debouncedSearch,
      limit,
      fields: "id,label,value"
    },
    {
      enabled: isAreaEnabled(currentArea, "returnReason"),
      placeholderData: keepPreviousData
    }
  );
  const salesChannelResponse = useSalesChannels(
    {
      q: debouncedSearch,
      limit,
      fields: "id,name"
    },
    {
      enabled: isAreaEnabled(currentArea, "salesChannel"),
      placeholderData: keepPreviousData
    }
  );
  const productTypeResponse = useProductTypes(
    {
      q: debouncedSearch,
      limit,
      fields: "id,value"
    },
    {
      enabled: isAreaEnabled(currentArea, "productType"),
      placeholderData: keepPreviousData
    }
  );
  const productTagResponse = useProductTags(
    {
      q: debouncedSearch,
      limit,
      fields: "id,value"
    },
    {
      enabled: isAreaEnabled(currentArea, "productTag"),
      placeholderData: keepPreviousData
    }
  );
  const locationResponse = useStockLocations(
    {
      q: debouncedSearch,
      limit,
      fields: "id,name"
    },
    {
      enabled: isAreaEnabled(currentArea, "location"),
      placeholderData: keepPreviousData
    }
  );
  const shippingProfileResponse = useShippingProfiles(
    {
      q: debouncedSearch,
      limit,
      fields: "id,name"
    },
    {
      enabled: isAreaEnabled(currentArea, "shippingProfile"),
      placeholderData: keepPreviousData
    }
  );
  const publishableApiKeyResponse = useApiKeys(
    {
      q: debouncedSearch,
      limit,
      fields: "id,title,redacted",
      type: "publishable"
    },
    {
      enabled: isAreaEnabled(currentArea, "publishableApiKey"),
      placeholderData: keepPreviousData
    }
  );
  const secretApiKeyResponse = useApiKeys(
    {
      q: debouncedSearch,
      limit,
      fields: "id,title,redacted",
      type: "secret"
    },
    {
      enabled: isAreaEnabled(currentArea, "secretApiKey"),
      placeholderData: keepPreviousData
    }
  );
  const responseMap = useMemo(
    () => ({
      order: orderResponse,
      product: productResponse,
      productVariant: productVariantResponse,
      collection: collectionResponse,
      category: categoryResponse,
      inventory: inventoryResponse,
      customer: customerResponse,
      customerGroup: customerGroupResponse,
      promotion: promotionResponse,
      campaign: campaignResponse,
      priceList: priceListResponse,
      user: userResponse,
      region: regionResponse,
      taxRegion: taxRegionResponse,
      returnReason: returnReasonResponse,
      salesChannel: salesChannelResponse,
      productType: productTypeResponse,
      productTag: productTagResponse,
      location: locationResponse,
      shippingProfile: shippingProfileResponse,
      publishableApiKey: publishableApiKeyResponse,
      secretApiKey: secretApiKeyResponse
    }),
    [
      orderResponse,
      productResponse,
      productVariantResponse,
      inventoryResponse,
      categoryResponse,
      collectionResponse,
      customerResponse,
      customerGroupResponse,
      promotionResponse,
      campaignResponse,
      priceListResponse,
      userResponse,
      regionResponse,
      taxRegionResponse,
      returnReasonResponse,
      salesChannelResponse,
      productTypeResponse,
      productTagResponse,
      locationResponse,
      shippingProfileResponse,
      publishableApiKeyResponse,
      secretApiKeyResponse
    ]
  );
  const results = useMemo(() => {
    const groups = Object.entries(responseMap).map(([key, response]) => {
      const area = key;
      if (isAreaEnabled(currentArea, area) || currentArea === "all") {
        return transformDynamicSearchResults(area, limit, t2, response);
      }
      return null;
    }).filter(Boolean);
    return groups;
  }, [responseMap, currentArea, limit, t2]);
  const isAreaFetching = useCallback2(
    (area) => {
      if (area === "all") {
        return Object.values(responseMap).some(
          (response) => response.isFetching
        );
      }
      return isAreaEnabled(currentArea, area) && responseMap[area]?.isFetching;
    },
    [currentArea, responseMap]
  );
  const isFetching = useMemo(() => {
    return isAreaFetching(currentArea);
  }, [currentArea, isAreaFetching]);
  const dynamicResults = q ? results.filter(
    (group) => !!group && group.items.length > 0
  ) : [];
  return {
    dynamicResults,
    isFetching
  };
};
var useDebouncedSearch = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState3(value);
  useEffect3(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
function isAreaEnabled(area, currentArea) {
  if (area === "all") {
    return true;
  }
  if (area === currentArea) {
    return true;
  }
  return false;
}
var transformMap = {
  order: {
    dataKey: "orders",
    transform: (order) => ({
      id: order.id,
      title: `#${order.display_id}`,
      subtitle: order.email ?? void 0,
      to: `/orders/${order.id}`,
      value: `order:${order.id}`
    })
  },
  product: {
    dataKey: "products",
    transform: (product) => ({
      id: product.id,
      title: product.title,
      to: `/products/${product.id}`,
      thumbnail: product.thumbnail ?? void 0,
      value: `product:${product.id}`
    })
  },
  productVariant: {
    dataKey: "variants",
    transform: (variant) => ({
      id: variant.id,
      title: variant.title,
      subtitle: variant.sku ?? void 0,
      to: `/products/${variant.product_id}/variants/${variant.id}`,
      value: `variant:${variant.id}`
    })
  },
  category: {
    dataKey: "product_categories",
    transform: (category) => ({
      id: category.id,
      title: category.name,
      to: `/categories/${category.id}`,
      value: `category:${category.id}`
    })
  },
  inventory: {
    dataKey: "inventory_items",
    transform: (inventory) => ({
      id: inventory.id,
      title: inventory.title ?? "",
      subtitle: inventory.sku ?? void 0,
      to: `/inventory/${inventory.id}`,
      value: `inventory:${inventory.id}`
    })
  },
  customer: {
    dataKey: "customers",
    transform: (customer) => {
      const name = [customer.first_name, customer.last_name].filter(Boolean).join(" ");
      return {
        id: customer.id,
        title: name || customer.email,
        subtitle: name ? customer.email : void 0,
        to: `/customers/${customer.id}`,
        value: `customer:${customer.id}`
      };
    }
  },
  customerGroup: {
    dataKey: "customer_groups",
    transform: (customerGroup) => ({
      id: customerGroup.id,
      title: customerGroup.name,
      to: `/customer-groups/${customerGroup.id}`,
      value: `customerGroup:${customerGroup.id}`
    })
  },
  collection: {
    dataKey: "collections",
    transform: (collection) => ({
      id: collection.id,
      title: collection.title,
      to: `/collections/${collection.id}`,
      value: `collection:${collection.id}`
    })
  },
  promotion: {
    dataKey: "promotions",
    transform: (promotion) => ({
      id: promotion.id,
      title: promotion.code,
      to: `/promotions/${promotion.id}`,
      value: `promotion:${promotion.id}`
    })
  },
  campaign: {
    dataKey: "campaigns",
    transform: (campaign) => ({
      id: campaign.id,
      title: campaign.name,
      to: `/campaigns/${campaign.id}`,
      value: `campaign:${campaign.id}`
    })
  },
  priceList: {
    dataKey: "price_lists",
    transform: (priceList) => ({
      id: priceList.id,
      title: priceList.title,
      to: `/price-lists/${priceList.id}`,
      value: `priceList:${priceList.id}`
    })
  },
  user: {
    dataKey: "users",
    transform: (user) => ({
      id: user.id,
      title: `${user.first_name} ${user.last_name}`,
      subtitle: user.email,
      to: `/users/${user.id}`,
      value: `user:${user.id}`
    })
  },
  region: {
    dataKey: "regions",
    transform: (region) => ({
      id: region.id,
      title: region.name,
      to: `/regions/${region.id}`,
      value: `region:${region.id}`
    })
  },
  taxRegion: {
    dataKey: "tax_regions",
    transform: (taxRegion) => ({
      id: taxRegion.id,
      title: taxRegion.province_code?.toUpperCase() ?? taxRegion.country_code.toUpperCase(),
      subtitle: taxRegion.province_code ? taxRegion.country_code : void 0,
      to: `/tax-regions/${taxRegion.id}`,
      value: `taxRegion:${taxRegion.id}`
    })
  },
  returnReason: {
    dataKey: "return_reasons",
    transform: (returnReason) => ({
      id: returnReason.id,
      title: returnReason.label,
      subtitle: returnReason.value,
      to: `/return-reasons/${returnReason.id}/edit`,
      value: `returnReason:${returnReason.id}`
    })
  },
  salesChannel: {
    dataKey: "sales_channels",
    transform: (salesChannel) => ({
      id: salesChannel.id,
      title: salesChannel.name,
      to: `/sales-channels/${salesChannel.id}`,
      value: `salesChannel:${salesChannel.id}`
    })
  },
  productType: {
    dataKey: "product_types",
    transform: (productType) => ({
      id: productType.id,
      title: productType.value,
      to: `/product-types/${productType.id}`,
      value: `productType:${productType.id}`
    })
  },
  productTag: {
    dataKey: "product_tags",
    transform: (productTag) => ({
      id: productTag.id,
      title: productTag.value,
      to: `/product-tags/${productTag.id}`,
      value: `productTag:${productTag.id}`
    })
  },
  location: {
    dataKey: "stock_locations",
    transform: (location) => ({
      id: location.id,
      title: location.name,
      to: `/locations/${location.id}`,
      value: `location:${location.id}`
    })
  },
  shippingProfile: {
    dataKey: "shipping_profiles",
    transform: (shippingProfile) => ({
      id: shippingProfile.id,
      title: shippingProfile.name,
      to: `/shipping-profiles/${shippingProfile.id}`,
      value: `shippingProfile:${shippingProfile.id}`
    })
  },
  publishableApiKey: {
    dataKey: "api_keys",
    transform: (apiKey) => ({
      id: apiKey.id,
      title: apiKey.title,
      subtitle: apiKey.redacted,
      to: `/publishable-api-keys/${apiKey.id}`,
      value: `publishableApiKey:${apiKey.id}`
    })
  },
  secretApiKey: {
    dataKey: "api_keys",
    transform: (apiKey) => ({
      id: apiKey.id,
      title: apiKey.title,
      subtitle: apiKey.redacted,
      to: `/secret-api-keys/${apiKey.id}`,
      value: `secretApiKey:${apiKey.id}`
    })
  }
};
function transformDynamicSearchResults(type, limit, t2, response) {
  if (!response || !transformMap[type]) {
    return void 0;
  }
  const { dataKey, transform } = transformMap[type];
  const data = response[dataKey];
  if (!data || !Array.isArray(data)) {
    return void 0;
  }
  return {
    title: t2(`app.search.groups.${type}`),
    area: type,
    hasMore: response.count > limit,
    count: response.count,
    items: data.map(transform)
  };
}

// src/components/search/search.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var Search = () => {
  const [area, setArea] = useState4("all");
  const [search, setSearch] = useState4("");
  const [limit, setLimit] = useState4(DEFAULT_SEARCH_LIMIT);
  const { open, onOpenChange } = useSearch();
  const location = useLocation();
  const { t: t2 } = useTranslation4();
  const navigate = useNavigate2();
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const { staticResults, dynamicResults, isFetching } = useSearchResults({
    area,
    limit,
    q: search
  });
  const handleReset = useCallback3(() => {
    setArea("all");
    setSearch("");
    setLimit(DEFAULT_SEARCH_LIMIT);
  }, [setLimit]);
  const handleBack = () => {
    handleReset();
    inputRef.current?.focus();
  };
  const handleOpenChange = useCallback3(
    (open2) => {
      if (!open2) {
        handleReset();
      }
      onOpenChange(open2);
    },
    [onOpenChange, handleReset]
  );
  useEffect4(() => {
    handleOpenChange(false);
  }, [location.pathname, handleOpenChange]);
  const handleSelect = (item) => {
    handleOpenChange(false);
    if (item.to) {
      navigate(item.to);
      return;
    }
    if (item.callback) {
      item.callback();
      return;
    }
  };
  const handleShowMore = (area2) => {
    if (area2 === "all") {
      setLimit(DEFAULT_SEARCH_LIMIT);
    } else {
      setLimit(SEARCH_LIMIT_INCREMENT);
    }
    setArea(area2);
    inputRef.current?.focus();
  };
  const handleLoadMore = () => {
    setLimit((l) => l + SEARCH_LIMIT_INCREMENT);
  };
  const filteredStaticResults = useMemo2(() => {
    const filteredResults = [];
    staticResults.forEach((group) => {
      const filteredItems = matchSorter(group.items, search, {
        keys: ["label"]
      });
      if (filteredItems.length === 0) {
        return;
      }
      filteredResults.push({
        ...group,
        items: filteredItems
      });
    });
    return filteredResults;
  }, [staticResults, search]);
  const handleSearch = (q) => {
    setSearch(q);
    listRef.current?.scrollTo({ top: 0 });
  };
  const showLoading = useMemo2(() => {
    return isFetching && !dynamicResults.length && !filteredStaticResults.length;
  }, [isFetching, dynamicResults, filteredStaticResults]);
  return /* @__PURE__ */ jsxs2(CommandDialog, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsx4(
      CommandInput,
      {
        isFetching,
        ref: inputRef,
        area,
        setArea,
        value: search,
        onValueChange: handleSearch,
        onBack: area !== "all" ? handleBack : void 0,
        placeholder: t2("app.search.placeholder")
      }
    ),
    /* @__PURE__ */ jsxs2(CommandList, { ref: listRef, children: [
      showLoading && /* @__PURE__ */ jsx4(CommandLoading, {}),
      dynamicResults.map((group) => {
        return /* @__PURE__ */ jsxs2(CommandGroup, { heading: group.title, children: [
          group.items.map((item) => {
            return /* @__PURE__ */ jsx4(
              CommandItem,
              {
                onSelect: () => handleSelect(item),
                value: item.value,
                className: "flex items-center justify-between",
                children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-3", children: [
                  item.thumbnail && /* @__PURE__ */ jsx4(
                    Thumbnail,
                    {
                      alt: item.title,
                      src: item.thumbnail,
                      size: "small"
                    }
                  ),
                  /* @__PURE__ */ jsx4("span", { children: item.title }),
                  item.subtitle && /* @__PURE__ */ jsx4("span", { className: "text-ui-fg-muted", children: item.subtitle })
                ] })
              },
              item.id
            );
          }),
          group.hasMore && area === "all" && /* @__PURE__ */ jsx4(
            CommandItem,
            {
              onSelect: () => handleShowMore(group.area),
              hidden: true,
              value: `${group.title}:show:more`,
              children: /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-muted flex items-center gap-x-3", children: [
                /* @__PURE__ */ jsx4(Plus, {}),
                /* @__PURE__ */ jsx4(Text, { size: "small", leading: "compact", weight: "plus", children: t2("app.search.showMore") })
              ] })
            }
          ),
          group.hasMore && area === group.area && /* @__PURE__ */ jsx4(
            CommandItem,
            {
              onSelect: handleLoadMore,
              hidden: true,
              value: `${group.title}:load:more`,
              children: /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-muted flex items-center gap-x-3", children: [
                /* @__PURE__ */ jsx4(Plus, {}),
                /* @__PURE__ */ jsx4(Text, { size: "small", leading: "compact", weight: "plus", children: t2("app.search.loadMore", {
                  count: Math.min(
                    SEARCH_LIMIT_INCREMENT,
                    group.count - limit
                  )
                }) })
              ] })
            }
          )
        ] }, group.title);
      }),
      filteredStaticResults.map((group) => {
        return /* @__PURE__ */ jsx4(
          CommandGroup,
          {
            heading: t2(`app.keyboardShortcuts.${group.title}`),
            children: group.items.map((item) => {
              return /* @__PURE__ */ jsxs2(
                CommandItem,
                {
                  onSelect: () => handleSelect(item),
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ jsx4("span", { children: item.label }),
                    /* @__PURE__ */ jsx4("div", { className: "flex items-center gap-x-1.5", children: item.keys.Mac?.map((key, index) => {
                      return /* @__PURE__ */ jsxs2(
                        "div",
                        {
                          className: "flex items-center gap-x-1",
                          children: [
                            /* @__PURE__ */ jsx4(Kbd, { children: key }),
                            index < (item.keys.Mac?.length || 0) - 1 && /* @__PURE__ */ jsx4("span", { className: "txt-compact-xsmall text-ui-fg-subtle", children: t2("app.keyboardShortcuts.then") })
                          ]
                        },
                        index
                      );
                    }) })
                  ]
                },
                item.label
              );
            })
          },
          group.title
        );
      }),
      !showLoading && /* @__PURE__ */ jsx4(CommandEmpty, { q: search })
    ] })
  ] });
};
var CommandPalette = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  Command,
  {
    shouldFilter: false,
    ref,
    className: clx(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      className
    ),
    ...props
  }
));
CommandPalette.displayName = Command.displayName;
var CommandDialog = ({ children, ...props }) => {
  const { t: t2 } = useTranslation4();
  const preserveHeight = useMemo2(() => {
    return props.isLoading && Children.count(children) === 0;
  }, [props.isLoading, children]);
  return /* @__PURE__ */ jsx4(Root, { ...props, children: /* @__PURE__ */ jsxs2(Portal, { children: [
    /* @__PURE__ */ jsx4(Overlay, { className: "bg-ui-bg-overlay fixed inset-0" }),
    /* @__PURE__ */ jsxs2(
      Content,
      {
        className: clx(
          "bg-ui-bg-base shadow-elevation-modal fixed left-[50%] top-[50%] flex max-h-[calc(100%-16px)] w-[calc(100%-16px)] min-w-0 max-w-2xl translate-x-[-50%] translate-y-[-50%] flex-col overflow-hidden rounded-xl p-0",
          {
            "h-[300px]": preserveHeight
            // Prevents the dialog from collapsing when loading async results and before the no results message is displayed
          }
        ),
        children: [
          /* @__PURE__ */ jsx4(Title, { className: "sr-only", children: t2("app.search.title") }),
          /* @__PURE__ */ jsx4(Description, { className: "sr-only", children: t2("app.search.description") }),
          /* @__PURE__ */ jsx4(CommandPalette, { className: "[&_[cmdk-group-heading]]:text-muted-foreground flex h-full flex-col overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0", children }),
          /* @__PURE__ */ jsx4("div", { className: "bg-ui-bg-field text-ui-fg-subtle flex items-center justify-end border-t px-4 py-3", children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-3", children: [
            /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-2", children: [
              /* @__PURE__ */ jsx4(Text, { size: "xsmall", leading: "compact", children: t2("app.search.navigation") }),
              /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-1", children: [
                /* @__PURE__ */ jsx4(Kbd, { className: "bg-ui-bg-field-component", children: "\u2193" }),
                /* @__PURE__ */ jsx4(Kbd, { className: "bg-ui-bg-field-component", children: "\u2191" })
              ] })
            ] }),
            /* @__PURE__ */ jsx4("div", { className: "bg-ui-border-strong h-3 w-px" }),
            /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-2", children: [
              /* @__PURE__ */ jsx4(Text, { size: "xsmall", leading: "compact", children: t2("app.search.openResult") }),
              /* @__PURE__ */ jsx4(Kbd, { className: "bg-ui-bg-field-component", children: "\u21B5" })
            ] })
          ] }) })
        ]
      }
    )
  ] }) });
};
var CommandInput = forwardRef(
  ({
    className,
    value,
    onValueChange,
    area,
    setArea,
    isFetching,
    onBack,
    ...props
  }, ref) => {
    const { t: t2 } = useTranslation4();
    const innerRef = useRef(null);
    useImperativeHandle(
      ref,
      () => innerRef.current
    );
    return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col border-b", children: [
      /* @__PURE__ */ jsx4("div", { className: "px-4 pt-4", children: /* @__PURE__ */ jsxs2(DropdownMenu, { children: [
        /* @__PURE__ */ jsx4(DropdownMenu.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs2(
          Badge,
          {
            size: "2xsmall",
            className: "hover:bg-ui-bg-base-pressed transition-fg cursor-pointer",
            children: [
              t2(`app.search.groups.${area}`),
              /* @__PURE__ */ jsx4(TriangleDownMini, { className: "text-ui-fg-muted" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx4(
          DropdownMenu.Content,
          {
            align: "start",
            className: "h-full max-h-[360px] overflow-auto",
            onCloseAutoFocus: (e) => {
              e.preventDefault();
              innerRef.current?.focus();
            },
            children: /* @__PURE__ */ jsx4(
              DropdownMenu.RadioGroup,
              {
                value: area,
                onValueChange: (v) => setArea(v),
                children: SEARCH_AREAS.map((area2) => /* @__PURE__ */ jsxs2(Fragment, { children: [
                  area2 === "command" && /* @__PURE__ */ jsx4(DropdownMenu.Separator, {}),
                  /* @__PURE__ */ jsx4(DropdownMenu.RadioItem, { value: area2, children: t2(`app.search.groups.${area2}`) }),
                  area2 === "all" && /* @__PURE__ */ jsx4(DropdownMenu.Separator, {})
                ] }, area2))
              }
            )
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs2("div", { className: "relative flex items-center gap-x-2 px-4 py-3", children: [
        onBack && /* @__PURE__ */ jsx4(
          IconButton,
          {
            type: "button",
            size: "small",
            variant: "transparent",
            onClick: onBack,
            children: /* @__PURE__ */ jsx4(ArrowUturnLeft, { className: "text-ui-fg-muted" })
          }
        ),
        /* @__PURE__ */ jsx4(
          Command.Input,
          {
            ref: innerRef,
            value,
            onValueChange,
            className: clx(
              "placeholder:text-ui-fg-muted flex !h-6 w-full rounded-md bg-transparent text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props
          }
        ),
        /* @__PURE__ */ jsxs2("div", { className: "absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-end gap-x-2", children: [
          isFetching && /* @__PURE__ */ jsx4(Spinner, { className: "text-ui-fg-muted animate-spin" }),
          value && /* @__PURE__ */ jsx4(
            Button,
            {
              variant: "transparent",
              size: "small",
              className: "text-ui-fg-muted hover:text-ui-fg-subtle",
              type: "button",
              onClick: () => {
                onValueChange?.("");
                innerRef.current?.focus();
              },
              children: t2("actions.clear")
            }
          )
        ] })
      ] })
    ] });
  }
);
CommandInput.displayName = Command.Input.displayName;
var CommandList = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  Command.List,
  {
    ref,
    className: clx(
      "max-h-[300px] flex-1 overflow-y-auto overflow-x-hidden px-2 pb-4",
      className
    ),
    ...props
  }
));
CommandList.displayName = Command.List.displayName;
var CommandEmpty = forwardRef((props, ref) => {
  const { t: t2 } = useTranslation4();
  return /* @__PURE__ */ jsx4(Command.Empty, { ref, className: "py-6 text-center text-sm", ...props, children: /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle flex min-h-[236px] flex-col items-center justify-center gap-y-3", children: [
    /* @__PURE__ */ jsx4(MagnifyingGlass, { className: "text-ui-fg-subtle" }),
    /* @__PURE__ */ jsxs2("div", { className: "flex flex-col items-center justify-center gap-y-1", children: [
      /* @__PURE__ */ jsx4(Text, { size: "small", weight: "plus", leading: "compact", children: props.q ? t2("app.search.noResultsTitle") : t2("app.search.emptySearchTitle") }),
      /* @__PURE__ */ jsx4(Text, { size: "small", className: "text-ui-fg-muted", children: props.q ? t2("app.search.noResultsMessage") : t2("app.search.emptySearchMessage") })
    ] })
  ] }) });
});
CommandEmpty.displayName = Command.Empty.displayName;
var CommandLoading = forwardRef((props, ref) => {
  return /* @__PURE__ */ jsxs2(
    Command.Loading,
    {
      ref,
      ...props,
      className: "bg-ui-bg-base flex flex-col",
      children: [
        /* @__PURE__ */ jsx4("div", { className: "w-full px-2 pb-1 pt-3", children: /* @__PURE__ */ jsx4(Skeleton, { className: "h-5 w-10" }) }),
        Array.from({ length: 7 }).map((_, index) => /* @__PURE__ */ jsx4("div", { className: "w-full p-2", children: /* @__PURE__ */ jsx4(Skeleton, { className: "h-5 w-full" }) }, index))
      ]
    }
  );
});
CommandLoading.displayName = Command.Loading.displayName;
var CommandGroup = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  Command.Group,
  {
    ref,
    className: clx(
      "text-ui-fg-base [&_[cmdk-group-heading]]:text-ui-fg-muted [&_[cmdk-group-heading]]:txt-compact-xsmall-plus overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-item]]:py-2",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command.Group.displayName;
var CommandSeparator = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  Command.Separator,
  {
    ref,
    className: clx("bg-border -mx-1 h-px", className),
    ...props
  }
));
CommandSeparator.displayName = Command.Separator.displayName;
var CommandItem = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  Command.Item,
  {
    ref,
    className: clx(
      "aria-selected:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-hover txt-compact-small [&>svg]:text-ui-fg-subtle relative flex cursor-pointer select-none items-center gap-x-3 rounded-md p-2 outline-none data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command.Item.displayName;

// src/providers/sidebar-provider/sidebar-provider.tsx
import { useEffect as useEffect5, useState as useState5 } from "react";
import { useLocation as useLocation2 } from "react-router-dom";

// src/providers/sidebar-provider/sidebar-context.tsx
import { createContext as createContext3 } from "react";
var SidebarContext = createContext3(null);

// src/providers/sidebar-provider/sidebar-provider.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var SidebarProvider = ({ children }) => {
  const [desktop, setDesktop] = useState5(true);
  const [mobile, setMobile] = useState5(false);
  const { pathname } = useLocation2();
  const toggle = (view) => {
    if (view === "desktop") {
      setDesktop(!desktop);
    } else {
      setMobile(!mobile);
    }
  };
  useEffect5(() => {
    setMobile(false);
  }, [pathname]);
  return /* @__PURE__ */ jsx5(SidebarContext.Provider, { value: { desktop, mobile, toggle }, children });
};

// src/providers/sidebar-provider/use-sidebar.tsx
import { useContext as useContext3 } from "react";
var useSidebar = () => {
  const context = useContext3(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// src/providers/search-provider/search-context.tsx
import { createContext as createContext4 } from "react";
var SearchContext = createContext4(null);

// src/providers/search-provider/search-provider.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var SearchProvider = ({ children }) => {
  const [open, setOpen] = useState6(false);
  const { mobile, toggle } = useSidebar();
  const toggleSearch = () => {
    const update = !open;
    if (update && mobile) {
      toggle("mobile");
    }
    setOpen(update);
  };
  useEffect6(() => {
    const onKeyDown = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  return /* @__PURE__ */ jsxs3(
    SearchContext.Provider,
    {
      value: {
        open,
        onOpenChange: setOpen,
        toggleSearch
      },
      children: [
        children,
        /* @__PURE__ */ jsx6(Search, {})
      ]
    }
  );
};

// src/providers/search-provider/use-search.tsx
import { useContext as useContext4 } from "react";
var useSearch = () => {
  const context = useContext4(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

// src/components/authentication/protected-route/protected-route.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var ProtectedRoute = () => {
  const { user, isLoading } = useMe();
  const location = useLocation3();
  if (isLoading) {
    return /* @__PURE__ */ jsx7("div", { className: "flex min-h-screen items-center justify-center", children: /* @__PURE__ */ jsx7(Spinner2, { className: "text-ui-fg-interactive animate-spin" }) });
  }
  if (!user) {
    return /* @__PURE__ */ jsx7(Navigate, { to: "/login", state: { from: location }, replace: true });
  }
  return /* @__PURE__ */ jsx7(SidebarProvider, { children: /* @__PURE__ */ jsx7(SearchProvider, { children: /* @__PURE__ */ jsx7(Outlet, {}) }) });
};

// src/components/layout/main-layout/main-layout.tsx
import {
  BuildingStorefront,
  Buildings,
  ChevronDownMini,
  CogSixTooth,
  CurrencyDollar,
  EllipsisHorizontal as EllipsisHorizontal2,
  MagnifyingGlass as MagnifyingGlass2,
  MinusMini,
  OpenRectArrowOut as OpenRectArrowOut2,
  ReceiptPercent,
  ShoppingCart,
  SquaresPlus,
  Tag,
  Users
} from "@medusajs/icons";
import { Avatar as Avatar2, DropdownMenu as DropdownMenu3, Text as Text5, clx as clx6 } from "@medusajs/ui";
import * as Collapsible2 from "@radix-ui/react-collapsible";
import { useTranslation as useTranslation9 } from "react-i18next";

// src/components/layout/nav-item/nav-item.tsx
import { Kbd as Kbd2, Text as Text2, clx as clx2 } from "@medusajs/ui";
import * as Collapsible from "@radix-ui/react-collapsible";
import {
  useCallback as useCallback4,
  useEffect as useEffect7,
  useState as useState7
} from "react";
import { useTranslation as useTranslation5 } from "react-i18next";
import { NavLink, useLocation as useLocation4 } from "react-router-dom";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var BASE_NAV_LINK_CLASSES = "text-ui-fg-subtle transition-fg hover:bg-ui-bg-subtle-hover flex items-center gap-x-2 rounded-md py-0.5 pl-0.5 pr-2 outline-none [&>svg]:text-ui-fg-subtle focus-visible:shadow-borders-focus";
var ACTIVE_NAV_LINK_CLASSES = "bg-ui-bg-base shadow-elevation-card-rest text-ui-fg-base hover:bg-ui-bg-base";
var NESTED_NAV_LINK_CLASSES = "pl-[34px] pr-2 py-1 w-full text-ui-fg-muted";
var SETTING_NAV_LINK_CLASSES = "pl-2 py-1";
var getIsOpen = (to, items, pathname) => {
  return [to, ...items?.map((i) => i.to) ?? []].some(
    (p) => pathname.startsWith(p)
  );
};
var NavItemTooltip = ({
  to,
  children
}) => {
  const { t: t2 } = useTranslation5();
  const globalShortcuts = useGlobalShortcuts();
  const shortcut = globalShortcuts.find((s) => s.to === to);
  return /* @__PURE__ */ jsx8(
    ConditionalTooltip,
    {
      showTooltip: !!shortcut,
      maxWidth: 9999,
      content: /* @__PURE__ */ jsxs4("div", { className: "txt-compact-xsmall flex h-5 items-center justify-between gap-x-2 whitespace-nowrap", children: [
        /* @__PURE__ */ jsx8("span", { children: shortcut?.label }),
        /* @__PURE__ */ jsx8("div", { className: "flex items-center gap-x-1", children: shortcut?.keys.Mac?.map((key, index) => /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-x-1", children: [
          /* @__PURE__ */ jsx8(Kbd2, { children: key }, key),
          index < (shortcut.keys.Mac?.length || 0) - 1 && /* @__PURE__ */ jsx8("span", { className: "text-ui-fg-muted txt-compact-xsmall", children: t2("app.keyboardShortcuts.then") })
        ] }, index)) })
      ] }),
      side: "right",
      delayDuration: 1500,
      children: /* @__PURE__ */ jsx8("div", { className: "w-full", children })
    }
  );
};
var NavItem = ({
  icon,
  label,
  to,
  items,
  type = "core",
  from
}) => {
  const { pathname } = useLocation4();
  const [open, setOpen] = useState7(getIsOpen(to, items, pathname));
  useEffect7(() => {
    setOpen(getIsOpen(to, items, pathname));
  }, [pathname, to, items]);
  const navLinkClassNames = useCallback4(
    ({
      to: to2,
      isActive,
      isNested = false,
      isSetting: isSetting2 = false
    }) => {
      if (["core", "setting"].includes(type)) {
        isActive = pathname.startsWith(to2);
      }
      return clx2(BASE_NAV_LINK_CLASSES, {
        [NESTED_NAV_LINK_CLASSES]: isNested,
        [ACTIVE_NAV_LINK_CLASSES]: isActive,
        [SETTING_NAV_LINK_CLASSES]: isSetting2
      });
    },
    [type, pathname]
  );
  const isSetting = type === "setting";
  return /* @__PURE__ */ jsxs4("div", { className: "px-3", children: [
    /* @__PURE__ */ jsx8(NavItemTooltip, { to, children: /* @__PURE__ */ jsxs4(
      NavLink,
      {
        to,
        end: true,
        state: from ? {
          from
        } : void 0,
        className: ({ isActive }) => {
          return clx2(navLinkClassNames({ isActive, isSetting, to }), {
            "max-lg:hidden": !!items?.length
          });
        },
        children: [
          type !== "setting" && /* @__PURE__ */ jsx8("div", { className: "flex size-6 items-center justify-center", children: /* @__PURE__ */ jsx8(Icon, { icon, type }) }),
          /* @__PURE__ */ jsx8(Text2, { size: "small", weight: "plus", leading: "compact", children: label })
        ]
      }
    ) }),
    items && items.length > 0 && /* @__PURE__ */ jsxs4(Collapsible.Root, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs4(
        Collapsible.Trigger,
        {
          className: clx2(
            "text-ui-fg-subtle hover:text-ui-fg-base transition-fg hover:bg-ui-bg-subtle-hover flex w-full items-center gap-x-2 rounded-md py-0.5 pl-0.5 pr-2 outline-none lg:hidden",
            { "pl-2": isSetting }
          ),
          children: [
            /* @__PURE__ */ jsx8("div", { className: "flex size-6 items-center justify-center", children: /* @__PURE__ */ jsx8(Icon, { icon, type }) }),
            /* @__PURE__ */ jsx8(Text2, { size: "small", weight: "plus", leading: "compact", children: label })
          ]
        }
      ),
      /* @__PURE__ */ jsx8(Collapsible.Content, { children: /* @__PURE__ */ jsx8("div", { className: "flex flex-col gap-y-0.5 pb-2 pt-0.5", children: /* @__PURE__ */ jsxs4("ul", { className: "flex flex-col gap-y-0.5", children: [
        /* @__PURE__ */ jsx8("li", { className: "flex w-full items-center gap-x-1 lg:hidden", children: /* @__PURE__ */ jsx8(NavItemTooltip, { to, children: /* @__PURE__ */ jsx8(
          NavLink,
          {
            to,
            end: true,
            className: ({ isActive }) => {
              return clx2(
                navLinkClassNames({
                  to,
                  isActive,
                  isSetting,
                  isNested: true
                })
              );
            },
            children: /* @__PURE__ */ jsx8(Text2, { size: "small", weight: "plus", leading: "compact", children: label })
          }
        ) }) }),
        items.map((item) => {
          return /* @__PURE__ */ jsx8("li", { className: "flex h-7 items-center", children: /* @__PURE__ */ jsx8(NavItemTooltip, { to: item.to, children: /* @__PURE__ */ jsx8(
            NavLink,
            {
              to: item.to,
              end: true,
              className: ({ isActive }) => {
                return clx2(
                  navLinkClassNames({
                    to: item.to,
                    isActive,
                    isSetting,
                    isNested: true
                  })
                );
              },
              children: /* @__PURE__ */ jsx8(Text2, { size: "small", weight: "plus", leading: "compact", children: item.label })
            }
          ) }) }, item.to);
        })
      ] }) }) })
    ] })
  ] });
};
var Icon = ({ icon, type }) => {
  if (!icon) {
    return null;
  }
  return type === "extension" ? /* @__PURE__ */ jsx8("div", { className: "shadow-borders-base bg-ui-bg-base flex h-5 w-5 items-center justify-center rounded-[4px]", children: /* @__PURE__ */ jsx8("div", { className: "h-[15px] w-[15px] overflow-hidden rounded-sm", children: icon }) }) : icon;
};

// src/components/layout/shell/shell.tsx
import { SidebarLeft, TriangleRightMini, XMark } from "@medusajs/icons";
import { IconButton as IconButton3, clx as clx4 } from "@medusajs/ui";
import { useTranslation as useTranslation7 } from "react-i18next";
import { Link, Outlet as Outlet2, useMatches } from "react-router-dom";

// src/providers/keybind-provider/keybind-provider.tsx
import { useCallback as useCallback5, useMemo as useMemo3, useState as useState8 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var KeybindProvider = ({
  shortcuts,
  debounce = 500,
  children
}) => {
  const [storeShortcuts, setStoreCommands] = useState8(
    shortcuts.map((shr) => getShortcutWithDefaultValues(shr))
  );
  const registerShortcut = useCallback5(
    (shortcut) => {
      setStoreCommands((prevShortcuts) => {
        const idx = findShortcutIndex(shortcuts, getShortcutKeys(shortcut));
        const newShortcuts = [...prevShortcuts];
        if (idx > -1) {
          newShortcuts[idx] = getShortcutWithDefaultValues(shortcut);
          return prevShortcuts;
        }
        return [...prevShortcuts, getShortcutWithDefaultValues(shortcut)];
      });
    },
    [shortcuts]
  );
  const getKeysByPlatform = useCallback5((command) => {
    return findFirstPlatformMatch(command.keys);
  }, []);
  useShortcuts({ shortcuts: storeShortcuts, debounce });
  const commandsContext = useMemo3(
    () => ({
      shortcuts: storeShortcuts,
      registerShortcut,
      getKeysByPlatform
    }),
    [storeShortcuts, registerShortcut, getKeysByPlatform]
  );
  return /* @__PURE__ */ jsx9(KeybindContext.Provider, { value: commandsContext, children });
};

// src/components/layout/notifications/notifications.tsx
import {
  BellAlert,
  BellAlertDone,
  InformationCircleSolid
} from "@medusajs/icons";
import { clx as clx3, Drawer, Heading, IconButton as IconButton2, Text as Text3 } from "@medusajs/ui";
import { formatDistance } from "date-fns";
import { useEffect as useEffect9, useState as useState9 } from "react";
import { useTranslation as useTranslation6 } from "react-i18next";

// src/components/common/infinite-list/infinite-list.tsx
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect as useEffect8, useMemo as useMemo4, useRef as useRef2 } from "react";
import { toast } from "@medusajs/ui";
import { Spinner as Spinner3 } from "@medusajs/icons";
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var InfiniteList = ({
  queryKey,
  queryFn,
  queryOptions,
  renderItem,
  renderEmpty,
  responseKey,
  pageSize = 20
}) => {
  const {
    data,
    error,
    fetchNextPage,
    fetchPreviousPage,
    hasPreviousPage,
    hasNextPage,
    isFetching,
    isPending
  } = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      return await queryFn({
        limit: pageSize,
        offset: pageParam
      });
    },
    initialPageParam: 0,
    maxPages: 5,
    getNextPageParam: (lastPage) => {
      const moreItemsExist = lastPage.count > lastPage.offset + lastPage.limit;
      return moreItemsExist ? lastPage.offset + lastPage.limit : void 0;
    },
    getPreviousPageParam: (firstPage) => {
      const moreItemsExist = firstPage.offset !== 0;
      return moreItemsExist ? Math.max(firstPage.offset - firstPage.limit, 0) : void 0;
    },
    ...queryOptions
  });
  const items = useMemo4(() => {
    return data?.pages.flatMap((p) => p[responseKey]) ?? [];
  }, [data, responseKey]);
  const parentRef = useRef2(null);
  const startObserver = useRef2();
  const endObserver = useRef2();
  useEffect8(() => {
    if (isPending) {
      return;
    }
    if (!isFetching) {
      startObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasPreviousPage) {
          fetchPreviousPage();
        }
      });
      endObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      startObserver.current?.observe(parentRef.current.firstChild);
      endObserver.current?.observe(parentRef.current.lastChild);
    }
    return () => {
      startObserver.current?.disconnect();
      endObserver.current?.disconnect();
    };
  }, [
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetching,
    isPending
  ]);
  useEffect8(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);
  if (isPending) {
    return /* @__PURE__ */ jsx10("div", { className: "flex h-full flex-col items-center justify-center", children: /* @__PURE__ */ jsx10(Spinner3, { className: "animate-spin" }) });
  }
  return /* @__PURE__ */ jsxs5("div", { ref: parentRef, className: "h-full", children: [
    items?.length ? items.map((item) => /* @__PURE__ */ jsx10("div", { children: renderItem(item) }, item.id)) : renderEmpty(),
    isFetching && /* @__PURE__ */ jsx10("div", { className: "flex flex-col items-center justify-center py-4", children: /* @__PURE__ */ jsx10(Spinner3, { className: "animate-spin" }) })
  ] });
};

// src/components/layout/notifications/notifications.tsx
import { Fragment as Fragment2, jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var LAST_READ_NOTIFICATION_KEY = "notificationsLastReadAt";
var Notifications = () => {
  const { t: t2 } = useTranslation6();
  const [open, setOpen] = useState9(false);
  const [hasUnread, setHasUnread] = useUnreadNotifications();
  const [lastReadAt, setLastReadAt] = useState9(
    localStorage.getItem(LAST_READ_NOTIFICATION_KEY)
  );
  useEffect9(() => {
    const onKeyDown = (e) => {
      if (e.key === "n" && (e.metaKey || e.ctrlKey)) {
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  const handleOnOpen = (shouldOpen) => {
    if (shouldOpen) {
      setHasUnread(false);
      setOpen(true);
      localStorage.setItem(LAST_READ_NOTIFICATION_KEY, (/* @__PURE__ */ new Date()).toISOString());
    } else {
      setOpen(false);
      setLastReadAt(localStorage.getItem(LAST_READ_NOTIFICATION_KEY));
    }
  };
  return /* @__PURE__ */ jsxs6(Drawer, { open, onOpenChange: handleOnOpen, children: [
    /* @__PURE__ */ jsx11(Drawer.Trigger, { asChild: true, children: /* @__PURE__ */ jsx11(
      IconButton2,
      {
        variant: "transparent",
        className: "text-ui-fg-muted hover:text-ui-fg-subtle",
        children: hasUnread ? /* @__PURE__ */ jsx11(BellAlertDone, {}) : /* @__PURE__ */ jsx11(BellAlert, {})
      }
    ) }),
    /* @__PURE__ */ jsxs6(Drawer.Content, { children: [
      /* @__PURE__ */ jsxs6(Drawer.Header, { children: [
        /* @__PURE__ */ jsx11(Drawer.Title, { asChild: true, children: /* @__PURE__ */ jsx11(Heading, { children: t2("notifications.domain") }) }),
        /* @__PURE__ */ jsx11(Drawer.Description, { className: "sr-only", children: t2("notifications.accessibility.description") })
      ] }),
      /* @__PURE__ */ jsx11(Drawer.Body, { className: "overflow-y-auto px-0", children: /* @__PURE__ */ jsx11(
        InfiniteList,
        {
          responseKey: "notifications",
          queryKey: notificationQueryKeys.all,
          queryFn: (params) => sdk.admin.notification.list(params),
          queryOptions: { enabled: open },
          renderEmpty: () => /* @__PURE__ */ jsx11(NotificationsEmptyState, { t: t2 }),
          renderItem: (notification) => {
            return /* @__PURE__ */ jsx11(
              Notification,
              {
                notification,
                unread: Date.parse(notification.created_at) > (lastReadAt ? Date.parse(lastReadAt) : 0)
              },
              notification.id
            );
          }
        }
      ) })
    ] })
  ] });
};
var Notification = ({
  notification,
  unread
}) => {
  const data = notification.data;
  if (!data?.title) {
    return null;
  }
  return /* @__PURE__ */ jsx11(Fragment2, { children: /* @__PURE__ */ jsxs6("div", { className: "relative flex items-start justify-center gap-3 border-b p-6", children: [
    /* @__PURE__ */ jsx11("div", { className: "text-ui-fg-muted flex size-5 items-center justify-center", children: /* @__PURE__ */ jsx11(InformationCircleSolid, {}) }),
    /* @__PURE__ */ jsxs6("div", { className: "flex w-full flex-col gap-y-3", children: [
      /* @__PURE__ */ jsxs6("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx11(Text3, { size: "small", leading: "compact", weight: "plus", children: data.title }),
          /* @__PURE__ */ jsxs6("div", { className: "align-center flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsx11(
              Text3,
              {
                as: "span",
                className: clx3("text-ui-fg-subtle", {
                  "text-ui-fg-base": unread
                }),
                size: "small",
                leading: "compact",
                weight: "plus",
                children: formatDistance(notification.created_at, /* @__PURE__ */ new Date(), {
                  addSuffix: true
                })
              }
            ),
            unread && /* @__PURE__ */ jsx11(
              "div",
              {
                className: "bg-ui-bg-interactive h-2 w-2 rounded",
                role: "status"
              }
            )
          ] })
        ] }),
        !!data.description && /* @__PURE__ */ jsx11(
          Text3,
          {
            className: "text-ui-fg-subtle whitespace-pre-line",
            size: "small",
            children: data.description
          }
        )
      ] }),
      !!data?.file?.url && /* @__PURE__ */ jsx11(
        FilePreview,
        {
          filename: data.file.filename ?? "",
          url: data.file.url,
          hideThumbnail: true
        }
      )
    ] })
  ] }) });
};
var NotificationsEmptyState = ({ t: t2 }) => {
  return /* @__PURE__ */ jsxs6("div", { className: "flex h-full flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx11(BellAlertDone, {}),
    /* @__PURE__ */ jsx11(Text3, { size: "small", leading: "compact", weight: "plus", className: "mt-3", children: t2("notifications.emptyState.title") }),
    /* @__PURE__ */ jsx11(
      Text3,
      {
        size: "small",
        className: "text-ui-fg-muted mt-1 max-w-[294px] text-center",
        children: t2("notifications.emptyState.description")
      }
    )
  ] });
};
var useUnreadNotifications = () => {
  const [hasUnread, setHasUnread] = useState9(false);
  const { notifications } = useNotifications(
    { limit: 1, offset: 0, fields: "created_at" },
    { refetchInterval: 6e4 }
  );
  const lastNotification = notifications?.[0];
  useEffect9(() => {
    if (!lastNotification) {
      return;
    }
    const lastNotificationAsTimestamp = Date.parse(lastNotification.created_at);
    const lastReadDatetime = localStorage.getItem(LAST_READ_NOTIFICATION_KEY);
    const lastReadAsTimestamp = lastReadDatetime ? Date.parse(lastReadDatetime) : 0;
    if (lastNotificationAsTimestamp > lastReadAsTimestamp) {
      setHasUnread(true);
    }
  }, [lastNotification]);
  return [hasUnread, setHasUnread];
};

// src/components/layout/shell/shell.tsx
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var Shell = ({ children }) => {
  const globalShortcuts = useGlobalShortcuts();
  return /* @__PURE__ */ jsx12(KeybindProvider, { shortcuts: globalShortcuts, children: /* @__PURE__ */ jsxs7("div", { className: "flex h-screen flex-col items-start overflow-hidden lg:flex-row", children: [
    /* @__PURE__ */ jsxs7("div", { children: [
      /* @__PURE__ */ jsx12(MobileSidebarContainer, { children }),
      /* @__PURE__ */ jsx12(DesktopSidebarContainer, { children })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "flex h-screen w-full flex-col overflow-auto", children: [
      /* @__PURE__ */ jsx12(Topbar, {}),
      /* @__PURE__ */ jsx12("main", { className: "flex h-full w-full flex-col items-center overflow-y-auto", children: /* @__PURE__ */ jsx12(Gutter, { children: /* @__PURE__ */ jsx12(Outlet2, {}) }) })
    ] })
  ] }) });
};
var Gutter = ({ children }) => {
  return /* @__PURE__ */ jsx12("div", { className: "flex w-full max-w-[1600px] flex-col gap-y-2 p-3", children });
};
var Breadcrumbs = () => {
  const matches = useMatches();
  const crumbs = matches.filter((match) => match.handle?.breadcrumb).map((match) => {
    const handle = match.handle;
    let label = void 0;
    try {
      label = handle.breadcrumb?.(match);
    } catch (error) {
    }
    if (!label) {
      return null;
    }
    return {
      label,
      path: match.pathname
    };
  }).filter(Boolean);
  return /* @__PURE__ */ jsx12(
    "ol",
    {
      className: clx4(
        "text-ui-fg-muted txt-compact-small-plus flex select-none items-center"
      ),
      children: crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        const isSingle = crumbs.length === 1;
        return /* @__PURE__ */ jsxs7("li", { className: clx4("flex items-center"), children: [
          !isLast ? /* @__PURE__ */ jsx12(
            Link,
            {
              className: "transition-fg hover:text-ui-fg-subtle",
              to: crumb.path,
              children: crumb.label
            }
          ) : /* @__PURE__ */ jsxs7("div", { children: [
            !isSingle && /* @__PURE__ */ jsx12("span", { className: "block lg:hidden", children: "..." }),
            /* @__PURE__ */ jsx12(
              "span",
              {
                className: clx4({
                  "hidden lg:block": !isSingle
                }),
                children: crumb.label
              },
              index
            )
          ] }),
          !isLast && /* @__PURE__ */ jsx12("span", { className: "mx-2", children: /* @__PURE__ */ jsx12(TriangleRightMini, {}) })
        ] }, index);
      })
    }
  );
};
var ToggleSidebar = () => {
  const { toggle } = useSidebar();
  return /* @__PURE__ */ jsxs7("div", { children: [
    /* @__PURE__ */ jsx12(
      IconButton3,
      {
        className: "hidden lg:flex",
        variant: "transparent",
        onClick: () => toggle("desktop"),
        size: "small",
        children: /* @__PURE__ */ jsx12(SidebarLeft, { className: "text-ui-fg-muted" })
      }
    ),
    /* @__PURE__ */ jsx12(
      IconButton3,
      {
        className: "hidden max-lg:flex",
        variant: "transparent",
        onClick: () => toggle("mobile"),
        size: "small",
        children: /* @__PURE__ */ jsx12(SidebarLeft, { className: "text-ui-fg-muted" })
      }
    )
  ] });
};
var Topbar = () => {
  return /* @__PURE__ */ jsxs7("div", { className: "grid w-full grid-cols-2 border-b p-3", children: [
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-x-1.5", children: [
      /* @__PURE__ */ jsx12(ToggleSidebar, {}),
      /* @__PURE__ */ jsx12(Breadcrumbs, {})
    ] }),
    /* @__PURE__ */ jsx12("div", { className: "flex items-center justify-end gap-x-3", children: /* @__PURE__ */ jsx12(Notifications, {}) })
  ] });
};
var DesktopSidebarContainer = ({ children }) => {
  const { desktop } = useSidebar();
  return /* @__PURE__ */ jsx12(
    "div",
    {
      className: clx4("hidden h-screen w-[220px] border-r", {
        "lg:flex": desktop
      }),
      children
    }
  );
};
var MobileSidebarContainer = ({ children }) => {
  const { t: t2 } = useTranslation7();
  const { mobile, toggle } = useSidebar();
  return /* @__PURE__ */ jsx12(Root, { open: mobile, onOpenChange: () => toggle("mobile"), children: /* @__PURE__ */ jsxs7(Portal, { children: [
    /* @__PURE__ */ jsx12(
      Overlay,
      {
        className: clx4(
          "bg-ui-bg-overlay fixed inset-0",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        )
      }
    ),
    /* @__PURE__ */ jsxs7(
      Content,
      {
        className: clx4(
          "bg-ui-bg-subtle shadow-elevation-modal fixed inset-y-2 left-2 flex w-full max-w-[304px] flex-col overflow-hidden rounded-lg border-r",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2 duration-200"
        ),
        children: [
          /* @__PURE__ */ jsxs7("div", { className: "p-3", children: [
            /* @__PURE__ */ jsx12(Close, { asChild: true, children: /* @__PURE__ */ jsx12(
              IconButton3,
              {
                size: "small",
                variant: "transparent",
                className: "text-ui-fg-subtle",
                children: /* @__PURE__ */ jsx12(XMark, {})
              }
            ) }),
            /* @__PURE__ */ jsx12(Title, { className: "sr-only", children: t2("app.nav.accessibility.title") }),
            /* @__PURE__ */ jsx12(Description, { className: "sr-only", children: t2("app.nav.accessibility.description") })
          ] }),
          children
        ]
      }
    )
  ] }) });
};

// src/components/layout/main-layout/main-layout.tsx
import { Link as Link3, useLocation as useLocation6, useNavigate as useNavigate4 } from "react-router-dom";

// src/components/layout/user-menu/user-menu.tsx
import {
  BookOpen,
  CircleHalfSolid,
  EllipsisHorizontal,
  Keyboard,
  OpenRectArrowOut,
  TimelineVertical,
  User as UserIcon,
  XMark as XMark2
} from "@medusajs/icons";
import {
  Avatar,
  DropdownMenu as DropdownMenu2,
  Heading as Heading2,
  IconButton as IconButton4,
  Input,
  Kbd as Kbd3,
  Text as Text4,
  clx as clx5
} from "@medusajs/ui";
import { useTranslation as useTranslation8 } from "react-i18next";
import { useState as useState10 } from "react";
import { Link as Link2, useLocation as useLocation5, useNavigate as useNavigate3 } from "react-router-dom";
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
var UserMenu = () => {
  const { t: t2 } = useTranslation8();
  const location = useLocation5();
  const [openMenu, setOpenMenu] = useState10(false);
  const [openModal, setOpenModal] = useState10(false);
  const toggleModal = () => {
    setOpenMenu(false);
    setOpenModal(!openModal);
  };
  return /* @__PURE__ */ jsxs8("div", { children: [
    /* @__PURE__ */ jsxs8(DropdownMenu2, { open: openMenu, onOpenChange: setOpenMenu, children: [
      /* @__PURE__ */ jsx13(UserBadge, {}),
      /* @__PURE__ */ jsxs8(DropdownMenu2.Content, { className: "min-w-[var(--radix-dropdown-menu-trigger-width)] max-w-[var(--radix-dropdown-menu-trigger-width)]", children: [
        /* @__PURE__ */ jsx13(UserItem, {}),
        /* @__PURE__ */ jsx13(DropdownMenu2.Separator, {}),
        /* @__PURE__ */ jsx13(DropdownMenu2.Item, { asChild: true, children: /* @__PURE__ */ jsxs8(Link2, { to: "/settings/profile", state: { from: location.pathname }, children: [
          /* @__PURE__ */ jsx13(UserIcon, { className: "text-ui-fg-subtle mr-2" }),
          t2("app.menus.user.profileSettings")
        ] }) }),
        /* @__PURE__ */ jsx13(DropdownMenu2.Separator, {}),
        /* @__PURE__ */ jsx13(DropdownMenu2.Item, { asChild: true, children: /* @__PURE__ */ jsxs8(Link2, { to: "https://docs.medusajs.com", target: "_blank", children: [
          /* @__PURE__ */ jsx13(BookOpen, { className: "text-ui-fg-subtle mr-2" }),
          t2("app.menus.user.documentation")
        ] }) }),
        /* @__PURE__ */ jsx13(DropdownMenu2.Item, { asChild: true, children: /* @__PURE__ */ jsxs8(Link2, { to: "https://medusajs.com/changelog/", target: "_blank", children: [
          /* @__PURE__ */ jsx13(TimelineVertical, { className: "text-ui-fg-subtle mr-2" }),
          t2("app.menus.user.changelog")
        ] }) }),
        /* @__PURE__ */ jsx13(DropdownMenu2.Separator, {}),
        /* @__PURE__ */ jsxs8(DropdownMenu2.Item, { onClick: toggleModal, children: [
          /* @__PURE__ */ jsx13(Keyboard, { className: "text-ui-fg-subtle mr-2" }),
          t2("app.menus.user.shortcuts")
        ] }),
        /* @__PURE__ */ jsx13(ThemeToggle, {}),
        /* @__PURE__ */ jsx13(DropdownMenu2.Separator, {}),
        /* @__PURE__ */ jsx13(Logout, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx13(GlobalKeybindsModal, { open: openModal, onOpenChange: setOpenModal })
  ] });
};
var UserBadge = () => {
  const { user, isPending, isError, error } = useMe();
  const name = [user?.first_name, user?.last_name].filter(Boolean).join(" ");
  const displayName = name || user?.email;
  const fallback = displayName ? displayName[0].toUpperCase() : null;
  if (isPending) {
    return /* @__PURE__ */ jsxs8("button", { className: "shadow-borders-base flex max-w-[192px] select-none items-center gap-x-2 overflow-hidden text-ellipsis whitespace-nowrap rounded-full py-1 pl-1 pr-2.5", children: [
      /* @__PURE__ */ jsx13(Skeleton, { className: "h-5 w-5 rounded-full" }),
      /* @__PURE__ */ jsx13(Skeleton, { className: "h-[9px] w-[70px]" })
    ] });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx13("div", { className: "p-3", children: /* @__PURE__ */ jsxs8(
    DropdownMenu2.Trigger,
    {
      disabled: !user,
      className: clx5(
        "bg-ui-bg-subtle grid w-full cursor-pointer grid-cols-[24px_1fr_15px] items-center gap-2 rounded-md py-1 pl-0.5 pr-2 outline-none",
        "hover:bg-ui-bg-subtle-hover",
        "data-[state=open]:bg-ui-bg-subtle-hover",
        "focus-visible:shadow-borders-focus"
      ),
      children: [
        /* @__PURE__ */ jsx13("div", { className: "flex size-6 items-center justify-center", children: fallback ? /* @__PURE__ */ jsx13(Avatar, { size: "xsmall", fallback }) : /* @__PURE__ */ jsx13(Skeleton, { className: "h-6 w-6 rounded-full" }) }),
        /* @__PURE__ */ jsx13("div", { className: "flex items-center overflow-hidden", children: displayName ? /* @__PURE__ */ jsx13(
          Text4,
          {
            size: "xsmall",
            weight: "plus",
            leading: "compact",
            className: "truncate",
            children: displayName
          }
        ) : /* @__PURE__ */ jsx13(Skeleton, { className: "h-[9px] w-[70px]" }) }),
        /* @__PURE__ */ jsx13(EllipsisHorizontal, { className: "text-ui-fg-muted" })
      ]
    }
  ) });
};
var ThemeToggle = () => {
  const { t: t2 } = useTranslation8();
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ jsxs8(DropdownMenu2.SubMenu, { children: [
    /* @__PURE__ */ jsxs8(DropdownMenu2.SubMenuTrigger, { className: "rounded-md", children: [
      /* @__PURE__ */ jsx13(CircleHalfSolid, { className: "text-ui-fg-subtle mr-2" }),
      t2("app.menus.user.theme.label")
    ] }),
    /* @__PURE__ */ jsx13(DropdownMenu2.SubMenuContent, { children: /* @__PURE__ */ jsxs8(DropdownMenu2.RadioGroup, { value: theme, children: [
      /* @__PURE__ */ jsx13(
        DropdownMenu2.RadioItem,
        {
          value: "system",
          onClick: (e) => {
            e.preventDefault();
            setTheme("system");
          },
          children: t2("app.menus.user.theme.system")
        }
      ),
      /* @__PURE__ */ jsx13(
        DropdownMenu2.RadioItem,
        {
          value: "light",
          onClick: (e) => {
            e.preventDefault();
            setTheme("light");
          },
          children: t2("app.menus.user.theme.light")
        }
      ),
      /* @__PURE__ */ jsx13(
        DropdownMenu2.RadioItem,
        {
          value: "dark",
          onClick: (e) => {
            e.preventDefault();
            setTheme("dark");
          },
          children: t2("app.menus.user.theme.dark")
        }
      )
    ] }) })
  ] });
};
var Logout = () => {
  const { t: t2 } = useTranslation8();
  const navigate = useNavigate3();
  const { mutateAsync: logoutMutation } = useLogout();
  const handleLogout = async () => {
    await logoutMutation(void 0, {
      onSuccess: () => {
        queryClient.clear();
        navigate("/login");
      }
    });
  };
  return /* @__PURE__ */ jsx13(DropdownMenu2.Item, { onClick: handleLogout, children: /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-x-2", children: [
    /* @__PURE__ */ jsx13(OpenRectArrowOut, { className: "text-ui-fg-subtle" }),
    /* @__PURE__ */ jsx13("span", { children: t2("app.menus.actions.logout") })
  ] }) });
};
var GlobalKeybindsModal = (props) => {
  const { t: t2 } = useTranslation8();
  const globalShortcuts = useGlobalShortcuts();
  const [searchValue, onSearchValueChange] = useState10("");
  const searchResults = searchValue ? globalShortcuts.filter((shortcut) => {
    return shortcut.label.toLowerCase().includes(searchValue?.toLowerCase());
  }) : globalShortcuts;
  return /* @__PURE__ */ jsx13(Root, { ...props, children: /* @__PURE__ */ jsxs8(Portal, { children: [
    /* @__PURE__ */ jsx13(Overlay, { className: "bg-ui-bg-overlay fixed inset-0" }),
    /* @__PURE__ */ jsxs8(Content, { className: "bg-ui-bg-subtle shadow-elevation-modal fixed left-[50%] top-[50%] flex h-full max-h-[612px] w-full max-w-[560px] translate-x-[-50%] translate-y-[-50%] flex-col divide-y overflow-hidden rounded-lg", children: [
      /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-y-3 px-6 py-4", children: [
        /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs8("div", { children: [
            /* @__PURE__ */ jsx13(Title, { asChild: true, children: /* @__PURE__ */ jsx13(Heading2, { children: t2("app.menus.user.shortcuts") }) }),
            /* @__PURE__ */ jsx13(Description, { className: "sr-only" })
          ] }),
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-x-2", children: [
            /* @__PURE__ */ jsx13(Kbd3, { children: "esc" }),
            /* @__PURE__ */ jsx13(Close, { asChild: true, children: /* @__PURE__ */ jsx13(IconButton4, { variant: "transparent", size: "small", children: /* @__PURE__ */ jsx13(XMark2, {}) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsx13(
          Input,
          {
            type: "search",
            value: searchValue,
            onChange: (e) => onSearchValueChange(e.target.value)
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx13("div", { className: "flex flex-col divide-y overflow-y-auto", children: searchResults.map((shortcut, index) => {
        return /* @__PURE__ */ jsxs8(
          "div",
          {
            className: "text-ui-fg-subtle flex items-center justify-between px-6 py-3",
            children: [
              /* @__PURE__ */ jsx13(Text4, { size: "small", children: shortcut.label }),
              /* @__PURE__ */ jsx13("div", { className: "flex items-center gap-x-1", children: shortcut.keys.Mac?.map((key, index2) => {
                return /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-x-1", children: [
                  /* @__PURE__ */ jsx13(Kbd3, { children: key }),
                  index2 < (shortcut.keys.Mac?.length || 0) - 1 && /* @__PURE__ */ jsx13("span", { className: "txt-compact-xsmall text-ui-fg-subtle", children: t2("app.keyboardShortcuts.then") })
                ] }, index2);
              }) })
            ]
          },
          index
        );
      }) })
    ] })
  ] }) });
};
var UserItem = () => {
  const { user, isPending, isError, error } = useMe();
  const loaded = !isPending && !!user;
  if (!loaded) {
    return /* @__PURE__ */ jsx13("div", {});
  }
  const name = [user.first_name, user.last_name].filter(Boolean).join(" ");
  const email = user.email;
  const fallback = name ? name[0].toUpperCase() : email[0].toUpperCase();
  const avatar = user.avatar_url;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-x-3 overflow-hidden px-2 py-1", children: [
    /* @__PURE__ */ jsx13(
      Avatar,
      {
        size: "small",
        variant: "rounded",
        src: avatar || void 0,
        fallback
      }
    ),
    /* @__PURE__ */ jsxs8("div", { className: "block w-full min-w-0 max-w-[187px] overflow-hidden whitespace-nowrap", children: [
      /* @__PURE__ */ jsx13(
        Text4,
        {
          size: "small",
          weight: "plus",
          leading: "compact",
          className: "overflow-hidden text-ellipsis whitespace-nowrap",
          children: name || email
        }
      ),
      !!name && /* @__PURE__ */ jsx13(
        Text4,
        {
          size: "xsmall",
          leading: "compact",
          className: "text-ui-fg-subtle overflow-hidden text-ellipsis whitespace-nowrap",
          children: email
        }
      )
    ] })
  ] });
};

// src/components/layout/main-layout/main-layout.tsx
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
var MainLayout = () => {
  return /* @__PURE__ */ jsx14(Shell, { children: /* @__PURE__ */ jsx14(MainSidebar, {}) });
};
var MainSidebar = () => {
  return /* @__PURE__ */ jsx14("aside", { className: "flex flex-1 flex-col justify-between overflow-y-auto", children: /* @__PURE__ */ jsxs9("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ jsxs9("div", { className: "bg-ui-bg-subtle sticky top-0", children: [
      /* @__PURE__ */ jsx14(Header, {}),
      /* @__PURE__ */ jsx14("div", { className: "px-3", children: /* @__PURE__ */ jsx14(Divider, { variant: "dashed" }) })
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: "flex flex-1 flex-col justify-between", children: [
      /* @__PURE__ */ jsxs9("div", { className: "flex flex-1 flex-col", children: [
        /* @__PURE__ */ jsx14(CoreRouteSection, {}),
        /* @__PURE__ */ jsx14(ExtensionRouteSection, {})
      ] }),
      /* @__PURE__ */ jsx14(UtilitySection, {})
    ] }),
    /* @__PURE__ */ jsx14("div", { className: "bg-ui-bg-subtle sticky bottom-0", children: /* @__PURE__ */ jsx14(UserSection, {}) })
  ] }) });
};
var Logout2 = () => {
  const { t: t2 } = useTranslation9();
  const navigate = useNavigate4();
  const { mutateAsync: logoutMutation } = useLogout();
  const handleLogout = async () => {
    await logoutMutation(void 0, {
      onSuccess: () => {
        queryClient.clear();
        navigate("/login");
      }
    });
  };
  return /* @__PURE__ */ jsx14(DropdownMenu3.Item, { onClick: handleLogout, children: /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-x-2", children: [
    /* @__PURE__ */ jsx14(OpenRectArrowOut2, { className: "text-ui-fg-subtle" }),
    /* @__PURE__ */ jsx14("span", { children: t2("app.menus.actions.logout") })
  ] }) });
};
var Header = () => {
  const { t: t2 } = useTranslation9();
  const { store, isPending, isError, error } = useStore();
  const name = store?.name;
  const fallback = store?.name?.slice(0, 1).toUpperCase();
  const isLoaded = !isPending && !!store && !!name && !!fallback;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx14("div", { className: "w-full p-3", children: /* @__PURE__ */ jsxs9(DropdownMenu3, { children: [
    /* @__PURE__ */ jsxs9(
      DropdownMenu3.Trigger,
      {
        disabled: !isLoaded,
        className: clx6(
          "bg-ui-bg-subtle transition-fg grid w-full grid-cols-[24px_1fr_15px] items-center gap-x-3 rounded-md p-0.5 pr-2 outline-none",
          "hover:bg-ui-bg-subtle-hover",
          "data-[state=open]:bg-ui-bg-subtle-hover",
          "focus-visible:shadow-borders-focus"
        ),
        children: [
          fallback ? /* @__PURE__ */ jsx14(Avatar2, { variant: "squared", size: "xsmall", fallback }) : /* @__PURE__ */ jsx14(Skeleton, { className: "h-6 w-6 rounded-md" }),
          /* @__PURE__ */ jsx14("div", { className: "block overflow-hidden text-left", children: name ? /* @__PURE__ */ jsx14(
            Text5,
            {
              size: "small",
              weight: "plus",
              leading: "compact",
              className: "truncate",
              children: store.name
            }
          ) : /* @__PURE__ */ jsx14(Skeleton, { className: "h-[9px] w-[120px]" }) }),
          /* @__PURE__ */ jsx14(EllipsisHorizontal2, { className: "text-ui-fg-muted" })
        ]
      }
    ),
    isLoaded && /* @__PURE__ */ jsxs9(DropdownMenu3.Content, { className: "w-[var(--radix-dropdown-menu-trigger-width)] min-w-0", children: [
      /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-x-3 px-2 py-1", children: [
        /* @__PURE__ */ jsx14(Avatar2, { variant: "squared", size: "small", fallback }),
        /* @__PURE__ */ jsxs9("div", { className: "flex flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsx14(
            Text5,
            {
              size: "small",
              weight: "plus",
              leading: "compact",
              className: "truncate",
              children: name
            }
          ),
          /* @__PURE__ */ jsx14(
            Text5,
            {
              size: "xsmall",
              leading: "compact",
              className: "text-ui-fg-subtle",
              children: t2("app.nav.main.store")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx14(DropdownMenu3.Separator, {}),
      /* @__PURE__ */ jsx14(DropdownMenu3.Item, { className: "gap-x-2", asChild: true, children: /* @__PURE__ */ jsxs9(Link3, { to: "/settings/store", children: [
        /* @__PURE__ */ jsx14(BuildingStorefront, { className: "text-ui-fg-subtle" }),
        t2("app.nav.main.storeSettings")
      ] }) }),
      /* @__PURE__ */ jsx14(DropdownMenu3.Separator, {}),
      /* @__PURE__ */ jsx14(Logout2, {})
    ] })
  ] }) });
};
var useCoreRoutes = () => {
  const { t: t2 } = useTranslation9();
  return [
    {
      icon: /* @__PURE__ */ jsx14(ShoppingCart, {}),
      label: t2("orders.domain"),
      to: "/orders",
      items: [
        // TODO: Enable when domin is introduced
        // {
        //   label: t("draftOrders.domain"),
        //   to: "/draft-orders",
        // },
      ]
    },
    {
      icon: /* @__PURE__ */ jsx14(Tag, {}),
      label: t2("products.domain"),
      to: "/products",
      items: [
        {
          label: t2("collections.domain"),
          to: "/collections"
        },
        {
          label: t2("categories.domain"),
          to: "/categories"
        }
        // TODO: Enable when domin is introduced
        // {
        //   label: t("giftCards.domain"),
        //   to: "/gift-cards",
        // },
      ]
    },
    {
      icon: /* @__PURE__ */ jsx14(Buildings, {}),
      label: t2("inventory.domain"),
      to: "/inventory",
      items: [
        {
          label: t2("reservations.domain"),
          to: "/reservations"
        }
      ]
    },
    {
      icon: /* @__PURE__ */ jsx14(Users, {}),
      label: t2("customers.domain"),
      to: "/customers",
      items: [
        {
          label: t2("customerGroups.domain"),
          to: "/customer-groups"
        }
      ]
    },
    {
      icon: /* @__PURE__ */ jsx14(ReceiptPercent, {}),
      label: t2("promotions.domain"),
      to: "/promotions",
      items: [
        {
          label: t2("campaigns.domain"),
          to: "/campaigns"
        }
      ]
    },
    {
      icon: /* @__PURE__ */ jsx14(CurrencyDollar, {}),
      label: t2("priceLists.domain"),
      to: "/price-lists"
    }
  ];
};
var Searchbar = () => {
  const { t: t2 } = useTranslation9();
  const { toggleSearch } = useSearch();
  return /* @__PURE__ */ jsx14("div", { className: "px-3", children: /* @__PURE__ */ jsxs9(
    "button",
    {
      onClick: toggleSearch,
      className: clx6(
        "bg-ui-bg-subtle text-ui-fg-subtle flex w-full items-center gap-x-2.5 rounded-md px-2 py-1 outline-none",
        "hover:bg-ui-bg-subtle-hover",
        "focus-visible:shadow-borders-focus"
      ),
      children: [
        /* @__PURE__ */ jsx14(MagnifyingGlass2, {}),
        /* @__PURE__ */ jsx14("div", { className: "flex-1 text-left", children: /* @__PURE__ */ jsx14(Text5, { size: "small", leading: "compact", weight: "plus", children: t2("app.search.label") }) }),
        /* @__PURE__ */ jsx14(Text5, { size: "small", leading: "compact", className: "text-ui-fg-muted", children: "\u2318K" })
      ]
    }
  ) });
};
var CoreRouteSection = () => {
  const coreRoutes = useCoreRoutes();
  return /* @__PURE__ */ jsxs9("nav", { className: "flex flex-col gap-y-1 py-3", children: [
    /* @__PURE__ */ jsx14(Searchbar, {}),
    coreRoutes.map((route) => {
      return /* @__PURE__ */ jsx14(NavItem, { ...route }, route.to);
    })
  ] });
};
var ExtensionRouteSection = () => {
  const { t: t2 } = useTranslation9();
  const { getMenu } = useDashboardExtension();
  const menuItems = getMenu("coreExtensions");
  if (!menuItems.length) {
    return null;
  }
  return /* @__PURE__ */ jsxs9("div", { children: [
    /* @__PURE__ */ jsx14("div", { className: "px-3", children: /* @__PURE__ */ jsx14(Divider, { variant: "dashed" }) }),
    /* @__PURE__ */ jsx14("div", { className: "flex flex-col gap-y-1 py-3", children: /* @__PURE__ */ jsxs9(Collapsible2.Root, { defaultOpen: true, children: [
      /* @__PURE__ */ jsx14("div", { className: "px-4", children: /* @__PURE__ */ jsx14(Collapsible2.Trigger, { asChild: true, className: "group/trigger", children: /* @__PURE__ */ jsxs9("button", { className: "text-ui-fg-subtle flex w-full items-center justify-between px-2", children: [
        /* @__PURE__ */ jsx14(Text5, { size: "xsmall", weight: "plus", leading: "compact", children: t2("app.nav.common.extensions") }),
        /* @__PURE__ */ jsxs9("div", { className: "text-ui-fg-muted", children: [
          /* @__PURE__ */ jsx14(ChevronDownMini, { className: "group-data-[state=open]/trigger:hidden" }),
          /* @__PURE__ */ jsx14(MinusMini, { className: "group-data-[state=closed]/trigger:hidden" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx14(Collapsible2.Content, { children: /* @__PURE__ */ jsx14("nav", { className: "flex flex-col gap-y-0.5 py-1 pb-4", children: menuItems.map((item, i) => {
        return /* @__PURE__ */ jsx14(
          NavItem,
          {
            to: item.to,
            label: item.label,
            icon: item.icon ? item.icon : /* @__PURE__ */ jsx14(SquaresPlus, {}),
            items: item.items,
            type: "extension"
          },
          i
        );
      }) }) })
    ] }) })
  ] });
};
var UtilitySection = () => {
  const location = useLocation6();
  const { t: t2 } = useTranslation9();
  return /* @__PURE__ */ jsx14("div", { className: "flex flex-col gap-y-0.5 py-3", children: /* @__PURE__ */ jsx14(
    NavItem,
    {
      label: t2("app.nav.settings.header"),
      to: "/settings",
      from: location.pathname,
      icon: /* @__PURE__ */ jsx14(CogSixTooth, {})
    }
  ) });
};
var UserSection = () => {
  return /* @__PURE__ */ jsxs9("div", { children: [
    /* @__PURE__ */ jsx14("div", { className: "px-3", children: /* @__PURE__ */ jsx14(Divider, { variant: "dashed" }) }),
    /* @__PURE__ */ jsx14(UserMenu, {})
  ] });
};

// src/components/layout/public-layout/public-layout.tsx
import { Outlet as Outlet3 } from "react-router-dom";
import { jsx as jsx15 } from "react/jsx-runtime";
var PublicLayout = () => {
  return /* @__PURE__ */ jsx15(Outlet3, {});
};

// src/components/layout/settings-layout/settings-layout.tsx
import { ArrowUturnLeft as ArrowUturnLeft2, MinusMini as MinusMini2 } from "@medusajs/icons";
import { IconButton as IconButton5, Text as Text6, clx as clx7 } from "@medusajs/ui";
import * as Collapsible3 from "@radix-ui/react-collapsible";
import { Fragment as Fragment3, useEffect as useEffect10, useMemo as useMemo5, useState as useState11 } from "react";
import { useTranslation as useTranslation10 } from "react-i18next";
import { Link as Link4, useLocation as useLocation7 } from "react-router-dom";
import { jsx as jsx16, jsxs as jsxs10 } from "react/jsx-runtime";
var SettingsLayout = () => {
  return /* @__PURE__ */ jsx16(Shell, { children: /* @__PURE__ */ jsx16(SettingsSidebar, {}) });
};
var useSettingRoutes = () => {
  const { t: t2 } = useTranslation10();
  return useMemo5(
    () => [
      {
        label: t2("store.domain"),
        to: "/settings/store"
      },
      {
        label: t2("users.domain"),
        to: "/settings/users"
      },
      {
        label: t2("regions.domain"),
        to: "/settings/regions"
      },
      {
        label: t2("taxRegions.domain"),
        to: "/settings/tax-regions"
      },
      {
        label: t2("returnReasons.domain"),
        to: "/settings/return-reasons"
      },
      {
        label: t2("salesChannels.domain"),
        to: "/settings/sales-channels"
      },
      {
        label: t2("productTypes.domain"),
        to: "/settings/product-types"
      },
      {
        label: t2("productTags.domain"),
        to: "/settings/product-tags"
      },
      {
        label: t2("stockLocations.domain"),
        to: "/settings/locations"
      }
    ],
    [t2]
  );
};
var useDeveloperRoutes = () => {
  const { t: t2 } = useTranslation10();
  return useMemo5(
    () => [
      {
        label: t2("apiKeyManagement.domain.publishable"),
        to: "/settings/publishable-api-keys"
      },
      {
        label: t2("apiKeyManagement.domain.secret"),
        to: "/settings/secret-api-keys"
      },
      {
        label: t2("workflowExecutions.domain"),
        to: "/settings/workflows"
      }
    ],
    [t2]
  );
};
var useMyAccountRoutes = () => {
  const { t: t2 } = useTranslation10();
  return useMemo5(
    () => [
      {
        label: t2("profile.domain"),
        to: "/settings/profile"
      }
    ],
    [t2]
  );
};
var getSafeFromValue = (from) => {
  if (from.startsWith("/settings")) {
    return "/orders";
  }
  return from;
};
var SettingsSidebar = () => {
  const { getMenu } = useDashboardExtension();
  const routes3 = useSettingRoutes();
  const developerRoutes = useDeveloperRoutes();
  const myAccountRoutes = useMyAccountRoutes();
  const extensionRoutes = getMenu("settingsExtensions");
  const { t: t2 } = useTranslation10();
  return /* @__PURE__ */ jsxs10("aside", { className: "relative flex flex-1 flex-col justify-between overflow-y-auto", children: [
    /* @__PURE__ */ jsxs10("div", { className: "bg-ui-bg-subtle sticky top-0", children: [
      /* @__PURE__ */ jsx16(Header2, {}),
      /* @__PURE__ */ jsx16("div", { className: "flex items-center justify-center px-3", children: /* @__PURE__ */ jsx16(Divider, { variant: "dashed" }) })
    ] }),
    /* @__PURE__ */ jsxs10("div", { className: "flex flex-1 flex-col", children: [
      /* @__PURE__ */ jsxs10("div", { className: "flex flex-1 flex-col overflow-y-auto", children: [
        /* @__PURE__ */ jsx16(
          CollapsibleSection,
          {
            label: t2("app.nav.settings.general"),
            items: routes3
          }
        ),
        /* @__PURE__ */ jsx16("div", { className: "flex items-center justify-center px-3", children: /* @__PURE__ */ jsx16(Divider, { variant: "dashed" }) }),
        /* @__PURE__ */ jsx16(
          CollapsibleSection,
          {
            label: t2("app.nav.settings.developer"),
            items: developerRoutes
          }
        ),
        /* @__PURE__ */ jsx16("div", { className: "flex items-center justify-center px-3", children: /* @__PURE__ */ jsx16(Divider, { variant: "dashed" }) }),
        /* @__PURE__ */ jsx16(
          CollapsibleSection,
          {
            label: t2("app.nav.settings.myAccount"),
            items: myAccountRoutes
          }
        ),
        extensionRoutes.length > 0 && /* @__PURE__ */ jsxs10(Fragment3, { children: [
          /* @__PURE__ */ jsx16("div", { className: "flex items-center justify-center px-3", children: /* @__PURE__ */ jsx16(Divider, { variant: "dashed" }) }),
          /* @__PURE__ */ jsx16(
            CollapsibleSection,
            {
              label: t2("app.nav.common.extensions"),
              items: extensionRoutes
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx16("div", { className: "bg-ui-bg-subtle sticky bottom-0", children: /* @__PURE__ */ jsx16(UserSection2, {}) })
    ] })
  ] });
};
var Header2 = () => {
  const [from, setFrom] = useState11("/orders");
  const { t: t2 } = useTranslation10();
  const location = useLocation7();
  useEffect10(() => {
    if (location.state?.from) {
      setFrom(getSafeFromValue(location.state.from));
    }
  }, [location]);
  return /* @__PURE__ */ jsx16("div", { className: "bg-ui-bg-subtle p-3", children: /* @__PURE__ */ jsx16(
    Link4,
    {
      to: from,
      replace: true,
      className: clx7(
        "bg-ui-bg-subtle transition-fg flex items-center rounded-md outline-none",
        "hover:bg-ui-bg-subtle-hover",
        "focus-visible:shadow-borders-focus"
      ),
      children: /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-x-2.5 px-2 py-1", children: [
        /* @__PURE__ */ jsx16("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx16(ArrowUturnLeft2, { className: "text-ui-fg-subtle" }) }),
        /* @__PURE__ */ jsx16(Text6, { leading: "compact", weight: "plus", size: "small", children: t2("app.nav.settings.header") })
      ] })
    }
  ) });
};
var CollapsibleSection = ({
  label,
  items
}) => {
  return /* @__PURE__ */ jsxs10(Collapsible3.Root, { defaultOpen: true, className: "py-3", children: [
    /* @__PURE__ */ jsx16("div", { className: "px-3", children: /* @__PURE__ */ jsxs10("div", { className: "text-ui-fg-muted flex h-7 items-center justify-between px-2", children: [
      /* @__PURE__ */ jsx16(Text6, { size: "small", leading: "compact", children: label }),
      /* @__PURE__ */ jsx16(Collapsible3.Trigger, { asChild: true, children: /* @__PURE__ */ jsx16(IconButton5, { size: "2xsmall", variant: "transparent", className: "static", children: /* @__PURE__ */ jsx16(MinusMini2, { className: "text-ui-fg-muted" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx16(Collapsible3.Content, { children: /* @__PURE__ */ jsx16("div", { className: "pt-0.5", children: /* @__PURE__ */ jsx16("nav", { className: "flex flex-col gap-y-0.5", children: items.map((setting) => /* @__PURE__ */ jsx16(NavItem, { type: "setting", ...setting }, setting.to)) }) }) })
  ] });
};
var UserSection2 = () => {
  return /* @__PURE__ */ jsxs10("div", { children: [
    /* @__PURE__ */ jsx16("div", { className: "px-3", children: /* @__PURE__ */ jsx16(Divider, { variant: "dashed" }) }),
    /* @__PURE__ */ jsx16(UserMenu, {})
  ] });
};

// src/providers/router-provider/route-extensions.tsx
import routeModule from "virtual:medusa/routes";
var routes = getRouteExtensions(routeModule, "core");
var RouteExtensions = createRouteMap(routes);

// src/providers/router-provider/settings-extensions.tsx
import routeModule2 from "virtual:medusa/routes";
var routes2 = getRouteExtensions(routeModule2, "settings");
var SettingsExtensions = createRouteMap(routes2, "/settings");

// src/providers/router-provider/route-map.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var RouteMap = [
  {
    element: /* @__PURE__ */ jsx17(ProtectedRoute, {}),
    children: [
      {
        element: /* @__PURE__ */ jsx17(MainLayout, {}),
        children: [
          {
            path: "/",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            lazy: () => import("./home-KSB2J7CS.mjs")
          },
          {
            path: "/products",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            handle: {
              breadcrumb: () => t("products.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./product-list-WW77Y4WC.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./product-create-B7J2R5MN.mjs")
                  },
                  {
                    path: "import",
                    lazy: () => import("./product-import-D3T7MVO2.mjs")
                  },
                  {
                    path: "export",
                    lazy: () => import("./product-export-TGYJYFYZ.mjs")
                  }
                ]
              },
              {
                path: ":id",
                errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
                lazy: async () => {
                  const { Breadcrumb, loader } = await import("./product-detail-PRHBBQ2J.mjs");
                  return {
                    Component: Outlet4,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "",
                    lazy: () => import("./product-detail-PRHBBQ2J.mjs"),
                    children: [
                      {
                        path: "edit",
                        lazy: () => import("./product-edit-6FHTZ5L5.mjs")
                      },
                      {
                        path: "edit-variant",
                        lazy: () => import("./product-variant-edit-JAMVS42E.mjs")
                      },
                      {
                        path: "sales-channels",
                        lazy: () => import("./product-sales-channels-GXUGSXXN.mjs")
                      },
                      {
                        path: "attributes",
                        lazy: () => import("./product-attributes-QZWZQ774.mjs")
                      },
                      {
                        path: "organization",
                        lazy: () => import("./product-organization-UHWOYS4G.mjs")
                      },
                      {
                        path: "media",
                        lazy: () => import("./product-media-3IB2ZETG.mjs")
                      },
                      {
                        path: "prices",
                        lazy: () => import("./product-prices-ODUCCZAG.mjs")
                      },
                      {
                        path: "options/create",
                        lazy: () => import("./product-create-option-P2L6Y24M.mjs")
                      },
                      {
                        path: "options/:option_id/edit",
                        lazy: () => import("./product-edit-option-AFFD3FT7.mjs")
                      },
                      {
                        path: "variants/create",
                        lazy: () => import("./product-create-variant-65MKEDEN.mjs")
                      },
                      {
                        path: "metadata/edit",
                        lazy: () => import("./product-metadata-Q3WFRF54.mjs")
                      }
                    ]
                  },
                  {
                    path: "variants/:variant_id",
                    lazy: async () => {
                      const { Component, Breadcrumb, loader } = await import("./product-variant-detail-KY4OCYS5.mjs");
                      return {
                        Component,
                        loader,
                        handle: {
                          breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                        }
                      };
                    },
                    children: [
                      {
                        path: "edit",
                        lazy: () => import("./product-variant-edit-JAMVS42E.mjs")
                      },
                      {
                        path: "prices",
                        lazy: () => import("./product-prices-ODUCCZAG.mjs")
                      },
                      {
                        path: "manage-items",
                        lazy: () => import("./product-variant-manage-inventory-items-6VXZUBB7.mjs")
                      },
                      {
                        path: "metadata/edit",
                        lazy: () => import("./product-variant-metadata-7EPPYF4F.mjs")
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: "/categories",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            handle: {
              breadcrumb: () => t("categories.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./category-list-NRPKUHGR.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./category-create-ADFR7KA4.mjs")
                  },
                  {
                    path: "organize",
                    lazy: () => import("./category-organize-BNU6JZPL.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./category-detail-C3G36XP4.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./category-edit-SYFVVVFN.mjs")
                  },
                  {
                    path: "products",
                    lazy: () => import("./category-products-DHFDJDN5.mjs")
                  },
                  {
                    path: "organize",
                    lazy: () => import("./category-organize-BNU6JZPL.mjs")
                  },
                  {
                    path: "metadata/edit",
                    lazy: () => import("./categories-metadata-LFLCW5BA.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/orders",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            handle: {
              breadcrumb: () => t("orders.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./order-list-YPWVR4WR.mjs")
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./order-detail-ITOVM2TB.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "fulfillment",
                    lazy: () => import("./order-create-fulfillment-F74P5RMX.mjs")
                  },
                  {
                    path: "returns/:return_id/receive",
                    lazy: () => import("./order-receive-return-WJABF7ZO.mjs")
                  },
                  {
                    path: "allocate-items",
                    lazy: () => import("./order-allocate-items-IXH3KEPK.mjs")
                  },
                  {
                    path: ":f_id/create-shipment",
                    lazy: () => import("./order-create-shipment-QAG6SQSF.mjs")
                  },
                  {
                    path: "returns",
                    lazy: () => import("./order-create-return-DC4ENMFI.mjs")
                  },
                  {
                    path: "claims",
                    lazy: () => import("./order-create-claim-J5G6C6RK.mjs")
                  },
                  {
                    path: "exchanges",
                    lazy: () => import("./order-create-exchange-XHY272XN.mjs")
                  },
                  {
                    path: "edits",
                    lazy: () => import("./order-create-edit-H7SXUGC6.mjs")
                  },
                  {
                    path: "refund",
                    lazy: () => import("./order-create-refund-6ILTHFTG.mjs")
                  },
                  {
                    path: "transfer",
                    lazy: () => import("./order-request-transfer-3OFN6HFE.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/promotions",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            handle: {
              breadcrumb: () => t("promotions.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./promotion-list-BPERNKNS.mjs")
              },
              {
                path: "create",
                lazy: () => import("./promotion-create-DQCUFAXG.mjs")
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./promotion-detail-PPMNY5MB.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./promotion-edit-details-6WGPIGH2.mjs")
                  },
                  {
                    path: "add-to-campaign",
                    lazy: () => import("./promotion-add-campaign-FPAU7ZT2.mjs")
                  },
                  {
                    path: ":ruleType/edit",
                    lazy: () => import("./edit-rules-XUKEFT4I.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/campaigns",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            handle: {
              breadcrumb: () => t("campaigns.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./campaign-list-5OYNGWM3.mjs"),
                children: []
              },
              {
                path: "create",
                lazy: () => import("./campaign-create-RRHUZ2IS.mjs")
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./campaign-detail-YACYUXDM.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./campaign-edit-QDJ2C35H.mjs")
                  },
                  {
                    path: "configuration",
                    lazy: () => import("./campaign-configuration-KMDCSL3P.mjs")
                  },
                  {
                    path: "edit-budget",
                    lazy: () => import("./campaign-budget-edit-X2RQNQOK.mjs")
                  },
                  {
                    path: "add-promotions",
                    lazy: () => import("./add-campaign-promotions-3WFSQETI.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/collections",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            handle: {
              breadcrumb: () => t("collections.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./collection-list-C3TZN4O4.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./collection-create-7PFY7YP6.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./collection-detail-XN6DKCH4.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./collection-edit-ZYQN6BW4.mjs")
                  },
                  {
                    path: "products",
                    lazy: () => import("./collection-add-products-B6OP3IG6.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/price-lists",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            handle: {
              breadcrumb: () => t("priceLists.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./price-list-list-SLXX7VLK.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./price-list-create-XTBJDDJA.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./price-list-detail-BD77V3WJ.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./price-list-edit-RNWHF7US.mjs")
                  },
                  {
                    path: "configuration",
                    lazy: () => import("./price-list-configuration-Q437XKS6.mjs")
                  },
                  {
                    path: "products/add",
                    lazy: () => import("./price-list-prices-add-JCD2JXF6.mjs")
                  },
                  {
                    path: "products/edit",
                    lazy: () => import("./price-list-prices-edit-OPBPAYM2.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/customers",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            handle: {
              breadcrumb: () => t("customers.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./customer-list-SAEFWCRJ.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./customer-create-JGM3AXKV.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./customer-detail-5O3IQR7X.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./customer-edit-QHKIPGDE.mjs")
                  },
                  {
                    path: "add-customer-groups",
                    lazy: () => import("./customers-add-customer-group-YBCNJP4U.mjs")
                  },
                  {
                    path: ":order_id/transfer",
                    lazy: () => import("./order-request-transfer-3OFN6HFE.mjs")
                  },
                  {
                    path: "metadata/edit",
                    lazy: () => import("./customer-metadata-IGDJ63OL.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/customer-groups",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            handle: {
              breadcrumb: () => t("customerGroups.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./customer-group-list-AHYX5HB7.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./customer-group-create-QFIE2ACC.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./customer-group-detail-WYPD45DD.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./customer-group-edit-TUERMF5K.mjs")
                  },
                  {
                    path: "add-customers",
                    lazy: () => import("./customer-group-add-customers-7M26IBU7.mjs")
                  },
                  {
                    path: "metadata/edit",
                    lazy: () => import("./customer-group-metadata-XCWROGHP.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/reservations",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            handle: {
              breadcrumb: () => t("reservations.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./reservation-list-34YD2DT2.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./reservation-create-ITKZZUQS.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./reservation-detail-IPSRI2E2.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./edit-reservation-6DTEAMAY.mjs")
                  },
                  {
                    path: "metadata/edit",
                    lazy: () => import("./reservation-metadata-RIZALRXM.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/inventory",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            handle: {
              breadcrumb: () => t("inventory.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./inventory-list-DYC3ZULK.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./inventory-create-VPHOMMMT.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./inventory-detail-TGZNWVE6.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./edit-inventory-item-2PQG5AYH.mjs")
                  },
                  {
                    path: "attributes",
                    lazy: () => import("./edit-inventory-item-attributes-SKTWPPMK.mjs")
                  },
                  {
                    path: "metadata/edit",
                    lazy: () => import("./inventory-metadata-PX7IOT6J.mjs")
                  },
                  {
                    path: "locations",
                    lazy: () => import("./manage-locations-RQELO5QG.mjs")
                  },
                  {
                    path: "locations/:location_id",
                    lazy: () => import("./adjust-inventory-4GCEJV43.mjs")
                  }
                ]
              }
            ]
          },
          ...RouteExtensions
        ]
      }
    ]
  },
  {
    element: /* @__PURE__ */ jsx17(ProtectedRoute, {}),
    errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
    children: [
      {
        path: "/settings",
        handle: {
          breadcrumb: () => t("app.nav.settings.header")
        },
        element: /* @__PURE__ */ jsx17(SettingsLayout, {}),
        children: [
          {
            index: true,
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            lazy: () => import("./settings-FQUPXMWF.mjs")
          },
          {
            path: "profile",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            lazy: () => import("./profile-detail-C6U3VJ3S.mjs"),
            handle: {
              breadcrumb: () => t("profile.domain")
            },
            children: [
              {
                path: "edit",
                lazy: () => import("./profile-edit-LIYUZJZ6.mjs")
              }
            ]
          },
          {
            path: "regions",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx17(Outlet4, {}),
            handle: {
              breadcrumb: () => t("regions.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./region-list-XH3J3NO6.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./region-create-OALFM3EA.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./region-detail-V3GQDHCJ.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./region-edit-Z6N6V47S.mjs")
                  },
                  {
                    path: "countries/add",
                    lazy: () => import("./region-add-countries-4VJ5WBUF.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "store",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            lazy: () => import("./store-detail-PRXKO7DH.mjs"),
            handle: {
              breadcrumb: () => t("store.domain")
            },
            children: [
              {
                path: "edit",
                lazy: () => import("./store-edit-QLKVJIHJ.mjs")
              },
              {
                path: "currencies",
                lazy: () => import("./store-add-currencies-EZ2KS5TF.mjs")
              },
              {
                path: "metadata/edit",
                lazy: () => import("./store-metadata-2IVZDXTN.mjs")
              }
            ]
          },
          {
            path: "users",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx17(Outlet4, {}),
            handle: {
              breadcrumb: () => t("users.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./user-list-QQ7CNWXR.mjs"),
                children: [
                  {
                    path: "invite",
                    lazy: () => import("./user-invite-7CQ4QMKT.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./user-detail-XGMR5AY2.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./user-edit-XEBRFEO7.mjs")
                  },
                  {
                    path: "metadata/edit",
                    lazy: () => import("./user-metadata-6F7FLSBL.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "sales-channels",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx17(Outlet4, {}),
            handle: {
              breadcrumb: () => t("salesChannels.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./sales-channel-list-ZSUTCOCH.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./sales-channel-create-WU4WWLMC.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./sales-channel-detail-62EDUMX3.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./sales-channel-edit-N6V32K6Z.mjs")
                  },
                  {
                    path: "add-products",
                    lazy: () => import("./sales-channel-add-products-DGYAX7M5.mjs")
                  },
                  {
                    path: "metadata/edit",
                    lazy: () => import("./sales-channel-metadata-SKL4HIGN.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "locations",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx17(Outlet4, {}),
            handle: {
              breadcrumb: () => t("locations.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./location-list-VAXNGKWH.mjs")
              },
              {
                path: "create",
                lazy: () => import("./location-create-OBFXHNSN.mjs")
              },
              {
                path: "shipping-profiles",
                element: /* @__PURE__ */ jsx17(Outlet4, {}),
                handle: {
                  breadcrumb: () => t("shippingProfile.domain")
                },
                children: [
                  {
                    path: "",
                    lazy: () => import("./shipping-profiles-list-MQFNCVHS.mjs"),
                    children: [
                      {
                        path: "create",
                        lazy: () => import("./shipping-profile-create-KOAGUXMG.mjs")
                      }
                    ]
                  },
                  {
                    path: ":shipping_profile_id",
                    lazy: async () => {
                      const { Component, Breadcrumb, loader } = await import("./shipping-profile-detail-SY2LAOIP.mjs");
                      return {
                        Component,
                        loader,
                        handle: {
                          breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                        }
                      };
                    }
                  }
                ]
              },
              {
                path: ":location_id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./location-detail-Z53KC5BE.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./location-edit-BG5ZUA2C.mjs")
                  },
                  {
                    path: "sales-channels",
                    lazy: () => import("./location-sales-channels-ZTWT6NPV.mjs")
                  },
                  {
                    path: "fulfillment-providers",
                    lazy: () => import("./location-fulfillment-providers-ZP75WHJU.mjs")
                  },
                  {
                    path: "fulfillment-set/:fset_id",
                    children: [
                      {
                        path: "service-zones/create",
                        lazy: () => import("./location-service-zone-create-5IVQI2HA.mjs")
                      },
                      {
                        path: "service-zone/:zone_id",
                        children: [
                          {
                            path: "edit",
                            lazy: () => import("./location-service-zone-edit-UZGB5OY6.mjs")
                          },
                          {
                            path: "areas",
                            lazy: () => import("./location-service-zone-manage-areas-UKAATVUA.mjs")
                          },
                          {
                            path: "shipping-option",
                            children: [
                              {
                                path: "create",
                                lazy: () => import("./location-service-zone-shipping-option-create-PYRYEL73.mjs")
                              },
                              {
                                path: ":so_id",
                                children: [
                                  {
                                    path: "edit",
                                    lazy: () => import("./location-service-zone-shipping-option-edit-UBZZE5VX.mjs")
                                  },
                                  {
                                    path: "pricing",
                                    lazy: () => import("./location-service-zone-shipping-option-pricing-LQJ5T4BZ.mjs")
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: "product-tags",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx17(Outlet4, {}),
            handle: {
              breadcrumb: () => t("productTags.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./product-tag-list-S6JIDTOZ.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./product-tag-create-JTXTZMDW.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./product-tag-detail-J3OXAENJ.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./product-tag-edit-GDUVTMZT.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "workflows",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx17(Outlet4, {}),
            handle: {
              breadcrumb: () => t("workflowExecutions.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./workflow-execution-list-DAKWIYKW.mjs")
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./workflow-execution-detail-SLRZC7KB.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                }
              }
            ]
          },
          {
            path: "product-types",
            errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx17(Outlet4, {}),
            handle: {
              breadcrumb: () => t("productTypes.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./product-type-list-JB55MW5S.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./product-type-create-OK3USQMT.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./product-type-detail-EBUOFQP2.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./product-type-edit-RDVSYIJ2.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "publishable-api-keys",
            element: /* @__PURE__ */ jsx17(Outlet4, {}),
            handle: {
              breadcrumb: () => t("apiKeyManagement.domain.publishable")
            },
            children: [
              {
                path: "",
                element: /* @__PURE__ */ jsx17(Outlet4, {}),
                children: [
                  {
                    path: "",
                    lazy: () => import("./api-key-management-list-HHYZEXYO.mjs"),
                    children: [
                      {
                        path: "create",
                        lazy: () => import("./api-key-management-create-XLB535PF.mjs")
                      }
                    ]
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./api-key-management-detail-R2QD6LIZ.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./api-key-management-edit-WKO66IR6.mjs")
                  },
                  {
                    path: "sales-channels",
                    lazy: () => import("./api-key-management-sales-channels-O4QU2WRV.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "secret-api-keys",
            element: /* @__PURE__ */ jsx17(Outlet4, {}),
            handle: {
              breadcrumb: () => t("apiKeyManagement.domain.secret")
            },
            children: [
              {
                path: "",
                element: /* @__PURE__ */ jsx17(Outlet4, {}),
                children: [
                  {
                    path: "",
                    lazy: () => import("./api-key-management-list-HHYZEXYO.mjs"),
                    children: [
                      {
                        path: "create",
                        lazy: () => import("./api-key-management-create-XLB535PF.mjs")
                      }
                    ]
                  }
                ]
              },
              {
                path: ":id",
                lazy: async () => {
                  const { Component, Breadcrumb, loader } = await import("./api-key-management-detail-R2QD6LIZ.mjs");
                  return {
                    Component,
                    loader,
                    handle: {
                      breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                    }
                  };
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./api-key-management-edit-WKO66IR6.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "tax-regions",
            element: /* @__PURE__ */ jsx17(Outlet4, {}),
            handle: {
              breadcrumb: () => t("taxRegions.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./tax-region-list-QSEWX6US.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./tax-region-create-WMFX7H4E.mjs")
                  }
                ]
              },
              {
                path: ":id",
                Component: Outlet4,
                loader: taxRegionLoader,
                handle: {
                  breadcrumb: (match) => /* @__PURE__ */ jsx17(TaxRegionDetailBreadcrumb, { ...match })
                },
                children: [
                  {
                    path: "",
                    lazy: async () => {
                      const { Component } = await import("./tax-region-detail-X2YHZXCE.mjs");
                      return {
                        Component
                      };
                    },
                    children: [
                      {
                        path: "provinces/create",
                        lazy: () => import("./tax-region-province-create-QLMSOFTE.mjs")
                      },
                      {
                        path: "overrides/create",
                        lazy: () => import("./tax-region-tax-override-create-XDBJZHTH.mjs")
                      },
                      {
                        path: "overrides/:tax_rate_id/edit",
                        lazy: () => import("./tax-region-tax-override-edit-Q6LKG5V3.mjs")
                      },
                      {
                        path: "tax-rates/create",
                        lazy: () => import("./tax-region-tax-rate-create-FITQUMNR.mjs")
                      },
                      {
                        path: "tax-rates/:tax_rate_id/edit",
                        lazy: () => import("./tax-region-tax-rate-edit-LOTBJTCB.mjs")
                      }
                    ]
                  },
                  {
                    path: "provinces/:province_id",
                    lazy: async () => {
                      const { Component, Breadcrumb, loader } = await import("./tax-region-province-detail-4C5YK7I2.mjs");
                      return {
                        Component,
                        loader,
                        handle: {
                          breadcrumb: (match) => /* @__PURE__ */ jsx17(Breadcrumb, { ...match })
                        }
                      };
                    },
                    children: [
                      {
                        path: "tax-rates/create",
                        lazy: () => import("./tax-region-tax-rate-create-FITQUMNR.mjs")
                      },
                      {
                        path: "tax-rates/:tax_rate_id/edit",
                        lazy: () => import("./tax-region-tax-rate-edit-LOTBJTCB.mjs")
                      },
                      {
                        path: "overrides/create",
                        lazy: () => import("./tax-region-tax-override-create-XDBJZHTH.mjs")
                      },
                      {
                        path: "overrides/:tax_rate_id/edit",
                        lazy: () => import("./tax-region-tax-override-edit-Q6LKG5V3.mjs")
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: "return-reasons",
            element: /* @__PURE__ */ jsx17(Outlet4, {}),
            handle: {
              breadcrumb: () => t("returnReasons.domain")
            },
            children: [
              {
                path: "",
                lazy: () => import("./return-reason-list-F3AO3TRF.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./return-reason-create-QDWJ2FLC.mjs")
                  },
                  {
                    path: ":id",
                    children: [
                      {
                        path: "edit",
                        lazy: () => import("./return-reason-edit-LFO5DNVZ.mjs")
                      }
                    ]
                  }
                ]
              }
            ]
          },
          ...SettingsExtensions
        ]
      }
    ]
  },
  {
    element: /* @__PURE__ */ jsx17(PublicLayout, {}),
    children: [
      {
        errorElement: /* @__PURE__ */ jsx17(ErrorBoundary, {}),
        children: [
          {
            path: "/login",
            lazy: () => import("./login-ISUWYIO6.mjs")
          },
          {
            path: "/reset-password",
            lazy: () => import("./reset-password-GYEBXJAL.mjs")
          },
          {
            path: "/invite",
            lazy: () => import("./invite-FP7K6MIA.mjs")
          },
          {
            path: "*",
            lazy: () => import("./no-match-YRNHGOT3.mjs")
          }
        ]
      }
    ]
  }
];

// src/providers/router-provider/router-provider.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
var router = createBrowserRouter(RouteMap, {
  basename: __BASE__ || "/"
});
var RouterProvider = () => {
  return /* @__PURE__ */ jsx18(Provider2, { router });
};

// src/app.tsx
import displayModule from "virtual:medusa/displays";
import formModule from "virtual:medusa/forms";
import menuItemModule from "virtual:medusa/menu-items";
import widgetModule from "virtual:medusa/widgets";
import { jsx as jsx19 } from "react/jsx-runtime";
function App() {
  const manager = new DashboardExtensionManager({
    displayModule,
    formModule,
    menuItemModule,
    widgetModule
  });
  return /* @__PURE__ */ jsx19(Providers, { api: manager.api, children: /* @__PURE__ */ jsx19(RouterProvider, {}) });
}
var app_default = App;
export {
  app_default as default
};