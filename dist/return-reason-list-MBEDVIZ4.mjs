import {
  useReturnReasonTableColumns
} from "./chunk-U36KR32O.mjs";
import "./chunk-UUDR5EKI.mjs";
import "./chunk-FYN6YJ5C.mjs";
import "./chunk-DJPQV344.mjs";
import "./chunk-I3VB6NM2.mjs";
import "./chunk-QIWEFQ5Y.mjs";
import "./chunk-Y35YD3YU.mjs";
import "./chunk-LDVL34F3.mjs";
import "./chunk-NLR7MGM2.mjs";
import "./chunk-B4FQDBC3.mjs";
import "./chunk-LHJ6JQGA.mjs";
import "./chunk-IR5DHEKS.mjs";
import "./chunk-XFSJ7YIN.mjs";
import "./chunk-FSMQADBD.mjs";
import {
  returnReasonsQueryKeys,
  useDeleteReturnReason,
  useReturnReasons
} from "./chunk-JGYJERUT.mjs";
import "./chunk-RJSD5KRU.mjs";
import "./chunk-RERSP5B2.mjs";
import "./chunk-TOMHEGT5.mjs";
import "./chunk-6GZ2CHKW.mjs";
import "./chunk-GA34GXNI.mjs";
import "./chunk-OI7BBNYW.mjs";
import "./chunk-MWVM4TYO.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-ADOCJB6L.mjs";
import {
  useReturnReasonTableQuery
} from "./chunk-5R4UGQUP.mjs";
import "./chunk-I5HYE2RW.mjs";
import "./chunk-RIV7FKGN.mjs";
import "./chunk-TDK3JDOB.mjs";
import "./chunk-FHSC5X62.mjs";
import "./chunk-XR4GEMGR.mjs";
import "./chunk-WRSGHGAT.mjs";
import "./chunk-MOSRJHJ3.mjs";
import "./chunk-OMC5JCQH.mjs";
import "./chunk-XMAWMECC.mjs";
import "./chunk-4M3ZY7KA.mjs";
import "./chunk-GSM3OOMB.mjs";
import "./chunk-VDBOSWVE.mjs";
import {
  SingleColumnPage
} from "./chunk-2RQLKDBF.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-546ODTW3.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-LT6HYBIG.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-MG2GSM3O.mjs";
import "./chunk-KHOKHZC6.mjs";
import "./chunk-6OFYTEJZ.mjs";
import "./chunk-LJQNRGKD.mjs";
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

// src/routes/return-reasons/return-reason-list/loader.ts
var returnReasonListQuery = (query) => ({
  queryKey: returnReasonsQueryKeys.list(query),
  queryFn: async () => sdk.admin.returnReason.list(query)
});
var returnReasonListLoader = async () => {
  const query = returnReasonListQuery();
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

// src/routes/return-reasons/return-reason-list/components/return-reason-list-table/return-reason-list-table.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Button, Container, Heading, Text } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { Link } from "react-router-dom";

// src/routes/return-reasons/common/hooks/use-delete-return-reason-action.tsx
import { toast, usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
var useDeleteReturnReasonAction = ({
  id,
  label
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteReturnReason(id);
  const handleDelete = async () => {
    const result = await prompt({
      title: t("general.areYouSure"),
      description: t("returnReasons.delete.confirmation", {
        label
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!result) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(t("returnReasons.delete.successToast", { label }));
      },
      onError: (e) => {
        toast.error(e.message);
      }
    });
  };
  return handleDelete;
};

// src/routes/return-reasons/return-reason-list/components/return-reason-list-table/return-reason-list-table.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var ReturnReasonListTable = () => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useReturnReasonTableQuery({
    pageSize: PAGE_SIZE
  });
  const { return_reasons, count, isPending, isError, error } = useReturnReasons(
    searchParams,
    {
      placeholderData: keepPreviousData
    }
  );
  const columns = useColumns();
  const { table } = useDataTable({
    data: return_reasons,
    columns,
    count,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y px-0 py-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Heading, { children: t("returnReasons.domain") }),
        /* @__PURE__ */ jsx(Text, { className: "text-ui-fg-subtle", size: "small", children: t("returnReasons.subtitle") })
      ] }),
      /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "create", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        queryObject: raw,
        count,
        isLoading: isPending,
        columns,
        pageSize: PAGE_SIZE,
        noHeader: true,
        pagination: true,
        search: true
      }
    )
  ] });
};
var ReturnReasonRowActions = ({
  returnReason
}) => {
  const { t } = useTranslation2();
  const handleDelete = useDeleteReturnReasonAction(returnReason);
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(PencilSquare, {}),
              label: t("actions.edit"),
              to: `${returnReason.id}/edit`
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
  const base = useReturnReasonTableColumns();
  return useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx(ReturnReasonRowActions, { returnReason: row.original })
      })
    ],
    [base]
  );
};

// src/routes/return-reasons/return-reason-list/return-reason-list.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ReturnReasonList = () => {
  const { getWidgets } = useDashboardExtension();
  return /* @__PURE__ */ jsx2(
    SingleColumnPage,
    {
      showMetadata: false,
      showJSON: false,
      hasOutlet: true,
      widgets: {
        after: getWidgets("return_reason.list.after"),
        before: getWidgets("return_reason.list.before")
      },
      children: /* @__PURE__ */ jsx2(ReturnReasonListTable, {})
    }
  );
};
export {
  ReturnReasonList as Component,
  returnReasonListLoader as loader
};