import {
  ListSummary
} from "./chunk-I3VB6NM2.mjs";
import {
  useDeletePriceListAction
} from "./chunk-QR72ESDG.mjs";
import {
  getPriceListStatus
} from "./chunk-G2J2T2QU.mjs";
import "./chunk-XUQVQCAO.mjs";
import {
  DateRangeDisplay
} from "./chunk-VKWARFIN.mjs";
import {
  useProductTableColumns
} from "./chunk-RJSD5KRU.mjs";
import "./chunk-RERSP5B2.mjs";
import "./chunk-TOMHEGT5.mjs";
import "./chunk-ADOCJB6L.mjs";
import {
  useProductTableQuery
} from "./chunk-4M3ZY7KA.mjs";
import {
  useProductTableFilters
} from "./chunk-24OILC3G.mjs";
import {
  TwoColumnPage
} from "./chunk-2RQLKDBF.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-A5HXPG42.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  Skeleton,
  TwoColumnPageSkeleton
} from "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-RBEBIPW6.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-GBNV4D2H.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-R3DNF26F.mjs";
import "./chunk-BOBCOEXA.mjs";
import "./chunk-4XWPEQS4.mjs";
import "./chunk-R4S4IZIL.mjs";
import "./chunk-UMNS46LA.mjs";
import "./chunk-4YM46CJI.mjs";
import "./chunk-MVS2MLD5.mjs";
import "./chunk-6YTJEFSJ.mjs";
import "./chunk-ZT6F5MCR.mjs";
import "./chunk-JODJECSK.mjs";
import "./chunk-F2FX7KCH.mjs";
import "./chunk-RVOQ4QHC.mjs";
import "./chunk-XTMZKMOZ.mjs";
import "./chunk-BQN4VGEZ.mjs";
import "./chunk-6GGI4OZ2.mjs";
import "./chunk-PH5TFBJO.mjs";
import "./chunk-GHJM3KWM.mjs";
import {
  priceListsQueryKeys,
  usePriceList,
  usePriceListLinkProducts
} from "./chunk-6IW74BRC.mjs";
import {
  useCustomerGroups
} from "./chunk-6FTYBCYU.mjs";
import "./chunk-C7J3KXU4.mjs";
import "./chunk-22SBRBNJ.mjs";
import "./chunk-STLKFKTM.mjs";
import "./chunk-7IYWGNFM.mjs";
import "./chunk-FQ3W3CD6.mjs";
import "./chunk-M7TK4QZI.mjs";
import "./chunk-D5QHHX42.mjs";
import "./chunk-JEH3SANT.mjs";
import "./chunk-CSL6R7SM.mjs";
import "./chunk-OFR32LXC.mjs";
import "./chunk-JFVS6F3P.mjs";
import "./chunk-6GU6IDUA.mjs";
import {
  useDashboardExtension
} from "./chunk-MYZNNCXD.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import {
  useProducts
} from "./chunk-GVVSRVWO.mjs";
import "./chunk-VZXSXNQY.mjs";
import {
  queryClient
} from "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import {
  sdk
} from "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/price-lists/price-list-detail/breadcrumb.tsx
import { jsx } from "react/jsx-runtime";
var PriceListDetailBreadcrumb = (props) => {
  const { id } = props.params || {};
  const { price_list } = usePriceList(id, void 0, {
    initialData: props.data,
    enabled: Boolean(id)
  });
  if (!price_list) {
    return null;
  }
  return /* @__PURE__ */ jsx("span", { children: price_list.title });
};

// src/routes/price-lists/price-list-detail/loader.ts
var pricingDetailQuery = (id) => ({
  queryKey: priceListsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.priceList.retrieve(id)
});
var pricingLoader = async ({ params }) => {
  const id = params.id;
  const query = pricingDetailQuery(id);
  return queryClient.ensureQueryData(query);
};

// src/routes/price-lists/price-list-detail/price-list-detail.tsx
import { useParams } from "react-router-dom";

