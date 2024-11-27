import {
  useDeleteProductTypeAction
} from "./chunk-QVW35SMO.mjs";
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
} from "./chunk-546ODTW3.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  SingleColumnPageSkeleton
} from "./chunk-LPEUYMRK.mjs";
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
import "./chunk-C2BURFUV.mjs";
import "./chunk-4YM46CJI.mjs";
import "./chunk-MVS2MLD5.mjs";
import "./chunk-6YTJEFSJ.mjs";
import "./chunk-ZT6F5MCR.mjs";
import "./chunk-JODJECSK.mjs";
import {
  productTypesQueryKeys,
  useProductType
} from "./chunk-F2FX7KCH.mjs";
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

// src/routes/product-types/product-type-detail/breadcrumb.tsx
import { jsx } from "react/jsx-runtime";
var ProductTypeDetailBreadcrumb = (props) => {
  const { id } = props.params || {};
  const { product_type } = useProductType(id, void 0, {
    initialData: props.data,
    enabled: Boolean(id)
  });
  if (!product_type) {
    return null;
  }
  return /* @__PURE__ */ jsx("span", { children: product_type.value });
};

// src/routes/product-types/product-type-detail/loader.ts
var productTypeDetailQuery = (id) => ({
  queryKey: productTypesQueryKeys.detail(id),
  queryFn: async () => sdk.admin.productType.retrieve(id)
});
var productTypeLoader = async ({ params }) => {
  const id = params.id;
  const query = productTypeDetailQuery(id);
  return queryClient.ensureQueryData(query);
};

// src/routes/product-types/product-type-detail/product-type-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/product-types/product-type-detail/components/product-type-general-section/product-type-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var ProductTypeGeneralSection = ({
  productType
}) => {
  const { t } = useTranslation();
  const handleDelete = useDeleteProductTypeAction(productType.id);
  return /* @__PURE__ */ jsxs(Container, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx2(Heading, { children: productType.value }),
    /* @__PURE__ */ jsx2(
      ActionMenu,
      {
        groups: [
          {
            actions: [
              {
                label: t("actions.edit"),
                icon: /* @__PURE__ */ jsx2(PencilSquare, {}),
                to: "edit"
              }
            ]
          },
          {
            actions: [
              {
                label: t("actions.delete"),
                icon: /* @__PURE__ */ jsx2(Trash, {}),
                onClick: handleDelete
              }
            ]
          }
        ]
      }
    )
  ] });
};

// src/routes/product-types/product-type-detail/components/product-type-product-section/product-type-product-section.tsx
import { Container as Container2, Heading as Heading2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var ProductTypeProductSection = ({
  productType
}) => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useProductTableQuery({
    pageSize: PAGE_SIZE
  });
  const { products, count, isPending, isError, error } = useProducts({
    ...searchParams,
    type_id: [productType.id]
  });
  const filters = useProductTableFilters(["product_types"]);
  const columns = useProductTableColumns();
  const { table } = useDataTable({
    columns,
    data: products,
    count: products?.length || 0,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsx3("div", { className: "px-6 py-4", children: /* @__PURE__ */ jsx3(Heading2, { level: "h2", children: t("products.domain") }) }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        filters,
        isLoading: isPending,
        columns,
        count,
        pageSize: PAGE_SIZE,
        navigateTo: ({ original }) => `/products/${original.id}`,
        orderBy: [
          { key: "title", label: t("fields.title") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        queryObject: raw,
        search: true,
        pagination: true
      }
    )
  ] });
};

// src/routes/product-types/product-type-detail/product-type-detail.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var ProductTypeDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { product_type, isPending, isError, error } = useProductType(
    id,
    void 0,
    {
      initialData
    }
  );
  const { getWidgets } = useDashboardExtension();
  if (isPending || !product_type) {
    return /* @__PURE__ */ jsx4(SingleColumnPageSkeleton, { sections: 2, showJSON: true, showMetadata: true });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(
    SingleColumnPage,
    {
      widgets: {
        after: getWidgets("product_type.details.after"),
        before: getWidgets("product_type.details.before")
      },
      showJSON: true,
      showMetadata: true,
      data: product_type,
      children: [
        /* @__PURE__ */ jsx4(ProductTypeGeneralSection, { productType: product_type }),
        /* @__PURE__ */ jsx4(ProductTypeProductSection, { productType: product_type })
      ]
    }
  );
};
export {
  ProductTypeDetailBreadcrumb as Breadcrumb,
  ProductTypeDetail as Component,
  productTypeLoader as loader
};
