import {
  formatPercentage
} from "./chunk-3WXBLS2P.mjs";
import {
  BadgeListSummary
} from "./chunk-BKJC5BGQ.mjs";
import {
  DateRangeDisplay
} from "./chunk-VKWARFIN.mjs";
import {
  getPromotionStatus
} from "./chunk-KDXAFTVE.mjs";
import {
  formatCurrency
} from "./chunk-OV5NMSY6.mjs";
import {
  TwoColumnPage
} from "./chunk-2RQLKDBF.mjs";
import {
  NoRecords
} from "./chunk-WX2SMNCD.mjs";
import {
  TwoColumnPageSkeleton
} from "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-RBEBIPW6.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-R3DNF26F.mjs";
import "./chunk-4XWPEQS4.mjs";
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
import "./chunk-C7J3KXU4.mjs";
import {
  promotionsQueryKeys,
  useDeletePromotion,
  usePromotion,
  usePromotionRules
} from "./chunk-22SBRBNJ.mjs";
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

// src/routes/promotions/promotion-detail/breadcrumb.tsx
import { jsx } from "react/jsx-runtime";
var PromotionDetailBreadcrumb = (props) => {
  const { id } = props.params || {};
  const { promotion } = usePromotion(id, {
    initialData: props.data,
    enabled: Boolean(id)
  });
  if (!promotion) {
    return null;
  }
  return /* @__PURE__ */ jsx("span", { children: promotion.code });
};

// src/routes/promotions/promotion-detail/loader.ts
var promotionDetailQuery = (id) => ({
  queryKey: promotionsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.promotion.retrieve(id)
});
var promotionLoader = async ({ params }) => {
  const id = params.id;
  const query = promotionDetailQuery(id);
  return queryClient.ensureQueryData(query);
};

// src/routes/promotions/promotion-detail/promotion-detail.tsx
import { useLoaderData, useParams as useParams2 } from "react-router-dom";

// src/routes/promotions/promotion-detail/components/campaign-section/campaign-section.tsx
import { ArrowUpRightOnBox, PencilSquare } from "@medusajs/icons";
import { Container, Heading, Text } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var CampaignDetailSection = ({
  campaign
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-muted flex items-center gap-x-1.5", children: [
      /* @__PURE__ */ jsx2(Text, { size: "small", weight: "plus", className: "text-ui-fg-base", children: campaign.name }),
      /* @__PURE__ */ jsx2(Text, { size: "small", weight: "plus", children: "\xB7" }),
      /* @__PURE__ */ jsx2(Text, { size: "small", weight: "plus", children: campaign.campaign_identifier })
    ] }),
    /* @__PURE__ */ jsx2(
      DateRangeDisplay,
      {
        startsAt: campaign.starts_at,
        endsAt: campaign.ends_at,
        showTime: true
      }
    )
  ] });
};
var CampaignSection = ({
  campaign
}) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const actions = [
    {
      label: t("actions.edit"),
      to: "add-to-campaign",
      icon: /* @__PURE__ */ jsx2(PencilSquare, {})
    }
  ];
  if (campaign) {
    actions.unshift({
      label: t("promotions.campaign.actions.goToCampaign"),
      to: `/campaigns/${campaign.id}`,
      icon: /* @__PURE__ */ jsx2(ArrowUpRightOnBox, {})
    });
  }
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx2(Heading, { level: "h2", children: t("promotions.fields.campaign") }),
      /* @__PURE__ */ jsx2(
        ActionMenu,
        {
          groups: [
            {
              actions
            }
          ]
        }
      )
    ] }),
    campaign ? /* @__PURE__ */ jsx2(CampaignDetailSection, { campaign }) : /* @__PURE__ */ jsx2(
      NoRecords,
      {
        className: "h-[180px] pt-4 text-center",
        title: "Not part of a campaign",
        message: "Add this promotion to an existing campaign",
        action: {
          to: `/promotions/${id}/add-to-campaign`,
          label: "Add to Campaign"
        },
        buttonVariant: "transparentIconLeft"
      }
    )
  ] });
};

