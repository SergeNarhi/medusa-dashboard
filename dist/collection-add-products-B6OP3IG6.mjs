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
} from "./chunk-24OILC3G.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-XOK63ZPD.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-LPEUYMRK.mjs";
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
import {
  useCollection,
  useUpdateCollectionProducts
} from "./chunk-C7J3KXU4.mjs";
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
  KeyboundForm
} from "./chunk-6HTZNHPT.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-KL22UNUW.mjs";
import {
  useProducts
} from "./chunk-GVVSRVWO.mjs";
import "./chunk-VZXSXNQY.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/collections/collection-add-products/collection-add-products.tsx
import { useParams } from "react-router-dom";

// src/routes/collections/collection-add-products/components/add-products-to-collection-form/add-products-to-collection-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Hint, Tooltip, toast } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var AddProductsToCollectionSchema = zod.object({
  add: zod.array(zod.string()).min(1)
});
var PAGE_SIZE = 50;
var PREFIX = "p";
var AddProductsToCollectionForm = ({
  collection
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      add: []
    },
    resolver: zodResolver(AddProductsToCollectionSchema)
  });
  const { setValue } = form;
  const { mutateAsync, isPending: isMutating } = useUpdateCollectionProducts(
    collection.id
  );
  const [rowSelection, setRowSelection] = useState({});
  const updater = (newSelection) => {
    const update = typeof newSelection === "function" ? newSelection(rowSelection) : newSelection;
    setValue(
      "add",
      Object.keys(update).filter((k) => update[k]),
      {
        shouldDirty: true,
        shouldTouch: true
      }
    );
    setRowSelection(update);
  };
  useEffect(() => {
    setValue(
      "add",
      Object.keys(rowSelection).filter((k) => rowSelection[k]),
      {
        shouldDirty: true,
        shouldTouch: true
      }
    );
  }, [rowSelection, setValue]);
  const { searchParams, raw } = useProductTableQuery({
    prefix: PREFIX,
    pageSize: PAGE_SIZE
  });
  const { products, count, isLoading, isError, error } = useProducts(
    {
      fields: "*variants,*sales_channels",
      ...searchParams
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const columns = useColumns();
  const filters = useProductTableFilters(["collections"]);
  const { table } = useDataTable({
    data: products ?? [],
    columns,
    count,
    pageSize: PAGE_SIZE,
    prefix: PREFIX,
    getRowId: (row) => row.id,
    enableRowSelection: true,
    rowSelection: {
      state: rowSelection,
      updater
    },
    enablePagination: true,
    meta: {
      collectionId: collection.id
    }
  });
  const handleSubmit = form.handleSubmit(async (values) => {
    await mutateAsync(
      {
        add: values.add
      },
      {
        onSuccess: () => {
          toast.success(
            t("collections.products.add.successToast", {
              count: values.add.length
            })
          );
          handleSuccess();
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    KeyboundForm,
    {
      onSubmit: handleSubmit,
      className: "flex h-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          form.formState.errors.add && /* @__PURE__ */ jsx(Hint, { variant: "error", children: form.formState.errors.add.message }),
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isMutating, children: t("actions.save") })
        ] }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "size-full overflow-hidden", children: /* @__PURE__ */ jsx(
          DataTable,
          {
            table,
            columns,
            pageSize: PAGE_SIZE,
            count,
            queryObject: raw,
            filters,
            orderBy: [
              { key: "title", label: t("fields.title") },
              { key: "created_at", label: t("fields.createdAt") },
              { key: "updated_at", label: t("fields.updatedAt") }
            ],
            prefix: PREFIX,
            isLoading,
            layout: "fill",
            pagination: true,
            search: "autofocus"
          }
        ) })
      ]
    }
  ) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const { t } = useTranslation();
  const base = useProductTableColumns();
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
        cell: ({ row, table }) => {
          const { collectionId } = table.options.meta;
          const isAdded = row.original.collection_id === collectionId;
          const isSelected = row.getIsSelected() || isAdded;
          const Component = /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: isSelected,
              disabled: isAdded,
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
          if (isAdded) {
            return /* @__PURE__ */ jsx(
              Tooltip,
              {
                content: t("salesChannels.productAlreadyAdded"),
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

// src/routes/collections/collection-add-products/collection-add-products.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var CollectionAddProducts = () => {
  const { id } = useParams();
  const { collection, isLoading, isError, error } = useCollection(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: !isLoading && collection && /* @__PURE__ */ jsx2(AddProductsToCollectionForm, { collection }) });
};
export {
  CollectionAddProducts as Component
};
