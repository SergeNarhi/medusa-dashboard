import {
  useCustomerGroupTableColumns
} from "./chunk-QIWEFQ5Y.mjs";
import {
  useOrderTableColumns
} from "./chunk-NLR7MGM2.mjs";
import "./chunk-B4FQDBC3.mjs";
import "./chunk-LHJ6JQGA.mjs";
import "./chunk-XFSJ7YIN.mjs";
import "./chunk-FSMQADBD.mjs";
import "./chunk-OI7BBNYW.mjs";
import "./chunk-MWVM4TYO.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-ADOCJB6L.mjs";
import {
  useCustomerGroupTableQuery
} from "./chunk-MOSRJHJ3.mjs";
import {
  useCustomerGroupTableFilters
} from "./chunk-DLZWPHHO.mjs";
import {
  useOrderTableQuery
} from "./chunk-XMAWMECC.mjs";
import {
  useOrderTableFilters
} from "./chunk-PKBZNOGD.mjs";
import {
  SingleColumnPage
} from "./chunk-2RQLKDBF.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-546ODTW3.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  SingleColumnPageSkeleton
} from "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-LT6HYBIG.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-MG2GSM3O.mjs";
import "./chunk-KHOKHZC6.mjs";
import "./chunk-6OFYTEJZ.mjs";
import "./chunk-LJQNRGKD.mjs";
import "./chunk-C2BURFUV.mjs";
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
import "./chunk-CMDEP2Y7.mjs";
import "./chunk-6IW74BRC.mjs";
import {
  useBatchCustomerCustomerGroups,
  useCustomer,
  useCustomerGroups,
  useDeleteCustomer,
  useRemoveCustomersFromGroup
} from "./chunk-6FTYBCYU.mjs";
import "./chunk-C7J3KXU4.mjs";
import "./chunk-STLKFKTM.mjs";
import "./chunk-22SBRBNJ.mjs";
import "./chunk-7IYWGNFM.mjs";
import {
  useOrders
} from "./chunk-YHL6YEHM.mjs";
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
  productsQueryKeys
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

// src/routes/customers/customer-detail/breadcrumb.tsx
import { jsx } from "react/jsx-runtime";
var CustomerDetailBreadcrumb = (props) => {
  const { id } = props.params || {};
  const { customer } = useCustomer(id, void 0, {
    initialData: props.data,
    enabled: Boolean(id)
  });
  if (!customer) {
    return null;
  }
  const name = [customer.first_name, customer.last_name].filter(Boolean).join(" ");
  const display = name || customer.email;
  return /* @__PURE__ */ jsx("span", { children: display });
};

// src/routes/customers/customer-detail/customer-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/customers/customer-detail/components/customer-general-section/customer-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import {
  Container,
  Heading,
  StatusBadge,
  Text,
  toast,
  usePrompt
} from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var CustomerGeneralSection = ({
  customer
}) => {
  const { t: t2 } = useTranslation();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const { mutateAsync } = useDeleteCustomer(customer.id);
  const name = [customer.first_name, customer.last_name].filter(Boolean).join(" ");
  const statusColor = customer.has_account ? "green" : "orange";
  const statusText = customer.has_account ? t2("customers.fields.registered") : t2("customers.fields.guest");
  const handleDelete = async () => {
    const res = await prompt({
      title: t2("customers.delete.title"),
      description: t2("customers.delete.description", {
        email: customer.email
      }),
      verificationInstruction: t2("general.typeToConfirm"),
      verificationText: customer.email,
      confirmText: t2("actions.delete"),
      cancelText: t2("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t2("customers.delete.successToast", {
            email: customer.email
          })
        );
        navigate("/customers", { replace: true });
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading, { children: customer.email }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
        /* @__PURE__ */ jsx2(StatusBadge, { color: statusColor, children: statusText }),
        /* @__PURE__ */ jsx2(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    label: t2("actions.edit"),
                    icon: /* @__PURE__ */ jsx2(PencilSquare, {}),
                    to: "edit"
                  }
                ]
              },
              {
                actions: [
                  {
                    label: t2("actions.delete"),
                    icon: /* @__PURE__ */ jsx2(Trash, {}),
                    onClick: handleDelete
                  }
                ]
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", weight: "plus", children: t2("fields.name") }),
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: name || "-" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", weight: "plus", children: t2("fields.company") }),
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: customer.company_name || "-" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", weight: "plus", children: t2("fields.phone") }),
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: customer.phone || "-" })
    ] })
  ] });
};

