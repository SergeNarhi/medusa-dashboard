import {
  useCustomerTableColumns
} from "./chunk-DJPQV344.mjs";
import "./chunk-B4FQDBC3.mjs";
import "./chunk-ADOCJB6L.mjs";
import {
  useCustomerTableQuery
} from "./chunk-WRSGHGAT.mjs";
import {
  useCustomerTableFilters
} from "./chunk-JKG6LNAN.mjs";
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
import "./chunk-LPEUYMRK.mjs";
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
  useCustomers
} from "./chunk-6FTYBCYU.mjs";
import {
  useDashboardExtension
} from "./chunk-MYZNNCXD.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/customers/customer-list/components/customer-list-table/customer-list-table.tsx
import { PencilSquare } from "@medusajs/icons";
import { Button, Container, Heading } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var CustomerListTable = () => {
  const { t } = useTranslation();
  const { searchParams, raw } = useCustomerTableQuery({ pageSize: PAGE_SIZE });
  const { customers, count, isLoading, isError, error } = useCustomers(
    {
      ...searchParams
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useCustomerTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: customers ?? [],
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
      /* @__PURE__ */ jsx(Heading, { children: t("customers.domain") }),
      /* @__PURE__ */ jsx(Link, { to: "/customers/create", children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        count,
        filters,
        orderBy: [
          { key: "email", label: t("fields.email") },
          { key: "first_name", label: t("fields.firstName") },
          { key: "last_name", label: t("fields.lastName") },
          { key: "has_account", label: t("customers.hasAccount") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        isLoading,
        navigateTo: (row) => row.original.id,
        search: true,
        queryObject: raw,
        noRecords: {
          message: t("customers.list.noRecordsMessage")
        }
      }
    )
  ] });
};
var CustomerActions = ({
  customer
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(PencilSquare, {}),
              label: t("actions.edit"),
              to: `/customers/${customer.id}/edit`
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const columns = useCustomerTableColumns();
  return useMemo(
    () => [
      ...columns,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx(CustomerActions, { customer: row.original })
      })
    ],
    [columns]
  );
};

// src/routes/customers/customer-list/customer-list.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var CustomersList = () => {
  const { getWidgets } = useDashboardExtension();
  return /* @__PURE__ */ jsx2(
    SingleColumnPage,
    {
      widgets: {
        after: getWidgets("customer.list.after"),
        before: getWidgets("customer.list.before")
      },
      children: /* @__PURE__ */ jsx2(CustomerListTable, {})
    }
  );
};
export {
  CustomersList as Component
};
