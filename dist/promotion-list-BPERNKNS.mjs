import {
  usePromotionTableColumns,
  usePromotionTableQuery
} from "./chunk-6KEI7WC2.mjs";
import "./chunk-KDXAFTVE.mjs";
import "./chunk-MSDRGCRR.mjs";
import "./chunk-ADOCJB6L.mjs";
import {
  usePromotionTableFilters
} from "./chunk-LSEYENCI.mjs";
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
  promotionsQueryKeys,
  useDeletePromotion,
  usePromotions
} from "./chunk-22SBRBNJ.mjs";
import {
  useDashboardExtension
} from "./chunk-MYZNNCXD.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import {
  queryClient
} from "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import {
  sdk
} from "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/promotions/promotion-list/loader.ts
var params = {
  limit: 20,
  offset: 0
};
var promotionsListQuery = () => ({
  queryKey: promotionsQueryKeys.list(params),
  queryFn: async () => sdk.admin.promotion.list(params)
});
var promotionsLoader = (client) => {
  return async () => {
    const query = promotionsListQuery();
    return queryClient.getQueryData(
      query.queryKey
    ) ?? await client.fetchQuery(query);
  };
};

// src/routes/promotions/promotion-list/components/promotion-list-table/promotion-list-table.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Button, Container, Heading, usePrompt } from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { keepPreviousData } from "@tanstack/react-query";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var PromotionListTable = () => {
  const { t } = useTranslation();
  const initialData = useLoaderData();
  const { searchParams, raw } = usePromotionTableQuery({ pageSize: PAGE_SIZE });
  const { promotions, count, isLoading, isError, error } = usePromotions(
    { ...searchParams },
    {
      initialData,
      placeholderData: keepPreviousData
    }
  );
  const filters = usePromotionTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: promotions ?? [],
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
      /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("promotions.domain") }),
      /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "create", children: t("actions.create") }) })
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
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
};
var PromotionActions = ({ promotion }) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const { mutateAsync } = useDeletePromotion(promotion.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("promotions.deleteWarning", { code: promotion.code }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel"),
      verificationInstruction: t("general.typeToConfirm"),
      verificationText: promotion.code
    });
    if (!res) {
      return;
    }
    try {
      await mutateAsync(void 0, {
        onSuccess: () => {
          navigate("/promotions", { replace: true });
        }
      });
    } catch {
      throw new Error(
        `Promotion with code ${promotion.code} could not be deleted`
      );
    }
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
              to: `/promotions/${promotion.id}/edit`
            },
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
  const base = usePromotionTableColumns();
  return useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(PromotionActions, { promotion: row.original });
        }
      })
    ],
    [base]
  );
};

// src/routes/promotions/promotion-list/promotions-list.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var PromotionsList = () => {
  const { getWidgets } = useDashboardExtension();
  return /* @__PURE__ */ jsx2(
    SingleColumnPage,
    {
      widgets: {
        before: getWidgets("promotion.list.before"),
        after: getWidgets("promotion.list.after")
      },
      children: /* @__PURE__ */ jsx2(PromotionListTable, {})
    }
  );
};
export {
  PromotionsList as Component,
  promotionsLoader
};