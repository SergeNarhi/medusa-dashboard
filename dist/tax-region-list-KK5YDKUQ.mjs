import {
  TaxRegionTable,
  useTaxRegionTable
} from "./chunk-LSZCZFOD.mjs";
import "./chunk-GRPXWOB3.mjs";
import "./chunk-THZJC662.mjs";
import "./chunk-EQTBJSBZ.mjs";
import {
  useTaxRegionTableQuery
} from "./chunk-RIV7FKGN.mjs";
import "./chunk-VDBOSWVE.mjs";
import {
  SingleColumnPage
} from "./chunk-2RQLKDBF.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-LPEUYMRK.mjs";
import "./chunk-RBEBIPW6.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-6YTJEFSJ.mjs";
import {
  useTaxRegions
} from "./chunk-ZT6F5MCR.mjs";
import {
  useDashboardExtension
} from "./chunk-MYZNNCXD.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/tax-regions/tax-region-list/components/tax-region-list-view/tax-region-list-view.tsx
import { Container, Heading, Text } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var TaxRegionListView = () => {
  const { t } = useTranslation();
  const { searchParams, raw } = useTaxRegionTableQuery({
    pageSize: PAGE_SIZE
  });
  const { tax_regions, count, isPending, isError, error } = useTaxRegions(
    {
      ...searchParams,
      order: "country_code",
      parent_id: "null"
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const { table } = useTaxRegionTable({
    count,
    data: tax_regions,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(Container, { className: "divide-y p-0", children: /* @__PURE__ */ jsxs(
    TaxRegionTable,
    {
      action: {
        to: "create",
        label: t("actions.create")
      },
      isPending,
      queryObject: raw,
      table,
      count,
      children: [
        /* @__PURE__ */ jsx(Heading, { children: t("taxes.domain") }),
        /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle text-pretty", children: t("taxRegions.list.hint") })
      ]
    }
  ) });
};

// src/routes/tax-regions/tax-region-list/tax-region-list.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var TaxRegionsList = () => {
  const { getWidgets } = useDashboardExtension();
  return /* @__PURE__ */ jsx2(
    SingleColumnPage,
    {
      widgets: {
        before: getWidgets("tax.list.before"),
        after: getWidgets("tax.list.after")
      },
      hasOutlet: true,
      children: /* @__PURE__ */ jsx2(TaxRegionListView, {})
    }
  );
};
export {
  TaxRegionsList as Component
};