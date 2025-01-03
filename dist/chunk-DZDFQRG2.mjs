import {
  ordersQueryKeys
} from "./chunk-FQ3W3CD6.mjs";
import {
  reservationItemsQueryKeys
} from "./chunk-M7TK4QZI.mjs";
import {
  inventoryItemsQueryKeys
} from "./chunk-VZXSXNQY.mjs";
import {
  queryClient
} from "./chunk-FXYH54JP.mjs";
import {
  sdk
} from "./chunk-TEV2YX75.mjs";

// src/hooks/api/order-edits.tsx
import { useMutation } from "@tanstack/react-query";
var useCreateOrderEdit = (orderId, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.orderEdit.initiateRequest(payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.details()
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(orderId)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useRequestOrderEdit = (id2, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.orderEdit.request(id2),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.details()
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.changes(id2)
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.lineItems(id2)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useConfirmOrderEdit = (id2, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.orderEdit.confirm(id2),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.details()
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.changes(id2)
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.lineItems(id2)
      });
      queryClient.invalidateQueries({
        queryKey: reservationItemsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.details()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useCancelOrderEdit = (orderId, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.orderEdit.cancelRequest(orderId),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.details()
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(orderId)
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.changes(orderId)
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.lineItems(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useAddOrderEditItems = (id2, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.orderEdit.addItems(id2, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateOrderEditOriginalItem = (id2, options) => {
  return useMutation({
    mutationFn: ({
      itemId,
      ...payload
    }) => {
      return sdk.admin.orderEdit.updateOriginalItem(id2, itemId, payload);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateOrderEditAddedItem = (id2, options) => {
  return useMutation({
    mutationFn: ({
      actionId,
      ...payload
    }) => {
      return sdk.admin.orderEdit.updateAddedItem(id2, actionId, payload);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useRemoveOrderEditItem = (id2, options) => {
  return useMutation({
    mutationFn: (actionId) => sdk.admin.orderEdit.removeAddedItem(id2, actionId),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  useCreateOrderEdit,
  useRequestOrderEdit,
  useConfirmOrderEdit,
  useCancelOrderEdit,
  useAddOrderEditItems,
  useUpdateOrderEditOriginalItem,
  useUpdateOrderEditAddedItem,
  useRemoveOrderEditItem
};
