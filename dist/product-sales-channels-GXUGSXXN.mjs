import {
  useSalesChannelTableColumns
} from "./chunk-Z6RNBRJT.mjs";
import "./chunk-GA34GXNI.mjs";
import "./chunk-MSDRGCRR.mjs";
import "./chunk-ADOCJB6L.mjs";
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
import {
  useSalesChannels
} from "./chunk-D5QHHX42.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-KL22UNUW.mjs";
import {
  useProduct,
  useUpdateProduct
} from "./chunk-GVVSRVWO.mjs";
import "./chunk-VZXSXNQY.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/products/product-sales-channels/product-sales-channels.tsx
import { useParams } from "react-router-dom";

// src/routes/products/product-sales-channels/components/edit-sales-channels-form/edit-sales-channels-form.tsx
import { Button, Checkbox } from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { keepPreviousData } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { jsx, jsxs } from "react/jsx-runtime";
var EditSalesChannelsSchema = zod.object({
  sales_channels: zod.array(zod.string()).optional()
});
var PAGE_SIZE = 50;
var EditSalesChannelsForm = ({
  product
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      sales_channels: product.sales_channels?.map((sc) => sc.id) ?? []
    },
    resolver: zodResolver(EditSalesChannelsSchema)
  });
  const { setValue } = form;
  const initialState = product.sales_channels?.reduce((acc, curr) => {
    acc[curr.id] = true;
    return acc;
  }, {}) ?? {};
  const [rowSelection, setRowSelection] = useState(initialState);
  useEffect(() => {
    const ids = Object.keys(rowSelection);
    setValue("sales_channels", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
  }, [rowSelection, setValue]);
  const { searchParams, raw } = useSalesChannelTableQuery({
    pageSize: PAGE_SIZE
  });
  const { sales_channels, count, isLoading, isError, error } = useSalesChannels(
    {
      ...searchParams
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useSalesChannelTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: sales_channels ?? [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: true,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    },
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  const { mutateAsync, isPending: isMutating } = useUpdateProduct(product.id);
  const handleSubmit = form.handleSubmit(async (data) => {
    const arr = data.sales_channels ?? [];
    const sales_channels2 = arr.map((id) => {
      return {
        id
      };
    });
    await mutateAsync(
      {
        sales_channels: sales_channels2
      },
      {
        onSuccess: () => {
          handleSuccess();
        }
      }
    );
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsx(RouteFocusModal.Header, {}),
    /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        isLoading,
        count,
        filters,
        search: "autofocus",
        pagination: true,
        orderBy: [
          { key: "name", label: t("fields.name") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        queryObject: raw,
        layout: "fill"
      }
    ) }),
    /* @__PURE__ */ jsx(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx(Button, { size: "small", isLoading: isMutating, onClick: handleSubmit, children: t("actions.save") })
    ] }) })
  ] }) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const columns = useSalesChannelTableColumns();
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
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: row.getIsSelected(),
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
        }
      }),
      ...columns
    ],
    [columns]
  );
};

// src/routes/products/product-sales-channels/product-sales-channels.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ProductSalesChannels = () => {
  const { id } = useParams();
  const { product, isLoading, isError, error } = useProduct(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: !isLoading && product && /* @__PURE__ */ jsx2(EditSalesChannelsForm, { product }) });
};
export {
  ProductSalesChannels as Component
};