// src/routes/price-lists/price-list-detail/components/price-list-configuration-section/price-list-configuration-section.tsx
import { PencilSquare } from "@medusajs/icons";
import { Container, Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var PriceListConfigurationSection = ({
  priceList
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Container, { className: "flex flex-col gap-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx2(Heading, { level: "h2", children: t("priceLists.configuration.header") }),
        /* @__PURE__ */ jsx2(CustomerGroupDisplay, { priceList })
      ] }),
      /* @__PURE__ */ jsx2(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: "configuration",
                  icon: /* @__PURE__ */ jsx2(PencilSquare, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx2(
      DateRangeDisplay,
      {
        endsAt: priceList.ends_at,
        startsAt: priceList.starts_at,
        showTime: true
      }
    )
  ] });
};
var CustomerGroupDisplay = ({
  priceList
}) => {
  const { t } = useTranslation();
  const customerGroupIds = priceList.rules.customer_group_id;
  const { customer_groups, isPending, isError, error } = useCustomerGroups(
    {
      id: customerGroupIds
    },
    {
      enabled: !!customerGroupIds?.length
    }
  );
  if (isError) {
    throw error;
  }
  if (!customerGroupIds?.length) {
    return null;
  }
  if (isPending || !customer_groups) {
    return /* @__PURE__ */ jsx2(Skeleton, { className: "h-5 w-full max-w-48" });
  }
  return /* @__PURE__ */ jsxs("div", { className: "txt-small-plus text-ui-fg-muted flex items-center gap-x-1.5", children: [
    /* @__PURE__ */ jsx2("span", { className: "text-ui-fg-subtle", children: t("priceLists.fields.customerAvailability.attribute") }),
    /* @__PURE__ */ jsx2("span", { children: "\xB7" }),
    /* @__PURE__ */ jsx2(
      ListSummary,
      {
        list: customer_groups.map((group) => group.name),
        n: 1,
        className: "txt-small-plus text-ui-fg-muted"
      }
    )
  ] });
};

// src/routes/price-lists/price-list-detail/components/price-list-general-section/price-list-general-section.tsx
import { PencilSquare as PencilSquare2, Trash } from "@medusajs/icons";
import { Container as Container2, Heading as Heading2, StatusBadge, Text } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var PriceListGeneralSection = ({
  priceList
}) => {
  const { t } = useTranslation2();
  const overrideCount = priceList.prices?.length || 0;
  const { color, text } = getPriceListStatus(t, priceList);
  const handleDelete = useDeletePriceListAction({ priceList });
  const type = priceList.type === "sale" ? t("priceLists.fields.type.options.sale.label") : t("priceLists.fields.type.options.override.label");
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Heading2, { children: priceList.title }),
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ jsx3(StatusBadge, { color, children: text }),
        /* @__PURE__ */ jsx3(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    label: t("actions.edit"),
                    to: "edit",
                    icon: /* @__PURE__ */ jsx3(PencilSquare2, {})
                  }
                ]
              },
              {
                actions: [
                  {
                    label: t("actions.delete"),
                    onClick: handleDelete,
                    icon: /* @__PURE__ */ jsx3(Trash, {})
                  }
                ]
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Text, { leading: "compact", size: "small", weight: "plus", children: t("fields.type") }),
      /* @__PURE__ */ jsx3(Text, { size: "small", className: "text-pretty", children: type })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Text, { leading: "compact", size: "small", weight: "plus", children: t("fields.description") }),
      /* @__PURE__ */ jsx3(Text, { size: "small", className: "text-pretty", children: priceList.description })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Text, { leading: "compact", size: "small", weight: "plus", children: t("priceLists.fields.priceOverrides.label") }),
      /* @__PURE__ */ jsx3(Text, { size: "small", className: "text-pretty", children: overrideCount || "-" })
    ] })
  ] });
};

