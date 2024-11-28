import {
  useDeleteProductTagAction
} from "./chunk-XDYKDVLS.mjs";
import {
  useProductTagTableColumns
} from "./chunk-D2UCOBBT.mjs";
import "./chunk-YYGNAECV.mjs";
import "./chunk-FYN6YJ5C.mjs";
import "./chunk-DJPQV344.mjs";
import "./chunk-I3VB6NM2.mjs";
import "./chunk-ZJRFL6ZN.mjs";
import "./chunk-XWO5BP42.mjs";
import "./chunk-AYHIOYW5.mjs";
import "./chunk-NLR7MGM2.mjs";
import "./chunk-B4FQDBC3.mjs";
import "./chunk-LHJ6JQGA.mjs";
import "./chunk-IR5DHEKS.mjs";
import "./chunk-XFSJ7YIN.mjs";
import "./chunk-FSMQADBD.mjs";
import "./chunk-RJSD5KRU.mjs";
import "./chunk-RERSP5B2.mjs";
import "./chunk-TOMHEGT5.mjs";
import "./chunk-Z6RNBRJT.mjs";
import "./chunk-GA34GXNI.mjs";
import "./chunk-MSDRGCRR.mjs";
import "./chunk-MWVM4TYO.mjs";
import "./chunk-ADOCJB6L.mjs";
import {
  useProductTagTableQuery
} from "./chunk-5R4UGQUP.mjs";
import "./chunk-I5HYE2RW.mjs";
import "./chunk-RIV7FKGN.mjs";
import "./chunk-TDK3JDOB.mjs";
import {
  useProductTagTableFilters
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
import "./chunk-VDBOSWVE.mjs";
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
  productTagsQueryKeys,
  useProductTags
} from "./chunk-UMNS46LA.mjs";
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
import {
  useDashboardExtension
} from "./chunk-MYZNNCXD.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-GVVSRVWO.mjs";
import "./chunk-VZXSXNQY.mjs";
import {
  queryClient
} from "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import {
  sdk
} from "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/product-tags/product-tag-list/loader.ts
var productTagListQuery = (query) => ({
  queryKey: productTagsQueryKeys.list(query),
  queryFn: async () => sdk.admin.productTag.list(query)
});
var productTagListLoader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const queryObject = {};
  searchParams.forEach((value, key) => {
    try {
      queryObject[key] = JSON.parse(value);
    } catch (_e) {
      queryObject[key] = value;
    }
  });
  const query = productTagListQuery(
    queryObject
  );
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

// src/routes/product-tags/product-tag-list/components/product-tag-list-table/product-tag-list-table.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Button, Container, Heading } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLoaderData } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var ProductTagListTable = () => {
  const { t } = useTranslation();
  const { searchParams, raw } = useProductTagTableQuery({
    pageSize: PAGE_SIZE
  });
  const initialData = useLoaderData();
  const { product_tags, count, isPending, isError, error } = useProductTags(
    searchParams,
    {
      initialData,
      placeholderData: keepPreviousData
    }
  );
  const columns = useColumns();
  const filters = useProductTagTableFilters();
  const { table } = useDataTable({
    data: product_tags,
    count,
    columns,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y px-0 py-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: t("productTags.domain") }),
      /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "create", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        filters,
        queryObject: raw,
        isLoading: isPending,
        columns,
        pageSize: PAGE_SIZE,
        count,
        navigateTo: (row) => row.original.id,
        search: true,
        pagination: true,
        orderBy: [
          { key: "value", label: t("fields.value") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ]
      }
    )
  ] });
};
var ProductTagRowActions = ({
  productTag
}) => {
  const { t } = useTranslation();
  const handleDelete = useDeleteProductTagAction({ productTag });
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(PencilSquare, {}),
              label: t("actions.edit"),
              to: `${productTag.id}/edit`
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
  const base = useProductTagTableColumns();
  return useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx(ProductTagRowActions, { productTag: row.original })
      })
    ],
    [base]
  );
};

// src/routes/product-tags/product-tag-list/product-tag-list.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ProductTagList = () => {
  const { getWidgets } = useDashboardExtension();
  return /* @__PURE__ */ jsx2(
    SingleColumnPage,
    {
      showMetadata: false,
      showJSON: false,
      hasOutlet: true,
      widgets: {
        after: getWidgets("product_tag.list.after"),
        before: getWidgets("product_tag.list.before")
      },
      children: /* @__PURE__ */ jsx2(ProductTagListTable, {})
    }
  );
};
export {
  ProductTagList as Component,
  productTagListLoader as loader
};
