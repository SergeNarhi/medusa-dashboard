import {
  TargetForm,
  TargetItem,
  TaxRateRuleReferenceSchema,
  createTaxRulePayload
} from "./chunk-SHMTKRG7.mjs";
import "./chunk-V3MOBCDF.mjs";
import "./chunk-D2UCOBBT.mjs";
import "./chunk-YYGNAECV.mjs";
import "./chunk-FYN6YJ5C.mjs";
import "./chunk-DJPQV344.mjs";
import "./chunk-I3VB6NM2.mjs";
import "./chunk-ZJRFL6ZN.mjs";
import "./chunk-XWO5BP42.mjs";
import {
  PercentageInput
} from "./chunk-YRY2CZ6I.mjs";
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
  Divider
} from "./chunk-7XWP2AR2.mjs";
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
import "./chunk-4M3ZY7KA.mjs";
import "./chunk-24OILC3G.mjs";
import "./chunk-GSM3OOMB.mjs";
import "./chunk-VELNOPU6.mjs";
import "./chunk-VDBOSWVE.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import "./chunk-XOK63ZPD.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-LPEUYMRK.mjs";
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
import {
  useCreateTaxRate
} from "./chunk-6YTJEFSJ.mjs";
import {
  useTaxRegion
} from "./chunk-ZT6F5MCR.mjs";
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
  SwitchBox
} from "./chunk-JLD5AXG6.mjs";
import "./chunk-IUCDCPJU.mjs";
import {
  KeyboundForm
} from "./chunk-6HTZNHPT.mjs";
import {
  RouteFocusModal,
  StackedFocusModal,
  useRouteModal,
  useStackedModal
} from "./chunk-KL22UNUW.mjs";
import "./chunk-GVVSRVWO.mjs";
import "./chunk-VZXSXNQY.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import {
  Form
} from "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/tax-regions/tax-region-tax-override-create/tax-region-tax-override-create.tsx
import { useParams } from "react-router-dom";