// src/routes/customers/customer-detail/components/customer-group-section/customer-group-section.tsx
import {
  Button,
  Checkbox,
  Container as Container2,
  Heading as Heading2,
  toast as toast2,
  usePrompt as usePrompt2
} from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { t } from "i18next";
import { useMemo, useState } from "react";
import { PencilSquare as PencilSquare2, Trash as Trash2 } from "@medusajs/icons";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation as useTranslation2 } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var PREFIX = "cusgr";
var CustomerGroupSection = ({
  customer
}) => {
  const prompt = usePrompt2();
  const [rowSelection, setRowSelection] = useState({});
  const { raw, searchParams } = useCustomerGroupTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { customer_groups, count, isLoading, isError, error } = useCustomerGroups(
    {
      ...searchParams,
      fields: "+customers.id",
      customers: { id: customer.id }
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const { mutateAsync: batchCustomerCustomerGroups } = useBatchCustomerCustomerGroups(customer.id);
  const filters = useCustomerGroupTableFilters();
  const columns = useColumns(customer.id);
  const { table } = useDataTable({
    data: customer_groups ?? [],
    columns,
    count,
    getRowId: (row) => row.id,
    enablePagination: true,
    enableRowSelection: true,
    pageSize: PAGE_SIZE,
    prefix: PREFIX,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    }
  });
  const handleRemove = async () => {
    const customerGroupIds = Object.keys(rowSelection);
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("customers.groups.removeMany", {
        groups: customer_groups?.filter((g) => customerGroupIds.includes(g.id)).map((g) => g.name).join(",")
      }),
      confirmText: t("actions.remove"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    try {
      await batchCustomerCustomerGroups({ remove: customerGroupIds });
      toast2.success(
        t("customers.groups.removed.success", {
          groups: customer_groups.filter((cg) => customerGroupIds.includes(cg.id)).map((cg) => cg?.name)
        })
      );
    } catch (e) {
      toast2.error(e.message);
    }
  };
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Heading2, { level: "h2", children: t("customerGroups.domain") }),
      /* @__PURE__ */ jsx3(Link, { to: `/customers/${customer.id}/add-customer-groups`, children: /* @__PURE__ */ jsx3(Button, { variant: "secondary", size: "small", children: t("general.add") }) })
    ] }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        isLoading,
        count,
        prefix: PREFIX,
        navigateTo: (row) => `/customer-groups/${row.id}`,
        filters,
        search: true,
        pagination: true,
        orderBy: [
          { key: "name", label: t("fields.name") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        commands: [
          {
            action: handleRemove,
            label: t("actions.remove"),
            shortcut: "r"
          }
        ],
        queryObject: raw,
        noRecords: {
          message: t("customers.groups.list.noRecordsMessage")
        }
      }
    )
  ] });
};
var CustomerGroupRowActions = ({
  group,
  customerId
}) => {
  const prompt = usePrompt2();
  const { t: t2 } = useTranslation2();
  const { mutateAsync } = useRemoveCustomersFromGroup(group.id);
  const onRemove = async () => {
    const res = await prompt({
      title: t2("general.areYouSure"),
      description: t2("customers.groups.remove", {
        name: group.name
      }),
      confirmText: t2("actions.remove"),
      cancelText: t2("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync([customerId], {
      onError: (error) => {
        toast2.error(error.message);
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
              label: t2("actions.edit"),
              icon: /* @__PURE__ */ jsx3(PencilSquare2, {}),
              to: `/customer-groups/${group.id}/edit`
            },
            {
              label: t2("actions.remove"),
              onClick: onRemove,
              icon: /* @__PURE__ */ jsx3(Trash2, {})
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = (customerId) => {
  const columns = useCustomerGroupTableColumns();
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
        cell: ({ row }) => /* @__PURE__ */ jsx3(
          CustomerGroupRowActions,
          {
            group: row.original,
            customerId
          }
        )
      })
    ],
    [columns]
  );
};

// src/routes/customers/customer-detail/components/customer-order-section/customer-order-section.tsx
import { ArrowPath } from "@medusajs/icons";
import { Container as Container3, Heading as Heading3 } from "@medusajs/ui";
import { keepPreviousData as keepPreviousData2 } from "@tanstack/react-query";
import { createColumnHelper as createColumnHelper2 } from "@tanstack/react-table";
import { useMemo as useMemo2 } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var PREFIX2 = "cusord";
var PAGE_SIZE2 = 10;
var DEFAULT_RELATIONS = "*customer,*items,*sales_channel";
var DEFAULT_FIELDS = "id,status,display_id,created_at,email,fulfillment_status,payment_status,total,currency_code";
var CustomerOrderSection = ({
  customer
}) => {
  const { t: t2 } = useTranslation3();
  const { searchParams, raw } = useOrderTableQuery({
    pageSize: PAGE_SIZE2,
    prefix: PREFIX2
  });
  const { orders, count, isLoading, isError, error } = useOrders(
    {
      customer_id: customer.id,
      fields: DEFAULT_FIELDS + "," + DEFAULT_RELATIONS,
      ...searchParams
    },
    {
      placeholderData: keepPreviousData2
    }
  );
  const columns = useColumns2();
  const filters = useOrderTableFilters();
  const { table } = useDataTable({
    data: orders ?? [],
    columns,
    enablePagination: true,
    count,
    pageSize: PAGE_SIZE2,
    prefix: PREFIX2
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(Container3, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsx4("div", { className: "flex items-center justify-between px-6 py-4", children: /* @__PURE__ */ jsx4(Heading3, { level: "h2", children: t2("orders.domain") }) }),
    /* @__PURE__ */ jsx4(
      DataTable,
      {
        columns,
        table,
        pagination: true,
        navigateTo: (row) => `/orders/${row.original.id}`,
        filters,
        count,
        isLoading,
        pageSize: PAGE_SIZE2,
        orderBy: [
          { key: "display_id", label: t2("orders.fields.displayId") },
          { key: "created_at", label: t2("fields.createdAt") },
          { key: "updated_at", label: t2("fields.updatedAt") }
        ],
        search: true,
        queryObject: raw,
        prefix: PREFIX2
      }
    )
  ] });
};
var columnHelper2 = createColumnHelper2();
var useColumns2 = () => {
  const base = useOrderTableColumns({ exclude: ["customer"] });
  return useMemo2(
    () => [
      ...base
      // TODO: REENABLE WHEN TRANSFER OWNERSHIP IS IMPLEMENTED
      // columnHelper.display({
      //   id: "actions",
      //   cell: ({ row }) => <CustomerOrderActions order={row.original} />,
      // }),
    ],
    [base]
  );
};

// src/routes/customers/customer-detail/customer-detail.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var CustomerDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { customer, isLoading, isError, error } = useCustomer(id, void 0, {
    initialData
  });
  const { getWidgets } = useDashboardExtension();
  if (isLoading || !customer) {
    return /* @__PURE__ */ jsx5(SingleColumnPageSkeleton, { sections: 2, showJSON: true, showMetadata: true });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs4(
    SingleColumnPage,
    {
      widgets: {
        before: getWidgets("customer.details.before"),
        after: getWidgets("customer.details.after")
      },
      data: customer,
      hasOutlet: true,
      showJSON: true,
      showMetadata: true,
      children: [
        /* @__PURE__ */ jsx5(CustomerGeneralSection, { customer }),
        /* @__PURE__ */ jsx5(CustomerOrderSection, { customer }),
        /* @__PURE__ */ jsx5(CustomerGroupSection, { customer })
      ]
    }
  );
};

// src/routes/customers/customer-detail/loader.ts
var customerDetailQuery = (id) => ({
  queryKey: productsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.customer.retrieve(id)
});
var customerLoader = async ({ params }) => {
  const id = params.id;
  const query = customerDetailQuery(id);
  return queryClient.ensureQueryData(query);
};
export {
  CustomerDetailBreadcrumb as Breadcrumb,
  CustomerDetail as Component,
  customerLoader as loader
};