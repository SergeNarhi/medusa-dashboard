import {
  SingleColumnPage
} from "./chunk-2RQLKDBF.mjs";
import "./chunk-LQTHYS2Z.mjs";
import {
  PlaceholderCell
} from "./chunk-P3UUX2T6.mjs";
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
import {
  useQueryParams
} from "./chunk-C76H5USB.mjs";
import "./chunk-PJI5SDKJ.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-MG2GSM3O.mjs";
import "./chunk-BOBCOEXA.mjs";
import "./chunk-6OFYTEJZ.mjs";
import "./chunk-R4S4IZIL.mjs";
import {
  useStockLocations
} from "./chunk-7IYWGNFM.mjs";
import {
  useDashboardExtension
} from "./chunk-MYZNNCXD.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import {
  useDeleteInventoryItem,
  useInventoryItems
} from "./chunk-VZXSXNQY.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/inventory/inventory-list/components/inventory-list-table.tsx
import { Button, Container, Heading, Text } from "@medusajs/ui";
import { useTranslation as useTranslation4 } from "react-i18next";
import { Link } from "react-router-dom";

// src/routes/inventory/inventory-list/components/inventory-actions.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var InventoryActions = ({ item }) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteInventoryItem(item.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("inventory.deleteWarning"),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync();
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
              to: `${item.id}/edit`
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

// src/routes/inventory/inventory-list/components/use-inventory-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2 } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useInventoryTableColumns = () => {
  const { t } = useTranslation2();
  return useMemo(
    () => [
      columnHelper.accessor("title", {
        header: t("fields.title"),
        cell: ({ getValue }) => {
          const title = getValue();
          if (!title) {
            return /* @__PURE__ */ jsx2(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx2("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: title }) });
        }
      }),
      columnHelper.accessor("sku", {
        header: t("fields.sku"),
        cell: ({ getValue }) => {
          const sku = getValue();
          if (!sku) {
            return /* @__PURE__ */ jsx2(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx2("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: sku }) });
        }
      }),
      columnHelper.accessor("reserved_quantity", {
        header: t("inventory.reserved"),
        cell: ({ getValue }) => {
          const quantity = getValue();
          if (Number.isNaN(quantity)) {
            return /* @__PURE__ */ jsx2(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx2("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: quantity }) });
        }
      }),
      columnHelper.accessor("stocked_quantity", {
        header: t("fields.inStock"),
        cell: ({ getValue }) => {
          const quantity = getValue();
          if (Number.isNaN(quantity)) {
            return /* @__PURE__ */ jsx2(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx2("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: quantity }) });
        }
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx2(InventoryActions, { item: row.original })
      })
    ],
    [t]
  );
};

// src/routes/inventory/inventory-list/components/use-inventory-table-filters.tsx
import { useTranslation as useTranslation3 } from "react-i18next";
var useInventoryTableFilters = () => {
  const { t } = useTranslation3();
  const { stock_locations } = useStockLocations({
    limit: 1e3
  });
  const filters = [];
  if (stock_locations) {
    const stockLocationFilter = {
      type: "select",
      options: stock_locations.map((s) => ({
        label: s.name,
        value: s.id
      })),
      key: "location_id",
      searchable: true,
      label: t("fields.location")
    };
    filters.push(stockLocationFilter);
  }
  filters.push({
    type: "string",
    key: "material",
    label: t("fields.material")
  });
  filters.push({
    type: "string",
    key: "sku",
    label: t("fields.sku")
  });
  filters.push({
    type: "string",
    key: "mid_code",
    label: t("fields.midCode")
  });
  filters.push({
    type: "number",
    key: "height",
    label: t("fields.height")
  });
  filters.push({
    type: "number",
    key: "width",
    label: t("fields.width")
  });
  filters.push({
    type: "number",
    key: "length",
    label: t("fields.length")
  });
  filters.push({
    type: "number",
    key: "weight",
    label: t("fields.weight")
  });
  filters.push({
    type: "select",
    options: [
      { label: t("fields.true"), value: "true" },
      { label: t("fields.false"), value: "false" }
    ],
    key: "requires_shipping",
    multiple: false,
    label: t("fields.requiresShipping")
  });
  return filters;
};

// src/routes/inventory/inventory-list/components/use-inventory-table-query.tsx
var useInventoryTableQuery = ({
  pageSize = 20,
  prefix
}) => {
  const raw = useQueryParams(
    [
      "id",
      "location_id",
      "q",
      "order",
      "requires_shipping",
      "offset",
      "sku",
      "origin_country",
      "material",
      "mid_code",
      "hs_code",
      "order",
      "weight",
      "width",
      "length",
      "height"
    ],
    prefix
  );
  const {
    offset,
    weight,
    width,
    length,
    height,
    requires_shipping,
    ...params
  } = raw;
  const searchParams = {
    limit: pageSize,
    offset: offset ? parseInt(offset) : void 0,
    weight: weight ? JSON.parse(weight) : void 0,
    width: width ? JSON.parse(width) : void 0,
    length: length ? JSON.parse(length) : void 0,
    height: height ? JSON.parse(height) : void 0,
    requires_shipping: requires_shipping ? JSON.parse(requires_shipping) : void 0,
    q: params.q,
    sku: params.sku,
    order: params.order,
    mid_code: params.mid_code,
    hs_code: params.hs_code,
    material: params.material,
    location_levels: {
      location_id: params.location_id || []
    },
    id: params.id ? params.id.split(",") : void 0
  };
  return {
    searchParams,
    raw
  };
};

// src/routes/inventory/inventory-list/components/inventory-list-table.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var InventoryListTable = () => {
  const { t } = useTranslation4();
  const { searchParams, raw } = useInventoryTableQuery({
    pageSize: PAGE_SIZE
  });
  const {
    inventory_items,
    count,
    isPending: isLoading,
    isError,
    error
  } = useInventoryItems({
    ...searchParams
  });
  const filters = useInventoryTableFilters();
  const columns = useInventoryTableColumns();
  const { table } = useDataTable({
    data: inventory_items ?? [],
    columns,
    count,
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx3(Heading, { children: t("inventory.domain") }),
        /* @__PURE__ */ jsx3(Text, { className: "text-ui-fg-subtle", size: "small", children: t("inventory.subtitle") })
      ] }),
      /* @__PURE__ */ jsx3(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx3(Link, { to: "create", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        count,
        isLoading,
        pagination: true,
        search: true,
        filters,
        queryObject: raw,
        orderBy: [
          { key: "title", label: t("fields.title") },
          { key: "sku", label: t("fields.sku") },
          { key: "stocked_quantity", label: t("fields.inStock") },
          { key: "reserved_quantity", label: t("inventory.reserved") }
        ],
        navigateTo: (row) => `${row.id}`
      }
    )
  ] });
};

// src/routes/inventory/inventory-list/inventory-list.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var InventoryItemListTable = () => {
  const { getWidgets } = useDashboardExtension();
  return /* @__PURE__ */ jsx4(
    SingleColumnPage,
    {
      widgets: {
        after: getWidgets("inventory_item.list.after"),
        before: getWidgets("inventory_item.list.before")
      },
      children: /* @__PURE__ */ jsx4(InventoryListTable, {})
    }
  );
};
export {
  InventoryItemListTable as Component
};