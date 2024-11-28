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
import "./chunk-OMC5JCQH.mjs";
import "./chunk-LSEYENCI.mjs";
import "./chunk-XMAWMECC.mjs";
import "./chunk-PKBZNOGD.mjs";
import {
  useProductTableQuery
} from "./chunk-4M3ZY7KA.mjs";
import {
  useProductTableFilters
} from "./chunk-6BYYQAG5.mjs";
import "./chunk-GSM3OOMB.mjs";
import "./chunk-VELNOPU6.mjs";
import "./chunk-C76H5USB.mjs";
import {
  DataTableFilter
} from "./chunk-PJI5SDKJ.mjs";
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
  RouteDrawer,
  useRouteModal
} from "./chunk-KL22UNUW.mjs";
import {
  useExportProducts
} from "./chunk-GVVSRVWO.mjs";
import "./chunk-VZXSXNQY.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/products/product-export/product-export.tsx
import { Button, Heading as Heading2, toast } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";

// src/routes/products/product-export/components/export-filters.tsx
import { Heading, Text } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var ExportFilters = () => {
  const { t } = useTranslation();
  const filters = useProductTableFilters();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("products.export.filters.title") }),
    /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle", children: t("products.export.filters.description") }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(DataTableFilter, { filters, readonly: true }) })
  ] });
};

// src/routes/products/product-export/product-export.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ProductExport = () => {
  const { t } = useTranslation2();
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsxs2(RouteDrawer.Header, { children: [
      /* @__PURE__ */ jsx2(RouteDrawer.Title, { asChild: true, children: /* @__PURE__ */ jsx2(Heading2, { children: t("products.export.header") }) }),
      /* @__PURE__ */ jsx2(RouteDrawer.Description, { className: "sr-only", children: t("products.export.description") })
    ] }),
    /* @__PURE__ */ jsx2(ProductExportContent, {})
  ] });
};
var ProductExportContent = () => {
  const { t } = useTranslation2();
  const { searchParams } = useProductTableQuery({});
  const { mutateAsync } = useExportProducts(searchParams);
  const { handleSuccess } = useRouteModal();
  const handleExportRequest = async () => {
    await mutateAsync(
      {},
      {
        onSuccess: () => {
          toast.info(t("products.export.success.title"), {
            description: t("products.export.success.description")
          });
          handleSuccess();
        },
        onError: (err) => {
          toast.error(err.message);
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2(RouteDrawer.Body, { children: /* @__PURE__ */ jsx2(ExportFilters, {}) }),
    /* @__PURE__ */ jsx2(RouteDrawer.Footer, { children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-2", children: [
      /* @__PURE__ */ jsx2(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx2(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx2(Button, { onClick: handleExportRequest, size: "small", children: t("actions.export") })
    ] }) })
  ] });
};
export {
  ProductExport as Component
};
