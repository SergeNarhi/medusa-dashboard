import {
  DataGrid,
  createDataGridHelper,
  createDataGridPriceColumns
} from "./chunk-DAMWHQWJ.mjs";

// src/routes/locations/common/hooks/use-shipping-option-price-columns.tsx
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var columnHelper = createDataGridHelper();
var useShippingOptionPriceColumns = ({
  name,
  currencies = [],
  regions = [],
  pricePreferences = []
}) => {
  const { t } = useTranslation();
  return useMemo(() => {
    return [
      columnHelper.column({
        id: "name",
        header: t("fields.name"),
        cell: (context) => {
          return /* @__PURE__ */ jsx(DataGrid.ReadonlyCell, { context, children: name });
        }
      }),
      ...createDataGridPriceColumns({
        currencies,
        regions,
        pricePreferences,
        getFieldName: (context, value) => {
          if (context.column.id?.startsWith("currency_prices")) {
            return `currency_prices.${value}`;
          }
          return `region_prices.${value}`;
        },
        t
      })
    ];
  }, [t, currencies, regions, pricePreferences, name]);
};

export {
  useShippingOptionPriceColumns
};
