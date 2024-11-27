import { Heading } from "@medusajs/ui"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"

import { RouteDrawer } from "../../../components/modals"
import { useOrder } from "../../../hooks/api"
import { DEFAULT_FIELDS } from "../order-detail/constants"
import { CreateOrderTransferForm } from "./components/create-order-transfer-form"

export const OrderRequestTransfer = () => {
  const { t } = useTranslation()
  const params = useParams()
  const { order } = useOrder(params.id!, {
    fields: DEFAULT_FIELDS,
  })

  return (
    <RouteDrawer>
      <RouteDrawer.Header>
        <Heading>{t("orders.transfer.title")}</Heading>
      </RouteDrawer.Header>

      <CreateOrderTransferForm order={order} />
    </RouteDrawer>
  )
}