// src/routes/tax-regions/tax-region-tax-override-create/components/tax-region-override-create-form/tax-region-tax-override-create.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Heading,
  Hint,
  Input,
  Label,
  Select,
  Text,
  clx,
  toast
} from "@medusajs/ui";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { MagnifyingGlass } from "@medusajs/icons";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var TaxRegionCreateTaxOverrideSchema = z.object({
  name: z.string().min(1),
  code: z.string().min(1),
  rate: z.object({
    float: z.number().optional(),
    value: z.string().optional()
  }).optional(),
  is_combinable: z.boolean().optional(),
  enabled_rules: z.object({
    product: z.boolean(),
    product_type: z.boolean()
    // product_collection: z.boolean(),
    // product_tag: z.boolean(),
    // customer_group: z.boolean(),
  }),
  product: z.array(TaxRateRuleReferenceSchema).optional(),
  product_type: z.array(TaxRateRuleReferenceSchema).optional()
  // product_collection: z.array(TaxRateRuleReferenceSchema).optional(),
  // product_tag: z.array(TaxRateRuleReferenceSchema).optional(),
  // customer_group: z.array(TaxRateRuleReferenceSchema).optional(),
});
var STACKED_MODAL_ID = "tr";
var getStackedModalId = (type) => `${STACKED_MODAL_ID}-${type}`;
var TaxRegionCreateTaxOverrideForm = ({
  taxRegion
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const { setIsOpen } = useStackedModal();
  const form = useForm({
    defaultValues: {
      name: "",
      code: "",
      is_combinable: false,
      rate: {
        value: ""
      },
      enabled_rules: {
        product: true,
        product_type: false
        // product_collection: false,
        // product_tag: false,
        // customer_group: false,
      },
      product: [],
      product_type: []
      // product_collection: [],
      // product_tag: [],
      // customer_group: [],
    },
    resolver: zodResolver(TaxRegionCreateTaxOverrideSchema)
  });
  const { mutateAsync, isPending } = useCreateTaxRate();
  const handleSubmit = form.handleSubmit(async (values) => {
    const {
      product,
      product_type
      // customer_group,
      // product_collection,
      // product_tag,
    } = values;
    const productRules = createTaxRulePayload({
      reference_type: "product" /* PRODUCT */,
      references: product || []
    });
    const productTypeRules = createTaxRulePayload({
      reference_type: "product_type" /* PRODUCT_TYPE */,
      references: product_type || []
    });
    const rules = [
      productRules,
      productTypeRules
      // customerGroupRules,
      // productCollectionRules,
      // productTagRules,
    ].filter((rule) => Boolean(rule)).flatMap((r) => r);
    mutateAsync(
      {
        name: values.name,
        tax_region_id: taxRegion.id,
        rate: values.rate?.float,
        code: values.code,
        is_combinable: values.is_combinable,
        rules,
        is_default: false
      },
      {
        onSuccess: () => {
          handleSuccess();
        },
        onError: (error) => {
          toast.error(error.message);
        }
      }
    );
  });
  const products = useFieldArray({
    control: form.control,
    name: "product" /* PRODUCT */
  });
  const productTypes = useFieldArray({
    control: form.control,
    name: "product_type" /* PRODUCT_TYPE */
  });
  const getControls = (type) => {
    switch (type) {
      case "product" /* PRODUCT */:
        return products;
      case "product_type" /* PRODUCT_TYPE */:
        return productTypes;
    }
  };
  const referenceTypeOptions = [
    {
      value: "product" /* PRODUCT */,
      label: t("taxRegions.fields.targets.options.product")
    },
    {
      value: "product_type" /* PRODUCT_TYPE */,
      label: t("taxRegions.fields.targets.options.productType")
    }
    // {
    //   value: TaxRateRuleReferenceType.PRODUCT_COLLECTION,
    //   label: t("taxRegions.fields.targets.options.productCollection"),
    // },
    // {
    //   value: TaxRateRuleReferenceType.PRODUCT_TAG,
    //   label: t("taxRegions.fields.targets.options.productTag"),
    // },
    // {
    //   value: TaxRateRuleReferenceType.CUSTOMER_GROUP,
    //   label: t("taxRegions.fields.targets.options.customerGroup"),
    // },
  ];
  const searchPlaceholders = {
    ["product" /* PRODUCT */]: t(
      "taxRegions.fields.targets.placeholders.product"
    ),
    ["product_type" /* PRODUCT_TYPE */]: t(
      "taxRegions.fields.targets.placeholders.productType"
    )
    // [TaxRateRuleReferenceType.PRODUCT_COLLECTION]: t(
    //   "taxRegions.fields.targets.placeholders.productCollection"
    // ),
    // [TaxRateRuleReferenceType.PRODUCT_TAG]: t(
    //   "taxRegions.fields.targets.placeholders.productTag"
    // ),
    // [TaxRateRuleReferenceType.CUSTOMER_GROUP]: t(
    //   "taxRegions.fields.targets.placeholders.customerGroup"
    // ),
  };
  const getFieldHandler = (type) => {
    const { fields, remove, append } = getControls(type);
    const modalId = getStackedModalId(type);
    return (references) => {
      if (!references.length) {
        form.setValue(type, [], {
          shouldDirty: true
        });
        setIsOpen(modalId, false);
        return;
      }
      const newIds = references.map((reference) => reference.value);
      const fieldsToAdd = references.filter(
        (reference) => !fields.some((field) => field.value === reference.value)
      );
      for (const field of fields) {
        if (!newIds.includes(field.value)) {
          remove(fields.indexOf(field));
        }
      }
      append(fieldsToAdd);
      setIsOpen(modalId, false);
    };
  };
  const displayOrder = /* @__PURE__ */ new Set([
    "product" /* PRODUCT */
  ]);
  const disableRule = (type) => {
    form.setValue(type, [], {
      shouldDirty: true
    });
    form.setValue(`enabled_rules.${type}`, false, {
      shouldDirty: true
    });
    displayOrder.delete(type);
  };
  const enableRule = (type) => {
    form.setValue(`enabled_rules.${type}`, true, {
      shouldDirty: true
    });
    form.setValue(type, [], {
      shouldDirty: true
    });
    displayOrder.add(type);
  };
  const watchedEnabledRules = useWatch({
    control: form.control,
    name: "enabled_rules"
  });
  const addRule = () => {
    const firstDisabledRule = Object.keys(watchedEnabledRules).find(
      (key) => !watchedEnabledRules[key]
    );
    if (firstDisabledRule) {
      enableRule(firstDisabledRule);
    }
  };
  const visibleRuleTypes = referenceTypeOptions.filter((option) => watchedEnabledRules[option.value]).sort((a, b) => {
    const orderArray = Array.from(displayOrder);
    return orderArray.indexOf(b.value) - orderArray.indexOf(a.value);
  });
  const getAvailableRuleTypes = (type) => {
    return referenceTypeOptions.filter((option) => {
      return !visibleRuleTypes.some(
        (visibleOption) => visibleOption.value === option.value
      ) || option.value === type;
    });
  };
  const showAddButton = Object.values(watchedEnabledRules).some(
    (value) => !value
  );
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    KeyboundForm,
    {
      onSubmit: handleSubmit,
      className: "flex h-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, {}),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex flex-1 flex-col overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col items-center overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(RouteFocusModal.Title, { asChild: true, children: /* @__PURE__ */ jsx(Heading, { children: t("taxRegions.taxOverrides.create.header") }) }),
            /* @__PURE__ */ jsx(RouteFocusModal.Description, { asChild: true, children: /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle", children: t("taxRegions.taxOverrides.create.hint") }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "name",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("fields.name") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "rate",
                render: ({ field: { value, onChange, ...field } }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("taxRegions.fields.taxRate") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                      PercentageInput,
                      {
                        ...field,
                        placeholder: "0.00",
                        value: value?.value,
                        onValueChange: (value2, _name, values) => onChange({
                          value: value2,
                          float: values?.float
                        })
                      }
                    ) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "code",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("taxRegions.fields.taxCode") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            )
          ] }) }) }),
          /* @__PURE__ */ jsx(
            SwitchBox,
            {
              control: form.control,
              name: "is_combinable",
              label: t("taxRegions.fields.isCombinable.label"),
              description: t("taxRegions.fields.isCombinable.hint")
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-x-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1", children: [
                  /* @__PURE__ */ jsx(
                    Label,
                    {
                      id: "tax_region_rules_label",
                      htmlFor: "tax_region_rules",
                      children: t("taxRegions.fields.targets.label")
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Text,
                    {
                      size: "small",
                      leading: "compact",
                      className: "text-ui-fg-muted",
                      children: [
                        "(",
                        t("fields.optional"),
                        ")"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  Hint,
                  {
                    id: "tax_region_rules_description",
                    className: "text-pretty",
                    children: t("taxRegions.fields.targets.hint")
                  }
                )
              ] }),
              showAddButton && /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: addRule,
                  type: "button",
                  size: "small",
                  variant: "transparent",
                  className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover flex-shrink-0",
                  children: t("taxRegions.fields.targets.action")
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: "tax_region_rules",
                "aria-labelledby": "tax_region_rules_label",
                "aria-describedby": "tax_region_rules_description",
                role: "application",
                className: "flex flex-col gap-y-3",
                children: visibleRuleTypes.map((ruleType, index) => {
                  const type = ruleType.value;
                  const label = ruleType.label;
                  const isLast = index === visibleRuleTypes.length - 1;
                  const searchPlaceholder = searchPlaceholders[type];
                  const options = getAvailableRuleTypes(type);
                  const { fields, remove } = getControls(type);
                  const handler = getFieldHandler(type);
                  const modalId = getStackedModalId(type);
                  const handleChangeType = (value) => {
                    disableRule(type);
                    enableRule(value);
                  };
                  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                    Form.Field,
                    {
                      control: form.control,
                      name: ruleType.value,
                      render: ({
                        field: {
                          value: _value,
                          onChange: _onChange,
                          ...field
                        }
                      }) => {
                        return /* @__PURE__ */ jsxs(Form.Item, { className: "space-y-0", children: [
                          /* @__PURE__ */ jsx(Form.Label, { className: "sr-only", children: label }),
                          /* @__PURE__ */ jsxs(
                            "div",
                            {
                              className: clx(
                                "bg-ui-bg-component shadow-elevation-card-rest transition-fg grid gap-1.5 rounded-xl py-1.5",
                                "aria-[invalid='true']:shadow-borders-error"
                              ),
                              role: "application",
                              ...field,
                              children: [
                                /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid gap-1.5 px-1.5 md:grid-cols-2", children: [
                                  isLast ? /* @__PURE__ */ jsxs(
                                    Select,
                                    {
                                      value: type,
                                      onValueChange: handleChangeType,
                                      children: [
                                        /* @__PURE__ */ jsx(Select.Trigger, { className: "bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover", children: /* @__PURE__ */ jsx(Select.Value, {}) }),
                                        /* @__PURE__ */ jsx(Select.Content, { children: options.map((option) => {
                                          return /* @__PURE__ */ jsx(
                                            Select.Item,
                                            {
                                              value: option.value,
                                              children: option.label
                                            },
                                            option.value
                                          );
                                        }) })
                                      ]
                                    }
                                  ) : /* @__PURE__ */ jsx("div", { className: "bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5", children: label }),
                                  /* @__PURE__ */ jsx("div", { className: "bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5", children: t(
                                    "taxRegions.fields.targets.operators.in"
                                  ) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-1.5", children: [
                                  /* @__PURE__ */ jsxs(StackedFocusModal, { id: modalId, children: [
                                    /* @__PURE__ */ jsx(StackedFocusModal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                                      "button",
                                      {
                                        type: "button",
                                        className: "bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover shadow-borders-base txt-compact-small text-ui-fg-muted transition-fg focus-visible:shadow-borders-interactive-with-active flex flex-1 items-center gap-x-2 rounded-md px-2 py-1.5 outline-none",
                                        children: [
                                          /* @__PURE__ */ jsx(MagnifyingGlass, {}),
                                          searchPlaceholder
                                        ]
                                      }
                                    ) }),
                                    /* @__PURE__ */ jsx(StackedFocusModal.Trigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: t("actions.browse") }) }),
                                    /* @__PURE__ */ jsxs(StackedFocusModal.Content, { children: [
                                      /* @__PURE__ */ jsxs(StackedFocusModal.Header, { children: [
                                        /* @__PURE__ */ jsx(StackedFocusModal.Title, { asChild: true, children: /* @__PURE__ */ jsx(Heading, { className: "sr-only", children: t(
                                          "taxRegions.fields.targets.modal.header"
                                        ) }) }),
                                        /* @__PURE__ */ jsx(StackedFocusModal.Description, { className: "sr-only", children: t(
                                          "taxRegions.fields.targets.hint"
                                        ) })
                                      ] }),
                                      /* @__PURE__ */ jsx(
                                        TargetForm,
                                        {
                                          type: "focus",
                                          referenceType: type,
                                          state: fields,
                                          setState: handler
                                        }
                                      )
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsx(
                                    Button,
                                    {
                                      variant: "secondary",
                                      onClick: () => disableRule(type),
                                      type: "button",
                                      children: t("actions.delete")
                                    }
                                  )
                                ] }),
                                fields.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-1.5", children: [
                                  /* @__PURE__ */ jsx(Divider, { variant: "dashed" }),
                                  /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-y-1.5 px-1.5", children: fields.map((field2, index2) => {
                                    return /* @__PURE__ */ jsx(
                                      TargetItem,
                                      {
                                        index: index2,
                                        label: field2.label,
                                        onRemove: remove
                                      },
                                      field2.id
                                    );
                                  }) })
                                ] }) : null
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsx(Form.ErrorMessage, { className: "mt-2" })
                        ] });
                      }
                    }
                  ) }, type);
                })
              }
            )
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isPending, children: t("actions.save") })
        ] }) })
      ]
    }
  ) });
};

// src/routes/tax-regions/tax-region-tax-override-create/tax-region-tax-override-create.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var TaxRegionCreateTaxOverride = () => {
  const { id, province_id } = useParams();
  const { tax_region, isPending, isError, error } = useTaxRegion(
    province_id || id
  );
  const ready = !isPending && !!tax_region;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: ready && /* @__PURE__ */ jsx2(TaxRegionCreateTaxOverrideForm, { taxRegion: tax_region }) });
};
export {
  TaxRegionCreateTaxOverride as Component
};
