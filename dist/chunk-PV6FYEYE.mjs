import {
  getLinkedFields
} from "./chunk-MYZNNCXD.mjs";

// src/routes/products/product-detail/constants.ts
var PRODUCT_DETAIL_FIELDS = getLinkedFields(
  "product",
  "*categories,-variants"
);

export {
  PRODUCT_DETAIL_FIELDS
};
