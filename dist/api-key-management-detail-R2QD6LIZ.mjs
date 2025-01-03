import {
  getApiKeyStatusProps,
  getApiKeyTypeProps,
  prettifyRedactedToken
} from "./chunk-G22WWLPG.mjs";
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
import {
  SingleColumnPage
} from "./chunk-2RQLKDBF.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-XOK63ZPD.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  SingleColumnPageSkeleton,
  Skeleton
} from "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-RBEBIPW6.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-IPBL67Z7.mjs";
import "./chunk-M3VFKDXJ.mjs";
import {
  useDate
} from "./chunk-R3DNF26F.mjs";
import "./chunk-KHOKHZC6.mjs";
import "./chunk-4XWPEQS4.mjs";
import "./chunk-LJQNRGKD.mjs";
import "./chunk-UMNS46LA.mjs";
import "./chunk-4YM46CJI.mjs";
import {
  apiKeysQueryKeys,
  useApiKey,
  useBatchRemoveSalesChannelsFromApiKey,
  useDeleteApiKey,
  useRevokeApiKey
} from "./chunk-MVS2MLD5.mjs";
import "./chunk-6YTJEFSJ.mjs";
import "./chunk-ZT6F5MCR.mjs";
import "./chunk-JODJECSK.mjs";
import "./chunk-F2FX7KCH.mjs";
import "./chunk-RVOQ4QHC.mjs";
import "./chunk-XTMZKMOZ.mjs";
import "./chunk-BQN4VGEZ.mjs";
import "./chunk-6GGI4OZ2.mjs";
import {
  useUser
} from "./chunk-PH5TFBJO.mjs";
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

// src/routes/api-key-management/api-key-management-detail/api-key-management-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/api-key-management/api-key-management-detail/components/api-key-general-section/api-key-general-section.tsx
import { PencilSquare, Trash, XCircle } from "@medusajs/icons";
import {
  Badge,
  Container,
  Copy,
  Heading,
  StatusBadge,
  Text as Text2,
  toast,
  usePrompt
} from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// src/components/common/user-link/user-link.tsx
import { Avatar, Text } from "@medusajs/ui";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var UserLink = ({
  id,
  first_name,
  last_name,
  email,
  type = "user"
}) => {
  const name = [first_name, last_name].filter(Boolean).join(" ");
  const fallback = name ? name.slice(0, 1) : email.slice(0, 1);
  const link = type === "user" ? `/settings/users/${id}` : `/customers/${id}`;
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: link,
      className: "flex items-center gap-x-2 w-fit transition-fg hover:text-ui-fg-subtle outline-none focus-visible:shadow-borders-focus rounded-md",
      children: [
        /* @__PURE__ */ jsx(Avatar, { size: "2xsmall", fallback: fallback.toUpperCase() }),
        /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "regular", children: name || email })
      ]
    }
  );
};