// src/routes/promotions/promotion-detail/components/promotion-conditions-section/promotion-conditions-section.tsx
import { PencilSquare as PencilSquare2 } from "@medusajs/icons";
import { Badge, Container as Container2, Heading as Heading2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function RuleBlock({ rule }) {
  return /* @__PURE__ */ jsx3("div", { className: "bg-ui-bg-subtle shadow-borders-base align-center flex justify-around rounded-md p-2", children: /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle txt-compact-xsmall flex items-center whitespace-nowrap", children: [
    /* @__PURE__ */ jsx3(
      Badge,
      {
        size: "2xsmall",
        className: "txt-compact-xsmall-plus tag-neutral-text mx-1 inline-block truncate",
        children: rule.attribute_label
      },
      "rule-attribute"
    ),
    /* @__PURE__ */ jsx3("span", { className: "txt-compact-2xsmall mx-1 inline-block", children: rule.operator_label }),
    /* @__PURE__ */ jsx3(
      BadgeListSummary,
      {
        inline: true,
        className: "!txt-compact-small-plus",
        list: rule.field_type === "number" ? [rule.values] : rule.values?.map((v) => v.label)
      }
    )
  ] }) });
}
var PromotionConditionsSection = ({
  rules,
  ruleType
}) => {
  const { t } = useTranslation2();
  return /* @__PURE__ */ jsxs2(Container2, { className: "p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx3("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx3(Heading2, { children: t(`promotions.fields.conditions.${ruleType}.title`) }) }),
      /* @__PURE__ */ jsx3(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx3(PencilSquare2, {}),
                  label: t("actions.edit"),
                  to: `${ruleType}/edit`
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle flex flex-col gap-2 px-6 pb-4 pt-2", children: [
      !rules.length && /* @__PURE__ */ jsx3(
        NoRecords,
        {
          className: "h-[180px]",
          title: t("general.noRecordsTitle"),
          message: t("promotions.conditions.list.noRecordsMessage"),
          action: {
            to: `${ruleType}/edit`,
            label: t("promotions.conditions.add")
          },
          buttonVariant: "transparentIconLeft"
        }
      ),
      rules.map((rule) => /* @__PURE__ */ jsx3(RuleBlock, { rule }, `${rule.id}-${rule.attribute}`))
    ] })
  ] });
};

