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
import {
  SingleColumnPage
} from "./chunk-2RQLKDBF.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-A5HXPG42.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  SingleColumnPageSkeleton
} from "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-RBEBIPW6.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-GBNV4D2H.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-R3DNF26F.mjs";
import "./chunk-BOBCOEXA.mjs";
import "./chunk-4XWPEQS4.mjs";
import "./chunk-R4S4IZIL.mjs";
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
  collectionsQueryKeys,
  useCollection,
  useDeleteCollection,
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

// src/routes/collections/collection-detail/breadcrumb.tsx
import { jsx } from "react/jsx-runtime";
var CollectionDetailBreadcrumb = (props) => {
  const { id } = props.params || {};
  const { collection } = useCollection(id, {
    initialData: props.data,
    enabled: Boolean(id)
  });
  if (!collection) {
    return null;
  }
  return /* @__PURE__ */ jsx("span", { children: collection.title });
};

// src/routes/collections/collection-detail/collection-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/collections/collection-detail/components/collection-general-section/collection-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading, Text, usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var CollectionGeneralSection = ({
  collection
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const { mutateAsync } = useDeleteCollection(collection.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("collections.deleteWarning", {
        count: 1,
        title: collection.title
      })
    });
    if (!res) {
      return;
    }
    await mutateAsync();
    navigate("../", { replace: true });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading, { children: collection.title }),
      /* @__PURE__ */ jsx2(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx2(PencilSquare, {}),
                  label: t("actions.edit"),
                  to: `/collections/${collection.id}/edit`,
                  disabled: !collection.id
                }
              ]
            },
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx2(Trash, {}),
                  label: t("actions.delete"),
                  onClick: handleDelete,
                  disabled: !collection.id
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.handle") }),
      /* @__PURE__ */ jsxs(Text, { size: "small", children: [
        "/",
        collection.handle
      ] })
    ] })
  ] });
};

// src/routes/collections/collection-detail/components/collection-product-section/collection-product-section.tsx
import { PencilSquare as PencilSquare2, Plus, Trash as Trash2 } from "@medusajs/icons";
import { Checkbox, Container as Container2, Heading as Heading2, toast, usePrompt as usePrompt2 } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var CollectionProductSection = ({
  collection
}) => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useProductTableQuery({ pageSize: PAGE_SIZE });
  const { products, count, isLoading, isError, error } = useProducts(
    {
      limit: PAGE_SIZE,
      ...searchParams,
      collection_id: [collection.id]
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useProductTableFilters(["collections"]);
  const columns = useColumns();
  const { table } = useDataTable({
    data: products ?? [],
    columns,
    getRowId: (row) => row.id,
    count,
    enablePagination: true,
    enableRowSelection: true,
    pageSize: PAGE_SIZE,
    meta: {
      collectionId: collection.id
    }
  });
  const prompt = usePrompt2();
  const { mutateAsync } = useUpdateCollectionProducts(collection.id);
  const handleRemove = async (selection) => {
    const ids = Object.keys(selection);
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("collections.removeProductsWarning", {
        count: ids.length
      }),
      confirmText: t("actions.remove"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(
      {
        remove: ids
      },
      {
        onSuccess: () => {
          toast.success(
            t("collections.products.remove.successToast", {
              count: ids.length
            })
          );
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Heading2, { level: "h2", children: t("products.domain") }),
      /* @__PURE__ */ jsx3(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx3(Plus, {}),
                  label: t("actions.add"),
                  to: "products"
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        columns,
        search: true,
        pagination: true,
        pageSize: PAGE_SIZE,
        navigateTo: ({ original }) => `/products/${original.id}`,
        count,
        filters,
        isLoading,
        orderBy: [
          { key: "title", label: t("fields.title") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        queryObject: raw,
        commands: [
          {
            action: handleRemove,
            label: t("actions.remove"),
            shortcut: "r"
          }
        ],
        noRecords: {
          message: t("collections.products.list.noRecordsMessage")
        }
      }
    )
  ] });
};
var ProductActions = ({
  product,
  collectionId
}) => {
  const { t } = useTranslation2();
  const prompt = usePrompt2();
  const { mutateAsync } = useUpdateCollectionProducts(collectionId);
  const handleRemove = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("collections.removeSingleProductWarning", {
        title: product.title
      }),
      confirmText: t("actions.remove"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(
      {
        remove: [product.id]
      },
      {
        onSuccess: () => {
          toast.success(
            t("collections.products.remove.successToast", {
              count: 1
            })
          );
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  return /* @__PURE__ */ jsx3(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx3(PencilSquare2, {}),
              label: t("actions.edit"),
              to: `/products/${product.id}/edit`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx3(Trash2, {}),
              label: t("actions.remove"),
              onClick: handleRemove
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const columns = useProductTableColumns();
  return useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx3(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx3(
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
      ...columns,
      columnHelper.display({
        id: "actions",
        cell: ({ row, table }) => {
          const { collectionId } = table.options.meta;
          return /* @__PURE__ */ jsx3(
            ProductActions,
            {
              product: row.original,
              collectionId
            }
          );
        }
      })
    ],
    [columns]
  );
};

// src/routes/collections/collection-detail/collection-detail.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var CollectionDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams();
  const { collection, isLoading, isError, error } = useCollection(id, {
    initialData
  });
  const { getWidgets } = useDashboardExtension();
  if (isLoading || !collection) {
    return /* @__PURE__ */ jsx4(SingleColumnPageSkeleton, { sections: 2, showJSON: true, showMetadata: true });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(
    SingleColumnPage,
    {
      widgets: {
        after: getWidgets("product_collection.details.after"),
        before: getWidgets("product_collection.details.before")
      },
      showJSON: true,
      showMetadata: true,
      data: collection,
      children: [
        /* @__PURE__ */ jsx4(CollectionGeneralSection, { collection }),
        /* @__PURE__ */ jsx4(CollectionProductSection, { collection })
      ]
    }
  );
};

// src/routes/collections/collection-detail/loader.ts
var collectionDetailQuery = (id) => ({
  queryKey: collectionsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.productCollection.retrieve(id)
});
var collectionLoader = async ({ params }) => {
  const id = params.id;
  const query = collectionDetailQuery(id);
  return queryClient.ensureQueryData(query);
};
export {
  CollectionDetailBreadcrumb as Breadcrumb,
  CollectionDetail as Component,
  collectionLoader as loader
};