// src/routes/api-key-management/api-key-management-detail/components/api-key-general-section/api-key-general-section.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ApiKeyGeneralSection = ({ apiKey }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const prompt = usePrompt();
  const { getFullDate } = useDate();
  const { mutateAsync: revokeAsync } = useRevokeApiKey(apiKey.id);
  const { mutateAsync: deleteAsync } = useDeleteApiKey(apiKey.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("apiKeyManagement.delete.warning", {
        title: apiKey.title
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await deleteAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t("apiKeyManagement.delete.successToast", {
            title: apiKey.title
          })
        );
        navigate("..", { replace: true });
      },
      onError: (err) => {
        toast.error(err.message);
      }
    });
  };
  const handleRevoke = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("apiKeyManagement.revoke.warning", {
        title: apiKey.title
      }),
      confirmText: t("apiKeyManagement.actions.revoke"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await revokeAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t("apiKeyManagement.revoke.successToast", {
            title: apiKey.title
          })
        );
      },
      onError: (err) => {
        toast.error(err.message);
      }
    });
  };
  const dangerousActions = [
    {
      icon: /* @__PURE__ */ jsx2(Trash, {}),
      label: t("actions.delete"),
      onClick: handleDelete,
      disabled: !apiKey.revoked_at
    }
  ];
  if (!apiKey.revoked_at) {
    dangerousActions.unshift({
      icon: /* @__PURE__ */ jsx2(XCircle, {}),
      label: t("apiKeyManagement.actions.revoke"),
      onClick: handleRevoke,
      disabled: !!apiKey.revoked_at
    });
  }
  const apiKeyStatus = getApiKeyStatusProps(apiKey.revoked_at, t);
  const apiKeyType = getApiKeyTypeProps(apiKey.type, t);
  return /* @__PURE__ */ jsxs2(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading, { children: apiKey.title }),
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ jsx2("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ jsx2(StatusBadge, { color: apiKeyStatus.color, children: apiKeyStatus.label }) }),
        /* @__PURE__ */ jsx2(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    label: t("actions.edit"),
                    icon: /* @__PURE__ */ jsx2(PencilSquare, {}),
                    to: "edit"
                  }
                ]
              },
              {
                actions: dangerousActions
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("fields.key") }),
      apiKey.type === "secret" ? /* @__PURE__ */ jsx2(Badge, { size: "2xsmall", children: prettifyRedactedToken(apiKey.redacted) }) : /* @__PURE__ */ jsx2(Copy, { asChild: true, content: apiKey.token, className: "cursor-pointer", children: /* @__PURE__ */ jsx2(Badge, { size: "2xsmall", className: "text-ui-tag-neutral-text", children: prettifyRedactedToken(apiKey.redacted) }) })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("fields.type") }),
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", children: apiKeyType.label })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("apiKeyManagement.fields.lastUsedAtLabel") }),
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", children: apiKey.last_used_at ? getFullDate({ date: apiKey.last_used_at, includeTime: true }) : "-" })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("apiKeyManagement.fields.createdByLabel") }),
      /* @__PURE__ */ jsx2(ActionBy, { userId: apiKey.created_by })
    ] }),
    apiKey.revoked_at && /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
        /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("apiKeyManagement.fields.revokedAtLabel") }),
        /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", children: getFullDate({ date: apiKey.revoked_at, includeTime: true }) })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
        /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("apiKeyManagement.fields.revokedByLabel") }),
        /* @__PURE__ */ jsx2(ActionBy, { userId: apiKey.revoked_by })
      ] })
    ] })
  ] });
};
var ActionBy = ({ userId }) => {
  const { user, isLoading, isError, error } = useUser(userId, void 0, {
    enabled: !!userId
  });
  if (!userId) {
    return /* @__PURE__ */ jsx2(Text2, { size: "small", className: "text-ui-fg-subtle", children: "-" });
  }
  if (isError) {
    throw error;
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-[20px_1fr]", children: [
      /* @__PURE__ */ jsx2(Skeleton, { className: "h-5 w-5 rounded-full" }),
      /* @__PURE__ */ jsx2(Skeleton, { className: "w-full max-w-[220px]" })
    ] });
  }
  if (!user) {
    return /* @__PURE__ */ jsx2(Text2, { size: "small", className: "text-ui-fg-subtle", children: "-" });
  }
  return /* @__PURE__ */ jsx2(UserLink, { ...user });
};

