import {
  useDeleteProductTypeAction
} from "./chunk-QVW35SMO.mjs";
import {
  useProductTypeTableColumns
} from "./chunk-YYGNAECV.mjs";
import "./chunk-B4FQDBC3.mjs";
import "./chunk-MSDRGCRR.mjs";
import {
  useProductTypeTableQuery
} from "./chunk-TDK3JDOB.mjs";
import {
  useProductTypeTableFilters
} from "./chunk-CBSCX7RE.mjs";
import "./chunk-W7625H47.mjs";
import {
  SingleColumnPage
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
import "./chunk-LPEUYMRK.mjs";
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
import {
  useProductTypes
} from "./chunk-F2FX7KCH.mjs";
import {
  useDashboardExtension
} from "./chunk-MYZNNCXD.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/product-types/product-type-list/components/product-type-list-table/product-type-list-table.tsx
import { Button, Container, Heading, Text } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { Link } from "react-router-dom";

// src/routes/product-types/product-type-list/components/product-type-list-table/product-table-row-actions.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var ProductTypeRowActions = ({
  productType
}) => {
  const { t } = useTranslation();
  const handleDelete = useDeleteProductTypeAction(productType.id);
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              label: t("actions.edit"),
              icon: /* @__PURE__ */ jsx(PencilSquare, {}),
              to: `/settings/product-types/${productType.id}/edit`
            }
          ]
        },
        {
          actions: [
            {
              label: t("actions.delete"),
              icon: /* @__PURE__ */ jsx(Trash, {}),
              onClick: handleDelete
            }
          ]
        }
      ]
    }
  );
};

// src/routes/product-types/product-type-list/components/product-type-list-table/product-type-list-table.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var ProductTypeListTable = () => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useProductTypeTableQuery({
    pageSize: PAGE_SIZE
  });
  const { product_types, count, isLoading, isError, error } = useProductTypes(
    searchParams,
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useProductTypeTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    columns,
    data: product_types,
    count,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx2(Heading, { children: t("productTypes.domain") }),
        /* @__PURE__ */ jsx2(Text, { className: "text-ui-fg-subtle", size: "small", children: t("productTypes.subtitle") })
      ] }),
      /* @__PURE__ */ jsx2(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx2(Link, { to: "create", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx2(
      DataTable,
      {
        table,
        filters,
        isLoading,
        columns,
        pageSize: PAGE_SIZE,
        count,
        orderBy: [
          { key: "value", label: t("fields.value") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        navigateTo: ({ original }) => original.id,
        queryObject: raw,
        pagination: true,
        search: true
      }
    )
  ] });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useProductTypeTableColumns();
  return useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx2(ProductTypeRowActions, { productType: row.original });
        }
      })
    ],
    [base]
  );
};

// src/routes/product-types/product-type-list/product-type-list.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var ProductTypeList = () => {
  const { getWidgets } = useDashboardExtension();
  return /* @__PURE__ */ jsx3(
    SingleColumnPage,
    {
      widgets: {
        after: getWidgets("product_type.list.after"),
        before: getWidgets("product_type.list.before")
      },
      children: /* @__PURE__ */ jsx3(ProductTypeListTable, {})
    }
  );
};
export {
  ProductTypeList as Component
};