import "./chunk-XRTVFYCW.mjs";
import {
  MetadataForm
} from "./chunk-ZKELVOBI.mjs";
import "./chunk-LPEUYMRK.mjs";
import "./chunk-OC7BQLYI.mjs";
import {
  useCustomerGroup,
  useUpdateCustomerGroup
} from "./chunk-6FTYBCYU.mjs";
import "./chunk-IUCDCPJU.mjs";
import "./chunk-6HTZNHPT.mjs";
import "./chunk-KL22UNUW.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-TEV2YX75.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/customer-groups/customer-group-metadata/customer-metadata.tsx
import { useParams } from "react-router-dom";
import { jsx } from "react/jsx-runtime";
var CustomerGroupMetadata = () => {
  const { id } = useParams();
  const { customer_group, isPending, isError, error } = useCustomerGroup(id);
  const { mutateAsync, isPending: isMutating } = useUpdateCustomerGroup(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(
    MetadataForm,
    {
      metadata: customer_group?.metadata,
      hook: mutateAsync,
      isPending,
      isMutating
    }
  );
};
export {
  CustomerGroupMetadata as Component
};