// src/routes/api-key-management/api-key-management-detail/components/api-key-sales-channel-section/api-key-sales-channel-section.tsx
import { PencilSquare as PencilSquare2, Plus, Trash as Trash2 } from "@medusajs/icons";
import { Checkbox, Container as Container2, Heading as Heading2, toast as toast2, usePrompt as usePrompt2 } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var ApiKeySalesChannelSection = ({
  apiKey
}) => {
  const [rowSelection, setRowSelection] = useState({});
  const { t } = useTranslation2();
  const prompt = usePrompt2();
  const { raw, searchParams } = useSalesChannelTableQuery({
    pageSize: PAGE_SIZE
  });
  const { sales_channels, count, isLoading } = useSalesChannels(
    { ...searchParams, publishable_key_id: apiKey.id },
    {
      placeholderData: keepPreviousData
    }
  );
  const columns = useColumns();
  const filters = useSalesChannelTableFilters();
  const { table } = useDataTable({
    data: sales_channels ?? [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    },
    meta: {
      apiKey: apiKey.id
    }
  });
  const { mutateAsync } = useBatchRemoveSalesChannelsFromApiKey(apiKey.id);
  const handleRemove = async () => {
    const keys = Object.keys(rowSelection);
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("apiKeyManagement.removeSalesChannel.warningBatch", {
        count: keys.length
      }),
      confirmText: t("actions.continue"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(keys, {
      onSuccess: () => {
        toast2.success(
          t("apiKeyManagement.removeSalesChannel.successToastBatch", {
            count: keys.length
          })
        );
        setRowSelection({});
      },
      onError: (err) => {
        toast2.error(err.message);
      }
    });
  };
  return /* @__PURE__ */ jsxs3(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Heading2, { level: "h2", children: t("salesChannels.domain") }),
      /* @__PURE__ */ jsx3(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx3(Plus, {}),
                  label: t("actions.add"),
                  to: "sales-channels"
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
        filters,
        count,
        isLoading,
        queryObject: raw,
        navigateTo: (row) => `/settings/sales-channels/${row.id}`,
        orderBy: [
          {
            key: "name",
            label: t("fields.name")
          },
          {
            key: "created_at",
            label: t("fields.createdAt")
          },
          {
            key: "updated_at",
            label: t("fields.updatedAt")
          }
        ],
        commands: [
          {
            action: handleRemove,
            label: t("actions.remove"),
            shortcut: "r"
          }
        ],
        pageSize: PAGE_SIZE,
        pagination: true,
        search: true,
        noRecords: {
          message: t("apiKeyManagement.salesChannels.list.noRecordsMessage")
        }
      }
    )
  ] });
};
var SalesChannelActions = ({
  salesChannel,
  apiKey
}) => {
  const { t } = useTranslation2();
  const prompt = usePrompt2();
  const { mutateAsync } = useBatchRemoveSalesChannelsFromApiKey(apiKey);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("apiKeyManagement.removeSalesChannel.warning", {
        name: salesChannel.name
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync([salesChannel.id], {
      onSuccess: () => {
        toast2.success(
          t("apiKeyManagement.removeSalesChannel.successToast", {
            count: 1
          })
        );
      },
      onError: (err) => {
        toast2.error(err.message);
      }
    });
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
              to: `/settings/sales-channels/${salesChannel.id}/edit`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx3(Trash2, {}),
              label: t("actions.delete"),
              onClick: handleDelete
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useSalesChannelTableColumns();
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
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row, table }) => {
          const { apiKey } = table.options.meta;
          return /* @__PURE__ */ jsx3(SalesChannelActions, { salesChannel: row.original, apiKey });
        }
      })
    ],
    [base]
  );
};

// src/routes/api-key-management/api-key-management-detail/api-key-management-detail.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var ApiKeyManagementDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams();
  const { getWidgets } = useDashboardExtension();
  const { api_key, isLoading, isError, error } = useApiKey(id, {
    initialData
  });
  if (isLoading || !api_key) {
    return /* @__PURE__ */ jsx4(SingleColumnPageSkeleton, { showJSON: true, sections: 1 });
  }
  const isPublishable = api_key?.type === "publishable" /* PUBLISHABLE */;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs4(
    SingleColumnPage,
    {
      hasOutlet: true,
      showJSON: true,
      widgets: {
        before: getWidgets("api_key.details.before"),
        after: getWidgets("api_key.details.after")
      },
      data: api_key,
      children: [
        /* @__PURE__ */ jsx4(ApiKeyGeneralSection, { apiKey: api_key }),
        isPublishable && /* @__PURE__ */ jsx4(ApiKeySalesChannelSection, { apiKey: api_key })
      ]
    }
  );
};

// src/routes/api-key-management/api-key-management-detail/breadcrumb.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var ApiKeyManagementDetailBreadcrumb = (props) => {
  const { id } = props.params || {};
  const { api_key } = useApiKey(id, {
    initialData: props.data,
    enabled: Boolean(id)
  });
  if (!api_key) {
    return null;
  }
  return /* @__PURE__ */ jsx5("span", { children: api_key.title });
};

// src/routes/api-key-management/api-key-management-detail/loader.ts
var apiKeyDetailQuery = (id) => ({
  queryKey: apiKeysQueryKeys.detail(id),
  queryFn: async () => sdk.admin.apiKey.retrieve(id)
});
var apiKeyLoader = async ({ params }) => {
  const id = params.id;
  const query = apiKeyDetailQuery(id);
  return queryClient.ensureQueryData(query);
};
export {
  ApiKeyManagementDetailBreadcrumb as Breadcrumb,
  ApiKeyManagementDetail as Component,
  apiKeyLoader as loader
};
