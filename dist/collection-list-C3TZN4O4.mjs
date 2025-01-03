import {
  useCollectionTableColumns
} from "./chunk-XWO5BP42.mjs";
import "./chunk-MSDRGCRR.mjs";
import {
  useCollectionTableQuery
} from "./chunk-5R4UGQUP.mjs";
import "./chunk-I5HYE2RW.mjs";
import "./chunk-RIV7FKGN.mjs";
import "./chunk-TDK3JDOB.mjs";
import {
  useCollectionTableFilters
} from "./chunk-IRV425DP.mjs";
import "./chunk-CBSCX7RE.mjs";
import "./chunk-FHSC5X62.mjs";
import "./chunk-XR4GEMGR.mjs";
import "./chunk-LT4MVCA7.mjs";
import "./chunk-WRSGHGAT.mjs";
import "./chunk-JKG6LNAN.mjs";
import "./chunk-W7625H47.mjs";
import "./chunk-MOSRJHJ3.mjs";
import "./chunk-DLZWPHHO.mjs";
import "./chunk-LSEYENCI.mjs";
import "./chunk-OMC5JCQH.mjs";
import "./chunk-XMAWMECC.mjs";
import "./chunk-PKBZNOGD.mjs";
import "./chunk-4M3ZY7KA.mjs";
import "./chunk-24OILC3G.mjs";
import "./chunk-GSM3OOMB.mjs";
import "./chunk-VELNOPU6.mjs";
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
import "./chunk-6IW74BRC.mjs";
import "./chunk-6FTYBCYU.mjs";
import {
  useCollections,
  useDeleteCollection
} from "./chunk-C7J3KXU4.mjs";
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
import {
  useDashboardExtension
} from "./chunk-MYZNNCXD.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-GVVSRVWO.mjs";
import "./chunk-VZXSXNQY.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/collections/collection-list/components/collection-list-table/collection-list-table.tsx
import { Button, Container, Heading, Text } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { Link } from "react-router-dom";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";

// src/routes/collections/collection-list/components/collection-list-table/collection-row-actions.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var CollectionRowActions = ({
  collection
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteCollection(collection.id);
  const handleDeleteCollection = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("collections.deleteWarning", {
        title: collection.title
      }),
      verificationText: collection.title,
      verificationInstruction: t("general.typeToConfirm"),
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
              label: t("actions.edit"),
              to: `/collections/${collection.id}/edit`,
              icon: /* @__PURE__ */ jsx(PencilSquare, {})
            }
          ]
        },
        {
          actions: [
            {
              label: t("actions.delete"),
              onClick: handleDeleteCollection,
              icon: /* @__PURE__ */ jsx(Trash, {}),
              disabled: !collection.id
            }
          ]
        }
      ]
    }
  );
};

// src/routes/collections/collection-list/components/collection-list-table/collection-list-table.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var CollectionListTable = () => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useCollectionTableQuery({ pageSize: PAGE_SIZE });
  const { collections, count, isError, error, isLoading } = useCollections(
    {
      ...searchParams,
      fields: "+products.id"
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useCollectionTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: collections ?? [],
    columns,
    count,
    enablePagination: true,
    getRowId: (row, index) => row.id ?? `${index}`,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx2(Heading, { children: t("collections.domain") }),
        /* @__PURE__ */ jsx2(Text, { className: "text-ui-fg-subtle", size: "small", children: t("collections.subtitle") })
      ] }),
      /* @__PURE__ */ jsx2(Link, { to: "/collections/create", children: /* @__PURE__ */ jsx2(Button, { size: "small", variant: "secondary", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx2(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        count,
        filters,
        orderBy: [
          { key: "title", label: t("fields.title") },
          { key: "handle", label: t("fields.handle") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        search: true,
        navigateTo: (row) => `/collections/${row.original.id}`,
        queryObject: raw,
        isLoading
      }
    )
  ] });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useCollectionTableColumns();
  return useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx2(CollectionRowActions, { collection: row.original })
      })
    ],
    [base]
  );
};

// src/routes/collections/collection-list/collection-list.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var CollectionList = () => {
  const { getWidgets } = useDashboardExtension();
  return /* @__PURE__ */ jsx3(
    SingleColumnPage,
    {
      widgets: {
        after: getWidgets("product_collection.list.after"),
        before: getWidgets("product_collection.list.before")
      },
      children: /* @__PURE__ */ jsx3(CollectionListTable, {})
    }
  );
};
export {
  CollectionList as Component
};
