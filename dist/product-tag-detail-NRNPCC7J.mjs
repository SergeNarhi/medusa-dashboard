import {
  useDeleteProductTagAction
} from "./chunk-XDYKDVLS.mjs";
import "./chunk-D2UCOBBT.mjs";
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
import {
  useProductTableColumns
} from "./chunk-RJSD5KRU.mjs";
import "./chunk-RERSP5B2.mjs";
import "./chunk-TOMHEGT5.mjs";
import "./chunk-Z6RNBRJT.mjs";
import "./chunk-GA34GXNI.mjs";
import "./chunk-MSDRGCRR.mjs";
import "./chunk-MWVM4TYO.mjs";
import "./chunk-ADOCJB6L.mjs";
import "./chunk-5R4UGQUP.mjs";
import "./chunk-I5HYE2RW.mjs";
import "./chunk-RIV7FKGN.mjs";
import "./chunk-TDK3JDOB.mjs";
import "./chunk-IRV425DP.mjs";
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
import {
  useProductTableQuery
} from "./chunk-4M3ZY7KA.mjs";
import {
  useProductTableFilters
} from "./chunk-24OILC3G.mjs";
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
import {
  SingleColumnPageSkeleton
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
import {
  productTagsQueryKeys,
  useProductTag
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

// src/routes/product-tags/product-tag-detail/breadcrumb.tsx
import { jsx } from "react/jsx-runtime";
var ProductTagDetailBreadcrumb = (props) => {
  const { id } = props.params || {};
  const { product_tag } = useProductTag(id, void 0, {
    initialData: props.data,
    enabled: Boolean(id)
  });
  if (!product_tag) {
    return null;
  }
  return /* @__PURE__ */ jsx("span", { children: product_tag.value });
};

// src/routes/product-tags/product-tag-detail/loader.ts
var productTagDetailQuery = (id) => ({
  queryKey: productTagsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.productTag.retrieve(id)
});
var productTagLoader = async ({ params }) => {
  const id = params.id;
  const query = productTagDetailQuery(id);
  return queryClient.ensureQueryData(query);
};

// src/routes/product-tags/product-tag-detail/product-tag-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/product-tags/product-tag-detail/components/product-tag-general-section/product-tag-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var ProductTagGeneralSection = ({
  productTag
}) => {
  const { t } = useTranslation();
  const handleDelete = useDeleteProductTagAction({ productTag });
  return /* @__PURE__ */ jsxs(Container, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1.5", children: [
      /* @__PURE__ */ jsx2("span", { className: "text-ui-fg-muted h1-core", children: "#" }),
      /* @__PURE__ */ jsx2(Heading, { children: productTag.value })
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
          },
          {
            actions: [
              {
                icon: /* @__PURE__ */ jsx2(Trash, {}),
                label: t("actions.delete"),
                onClick: handleDelete
              }
            ]
          }
        ]
      }
    )
  ] });
};

// src/routes/product-tags/product-tag-detail/components/product-tag-product-section/product-tag-product-section.tsx
import { Container as Container2, Heading as Heading2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var PREFIX = "pt";
var ProductTagProductSection = ({
  productTag
}) => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useProductTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { products, count, isPending, isError, error } = useProducts({
    ...searchParams,
    tag_id: productTag.id
  });
  const filters = useProductTableFilters(["product_tags"]);
  const columns = useProductTableColumns();
  const { table } = useDataTable({
    data: products,
    count,
    columns,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y px-0 py-0", children: [
    /* @__PURE__ */ jsx3("div", { className: "px-6 py-4", children: /* @__PURE__ */ jsx3(Heading2, { level: "h2", children: t("products.domain") }) }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        filters,
        queryObject: raw,
        isLoading: isPending,
        columns,
        pageSize: PAGE_SIZE,
        count,
        navigateTo: (row) => `/products/${row.original.id}`,
        search: true,
        pagination: true,
        orderBy: [
          { key: "title", label: t("fields.title") },
          { key: "status", label: t("fields.status") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ]
      }
    )
  ] });
};

// src/routes/product-tags/product-tag-detail/product-tag-detail.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var ProductTagDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { getWidgets } = useDashboardExtension();
  const { product_tag, isPending, isError, error } = useProductTag(
    id,
    void 0,
    {
      initialData
    }
  );
  if (isPending || !product_tag) {
    return /* @__PURE__ */ jsx4(SingleColumnPageSkeleton, { showJSON: true, sections: 2 });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(
    SingleColumnPage,
    {
      widgets: {
        after: getWidgets("product_tag.details.after"),
        before: getWidgets("product_tag.details.before")
      },
      showJSON: true,
      data: product_tag,
      children: [
        /* @__PURE__ */ jsx4(ProductTagGeneralSection, { productTag: product_tag }),
        /* @__PURE__ */ jsx4(ProductTagProductSection, { productTag: product_tag })
      ]
    }
  );
};
export {
  ProductTagDetailBreadcrumb as Breadcrumb,
  ProductTagDetail as Component,
  productTagLoader as loader
};
