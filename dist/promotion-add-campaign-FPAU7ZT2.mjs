import {
  AddCampaignPromotionForm
} from "./chunk-TJ3XW5AO.mjs";
import "./chunk-RX6DOG6Q.mjs";
import "./chunk-MWVM4TYO.mjs";
import {
  useCampaigns,
  usePromotion
} from "./chunk-22SBRBNJ.mjs";
import "./chunk-CSL6R7SM.mjs";
import "./chunk-JFVS6F3P.mjs";
import "./chunk-IUCDCPJU.mjs";
import "./chunk-6HTZNHPT.mjs";
import {
  RouteDrawer
} from "./chunk-KL22UNUW.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/promotions/promotion-add-campaign/promotion-add-campaign.tsx
import { Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var PromotionAddCampaign = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { promotion, isPending, isError, error } = usePromotion(id);
  let campaignQuery = {};
  if (promotion?.application_method?.currency_code) {
    campaignQuery = {
      budget: {
        currency_code: promotion?.application_method?.currency_code
      }
    };
  }
  const {
    campaigns,
    isPending: areCampaignsLoading,
    isError: isCampaignError,
    error: campaignError
  } = useCampaigns(campaignQuery);
  if (isError || isCampaignError) {
    throw error || campaignError;
  }
  return /* @__PURE__ */ jsxs(RouteDrawer, { children: [
    /* @__PURE__ */ jsx(RouteDrawer.Header, { children: /* @__PURE__ */ jsx(Heading, { children: t("promotions.campaign.edit.header") }) }),
    !isPending && !areCampaignsLoading && promotion && campaigns && /* @__PURE__ */ jsx(AddCampaignPromotionForm, { promotion, campaigns })
  ] });
};
export {
  PromotionAddCampaign as Component
};
