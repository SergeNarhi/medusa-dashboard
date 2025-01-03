import {
  VisuallyHidden
} from "./chunk-F6ZOHZVB.mjs";
import {
  useSalesChannelTableColumns
} from "./chunk-Z6RNBRJT.mjs";
import "./chunk-GA34GXNI.mjs";
import "./chunk-MSDRGCRR.mjs";
import "./chunk-ADOCJB6L.mjs";
import "./chunk-IRV425DP.mjs";
import "./chunk-CBSCX7RE.mjs";
import "./chunk-LT4MVCA7.mjs";
import "./chunk-JKG6LNAN.mjs";
import "./chunk-W7625H47.mjs";
import "./chunk-DLZWPHHO.mjs";
import "./chunk-LSEYENCI.mjs";
import "./chunk-PKBZNOGD.mjs";
import "./chunk-24OILC3G.mjs";
import {
  useSalesChannelTableQuery
} from "./chunk-GSM3OOMB.mjs";
import {
  useSalesChannelTableFilters
} from "./chunk-VELNOPU6.mjs";
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
import {
  useApiKey,
  useBatchAddSalesChannelsToApiKey
} from "./chunk-MVS2MLD5.mjs";
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
import {
  useSalesChannels
} from "./chunk-D5QHHX42.mjs";
import "./chunk-JEH3SANT.mjs";
import "./chunk-CSL6R7SM.mjs";
import "./chunk-OFR32LXC.mjs";
import "./chunk-JFVS6F3P.mjs";
import "./chunk-IUCDCPJU.mjs";
import {
  KeyboundForm
} from "./chunk-6HTZNHPT.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-KL22UNUW.mjs";
import "./chunk-GVVSRVWO.mjs";
import "./chunk-VZXSXNQY.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/api-key-management/api-key-management-sales-channels/api-key-management-sales-channels.tsx
import { useParams } from "react-router-dom";

// src/routes/api-key-management/api-key-management-sales-channels/components/api-key-sales-channels-form/api-key-sales-channels-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Hint, Tooltip, toast } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var AddSalesChannelsToApiKeySchema = zod.object({
  sales_channel_ids: zod.array(zod.string())
});
var PAGE_SIZE = 50;
var ApiKeySalesChannelsForm = ({
  apiKey,
  preSelected = []
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      sales_channel_ids: []
    },
    resolver: zodResolver(AddSalesChannelsToApiKeySchema)
  });
  const { setValue } = form;
  const [rowSelection, setRowSelection] = useState({});
  const { mutateAsync, isPending } = useBatchAddSalesChannelsToApiKey(apiKey);
  const { raw, searchParams } = useSalesChannelTableQuery({
    pageSize: PAGE_SIZE
  });
  const columns = useColumns();
  const filters = useSalesChannelTableFilters();
  const { sales_channels, count, isLoading } = useSalesChannels(
    { ...searchParams },
    {
      placeholderData: keepPreviousData
    }
  );
  const updater = (fn) => {
    const state = typeof fn === "function" ? fn(rowSelection) : fn;
    const ids = Object.keys(state);
    setValue("sales_channel_ids", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
    setRowSelection(state);
  };
  const { table } = useDataTable({
    data: sales_channels ?? [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: (row) => {
      return !preSelected.includes(row.original.id);
    },
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: rowSelection,
      updater
    }
  });
  const handleSubmit = form.handleSubmit(async (values) => {
    await mutateAsync(values.sales_channel_ids, {
      onSuccess: () => {
        toast.success(
          t("apiKeyManagement.salesChannels.successToast", {
            count: values.sales_channel_ids.length
          })
        );
        handleSuccess();
      },
      onError: (err) => {
        toast.error(err.message);
      }
    });
  });
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(KeyboundForm, { onSubmit: handleSubmit, className: "flex h-full flex-col", children: [
    /* @__PURE__ */ jsxs(RouteFocusModal.Header, { children: [
      /* @__PURE__ */ jsx(RouteFocusModal.Title, { asChild: true, children: /* @__PURE__ */ jsx(VisuallyHidden, { children: t("apiKeyManagement.salesChannels.title") }) }),
      /* @__PURE__ */ jsx(RouteFocusModal.Description, { asChild: true, children: /* @__PURE__ */ jsx(VisuallyHidden, { children: t("apiKeyManagement.salesChannels.description") }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end gap-x-2", children: form.formState.errors.sales_channel_ids && /* @__PURE__ */ jsx(Hint, { variant: "error", children: form.formState.errors.sales_channel_ids.message }) })
    ] }),
    /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex flex-1 flex-col overflow-auto", children: /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        count,
        pageSize: PAGE_SIZE,
        filters,
        pagination: true,
        search: "autofocus",
        isLoading,
        queryObject: raw,
        orderBy: [
          { key: "name", label: t("fields.name") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        layout: "fill",
        noRecords: {
          message: t(
            "apiKeyManagement.addSalesChannels.list.noRecordsMessage"
          )
        }
      }
    ) }),
    /* @__PURE__ */ jsx(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isPending, children: t("actions.save") })
    ] }) })
  ] }) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const { t } = useTranslation();
  const base = useSalesChannelTableColumns();
  return useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          const isPreSelected = !row.getCanSelect();
          const isSelected = row.getIsSelected() || isPreSelected;
          const Component = /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: isSelected,
              disabled: isPreSelected,
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
          if (isPreSelected) {
            return /* @__PURE__ */ jsx(
              Tooltip,
              {
                content: t(
                  "apiKeyManagement.salesChannels.alreadyAddedTooltip"
                ),
                side: "right",
                children: Component
              }
            );
          }
          return Component;
        }
      }),
      ...base
    ],
    [t, base]
  );
};

// src/routes/api-key-management/api-key-management-sales-channels/api-key-management-sales-channels.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ApiKeyManagementAddSalesChannels = () => {
  const { id } = useParams();
  const { api_key, isLoading, isError, error } = useApiKey(id);
  const preSelected = api_key?.sales_channels?.map((sc) => sc.id);
  const ready = !isLoading && api_key;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: ready && /* @__PURE__ */ jsx2(ApiKeySalesChannelsForm, { apiKey: id, preSelected }) });
};
export {
  ApiKeyManagementAddSalesChannels as Component
};