// src/routes/promotions/promotion-detail/components/promotion-general-section/promotion-general-section.tsx
import { PencilSquare as PencilSquare3, Trash } from "@medusajs/icons";
import {
  Badge as Badge2,
  Container as Container3,
  Copy,
  Heading as Heading3,
  StatusBadge,
  Text as Text2,
  usePrompt
} from "@medusajs/ui";
import { useTranslation as useTranslation3 } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function getDisplayValue(promotion) {
  const value = promotion.application_method?.value;
  if (!value) {
    return null;
  }
  if (promotion.application_method?.type === "fixed") {
    const currency = promotion.application_method?.currency_code;
    if (!currency) {
      return null;
    }
    return formatCurrency(value, currency);
  } else if (promotion.application_method?.type === "percentage") {
    return formatPercentage(value);
  }
  return null;
}
var PromotionGeneralSection = ({
  promotion
}) => {
  const { t } = useTranslation3();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const { mutateAsync } = useDeletePromotion(promotion.id);
  const handleDelete = async () => {
    const confirm = await prompt({
      title: t("general.areYouSure"),
      description: t("promotions.deleteWarning", {
        code: promotion.code
      }),
      verificationInstruction: t("general.typeToConfirm"),
      verificationText: promotion.code,
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!confirm) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        navigate("/promotions", { replace: true });
      }
    });
  };
  const [color, text] = {
    ["DISABLED" /* DISABLED */]: ["grey", t("statuses.disabled")],
    ["ACTIVE" /* ACTIVE */]: ["green", t("statuses.active")],
    ["SCHEDULED" /* SCHEDULED */]: ["orange", t("statuses.scheduled")],
    ["EXPIRED" /* EXPIRED */]: ["red", t("statuses.expired")]
  }[getPromotionStatus(promotion)];
  const displayValue = getDisplayValue(promotion);
  return /* @__PURE__ */ jsxs3(Container3, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx4("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx4(Heading3, { children: promotion.code }) }),
      /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-x-2", children: [
        /* @__PURE__ */ jsx4(StatusBadge, { color, children: text }),
        /* @__PURE__ */ jsx4(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    icon: /* @__PURE__ */ jsx4(PencilSquare3, {}),
                    label: t("actions.edit"),
                    to: `/promotions/${promotion.id}/edit`
                  }
                ]
              },
              {
                actions: [
                  {
                    icon: /* @__PURE__ */ jsx4(Trash, {}),
                    label: t("actions.delete"),
                    onClick: handleDelete
                  }
                ]
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [
      /* @__PURE__ */ jsx4(Text2, { size: "small", weight: "plus", leading: "compact", children: t("promotions.fields.campaign") }),
      /* @__PURE__ */ jsx4(Text2, { size: "small", leading: "compact", className: "text-pretty", children: promotion.is_automatic ? t("promotions.form.method.automatic.title") : t("promotions.form.method.code.title") })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx4(Text2, { size: "small", weight: "plus", leading: "compact", children: t("fields.code") }),
      /* @__PURE__ */ jsx4(Copy, { content: promotion.code, asChild: true, children: /* @__PURE__ */ jsx4(
        Badge2,
        {
          size: "2xsmall",
          rounded: "full",
          className: "cursor-pointer text-pretty",
          children: promotion.code
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [
      /* @__PURE__ */ jsx4(Text2, { size: "small", weight: "plus", leading: "compact", children: t("promotions.fields.type") }),
      /* @__PURE__ */ jsx4(Text2, { size: "small", leading: "compact", className: "text-pretty capitalize", children: promotion.type })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [
      /* @__PURE__ */ jsx4(Text2, { size: "small", weight: "plus", leading: "compact", children: t("promotions.fields.value") }),
      /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-x-2", children: [
        /* @__PURE__ */ jsx4(Text2, { className: "inline", size: "small", leading: "compact", children: displayValue || "-" }),
        promotion?.application_method?.type === "fixed" && /* @__PURE__ */ jsx4(Badge2, { size: "2xsmall", rounded: "full", children: promotion?.application_method?.currency_code?.toUpperCase() })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [
      /* @__PURE__ */ jsx4(Text2, { size: "small", weight: "plus", leading: "compact", children: t("promotions.fields.allocation") }),
      /* @__PURE__ */ jsx4(Text2, { size: "small", leading: "compact", className: "text-pretty capitalize", children: promotion.application_method?.allocation })
    ] })
  ] });
};

// src/routes/promotions/promotion-detail/promotion-detail.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var PromotionDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams2();
  const { promotion, isLoading } = usePromotion(id, { initialData });
  const query = {};
  if (promotion?.type === "buyget") {
    query.promotion_type = promotion.type;
  }
  const { rules } = usePromotionRules(id, "rules", query);
  const { rules: targetRules } = usePromotionRules(id, "target-rules", query);
  const { rules: buyRules } = usePromotionRules(id, "buy-rules", query);
  const { getWidgets } = useDashboardExtension();
  if (isLoading || !promotion) {
    return /* @__PURE__ */ jsx5(TwoColumnPageSkeleton, { mainSections: 3, sidebarSections: 1, showJSON: true });
  }
  return /* @__PURE__ */ jsxs4(
    TwoColumnPage,
    {
      data: promotion,
      widgets: {
        after: getWidgets("promotion.details.after"),
        before: getWidgets("promotion.details.before"),
        sideAfter: getWidgets("promotion.details.side.after"),
        sideBefore: getWidgets("promotion.details.side.before")
      },
      hasOutlet: true,
      showJSON: true,
      children: [
        /* @__PURE__ */ jsxs4(TwoColumnPage.Main, { children: [
          /* @__PURE__ */ jsx5(PromotionGeneralSection, { promotion }),
          /* @__PURE__ */ jsx5(PromotionConditionsSection, { rules: rules || [], ruleType: "rules" }),
          /* @__PURE__ */ jsx5(
            PromotionConditionsSection,
            {
              rules: targetRules || [],
              ruleType: "target-rules"
            }
          ),
          promotion.type === "buyget" && /* @__PURE__ */ jsx5(
            PromotionConditionsSection,
            {
              rules: buyRules || [],
              ruleType: "buy-rules"
            }
          )
        ] }),
        /* @__PURE__ */ jsx5(TwoColumnPage.Sidebar, { children: /* @__PURE__ */ jsx5(CampaignSection, { campaign: promotion.campaign }) })
      ]
    }
  );
};
export {
  PromotionDetailBreadcrumb as Breadcrumb,
  PromotionDetail as Component,
  promotionLoader as loader
};