import {
  useCurrenciesTableColumns,
  useCurrenciesTableQuery
} from "./chunk-NEZX6265.mjs";
import "./chunk-MSDRGCRR.mjs";
import {
  StatusCell
} from "./chunk-ADOCJB6L.mjs";
import {
  SingleColumnPage
} from "./chunk-2RQLKDBF.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-XOK63ZPD.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  SingleColumnPageSkeleton
} from "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-RBEBIPW6.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-IPBL67Z7.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-R3DNF26F.mjs";
import "./chunk-KHOKHZC6.mjs";
import "./chunk-4XWPEQS4.mjs";
import "./chunk-LJQNRGKD.mjs";
import {
  useCurrencies
} from "./chunk-BQN4VGEZ.mjs";
import {
  retrieveActiveStore,
  storeQueryKeys,
  useStore,
  useUpdateStore
} from "./chunk-CSL6R7SM.mjs";
import {
  useRegion
} from "./chunk-OFR32LXC.mjs";
import {
  usePricePreferences
} from "./chunk-JFVS6F3P.mjs";
import {
  useDashboardExtension
} from "./chunk-MYZNNCXD.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import {
  queryClient
} from "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/store/store-detail/loader.ts
var storeDetailQuery = () => ({
  queryKey: storeQueryKeys.details(),
  queryFn: async () => retrieveActiveStore()
});
var storeLoader = async () => {
  const query = storeDetailQuery();
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

// src/routes/store/store-detail/store-detail.tsx
import { useLoaderData } from "react-router-dom";

// src/routes/store/store-detail/components/store-currency-section/store-currencies-section.tsx/store-currency-section.tsx
import { CheckCircle, Plus, Trash, XCircle } from "@medusajs/icons";
import {
  Checkbox,
  CommandBar,
  Container,
  Heading,
  toast,
  usePrompt
} from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var StoreCurrencySection = ({ store }) => {
  const [rowSelection, setRowSelection] = useState({});
  const { searchParams, raw } = useCurrenciesTableQuery({ pageSize: PAGE_SIZE });
  const {
    currencies,
    count,
    isPending: isCurrenciesPending,
    isError: isCurrenciesError,
    error: currenciesError
  } = useCurrencies(
    {
      code: store.supported_currencies?.map((c) => c.currency_code),
      ...searchParams
    },
    {
      placeholderData: keepPreviousData,
      enabled: !!store.supported_currencies?.length
    }
  );
  const {
    price_preferences: pricePreferences,
    isPending: isPricePreferencesPending,
    isError: isPricePreferencesError,
    error: pricePreferencesError
  } = usePricePreferences(
    {
      attribute: "currency_code",
      value: store.supported_currencies?.map((c) => c.currency_code)
    },
    {
      enabled: !!store.supported_currencies?.length
    }
  );
  const columns = useColumns();
  const prefMap = useMemo(() => {
    return new Map(pricePreferences?.map((pref) => [pref.value, pref]));
  }, [pricePreferences]);
  const withTaxInclusivity = currencies?.map((c) => ({
    ...c,
    is_tax_inclusive: prefMap.get(c.code)?.is_tax_inclusive
  }));
  const { table } = useDataTable({
    data: withTaxInclusivity ?? [],
    columns,
    count,
    getRowId: (row) => row.code,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    },
    enablePagination: true,
    enableRowSelection: true,
    pageSize: PAGE_SIZE,
    meta: {
      storeId: store.id,
      supportedCurrencies: store.supported_currencies,
      defaultCurrencyCode: store.supported_currencies?.find((c) => c.is_default)?.currency_code,
      preferencesMap: prefMap
    }
  });
  const { mutateAsync } = useUpdateStore(store.id);
  const { t } = useTranslation();
  const prompt = usePrompt();
  const handleDeleteCurrencies = async () => {
    const ids = Object.keys(rowSelection);
    const result = await prompt({
      title: t("general.areYouSure"),
      description: t("store.removeCurrencyWarning", {
        count: ids.length
      }),
      confirmText: t("actions.remove"),
      cancelText: t("actions.cancel")
    });
    if (!result) {
      return;
    }
    await mutateAsync(
      {
        supported_currencies: store.supported_currencies?.filter(
          (c) => !ids.includes(c.currency_code)
        ) ?? []
      },
      {
        onSuccess: () => {
          setRowSelection({});
          toast.success(t("store.toast.currenciesRemoved"));
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  if (isCurrenciesError) {
    throw currenciesError;
  }
  if (isPricePreferencesError) {
    throw pricePreferencesError;
  }
  const isLoading = isCurrenciesPending || isPricePreferencesPending;
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("store.currencies") }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx(Plus, {}),
                  label: t("actions.add"),
                  to: "currencies"
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        orderBy: [
          { key: "name", label: t("fields.name") },
          { key: "code", label: t("fields.code") }
        ],
        search: true,
        pagination: true,
        table,
        pageSize: PAGE_SIZE,
        columns,
        count: !store.supported_currencies?.length ? 0 : count,
        isLoading: !store.supported_currencies?.length ? false : isLoading,
        queryObject: raw
      }
    ),
    /* @__PURE__ */ jsx(CommandBar, { open: !!Object.keys(rowSelection).length, children: /* @__PURE__ */ jsxs(CommandBar.Bar, { children: [
      /* @__PURE__ */ jsx(CommandBar.Value, { children: t("general.countSelected", {
        count: Object.keys(rowSelection).length
      }) }),
      /* @__PURE__ */ jsx(CommandBar.Seperator, {}),
      /* @__PURE__ */ jsx(
        CommandBar.Command,
        {
          action: handleDeleteCurrencies,
          shortcut: "r",
          label: t("actions.remove")
        }
      )
    ] }) })
  ] });
};
var CurrencyActions = ({
  storeId,
  currency,
  supportedCurrencies,
  defaultCurrencyCode,
  preferencesMap
}) => {
  const { mutateAsync } = useUpdateStore(storeId);
  const { t } = useTranslation();
  const prompt = usePrompt();
  const handleRemove = async () => {
    const result = await prompt({
      title: t("general.areYouSure"),
      description: t("store.removeCurrencyWarning", {
        count: 1
      }),
      verificationInstruction: t("general.typeToConfirm"),
      verificationText: currency.name,
      confirmText: t("actions.remove"),
      cancelText: t("actions.cancel")
    });
    if (!result) {
      return;
    }
    await mutateAsync(
      {
        supported_currencies: supportedCurrencies.filter(
          (c) => c.currency_code !== currency.code
        )
      },
      {
        onSuccess: () => {
          toast.success(t("store.toast.currenciesRemoved"));
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  const handleToggleTaxInclusivity = async () => {
    await mutateAsync(
      {
        supported_currencies: supportedCurrencies.map((c) => {
          const pref = preferencesMap.get(c.currency_code);
          return {
            ...c,
            is_tax_inclusive: c.currency_code === currency.code ? !pref?.is_tax_inclusive : void 0
          };
        })
      },
      {
        onSuccess: () => {
          toast.success(t("store.toast.updatedTaxInclusivitySuccessfully"));
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: preferencesMap.get(currency.code)?.is_tax_inclusive ? /* @__PURE__ */ jsx(XCircle, {}) : /* @__PURE__ */ jsx(CheckCircle, {}),
              label: preferencesMap.get(currency.code)?.is_tax_inclusive ? t("store.disableTaxInclusivePricing") : t("store.enableTaxInclusivePricing"),
              onClick: handleToggleTaxInclusivity
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(Trash, {}),
              label: t("actions.remove"),
              onClick: handleRemove,
              disabled: currency.code === defaultCurrencyCode
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useCurrenciesTableColumns();
  const { t } = useTranslation();
  return useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: row.getIsSelected(),
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
        }
      }),
      ...base,
      columnHelper.accessor("is_tax_inclusive", {
        header: t("fields.taxInclusivePricing"),
        cell: ({ getValue }) => {
          const isTaxInclusive = getValue();
          return /* @__PURE__ */ jsx(StatusCell, { color: isTaxInclusive ? "green" : "grey", children: isTaxInclusive ? t("fields.true") : t("fields.false") });
        }
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row, table }) => {
          const {
            supportedCurrencies,
            storeId,
            defaultCurrencyCode,
            preferencesMap
          } = table.options.meta;
          return /* @__PURE__ */ jsx(
            CurrencyActions,
            {
              storeId,
              currency: row.original,
              supportedCurrencies,
              defaultCurrencyCode,
              preferencesMap
            }
          );
        }
      })
    ],
    [base, t]
  );
};

// src/routes/store/store-detail/components/store-general-section/store-general-section.tsx
import { PencilSquare } from "@medusajs/icons";
import { Badge, Container as Container2, Heading as Heading2, Text } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var StoreGeneralSection = ({ store }) => {
  const { t } = useTranslation2();
  const { region } = useRegion(store.default_region_id, void 0, {
    enabled: !!store.default_region_id
  });
  const defaultCurrency = store.supported_currencies?.find((c) => c.is_default);
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx2(Heading2, { children: t("store.domain") }),
        /* @__PURE__ */ jsx2(Text, { className: "text-ui-fg-subtle", size: "small", children: t("store.manageYourStoresDetails") })
      ] }),
      /* @__PURE__ */ jsx2(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx2(PencilSquare, {}),
                  label: t("actions.edit"),
                  to: "edit"
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.name") }),
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: store.name })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", weight: "plus", children: t("store.defaultCurrency") }),
      defaultCurrency ? /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-2", children: [
        /* @__PURE__ */ jsx2(Badge, { size: "2xsmall", children: defaultCurrency.currency_code?.toUpperCase() }),
        /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: defaultCurrency.currency?.name })
      ] }) : /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: "-" })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", weight: "plus", children: t("store.defaultRegion") }),
      /* @__PURE__ */ jsx2("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: region?.name || "-" }) })
    ] })
  ] });
};

// src/routes/store/store-detail/store-detail.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var StoreDetail = () => {
  const initialData = useLoaderData();
  const { store, isPending, isError, error } = useStore(void 0, {
    initialData
  });
  const { getWidgets } = useDashboardExtension();
  if (isPending || !store) {
    return /* @__PURE__ */ jsx3(SingleColumnPageSkeleton, { sections: 2, showJSON: true, showMetadata: true });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(
    SingleColumnPage,
    {
      widgets: {
        before: getWidgets("store.details.before"),
        after: getWidgets("store.details.after")
      },
      data: store,
      hasOutlet: true,
      showMetadata: true,
      showJSON: true,
      children: [
        /* @__PURE__ */ jsx3(StoreGeneralSection, { store }),
        /* @__PURE__ */ jsx3(StoreCurrencySection, { store })
      ]
    }
  );
};
export {
  StoreDetail as Component,
  storeLoader as loader
};