import {
  useStockLocation
} from "./chunk-7IYWGNFM.mjs";
import "./chunk-IUCDCPJU.mjs";
import {
  KeyboundForm
} from "./chunk-6HTZNHPT.mjs";
import {
  RouteDrawer,
  useRouteModal
} from "./chunk-KL22UNUW.mjs";
import {
  useInventoryItem,
  useUpdateInventoryLevel
} from "./chunk-VZXSXNQY.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import {
  Form
} from "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/inventory/inventory-detail/components/adjust-inventory/adjust-inventory-drawer.tsx
import { Heading } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useParams } from "react-router-dom";

// src/routes/inventory/inventory-detail/components/adjust-inventory/components/adjust-inventory-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Button, Input, Text, toast } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var AttributeGridRow = ({
  title,
  value
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 divide-x", children: [
    /* @__PURE__ */ jsx(Text, { className: "px-2 py-1.5", size: "small", leading: "compact", children: title }),
    /* @__PURE__ */ jsx(Text, { className: "px-2 py-1.5", size: "small", leading: "compact", children: value })
  ] });
};
var AdjustInventoryForm = ({
  item,
  level,
  location
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const AdjustInventorySchema = zod.object({
    stocked_quantity: zod.number().min(level.reserved_quantity)
  });
  const form = useForm({
    defaultValues: {
      stocked_quantity: level.stocked_quantity
    },
    resolver: zodResolver(AdjustInventorySchema)
  });
  const stockedQuantityUpdate = form.watch("stocked_quantity");
  const { mutateAsync, isPending: isLoading } = useUpdateInventoryLevel(
    item.id,
    level.location_id
  );
  const handleSubmit = form.handleSubmit(async (value) => {
    if (value.stocked_quantity === level.stocked_quantity) {
      return handleSuccess();
    }
    await mutateAsync(
      {
        stocked_quantity: value.stocked_quantity
      },
      {
        onSuccess: () => {
          toast.success(t("inventory.toast.updateLevel"));
          handleSuccess();
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteDrawer.Form, { form, children: /* @__PURE__ */ jsxs(
    KeyboundForm,
    {
      onSubmit: handleSubmit,
      className: "flex flex-1 flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs(RouteDrawer.Body, { className: "flex flex-1 flex-col gap-y-8 overflow-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle shadow-elevation-card-rest grid grid-rows-4 divide-y rounded-lg border", children: [
            /* @__PURE__ */ jsx(
              AttributeGridRow,
              {
                title: t("fields.title"),
                value: item.title ?? "-"
              }
            ),
            /* @__PURE__ */ jsx(AttributeGridRow, { title: t("fields.sku"), value: item.sku }),
            /* @__PURE__ */ jsx(
              AttributeGridRow,
              {
                title: t("locations.domain"),
                value: location.name
              }
            ),
            /* @__PURE__ */ jsx(
              AttributeGridRow,
              {
                title: t("inventory.reserved"),
                value: level.reserved_quantity
              }
            ),
            /* @__PURE__ */ jsx(
              AttributeGridRow,
              {
                title: t("inventory.available"),
                value: stockedQuantityUpdate - level.reserved_quantity
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Form.Field,
            {
              control: form.control,
              name: "stocked_quantity",
              render: ({ field: { onChange, value, ...field } }) => {
                return /* @__PURE__ */ jsxs(Form.Item, { children: [
                  /* @__PURE__ */ jsx(Form.Label, { children: t("fields.inStock") }),
                  /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "number",
                      min: level.reserved_quantity,
                      value: value || "",
                      onChange: (e) => {
                        const value2 = e.target.value;
                        if (value2 === "") {
                          onChange(null);
                        } else {
                          onChange(parseFloat(value2));
                        }
                      },
                      ...field
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                ] });
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx(RouteDrawer.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { type: "submit", size: "small", isLoading, children: t("actions.save") })
        ] }) })
      ]
    }
  ) });
};

// src/routes/inventory/inventory-detail/components/adjust-inventory/adjust-inventory-drawer.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var AdjustInventoryDrawer = () => {
  const { id, location_id } = useParams();
  const { t } = useTranslation2();
  const {
    inventory_item: inventoryItem,
    isPending: isLoading,
    isError,
    error
  } = useInventoryItem(id);
  const inventoryLevel = inventoryItem?.location_levels.find(
    (level) => level.location_id === location_id
  );
  const { stock_location, isLoading: isLoadingLocation } = useStockLocation(
    location_id
  );
  const ready = !isLoading && inventoryItem && inventoryLevel && !isLoadingLocation && stock_location;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsx2(RouteDrawer.Header, { children: /* @__PURE__ */ jsx2(Heading, { children: t("inventory.manageLocations") }) }),
    ready && /* @__PURE__ */ jsx2(
      AdjustInventoryForm,
      {
        item: inventoryItem,
        level: inventoryLevel,
        location: stock_location
      }
    )
  ] });
};
export {
  AdjustInventoryDrawer as Component
};