// src/routes/price-lists/price-list-detail/components/price-list-product-section/price-list-product-section.tsx
import { PencilSquare as PencilSquare3, Plus, Trash as Trash2 } from "@medusajs/icons";
import { Checkbox, Container as Container3, Heading as Heading3, toast, usePrompt } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var PREFIX = "p";
var PriceListProductSection = ({
  priceList
}) => {
  const { t } = useTranslation3();
  const navigate = useNavigate();
  const prompt = usePrompt();
  const [rowSelection, setRowSelection] = useState({});
  const { searchParams, raw } = useProductTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { products, count, isLoading, isError, error } = useProducts(
    {
      ...searchParams,
      price_list_id: [priceList.id]
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useProductTableFilters();
  const columns = useColumns(priceList);
  const { mutateAsync } = usePriceListLinkProducts(priceList.id);
  const { table } = useDataTable({
    data: products || [],
    count,
    columns,
    enablePagination: true,
    enableRowSelection: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.id,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    },
    prefix: PREFIX
  });
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("priceLists.products.delete.confirmation", {
        count: Object.keys(rowSelection).length
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    mutateAsync(
      {
        remove: Object.keys(rowSelection)
      },
      {
        onSuccess: () => {
          toast.success(
            t("priceLists.products.delete.successToast", {
              count: Object.keys(rowSelection).length
            })
          );
          setRowSelection({});
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  const handleEdit = async () => {
    const ids = Object.keys(rowSelection).join(",");
    navigate(`products/edit?ids[]=${ids}`);
  };
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(Container3, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx4(Heading3, { children: t("priceLists.products.header") }),
      /* @__PURE__ */ jsx4(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("priceLists.products.actions.addProducts"),
                  to: "products/add",
                  icon: /* @__PURE__ */ jsx4(Plus, {})
                },
                {
                  label: t("priceLists.products.actions.editPrices"),
                  to: "products/edit",
                  icon: /* @__PURE__ */ jsx4(PencilSquare3, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx4(
      DataTable,
      {
        table,
        filters,
        columns,
        count,
        pageSize: PAGE_SIZE,
        isLoading,
        navigateTo: (row) => `/products/${row.original.id}`,
        orderBy: [
          { key: "title", label: t("fields.title") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        commands: [
          {
            action: handleEdit,
            label: t("actions.edit"),
            shortcut: "e"
          },
          {
            action: handleDelete,
            label: t("actions.delete"),
            shortcut: "d"
          }
        ],
        pagination: true,
        search: true,
        prefix: PREFIX,
        queryObject: raw
      }
    )
  ] });
};
var ProductRowAction = ({
  product,
  priceList
}) => {
  const { t } = useTranslation3();
  const prompt = usePrompt();
  const { mutateAsync } = usePriceListLinkProducts(priceList.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("priceLists.products.delete.confirmation", {
        count: 1
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    mutateAsync(
      {
        remove: [product.id]
      },
      {
        onSuccess: () => {
          toast.success(
            t("priceLists.products.delete.successToast", {
              count: 1
            })
          );
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  return /* @__PURE__ */ jsx4(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx4(PencilSquare3, {}),
              label: t("priceLists.products.actions.editPrices"),
              to: `products/edit?ids[]=${product.id}`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx4(Trash2, {}),
              label: t("actions.remove"),
              onClick: handleDelete
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = (priceList) => {
  const base = useProductTableColumns();
  return useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx4(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx4(
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
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx4(ProductRowAction, { product: row.original, priceList })
      })
    ],
    [base, priceList]
  );
};

// src/routes/price-lists/price-list-detail/price-list-detail.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var PriceListDetails = () => {
  const { id } = useParams();
  const { price_list, isLoading, isError, error } = usePriceList(id);
  const { getWidgets } = useDashboardExtension();
  if (isLoading || !price_list) {
    return /* @__PURE__ */ jsx5(TwoColumnPageSkeleton, { mainSections: 2, sidebarSections: 1, showJSON: true });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs4(
    TwoColumnPage,
    {
      widgets: {
        after: getWidgets("price_list.details.after"),
        before: getWidgets("price_list.details.before"),
        sideAfter: getWidgets("price_list.details.side.after"),
        sideBefore: getWidgets("price_list.details.side.before")
      },
      data: price_list,
      showJSON: true,
      children: [
        /* @__PURE__ */ jsxs4(TwoColumnPage.Main, { children: [
          /* @__PURE__ */ jsx5(PriceListGeneralSection, { priceList: price_list }),
          /* @__PURE__ */ jsx5(PriceListProductSection, { priceList: price_list })
        ] }),
        /* @__PURE__ */ jsx5(TwoColumnPage.Sidebar, { children: /* @__PURE__ */ jsx5(PriceListConfigurationSection, { priceList: price_list }) })
      ]
    }
  );
};
export {
  PriceListDetailBreadcrumb as Breadcrumb,
  PriceListDetails as Component,
  pricingLoader as loader
};