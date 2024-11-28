import {
  RemoveScrollBar,
  __assign,
  __rest,
  __spreadArray,
  createSidecarMedium,
  exportSidecar,
  fullWidthClassName,
  hideOthers,
  styleSingleton,
  useMergeRefs,
  zeroRightClassName
} from "./chunk-R4S4IZIL.mjs";

// ../../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@radix-ui/react-dialog/dist/index.module.js
import { useRef as $67UHm$useRef, createElement as $67UHm$createElement, useCallback as $67UHm$useCallback, forwardRef as $67UHm$forwardRef, Children as $67UHm$Children, useEffect as $67UHm$useEffect, Fragment as $67UHm$Fragment } from "react";

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/primitive/dist/index.module.js
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-compose-refs/dist/index.module.js
import { useCallback as $3vqmr$useCallback } from "react";
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return $3vqmr$useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-context/dist/index.module.js
import { createContext as $3bkAK$createContext, useMemo as $3bkAK$useMemo, createElement as $3bkAK$createElement, useContext as $3bkAK$useContext } from "react";
function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
  const Context = /* @__PURE__ */ $3bkAK$createContext(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = $3bkAK$useMemo(
      () => context,
      Object.values(context)
    );
    return /* @__PURE__ */ $3bkAK$createElement(Context.Provider, {
      value
    }, children);
  }
  function useContext(consumerName) {
    const context = $3bkAK$useContext(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [
    Provider,
    useContext
  ];
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae11092(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ $3bkAK$createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const value = $3bkAK$useMemo(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ $3bkAK$createElement(Context.Provider, {
        value
      }, children);
    }
    function useContext(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const context = $3bkAK$useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ $3bkAK$createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return $3bkAK$useMemo(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae11092,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return $3bkAK$useMemo(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-id/dist/index.module.js
import * as $2AODx$react from "react";

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
import { useLayoutEffect as $dxlwH$useLayoutEffect } from "react";
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? $dxlwH$useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-id/dist/index.module.js
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
import { useCallback as $bnPw9$useCallback, useState as $bnPw9$useState, useRef as $bnPw9$useRef, useEffect as $bnPw9$useEffect } from "react";

// node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
import { useRef as $lwiWj$useRef, useEffect as $lwiWj$useEffect, useMemo as $lwiWj$useMemo } from "react";
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = $lwiWj$useRef(callback);
  $lwiWj$useEffect(() => {
    callbackRef.current = callback;
  });
  return $lwiWj$useMemo(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = $bnPw9$useCallback((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = $bnPw9$useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = $bnPw9$useRef(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  $bnPw9$useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
import { createContext as $kqwpH$createContext, forwardRef as $kqwpH$forwardRef, useContext as $kqwpH$useContext, useState as $kqwpH$useState, useEffect as $kqwpH$useEffect, createElement as $kqwpH$createElement, useRef as $kqwpH$useRef } from "react";

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/primitive/dist/index.module.js
function $e42e1063c40fb3ef$export$b9ecd428b558ff102(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/@radix-ui/react-primitive/dist/index.module.js
import { forwardRef as $4q5Fq$forwardRef, useEffect as $4q5Fq$useEffect, createElement as $4q5Fq$createElement } from "react";
import { flushSync as $4q5Fq$flushSync } from "react-dom";

// node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.module.js
import { forwardRef as $9IrjX$forwardRef, Children as $9IrjX$Children, isValidElement as $9IrjX$isValidElement, createElement as $9IrjX$createElement, cloneElement as $9IrjX$cloneElement, Fragment as $9IrjX$Fragment } from "react";

// node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-compose-refs/dist/index.module.js
import { useCallback as $3vqmr$useCallback2 } from "react";
function $6ed0406888f73fc4$var$setRef2(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af2(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef2(ref, node)
  );
}

// node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.module.js
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ $9IrjX$forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = $9IrjX$Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if ($9IrjX$Children.count(newElement) > 1)
          return $9IrjX$Children.only(null);
        return /* @__PURE__ */ $9IrjX$isValidElement(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ $9IrjX$createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ $9IrjX$isValidElement(newElement) ? /* @__PURE__ */ $9IrjX$cloneElement(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ $9IrjX$createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ $9IrjX$forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ $9IrjX$isValidElement(children))
    return /* @__PURE__ */ $9IrjX$cloneElement(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af2(forwardedRef, children.ref)
    });
  return $9IrjX$Children.count(children) > 1 ? $9IrjX$Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ $9IrjX$createElement($9IrjX$Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ $9IrjX$isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler)
      overrideProps[propName] = (...args) => {
        childPropValue === null || childPropValue === void 0 || childPropValue(...args);
        slotPropValue === null || slotPropValue === void 0 || slotPropValue(...args);
      };
    else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/@radix-ui/react-primitive/dist/index.module.js
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node = /* @__PURE__ */ $4q5Fq$forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    $4q5Fq$useEffect(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ $4q5Fq$createElement(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    $4q5Fq$flushSync(
      () => target.dispatchEvent(event)
    );
}

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-compose-refs/dist/index.module.js
import { useCallback as $3vqmr$useCallback3 } from "react";
function $6ed0406888f73fc4$var$setRef3(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af3(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef3(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d052(...refs) {
  return $3vqmr$useCallback3($6ed0406888f73fc4$export$43e446d32b3d21af3(...refs), refs);
}

// ../../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.module.js
import { useEffect as $hPSQ5$useEffect } from "react";

// ../../../node_modules/@radix-ui/react-use-escape-keydown/node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
import { useRef as $lwiWj$useRef2, useEffect as $lwiWj$useEffect2, useMemo as $lwiWj$useMemo2 } from "react";
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a2(callback) {
  const callbackRef = $lwiWj$useRef2(callback);
  $lwiWj$useEffect2(() => {
    callbackRef.current = callback;
  });
  return $lwiWj$useMemo2(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// ../../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.module.js
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a2(onEscapeKeyDownProp);
  $hPSQ5$useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown
  ]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ $kqwpH$createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ $kqwpH$forwardRef((props, forwardedRef) => {
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = $kqwpH$useContext($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = $kqwpH$useState(null);
  const [, force] = $kqwpH$useState({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d052(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  });
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  });
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  });
  $kqwpH$useEffect(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = document.body.style.pointerEvents;
        document.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        document.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    disableOutsidePointerEvents,
    context
  ]);
  $kqwpH$useEffect(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  $kqwpH$useEffect(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ $kqwpH$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = $kqwpH$useRef(false);
  const handleClickRef = $kqwpH$useRef(() => {
  });
  $kqwpH$useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          document.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          document.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent2();
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      document.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("click", handleClickRef.current);
    };
  }, [
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = $kqwpH$useRef(false);
  $kqwpH$useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, [
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/@radix-ui/react-focus-scope/dist/index.module.js
import { forwardRef as $45QHv$forwardRef, useState as $45QHv$useState, useRef as $45QHv$useRef, useEffect as $45QHv$useEffect, useCallback as $45QHv$useCallback, createElement as $45QHv$createElement } from "react";

// node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-compose-refs/dist/index.module.js
import { useCallback as $3vqmr$useCallback4 } from "react";
function $6ed0406888f73fc4$var$setRef4(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af4(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef4(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d053(...refs) {
  return $3vqmr$useCallback4($6ed0406888f73fc4$export$43e446d32b3d21af4(...refs), refs);
}

// node_modules/@radix-ui/react-focus-scope/dist/index.module.js
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ $45QHv$forwardRef((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = $45QHv$useState(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = $45QHv$useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d053(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = $45QHv$useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  $45QHv$useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container1)
          return;
        if (!container1.contains(event.relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  $45QHv$useEffect(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = $45QHv$useCallback((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ $45QHv$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index = updatedArray.indexOf(item);
  if (index !== -1)
    updatedArray.splice(index, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/@radix-ui/react-portal/dist/index.module.js
import { forwardRef as $7SXl2$forwardRef, createElement as $7SXl2$createElement } from "react";
import $7SXl2$reactdom from "react-dom";
var $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ $7SXl2$forwardRef((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? /* @__PURE__ */ $7SXl2$reactdom.createPortal(/* @__PURE__ */ $7SXl2$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence/dist/index.module.js
import { Children as $iqq3r$Children, cloneElement as $iqq3r$cloneElement, useState as $iqq3r$useState, useRef as $iqq3r$useRef, useEffect as $iqq3r$useEffect, useCallback as $iqq3r$useCallback, useReducer as $iqq3r$useReducer } from "react";
import { flushSync as $iqq3r$flushSync } from "react-dom";
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return $iqq3r$useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : $iqq3r$Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ $iqq3r$cloneElement(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = $iqq3r$useState();
  const stylesRef = $iqq3r$useRef({});
  const prevPresentRef = $iqq3r$useRef(present);
  const prevAnimationNameRef = $iqq3r$useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  $iqq3r$useEffect(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          $iqq3r$flushSync(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: $iqq3r$useCallback((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/@radix-ui/react-focus-guards/dist/index.module.js
import { useEffect as $1wErz$useEffect } from "react";
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  $1wErz$useEffect(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
import * as React3 from "react";

// node_modules/react-remove-scroll/dist/es2015/UI.js
import * as React from "react";

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React.forwardRef(function(props, parentRef) {
  var ref = React.useRef(null);
  var _a = React.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React.createElement(
    React.Fragment,
    null,
    enabled && React.createElement(SideCar, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React.cloneElement(React.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
import * as React2 from "react";

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var elementCouldBeVScrolled = function(node) {
  var styles = window.getComputedStyle(node);
  return styles.overflowY !== "hidden" && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowY === "visible");
};
var elementCouldBeHScrolled = function(node) {
  var styles = window.getComputedStyle(node);
  return styles.overflowX !== "hidden" && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowX === "visible");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React2.useRef([]);
  var touchStartRef = React2.useRef([0, 0]);
  var activeAxis = React2.useRef();
  var id = React2.useState(idCounter++)[0];
  var Style = React2.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React2.useRef(props);
  React2.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React2.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React2.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React2.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      event.preventDefault();
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        event.preventDefault();
      }
    }
  }, []);
  var shouldCancel = React2.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React2.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React2.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React2.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React2.useEffect(function() {
    lockStack.push(Style);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React2.createElement(
    React2.Fragment,
    null,
    inert ? React2.createElement(Style, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React2.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React3.forwardRef(function(props, ref) {
  return React3.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-slot/dist/index.module.js
import { forwardRef as $9IrjX$forwardRef2, Children as $9IrjX$Children2, isValidElement as $9IrjX$isValidElement2, createElement as $9IrjX$createElement2, cloneElement as $9IrjX$cloneElement2, Fragment as $9IrjX$Fragment2 } from "react";
var $5e63c961fc1ce211$export$8c6ed5c666ac13602 = /* @__PURE__ */ $9IrjX$forwardRef2((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = $9IrjX$Children2.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable2);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if ($9IrjX$Children2.count(newElement) > 1)
          return $9IrjX$Children2.only(null);
        return /* @__PURE__ */ $9IrjX$isValidElement2(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ $9IrjX$createElement2($5e63c961fc1ce211$var$SlotClone2, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ $9IrjX$isValidElement2(newElement) ? /* @__PURE__ */ $9IrjX$cloneElement2(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ $9IrjX$createElement2($5e63c961fc1ce211$var$SlotClone2, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac13602.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone2 = /* @__PURE__ */ $9IrjX$forwardRef2((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ $9IrjX$isValidElement2(children))
    return /* @__PURE__ */ $9IrjX$cloneElement2(children, {
      ...$5e63c961fc1ce211$var$mergeProps2(slotProps, children.props),
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
    });
  return $9IrjX$Children2.count(children) > 1 ? $9IrjX$Children2.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone2.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d452 = ({ children }) => {
  return /* @__PURE__ */ $9IrjX$createElement2($9IrjX$Fragment2, null, children);
};
function $5e63c961fc1ce211$var$isSlottable2(child) {
  return /* @__PURE__ */ $9IrjX$isValidElement2(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d452;
}
function $5e63c961fc1ce211$var$mergeProps2(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler)
      overrideProps[propName] = (...args) => {
        childPropValue === null || childPropValue === void 0 || childPropValue(...args);
        slotPropValue === null || slotPropValue === void 0 || slotPropValue(...args);
      };
    else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/@radix-ui/react-dialog/dist/index.module.js
var $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = $67UHm$useRef(null);
  const contentRef = $67UHm$useRef(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ $67UHm$createElement($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: $67UHm$useCallback(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
var $5d3850c4d0b4e6c7$var$TRIGGER_NAME = "DialogTrigger";
var $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = /* @__PURE__ */ $67UHm$forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...triggerProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TRIGGER_NAME, __scopeDialog);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  return /* @__PURE__ */ $67UHm$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, triggerProps, {
    ref: composedTriggerRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
});
var $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
var [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
var $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ $67UHm$createElement($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, $67UHm$Children.map(
    children,
    (child) => /* @__PURE__ */ $67UHm$createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ $67UHm$createElement($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ $67UHm$forwardRef((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ $67UHm$createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ $67UHm$createElement($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ $67UHm$forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $67UHm$createElement(Combination_default, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac13602,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ $67UHm$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
var $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
var $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ $67UHm$forwardRef((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return /* @__PURE__ */ $67UHm$createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ $67UHm$createElement($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ $67UHm$createElement($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ $67UHm$forwardRef((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = $67UHm$useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
  $67UHm$useEffect(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ $67UHm$createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ $67UHm$forwardRef((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = $67UHm$useRef(false);
  return /* @__PURE__ */ $67UHm$createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented)
        hasInteractedOutsideRef.current = true;
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
    }
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ $67UHm$forwardRef((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = $67UHm$useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ $67UHm$createElement($67UHm$Fragment, null, /* @__PURE__ */ $67UHm$createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ $67UHm$createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
var $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
var $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /* @__PURE__ */ $67UHm$forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...titleProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
  return /* @__PURE__ */ $67UHm$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
    id: context.titleId
  }, titleProps, {
    ref: forwardedRef
  }));
});
var $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = "DialogDescription";
var $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /* @__PURE__ */ $67UHm$forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
  return /* @__PURE__ */ $67UHm$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends({
    id: context.descriptionId
  }, descriptionProps, {
    ref: forwardedRef
  }));
});
var $5d3850c4d0b4e6c7$var$CLOSE_NAME = "DialogClose";
var $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /* @__PURE__ */ $67UHm$forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...closeProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
  return /* @__PURE__ */ $67UHm$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button"
  }, closeProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onClick,
      () => context.onOpenChange(false)
    )
  }));
});
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
var $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = "DialogTitleWarning";
var [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
  contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
  titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
  docsSlug: "dialog"
});
var $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
var $5d3850c4d0b4e6c7$export$41fb9f06171c75f4 = $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88;
var $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
var $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
var $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
var $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
var $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
var $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;

export {
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$41fb9f06171c75f4,
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$f99233281efd08a0,
  $5d3850c4d0b4e6c7$export$393edc798c47379d,
  $5d3850c4d0b4e6c7$export$f39c2d165cd861fe
};
