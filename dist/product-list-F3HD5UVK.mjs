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
} from "./chunk-6BYYQAG5.mjs";
import {
  SingleColumnPage
} from "./chunk-2RQLKDBF.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-ZAHOAXDQ.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-PJI5SDKJ.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-MG2GSM3O.mjs";
import "./chunk-BOBCOEXA.mjs";
import "./chunk-6OFYTEJZ.mjs";
import "./chunk-R4S4IZIL.mjs";
import "./chunk-C2BURFUV.mjs";
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
import "./chunk-CMDEP2Y7.mjs";
import "./chunk-6IW74BRC.mjs";
import "./chunk-6FTYBCYU.mjs";
import "./chunk-C7J3KXU4.mjs";
import "./chunk-STLKFKTM.mjs";
import "./chunk-22SBRBNJ.mjs";
import "./chunk-7IYWGNFM.mjs";
import "./chunk-YHL6YEHM.mjs";
import "./chunk-M7TK4QZI.mjs";
import "./chunk-D5QHHX42.mjs";
import "./chunk-JEH3SANT.mjs";
import "./chunk-CSL6R7SM.mjs";
import "./chunk-OFR32LXC.mjs";
import "./chunk-JFVS6F3P.mjs";
import {
  useDashboardExtension
} from "./chunk-MYZNNCXD.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import {
  productsQueryKeys,
  useDeleteProduct,
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

// src/routes/products/product-list/loader.ts
var productsListQuery = () => ({
  queryKey: productsQueryKeys.list({ limit: 20, offset: 0 }),
  queryFn: async () => sdk.admin.product.list({ limit: 20, offset: 0 })
});
var productsLoader = (client) => {
  return async () => {
    const query = productsListQuery();
    return queryClient.getQueryData(
      query.queryKey
    ) ?? await client.fetchQuery(query);
  };
};

// src/routes/products/product-list/components/product-list-table/product-list-table.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Button, Container, Heading, toast, usePrompt } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var ProductListTable = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const initialData = useLoaderData();
  const { searchParams, raw } = useProductTableQuery({ pageSize: PAGE_SIZE });
  const { products, count, isLoading, isError, error } = useProducts(
    {
      ...searchParams
    },
    {
      initialData,
      placeholderData: keepPreviousData
    }
  );
  const filters = useProductTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: products ?? [],
    columns,
    count,
    enablePagination: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.id
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("products.domain") }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-x-2", children: [
        /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: `export${location.search}`, children: t("actions.export") }) }),
        /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "import", children: t("actions.import") }) }),
        /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "create", children: t("actions.create") }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        count,
        pageSize: PAGE_SIZE,
        filters,
        search: true,
        pagination: true,
        isLoading,
        queryObject: raw,
        navigateTo: (row) => `${row.original.id}`,
        orderBy: [
          { key: "title", label: t("fields.title") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        noRecords: {
          message: t("products.list.noRecordsMessage")
        }
      }
    ),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
};
var ProductActions = ({ product }) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteProduct(product.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("products.deleteWarning", {
        title: product.title
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(t("products.toasts.delete.success.header"), {
          description: t("products.toasts.delete.success.description", {
            title: product.title
          })
        });
      },
      onError: (e) => {
        toast.error(t("products.toasts.delete.error.header"), {
          description: e.message
        });
      }
    });
  };
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(PencilSquare, {}),
              label: t("actions.edit"),
              to: `/products/${product.id}/edit`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(Trash, {}),
              label: t("actions.delete"),
              onClick: handleDelete
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useProductTableColumns();
  const columns = useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(ProductActions, { product: row.original });
        }
      })
    ],
    [base]
  );
  return columns;
};

// src/routes/products/product-list/product-list.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ProductList = () => {
  const { getWidgets } = useDashboardExtension();
  return /* @__PURE__ */ jsx2(
    SingleColumnPage,
    {
      widgets: {
        after: getWidgets("product.list.after"),
        before: getWidgets("product.list.before")
      },
      children: /* @__PURE__ */ jsx2(ProductListTable, {})
    }
  );
};
export {
  ProductList as Component,
  productsLoader as productLoader
};
