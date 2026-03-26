import {
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  onMounted,
  ref,
  withDirectives
} from "./chunk-HSBJV7SW.js";
import {
  bootstrapLazy,
  globalScripts
} from "./chunk-PITUHEHS.js";
import "./chunk-QKQ47GQZ.js";

// node_modules/@stencil/vue-output-target/dist/runtime.js
var UPDATE_VALUE_EVENT = "update:modelValue";
var MODEL_VALUE = "modelValue";
var ROUTER_LINK_VALUE = "routerLink";
var NAV_MANAGER = "navManager";
var ROUTER_PROP_PREFIX = "router";
var ARIA_PROP_PREFIX = "aria";
var EMPTY_PROP = Symbol();
var DEFAULT_EMPTY_PROP = { default: EMPTY_PROP };
var getComponentClasses = (classes) => {
  return (classes == null ? void 0 : classes.split(" ")) || [];
};
var getElementClasses = (el, componentClasses, defaultClasses = []) => {
  const combinedClasses = /* @__PURE__ */ new Set([
    ...Array.from((el == null ? void 0 : el.classList) || []),
    ...Array.from(componentClasses),
    ...defaultClasses
  ]);
  return Array.from(combinedClasses);
};
var defineContainer = (name, defineCustomElement, componentProps = [], emitProps = [], modelProp, modelUpdateEvent) => {
  if (defineCustomElement !== void 0) {
    defineCustomElement();
  }
  const emits = emitProps;
  const props = [ROUTER_LINK_VALUE, ...componentProps].reduce((acc, prop) => {
    acc[prop] = DEFAULT_EMPTY_PROP;
    return acc;
  }, {});
  if (modelProp) {
    emits.push(UPDATE_VALUE_EVENT);
    props[MODEL_VALUE] = DEFAULT_EMPTY_PROP;
  }
  return defineComponent((props2, { attrs, slots, emit }) => {
    var _a;
    let modelPropValue = modelProp ? props2[modelProp] : void 0;
    const containerRef = ref();
    const classes = new Set(getComponentClasses(attrs.class));
    onMounted(() => {
      emitProps.forEach((eventName) => {
        var _a2;
        (_a2 = containerRef.value) == null ? void 0 : _a2.addEventListener(eventName, (e16) => {
          emit(eventName, e16);
        });
      });
    });
    const vModelDirective = {
      created: (el) => {
        const eventsNames = Array.isArray(modelUpdateEvent) ? modelUpdateEvent : [modelUpdateEvent];
        eventsNames.forEach((eventName) => {
          el.addEventListener(eventName, (e16) => {
            if (e16.target.tagName === el.tagName && modelProp) {
              modelPropValue = (e16 == null ? void 0 : e16.target)[modelProp];
              emit(UPDATE_VALUE_EVENT, modelPropValue);
            }
          });
        });
      }
    };
    const currentInstance = getCurrentInstance();
    const hasRouter = (_a = currentInstance == null ? void 0 : currentInstance.appContext) == null ? void 0 : _a.provides[NAV_MANAGER];
    const navManager = hasRouter ? inject(NAV_MANAGER) : void 0;
    const elBeforeHydrate = currentInstance == null ? void 0 : currentInstance.vnode.el;
    const handleRouterLink = (ev) => {
      const { routerLink } = props2;
      if (routerLink === EMPTY_PROP)
        return;
      if (navManager !== void 0) {
        ev.preventDefault();
        let navigationPayload = { event: ev };
        for (const key in props2) {
          const value = props2[key];
          if (props2.hasOwnProperty(key) && key.startsWith(ROUTER_PROP_PREFIX) && value !== EMPTY_PROP) {
            navigationPayload[key] = value;
          }
        }
        navManager.navigate(navigationPayload);
      } else {
        console.warn("Tried to navigate, but no router was found. Make sure you have mounted Vue Router.");
      }
    };
    return () => {
      modelPropValue = props2[modelProp];
      getComponentClasses(attrs.class).forEach((value) => {
        classes.add(value);
      });
      const oldClick = props2.onClick;
      const handleClick = (ev) => {
        if (oldClick !== void 0) {
          oldClick(ev);
        }
        if (!ev.defaultPrevented) {
          handleRouterLink(ev);
        }
      };
      const propsToAdd = {
        ref: containerRef,
        class: getElementClasses(elBeforeHydrate, classes),
        onClick: handleClick
      };
      for (const key in props2) {
        const value = props2[key];
        if (props2.hasOwnProperty(key) && value !== EMPTY_PROP || key.startsWith(ARIA_PROP_PREFIX)) {
          propsToAdd[key] = value;
        }
        const eventHandlerKey = "on" + key.slice(0, 1).toUpperCase() + key.slice(1);
        const eventHandler = attrs[eventHandlerKey];
        if (containerRef.value && attrs.hasOwnProperty(eventHandlerKey) && "addEventListener" in containerRef.value) {
          containerRef.value.addEventListener(key, eventHandler);
        }
      }
      if (modelProp) {
        if (props2[MODEL_VALUE] !== EMPTY_PROP) {
          propsToAdd[modelProp] = props2[MODEL_VALUE];
        } else if (modelPropValue !== EMPTY_PROP) {
          propsToAdd[modelProp] = modelPropValue;
        }
      }
      if (ROUTER_LINK_VALUE in props2 && props2[ROUTER_LINK_VALUE] !== EMPTY_PROP) {
        propsToAdd.href = props2[ROUTER_LINK_VALUE];
      }
      const node = h(name, propsToAdd, slots.default && slots.default());
      return modelProp === void 0 ? node : withDirectives(node, [[vModelDirective]]);
    };
  }, {
    name,
    props,
    emits
  });
};

// node_modules/@gcds-core/components/dist/components/p-BQgY5XdM.js
var e = "";
var t = "gcds";
var n = { hydratedSelectorName: "hydrated", lazyLoad: false, updatable: true };
var r = Object.defineProperty;
var i = (e16, t26) => {
  for (var n16 in t26) r(e16, n16, { get: t26[n16], enumerable: true });
};
var s = ((e16) => {
  e16["Undefined"] = "undefined";
  e16["Null"] = "null";
  e16["String"] = "string";
  e16["Number"] = "number";
  e16["SpecialNumber"] = "number";
  e16["Boolean"] = "boolean";
  e16["BigInt"] = "bigint";
  return e16;
})(s || {});
var l = ((e16) => {
  e16["Array"] = "array";
  e16["Date"] = "date";
  e16["Map"] = "map";
  e16["Object"] = "object";
  e16["RegularExpression"] = "regexp";
  e16["Set"] = "set";
  e16["Channel"] = "channel";
  e16["Symbol"] = "symbol";
  return e16;
})(l || {});
var o = "type";
var f = "value";
var a = "serialized:";
var c = (e16) => {
  if (e16.__stencil__getHostRef) {
    return e16.__stencil__getHostRef();
  }
  return void 0;
};
var u = (e16, t26) => {
  const n16 = { t: 0, $hostElement$: e16, i: t26, l: /* @__PURE__ */ new Map() };
  {
    n16.o = new Promise((e17) => n16.u = e17);
    e16["s-p"] = [];
    e16["s-rc"] = [];
  }
  const r14 = n16;
  e16.__stencil__getHostRef = () => r14;
  return r14;
};
var v = (e16, t26) => t26 in e16;
var d = (e16, t26) => (0, console.error)(e16, t26);
var p = /* @__PURE__ */ new Map();
var h2 = "r";
var $ = "o";
var b = "s";
var y = "t";
var m = "c";
var g = "s-id";
var w = "sty-id";
var S = "c-id";
var j = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var O = "http://www.w3.org/1999/xlink";
var N = ["formAssociatedCallback", "formResetCallback", "formDisabledCallback", "formStateRestoreCallback"];
var x = typeof window !== "undefined" ? window : {};
var k = x.HTMLElement || class {
};
var E = { t: 0, v: "", jmp: (e16) => e16(), raf: (e16) => requestAnimationFrame(e16), ael: (e16, t26, n16, r14) => e16.addEventListener(t26, n16, r14), rel: (e16, t26, n16, r14) => e16.removeEventListener(t26, n16, r14), ce: (e16, t26) => new CustomEvent(e16, t26) };
var C = (() => {
  var e16;
  let t26 = false;
  try {
    (e16 = x.document) == null ? void 0 : e16.addEventListener("e", null, Object.defineProperty({}, "passive", { get() {
      t26 = true;
    } }));
  } catch (e17) {
  }
  return t26;
})();
var I = (e16) => Promise.resolve(e16);
var M = (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e16) {
  }
  return false;
})();
var _ = false;
var A = [];
var R = [];
var U = (e16, t26) => (n16) => {
  e16.push(n16);
  if (!_) {
    _ = true;
    if (t26 && E.t & 4) {
      P(D);
    } else {
      E.raf(D);
    }
  }
};
var L = (e16) => {
  for (let t26 = 0; t26 < e16.length; t26++) {
    try {
      e16[t26](performance.now());
    } catch (e17) {
      d(e17);
    }
  }
  e16.length = 0;
};
var D = () => {
  L(A);
  {
    L(R);
    if (_ = A.length > 0) {
      E.raf(D);
    }
  }
};
var P = (e16) => I().then(e16);
var F = U(R, true);
var z = (e16) => {
  e16 = typeof e16;
  return e16 === "object" || e16 === "function";
};
function H(e16) {
  var t26, n16, r14;
  return (r14 = (n16 = (t26 = e16.head) == null ? void 0 : t26.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : n16.getAttribute("content")) != null ? r14 : void 0;
}
var J = (e16) => e16.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var Y = class e2 {
  static fromLocalValue(t26) {
    const n16 = t26[o];
    const r14 = f in t26 ? t26[f] : void 0;
    switch (n16) {
      case "string":
        return r14;
      case "boolean":
        return r14;
      case "bigint":
        return BigInt(r14);
      case "undefined":
        return void 0;
      case "null":
        return null;
      case "number":
        if (r14 === "NaN") return NaN;
        if (r14 === "-0") return -0;
        if (r14 === "Infinity") return Infinity;
        if (r14 === "-Infinity") return -Infinity;
        return r14;
      case "array":
        return r14.map((t28) => e2.fromLocalValue(t28));
      case "date":
        return new Date(r14);
      case "map":
        const t27 = /* @__PURE__ */ new Map();
        for (const [n17, i13] of r14) {
          const r15 = typeof n17 === "object" && n17 !== null ? e2.fromLocalValue(n17) : n17;
          const s14 = e2.fromLocalValue(i13);
          t27.set(r15, s14);
        }
        return t27;
      case "object":
        const i12 = {};
        for (const [t28, n17] of r14) {
          i12[t28] = e2.fromLocalValue(n17);
        }
        return i12;
      case "regexp":
        const { pattern: s13, flags: l17 } = r14;
        return new RegExp(s13, l17);
      case "set":
        const o12 = /* @__PURE__ */ new Set();
        for (const t28 of r14) {
          o12.add(e2.fromLocalValue(t28));
        }
        return o12;
      case "symbol":
        return Symbol(r14);
      default:
        throw new Error(`Unsupported type: ${n16}`);
    }
  }
  static fromLocalValueArray(t26) {
    return t26.map((t27) => e2.fromLocalValue(t27));
  }
  static isLocalValueObject(e16) {
    if (typeof e16 !== "object" || e16 === null) {
      return false;
    }
    if (!e16.hasOwnProperty(o)) {
      return false;
    }
    const t26 = e16[o];
    const n16 = Object.values({ ...s, ...l }).includes(t26);
    if (!n16) {
      return false;
    }
    if (t26 !== "null" && t26 !== "undefined") {
      return e16.hasOwnProperty(f);
    }
    return true;
  }
};
var q = {};
i(q, { err: () => T, map: () => G, ok: () => B, unwrap: () => K, unwrapErr: () => Q });
var B = (e16) => ({ isOk: true, isErr: false, value: e16 });
var T = (e16) => ({ isOk: false, isErr: true, value: e16 });
function G(e16, t26) {
  if (e16.isOk) {
    const n16 = t26(e16.value);
    if (n16 instanceof Promise) {
      return n16.then((e17) => B(e17));
    } else {
      return B(n16);
    }
  }
  if (e16.isErr) {
    const t27 = e16.value;
    return T(t27);
  }
  throw "should never get here";
}
var K = (e16) => {
  if (e16.isOk) {
    return e16.value;
  } else {
    throw e16.value;
  }
};
var Q = (e16) => {
  if (e16.isErr) {
    return e16.value;
  } else {
    throw e16.value;
  }
};
function X(e16) {
  if (typeof e16 !== "string" || !e16.startsWith(a)) {
    return e16;
  }
  return Y.fromLocalValue(JSON.parse(atob(e16.slice(a.length))));
}
function Z(t26) {
  const n16 = this.attachShadow({ mode: "open", delegatesFocus: !!(t26.t & 16) });
  if (M) {
    const t27 = new CSSStyleSheet();
    t27.replaceSync(e);
    n16.adoptedStyleSheets.push(t27);
  }
}
var ee = (e16) => {
  const t26 = [];
  for (let n16 = 0; n16 < e16.length; n16++) {
    const r14 = e16[n16]["s-nr"] || void 0;
    if (r14 && r14.isConnected) {
      t26.push(r14);
    }
  }
  return t26;
};
function te(e16, t26, n16) {
  let r14 = 0;
  let i12 = [];
  let s13;
  for (; r14 < e16.length; r14++) {
    s13 = e16[r14];
    if (s13["s-sr"] && (!t26 || s13["s-hn"] === t26) && (n16 === void 0 || re(s13) === n16)) {
      i12.push(s13);
      if (typeof n16 !== "undefined") return i12;
    }
    i12 = [...i12, ...te(s13.childNodes, t26, n16)];
  }
  return i12;
}
var ne = (e16, t26, n16, r14) => {
  if (e16["s-ol"] && e16["s-ol"].isConnected) {
    return;
  }
  const i12 = document.createTextNode("");
  i12["s-nr"] = e16;
  if (!t26["s-cr"] || !t26["s-cr"].parentNode) return;
  const s13 = t26["s-cr"].parentNode;
  const l17 = $e(s13, "appendChild");
  if (typeof r14 !== "undefined") {
    i12["s-oo"] = r14;
    const e17 = $e(s13, "childNodes");
    const t27 = [i12];
    e17.forEach((e18) => {
      if (e18["s-nr"]) t27.push(e18);
    });
    t27.sort((e18, t28) => {
      if (!e18["s-oo"] || e18["s-oo"] < (t28["s-oo"] || 0)) return -1;
      else if (!t28["s-oo"] || t28["s-oo"] < e18["s-oo"]) return 1;
      return 0;
    });
    t27.forEach((e18) => l17.call(s13, e18));
  } else {
    l17.call(s13, i12);
  }
  e16["s-ol"] = i12;
  e16["s-sh"] = t26["s-hn"];
};
var re = (e16) => typeof e16["s-sn"] === "string" ? e16["s-sn"] : e16.nodeType === 1 && e16.getAttribute("slot") || void 0;
function ie(e16) {
  if (e16.assignedElements || e16.assignedNodes || !e16["s-sr"]) return;
  const t26 = (t27) => (function(e17) {
    const n16 = [];
    const r14 = this["s-sn"];
    if (e17 == null ? void 0 : e17.flatten) {
      console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
    }
    const i12 = this["s-cr"].parentElement;
    const s13 = i12.__childNodes ? i12.childNodes : ee(i12.childNodes);
    s13.forEach((e18) => {
      if (r14 === re(e18)) {
        n16.push(e18);
      }
    });
    if (t27) {
      return n16.filter((e18) => e18.nodeType === 1);
    }
    return n16;
  }).bind(e16);
  e16.assignedElements = t26(true);
  e16.assignedNodes = t26(false);
}
function se(e16) {
  e16.dispatchEvent(new CustomEvent("slotchange", { bubbles: false, cancelable: false, composed: false }));
}
function le(e16, t26) {
  var n16;
  t26 = t26 || ((n16 = e16["s-ol"]) == null ? void 0 : n16.parentElement);
  if (!t26) return { slotNode: null, slotName: "" };
  const r14 = e16["s-sn"] = re(e16) || "";
  const i12 = $e(t26, "childNodes");
  const s13 = te(i12, t26.tagName, r14)[0];
  return { slotNode: s13, slotName: r14 };
}
var oe = (e16) => {
  if (!e16 || e16.__nextSibling !== void 0 || !globalThis.Node) return;
  fe(e16);
  ce(e16);
  ve(e16);
  if (e16.nodeType === Node.ELEMENT_NODE) {
    ae(e16);
    ue(e16);
  }
};
var fe = (e16) => {
  if (!e16 || e16.__nextSibling) return;
  he("nextSibling", e16);
  Object.defineProperty(e16, "nextSibling", { get: function() {
    var e17;
    const t26 = (e17 = this["s-ol"]) == null ? void 0 : e17.parentNode.childNodes;
    const n16 = t26 == null ? void 0 : t26.indexOf(this);
    if (t26 && n16 > -1) {
      return t26[n16 + 1];
    }
    return this.__nextSibling;
  } });
};
var ae = (e16) => {
  if (!e16 || e16.__nextElementSibling) return;
  he("nextElementSibling", e16);
  Object.defineProperty(e16, "nextElementSibling", { get: function() {
    var e17;
    const t26 = (e17 = this["s-ol"]) == null ? void 0 : e17.parentNode.children;
    const n16 = t26 == null ? void 0 : t26.indexOf(this);
    if (t26 && n16 > -1) {
      return t26[n16 + 1];
    }
    return this.__nextElementSibling;
  } });
};
var ce = (e16) => {
  if (!e16 || e16.__previousSibling) return;
  he("previousSibling", e16);
  Object.defineProperty(e16, "previousSibling", { get: function() {
    var e17;
    const t26 = (e17 = this["s-ol"]) == null ? void 0 : e17.parentNode.childNodes;
    const n16 = t26 == null ? void 0 : t26.indexOf(this);
    if (t26 && n16 > -1) {
      return t26[n16 - 1];
    }
    return this.__previousSibling;
  } });
};
var ue = (e16) => {
  if (!e16 || e16.__previousElementSibling) return;
  he("previousElementSibling", e16);
  Object.defineProperty(e16, "previousElementSibling", { get: function() {
    var e17;
    const t26 = (e17 = this["s-ol"]) == null ? void 0 : e17.parentNode.children;
    const n16 = t26 == null ? void 0 : t26.indexOf(this);
    if (t26 && n16 > -1) {
      return t26[n16 - 1];
    }
    return this.__previousElementSibling;
  } });
};
var ve = (e16) => {
  if (!e16 || e16.__parentNode) return;
  he("parentNode", e16);
  Object.defineProperty(e16, "parentNode", { get: function() {
    var e17;
    return ((e17 = this["s-ol"]) == null ? void 0 : e17.parentNode) || this.__parentNode;
  }, set: function(e17) {
    this.__parentNode = e17;
  } });
};
var de = ["children", "nextElementSibling", "previousElementSibling"];
var pe = ["childNodes", "firstChild", "lastChild", "nextSibling", "previousSibling", "textContent", "parentNode"];
function he(e16, t26) {
  let n16;
  if (de.includes(e16)) {
    n16 = Object.getOwnPropertyDescriptor(Element.prototype, e16);
  } else if (pe.includes(e16)) {
    n16 = Object.getOwnPropertyDescriptor(Node.prototype, e16);
  }
  if (!n16) {
    n16 = Object.getOwnPropertyDescriptor(t26, e16);
  }
  if (n16) Object.defineProperty(t26, "__" + e16, n16);
}
function $e(e16, t26) {
  if ("__" + t26 in e16) {
    const n16 = e16["__" + t26];
    if (typeof n16 !== "function") return n16;
    return n16.bind(e16);
  } else {
    if (typeof e16[t26] !== "function") return e16[t26];
    return e16[t26].bind(e16);
  }
}
var be = (e16, t26 = "") => {
  {
    return () => {
    };
  }
};
var ye = (e16, t26, ...n16) => {
  let r14 = null;
  let i12 = null;
  let s13 = false;
  let l17 = false;
  const o12 = [];
  const f12 = (t27) => {
    for (let n17 = 0; n17 < t27.length; n17++) {
      r14 = t27[n17];
      if (Array.isArray(r14)) {
        f12(r14);
      } else if (r14 != null && typeof r14 !== "boolean") {
        if (s13 = typeof e16 !== "function" && !z(r14)) {
          r14 = String(r14);
        }
        if (s13 && l17) {
          o12[o12.length - 1].p += r14;
        } else {
          o12.push(s13 ? me(null, r14) : r14);
        }
        l17 = s13;
      }
    }
  };
  f12(n16);
  if (t26) {
    if (t26.key) {
      i12 = t26.key;
    }
    {
      const e17 = t26.className || t26.class;
      if (e17) {
        t26.class = typeof e17 !== "object" ? e17 : Object.keys(e17).filter((t27) => e17[t27]).join(" ");
      }
    }
  }
  if (typeof e16 === "function") {
    return e16(t26 === null ? {} : t26, o12, Se);
  }
  const a11 = me(e16, null);
  a11.h = t26;
  if (o12.length > 0) {
    a11.$ = o12;
  }
  {
    a11.m = i12;
  }
  return a11;
};
var me = (e16, t26) => {
  const n16 = { t: 0, S: e16, p: t26, j: null, $: null };
  {
    n16.h = null;
  }
  {
    n16.m = null;
  }
  return n16;
};
var ge = {};
var we = (e16) => e16 && e16.S === ge;
var Se = { forEach: (e16, t26) => e16.map(je).forEach(t26), map: (e16, t26) => e16.map(je).map(t26).map(Oe) };
var je = (e16) => ({ vattrs: e16.h, vchildren: e16.$, vkey: e16.m, vname: e16.O, vtag: e16.S, vtext: e16.p });
var Oe = (e16) => {
  if (typeof e16.vtag === "function") {
    const t27 = { ...e16.vattrs };
    if (e16.vkey) {
      t27.key = e16.vkey;
    }
    if (e16.vname) {
      t27.name = e16.vname;
    }
    return ye(e16.vtag, t27, ...e16.vchildren || []);
  }
  const t26 = me(e16.vtag, e16.vtext);
  t26.h = e16.vattrs;
  t26.$ = e16.vchildren;
  t26.m = e16.vkey;
  t26.O = e16.vname;
  return t26;
};
var Ne = (e16, t26, n16, r14) => {
  var i12;
  const s13 = be("hydrateClient", t26);
  const l17 = e16.shadowRoot;
  const o12 = [];
  const f12 = [];
  const a11 = [];
  const c19 = l17 ? [] : null;
  const u16 = me(t26, null);
  u16.j = e16;
  const v7 = Object.entries(((i12 = r14.i) == null ? void 0 : i12.N) || {});
  v7.forEach(([t27, [n17, i13]]) => {
    var s14, l18;
    if (!(n17 & 31)) {
      return;
    }
    const o13 = i13 || t27;
    const f13 = e16.getAttribute(o13);
    if (f13 !== null) {
      const e17 = Ae(f13, n17, !!(((s14 = r14.i) == null ? void 0 : s14.t) & 64));
      (l18 = r14 == null ? void 0 : r14.l) == null ? void 0 : l18.set(t27, e17);
    }
  });
  if (x.document && (!E.k || !E.k.size)) {
    ke(x.document.body, E.k = /* @__PURE__ */ new Map());
  }
  e16[g] = n16;
  e16.removeAttribute(g);
  r14.C = xe(u16, o12, f12, c19, e16, e16, n16, a11);
  let d17 = 0;
  const p16 = o12.length;
  let h19;
  for (d17; d17 < p16; d17++) {
    h19 = o12[d17];
    const n17 = h19.I + "." + h19.M;
    const r15 = E.k.get(n17);
    const i13 = h19.j;
    if (!l17) {
      i13["s-hn"] = t26.toUpperCase();
      if (h19.S === "slot") {
        i13["s-cr"] = e16["s-cr"];
      }
    }
    if (h19.S === "slot") {
      h19.O = h19.j["s-sn"] || h19.j["name"] || null;
      if (h19.$) {
        h19.t |= 2;
        if (!h19.j.childNodes.length) {
          h19.$.forEach((e17) => {
            h19.j.appendChild(e17.j);
          });
        }
      } else {
        h19.t |= 1;
      }
    }
    if (r15 && r15.isConnected) {
      if (l17 && r15["s-en"] === "") {
        r15.parentNode.insertBefore(i13, r15.nextSibling);
      }
      r15.parentNode.removeChild(r15);
      if (!l17) {
        i13["s-oo"] = parseInt(h19.M);
      }
    }
    E.k.delete(n17);
  }
  const $2 = [];
  const b10 = a11.length;
  let y5 = 0;
  let m10;
  let w10;
  let S2;
  let j7;
  for (y5; y5 < b10; y5++) {
    m10 = a11[y5];
    if (!m10 || !m10.length) continue;
    S2 = m10.length;
    w10 = 0;
    for (w10; w10 < S2; w10++) {
      j7 = m10[w10];
      if (!$2[j7.hostId]) {
        $2[j7.hostId] = E.k.get(j7.hostId);
      }
      if (!$2[j7.hostId]) continue;
      const e17 = $2[j7.hostId];
      if (!e17.shadowRoot || !l17) {
        j7.slot["s-cr"] = e17["s-cr"];
        if (!j7.slot["s-cr"] && e17.shadowRoot) {
          j7.slot["s-cr"] = e17;
        } else {
          j7.slot["s-cr"] = (e17.__childNodes || e17.childNodes)[0];
        }
        ne(j7.node, j7.slot, false, j7.node["s-oo"]);
        {
          oe(j7.node);
        }
      }
      if (e17.shadowRoot && j7.node.parentElement !== e17) {
        e17.appendChild(j7.node);
      }
    }
  }
  if (l17 && !l17.childNodes.length) {
    let t27 = 0;
    const n17 = c19.length;
    if (n17) {
      for (t27; t27 < n17; t27++) {
        l17.appendChild(c19[t27]);
      }
      Array.from(e16.childNodes).forEach((e17) => {
        if (typeof e17["s-en"] !== "string" && typeof e17["s-sn"] !== "string") {
          if (e17.nodeType === 1 && e17.slot && e17.hidden) {
            e17.removeAttribute("hidden");
          } else if (e17.nodeType === 8 || e17.nodeType === 3 && !e17.wholeText.trim()) {
            e17.parentNode.removeChild(e17);
          }
        }
      });
    }
  }
  E.k.delete(e16["s-id"]);
  r14.$hostElement$ = e16;
  s13();
};
var xe = (e16, t26, n16, r14, i12, s13, l17, o12 = []) => {
  let f12;
  let a11;
  let c19;
  let u16;
  if (s13.nodeType === 1) {
    f12 = s13.getAttribute(S);
    if (f12) {
      a11 = f12.split(".");
      if (a11[0] === l17 || a11[0] === "0") {
        c19 = Ee({ t: 0, I: a11[0], M: a11[1], _: a11[2], A: a11[3], S: s13.tagName.toLowerCase(), j: s13, h: { class: s13.className || "" } });
        t26.push(c19);
        s13.removeAttribute(S);
        if (!e16.$) {
          e16.$ = [];
        }
        const i13 = c19.j.getAttribute("s-sn");
        if (typeof i13 === "string") {
          if (c19.S === "slot-fb") {
            Ce(i13, a11[2], c19, s13, e16, t26, n16, r14, o12);
          }
          c19.j["s-sn"] = i13;
          c19.j.removeAttribute("s-sn");
        }
        if (c19.A !== void 0) {
          e16.$[c19.A] = c19;
        }
        e16 = c19;
        if (r14 && c19._ === "0") {
          r14[c19.A] = c19.j;
        }
      }
    }
    if (s13.shadowRoot) {
      for (u16 = s13.shadowRoot.childNodes.length - 1; u16 >= 0; u16--) {
        xe(e16, t26, n16, r14, i12, s13.shadowRoot.childNodes[u16], l17, o12);
      }
    }
    const v7 = s13.__childNodes || s13.childNodes;
    for (u16 = v7.length - 1; u16 >= 0; u16--) {
      xe(e16, t26, n16, r14, i12, v7[u16], l17, o12);
    }
  } else if (s13.nodeType === 8) {
    a11 = s13.nodeValue.split(".");
    if (a11[1] === l17 || a11[1] === "0") {
      f12 = a11[0];
      c19 = Ee({ I: a11[1], M: a11[2], _: a11[3], A: a11[4] || "0", j: s13, h: null, $: null, m: null, O: null, S: null, p: null });
      if (f12 === y) {
        c19.j = Me(s13, 3);
        if (c19.j && c19.j.nodeType === 3) {
          c19.p = c19.j.textContent;
          t26.push(c19);
          s13.remove();
          if (l17 === c19.I) {
            if (!e16.$) {
              e16.$ = [];
            }
            e16.$[c19.A] = c19;
          }
          if (r14 && c19._ === "0") {
            r14[c19.A] = c19.j;
          }
        }
      } else if (f12 === m) {
        c19.j = Me(s13, 8);
        if (c19.j && c19.j.nodeType === 8) {
          t26.push(c19);
          s13.remove();
        }
      } else if (c19.I === l17) {
        if (f12 === b) {
          const i13 = s13["s-sn"] = a11[5] || "";
          Ce(i13, a11[2], c19, s13, e16, t26, n16, r14, o12);
        } else if (f12 === h2) {
          if (r14) {
            s13.remove();
          }
        }
      }
    }
  } else if (e16 && e16.S === "style") {
    const t27 = me(null, s13.textContent);
    t27.j = s13;
    t27.A = "0";
    e16.$ = [t27];
  } else {
    if (s13.nodeType === 3 && !s13.wholeText.trim()) {
      s13.remove();
    }
  }
  return e16;
};
var ke = (e16, t26) => {
  if (e16.nodeType === 1) {
    const n16 = e16[g] || e16.getAttribute(g);
    if (n16) {
      t26.set(n16, e16);
    }
    let r14 = 0;
    if (e16.shadowRoot) {
      for (; r14 < e16.shadowRoot.childNodes.length; r14++) {
        ke(e16.shadowRoot.childNodes[r14], t26);
      }
    }
    const i12 = e16.__childNodes || e16.childNodes;
    for (r14 = 0; r14 < i12.length; r14++) {
      ke(i12[r14], t26);
    }
  } else if (e16.nodeType === 8) {
    const n16 = e16.nodeValue.split(".");
    if (n16[0] === $) {
      t26.set(n16[1] + "." + n16[2], e16);
      e16.nodeValue = "";
      e16["s-en"] = n16[3];
    }
  }
};
var Ee = (e16) => {
  const t26 = { t: 0, I: null, M: null, _: null, A: "0", j: null, h: null, $: null, m: null, O: null, S: null, p: null };
  return { ...t26, ...e16 };
};
function Ce(e16, t26, n16, r14, i12, s13, l17, o12, f12) {
  r14["s-sr"] = true;
  n16.O = e16 || null;
  n16.S = "slot";
  const a11 = (i12 == null ? void 0 : i12.j) ? i12.j["s-id"] || i12.j.getAttribute("s-id") : "";
  if (o12 && x.document) {
    const s14 = n16.j = x.document.createElement(n16.S);
    if (n16.O) {
      n16.j.setAttribute("name", e16);
    }
    if (a11 && a11 !== n16.I) {
      i12.j.insertBefore(s14, i12.j.children[0]);
    } else {
      r14.parentNode.insertBefore(s14, r14);
    }
    Ie(f12, t26, e16, r14, n16.I);
    r14.remove();
    if (n16._ === "0") {
      o12[n16.A] = n16.j;
    }
  } else {
    const s14 = n16.j;
    const l18 = a11 && a11 !== n16.I && i12.j.shadowRoot;
    Ie(f12, t26, e16, r14, l18 ? a11 : n16.I);
    ie(r14);
    if (l18) {
      i12.j.insertBefore(s14, i12.j.children[0]);
    }
  }
  s13.push(n16);
  l17.push(n16);
  if (!i12.$) {
    i12.$ = [];
  }
  i12.$[n16.A] = n16;
}
var Ie = (e16, t26, n16, r14, i12) => {
  let s13 = r14.nextSibling;
  e16[t26] = e16[t26] || [];
  while (s13 && ((s13["getAttribute"] && s13.getAttribute("slot") || s13["s-sn"]) === n16 || n16 === "" && !s13["s-sn"] && (s13.nodeType === 8 && s13.nodeValue.indexOf(".") !== 1 || s13.nodeType === 3))) {
    s13["s-sn"] = n16;
    e16[t26].push({ slot: r14, node: s13, hostId: i12 });
    s13 = s13.nextSibling;
  }
};
var Me = (e16, t26) => {
  let n16 = e16;
  do {
    n16 = n16.nextSibling;
  } while (n16 && (n16.nodeType !== t26 || !n16.nodeValue));
  return n16;
};
var _e = (e16) => {
  const t26 = J(e16);
  return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${t26}))(${t26}\\b)`, "g");
};
_e("::slotted");
_e(":host");
_e(":host-context");
var Ae = (e16, t26, n16) => {
  if (typeof e16 === "string" && (e16.startsWith("{") && e16.endsWith("}") || e16.startsWith("[") && e16.endsWith("]"))) {
    try {
      e16 = JSON.parse(e16);
      return e16;
    } catch (e17) {
    }
  }
  if (typeof e16 === "string" && e16.startsWith(a)) {
    e16 = X(e16);
    return e16;
  }
  if (e16 != null && !z(e16)) {
    if (t26 & 4) {
      if (n16 && typeof e16 === "string") {
        return e16 === "" || !!e16;
      } else {
        return e16 === "false" ? false : e16 === "" || !!e16;
      }
    }
    if (t26 & 2) {
      return typeof e16 === "string" ? parseFloat(e16) : typeof e16 === "number" ? e16 : NaN;
    }
    if (t26 & 1) {
      return String(e16);
    }
    return e16;
  }
  return e16;
};
var Re = (e16) => e16;
var Ue = (e16, t26, n16) => {
  const r14 = Re(e16);
  return { emit: (e17) => Le(r14, t26, { bubbles: true, composed: true, cancelable: true, detail: e17 }) };
};
var Le = (e16, t26, n16) => {
  const r14 = E.ce(t26, n16);
  e16.dispatchEvent(r14);
  return r14;
};
var De = /* @__PURE__ */ new WeakMap();
var Pe = (e16, t26, n16) => {
  let r14 = p.get(e16);
  if (M && n16) {
    r14 = r14 || new CSSStyleSheet();
    if (typeof r14 === "string") {
      r14 = t26;
    } else {
      r14.replaceSync(t26);
    }
  } else {
    r14 = t26;
  }
  p.set(e16, r14);
};
var Fe = (e16, t26, n16) => {
  var r14;
  const i12 = Ve(t26);
  const s13 = p.get(i12);
  if (!x.document) {
    return i12;
  }
  e16 = e16.nodeType === 11 ? e16 : x.document;
  if (s13) {
    if (typeof s13 === "string") {
      e16 = e16.head || e16;
      let n17 = De.get(e16);
      let l17;
      if (!n17) {
        De.set(e16, n17 = /* @__PURE__ */ new Set());
      }
      if (!n17.has(i12)) {
        if (e16.host && (l17 = e16.querySelector(`[${w}="${i12}"]`))) {
          l17.innerHTML = s13;
        } else {
          l17 = x.document.createElement("style");
          l17.innerHTML = s13;
          const n18 = (r14 = E.R) != null ? r14 : H(x.document);
          if (n18 != null) {
            l17.setAttribute("nonce", n18);
          }
          if (!(t26.t & 1)) {
            if (e16.nodeName === "HEAD") {
              const t27 = e16.querySelectorAll("link[rel=preconnect]");
              const n19 = t27.length > 0 ? t27[t27.length - 1].nextSibling : e16.querySelector("style");
              e16.insertBefore(l17, (n19 == null ? void 0 : n19.parentNode) === e16 ? n19 : null);
            } else if ("host" in e16) {
              if (M) {
                const t27 = new CSSStyleSheet();
                t27.replaceSync(s13);
                e16.adoptedStyleSheets = [t27, ...e16.adoptedStyleSheets];
              } else {
                const t27 = e16.querySelector("style");
                if (t27) {
                  t27.innerHTML = s13 + t27.innerHTML;
                } else {
                  e16.prepend(l17);
                }
              }
            } else {
              e16.append(l17);
            }
          }
          if (t26.t & 1) {
            e16.insertBefore(l17, null);
          }
        }
        if (t26.t & 4) {
          l17.innerHTML += j;
        }
        if (n17) {
          n17.add(i12);
        }
      }
    } else if (!e16.adoptedStyleSheets.includes(s13)) {
      e16.adoptedStyleSheets = [...e16.adoptedStyleSheets, s13];
    }
  }
  return i12;
};
var We = (e16) => {
  const t26 = e16.i;
  const n16 = e16.$hostElement$;
  const r14 = t26.t;
  const i12 = be("attachStyles", t26.U);
  const s13 = Fe(n16.shadowRoot ? n16.shadowRoot : n16.getRootNode(), t26);
  if (r14 & 10) {
    n16["s-sc"] = s13;
    n16.classList.add(s13 + "-h");
  }
  i12();
};
var Ve = (e16, t26) => "sc-" + e16.U;
var ze = (e16) => e16.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");
var He = () => {
  if (!x.document) {
    return;
  }
  const e16 = x.document.querySelectorAll(`[${w}]`);
  let t26 = 0;
  for (; t26 < e16.length; t26++) {
    Pe(e16[t26].getAttribute(w), ze(e16[t26].innerHTML), true);
  }
};
var Je = (e16, t26, n16, r14, i12, s13, l17) => {
  if (n16 === r14) {
    return;
  }
  let o12 = v(e16, t26);
  let f12 = t26.toLowerCase();
  if (t26 === "class") {
    const t27 = e16.classList;
    const i13 = qe(n16);
    let s14 = qe(r14);
    if (e16["s-si"] && l17) {
      s14.push(e16["s-si"]);
      i13.forEach((t28) => {
        if (t28.startsWith(e16["s-si"])) s14.push(t28);
      });
      s14 = [...new Set(s14)];
      t27.add(...s14);
    } else {
      t27.remove(...i13.filter((e17) => e17 && !s14.includes(e17)));
      t27.add(...s14.filter((e17) => e17 && !i13.includes(e17)));
    }
  } else if (t26 === "style") {
    {
      for (const t27 in n16) {
        if (!r14 || r14[t27] == null) {
          if (t27.includes("-")) {
            e16.style.removeProperty(t27);
          } else {
            e16.style[t27] = "";
          }
        }
      }
    }
    for (const t27 in r14) {
      if (!n16 || r14[t27] !== n16[t27]) {
        if (t27.includes("-")) {
          e16.style.setProperty(t27, r14[t27]);
        } else {
          e16.style[t27] = r14[t27];
        }
      }
    }
  } else if (t26 === "key") ;
  else if (t26 === "ref") {
    if (r14) {
      r14(e16);
    }
  } else if (!e16.__lookupSetter__(t26) && t26[0] === "o" && t26[1] === "n") {
    if (t26[2] === "-") {
      t26 = t26.slice(3);
    } else if (v(x, f12)) {
      t26 = f12.slice(2);
    } else {
      t26 = f12[2] + t26.slice(3);
    }
    if (n16 || r14) {
      const i13 = t26.endsWith(Be);
      t26 = t26.replace(Te, "");
      if (n16) {
        E.rel(e16, t26, n16, i13);
      }
      if (r14) {
        E.ael(e16, t26, r14, i13);
      }
    }
  } else {
    const l18 = z(r14);
    if ((o12 || l18 && r14 !== null) && true) {
      try {
        if (!e16.tagName.includes("-")) {
          const i13 = r14 == null ? "" : r14;
          if (t26 === "list") {
            o12 = false;
          } else if (n16 == null || e16[t26] != i13) {
            if (typeof e16.__lookupSetter__(t26) === "function") {
              e16[t26] = i13;
            } else {
              e16.setAttribute(t26, i13);
            }
          }
        } else if (e16[t26] !== r14) {
          e16[t26] = r14;
        }
      } catch (e17) {
      }
    }
    let a11 = false;
    {
      if (f12 !== (f12 = f12.replace(/^xlink\:?/, ""))) {
        t26 = f12;
        a11 = true;
      }
    }
    if (r14 == null || r14 === false) {
      if (r14 !== false || e16.getAttribute(t26) === "") {
        if (a11) {
          e16.removeAttributeNS(O, t26);
        } else {
          e16.removeAttribute(t26);
        }
      }
    } else if ((!o12 || s13 & 4 || i12) && !l18 && e16.nodeType === 1) {
      r14 = r14 === true ? "" : r14;
      if (a11) {
        e16.setAttributeNS(O, t26, r14);
      } else {
        e16.setAttribute(t26, r14);
      }
    }
  }
};
var Ye = /\s/;
var qe = (e16) => {
  if (typeof e16 === "object" && e16 && "baseVal" in e16) {
    e16 = e16.baseVal;
  }
  if (!e16 || typeof e16 !== "string") {
    return [];
  }
  return e16.split(Ye);
};
var Be = "Capture";
var Te = new RegExp(Be + "$");
var Ge = (e16, t26, n16, r14) => {
  const i12 = t26.j.nodeType === 11 && t26.j.host ? t26.j.host : t26.j;
  const s13 = e16 && e16.h || {};
  const l17 = t26.h || {};
  {
    for (const e17 of Ke(Object.keys(s13))) {
      if (!(e17 in l17)) {
        Je(i12, e17, s13[e17], void 0, n16, t26.t, r14);
      }
    }
  }
  for (const e17 of Ke(Object.keys(l17))) {
    Je(i12, e17, s13[e17], l17[e17], n16, t26.t, r14);
  }
};
function Ke(e16) {
  return e16.includes("ref") ? [...e16.filter((e17) => e17 !== "ref"), "ref"] : e16;
}
var Qe;
var Xe = false;
var Ze = false;
var et = (e16, t26, n16) => {
  const r14 = t26.$[n16];
  let i12 = 0;
  let s13;
  let l17;
  if (r14.p !== null) {
    s13 = r14.j = x.document.createTextNode(r14.p);
  } else {
    if (!x.document) {
      throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");
    }
    s13 = r14.j = x.document.createElement(r14.S);
    {
      Ge(null, r14, Ze);
    }
    if (r14.$) {
      for (i12 = 0; i12 < r14.$.length; ++i12) {
        l17 = et(e16, r14, i12);
        if (l17) {
          s13.appendChild(l17);
        }
      }
    }
  }
  s13["s-hn"] = Qe;
  return s13;
};
var tt = (e16) => {
  E.t |= 1;
  const t26 = e16.closest(Qe.toLowerCase());
  if (t26 != null) {
    const n16 = Array.from(t26.__childNodes || t26.childNodes).find((e17) => e17["s-cr"]);
    const r14 = Array.from(e16.__childNodes || e16.childNodes);
    for (const e17 of n16 ? r14.reverse() : r14) {
      if (e17["s-sh"] != null) {
        ft(t26, e17, n16 != null ? n16 : null);
        e17["s-sh"] = void 0;
      }
    }
  }
  E.t &= -2;
};
var nt = (e16, t26, n16, r14, i12, s13) => {
  let l17 = e16;
  let o12;
  if (l17.shadowRoot && l17.tagName === Qe) {
    l17 = l17.shadowRoot;
  }
  for (; i12 <= s13; ++i12) {
    if (r14[i12]) {
      o12 = et(null, n16, i12);
      if (o12) {
        r14[i12].j = o12;
        ft(l17, o12, t26);
      }
    }
  }
};
var rt = (e16, t26, n16) => {
  for (let r14 = t26; r14 <= n16; ++r14) {
    const t27 = e16[r14];
    if (t27) {
      const e17 = t27.j;
      ot(t27);
      if (e17) {
        e17.remove();
      }
    }
  }
};
var it = (e16, t26, n16, r14, i12 = false) => {
  let s13 = 0;
  let l17 = 0;
  let o12 = 0;
  let f12 = 0;
  let a11 = t26.length - 1;
  let c19 = t26[0];
  let u16 = t26[a11];
  let v7 = r14.length - 1;
  let d17 = r14[0];
  let p16 = r14[v7];
  let h19;
  let $2;
  while (s13 <= a11 && l17 <= v7) {
    if (c19 == null) {
      c19 = t26[++s13];
    } else if (u16 == null) {
      u16 = t26[--a11];
    } else if (d17 == null) {
      d17 = r14[++l17];
    } else if (p16 == null) {
      p16 = r14[--v7];
    } else if (st(c19, d17, i12)) {
      lt(c19, d17, i12);
      c19 = t26[++s13];
      d17 = r14[++l17];
    } else if (st(u16, p16, i12)) {
      lt(u16, p16, i12);
      u16 = t26[--a11];
      p16 = r14[--v7];
    } else if (st(c19, p16, i12)) {
      lt(c19, p16, i12);
      ft(e16, c19.j, u16.j.nextSibling);
      c19 = t26[++s13];
      p16 = r14[--v7];
    } else if (st(u16, d17, i12)) {
      lt(u16, d17, i12);
      ft(e16, u16.j, c19.j);
      u16 = t26[--a11];
      d17 = r14[++l17];
    } else {
      o12 = -1;
      {
        for (f12 = s13; f12 <= a11; ++f12) {
          if (t26[f12] && t26[f12].m !== null && t26[f12].m === d17.m) {
            o12 = f12;
            break;
          }
        }
      }
      if (o12 >= 0) {
        $2 = t26[o12];
        if ($2.S !== d17.S) {
          h19 = et(t26 && t26[l17], n16, o12);
        } else {
          lt($2, d17, i12);
          t26[o12] = void 0;
          h19 = $2.j;
        }
        d17 = r14[++l17];
      } else {
        h19 = et(t26 && t26[l17], n16, l17);
        d17 = r14[++l17];
      }
      if (h19) {
        {
          ft(c19.j.parentNode, h19, c19.j);
        }
      }
    }
  }
  if (s13 > a11) {
    nt(e16, r14[v7 + 1] == null ? null : r14[v7 + 1].j, n16, r14, l17, v7);
  } else if (l17 > v7) {
    rt(t26, s13, a11);
  }
};
var st = (e16, t26, n16 = false) => {
  if (e16.S === t26.S) {
    if (!n16) {
      return e16.m === t26.m;
    }
    if (n16 && !e16.m && t26.m) {
      e16.m = t26.m;
    }
    return true;
  }
  return false;
};
var lt = (e16, t26, r14 = false) => {
  const i12 = t26.j = e16.j;
  const s13 = e16.$;
  const l17 = t26.$;
  const o12 = t26.S;
  const f12 = t26.p;
  if (f12 === null) {
    {
      if (o12 === "slot" && !Xe) {
        if (e16.O !== t26.O) {
          t26.j["s-sn"] = t26.O || "";
          tt(t26.j.parentElement);
        }
      }
      Ge(e16, t26, Ze, r14);
    }
    if (s13 !== null && l17 !== null) {
      it(i12, s13, t26, l17, r14);
    } else if (l17 !== null) {
      if (e16.p !== null) {
        i12.textContent = "";
      }
      nt(i12, null, t26, l17, 0, l17.length - 1);
    } else if (!r14 && n.updatable && s13 !== null) {
      rt(s13, 0, s13.length - 1);
    }
  } else if (e16.p !== f12) {
    i12.data = f12;
  }
};
var ot = (e16) => {
  {
    e16.h && e16.h.ref && e16.h.ref(null);
    e16.$ && e16.$.map(ot);
  }
};
var ft = (e16, t26, n16) => {
  if (typeof t26["s-sn"] === "string") {
    if (e16.getRootNode().nodeType !== 11) {
      ve(t26);
    }
    e16.insertBefore(t26, n16);
    const { slotNode: r14 } = le(t26);
    if (r14) se(r14);
    return t26;
  }
  if (e16.__insertBefore) {
    return e16.__insertBefore(t26, n16);
  } else {
    return e16 == null ? void 0 : e16.insertBefore(t26, n16);
  }
};
var at = (e16, t26, n16 = false) => {
  var r14;
  const i12 = e16.$hostElement$;
  const s13 = e16.i;
  const l17 = e16.C || me(null, null);
  const o12 = we(t26);
  const f12 = o12 ? t26 : ye(null, null, t26);
  Qe = i12.tagName;
  if (s13.L) {
    f12.h = f12.h || {};
    s13.L.map(([e17, t27]) => f12.h[t27] = i12[e17]);
  }
  if (n16 && f12.h) {
    for (const e17 of Object.keys(f12.h)) {
      if (i12.hasAttribute(e17) && !["key", "ref", "style", "class"].includes(e17)) {
        f12.h[e17] = i12[e17];
      }
    }
  }
  f12.S = null;
  f12.t |= 4;
  e16.C = f12;
  f12.j = l17.j = i12.shadowRoot || i12;
  Xe = !!(s13.t & 1) && !(s13.t & 128);
  lt(l17, f12, n16);
  if (s13.t & 2) {
    const e17 = f12.j.__childNodes || f12.j.childNodes;
    for (const t27 of e17) {
      if (t27["s-hn"] !== Qe && !t27["s-sh"]) {
        if (n16 && t27["s-ih"] == null) {
          t27["s-ih"] = (r14 = t27.hidden) != null ? r14 : false;
        }
        t27.hidden = true;
      }
    }
  }
};
var ct = (e16, t26) => {
  if (t26 && !e16.D && t26["s-p"]) {
    const n16 = t26["s-p"].push(new Promise((r14) => e16.D = () => {
      t26["s-p"].splice(n16 - 1, 1);
      r14();
    }));
  }
};
var ut = (e16, t26) => {
  {
    e16.t |= 16;
  }
  if (e16.t & 4) {
    e16.t |= 512;
    return;
  }
  ct(e16, e16.P);
  const n16 = () => vt(e16, t26);
  return F(n16);
};
var vt = (e16, t26) => {
  const n16 = e16.$hostElement$;
  const r14 = be("scheduleUpdate", e16.i.U);
  const i12 = n16;
  if (!i12) {
    throw new Error(`Can't render component <${n16.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
  }
  let s13;
  if (t26) {
    s13 = mt(i12, "componentWillLoad", void 0, n16);
  } else {
    s13 = mt(i12, "componentWillUpdate", void 0, n16);
  }
  s13 = dt(s13, () => mt(i12, "componentWillRender", void 0, n16));
  r14();
  return dt(s13, () => ht(e16, i12, t26));
};
var dt = (e16, t26) => pt(e16) ? e16.then(t26).catch((e17) => {
  console.error(e17);
  t26();
}) : t26();
var pt = (e16) => e16 instanceof Promise || e16 && e16.then && typeof e16.then === "function";
var ht = async (e16, t26, n16) => {
  var r14;
  const i12 = e16.$hostElement$;
  const s13 = be("update", e16.i.U);
  const l17 = i12["s-rc"];
  if (n16) {
    We(e16);
  }
  const o12 = be("render", e16.i.U);
  {
    $t(e16, t26, i12, n16);
  }
  if (l17) {
    l17.map((e17) => e17());
    i12["s-rc"] = void 0;
  }
  o12();
  s13();
  {
    const t27 = (r14 = i12["s-p"]) != null ? r14 : [];
    const n17 = () => bt(e16);
    if (t27.length === 0) {
      n17();
    } else {
      Promise.all(t27).then(n17);
      e16.t |= 4;
      t27.length = 0;
    }
  }
};
var $t = (e16, t26, n16, r14) => {
  try {
    t26 = t26.render();
    {
      e16.t &= -17;
    }
    {
      e16.t |= 2;
    }
    {
      {
        {
          at(e16, t26, r14);
        }
      }
    }
  } catch (t27) {
    d(t27, e16.$hostElement$);
  }
  return null;
};
var bt = (e16) => {
  const t26 = e16.i.U;
  const n16 = e16.$hostElement$;
  const r14 = be("postUpdate", t26);
  const i12 = n16;
  const s13 = e16.P;
  mt(i12, "componentDidRender", void 0, n16);
  if (!(e16.t & 64)) {
    e16.t |= 64;
    {
      gt(n16);
    }
    mt(i12, "componentDidLoad", void 0, n16);
    r14();
    {
      e16.u(n16);
      if (!s13) {
        yt();
      }
    }
  } else {
    mt(i12, "componentDidUpdate", void 0, n16);
    r14();
  }
  {
    if (e16.D) {
      e16.D();
      e16.D = void 0;
    }
    if (e16.t & 512) {
      P(() => ut(e16, false));
    }
    e16.t &= -517;
  }
};
var yt = (e16) => {
  P(() => Le(x, "appload", { detail: { namespace: t } }));
};
var mt = (e16, t26, n16, r14) => {
  if (e16 && e16[t26]) {
    try {
      return e16[t26](n16);
    } catch (e17) {
      d(e17, r14);
    }
  }
  return void 0;
};
var gt = (e16) => {
  var t26;
  return e16.classList.add((t26 = n.hydratedSelectorName) != null ? t26 : "hydrated");
};
var wt = (e16, t26) => c(e16).l.get(t26);
var St = (e16, t26, n16, r14) => {
  const i12 = c(e16);
  const s13 = e16;
  const l17 = i12.l.get(t26);
  const o12 = i12.t;
  const f12 = s13;
  n16 = Ae(n16, r14.N[t26][0], !!(r14.t & 64));
  const a11 = Number.isNaN(l17) && Number.isNaN(n16);
  const u16 = n16 !== l17 && !a11;
  if (u16) {
    i12.l.set(t26, n16);
    {
      if (r14.F && o12 & 128) {
        const e17 = r14.F[t26];
        if (e17) {
          e17.map((e18) => {
            try {
              f12[e18](n16, l17, t26);
            } catch (e19) {
              d(e19, s13);
            }
          });
        }
      }
      if ((o12 & (2 | 16)) === 2) {
        if (f12.componentShouldUpdate) {
          if (f12.componentShouldUpdate(n16, l17, t26) === false) {
            return;
          }
        }
        ut(i12, false);
      }
    }
  }
};
var jt = (e16, t26, r14) => {
  var i12, s13;
  const l17 = e16.prototype;
  if (t26.t & 64 && r14 & 1) {
    N.forEach((e17) => {
      const t27 = l17[e17];
      Object.defineProperty(l17, e17, { value(...n16) {
        const r15 = c(this);
        const i13 = this;
        if (!i13) {
          r15.o.then((t28) => {
            const r16 = t28[e17];
            typeof r16 === "function" && r16.call(t28, ...n16);
          });
        } else {
          const e18 = t27;
          typeof e18 === "function" && e18.call(i13, ...n16);
        }
      } });
    });
  }
  if (t26.N || (t26.F || e16.watchers)) {
    if (e16.watchers && !t26.F) {
      t26.F = e16.watchers;
    }
    const r15 = Object.entries((i12 = t26.N) != null ? i12 : {});
    r15.map(([e17, [n16]]) => {
      if (n16 & 31 || n16 & 32) {
        const { get: r16, set: i13 } = Object.getOwnPropertyDescriptor(l17, e17) || {};
        if (r16) t26.N[e17][0] |= 2048;
        if (i13) t26.N[e17][0] |= 4096;
        {
          Object.defineProperty(l17, e17, { get() {
            {
              return r16 ? r16.apply(this) : wt(this, e17);
            }
          }, configurable: true, enumerable: true });
        }
        Object.defineProperty(l17, e17, { set(r17) {
          const s14 = c(this);
          if (i13) {
            const l18 = n16 & 32 ? this[e17] : s14.$hostElement$[e17];
            if (typeof l18 === "undefined" && s14.l.get(e17)) {
              r17 = s14.l.get(e17);
            } else if (!s14.l.get(e17) && l18) {
              s14.l.set(e17, l18);
            }
            i13.apply(this, [Ae(r17, n16, !!(t26.t & 64))]);
            r17 = n16 & 32 ? this[e17] : s14.$hostElement$[e17];
            St(this, e17, r17, t26);
            return;
          }
          {
            St(this, e17, r17, t26);
            return;
          }
        } });
      }
    });
    {
      const i13 = /* @__PURE__ */ new Map();
      l17.attributeChangedCallback = function(e17, r16, s14) {
        E.jmp(() => {
          var o12;
          const f12 = i13.get(e17);
          if (this.hasOwnProperty(f12) && n.lazyLoad) ;
          else if (l17.hasOwnProperty(f12) && typeof this[f12] === "number" && this[f12] == s14) {
            return;
          } else if (f12 == null) {
            const n16 = c(this);
            const i14 = n16 == null ? void 0 : n16.t;
            if (i14 && !(i14 & 8) && i14 & 128 && s14 !== r16) {
              const n17 = this;
              const i15 = n17;
              const l18 = (o12 = t26.F) == null ? void 0 : o12[e17];
              l18 == null ? void 0 : l18.forEach((t27) => {
                if (i15[t27] != null) {
                  i15[t27].call(i15, s14, r16, e17);
                }
              });
            }
            return;
          }
          const a11 = Object.getOwnPropertyDescriptor(l17, f12);
          s14 = s14 === null && typeof this[f12] === "boolean" ? false : s14;
          if (s14 !== this[f12] && (!a11.get || !!a11.set)) {
            this[f12] = s14;
          }
        });
      };
      e16.observedAttributes = Array.from(/* @__PURE__ */ new Set([...Object.keys((s13 = t26.F) != null ? s13 : {}), ...r15.filter(([e17, t27]) => t27[0] & 15).map(([e17, n16]) => {
        var r16;
        const s14 = n16[1] || e17;
        i13.set(s14, e17);
        if (n16[0] & 512) {
          (r16 = t26.L) == null ? void 0 : r16.push([e17, s14]);
        }
        return s14;
      })]));
    }
  }
  return e16;
};
var Ot = async (e16, t26, n16, r14) => {
  let i12;
  if ((t26.t & 32) === 0) {
    t26.t |= 32;
    {
      i12 = e16.constructor;
      const n17 = e16.localName;
      customElements.whenDefined(n17).then(() => t26.t |= 128);
    }
    if (i12 && i12.style) {
      let e17;
      if (typeof i12.style === "string") {
        e17 = i12.style;
      }
      const t27 = Ve(n16);
      if (!p.has(t27)) {
        const r15 = be("registerStyles", n16.U);
        Pe(t27, e17, !!(n16.t & 1));
        r15();
      }
    }
  }
  const s13 = t26.P;
  const l17 = () => ut(t26, true);
  if (s13 && s13["s-rc"]) {
    s13["s-rc"].push(l17);
  } else {
    l17();
  }
};
var Nt = (e16, t26) => {
};
var xt = (e16) => {
  if ((E.t & 1) === 0) {
    const t26 = c(e16);
    const r14 = t26.i;
    const i12 = be("connectedCallback", r14.U);
    if (!(t26.t & 1)) {
      t26.t |= 1;
      let i13;
      {
        i13 = e16.getAttribute(g);
        if (i13) {
          if (r14.t & 1) {
            const t27 = Fe(e16.shadowRoot, r14);
            e16.classList.remove(t27 + "-h", t27 + "-s");
          }
          Ne(e16, r14.U, i13, t26);
        }
      }
      {
        let n16 = e16;
        while (n16 = n16.parentNode || n16.host) {
          if (n16.nodeType === 1 && n16.hasAttribute("s-id") && n16["s-p"] || n16["s-p"]) {
            ct(t26, t26.P = n16);
            break;
          }
        }
      }
      if (r14.N) {
        Object.entries(r14.N).map(([t27, [n16]]) => {
          if (n16 & 31 && e16.hasOwnProperty(t27)) {
            const n17 = e16[t27];
            delete e16[t27];
            e16[t27] = n17;
          }
        });
      }
      if (n.initializeNextTick) {
        P(() => Ot(e16, t26, r14));
      } else {
        Ot(e16, t26, r14);
      }
    } else {
      It(e16, t26, r14.W);
      if (t26 == null ? void 0 : t26.V) ;
      else if (t26 == null ? void 0 : t26.o) {
        t26.o.then(() => Nt());
      }
    }
    i12();
  }
};
var kt = async (e16) => {
  if ((E.t & 1) === 0) {
    const t26 = c(e16);
    {
      if (t26.H) {
        t26.H.map((e17) => e17());
        t26.H = void 0;
      }
    }
  }
  if (De.has(e16)) {
    De.delete(e16);
  }
  if (e16.shadowRoot && De.has(e16.shadowRoot)) {
    De.delete(e16.shadowRoot);
  }
};
var Et = (e16, t26) => {
  const n16 = { t: t26[0], U: t26[1] };
  {
    n16.N = t26[2];
  }
  {
    n16.W = t26[3];
  }
  {
    n16.F = e16.F;
  }
  {
    n16.L = [];
  }
  {
    He();
  }
  const r14 = e16.prototype.connectedCallback;
  const i12 = e16.prototype.disconnectedCallback;
  Object.assign(e16.prototype, { __hasHostListenerAttached: false, __registerHost() {
    u(this, n16);
  }, connectedCallback() {
    if (!this.__hasHostListenerAttached) {
      const e17 = c(this);
      It(this, e17, n16.W);
      this.__hasHostListenerAttached = true;
    }
    xt(this);
    if (r14) {
      r14.call(this);
    }
  }, disconnectedCallback() {
    kt(this);
    if (i12) {
      i12.call(this);
    }
  }, __attachShadow() {
    {
      if (!this.shadowRoot) {
        Z.call(this, n16);
      } else {
        if (this.shadowRoot.mode !== "open") {
          throw new Error(`Unable to re-use existing shadow root for ${n16.U}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`);
        }
      }
    }
  } });
  e16.is = n16.U;
  return jt(e16, n16, 1 | 2);
};
var Ct = (e16, t26) => t26;
var It = (e16, t26, n16, r14) => {
  if (n16 && x.document) {
    n16.map(([n17, r15, i12]) => {
      const s13 = _t(x.document, e16, n17);
      const l17 = Mt(t26, i12);
      const o12 = At(n17);
      E.ael(s13, r15, l17, o12);
      (t26.H = t26.H || []).push(() => E.rel(s13, r15, l17, o12));
    });
  }
};
var Mt = (e16, t26) => (n16) => {
  try {
    {
      e16.$hostElement$[t26](n16);
    }
  } catch (t27) {
    d(t27, e16.$hostElement$);
  }
};
var _t = (e16, t26, n16) => {
  if (n16 & 4) {
    return e16;
  }
  if (n16 & 8) {
    return x;
  }
  return t26;
};
var At = (e16) => C ? { passive: (e16 & 1) !== 0, capture: (e16 & 2) !== 0 } : (e16 & 2) !== 0;

// node_modules/@gcds-core/components/dist/components/p-DOKR5HKI.js
var e3 = { en: { valueMissing: "Enter information to continue.", typeMismatch: { email: "Enter a valid email address to continue. Use a standard format. Example: name@address.ca.", url: "Enter a URL in the specified format to continue." }, patternMismatch: "Use the specified format to continue.", tooLong: "Enter {max} characters or less to continue. You've entered {current} characters.", tooShort: "Enter at least {min} characters to continue. You've entered {current} characters.", rangeUnderflow: "Enter a number that's {min} or more to continue.", rangeOverflow: "Enter a number that's {max} or less to continue.", stepMismatch: "Enter a number from the specified options to continue. The closest numbers to what you entered are {lower} and {upper}. ", badInput: "Enter a number to continue." }, fr: { valueMissing: "Saisissez des renseignements pour continuer.", typeMismatch: { email: "Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.", url: "Entrez une adresse Web en utilisant le format spécifié pour continuer." }, patternMismatch: "Utilisez le format spécifié pour continuer.", tooLong: "Entrez {max} caractères ou moins pour continuer. Vous en avez présentement {current}.", tooShort: "Entrez au moins {min} caractères pour continuer. Vous en avez présentement {current}.", rangeUnderflow: "Entrez un nombre plus grand ou égal à {min} pour continuer.", rangeOverflow: "Entrez un nombre plus petit ou égal à {max} pour continuer.", stepMismatch: "Entrez un nombre parmi les options spécifiées pour continuer. Les nombres les plus proches de votre entrée sont {lower} et {upper}.", badInput: "Entrez un nombre pour continuer." } };
var r2 = (e16, r14, t26 = []) => {
  const n16 = {};
  for (let r15 = 0; r15 < e16.attributes.length; r15++) {
    const t27 = e16.attributes[r15];
    if (t27.name.includes("aria-")) {
      n16[t27.name] = t27.value;
    }
  }
  t26.forEach((t27) => {
    if (e16.hasAttribute(t27) || r14 && r14.hasAttribute(t27)) {
      const s13 = e16.getAttribute(t27) || r14.getAttribute(t27);
      if (s13 !== null) {
        n16[t27] = e16.getAttribute(t27) || r14.getAttribute(t27);
      }
      e16.removeAttribute(t27);
    }
  });
  return n16;
};
var t2 = (e16) => {
  var r14;
  let t26 = "";
  if (!e16.getAttribute("lang")) {
    const s13 = (r14 = n2("[lang]", e16)) === null || r14 === void 0 ? void 0 : r14.getAttribute("lang");
    if (s13 == "en" || !s13) {
      t26 = "en";
    } else {
      t26 = "fr";
    }
  } else if (e16.getAttribute("lang") == "en") {
    t26 = "en";
  } else {
    t26 = "fr";
  }
  return t26;
};
var n2 = (e16, r14) => {
  if (r14) {
    return r14 && r14 != document && typeof window != "undefined" && r14 != window && r14.closest(e16) || n2(e16, r14.getRootNode().host);
  }
  return null;
};
var s2 = { attributes: true, attributeOldValue: true, attributeFilter: ["lang"] };
var o2 = (e16, r14, t26) => {
  const n16 = r14.emit(t26);
  if (n16.defaultPrevented || e16.defaultPrevented) {
    e16.preventDefault();
    return false;
  }
  return true;
};
var a2 = (e16, r14, t26) => {
  const n16 = "Render error, please check required properties.";
  const s13 = "Erreur de rendu, veuillez vérifier les propriétés requises.";
  const o12 = [...r14];
  if (t26 && t26.length > 0) {
    for (const e17 of t26) {
      if (o12.includes(e17)) {
        o12.splice(o12.indexOf(e17), 1);
      }
    }
  }
  console.error(`${e16}: ${n16} (${o12}) | ${e16}: ${s13} (${o12})`);
};
var u2 = (e16, r14, t26, n16 = false) => {
  if (t26 && typeof t26 === "string" && t26.trim() === "" || !t26 || t26 === "" || n16) {
    if (!e16.includes(r14)) {
      e16.push(r14);
    }
  } else if (e16.includes(r14)) {
    e16.splice(e16.indexOf(r14), 1);
  }
  return e16;
};
var i2 = (e16, r14) => {
  const t26 = e16.filter((e17) => r14.includes(e17));
  return t26.length > 0 ? false : true;
};
var c2 = (e16, r14) => {
  const t26 = /^\d{4}-\d{2}-\d{2}$/;
  const n16 = /^\d{4}-\d{2}$/;
  let s13 = "";
  if (t26.test(e16)) {
    s13 = "full";
  } else if (n16.test(e16)) {
    s13 = "compact";
  } else {
    return false;
  }
  const o12 = `${e16}${s13 === "compact" ? "-15" : ""}`;
  return l2(o12);
};
function l2(e16) {
  const [r14, t26, n16] = e16.split("-").map(Number);
  const s13 = [1, 3, 5, 7, 8, 10, 12];
  const o12 = [4, 6, 9, 11];
  if (t26 < 1 || t26 > 12) {
    return false;
  } else if (o12.includes(t26) && (n16 < 1 || n16 > 30)) {
    return false;
  } else if (s13.includes(t26) && (n16 < 1 || n16 > 31)) {
    return false;
  } else if (!f2(r14) && t26 === 2 && (n16 < 1 || n16 > 28)) {
    return false;
  } else if (f2(r14) && t26 === 2 && (n16 < 1 || n16 > 29)) {
    return false;
  }
  return true;
}
function f2(e16) {
  return !(e16 & 3 || !(e16 % 25) && e16 & 15);
}
function m2(e16, r14, t26, n16, s13, o12, a11) {
  if (!r14.valid) {
    e16.errorMessage = r14.reason[o12];
    n16.emit({ message: `${t26} - ${r14.reason[o12]}` });
    if (r14.errors) {
      return r14.errors;
    }
  } else {
    e16.errorMessage = "";
    s13.emit();
  }
  return a11;
}
function p2(r14, t26, n16) {
  switch (r14) {
    case "valueMissing":
      return e3[t26][r14];
    case "typeMismatch":
      if (n16.type === "url" || n16.type === "email") {
        return e3[t26][r14][n16.type];
      } else {
        return e3[t26][r14];
      }
    case "tooLong":
      return e3[t26][r14].replace("{max}", n16.maxlength || n16.characterCount).replace("{current}", n16.value.length);
    case "tooShort":
      return e3[t26][r14].replace("{min}", n16.minlength).replace("{current}", n16.value.length);
    case "rangeUnderflow":
      return e3[t26][r14].replace("{min}", n16.min);
    case "rangeOverflow":
      return e3[t26][r14].replace("{max}", n16.max);
    case "stepMismatch":
      return e3[t26][r14].replace("{lower}", Math.floor(Number(n16.value) / Number(n16.step)) * Number(n16.step)).replace("{upper}", Math.floor(Number(n16.value) / Number(n16.step)) * Number(n16.step) + Number(n16.step));
    case "badInput":
    case "patternMismatch":
    default:
      return e3[t26][r14];
  }
}
function d2(e16) {
  if (e16 && e16.length > 0) {
    const r14 = e16.some((e17) => {
      var r15;
      return (r15 = e17.validity) === null || r15 === void 0 ? void 0 : r15.valid;
    });
    const t26 = { valueMissing: !r14, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, rangeUnderflow: false, rangeOverflow: false, stepMismatch: false, badInput: false, customError: false, valid: r14 };
    return t26;
  }
}

// node_modules/@gcds-core/components/dist/components/p-kG5FPFaH.js
var s3 = "@layer reset, default, border, margin, padding, alignment, size, layout;@layer reset{:host{display:block}:host .gcds-container{box-sizing:border-box;display:block;margin:0;padding:0}:host .gcds-container slot{display:initial}}@layer default{:host .gcds-container[class*=size]{width:var(--gcds-container-size-full)}}@layer border{:host .gcds-container.container-border{border:var(--gcds-container-border)}}@layer margin{:host .gcds-container.m-0{margin:var(--gcds-container-spacing-0)}:host .gcds-container.m-25{margin:var(--gcds-container-spacing-25)}:host .gcds-container.m-50{margin:var(--gcds-container-spacing-50)}:host .gcds-container.m-75{margin:var(--gcds-container-spacing-75)}:host .gcds-container.m-100{margin:var(--gcds-container-spacing-100)}:host .gcds-container.m-125{margin:var(--gcds-container-spacing-125)}:host .gcds-container.m-150{margin:var(--gcds-container-spacing-150)}:host .gcds-container.m-175{margin:var(--gcds-container-spacing-175)}:host .gcds-container.m-200{margin:var(--gcds-container-spacing-200)}:host .gcds-container.m-225{margin:var(--gcds-container-spacing-225)}:host .gcds-container.m-250{margin:var(--gcds-container-spacing-250)}:host .gcds-container.m-300{margin:var(--gcds-container-spacing-300)}:host .gcds-container.m-350{margin:var(--gcds-container-spacing-350)}:host .gcds-container.m-400{margin:var(--gcds-container-spacing-400)}:host .gcds-container.m-450{margin:var(--gcds-container-spacing-450)}:host .gcds-container.m-500{margin:var(--gcds-container-spacing-500)}:host .gcds-container.m-550{margin:var(--gcds-container-spacing-550)}:host .gcds-container.m-600{margin:var(--gcds-container-spacing-600)}:host .gcds-container.m-650{margin:var(--gcds-container-spacing-650)}:host .gcds-container.m-700{margin:var(--gcds-container-spacing-700)}:host .gcds-container.m-750{margin:var(--gcds-container-spacing-750)}:host .gcds-container.m-800{margin:var(--gcds-container-spacing-800)}:host .gcds-container.m-850{margin:var(--gcds-container-spacing-850)}:host .gcds-container.m-900{margin:var(--gcds-container-spacing-900)}:host .gcds-container.m-950{margin:var(--gcds-container-spacing-950)}:host .gcds-container.m-1000{margin:var(--gcds-container-spacing-1000)}:host .gcds-container.m-1050{margin:var(--gcds-container-spacing-1050)}:host .gcds-container.m-1100{margin:var(--gcds-container-spacing-1100)}:host .gcds-container.m-1150{margin:var(--gcds-container-spacing-1150)}:host .gcds-container.m-1200{margin:var(--gcds-container-spacing-1200)}:host .gcds-container.m-1250{margin:var(--gcds-container-spacing-1250)}}@layer padding{:host .gcds-container.p-0{padding:var(--gcds-container-spacing-0)}:host .gcds-container.p-25{padding:var(--gcds-container-spacing-25)}:host .gcds-container.p-50{padding:var(--gcds-container-spacing-50)}:host .gcds-container.p-75{padding:var(--gcds-container-spacing-75)}:host .gcds-container.p-100{padding:var(--gcds-container-spacing-100)}:host .gcds-container.p-125{padding:var(--gcds-container-spacing-125)}:host .gcds-container.p-150{padding:var(--gcds-container-spacing-150)}:host .gcds-container.p-175{padding:var(--gcds-container-spacing-175)}:host .gcds-container.p-200{padding:var(--gcds-container-spacing-200)}:host .gcds-container.p-225{padding:var(--gcds-container-spacing-225)}:host .gcds-container.p-250{padding:var(--gcds-container-spacing-250)}:host .gcds-container.p-300{padding:var(--gcds-container-spacing-300)}:host .gcds-container.p-350{padding:var(--gcds-container-spacing-350)}:host .gcds-container.p-400{padding:var(--gcds-container-spacing-400)}:host .gcds-container.p-450{padding:var(--gcds-container-spacing-450)}:host .gcds-container.p-500{padding:var(--gcds-container-spacing-500)}:host .gcds-container.p-550{padding:var(--gcds-container-spacing-550)}:host .gcds-container.p-600{padding:var(--gcds-container-spacing-600)}:host .gcds-container.p-650{padding:var(--gcds-container-spacing-650)}:host .gcds-container.p-700{padding:var(--gcds-container-spacing-700)}:host .gcds-container.p-750{padding:var(--gcds-container-spacing-750)}:host .gcds-container.p-800{padding:var(--gcds-container-spacing-800)}:host .gcds-container.p-850{padding:var(--gcds-container-spacing-850)}:host .gcds-container.p-900{padding:var(--gcds-container-spacing-900)}:host .gcds-container.p-950{padding:var(--gcds-container-spacing-950)}:host .gcds-container.p-1000{padding:var(--gcds-container-spacing-1000)}:host .gcds-container.p-1050{padding:var(--gcds-container-spacing-1050)}:host .gcds-container.p-1100{padding:var(--gcds-container-spacing-1100)}:host .gcds-container.p-1150{padding:var(--gcds-container-spacing-1150)}:host .gcds-container.p-1200{padding:var(--gcds-container-spacing-1200)}:host .gcds-container.p-1250{padding:var(--gcds-container-spacing-1250)}}@layer alignment{:host .gcds-container.alignment-start{margin-inline-start:0!important}:host .gcds-container.alignment-center{margin-inline:auto!important}:host .gcds-container.alignment-end{margin-inline-end:0!important;margin-inline-start:auto!important}}@layer size{:host .gcds-container.size-xl{max-width:var(--gcds-container-size-xl)}:host .gcds-container.size-lg{max-width:var(--gcds-container-size-lg)}:host .gcds-container.size-md{max-width:var(--gcds-container-size-md)}:host .gcds-container.size-sm{max-width:var(--gcds-container-size-sm)}:host .gcds-container.size-xs{max-width:var(--gcds-container-size-xs)}}@layer layout{:host .gcds-container.layout-full{max-width:100%!important}:host .gcds-container.layout-page{margin-inline:auto!important;max-width:90%!important;width:var(--gcds-container-size-xl)!important}}";
var t3 = Et(class n3 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.border = false;
    this.size = "full";
    this.tag = "div";
  }
  render() {
    const { alignment: n16, border: a11, layout: s13, margin: t26, padding: r14, size: g13, tag: o12 } = this;
    const d17 = o12;
    return ye(ge, { key: "c8b1e6c3e57435cc8998b15b27cb46d7c6aa2957" }, ye(d17, { key: "2288e5b16bcb4a169b9ba792f17fba37966041a8", class: `
            gcds-container
            ${a11 ? "container-border" : ""}
            ${n16 && s13 != "page" ? `alignment-${n16}` : ""}
            ${s13 ? `layout-${s13}` : ""}
            ${t26 ? `m-${t26}` : ""}
            ${r14 ? `p-${r14}` : ""}
            ${g13 ? `size-${g13}` : ""}
          ` }, ye("slot", { key: "660586f2cb48bcfdf6eec5917e58cd6775c2f387" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return s3;
  }
}, [1, "gcds-container", { alignment: [1], border: [4], layout: [1], margin: [1], padding: [1], size: [1], tag: [1] }]);
function r3() {
  if (typeof customElements === "undefined") {
    return;
  }
  const n16 = ["gcds-container"];
  n16.forEach((n17) => {
    switch (n17) {
      case "gcds-container":
        if (!customElements.get(n17)) {
          customElements.define(n17, t3);
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/p-CwNv12Ch.js
var s4 = { en: { nameError: "gcds-icon: Invalid name." }, fr: { nameError: "gcds-icon: Nom invalide." } };
var o3 = '@layer reset, default, names, margin, size;\n@layer reset {\n  :host {\n    display: inline-block;\n  }\n  :host :host .gcds-icon {\n    font-size: inherit;\n    line-height: inherit;\n    color: inherit;\n  }\n}\n@layer default {\n  :host .gcds-icon {\n    font-family: var(--gcds-icon-font-family) !important;\n    speak: never;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n}\n@layer names {\n  :host .gcds-icon-checkmark-circle:before {\n    content: "\\e908";\n  }\n  :host .gcds-icon-chevron-down:before {\n    content: "\\e900";\n  }\n  :host .gcds-icon-chevron-left:before {\n    content: "\\e901";\n  }\n  :host .gcds-icon-chevron-right:before {\n    content: "\\e902";\n  }\n  :host .gcds-icon-chevron-up:before {\n    content: "\\e903";\n  }\n  :host .gcds-icon-close:before {\n    content: "\\e90b";\n  }\n  :host .gcds-icon-download:before {\n    content: "\\e906";\n  }\n  :host .gcds-icon-email:before {\n    content: "\\e905";\n  }\n  :host .gcds-icon-exclamation-circle:before {\n    content: "\\e909";\n  }\n  :host .gcds-icon-external:before {\n    content: "\\e904";\n  }\n  :host .gcds-icon-info-circle:before {\n    content: "\\e90a";\n  }\n  :host .gcds-icon-phone:before {\n    content: "\\e90c";\n  }\n  :host .gcds-icon-search:before {\n    content: "\\e907";\n  }\n  :host .gcds-icon-warning-triangle:before {\n    content: "\\e90d";\n  }\n}\n@layer margin {\n  :host .gcds-icon {\n    /* Margin left */\n  }\n  :host .gcds-icon.ml-0 {\n    margin-inline-start: var(--gcds-icon-margin-0);\n  }\n  :host .gcds-icon.ml-25 {\n    margin-inline-start: var(--gcds-icon-margin-25);\n  }\n  :host .gcds-icon.ml-50 {\n    margin-inline-start: var(--gcds-icon-margin-50);\n  }\n  :host .gcds-icon.ml-75 {\n    margin-inline-start: var(--gcds-icon-margin-75);\n  }\n  :host .gcds-icon.ml-100 {\n    margin-inline-start: var(--gcds-icon-margin-100);\n  }\n  :host .gcds-icon.ml-125 {\n    margin-inline-start: var(--gcds-icon-margin-125);\n  }\n  :host .gcds-icon.ml-150 {\n    margin-inline-start: var(--gcds-icon-margin-150);\n  }\n  :host .gcds-icon.ml-175 {\n    margin-inline-start: var(--gcds-icon-margin-175);\n  }\n  :host .gcds-icon.ml-200 {\n    margin-inline-start: var(--gcds-icon-margin-200);\n  }\n  :host .gcds-icon.ml-225 {\n    margin-inline-start: var(--gcds-icon-margin-225);\n  }\n  :host .gcds-icon.ml-250 {\n    margin-inline-start: var(--gcds-icon-margin-250);\n  }\n  :host .gcds-icon.ml-300 {\n    margin-inline-start: var(--gcds-icon-margin-300);\n  }\n  :host .gcds-icon.ml-350 {\n    margin-inline-start: var(--gcds-icon-margin-350);\n  }\n  :host .gcds-icon.ml-400 {\n    margin-inline-start: var(--gcds-icon-margin-400);\n  }\n  :host .gcds-icon.ml-450 {\n    margin-inline-start: var(--gcds-icon-margin-450);\n  }\n  :host .gcds-icon.ml-500 {\n    margin-inline-start: var(--gcds-icon-margin-500);\n  }\n  :host .gcds-icon.ml-550 {\n    margin-inline-start: var(--gcds-icon-margin-550);\n  }\n  :host .gcds-icon.ml-600 {\n    margin-inline-start: var(--gcds-icon-margin-600);\n  }\n  :host .gcds-icon.ml-650 {\n    margin-inline-start: var(--gcds-icon-margin-650);\n  }\n  :host .gcds-icon.ml-700 {\n    margin-inline-start: var(--gcds-icon-margin-700);\n  }\n  :host .gcds-icon.ml-750 {\n    margin-inline-start: var(--gcds-icon-margin-750);\n  }\n  :host .gcds-icon.ml-800 {\n    margin-inline-start: var(--gcds-icon-margin-800);\n  }\n  :host .gcds-icon.ml-850 {\n    margin-inline-start: var(--gcds-icon-margin-850);\n  }\n  :host .gcds-icon.ml-900 {\n    margin-inline-start: var(--gcds-icon-margin-900);\n  }\n  :host .gcds-icon.ml-950 {\n    margin-inline-start: var(--gcds-icon-margin-950);\n  }\n  :host .gcds-icon.ml-1000 {\n    margin-inline-start: var(--gcds-icon-margin-1000);\n  }\n  :host .gcds-icon.ml-1050 {\n    margin-inline-start: var(--gcds-icon-margin-1050);\n  }\n  :host .gcds-icon.ml-1100 {\n    margin-inline-start: var(--gcds-icon-margin-1100);\n  }\n  :host .gcds-icon.ml-1150 {\n    margin-inline-start: var(--gcds-icon-margin-1150);\n  }\n  :host .gcds-icon.ml-1200 {\n    margin-inline-start: var(--gcds-icon-margin-1200);\n  }\n  :host .gcds-icon.ml-1250 {\n    margin-inline-start: var(--gcds-icon-margin-1250);\n  }\n  :host .gcds-icon {\n    /* Margin right */\n  }\n  :host .gcds-icon.mr-0 {\n    margin-inline-end: var(--gcds-icon-margin-0);\n  }\n  :host .gcds-icon.mr-25 {\n    margin-inline-end: var(--gcds-icon-margin-25);\n  }\n  :host .gcds-icon.mr-50 {\n    margin-inline-end: var(--gcds-icon-margin-50);\n  }\n  :host .gcds-icon.mr-75 {\n    margin-inline-end: var(--gcds-icon-margin-75);\n  }\n  :host .gcds-icon.mr-100 {\n    margin-inline-end: var(--gcds-icon-margin-100);\n  }\n  :host .gcds-icon.mr-125 {\n    margin-inline-end: var(--gcds-icon-margin-125);\n  }\n  :host .gcds-icon.mr-150 {\n    margin-inline-end: var(--gcds-icon-margin-150);\n  }\n  :host .gcds-icon.mr-175 {\n    margin-inline-end: var(--gcds-icon-margin-175);\n  }\n  :host .gcds-icon.mr-200 {\n    margin-inline-end: var(--gcds-icon-margin-200);\n  }\n  :host .gcds-icon.mr-225 {\n    margin-inline-end: var(--gcds-icon-margin-225);\n  }\n  :host .gcds-icon.mr-250 {\n    margin-inline-end: var(--gcds-icon-margin-250);\n  }\n  :host .gcds-icon.mr-300 {\n    margin-inline-end: var(--gcds-icon-margin-300);\n  }\n  :host .gcds-icon.mr-350 {\n    margin-inline-end: var(--gcds-icon-margin-350);\n  }\n  :host .gcds-icon.mr-400 {\n    margin-inline-end: var(--gcds-icon-margin-400);\n  }\n  :host .gcds-icon.mr-450 {\n    margin-inline-end: var(--gcds-icon-margin-450);\n  }\n  :host .gcds-icon.mr-500 {\n    margin-inline-end: var(--gcds-icon-margin-500);\n  }\n  :host .gcds-icon.mr-550 {\n    margin-inline-end: var(--gcds-icon-margin-550);\n  }\n  :host .gcds-icon.mr-600 {\n    margin-inline-end: var(--gcds-icon-margin-600);\n  }\n  :host .gcds-icon.mr-650 {\n    margin-inline-end: var(--gcds-icon-margin-650);\n  }\n  :host .gcds-icon.mr-700 {\n    margin-inline-end: var(--gcds-icon-margin-700);\n  }\n  :host .gcds-icon.mr-750 {\n    margin-inline-end: var(--gcds-icon-margin-750);\n  }\n  :host .gcds-icon.mr-800 {\n    margin-inline-end: var(--gcds-icon-margin-800);\n  }\n  :host .gcds-icon.mr-850 {\n    margin-inline-end: var(--gcds-icon-margin-850);\n  }\n  :host .gcds-icon.mr-900 {\n    margin-inline-end: var(--gcds-icon-margin-900);\n  }\n  :host .gcds-icon.mr-950 {\n    margin-inline-end: var(--gcds-icon-margin-950);\n  }\n  :host .gcds-icon.mr-1000 {\n    margin-inline-end: var(--gcds-icon-margin-1000);\n  }\n  :host .gcds-icon.mr-1050 {\n    margin-inline-end: var(--gcds-icon-margin-1050);\n  }\n  :host .gcds-icon.mr-1100 {\n    margin-inline-end: var(--gcds-icon-margin-1100);\n  }\n  :host .gcds-icon.mr-1150 {\n    margin-inline-end: var(--gcds-icon-margin-1150);\n  }\n  :host .gcds-icon.mr-1200 {\n    margin-inline-end: var(--gcds-icon-margin-1200);\n  }\n  :host .gcds-icon.mr-1250 {\n    margin-inline-end: var(--gcds-icon-margin-1250);\n  }\n}\n@layer size {\n  :host .gcds-icon.size-text-small {\n    font-size: var(--gcds-icon-font-size-text-small);\n    line-height: var(--gcds-icon-line-height-text-small);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-text-small {\n      font-size: var(--gcds-icon-font-size-text-small-mobile);\n      line-height: var(--gcds-icon-line-height-text-small-mobile);\n    }\n  }\n  :host .gcds-icon.size-text {\n    font-size: var(--gcds-icon-font-size-text);\n    line-height: var(--gcds-icon-line-height-text);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-text {\n      font-size: var(--gcds-icon-font-size-text-mobile);\n      line-height: var(--gcds-icon-line-height-text-mobile);\n    }\n  }\n  :host .gcds-icon.size-h6 {\n    font-size: var(--gcds-icon-font-size-h6);\n    line-height: var(--gcds-icon-line-height-h6);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h6 {\n      font-size: var(--gcds-icon-font-size-h6-mobile);\n      line-height: var(--gcds-icon-line-height-h6-mobile);\n    }\n  }\n  :host .gcds-icon.size-h5 {\n    font-size: var(--gcds-icon-font-size-h5);\n    line-height: var(--gcds-icon-line-height-h5);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h5 {\n      font-size: var(--gcds-icon-font-size-h5-mobile);\n      line-height: var(--gcds-icon-line-height-h5-mobile);\n    }\n  }\n  :host .gcds-icon.size-h4 {\n    font-size: var(--gcds-icon-font-size-h4);\n    line-height: var(--gcds-icon-line-height-h4);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h4 {\n      font-size: var(--gcds-icon-font-size-h4-mobile);\n      line-height: var(--gcds-icon-line-height-h4-mobile);\n    }\n  }\n  :host .gcds-icon.size-h3 {\n    font-size: var(--gcds-icon-font-size-h3);\n    line-height: var(--gcds-icon-line-height-h3);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h3 {\n      font-size: var(--gcds-icon-font-size-h3-mobile);\n      line-height: var(--gcds-icon-line-height-h3-mobile);\n    }\n  }\n  :host .gcds-icon.size-h2 {\n    font-size: var(--gcds-icon-font-size-h2);\n    line-height: var(--gcds-icon-line-height-h2);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h2 {\n      font-size: var(--gcds-icon-font-size-h2-mobile);\n      line-height: var(--gcds-icon-line-height-h2-mobile);\n    }\n  }\n  :host .gcds-icon.size-h1 {\n    font-size: var(--gcds-icon-font-size-h1);\n    line-height: var(--gcds-icon-line-height-h1);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h1 {\n      font-size: var(--gcds-icon-font-size-h1-mobile);\n      line-height: var(--gcds-icon-line-height-h1-mobile);\n    }\n  }\n}';
var r4 = Et(class n4 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.size = "inherit";
  }
  validateName(n16) {
    const i12 = ["checkmark-circle", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "close", "download", "email", "exclamation-circle", "external", "info-circle", "phone", "search", "warning-triangle"];
    if (!i12.includes(n16)) {
      console.error(`${s4["en"].nameError} | ${s4["fr"].nameError}`);
    }
  }
  validateSize(n16) {
    const i12 = ["inherit", "text-small", "text", "h6", "h5", "h4", "h3", "h2", "h1"];
    if (!i12.includes(n16)) {
      this.size = "inherit";
    }
  }
  componentWillLoad() {
    this.validateName(this.name);
    this.validateSize(this.size);
  }
  render() {
    const { label: n16, marginLeft: i12, marginRight: s13, name: o12, size: r14 } = this;
    return ye(ge, { key: "9767ef8285004f25317ad156ac39d21a0267c6d3" }, ye("span", { key: "c7a3dfe9ed1b093e5a6d9a37bdc5c11e7154b462", class: `
            gcds-icon gcds-icon-${o12}
            ${i12 ? `ml-${i12}` : ""}
            ${s13 ? `mr-${s13}` : ""}
            ${r14 ? `size-${r14}` : ""}
          `, role: "img", "aria-label": n16 ? n16 : false, "aria-hidden": n16 ? "false" : "true" }));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { name: ["validateName"], size: ["validateSize"] };
  }
  static get style() {
    return o3;
  }
}, [1, "gcds-icon", { label: [1], marginLeft: [1, "margin-left"], marginRight: [1, "margin-right"], name: [1025], size: [1] }, void 0, { name: ["validateName"], size: ["validateSize"] }]);
function t4() {
  if (typeof customElements === "undefined") {
    return;
  }
  const n16 = ["gcds-icon"];
  n16.forEach((n17) => {
    switch (n17) {
      case "gcds-icon":
        if (!customElements.get(n17)) {
          customElements.define(n17, r4);
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/gcds-alert.js
var d3 = { en: { label: { danger: "This is a critical alert.", info: "This is an info alert.", success: "This is a success alert.", warning: "This is a warning alert." }, closeBtn: "Close alert." }, fr: { label: { danger: "Ceci est une alerte d'effacement.", info: "Ceci est une alerte d'information.", success: "Ceci est une alerte de succès.", warning: "Ceci est une alerte d'avertissement." }, closeBtn: "Fermer l'alerte." } };
var g2 = "@layer reset, default, fixed, role, wide, compact, hover, focus;@layer reset{:host{display:block}:host .gcds-alert{box-sizing:border-box;text-align:left}:host .gcds-alert .alert__close-btn{box-sizing:border-box;cursor:pointer;padding:0}:host .gcds-alert slot{display:initial}}@layer default{:host .gcds-alert{border-inline-start:var(--gcds-alert-border-width) solid transparent;color:var(--gcds-alert-text);container:component alert/inline-size;font:var(--gcds-alert-font);padding:var(--gcds-alert-padding)}:host .gcds-alert .alert__content{flex:1 1 auto}:host .gcds-alert .alert__content .alert__heading{font:var(--gcds-alert-content-heading-font);margin:var(--gcds-alert-content-heading-margin)}:host .gcds-alert .alert__content ::slotted(*){margin-block-start:0}:host .gcds-alert .alert__content ::slotted(:last-child){margin-block-end:0}:host .gcds-alert .alert__content ::slotted(:not(:last-child)){margin-block-end:var(--gcds-alert-content-slotted-margin)}:host .gcds-alert .alert__content ::slotted(ol),:host .gcds-alert .alert__content ::slotted(ul){margin-inline-start:var(--gcds-alert-content-slotted-list-margin);padding:0}:host .gcds-alert .alert__close-btn{background-color:var(--gcds-alert-button-default-background);border:var(--gcds-alert-button-border-width) solid transparent;border-radius:var(--gcds-alert-button-border-radius);color:var(--gcds-alert-button-default-text);margin:var(--gcds-alert-button-margin);transition:all .15s ease-in-out}:host .gcds-alert .alert__close-btn gcds-icon{align-items:center;display:flex;height:var(--gcds-alert-button-icon-width-and-height);justify-content:center;padding:var(--gcds-alert-button-icon-padding);width:var(--gcds-alert-button-icon-width-and-height)}}@layer fixed{:host .gcds-alert.alert--is-fixed{border:0;position:sticky;top:0;width:100%;z-index:9999}}@layer role{:host .gcds-alert.alert--role-danger{background-color:var(--gcds-alert-danger-background);border-color:var(--gcds-alert-danger-icon);color:var(--gcds-alert-danger-text)}:host .gcds-alert.alert--role-danger .alert__icon{color:var(--gcds-alert-danger-icon)}:host .gcds-alert.alert--role-info{background-color:var(--gcds-alert-info-background);border-color:var(--gcds-alert-info-icon);color:var(--gcds-alert-info-text)}:host .gcds-alert.alert--role-info .alert__icon{color:var(--gcds-alert-info-icon)}:host .gcds-alert.alert--role-success{background-color:var(--gcds-alert-success-background);border-color:var(--gcds-alert-success-icon);color:var(--gcds-alert-success-text)}:host .gcds-alert.alert--role-success .alert__icon{color:var(--gcds-alert-success-icon)}:host .gcds-alert.alert--role-warning{background-color:var(--gcds-alert-warning-background);border-color:var(--gcds-alert-warning-icon);color:var(--gcds-alert-warning-text)}:host .gcds-alert.alert--role-warning .alert__icon{color:var(--gcds-alert-warning-icon)}}@layer wide{@container alert (width >= 36em){:host .gcds-alert .alert__container{align-items:flex-start;display:flex}}}@layer compact{@container alert (width < 36em){:host .gcds-alert .alert__icon{margin:var(--gcds-alert-icon-mobile-margin)}:host .gcds-alert .alert__heading{margin:var(--gcds-alert-content-heading-mobile-margin)}:host .gcds-alert .alert__close-btn{margin:var(--gcds-alert-button-mobile-margin)}}}@layer hover{:is(:host .gcds-alert .alert__close-btn:active,:host .gcds-alert .alert__close-btn:hover){border-color:currentColor}}@layer focus{:host .gcds-alert .alert__close-btn:focus{background-color:var(--gcds-alert-button-focus-background);border-color:var(--gcds-alert-button-focus-background);box-shadow:0 0 0 var(--gcds-alert-button-border-width) var(--gcds-alert-button-focus-text);color:var(--gcds-alert-button-focus-text);outline:var(--gcds-alert-button-outline-width) solid var(--gcds-alert-button-focus-background);outline-offset:var(--gcds-alert-button-border-width)}}";
var h3 = Et(class t5 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsDismiss = Ue(this, "gcdsDismiss");
    this.alertRole = "info";
    this.container = "full";
    this.hideCloseBtn = false;
    this.hideRoleIcon = false;
    this.isFixed = false;
    this.isOpen = true;
  }
  updateLang() {
    const t26 = new MutationObserver((t27) => {
      if (t27[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    t26.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
  }
  render() {
    const { alertRole: t26, container: e16, heading: r14, hideCloseBtn: o12, hideRoleIcon: l17, isFixed: c19, isOpen: i12, lang: g13 } = this;
    return ye(ge, { key: "9ca55e2b6562e7dfda9e367b21b5d2aa3bbe37d7" }, i12 ? ye("div", { class: `gcds-alert alert--role-${t26} ${c19 ? "alert--is-fixed" : ""}`, role: "alert", "aria-label": t26 === "danger" ? d3[g13].label.danger : t26 === "info" ? d3[g13].label.info : t26 === "success" ? d3[g13].label.success : t26 === "warning" ? d3[g13].label.warning : null }, ye("gcds-container", { size: c19 ? e16 : "full", alignment: "center" }, ye("div", { class: "alert__container" }, !l17 && ye("gcds-icon", { "aria-hidden": "true", class: "alert__icon", size: "h5", "margin-right": "175", name: t26 === "danger" ? "exclamation-circle" : t26 === "info" ? "info-circle" : t26 === "success" ? "checkmark-circle" : t26 === "warning" ? "warning-triangle" : null }), ye("div", { class: "alert__content" }, ye("p", { class: "alert__heading" }, ye("strong", null, r14)), ye("slot", null)), !o12 && ye("button", { class: "alert__close-btn", onClick: (t27) => {
      const e17 = o2(t27, this.gcdsDismiss);
      if (e17) {
        this.isOpen = false;
      }
    }, "aria-label": d3[g13].closeBtn }, ye("gcds-icon", { "aria-hidden": "true", name: "close", size: "text" }))))) : null);
  }
  get el() {
    return this;
  }
  static get style() {
    return g2;
  }
}, [1, "gcds-alert", { alertRole: [1, "alert-role"], container: [1], heading: [1], hideCloseBtn: [4, "hide-close-btn"], hideRoleIcon: [4, "hide-role-icon"], isFixed: [1028, "is-fixed"], isOpen: [32], lang: [32] }]);
function u3() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-alert", "gcds-container", "gcds-icon"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-alert":
        if (!customElements.get(t27)) {
          customElements.define(t27, h3);
        }
        break;
      case "gcds-container":
        if (!customElements.get(t27)) {
          r3();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(t27)) {
          t4();
        }
        break;
    }
  });
}
var f3 = u3;

// node_modules/@gcds-core/components/dist/components/p-DndacsTk.js
var c3 = { en: { external: " (Opens destination in a new tab.)", phone: " (Attempts to open a phone app.)", download: " (Attempts to download a file to the device.)", email: " (Opens new message in email program.)" }, fr: { external: " (Ouvre l'emplacement dans un nouvel onglet.)", phone: " (Tente d'ouvrir une application de téléphonie.)", download: " (Tente de télécharger un fichier sur l'appareil.)", email: " (Ouvre un nouveau message dans le logiciel de messagerie.)" } };
var h4 = "@layer reset, default, display, size, roles, hover, visited, focus;@layer reset{:host{display:inline}:host slot{display:initial}}@layer default{:host .gcds-link{color:var(--gcds-link-default);cursor:pointer;text-decoration-color:currentColor;text-decoration-style:solid;text-decoration-thickness:var(--gcds-link-decoration-thickness);text-underline-offset:var(--gcds-link-underline-offset);transition:all .35s}}@layer display{:host .gcds-link.d-block{display:block}}@layer size{:host .gcds-link.link--small{font:var(--gcds-link-font-small-desktop)}@media only screen and (width < 48em){:host .gcds-link.link--small{font:var(--gcds-link-font-small-mobile)}}:host .gcds-link.link--regular{font:var(--gcds-link-font-regular-desktop)}@media only screen and (width < 48em){:host .gcds-link.link--regular{font:var(--gcds-link-font-regular-mobile)}}:host .gcds-link.link--inherit{font:inherit}}@layer roles{:host .gcds-link.role-light{color:var(--gcds-link-light)}}@layer hover{@media (hover:hover){:host .gcds-link:hover{text-decoration-thickness:var(--gcds-link-hover-decoration-thickness)}:host .gcds-link:hover:not(.role-light){color:var(--gcds-link-hover)}}}@layer visited{:host .gcds-link:not(.role-light):visited{color:var(--gcds-link-visited)}}@layer focus{:host .gcds-link:focus{background-color:var(--gcds-link-focus-background);border-radius:var(--gcds-link-focus-border-radius);box-shadow:var(--gcds-link-focus-box-shadow);color:var(--gcds-link-focus-text);outline:var(--gcds-link-focus-outline-width) solid var(--gcds-link-focus-background);outline-offset:var(--gcds-link-focus-outline-offset);text-decoration:none}}";
var g3 = Et(class e4 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsClick = Ue(this, "gcdsClick");
    this.linkRole = "default";
    this.size = "inherit";
    this.display = "inline";
    this.target = "_self";
    this.external = false;
    this.inheritedAttributes = {};
  }
  validateLinkRole(e16) {
    const i12 = ["default", "light"];
    if (!i12.includes(e16)) {
      this.linkRole = "default";
    }
  }
  validateSize(e16) {
    const i12 = ["regular", "small", "inherit"];
    if (!i12.includes(e16)) {
      this.size = "inherit";
    }
  }
  validateDisplay(e16) {
    const i12 = ["block", "inline"];
    if (!i12.includes(e16)) {
      this.display = "inline";
    }
  }
  updateLang() {
    const e16 = new MutationObserver((e17) => {
      if (e17[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    e16.observe(this.el, s2);
  }
  componentWillLoad() {
    this.validateLinkRole(this.linkRole);
    this.validateSize(this.size);
    this.validateDisplay(this.display);
    this.inheritedAttributes = r2(this.el, this.shadowElement, ["referrerpolicy"]);
    this.lang = t2(this.el);
    this.updateLang();
  }
  render() {
    const { size: e16, lang: i12, display: t26, href: n16, rel: o12, target: a11, external: d17, download: h19, type: g13, inheritedAttributes: k6, linkRole: f12 } = this;
    const u16 = { href: n16, rel: o12, target: a11, download: h19, type: g13 };
    const p16 = a11 === "_blank" || d17;
    return ye(ge, { key: "8d4e6b5cd3ed08a2a562489238739f2906c02ad0" }, ye("a", Object.assign({ key: "14abc020fd24945d6e144f27073f0077d086e424", tabIndex: 0 }, u16, { class: `gcds-link link--${e16} ${t26 != "inline" ? `d-${t26}` : ""} ${f12 != "default" ? `role-${f12}` : ""}`, ref: (e17) => this.shadowElement = e17, target: p16 ? "_blank" : a11, rel: p16 ? "noopener noreferrer" : o12 }, k6, { part: "link", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (e17) => o2(e17, this.gcdsClick, n16) }), ye("slot", { key: "ada44987d3f50baa632557bbe745390cbfba03e3" }), a11 === "_blank" || d17 ? ye("gcds-icon", { name: "external", label: c3[i12].external, "margin-left": "75" }) : h19 !== void 0 ? ye("gcds-icon", { name: "download", label: c3[i12].download, "margin-left": "75" }) : n16 && n16.toLowerCase().startsWith("mailto:") ? ye("gcds-icon", { name: "email", label: c3[i12].email, "margin-left": "75" }) : n16 && n16.toLowerCase().startsWith("tel:") && ye("gcds-icon", { name: "phone", label: c3[i12].phone, "margin-left": "75" })));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { linkRole: ["validateLinkRole"], size: ["validateSize"], display: ["validateDisplay"] };
  }
  static get style() {
    return h4;
  }
}, [1, "gcds-link", { linkRole: [1025, "link-role"], size: [1025], display: [1025], href: [1], rel: [1], target: [1], external: [4], download: [1], type: [1], inheritedAttributes: [32], lang: [32] }, void 0, { linkRole: ["validateLinkRole"], size: ["validateSize"], display: ["validateDisplay"] }]);
function k2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-link", "gcds-icon"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-link":
        if (!customElements.get(e17)) {
          customElements.define(e17, g3);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(e17)) {
          t4();
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/p-L9JuOY3t.js
var d4 = `@layer reset, default, hover, focus;@layer reset{:host(.gcds-breadcrumbs-item){display:inline-block}:host(.gcds-breadcrumbs-item) gcds-link::part(link){display:inline-block;white-space:normal}:host(.gcds-breadcrumbs-item) slot{display:block}}@layer default{:host(.gcds-breadcrumbs-item){margin:var(--gcds-breadcrumbs-item-margin)!important}:host(.gcds-breadcrumbs-item):before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 8 14"><path fill="26374a" d="M7.7 6.3c.4.4.4 1 0 1.4l-6 6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L5.6 7 .3 1.7C-.1 1.3-.1.7.3.3s1-.4 1.4 0z"/></svg>');display:inline-block;margin:var(--gcds-breadcrumbs-item-arrow-margin);width:.375rem}:host(.gcds-breadcrumbs-item) gcds-link::part(link){font:var(--gcds-breadcrumbs-item-font)}}`;
var m3 = Et(class s5 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsClick = Ue(this, "gcdsClick");
  }
  render() {
    const { href: s13 } = this;
    return ye(ge, { key: "95b1e4dcb1f26c4bbecaed7084c46f7440a939c9", role: "listitem", class: "gcds-breadcrumbs-item" }, ye("gcds-link", { key: "c60332192cfe17f487017acbd89a49adbc288e19", size: "regular", href: s13 }, ye("slot", { key: "34993248082e9a129d2753695db93a7b5ac771f1" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return d4;
  }
}, [1, "gcds-breadcrumbs-item", { href: [1] }]);
function n5() {
  if (typeof customElements === "undefined") {
    return;
  }
  const s13 = ["gcds-breadcrumbs-item", "gcds-icon", "gcds-link"];
  s13.forEach((s14) => {
    switch (s14) {
      case "gcds-breadcrumbs-item":
        if (!customElements.get(s14)) {
          customElements.define(s14, m3);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(s14)) {
          t4();
        }
        break;
      case "gcds-link":
        if (!customElements.get(s14)) {
          k2();
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/gcds-breadcrumbs.js
var o4 = { en: { label: "Breadcrumb", link: "https://www.canada.ca/en.html" }, fr: { label: "Chemin de navigation", link: "https://www.canada.ca/fr.html" } };
var l3 = "@layer reset, default;@layer reset{:host{display:block}:host .gcds-breadcrumbs ol{list-style:none;overflow-x:hidden}}@layer default{:host .gcds-breadcrumbs ol{margin:var(--gcds-breadcrumbs-margin);padding:var(--gcds-breadcrumbs-padding)}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child:before,:host .gcds-breadcrumbs ol:not(.has-canada-link) ::slotted(:first-child):before{display:none}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child:before{display:none}}";
var b2 = Et(class s6 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.hideCanadaLink = false;
  }
  updateLang() {
    const s13 = new MutationObserver((s14) => {
      if (s14[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    s13.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
  }
  render() {
    const { hideCanadaLink: s13, lang: a11 } = this;
    return ye(ge, { key: "03039bf66fd3e4f7939818708e4b2e3eecb9ea16" }, ye("nav", { key: "a544a335b8a3308bac153517792c2ff9b24cc436", "aria-label": o4[a11].label, class: "gcds-breadcrumbs" }, ye("ol", { key: "f4daf2765861e5b362e50c5197e34457c2088aa4", class: s13 ? "" : "has-canada-link" }, !s13 ? ye("gcds-breadcrumbs-item", { href: o4[a11].link }, "Canada.ca") : null, ye("slot", { key: "0001a34312ea97c7e9c4f41f656051482184142e" }))));
  }
  get el() {
    return this;
  }
  static get style() {
    return l3;
  }
}, [1, "gcds-breadcrumbs", { hideCanadaLink: [4, "hide-canada-link"], lang: [32] }]);
function m4() {
  if (typeof customElements === "undefined") {
    return;
  }
  const s13 = ["gcds-breadcrumbs", "gcds-breadcrumbs-item", "gcds-icon", "gcds-link"];
  s13.forEach((s14) => {
    switch (s14) {
      case "gcds-breadcrumbs":
        if (!customElements.get(s14)) {
          customElements.define(s14, b2);
        }
        break;
      case "gcds-breadcrumbs-item":
        if (!customElements.get(s14)) {
          n5();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(s14)) {
          t4();
        }
        break;
      case "gcds-link":
        if (!customElements.get(s14)) {
          k2();
        }
        break;
    }
  });
}
var u4 = m4;

// node_modules/@gcds-core/components/dist/components/gcds-breadcrumbs-item.js
var p3 = n5;

// node_modules/@gcds-core/components/dist/components/p-HszCmuc6.js
var l4 = { en: { label: "Opens in a new tab." }, fr: { label: "S'ouvre dans un nouvel onglet." } };
var u5 = "@layer reset, default, roles, size, disabled, hover, focus, active, mobile;@layer reset{:host{display:inline-block}:host .gcds-button{box-sizing:border-box;cursor:pointer;text-decoration:none}:host slot{display:initial}}@layer default{:host .gcds-button{border:var(--gcds-button-border-width) solid transparent;border-radius:var(--gcds-button-border-radius);display:inline-block;font:var(--gcds-button-font-desktop);padding:var(--gcds-button-padding);text-align:center;text-wrap:balance;transition:all .15s ease-in-out;width:var(--gcds-button-width)}@media only screen and (width < 48em){:host .gcds-button{font:var(--gcds-button-font-mobile)}}}@layer roles{:host .gcds-button.button--role-danger{background-color:var(--gcds-button-danger-default-background);color:var(--gcds-button-danger-default-text)}:host .gcds-button.button--role-primary{background-color:var(--gcds-button-primary-default-background);color:var(--gcds-button-primary-default-text)}:host .gcds-button.button--role-start{background-color:var(--gcds-button-start-default-background);color:var(--gcds-button-start-default-text);font:var(--gcds-button-start-font-desktop);padding:var(--gcds-button-start-padding)}@media only screen and (width < 48em){:host .gcds-button.button--role-start{font:var(--gcds-button-start-font-mobile)}}:host .gcds-button.button--role-secondary{background-color:var(--gcds-button-secondary-default-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-secondary-default-text)}}@layer size{:host .gcds-button.button--small{font:var(--gcds-button-small-font-desktop);padding:var(--gcds-button-small-padding)}@media only screen and (width < 48em){:host .gcds-button.button--small{font:var(--gcds-button-small-font-mobile)}}}@layer disabled{:host([disabled]){pointer-events:none}:host([disabled]) .gcds-button[aria-disabled=true]{cursor:not-allowed;opacity:var(--gcds-button-shared-disabled-opacity);pointer-events:none}}@layer hover{@media (hover:hover){:host .gcds-button:hover.button--role-danger{background-color:var(--gcds-button-danger-hover-background)}:host .gcds-button:hover.button--role-primary{background-color:var(--gcds-button-primary-hover-background)}:host .gcds-button:hover.button--role-start{background-color:var(--gcds-button-start-hover-background)}:host .gcds-button:hover.button--role-secondary{background-color:var(--gcds-button-secondary-hover-background)}}}@layer focus{:host .gcds-button:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}}@layer active{:host .gcds-button:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background);color:var(--gcds-button-shared-active-text)}}@layer mobile{@media screen and (max-width:30rem){:host{display:block}:host .gcds-button{margin:var(--gcds-button-mobile-margin);width:var(--gcds-button-mobile-width)}}}";
var b3 = Et(class t6 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsClick = Ue(this, "gcdsClick");
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.type = "button";
    this.buttonRole = "primary";
    this.size = "regular";
    this.inheritedAttributes = {};
    this.handleClick = (t26) => {
      const o12 = this.type === "submit" ? this.value : this.type === "link" ? this.href : void 0;
      const s13 = o2(t26, this.gcdsClick, o12);
      if (s13) {
        if (!this.disabled && this.type != "button" && this.type != "link") {
          const o13 = this.el.closest("form");
          if (o13) {
            t26.preventDefault();
            const s14 = document.createElement("button");
            s14.type = this.type;
            if (this.name) {
              s14.name = this.name;
            }
            if (this.value) {
              s14.value = this.value;
            }
            s14.style.display = "none";
            o13.appendChild(s14);
            s14.click();
            s14.remove();
          }
        }
        this.inheritedAttributes = r2(this.el, this.shadowElement);
      }
    };
  }
  validateType(t26) {
    const o12 = ["submit", "reset", "button", "link"];
    if (!o12.includes(t26)) {
      this.type = "button";
    }
  }
  validateButtonRole(t26) {
    const o12 = ["start", "primary", "secondary", "danger"];
    if (!o12.includes(t26)) {
      this.buttonRole = "primary";
    } else if (t26 === "start" && this.size === "small") {
      this.size = "regular";
    }
  }
  validateSize(t26) {
    const o12 = ["regular", "small"];
    if (!o12.includes(t26) || this.buttonRole === "start") {
      this.size = "regular";
    }
  }
  validateDisabled(t26) {
    if (t26 === false || t26 === true && this.type === "link") {
      this.el.removeAttribute("disabled");
    }
  }
  updateLang() {
    const t26 = new MutationObserver((t27) => {
      if (t27[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    t26.observe(this.el, s2);
  }
  componentWillLoad() {
    this.validateType(this.type);
    this.validateButtonRole(this.buttonRole);
    this.validateSize(this.size);
    this.validateDisabled(this.disabled);
    this.inheritedAttributes = r2(this.el, this.shadowElement);
    this.lang = t2(this.el);
    this.updateLang();
  }
  render() {
    const { type: t26, buttonRole: o12, size: s13, buttonId: r14, disabled: n16, lang: d17, name: i12, href: c19, rel: u16, target: b10, download: h19, value: g13, inheritedAttributes: v7 } = this;
    const f12 = t26 != "link" ? "button" : "a";
    const m10 = f12 === "button" ? { type: t26, ariaDisabled: n16, name: i12, value: g13 } : { href: c19, rel: u16, target: b10, download: h19 };
    return ye(ge, { key: "e9340ebfb8c10ce33a593b6b7f54394949317506" }, ye(f12, Object.assign({ key: "c62ba255b62ddbff1c3dbef61a4e64973df1bccb" }, m10, { id: r14, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (t27) => !n16 ? this.handleClick(t27) : t27.stopImmediatePropagation(), class: `gcds-button button--role-${o12} button--${s13}`, ref: (t27) => this.shadowElement = t27 }, v7, { part: "button" }), ye("slot", { key: "f922fc8e16a85bce258204ff670bc6aaa81ca119" }), t26 === "link" && b10 === "_blank" ? ye("gcds-icon", { name: "external", label: l4[d17].label, "margin-left": "150" }) : null));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { type: ["validateType"], buttonRole: ["validateButtonRole"], size: ["validateSize"], disabled: ["validateDisabled"] };
  }
  static get style() {
    return u5;
  }
}, [17, "gcds-button", { type: [1025], buttonRole: [1025, "button-role"], size: [1025], buttonId: [1, "button-id"], name: [1], disabled: [516], value: [1], href: [1], rel: [1], target: [1], download: [1], inheritedAttributes: [32], lang: [32] }, void 0, { type: ["validateType"], buttonRole: ["validateButtonRole"], size: ["validateSize"], disabled: ["validateDisabled"] }]);
function h5() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-button", "gcds-icon"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-button":
        if (!customElements.get(t27)) {
          customElements.define(t27, b3);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(t27)) {
          t4();
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/gcds-button.js
var c4 = h5;

// node_modules/@gcds-core/components/dist/components/p-l4qjNkyj.js
var i3 = "@layer reset, default;@layer reset{:host slot{display:initial}}@layer default{:host{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}}";
var n6 = Et(class t7 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.tag = "p";
  }
  validateTag(t26) {
    const e16 = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
    if (!e16.includes(t26)) {
      this.tag = "p";
    }
  }
  componentWillLoad() {
    this.validateTag(this.tag);
  }
  render() {
    const t26 = this.tag;
    return ye(ge, { key: "007ca59b715103f7a106650bb40a74724e8532f3" }, ye(t26, { key: "6f4c944c09c4d1fbd620a2ddbd6b638634844307" }, ye("slot", { key: "32d15621851a85f0378455d397190bc4782d86f0" })));
  }
  static get watchers() {
    return { tag: ["validateTag"] };
  }
  static get style() {
    return i3;
  }
}, [1, "gcds-sr-only", { tag: [1025] }, void 0, { tag: ["validateTag"] }]);
function o5() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-sr-only"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-sr-only":
        if (!customElements.get(t27)) {
          customElements.define(t27, n6);
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/p-DZ0M9W5D.js
function t8() {
  const t26 = [];
  for (let n16 = 0; n16 <= 1250; n16 += 25) {
    t26.push(n16.toString());
  }
  return t26;
}
var n7 = t8();

// node_modules/@gcds-core/components/dist/components/p-DA0OyRaS.js
var g4 = "@layer reset, default, display, limit, margin, role, size, style, weight;@layer reset{:host{color:var(--gcds-text-role-primary);display:block}:host .gcds-text{box-sizing:border-box;display:inherit;margin:0}:host .gcds-text slot{display:initial}}@layer default{:host .gcds-text{font:var(--gcds-text-size-body-desktop)}@media only screen and (width < 48em){:host .gcds-text{font:var(--gcds-text-size-body-mobile)}}}@layer display{:host.d-block{display:block}:host.d-flex{display:flex}:host.d-inline{display:inline}:host.d-inline-block{display:inline-block}:host.d-inline-flex{display:inline-flex}:host.d-none{display:none}}@layer limit{:host .gcds-text.limit{max-width:var(--gcds-text-character-limit)}}@layer margin{:host .gcds-text.mt-0{margin-block-start:var(--gcds-text-spacing-0)}:host .gcds-text.mt-25{margin-block-start:var(--gcds-text-spacing-25)}:host .gcds-text.mt-50{margin-block-start:var(--gcds-text-spacing-50)}:host .gcds-text.mt-75{margin-block-start:var(--gcds-text-spacing-75)}:host .gcds-text.mt-100{margin-block-start:var(--gcds-text-spacing-100)}:host .gcds-text.mt-125{margin-block-start:var(--gcds-text-spacing-125)}:host .gcds-text.mt-150{margin-block-start:var(--gcds-text-spacing-150)}:host .gcds-text.mt-175{margin-block-start:var(--gcds-text-spacing-175)}:host .gcds-text.mt-200{margin-block-start:var(--gcds-text-spacing-200)}:host .gcds-text.mt-225{margin-block-start:var(--gcds-text-spacing-225)}:host .gcds-text.mt-250{margin-block-start:var(--gcds-text-spacing-250)}:host .gcds-text.mt-300{margin-block-start:var(--gcds-text-spacing-300)}:host .gcds-text.mt-350{margin-block-start:var(--gcds-text-spacing-350)}:host .gcds-text.mt-400{margin-block-start:var(--gcds-text-spacing-400)}:host .gcds-text.mt-450{margin-block-start:var(--gcds-text-spacing-450)}:host .gcds-text.mt-500{margin-block-start:var(--gcds-text-spacing-500)}:host .gcds-text.mt-550{margin-block-start:var(--gcds-text-spacing-550)}:host .gcds-text.mt-600{margin-block-start:var(--gcds-text-spacing-600)}:host .gcds-text.mt-650{margin-block-start:var(--gcds-text-spacing-650)}:host .gcds-text.mt-700{margin-block-start:var(--gcds-text-spacing-700)}:host .gcds-text.mt-750{margin-block-start:var(--gcds-text-spacing-750)}:host .gcds-text.mt-800{margin-block-start:var(--gcds-text-spacing-800)}:host .gcds-text.mt-850{margin-block-start:var(--gcds-text-spacing-850)}:host .gcds-text.mt-900{margin-block-start:var(--gcds-text-spacing-900)}:host .gcds-text.mt-950{margin-block-start:var(--gcds-text-spacing-950)}:host .gcds-text.mt-1000{margin-block-start:var(--gcds-text-spacing-1000)}:host .gcds-text.mt-1050{margin-block-start:var(--gcds-text-spacing-1050)}:host .gcds-text.mt-1100{margin-block-start:var(--gcds-text-spacing-1100)}:host .gcds-text.mt-1150{margin-block-start:var(--gcds-text-spacing-1150)}:host .gcds-text.mt-1200{margin-block-start:var(--gcds-text-spacing-1200)}:host .gcds-text.mt-1250{margin-block-start:var(--gcds-text-spacing-1250)}:host .gcds-text.mb-0{margin-block-end:var(--gcds-text-spacing-0)}:host .gcds-text.mb-25{margin-block-end:var(--gcds-text-spacing-25)}:host .gcds-text.mb-50{margin-block-end:var(--gcds-text-spacing-50)}:host .gcds-text.mb-75{margin-block-end:var(--gcds-text-spacing-75)}:host .gcds-text.mb-100{margin-block-end:var(--gcds-text-spacing-100)}:host .gcds-text.mb-125{margin-block-end:var(--gcds-text-spacing-125)}:host .gcds-text.mb-150{margin-block-end:var(--gcds-text-spacing-150)}:host .gcds-text.mb-175{margin-block-end:var(--gcds-text-spacing-175)}:host .gcds-text.mb-200{margin-block-end:var(--gcds-text-spacing-200)}:host .gcds-text.mb-225{margin-block-end:var(--gcds-text-spacing-225)}:host .gcds-text.mb-250{margin-block-end:var(--gcds-text-spacing-250)}:host .gcds-text.mb-300{margin-block-end:var(--gcds-text-spacing-300)}:host .gcds-text.mb-350{margin-block-end:var(--gcds-text-spacing-350)}:host .gcds-text.mb-400{margin-block-end:var(--gcds-text-spacing-400)}:host .gcds-text.mb-450{margin-block-end:var(--gcds-text-spacing-450)}:host .gcds-text.mb-500{margin-block-end:var(--gcds-text-spacing-500)}:host .gcds-text.mb-550{margin-block-end:var(--gcds-text-spacing-550)}:host .gcds-text.mb-600{margin-block-end:var(--gcds-text-spacing-600)}:host .gcds-text.mb-650{margin-block-end:var(--gcds-text-spacing-650)}:host .gcds-text.mb-700{margin-block-end:var(--gcds-text-spacing-700)}:host .gcds-text.mb-750{margin-block-end:var(--gcds-text-spacing-750)}:host .gcds-text.mb-800{margin-block-end:var(--gcds-text-spacing-800)}:host .gcds-text.mb-850{margin-block-end:var(--gcds-text-spacing-850)}:host .gcds-text.mb-900{margin-block-end:var(--gcds-text-spacing-900)}:host .gcds-text.mb-950{margin-block-end:var(--gcds-text-spacing-950)}:host .gcds-text.mb-1000{margin-block-end:var(--gcds-text-spacing-1000)}:host .gcds-text.mb-1050{margin-block-end:var(--gcds-text-spacing-1050)}:host .gcds-text.mb-1100{margin-block-end:var(--gcds-text-spacing-1100)}:host .gcds-text.mb-1150{margin-block-end:var(--gcds-text-spacing-1150)}:host .gcds-text.mb-1200{margin-block-end:var(--gcds-text-spacing-1200)}:host .gcds-text.mb-1250{margin-block-end:var(--gcds-text-spacing-1250)}}@layer variants.role{:host .gcds-text.role-primary{color:var(--gcds-text-role-primary)}:host .gcds-text.role-secondary{color:var(--gcds-text-role-secondary)}:host .gcds-text.role-light{color:var(--gcds-text-role-light)}}@layer variants.size{:host .gcds-text :is(small,::slotted(small)),:host .gcds-text.size-small{font:var(--gcds-text-size-small-desktop)}@media only screen and (width < 48em){:host .gcds-text :is(small,::slotted(small)),:host .gcds-text.size-small{font:var(--gcds-text-size-small-mobile)}}}@layer variants.style{:host .gcds-text ::slotted(em){font-style:italic}}@layer variants.weight{:host .gcds-text ::slotted(strong){font-weight:var(--gcds-text-weight-bold)}}";
var i4 = Et(class t9 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.textRole = "primary";
    this.characterLimit = true;
    this.display = "block";
    this.marginTop = "0";
    this.marginBottom = "300";
    this.size = "body";
  }
  validateTextRole(t26) {
    const s13 = ["light", "primary", "secondary"];
    if (!s13.includes(t26)) {
      this.textRole = "primary";
    }
  }
  validateDisplay(t26) {
    const s13 = ["block", "flex", "inline", "inline-block", "inline-flex", "none"];
    if (!s13.includes(t26)) {
      this.display = "block";
    }
  }
  validateMarginTop(t26) {
    if (!n7.includes(t26)) {
      this.marginTop = "0";
    }
  }
  validateMarginBottom(t26) {
    if (!n7.includes(t26)) {
      this.marginBottom = "300";
    }
  }
  validateSize(t26) {
    const s13 = ["body", "small"];
    if (!s13.includes(t26)) {
      this.size = "body";
    }
  }
  componentWillLoad() {
    this.validateTextRole(this.textRole);
    this.validateDisplay(this.display);
    this.validateMarginTop(this.marginTop);
    this.validateMarginBottom(this.marginBottom);
    this.validateSize(this.size);
  }
  render() {
    const { characterLimit: t26, display: s13, marginTop: c19, marginBottom: g13, size: i12, textRole: r14 } = this;
    return ye(ge, { key: "2633edb632cbb2afa8a88b8bd9508d2f298c1d90", class: `${s13 != "block" ? `d-${s13}` : ""}` }, ye("p", { key: "3c06bbe8cd91246a4f212e54631d3c790a90ab19", class: `
            gcds-text
            ${r14 ? `role-${r14}` : ""}
            ${t26 ? "limit" : ""}
            ${c19 ? `mt-${c19}` : ""}
            ${g13 ? `mb-${g13}` : ""}
            ${i12 === "small" ? `size-small` : ""}
          `, part: "text" }, i12 === "small" ? ye("small", null, ye("slot", null)) : ye("slot", null)));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { textRole: ["validateTextRole"], display: ["validateDisplay"], marginTop: ["validateMarginTop"], marginBottom: ["validateMarginBottom"], size: ["validateSize"] };
  }
  static get style() {
    return g4;
  }
}, [1, "gcds-text", { textRole: [1025, "text-role"], characterLimit: [4, "character-limit"], display: [1025], marginTop: [1025, "margin-top"], marginBottom: [1025, "margin-bottom"], size: [1025] }, void 0, { textRole: ["validateTextRole"], display: ["validateDisplay"], marginTop: ["validateMarginTop"], marginBottom: ["validateMarginBottom"], size: ["validateSize"] }]);
function r5() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-text"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-text":
        if (!customElements.get(t27)) {
          customElements.define(t27, i4);
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/gcds-card.js
var h6 = { en: { tagged: "Tagged:", badgeError: "gcds-card: The badge attribute has a character limit of 20 characters." }, fr: { tagged: "Baliser :", badgeError: "gcds-card: L'attribut badge a une limite de caractères de 20 caractères." } };
var f4 = '@layer reset, default, link, hover, focus;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}:host slot{display:initial}}@layer default{:host .gcds-card{background-color:var(--gcds-card-background-color);box-shadow:var(--gcds-card-box-shadow);color:var(--gcds-card-color);display:block;height:100%;max-width:var(--gcds-card-max-width);overflow:hidden;padding:var(--gcds-card-padding);position:relative}:host .gcds-card .gcds-badge{background-color:var(--gcds-card-badge-background-color);left:0;padding:var(--gcds-card-badge-padding);position:absolute;text-wrap:nowrap;top:0}@media only screen and (width < 48em){:host .gcds-card .gcds-badge{padding:var(--gcds-card-badge-mobile-padding)}}:host .gcds-card .gcds-card__image{display:block;margin:var(--gcds-card-image-margin);width:100%}:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-desktop);width:fit-content}@media only screen and (width < 48em){:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-mobile)}}:host .gcds-card .gcds-card__title:has(+.gcds-card__description){margin:var(--gcds-card-title-margin)}:host .gcds-card .gcds-card__description{--gcds-text-size-body-desktop:var(--gcds-card-description-font-desktop)}@media only screen and (width < 48em){:host .gcds-card .gcds-card__description{font:var(--gcds-card-description-font-mobile)}}}@layer link{:host .gcds-card gcds-link::part(link):after{bottom:0;content:"";left:0;pointer-events:auto;position:absolute;right:0;top:0}}@layer hover{@media (hover:hover){:host .gcds-card:hover{background-color:var(--gcds-card-hover-background-color);box-shadow:var(--gcds-card-hover-box-shadow);cursor:pointer}}}@layer focus{:host .gcds-card:focus-within{box-shadow:var(--gcds-card-focus-box-shadow);outline:var(--gcds-card-focus-outline);outline-offset:var(--gcds-card-focus-outline-offset)}:host gcds-link::part(link):focus{background-color:var(--gcds-card-focus-link-background-color);border:var(--gcds-card-focus-link-border);box-shadow:var(--gcds-card-focus-link-box-shadow);color:var(--gcds-card-focus-link-color);outline:var(--gcds-card-focus-link-outline);text-decoration:underline currentColor var(--gcds-card-focus-link-text-decoration-thickness)}}';
var b4 = Et(class s7 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsClick = Ue(this, "gcdsClick");
    this.errors = [];
  }
  validateCardTitle() {
    if (!this.cardTitle || this.cardTitle.trim() == "") {
      this.errors.push("cardTitle");
    } else if (this.errors.includes("cardTitle")) {
      this.errors.splice(this.errors.indexOf("cardTitle"), 1);
    }
  }
  validateHref() {
    if (!this.href || this.href.trim() == "") {
      this.errors.push("href");
    } else if (this.errors.includes("href")) {
      this.errors.splice(this.errors.indexOf("href"), 1);
    }
  }
  validateBadge() {
    if (this.badge && this.badge.length > 20) {
      console.error(`${h6["en"].badgeError} | ${h6["fr"].badgeError}`);
      this.errors.push("badge");
    } else if (this.errors.includes("badge")) {
      this.errors.splice(this.errors.indexOf("badge"), 1);
    }
  }
  updateLang() {
    const s13 = new MutationObserver((s14) => {
      if (s14[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    s13.observe(this.el, s2);
  }
  validateRequiredProps() {
    this.validateCardTitle();
    this.validateHref();
    if (this.errors.includes("href") || this.errors.includes("cardTitle")) {
      return false;
    }
    return true;
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    this.validateBadge();
    const s13 = this.validateRequiredProps();
    if (!s13) {
      a2("gcds-card", this.errors, ["badge"]);
    }
  }
  get renderDescription() {
    if (this.el.innerHTML.trim() != "") {
      return ye("div", { class: "gcds-card__description" }, ye("slot", null));
    } else if (this.description) {
      return ye("div", { class: "gcds-card__description" }, ye("gcds-text", { "margin-bottom": "0" }, this.description));
    } else {
      return null;
    }
  }
  render() {
    const { cardTitle: s13, cardTitleTag: a11, href: d17, badge: e16, imgSrc: r14, imgAlt: i12, rel: o12, target: g13, renderDescription: l17, lang: n16, errors: f12 } = this;
    const b10 = a11;
    const u16 = {};
    if (e16) {
      u16["aria-describedby"] = "gcds-badge";
    }
    if (this.validateRequiredProps()) {
      return ye(ge, { key: "dd00869ab8d4fb7fd9abf68b0432899a475cedf8" }, ye("div", { key: "8f57992a1de761c5510f037b2a8136459f07b14d", class: "gcds-card" }, e16 && !f12.includes("badge") && ye("gcds-text", { key: "42c7fc2a3c8b69d1cc454adb9ca1767fc9986566", id: "gcds-badge", class: "gcds-badge", "text-role": "light", "margin-bottom": "0", size: "small" }, ye("strong", { key: "32c13a05860a19a0a43ea995f645507604d9452c" }, ye("gcds-sr-only", { key: "2e47faade10e8138cbca10994293d9cd23c573a5", tag: "span" }, h6[n16].tagged), e16)), r14 && ye("img", { key: "6ccf1faa6faf20a9991e5374fef4ce96b71532ae", src: r14, alt: i12 ? i12 : "", class: "gcds-card__image" }), b10 ? ye(b10, Object.assign({ class: "gcds-card__title" }, u16), ye("gcds-link", { href: d17 }, s13)) : ye("gcds-link", Object.assign({ href: d17, class: "gcds-card__title", rel: o12, target: g13 }, u16), s13), l17));
    }
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { cardTitle: ["validateCardTitle"], href: ["validateHref"], badge: ["validateBadge"] };
  }
  static get style() {
    return f4;
  }
}, [1, "gcds-card", { cardTitle: [513, "card-title"], href: [513], cardTitleTag: [1, "card-title-tag"], description: [513], badge: [1537], imgSrc: [513, "img-src"], imgAlt: [513, "img-alt"], rel: [1], target: [1], lang: [32], errors: [32] }, void 0, { cardTitle: ["validateCardTitle"], href: ["validateHref"], badge: ["validateBadge"] }]);
function u6() {
  if (typeof customElements === "undefined") {
    return;
  }
  const s13 = ["gcds-card", "gcds-icon", "gcds-link", "gcds-sr-only", "gcds-text"];
  s13.forEach((s14) => {
    switch (s14) {
      case "gcds-card":
        if (!customElements.get(s14)) {
          customElements.define(s14, b4);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(s14)) {
          t4();
        }
        break;
      case "gcds-link":
        if (!customElements.get(s14)) {
          k2();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(s14)) {
          o5();
        }
        break;
      case "gcds-text":
        if (!customElements.get(s14)) {
          r5();
        }
        break;
    }
  });
}
var p4 = u6;

// node_modules/@gcds-core/components/dist/components/p-1b8Kykha.js
var i5 = { validate: () => ({ valid: true, reason: { en: "", fr: "" } }) };
function n8(e16, r14) {
  return { validate: (i12) => {
    const n16 = e16.validate(i12);
    const a11 = r14.validate(i12);
    if (typeof n16 === "object" && !n16.valid || typeof n16 === "boolean" && !n16) {
      return typeof n16 === "object" ? n16 : { valid: n16, reason: e16.errorMessage };
    } else if (typeof a11 === "object" && !a11.valid || typeof a11 === "boolean" && !a11) {
      return typeof a11 === "object" ? a11 : { valid: a11, reason: r14.errorMessage };
    } else {
      return { valid: true, reason: { en: "", fr: "" } };
    }
  } };
}
function a3(e16, r14, i12) {
  if (e16.required) {
    switch (r14) {
      case "input":
        switch (i12) {
          case "email":
            if (e16.validator) {
              e16.validator.unshift("requiredEmailField");
            } else {
              e16.validator = ["requiredEmailField"];
            }
            break;
          default:
            if (e16.validator) {
              e16.validator.unshift("requiredField");
            } else {
              e16.validator = ["requiredField"];
            }
            break;
        }
        break;
      case "select":
        if (e16.validator) {
          e16.validator.unshift("requiredSelectField");
        } else {
          e16.validator = ["requiredSelectField"];
        }
        break;
      case "textarea":
        if (e16.validator) {
          e16.validator.unshift("requiredField");
        } else {
          e16.validator = ["requiredField"];
        }
        break;
      case "file":
        if (e16.validator) {
          e16.validator.unshift("requiredFileInput");
        } else {
          e16.validator = ["requiredFileInput"];
        }
        break;
      case "date-input":
        if (e16.validator) {
          e16.validator.unshift("requiredDateInput");
        } else {
          e16.validator = ["requiredDateInput"];
        }
        break;
      case "radio":
        if (e16.validator) {
          e16.validator.unshift("requiredRadio");
        } else {
          e16.validator = ["requiredRadio"];
        }
        break;
      case "checkboxGroup":
        if (e16.validator) {
          e16.validator.unshift("requiredCheckboxGroup");
        } else {
          e16.validator = ["requiredCheckboxGroup"];
        }
        break;
      case "checkboxSingle":
        if (e16.validator) {
          e16.validator.unshift("requiredCheckboxSingle");
        } else {
          e16.validator = ["requiredCheckboxSingle"];
        }
        break;
    }
  }
}
var t10 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var s8 = { validate: (e16) => ({ valid: e16 != null && e16.trim() != "", reason: { en: "Enter information to continue.", fr: "Saisissez des renseignements pour continuer." } }) };
var o6 = { validate: (e16) => ({ valid: e16 != null && e16.trim() != "" && (e16.toLowerCase().match(t10) ? true : false), reason: { en: "Enter a valid email address to continue. Use a standard format. Example: name@address.ca.", fr: "Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca." } }) };
var u7 = { validate: (e16) => ({ valid: e16.length > 0, reason: { en: "You must upload a file to continue.", fr: "Vous devez téléverser un fichier pour continuer." } }) };
var l5 = { validate: (e16) => ({ valid: e16 != null && e16.trim() != "", reason: { en: "Choose an option to continue.", fr: "Choisissez une option pour continuer." } }) };
var d5 = { en: { all: "Enter the date.", missingmonth: "Select the month.", missingyear: "Enter the year.", missingday: "Enter the day.", missingmonthday: "Select the month and enter the day.", missingmonthyear: "Select the month and enter the year.", missingdayyear: "Enter the day and year.", invalidyearlength: "Year must be 4 digits.", invalidyear: "Enter a valid year.", invalidday: "Enter a valid day." }, fr: { all: "Saisissez la date.", missingmonth: "Sélectionnez un mois.", missingyear: "Saisissez l'année.", missingday: "Saisissez le jour.", missingmonthday: "Saisissez le jour et sélectionnez un mois.", missingmonthyear: "Sélectionnez un mois et saisissez l'année.", missingdayyear: "Saisissez le jour et l'année.", invalidyearlength: "L'année doit inclure 4 chiffres.", invalidyear: "Entrez une année valide.", invalidday: "Saisissez un jour valide." } };
var c5 = { validate: (e16) => {
  if (c2(e16)) {
    return { valid: true, reason: { en: "", fr: "" } };
  }
  const i12 = e16.split("-");
  const n16 = { day: i12[2], month: i12[1], year: i12[0] };
  const a11 = i12.length === 3 ? "full" : "compact";
  const t26 = f5(n16, a11);
  return t26;
} };
var f5 = (r14, i12) => {
  const { day: n16, month: a11, year: t26 } = r14;
  const s13 = { valid: false, errors: { day: false, month: false, year: false }, reason: { en: "", fr: "" } };
  if (!n16 && !a11 && !t26) {
    s13.errors.day = true;
    s13.errors.month = true;
    s13.errors.year = true;
    s13.reason.en = d5.en.all;
    s13.reason.fr = d5.fr.all;
  } else if (!n16 && a11 && t26 && i12 === "full") {
    s13.errors.day = true;
    s13.reason.en = d5.en.missingday;
    s13.reason.fr = d5.fr.missingday;
  } else if (n16 && !a11 && t26 || !n16 && !a11 && t26 && i12 === "compact") {
    s13.errors.month = true;
    s13.reason.en = d5.en.missingmonth;
    s13.reason.fr = d5.fr.missingmonth;
  } else if (n16 && a11 && !t26 || !n16 && a11 && !t26 && i12 === "compact") {
    s13.errors.year = true;
    s13.reason.en = d5.en.missingyear;
    s13.reason.fr = d5.fr.missingyear;
  } else if (!n16 && !a11 && t26) {
    s13.errors.day = true;
    s13.errors.month = true;
    s13.reason.en = d5.en.missingmonthday;
    s13.reason.fr = d5.fr.missingmonthday;
  } else if (!n16 && a11 && !t26) {
    s13.errors.day = true;
    s13.errors.year = true;
    s13.reason.en = d5.en.missingdayyear;
    s13.reason.fr = d5.fr.missingdayyear;
  } else if (n16 && !a11 && !t26) {
    s13.errors.year = true;
    s13.errors.month = true;
    s13.reason.en = d5.en.missingmonthyear;
    s13.reason.fr = d5.fr.missingmonthyear;
  } else if (t26.length != 4) {
    s13.errors.year = true;
    s13.reason.en = d5.en.invalidyearlength;
    s13.reason.fr = d5.fr.invalidyearlength;
  } else if (t26 < 0 || t26 > 9999) {
    s13.errors.year = true;
    s13.reason.en = d5.en.invalidyear;
    s13.reason.fr = d5.fr.invalidyear;
  } else if (!l2(`${t26}-${a11}-${n16}`)) {
    s13.errors.day = true;
    s13.reason.en = d5.en.invalidday;
    s13.reason.fr = d5.fr.invalidday;
  }
  return s13;
};
var m5 = { validate: (e16) => ({ valid: e16 != null && e16 != "", reason: { en: "Choose an option to continue.", fr: "Choisissez une option pour continuer." } }) };
var h7 = { validate: (e16) => ({ valid: e16.length > 0, reason: { en: "Choose an option to continue.", fr: "Choisissez une option pour continuer." } }) };
var p5 = { validate: (e16) => ({ valid: e16.length > 0, reason: { en: "You must check the box to continue.", fr: "Vous devez cocher la case pour continuer." } }) };
var v2;
(function(e16) {
  e16["requiredField"] = "requiredField";
  e16["requiredEmailField"] = "requiredEmailField";
  e16["requiredCheck"] = "requiredCheck";
  e16["requiredFileInput"] = "requiredFileInput";
  e16["requiredSelectField"] = "requiredSelectField";
  e16["requiredDateInput"] = "requiredDateInput";
  e16["requiredRadio"] = "requiredRadio";
  e16["requiredCheckboxGroup"] = "requiredCheckboxGroup";
  e16["requiredCheckboxSingle"] = "requiredCheckboxSingle";
})(v2 || (v2 = {}));
function y2(e16) {
  return (e16 || []).map((e17) => {
    if (typeof e17 === "string") {
      return q2(e17);
    } else if (e17 && e17.name) {
      e17 = e17;
      return q2(e17.name);
    } else {
      return e17;
    }
  }).reduce(n8, i5);
}
function q2(e16, r14) {
  switch (e16) {
    case v2.requiredField:
      return s8;
    case v2.requiredEmailField:
      return o6;
    case v2.requiredSelectField:
      return l5;
    case v2.requiredDateInput:
      return c5;
    case v2.requiredFileInput:
      return u7;
    case v2.requiredRadio:
      return m5;
    case v2.requiredCheckboxGroup:
      return h7;
    case v2.requiredCheckboxSingle:
      return p5;
    default:
      return i5;
  }
}

// node_modules/@gcds-core/components/dist/components/p-9ylu2Rg-.js
var c6 = "@layer reset, default;@layer reset{:host{display:inline-block}:host slot{display:initial}}@layer default{:host .error-message gcds-icon,:host .error-message::part(text){color:var(--gcds-error-message-text-color)}}";
var d6 = Et(class e5 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const { messageId: e16 } = this;
    return ye(ge, { key: "045fc9bca1001d5ad8a083333b64293c8152c4e5", id: `error-message-${e16}`, class: "gcds-error-message-wrapper" }, ye("gcds-text", { key: "de9f869bdbe90f798821bffbe8aa9e930d703544", class: "error-message", role: "alert", "margin-bottom": "75" }, ye("gcds-icon", { key: "0f579edfda3b98171166c90ee6b87d4e025762da", name: "warning-triangle", "margin-right": "50" }), ye("strong", { key: "92704a625f29719fc7f31426fb6d20756213de30" }, ye("slot", { key: "657508619840d11cfdd81fb207de294bc1256de7" }))));
  }
  get el() {
    return this;
  }
  static get style() {
    return c6;
  }
}, [1, "gcds-error-message", { messageId: [1, "message-id"] }]);
function n9() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-error-message", "gcds-icon", "gcds-text"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-error-message":
        if (!customElements.get(e17)) {
          customElements.define(e17, d6);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(e17)) {
          t4();
        }
        break;
      case "gcds-text":
        if (!customElements.get(e17)) {
          r5();
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/p-D0pOKwNu.js
var n10 = "@layer reset, default;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host .gcds-hint,:host gcds-text::part(text){color:var(--gcds-hint-text)}:host .gcds-hint{margin:var(--gcds-hint-margin)}}";
var a4 = Et(class t11 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const { hintId: t26 } = this;
    return ye(ge, { key: "61a3e7529f1f8cdab787a3be7f6b1d38b06cf29d", id: `hint-${t26}` }, ye("gcds-text", { key: "32304bb4004c7357f63ea4c04b39be5fa1b491a8", class: "gcds-hint", "margin-bottom": "0", part: "hint" }, ye("slot", { key: "2313fb6ca5b5fde4572e522c86d249508eecf900" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return n10;
  }
}, [1, "gcds-hint", { hintId: [1, "hint-id"] }]);
function d7() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-hint", "gcds-text"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-hint":
        if (!customElements.get(t27)) {
          customElements.define(t27, a4);
        }
        break;
      case "gcds-text":
        if (!customElements.get(t27)) {
          r5();
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/p-Cc9yC5rG.js
var i6 = { en: { required: "required" }, fr: { required: "obligatoire" } };
var d8 = "@layer reset, default;@layer reset{:host{display:block}}@layer default{:host .gcds-label{color:var(--gcds-label-text);cursor:pointer;display:block;font:var(--gcds-label-font-desktop);margin:var(--gcds-label-margin)!important;max-width:100%}@media only screen and (width < 48em){:host .gcds-label{font:var(--gcds-label-font-mobile)}}:host .gcds-label.label--hidden>span{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host .gcds-label .label--required{font-weight:var(--gcds-label-required-font-weight);margin:var(--gcds-label-required-margin)!important}}";
var o7 = Et(class e6 extends k {
  constructor() {
    super();
    this.__registerHost();
  }
  updateLang() {
    const e16 = new MutationObserver((e17) => {
      if (e17[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    e16.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
  }
  render() {
    const { hideLabel: e16, labelFor: a11, label: s13, required: r14, lang: d17 } = this;
    return ye(ge, { key: "74bd8cdab28f3e11ad1af0e5d90ffbcdfeca4f3b", id: `label-for-${a11}` }, ye("label", { key: "a99ff6d66462b03f1b40759ada8dfe53eaa985ce", htmlFor: a11, class: `gcds-label ${e16 ? "label--hidden" : ""}` }, ye("span", { key: "1740af0193beae308a1227d729493c257e6ee813" }, s13), r14 ? ye("span", { "aria-hidden": "true", class: "label--required" }, "(", i6[d17].required, ")") : null));
  }
  get el() {
    return this;
  }
  static get style() {
    return d8;
  }
}, [0, "gcds-label", { hideLabel: [4, "hide-label"], label: [1], labelFor: [1, "label-for"], required: [4], lang: [32] }]);
function n11() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-label"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-label":
        if (!customElements.get(e17)) {
          customElements.define(e17, o7);
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/gcds-checkboxes.js
function _2(e16) {
  if (typeof e16 !== "object" || e16 === null) return false;
  const s13 = ["id", "label", "value", "hint", "checked", "required"];
  const t26 = Object.keys(e16);
  const c19 = typeof e16.id === "string" && typeof e16.label === "string" && (e16.value === void 0 || typeof e16.value === "string") && (e16.hint === void 0 || typeof e16.hint === "string") && (e16.checked === void 0 || typeof e16.checked === "boolean");
  const i12 = t26.every((e17) => s13.includes(e17));
  return c19 && i12;
}
function w2(e16) {
  let s13 = false;
  if (e16 && e16.length >= 1) {
    s13 = e16.some((e17) => !_2(e17));
  } else if (e16 && e16.length == 0) {
    s13 = true;
  }
  return s13;
}
function C2(e16, s13) {
  const t26 = [];
  e16.forEach((e17) => {
    t26.push(e17.value ? e17.value : "on");
    if ((e17.checked == "true" || e17.checked === true) && !s13.value.includes(e17.value || "on")) {
      s13.value = [...s13.value, e17.value ? e17.value : "on"];
    }
  });
  s13.value.filter((e17) => !t26.includes(e17)).forEach((e17) => {
    s13.value = s13.value.filter((s14) => s14 !== e17);
  });
}
var E2 = (s13, t26, c19, i12) => {
  const { name: o12, disabled: a11, hasError: d17, errorMessage: r14, gcdsFocus: h19, gcdsInput: l17, gcdsChange: n16, gcdsClick: g13, gcdsBlur: b10, required: u16, hint: f12, isGroup: k6, lang: x5, value: p16, checkboxTitle: m10, form: v7, hideLabel: y5, onBlurValidate: _6 } = t26;
  const w10 = { name: o12, id: s13.id, disabled: a11, required: u16, value: s13.value, title: m10, form: v7 };
  const C4 = { label: s13.label, "label-for": s13.id, lang: x5 };
  if (!k6 && u16) {
    C4["required"] = u16;
    w10["required"] = u16;
  }
  if (!k6 && y5) {
    C4["hide-label"] = y5;
  }
  if (s13.hint) {
    const e16 = `hint-${s13.id}`;
    w10["aria-describedby"] = `${e16}${w10["aria-describedby"] ? `${w10["aria-describedby"]}` : ""}`;
  }
  if (p16.includes(s13.value)) {
    w10["checked"] = true;
  }
  if (d17) {
    w10["aria-invalid"] = "true";
    w10["aria-description"] = r14;
  }
  return ye("div", { class: `gcds-checkbox ${a11 ? "gcds-checkbox--disabled" : ""} ${d17 ? "gcds-checkbox--error" : ""}` }, ye("input", Object.assign({ type: "checkbox" }, w10, { onBlur: k6 ? () => b10.emit() : _6, onFocus: () => h19.emit(), onChange: (e16) => i12(e16, n16), onInput: (e16) => i12(e16, l17), onClick: (e16) => !a11 ? c19(e16, g13) : e16.stopImmediatePropagation(), ref: (e16) => t26.shadowElement = [...t26.shadowElement || [], e16] })), ye("gcds-label", Object.assign({}, C4, { onClick: (e16) => e16.stopPropagation() })), s13.hint || !k6 && f12 ? ye("gcds-hint", { "hint-id": s13.id }, !k6 && f12 ? f12 : s13.hint) : null, !k6 && r14 ? ye("gcds-error-message", { messageId: s13.id }, r14) : null);
};
var j2 = { en: { required: " (required)" }, fr: { required: " (obligatoire)" } };
var O2 = '@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-checkboxes__fieldset{border:0;min-inline-size:auto;padding:0}:host .gcds-checkboxes__fieldset legend{padding:0}:host .gcds-checkbox{padding:0}:host .gcds-checkbox gcds-label{display:block}:host .gcds-checkbox gcds-label>label:after,:host .gcds-checkbox gcds-label>label:before{box-sizing:border-box;content:"";cursor:pointer;position:absolute}}@layer default{:host .gcds-checkboxes__fieldset{margin:var(--gcds-checkbox-fieldset-margin)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend{font:var(--gcds-checkbox-legend-font-desktop);margin:var(--gcds-checkbox-legend-margin)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend .legend__required{font:var(--gcds-checkbox-legend-required-font-desktop)}@media only screen and (width < 48em){:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend{font:var(--gcds-checkbox-legend-font-mobile)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend .legend__required{font:var(--gcds-checkbox-legend-required-font-mobile)}}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend:not(:has(+gcds-hint)){margin:var(--gcds-checkbox-legend-hint-margin)}:host .gcds-checkbox{color:var(--gcds-checkbox-default-text);font:var(--gcds-checkbox-font);margin:var(--gcds-checkbox-margin)!important;max-width:var(--gcds-checkbox-max-width);min-height:calc(var(--gcds-checkbox-input-height-and-width) - var(--gcds-checkbox-padding));padding:var(--gcds-checkbox-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-checkbox :is(gcds-label,gcds-hint,gcds-error-message){padding:var(--gcds-checkbox-label-padding)!important}:host .gcds-checkbox gcds-hint::part(hint){margin:0}:host .gcds-checkbox gcds-label:after,:host .gcds-checkbox gcds-label:before,:host .gcds-checkbox input{position:absolute}:host .gcds-checkbox gcds-label>label:before,:host .gcds-checkbox input{height:var(--gcds-checkbox-input-height-and-width);left:0;top:0;width:var(--gcds-checkbox-input-height-and-width)}:host .gcds-checkbox input{opacity:0}:host .gcds-checkbox gcds-label>label{width:fit-content;--gcds-label-font-desktop:var(--gcds-checkbox-label-font-desktop);--gcds-label-font-mobile:var(--gcds-checkbox-label-font-mobile)}:host .gcds-checkbox gcds-label>label:before{background-color:var(--gcds-checkbox-default-background);border:var(--gcds-checkbox-input-border-width) solid;border-radius:var(--gcds-checkbox-input-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-checkbox gcds-label>label:after{border:var(--gcds-checkbox-check-border-width) solid;border-block-start:0!important;border-inline-start:0!important;height:var(--gcds-checkbox-check-height);left:var(--gcds-checkbox-check-left);opacity:0;top:var(--gcds-checkbox-check-top);transform:rotate(40deg);width:var(--gcds-checkbox-check-width)}:host .gcds-checkbox input:checked+gcds-label>label:after{opacity:1}}@layer disabled{:host .gcds-checkbox.gcds-checkbox--disabled{color:var(--gcds-checkbox-disabled-text)}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label{--gcds-label-text:currentColor;cursor:not-allowed}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:after,:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:before{cursor:not-allowed}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:before{background-color:var(--gcds-checkbox-disabled-background);border-color:currentcolor}:host .gcds-checkbox.gcds-checkbox--disabled gcds-hint{--gcds-hint-text:currentColor}}@layer error{:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label>label:before{border-color:var(--gcds-checkbox-danger-border)}:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label>label:after{color:var(--gcds-checkbox-danger-border)}}@layer focus{:host .gcds-checkbox:focus-within input:focus+gcds-label>label:before{background:var(--gcds-checkbox-focus-background);box-shadow:var(--gcds-checkbox-focus-box-shadow);color:var(--gcds-checkbox-focus-color);outline:var(--gcds-checkbox-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-checkbox-input-border-width)}:host .gcds-checkbox:focus-within input:focus+gcds-label>label:after{color:var(--gcds-checkbox-focus-color)}}';
var q3 = Et(class s9 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsClick = Ue(this, "gcdsClick");
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsInput = Ue(this, "gcdsInput");
    this.gcdsChange = Ue(this, "gcdsChange");
    this.gcdsError = Ue(this, "gcdsError");
    this.gcdsValid = Ue(this, "gcdsValid");
    this.internals = this.attachInternals();
    this.isGroup = false;
    this.checkboxTitle = "";
    this._validator = i5;
    this.hideLabel = false;
    this.hideLegend = false;
    this.value = [];
    this.validateOn = "blur";
    this.inheritedAttributes = {};
    this.errors = [];
    this.onBlurValidate = () => {
      if (this.validateOn == "blur") {
        this.validate();
      }
      this.gcdsBlur.emit();
    };
    this.handleInput = (e16, s13) => {
      const t26 = e16.type === "input";
      if (t26) {
        const s14 = e16.target;
        if (s14.checked) {
          this.value = [...this.value, s14.value];
        } else {
          this.options = (typeof this.options === "string" ? JSON.parse(this.options) : this.options).map((e17) => e17.value === s14.value ? Object.assign(Object.assign({}, e17), { checked: false }) : e17);
          this.value = this.value.filter((e17) => e17 !== s14.value);
        }
        if (this.value.length > 0) {
          this.internals.setFormValue(this.value.toString());
        } else {
          this.internals.setFormValue(null);
        }
        this.updateValidity();
      }
      s13.emit([...this.value]);
    };
  }
  validateName() {
    this.errors = u2(this.errors, "name", this.name);
  }
  validateLegend() {
    if (this.isGroup) {
      this.errors = u2(this.errors, "legend", this.legend);
    }
  }
  validateOptions() {
    let e16 = false;
    e16 = this.assignOptionsArray();
    if (this.optionsArr && !e16) {
      e16 = w2(this.optionsArr);
      if (this.optionsArr && this.optionsArr.length > 1) {
        this.isGroup = true;
      }
    }
    this.errors = u2(this.errors, "options", this.optionsArr, e16);
  }
  validateDisabledCheckbox() {
    if (this.required) {
      this.disabled = false;
    }
  }
  validateValue(e16) {
    if (!Array.isArray(e16)) {
      try {
        this.value = JSON.parse(e16);
      } catch (e17) {
        a2("gcds-checkboxes", ["Invalid array for value"]);
        this.value = [];
      }
    } else if (this.optionsArr) {
      C2(this.optionsArr, this.el);
      if (this.value.length > 0) {
        this.internals.setFormValue(this.value.toString());
      }
    }
    this.updateValidity();
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    } else {
      this.hasError = this.errorMessage ? !this.hasError : false;
    }
  }
  validateValidator() {
    this._validator = y2(this.validator);
  }
  get validity() {
    return this.internals.validity;
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  async validate() {
    m2(this.el, this._validator.validate(this.value), this.isGroup ? this.legend : this.optionsArr[0].label, this.gcdsError, this.gcdsValid, this.lang);
    this.checkboxTitle = this.errorMessage;
  }
  formdataListener(e16) {
    const s13 = e16.formData;
    this.value.forEach((e17) => {
      if (this.value.indexOf(e17) === 0) {
        s13.set(this.name, e17);
      } else {
        s13.append(this.name, e17);
      }
    });
  }
  submitListener(e16) {
    if (e16.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError && this.validateOn != "other") {
        e16.preventDefault();
      }
    }
  }
  formResetCallback() {
    if (this.value != this.initialState) {
      this.value = this.initialState;
    }
  }
  formStateRestoreCallback(e16) {
    this.internals.setFormValue(e16);
    this.value = [...e16.split(",")];
  }
  async checkValidity() {
    return this.internals.checkValidity();
  }
  async getValidationMessage() {
    return this.internals.validationMessage;
  }
  updateValidity() {
    var e16;
    if (((e16 = this.shadowElement) === null || e16 === void 0 ? void 0 : e16.length) > 0) {
      const e17 = d2(this.shadowElement);
      let s13 = null;
      if (e17 === null || e17 === void 0 ? void 0 : e17.valueMissing) {
        s13 = this.lang === "en" ? "Choose an option to continue." : "Choisissez une option pour continuer.";
      }
      this.internals.setValidity(e17, s13, this.shadowElement[0]);
      this.checkboxTitle = s13;
    }
  }
  watchLang(e16, s13) {
    if (e16 !== s13) {
      this.lang = e16;
    }
  }
  validateRequiredProps() {
    this.validateOptions();
    this.validateValue(this.value);
    this.validateLegend();
    this.validateName();
    return i2(this.errors, ["name", "legend", "options"]);
  }
  async componentWillLoad() {
    var e16;
    this.lang = t2(this.el);
    const s13 = this.validateRequiredProps();
    this.validateDisabledCheckbox();
    this.validateHasError();
    this.validateErrorMessage();
    a3(this.el, this.isGroup ? "checkboxGroup" : "checkboxSingle");
    this.validateValidator();
    if (!this.isGroup && this.optionsArr && ((e16 = this.optionsArr[0]) === null || e16 === void 0 ? void 0 : e16.hint) && !this.hint) {
      this.hint = this.optionsArr[0].hint;
    }
    if (!s13) {
      a2("gcds-checkboxes", this.errors);
    }
    this.initialState = this.value;
  }
  async componentDidUpdate() {
    const e16 = this.validateRequiredProps();
    if (!e16) {
      a2("gcds-checkboxes", this.errors);
    }
  }
  async componentDidLoad() {
    this.updateValidity();
    if (this.autofocus) {
      requestAnimationFrame(() => {
        this.shadowElement[0].focus();
      });
    }
  }
  assignOptionsArray() {
    let e16 = false;
    if (Array.isArray(this.options)) {
      this.optionsArr = this.options;
    } else if (typeof this.options === "string" && this.options.trim() !== "") {
      try {
        const s13 = JSON.parse(this.options);
        if (Array.isArray(s13)) {
          this.optionsArr = s13;
        } else {
          this.optionsArr = null;
          e16 = true;
        }
      } catch (s13) {
        a2("gcds-checkboxes", ["Invalid JSON string for options"]);
        this.options = null;
        e16 = true;
      }
    }
    return e16;
  }
  render() {
    const { legend: s13, required: t26, hint: c19, errorMessage: a11 } = this;
    const d17 = { tabindex: "-1", "aria-labelledby": "checkboxes-legend" };
    if (c19) {
      const e16 = this.hint ? `checkboxes-hint ` : "";
      d17["aria-labelledby"] = `${d17["aria-labelledby"]} ${e16}`.trim();
    }
    this.shadowElement = [];
    if (this.validateRequiredProps()) {
      return ye(ge, { key: "f37866363b587b6c228032f6940efa6e3bb4e90c", onBlur: () => this.isGroup && this.onBlurValidate() }, this.isGroup ? ye("fieldset", Object.assign({ class: "gcds-checkboxes__fieldset" }, d17), ye("legend", { id: "checkboxes-legend", class: "gcds-checkboxes__legend" }, this.hideLegend ? ye("gcds-sr-only", { tag: "span" }, s13, t26 && ye("span", { class: "legend__required" }, j2[this.lang].required)) : ye(Ct, null, s13, t26 && ye("span", { class: "legend__required" }, j2[this.lang].required))), c19 ? ye("gcds-hint", { id: "checkboxes-hint", "hint-id": "checkboxes" }, c19) : null, a11 ? ye("div", null, ye("gcds-error-message", { id: "checkboxes-error", messageId: "checkboxes" }, a11)) : null, this.optionsArr && this.optionsArr.map((e16) => E2(e16, this, o2, this.handleInput))) : this.optionsArr && this.optionsArr.length > 0 && E2(this.optionsArr[0], this, o2, this.handleInput));
    }
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { name: ["validateName"], legend: ["validateLegend"], options: ["validateOptions"], disabled: ["validateDisabledCheckbox"], value: ["validateValue"], errorMessage: ["validateErrorMessage"], validator: ["validateValidator"], hasError: ["validateHasError"], lang: ["watchLang"] };
  }
  static get style() {
    return O2;
  }
}, [81, "gcds-checkboxes", { name: [513], legend: [513], options: [1025], required: [516], disabled: [1540], autofocus: [516], form: [513], hideLabel: [4, "hide-label"], hideLegend: [4, "hide-legend"], value: [1537], errorMessage: [1537, "error-message"], hint: [1537], validator: [1040], validateOn: [1025, "validate-on"], validity: [2064], inheritedAttributes: [32], hasError: [32], lang: [32], errors: [32], validate: [64], checkValidity: [64], getValidationMessage: [64] }, [[4, "formdata", "formdataListener"], [4, "submit", "submitListener"]], { name: ["validateName"], legend: ["validateLegend"], options: ["validateOptions"], disabled: ["validateDisabledCheckbox"], value: ["validateValue"], errorMessage: ["validateErrorMessage"], validator: ["validateValidator"], hasError: ["validateHasError"], lang: ["watchLang"] }]);
function L2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-checkboxes", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-sr-only", "gcds-text"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-checkboxes":
        if (!customElements.get(e17)) {
          customElements.define(e17, q3);
        }
        break;
      case "gcds-error-message":
        if (!customElements.get(e17)) {
          n9();
        }
        break;
      case "gcds-hint":
        if (!customElements.get(e17)) {
          d7();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(e17)) {
          t4();
        }
        break;
      case "gcds-label":
        if (!customElements.get(e17)) {
          n11();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(e17)) {
          o5();
        }
        break;
      case "gcds-text":
        if (!customElements.get(e17)) {
          r5();
        }
        break;
    }
  });
}
var M2 = L2;

// node_modules/@gcds-core/components/dist/components/gcds-container.js
var a5 = r3;

// node_modules/@gcds-core/components/dist/components/p-CycQ6m5l.js
function w3(t26) {
  if (typeof t26 !== "object" || t26 === null) return false;
  const s13 = ["value", "label"];
  const i12 = Object.keys(t26);
  const e16 = typeof t26.label === "string" && (t26.value === void 0 || typeof t26.value === "string");
  const a11 = i12.every((t27) => s13.includes(t27));
  return e16 && a11;
}
var k3 = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-input-wrapper{border:0;margin:0;padding:0}:host .gcds-input-wrapper input{box-sizing:border-box}}@layer default{:host .gcds-input-wrapper{color:var(--gcds-input-default-text);font:var(--gcds-input-font-desktop);max-width:75ch;transition:color .15s ease-in-out;width:100%}@media only screen and (width < 48em){:host .gcds-input-wrapper{font:var(--gcds-input-font-mobile)}}:host .gcds-input-wrapper input{background-color:var(--gcds-input-default-background);background-image:none;border:var(--gcds-input-border-width) solid;border-radius:var(--gcds-input-border-radius);color:var(--gcds-input-default-text);display:block;font:inherit!important;height:auto;margin:var(--gcds-input-margin)!important;max-width:100%;min-height:var(--gcds-input-min-width-and-height);min-width:var(--gcds-input-min-width-and-height);padding:var(--gcds-input-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}:host .gcds-input-wrapper input[type=number]{-moz-appearance:textfield}:host .gcds-input-wrapper input[type=number]::-webkit-inner-spin-button,:host .gcds-input-wrapper input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}}@layer disabled{:host .gcds-input-wrapper.gcds-disabled{color:var(--gcds-input-disabled-text)}:host .gcds-input-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-input-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-input-wrapper.gcds-disabled input:disabled{background-color:var(--gcds-input-disabled-background);border-color:var(--gcds-input-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-input-wrapper input.gcds-error:not(:focus){border-color:var(--gcds-input-danger-border)}}@layer focus{:host .gcds-input-wrapper:focus-within input:focus{border-color:var(--gcds-input-focus-border);box-shadow:var(--gcds-input-focus-box-shadow);outline:var(--gcds-input-outline-width) solid var(--gcds-input-focus-border);outline-offset:var(--gcds-input-border-width)}}";
var x2 = Et(class t12 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsInput = Ue(this, "gcdsInput");
    this.gcdsSuggestionSelected = Ue(this, "gcdsSuggestionSelected");
    this.gcdsChange = Ue(this, "gcdsChange");
    this.gcdsError = Ue(this, "gcdsError");
    this.gcdsValid = Ue(this, "gcdsValid");
    this.internals = this.attachInternals();
    this.htmlValidationErrors = [];
    this.inputTitle = "";
    this._validator = i5;
    this.disabled = false;
    this.hideLabel = false;
    this.required = false;
    this.type = "text";
    this.inputmode = null;
    this.validateOn = "blur";
    this.inheritedAttributes = {};
    this.onBlur = () => {
      if (this.validateOn == "blur") {
        this.validate();
      }
      this.gcdsBlur.emit();
    };
    this.handleInput = (t26, s13) => {
      const i12 = t26.target && t26.target.value;
      this.value = i12;
      this.internals.setFormValue(i12 ? i12 : null);
      if (t26.type === "change") {
        if (this.suggestionsArr && this.suggestionsArr.some((t27) => {
          var s15;
          return i12 == ((s15 = t27.value) !== null && s15 !== void 0 ? s15 : t27.label);
        })) {
          this.gcdsSuggestionSelected.emit(this.value);
        }
        const s14 = new t26.constructor(t26.type, t26);
        this.el.dispatchEvent(s14);
      } else {
        this.updateValidity();
      }
      s13.emit(this.value);
    };
  }
  validateDisabledInput() {
    if (this.required) {
      this.disabled = false;
    }
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  watchValue(t26) {
    this.internals.setFormValue(t26 ? t26 : null);
  }
  get validity() {
    return this.internals.validity;
  }
  validateValidator() {
    this._validator = y2(this.validator);
  }
  validateSuggestions() {
    if (this.suggestions == null || typeof this.suggestions === "string" && this.suggestions.trim() == "") {
      this.suggestionsArr = null;
      return;
    }
    let t26 = false;
    if (typeof this.suggestions === "string") {
      try {
        this.suggestions = JSON.parse(this.suggestions);
      } catch (t27) {
        a2("gcds-input", ["Invalid JSON string for suggestions"]);
        this.suggestions = null;
      }
    }
    if (Array.isArray(this.suggestions)) {
      this.suggestionsArr = this.suggestions;
    } else {
      this.suggestionsArr = null;
    }
    if (this.suggestionsArr) {
      t26 = this.suggestionsArr.some((t27) => !w3(t27));
    } else {
      t26 = true;
    }
    const s13 = u2([], "suggestions", this.suggestionsArr, t26);
    if (s13.length > 0) {
      a2("gcds-input", s13);
    }
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  ariaInvalidWatcher() {
    this.inheritedAttributes = r2(this.el, this.shadowElement);
  }
  ariaDescriptiondWatcher() {
    this.inheritedAttributes = r2(this.el, this.shadowElement);
  }
  async validate() {
    m2(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
    if (this.required && !this.internals.checkValidity() || !this.internals.checkValidity()) {
      if (!this.internals.validity.valueMissing) {
        this.errorMessage = p2(this.htmlValidationErrors[0], this.lang, this.el);
        this.inputTitle = this.errorMessage;
      }
    }
  }
  async checkValidity() {
    return this.internals.checkValidity();
  }
  async getValidationMessage() {
    return this.internals.validationMessage;
  }
  submitListener(t26) {
    if (t26.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError && this.validateOn != "other") {
        t26.preventDefault();
      }
    }
  }
  keyDownListener(t26) {
    if (t26.target == this.el && t26.key === "Enter") {
      const t27 = document.createElement("button");
      t27.type = "submit";
      t27.style.display = "none";
      this.el.closest("form").appendChild(t27);
      t27.click();
      t27.remove();
    }
  }
  formResetCallback() {
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue);
      this.value = this.initialValue;
    }
  }
  formStateRestoreCallback(t26) {
    this.internals.setFormValue(t26);
    this.value = t26;
  }
  updateValidity(t26) {
    const s13 = this.shadowElement.validity;
    this.htmlValidationErrors = [];
    for (const t27 in s13) {
      if (s13[t27] === true && t27 !== "valid") {
        this.htmlValidationErrors.push(t27);
      }
    }
    for (const s14 in t26) {
      this.htmlValidationErrors.push(s14);
    }
    const i12 = t26 ? Object.assign(Object.assign({}, this.shadowElement.validity), t26) : this.shadowElement.validity;
    let e16 = null;
    if (this.htmlValidationErrors.length > 0) {
      e16 = p2(this.htmlValidationErrors[0], this.lang, this.el);
    }
    this.internals.setValidity(i12, e16, this.shadowElement);
    this.inputTitle = e16;
  }
  updateLang() {
    const t26 = new MutationObserver((t27) => {
      if (t27[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    t26.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    this.validateSuggestions();
    this.validateDisabledInput();
    this.validateHasError();
    this.validateErrorMessage();
    a3(this.el, "input", this.type);
    this.validateValidator();
    this.inheritedAttributes = r2(this.el, this.shadowElement);
    this.internals.setFormValue(this.value ? this.value : null);
    this.initialValue = this.value ? this.value : null;
  }
  componentDidLoad() {
    let t26;
    if (this.value && (this.minlength || this.maxlength)) {
      if (this.minlength && this.value.length < this.minlength) {
        t26 = { tooShort: true };
      } else if (this.maxlength && this.value.length > this.maxlength) {
        t26 = { tooLong: true };
      }
    }
    this.updateValidity(t26);
    if (this.autofocus) {
      requestAnimationFrame(() => {
        var t27;
        (t27 = this.shadowElement) === null || t27 === void 0 ? void 0 : t27.focus();
      });
    }
  }
  render() {
    const { disabled: t26, errorMessage: s13, hideLabel: i12, hint: r14, inputId: n16, name: o12, label: d17, required: h19, size: l17, type: c19, inputmode: u16, value: p16, hasError: g13, autocomplete: f12, autofocus: b10, form: m10, max: v7, maxlength: y5, min: w10, minlength: k6, pattern: x5, readonly: E6, step: j7, inputTitle: I2, inheritedAttributes: O3, lang: D2 } = this;
    const V2 = { maxWidth: `calc(${l17 * 2}ch + 1.5rem)` };
    const $2 = Object.assign({ disabled: t26, required: h19, type: c19, inputmode: u16, autocomplete: f12, autofocus: b10, form: m10, max: v7, maxlength: y5, min: w10, minlength: k6, pattern: x5, readonly: E6, step: j7, value: p16, title: I2 }, O3);
    const M5 = { label: d17, required: h19 };
    if (r14 || s13) {
      const t27 = r14 ? `hint-${n16} ` : "";
      const i13 = s13 ? `error-message-${n16} ` : "";
      $2["aria-describedby"] = `${t27}${i13}${$2["aria-describedby"] ? ` ${$2["aria-describedby"]}` : ""}`;
    }
    return ye(ge, { key: "8ba9b63b14c8c0e8625f7468be81462d3b719303" }, ye("div", { key: "173a744866d8b3f6eb8e9727fa849123fb752933", class: `gcds-input-wrapper ${t26 ? "gcds-disabled" : ""} ${g13 ? "gcds-error" : ""}` }, ye("gcds-label", Object.assign({ key: "4cad5a76c5912dfce86c3dd96aef58132483b05e" }, M5, { "hide-label": i12, "label-for": n16, lang: D2 })), r14 ? ye("gcds-hint", { "hint-id": n16 }, r14) : null, s13 ? ye("gcds-error-message", { messageId: n16 }, s13) : null, ye("input", Object.assign({ key: "d19dd65df5c7993b6f08d2443b6b9a5b5fa01231" }, $2, { class: g13 ? "gcds-error" : null, id: n16, name: o12, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: (t27) => this.handleInput(t27, this.gcdsInput), onChange: (t27) => this.handleInput(t27, this.gcdsChange), "aria-labelledby": `label-for-${n16}`, "aria-invalid": O3["aria-invalid"] === "true" ? O3["aria-invalid"] : s13 ? "true" : "false", size: l17, style: l17 ? V2 : null, list: this.suggestionsArr && this.suggestionsArr.length > 0 ? `datalist-for-${n16}` : null, part: "input", ref: (t27) => this.shadowElement = t27 })), this.suggestionsArr && this.suggestionsArr.length > 0 ? ye("datalist", { id: `datalist-for-${n16}` }, this.suggestionsArr.map((t27) => {
      var s14;
      return ye("option", { value: (s14 = t27.value) !== null && s14 !== void 0 ? s14 : t27.label }, t27.label);
    })) : null));
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { disabled: ["validateDisabledInput"], errorMessage: ["validateErrorMessage"], value: ["watchValue"], validator: ["validateValidator"], suggestions: ["validateSuggestions"], hasError: ["validateHasError"], "aria-invalid": ["ariaInvalidWatcher"], "aria-description": ["ariaDescriptiondWatcher"] };
  }
  static get style() {
    return k3;
  }
}, [81, "gcds-input", { disabled: [1028], errorMessage: [1025, "error-message"], hideLabel: [4, "hide-label"], hint: [1], inputId: [1, "input-id"], name: [1], label: [1], required: [4], size: [2], type: [1], inputmode: [1], value: [1025], autocomplete: [1], autofocus: [516], form: [513], max: [520], maxlength: [514], min: [520], minlength: [514], pattern: [513], readonly: [516], step: [520], validity: [2064], validator: [1040], validateOn: [1025, "validate-on"], suggestions: [1025], inheritedAttributes: [32], hasError: [32], lang: [32], validate: [64], checkValidity: [64], getValidationMessage: [64] }, [[4, "submit", "submitListener"], [4, "keydown", "keyDownListener"]], { disabled: ["validateDisabledInput"], errorMessage: ["validateErrorMessage"], value: ["watchValue"], validator: ["validateValidator"], suggestions: ["validateSuggestions"], hasError: ["validateHasError"], "aria-invalid": ["ariaInvalidWatcher"], "aria-description": ["ariaDescriptiondWatcher"] }]);
function E3() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-input", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-text"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-input":
        if (!customElements.get(t27)) {
          customElements.define(t27, x2);
        }
        break;
      case "gcds-error-message":
        if (!customElements.get(t27)) {
          n9();
        }
        break;
      case "gcds-hint":
        if (!customElements.get(t27)) {
          d7();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(t27)) {
          t4();
        }
        break;
      case "gcds-label":
        if (!customElements.get(t27)) {
          n11();
        }
        break;
      case "gcds-text":
        if (!customElements.get(t27)) {
          r5();
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/p-C7iJ-o9H.js
var m6 = `@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-select-wrapper{border:0;margin:0;padding:0}:host .gcds-select-wrapper select{box-sizing:border-box}:host .gcds-select-wrapper slot{display:initial}}@layer default{:host .gcds-select-wrapper{color:var(--gcds-select-default-text);font:var(--gcds-select-font-desktop);max-width:75ch;transition:color .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-select-wrapper{font:var(--gcds-select-font-mobile)}}:host .gcds-select-wrapper select{-webkit-appearance:none;-moz-appearance:none;background-color:var(--gcds-select-default-background);background-image:url("data:image/svg+xml;utf8,<svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.799988 0.900024L7.79999 7.90003L14.8 0.900024' stroke='currentColor' stroke-width='2'/></svg>");background-position-x:var(--gcds-select-arrow-position-x);background-position-y:50%;background-repeat:no-repeat;border:var(--gcds-select-border-width) solid;border-radius:var(--gcds-select-border-radius);box-sizing:border-box;color:var(--gcds-select-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-select-margin)!important;max-width:100%;min-height:var(--gcds-select-min-width-and-height);min-width:var(--gcds-select-min-width-and-height);padding:var(--gcds-select-padding)!important;transition:all .15s ease-in-out}}@layer disabled{:host .gcds-select-wrapper.gcds-disabled{color:var(--gcds-select-disabled-text)}:host .gcds-select-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-select-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-select-wrapper.gcds-disabled select:disabled{background-color:var(--gcds-select-disabled-background);border-color:var(--gcds-select-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-select-wrapper.gcds-error:not(:focus-within) select{border-color:var(--gcds-select-danger-border)}}@layer focus{:host .gcds-select-wrapper:focus-within select:focus{border-color:var(--gcds-select-focus-border);box-shadow:var(--gcds-select-focus-box-shadow);outline:var(--gcds-select-outline-width) solid var(--gcds-select-focus-border);outline-offset:var(--gcds-select-border-width)}}`;
var v3 = Et(class e7 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsChange = Ue(this, "gcdsChange");
    this.gcdsInput = Ue(this, "gcdsInput");
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsError = Ue(this, "gcdsError");
    this.gcdsValid = Ue(this, "gcdsValid");
    this.internals = this.attachInternals();
    this.selectTitle = "";
    this._validator = i5;
    this.hideLabel = false;
    this.required = false;
    this.disabled = false;
    this.validateOn = "blur";
    this.inheritedAttributes = {};
    this.handleInput = (e16, t26) => {
      const s13 = e16.target && e16.target.value;
      this.value = s13;
      this.internals.setFormValue(s13);
      if (e16.type === "change") {
        const t27 = new e16.constructor(e16.type, e16);
        this.el.dispatchEvent(t27);
      } else {
        this.updateValidity();
      }
      t26.emit(this.value);
    };
    this.onBlur = () => {
      if (this.validateOn === "blur") {
        this.validate();
      }
      this.gcdsBlur.emit();
    };
  }
  validateDisabledSelect() {
    if (this.required) {
      this.disabled = false;
    }
  }
  watchValue(e16) {
    if (!this.shadowElement) return;
    if (e16 && this.checkIfValidValue(e16)) {
      this.internals.setFormValue(e16);
      this.shadowElement.value = e16;
    } else {
      this.internals.setFormValue(null);
      this.value = null;
    }
    this.updateValidity();
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  get validity() {
    return this.internals.validity;
  }
  validateValidator() {
    this._validator = y2(this.validator);
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  ariaInvalidWatcher() {
    this.inheritedAttributes = r2(this.el, this.shadowElement);
  }
  ariaDescriptiondWatcher() {
    this.inheritedAttributes = r2(this.el, this.shadowElement);
  }
  async validate() {
    m2(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
    this.selectTitle = this.errorMessage;
  }
  async checkValidity() {
    return this.internals.checkValidity();
  }
  async getValidationMessage() {
    return this.internals.validationMessage;
  }
  submitListener(e16) {
    if (e16.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError && this.validateOn != "other") {
        e16.preventDefault();
      }
    }
  }
  checkValueOrSelected(e16) {
    const t26 = e16.getAttribute("value");
    if (this.value === t26) {
      e16.setAttribute("selected", "true");
      this.internals.setFormValue(t26);
      this.initialValue = this.value;
    } else if (e16.hasAttribute("selected")) {
      this.value = t26;
      this.internals.setFormValue(t26);
      this.initialValue = this.value ? this.value : null;
    }
  }
  checkIfValidValue(e16) {
    let t26 = false;
    this.options.forEach((s13) => {
      if (s13.nodeName === "OPTION") {
        const i12 = s13.getAttribute("value");
        if (i12 === e16) {
          t26 = true;
        }
      } else if (s13.nodeName === "OPTGROUP") {
        const i12 = Array.from(s13.children);
        i12.map((s14) => {
          const i13 = s14.getAttribute("value");
          if (i13 === e16) {
            t26 = true;
          }
        });
      }
    });
    return t26;
  }
  formResetCallback() {
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue);
      this.value = this.initialValue;
    }
  }
  formStateRestoreCallback(e16) {
    this.internals.setFormValue(e16);
    this.value = e16;
  }
  updateValidity() {
    if (!this.shadowElement) return;
    const e16 = this.shadowElement.validity;
    let t26 = null;
    if (e16 === null || e16 === void 0 ? void 0 : e16.valueMissing) {
      t26 = this.lang === "en" ? "Choose an option to continue." : "Choisissez une option pour continuer.";
    }
    this.internals.setValidity(e16, t26, this.shadowElement);
    this.selectTitle = t26;
  }
  observeOptions() {
    const e16 = { attributes: false, childList: true, characterData: true, subtree: true };
    const t26 = new MutationObserver(() => {
      this.options = Array.from(this.el.children);
    });
    t26.observe(this.el, e16);
  }
  updateLang() {
    const e16 = new MutationObserver((e17) => {
      if (e17[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    e16.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
    a3(this.el, "select");
    this.validateValidator();
    this.inheritedAttributes = r2(this.el, this.shadowElement);
    if (this.el.children) {
      this.options = Array.from(this.el.children);
      this.options.forEach((e16) => {
        if (e16.nodeName === "OPTION") {
          this.checkValueOrSelected(e16);
        } else if (e16.nodeName === "OPTGROUP") {
          const t26 = Array.from(e16.children);
          t26.map((e17) => {
            this.checkValueOrSelected(e17);
          });
        }
      });
      this.value = this.checkIfValidValue(this.value) ? this.value : null;
    }
  }
  async componentDidLoad() {
    this.observeOptions();
    this.updateValidity();
    if (this.autofocus) {
      requestAnimationFrame(() => {
        var e16;
        (e16 = this.shadowElement) === null || e16 === void 0 ? void 0 : e16.focus();
      });
    }
  }
  render() {
    const { lang: e16, selectId: t26, label: s13, hideLabel: r14, required: l17, disabled: o12, defaultValue: c19, value: d17, hint: h19, errorMessage: n16, inheritedAttributes: u16, hasError: g13, name: f12, options: b10, selectTitle: p16, autofocus: m10, form: v7, autocomplete: w10 } = this;
    const y5 = Object.assign({ name: f12, disabled: o12, required: l17, value: d17, title: p16, autofocus: m10, form: v7, autocomplete: w10 }, u16);
    const k6 = { label: s13, required: l17 };
    if (h19 || n16) {
      const e17 = h19 ? `hint-${t26} ` : "";
      const s14 = n16 ? `error-message-${t26} ` : "";
      y5["aria-describedby"] = `${e17}${s14}${y5["aria-describedby"] ? `${y5["aria-describedby"]}` : ""}`;
    }
    return ye(ge, { key: "880e20d5e7fb9a84bc4e5e413b405c9fa162a136" }, ye("div", { key: "15360120f3b67e2e507583ce7f000ca957440fb0", class: `gcds-select-wrapper ${o12 ? "gcds-disabled" : ""} ${g13 ? "gcds-error" : ""}` }, ye("gcds-label", Object.assign({ key: "3330dda4ebfd959ab6d9b1d98a588509fe70416e" }, k6, { "hide-label": r14, "label-for": t26, lang: e16 })), h19 ? ye("gcds-hint", { "hint-id": t26 }, h19) : null, n16 ? ye("gcds-error-message", { messageId: t26 }, n16) : null, ye("select", Object.assign({ key: "518196d275c5163e239fc2adcafe0b52c16ac4bf" }, y5, { id: t26, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: (e17) => this.handleInput(e17, this.gcdsInput), onChange: (e17) => this.handleInput(e17, this.gcdsChange), "aria-invalid": u16["aria-invalid"] === "true" ? u16["aria-invalid"] : n16 ? "true" : "false", part: "select", ref: (e17) => this.shadowElement = e17 }), c19 ? ye("option", { value: "", disabled: true, selected: true }, c19) : null, b10.map((e17) => {
      if (e17.nodeName === "OPTION") {
        const t27 = e17.hasAttribute("selected") ? { selected: true } : null;
        return ye("option", Object.assign({ value: e17.getAttribute("value") }, t27), e17.textContent);
      } else if (e17.nodeName === "OPTGROUP") {
        const t27 = Array.from(e17.children).map((e18) => {
          const t28 = e18.hasAttribute("selected") ? { selected: true } : null;
          return ye("option", Object.assign({ value: e18.getAttribute("value") }, t28), e18.textContent);
        });
        return ye("optgroup", { label: e17.getAttribute("label") }, t27);
      }
    }))));
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { disabled: ["validateDisabledSelect"], value: ["watchValue"], errorMessage: ["validateErrorMessage"], validator: ["validateValidator"], hasError: ["validateHasError"], "aria-invalid": ["ariaInvalidWatcher"], "aria-description": ["ariaDescriptiondWatcher"] };
  }
  static get style() {
    return m6;
  }
}, [81, "gcds-select", { selectId: [1537, "select-id"], label: [513], hideLabel: [4, "hide-label"], name: [513], required: [516], disabled: [1540], defaultValue: [513, "default-value"], autofocus: [516], form: [513], autocomplete: [1], value: [1025], errorMessage: [1537, "error-message"], hint: [513], validity: [2064], validator: [1040], validateOn: [1025, "validate-on"], hasError: [32], inheritedAttributes: [32], lang: [32], options: [32], validate: [64], checkValidity: [64], getValidationMessage: [64] }, [[4, "submit", "submitListener"]], { disabled: ["validateDisabledSelect"], value: ["watchValue"], errorMessage: ["validateErrorMessage"], validator: ["validateValidator"], hasError: ["validateHasError"], "aria-invalid": ["ariaInvalidWatcher"], "aria-description": ["ariaDescriptiondWatcher"] }]);
function w4() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-select", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-text"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-select":
        if (!customElements.get(e17)) {
          customElements.define(e17, v3);
        }
        break;
      case "gcds-error-message":
        if (!customElements.get(e17)) {
          n9();
        }
        break;
      case "gcds-hint":
        if (!customElements.get(e17)) {
          d7();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(e17)) {
          t4();
        }
        break;
      case "gcds-label":
        if (!customElements.get(e17)) {
          n11();
        }
        break;
      case "gcds-text":
        if (!customElements.get(e17)) {
          r5();
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/gcds-date-input.js
var k4 = { en: { year: "Year", month: "Month", day: "Day", selectmonth: "Select a month", months: { "01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", 10: "October", 11: "November", 12: "December" }, valueError: "gcds-date-input:  Value attribute contains an invalid date format. Expected format: ", valueFormatfull: "YYYY-MM-DD", valueFormatcompact: "YYYY-MM", required: " (required)", rangeUnderflow: "Date must be on or after {{min}}.", rangeOverflow: "Date must be on or before {{max}}." }, fr: { year: "Année", month: "Mois", day: "Jour", selectmonth: "Sélectionnez un mois", months: { "01": "janvier", "02": "février", "03": "mars", "04": "avril", "05": "mai", "06": "juin", "07": "juillet", "08": "août", "09": "septembre", 10: "octobre", 11: "novembre", 12: "décembre" }, valueError: "gcds-date-input:  Value attribute contains an invalid date format. Expected format: ", valueFormatfull: "YYYY-MM-DD", valueFormatcompact: "YYYY-MM", required: " (obligatoire)", rangeUnderflow: "La date doit être le {{min}} ou après.", rangeOverflow: "La date doit être le {{max}} ou avant." } };
var M3 = "@layer reset, default, hint, error;@layer reset{:host{display:block}:host .gcds-date-input__fieldset{border:0;min-inline-size:auto;padding:0}:host .gcds-date-input__fieldset legend{padding:0}}@layer default{:host .gcds-date-input__fieldset legend{color:var(--gcds-date-input-fieldset-text);font:var(--gcds-date-input-fieldset-font-desktop)}:host .gcds-date-input__fieldset legend .legend__required{font:var(--gcds-date-input-fieldset-required-font-desktop);margin:var(--gcds-date-input-fieldset-required-margin)!important;vertical-align:middle}@media only screen and (width < 48em){:host .gcds-date-input__fieldset legend{font:var(--gcds-date-input-fieldset-font-mobile)}:host .gcds-date-input__fieldset legend .legend__required{font:var(--gcds-date-input-fieldset-required-font-mobile)}}:host .gcds-date-input__day,:host .gcds-date-input__month,:host .gcds-date-input__year{display:inline-block;margin-inline-end:var(--gcds-date-input-margin);--gcds-label-font-desktop:var(--gcds-date-input-label-font-desktop);--gcds-label-font-mobile:var(--gcds-date-input-label-font-mobile )}}@layer hint{:host gcds-hint{margin:var(--gcds-date-input-fieldset-hint-margin)}}@layer error{:host gcds-input.gcds-date-input--error::part(input),:host gcds-select.gcds-date-input--error::part(select){border-color:var(--gcds-date-input-danger-border)}}";
var w5 = Et(class t13 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsInput = Ue(this, "gcdsInput");
    this.gcdsChange = Ue(this, "gcdsChange");
    this.gcdsError = Ue(this, "gcdsError");
    this.gcdsValid = Ue(this, "gcdsValid");
    this.internals = this.attachInternals();
    this.htmlValidationErrors = [];
    this._validator = i5;
    this.required = false;
    this.disabled = false;
    this.validateOn = "blur";
    this.monthValue = "";
    this.dayValue = "";
    this.yearValue = "";
    this.hasError = { day: false, month: false, year: false };
    this.errors = [];
    this.onBlur = () => {
      if (this.validateOn == "blur") {
        this.validate();
      }
    };
    this.blockInvalidKeys = (t26) => {
      const e16 = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"];
      if (e16.includes(t26.key)) return;
      if (!/^\d$/.test(t26.key)) {
        t26.preventDefault();
      }
    };
    this.handleInput = (t26, e16) => {
      const i12 = t26.target && t26.target.value;
      if (e16 === "year") {
        this.yearValue = i12;
      } else if (e16 === "month") {
        this.monthValue = i12;
      } else if (e16 === "day") {
        this.dayValue = i12;
      }
      this.setValue();
      if (t26.type === "change") {
        const e17 = new t26.constructor(t26.type, t26);
        this.el.dispatchEvent(e17);
      }
    };
  }
  validateName() {
    if (!this.name) {
      this.errors.push("name");
    } else if (this.errors.includes("name")) {
      this.errors.splice(this.errors.indexOf("name"), 1);
    }
  }
  validateLegend() {
    if (!this.legend) {
      this.errors.push("legend");
    } else if (this.errors.includes("legend")) {
      this.errors.splice(this.errors.indexOf("legend"), 1);
    }
  }
  validateFormat() {
    if (!this.format || this.format != "full" && this.format != "compact") {
      this.errors.push("format");
    } else if (this.errors.includes("format")) {
      this.errors.splice(this.errors.indexOf("format"), 1);
    }
  }
  watchValue() {
    if (this.value) {
      this.splitFormValue();
      this.internals.setFormValue(this.value);
    } else {
      this.yearValue = "";
      this.monthValue = "";
      this.dayValue = "";
      this.internals.setFormValue(null);
    }
    this.updateValidity();
  }
  get validity() {
    return this.internals.validity;
  }
  validateValidator() {
    this._validator = y2(this.validator);
  }
  async validate() {
    var t26, e16, i12, s13;
    this.hasError = m2(this.el, this._validator.validate(this.format === "full" ? `${this.yearValue}-${this.monthValue}-${this.dayValue}` : `${this.yearValue}-${this.monthValue}`), this.legend, this.gcdsError, this.gcdsValid, this.lang, { day: false, month: false, year: false });
    if (!this.internals.checkValidity() && !((t26 = this.internals.validity) === null || t26 === void 0 ? void 0 : t26.valueMissing) && !((e16 = this.internals.validity) === null || e16 === void 0 ? void 0 : e16.badInput)) {
      this.errorMessage = (i12 = this.htmlValidationErrors[0]) === null || i12 === void 0 ? void 0 : i12.errorMessage;
      this.hasError = Object.assign(Object.assign({}, this.hasError), (s13 = this.htmlValidationErrors[0]) === null || s13 === void 0 ? void 0 : s13.hasError);
    }
  }
  async checkValidity() {
    return this.internals.checkValidity();
  }
  async getValidationMessage() {
    return this.internals.validationMessage;
  }
  async submitListener(t26) {
    if (t26.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      for (const e16 in this.hasError) {
        if (this.hasError[e16] && this.validateOn != "other") {
          t26.preventDefault();
        }
      }
    }
  }
  formResetCallback() {
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue);
      this.value = this.initialValue;
    }
  }
  formStateRestoreCallback(t26) {
    this.internals.setFormValue(t26);
    this.value = t26;
  }
  checkAndValidateValidity() {
    var t26, e16, i12, s13, a11, r14;
    const n16 = [this.monthSelect, this.yearInput];
    if (this.format === "full") {
      this.lang === "en" ? n16.splice(1, 0, this.dayInput) : n16.unshift(this.dayInput);
    }
    this.htmlValidationErrors = [];
    let d17 = true;
    let o12 = false;
    let l17 = false;
    let h19 = false;
    let c19 = false;
    let f12 = [];
    let m10 = null;
    if (this.required || this.value != null) {
      n16.forEach((t27) => {
        if (t27.value === "" || t27.value == null) {
          o12 = true;
          d17 = false;
          f12.push(t27);
        }
      });
      m10 = f5({ day: (t26 = this.dayInput) === null || t26 === void 0 ? void 0 : t26.value, month: (e16 = this.monthSelect) === null || e16 === void 0 ? void 0 : e16.value, year: (i12 = this.yearInput) === null || i12 === void 0 ? void 0 : i12.value }, this.format).reason[this.lang];
    }
    if (this.required && !o12) {
      const t27 = f5({ day: (s13 = this.dayInput) === null || s13 === void 0 ? void 0 : s13.value, month: (a11 = this.monthSelect) === null || a11 === void 0 ? void 0 : a11.value, year: (r14 = this.yearInput) === null || r14 === void 0 ? void 0 : r14.value }, this.format);
      if (t27.reason.en != "") {
        l17 = true;
        m10 = t27.reason[this.lang];
        f12 = n16;
        this.htmlValidationErrors.push({ error: "badInput", hasError: t27.errors, errorMessage: m10 });
      }
    }
    if (this.value != null && this.min && !o12 && !l17) {
      const t27 = new Date(this.value);
      const e17 = new Date(this.min);
      if (t27 < e17) {
        d17 = false;
        h19 = true;
        f12 = n16;
        m10 = k4[this.lang].rangeUnderflow.replace("{{min}}", this.min);
        this.htmlValidationErrors.push({ error: "rangeUnderflow", hasError: { day: true, month: true, year: true }, errorMessage: m10 });
      }
    }
    if (this.value != null && this.max && !o12 && !l17 && !h19) {
      const t27 = new Date(this.value);
      const e17 = new Date(this.max);
      if (t27 > e17) {
        d17 = false;
        c19 = true;
        m10 = k4[this.lang].rangeOverflow.replace("{{max}}", this.max);
        this.htmlValidationErrors.push({ error: "rangeOverflow", hasError: { day: true, month: true, year: true }, errorMessage: m10 });
        f12 = n16;
      }
    }
    const g13 = { valueMissing: o12, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, rangeUnderflow: h19, rangeOverflow: c19, stepMismatch: false, badInput: l17, customError: false, valid: d17 };
    return { validity: g13, formError: f12, errorMessage: m10 };
  }
  updateValidity() {
    if (this.format === "full" && (!this.yearInput || !this.monthSelect || !this.dayInput) || this.format === "compact" && (!this.yearInput || !this.monthSelect)) return;
    const { validity: t26, formError: e16, errorMessage: i12 } = this.checkAndValidateValidity();
    let s13 = null;
    if ((t26 === null || t26 === void 0 ? void 0 : t26.valueMissing) || (t26 === null || t26 === void 0 ? void 0 : t26.badInput) || (t26 === null || t26 === void 0 ? void 0 : t26.rangeUnderflow) || (t26 === null || t26 === void 0 ? void 0 : t26.rangeOverflow)) {
      s13 = i12;
    }
    this.internals.setValidity(t26, s13, e16[0]);
  }
  updateLang() {
    const t26 = new MutationObserver((t27) => {
      if (t27[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    t26.observe(this.el, s2);
  }
  setValue() {
    const { monthValue: t26, format: e16 } = this;
    let { yearValue: i12, dayValue: s13 } = this;
    if (s13 && s13.length === 1 && s13 != "0") {
      s13 = "0" + s13;
      this.dayValue = s13;
    } else if (s13 && s13.length == 3 && s13[0] === "0") {
      s13 = s13.substring(1);
      this.dayValue = s13;
    }
    s13 = s13 === null || s13 === void 0 ? void 0 : s13.replace(/[eE-]/g, "");
    i12 = i12 === null || i12 === void 0 ? void 0 : i12.replace(/[eE-]/g, "");
    if (e16 === "full") {
      this.value = `${i12}-${t26}-${s13}`;
    } else if (e16 === "compact") {
      this.value = `${i12}-${t26}`;
    }
    this.internals.setFormValue(this.value);
    this.updateValidity();
    return true;
  }
  splitFormValue() {
    if (this.format == "compact") {
      const t26 = this.value.split("-");
      this.yearValue = t26[0];
      this.monthValue = t26[1];
    } else {
      const t26 = this.value.split("-");
      this.yearValue = t26[0];
      this.monthValue = t26[1];
      this.dayValue = t26[2];
    }
  }
  validateRequiredProps() {
    this.validateName();
    this.validateLegend();
    this.validateFormat();
    if (this.errors.includes("name") || this.errors.includes("legend") || this.errors.includes("format")) {
      return false;
    }
    return true;
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    a3(this.el, "date-input");
    this.validateValidator();
    const t26 = this.validateRequiredProps();
    if (!t26) {
      a2("gcds-date-input", this.errors);
    }
    this.watchValue();
    if (this.value && c2(this.value)) {
      this.splitFormValue();
      this.setValue();
      this.initialValue = this.value;
    }
  }
  async componentDidLoad() {
    this.updateValidity();
    if (this.autofocus) {
      requestAnimationFrame(() => {
        var t26;
        (t26 = this.fieldset) === null || t26 === void 0 ? void 0 : t26.focus();
      });
    }
  }
  render() {
    const { legend: t26, name: e16, format: i12, required: r14, hint: n16, errorMessage: d17, disabled: o12, lang: l17, hasError: h19, form: c19 } = this;
    const u16 = {};
    if (r14) {
      u16["aria-required"] = "true";
    }
    const f12 = { tabindex: "-1", "aria-labelledby": "date-input-legend" };
    if (n16) {
      const t27 = this.hint ? `date-input-hint ` : "";
      f12["aria-labelledby"] = `${f12["aria-labelledby"]} ${t27}`.trim();
    }
    const m10 = Array.from({ length: 12 }, (t27, e17) => e17 + 1 < 10 ? `0${e17 + 1}` : `${e17 + 1}`);
    const g13 = ye("gcds-select", Object.assign({ key: "e6f090b288f964719d989890c1757af3a5339551", label: k4[l17].month, selectId: "month", name: "month", defaultValue: k4[l17].selectmonth, disabled: o12, onInput: (t27) => this.handleInput(t27, "month"), onChange: (t27) => this.handleInput(t27, "month"), value: this.monthValue, class: `gcds-date-input__month ${h19["month"] ? "gcds-date-input--error" : ""}` }, u16, { "aria-invalid": h19["month"].toString(), "aria-description": h19["month"] && d17, form: c19, ref: (t27) => this.monthSelect = t27 }), m10.map((t27) => ye("option", { key: t27, value: t27 }, k4[l17]["months"][t27])));
    const p16 = ye("gcds-input", Object.assign({ key: "ed5b22815eaee48211a8feb25cf9198a4b601c9e", name: "year", label: k4[l17].year, inputId: "year", type: "text", inputmode: "numeric", size: 4, disabled: o12, value: this.yearValue, onInput: (t27) => this.handleInput(t27, "year"), onChange: (t27) => this.handleInput(t27, "year"), onKeyDown: this.blockInvalidKeys, class: `gcds-date-input__year ${h19["year"] ? "gcds-date-input--error" : ""}`, "validate-on": "other" }, u16, { "aria-invalid": h19["year"].toString(), "aria-description": h19["year"] && d17, form: c19, ref: (t27) => this.yearInput = t27 }));
    const v7 = ye("gcds-input", Object.assign({ key: "6d79af7da5be2ade8ea8f962c15233294e6042e7", name: "day", label: k4[l17].day, inputId: "day", type: "text", inputmode: "numeric", size: 2, disabled: o12, value: this.dayValue, onInput: (t27) => this.handleInput(t27, "day"), onChange: (t27) => this.handleInput(t27, "day"), onKeyDown: this.blockInvalidKeys, "validate-on": "other", class: `gcds-date-input__day ${h19["day"] ? "gcds-date-input--error" : ""}` }, u16, { "aria-invalid": h19["day"].toString(), "aria-description": h19["day"] && d17, form: c19, ref: (t27) => this.dayInput = t27 }));
    return ye(ge, { key: "bd299bd117299d1b0500413185a10a32501b7490", name: e16, onBlur: () => this.onBlur() }, this.validateRequiredProps() && ye("fieldset", Object.assign({ key: "02d4a393d8336c29d060716f5ddd9c3e1eb4c46d", class: "gcds-date-input__fieldset" }, f12, { ref: (t27) => this.fieldset = t27 }), ye("legend", { key: "deb09ce61953147d78b00eb1ac45a821651ec80f", id: "date-input-legend" }, t26, r14 ? ye("span", { class: "legend__required" }, k4[l17].required) : null), n16 ? ye("gcds-hint", { id: "date-input-hint", "hint-id": "date-input" }, n16) : null, d17 ? ye("div", null, ye("gcds-error-message", { id: "date-input-error", messageId: "date-input" }, d17)) : null, i12 == "compact" ? [g13, p16] : l17 == "en" ? [g13, v7, p16] : [v7, g13, p16]));
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { name: ["validateName"], legend: ["validateLegend"], format: ["validateFormat"], value: ["watchValue"], validator: ["validateValidator"] };
  }
  static get style() {
    return M3;
  }
}, [81, "gcds-date-input", { name: [1], legend: [1], format: [1], value: [1025], required: [4], hint: [1], errorMessage: [1025, "error-message"], disabled: [1028], autofocus: [516], max: [513], min: [513], form: [513], validity: [2064], validator: [1040], validateOn: [1025, "validate-on"], monthValue: [32], dayValue: [32], yearValue: [32], hasError: [32], errors: [32], lang: [32], validate: [64], checkValidity: [64], getValidationMessage: [64] }, [[4, "submit", "submitListener"]], { name: ["validateName"], legend: ["validateLegend"], format: ["validateFormat"], value: ["watchValue"], validator: ["validateValidator"] }]);
function E4() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-date-input", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-input", "gcds-label", "gcds-select", "gcds-text"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-date-input":
        if (!customElements.get(t27)) {
          customElements.define(t27, w5);
        }
        break;
      case "gcds-error-message":
        if (!customElements.get(t27)) {
          n9();
        }
        break;
      case "gcds-hint":
        if (!customElements.get(t27)) {
          d7();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(t27)) {
          t4();
        }
        break;
      case "gcds-input":
        if (!customElements.get(t27)) {
          E3();
        }
        break;
      case "gcds-label":
        if (!customElements.get(t27)) {
          n11();
        }
        break;
      case "gcds-select":
        if (!customElements.get(t27)) {
          w4();
        }
        break;
      case "gcds-text":
        if (!customElements.get(t27)) {
          r5();
        }
        break;
    }
  });
}
var j3 = E4;

// node_modules/@gcds-core/components/dist/components/gcds-date-modified.js
var n12 = { en: { date: "Date modified:", version: "Version " }, fr: { date: "Date de modification :", version: "Version " } };
var r6 = "@layer reset, default;@layer reset{:host{display:block}:host dl{margin:0}:host slot{display:initial}}@layer default{:host .gcds-date-modified{margin:var(--gcds-date-modified-margin)}:host .gcds-date-modified :is(dt,gcds-text,dd){display:inline}:host .gcds-date-modified dd{margin:var(--gcds-date-modified-description-margin)}:host .gcds-date-modified gcds-text::part(text){font:var(--gcds-date-modified-font)}}";
var f6 = Et(class t14 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.type = "date";
    this.errors = [];
  }
  updateLang() {
    const t26 = new MutationObserver((t27) => {
      if (t27[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    t26.observe(this.el, s2);
  }
  validateChildren() {
    if (this.el.innerHTML.trim() == "") {
      this.errors.push("children");
    } else if (this.errors.includes("children")) {
      this.errors.splice(this.errors.indexOf("children"), 1);
    }
  }
  validateRequiredProps() {
    this.validateChildren();
    if (this.errors.includes("children")) {
      return false;
    }
    return true;
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    const t26 = this.validateRequiredProps();
    if (!t26) {
      a2("gcds-date-modified", this.errors);
    }
  }
  render() {
    const { lang: t26, type: e16 } = this;
    return ye(ge, { key: "cda63407c2b6dc57f860d505f61a9f78c15c96b3" }, this.validateRequiredProps() && ye("dl", { key: "3324ca2c0c64c5f89c4a398344f3892fb1637073", class: "gcds-date-modified" }, ye("dt", { key: "46bb18c35af4cfccd2e8cc71943fb3bee51de503" }, ye("gcds-text", { key: "d9b12fc046a396ba12817b210eb100980c59d720", display: "inline", "margin-bottom": "0" }, e16 === "version" ? n12[t26].version : n12[t26].date)), ye("dd", { key: "cc81cb879d8fc1a06832aa6f80d29c179892afc7" }, ye("gcds-text", { key: "cebba414553c7357b8bf9033d4d84e2a2ec03521", display: "inline", "margin-bottom": "0" }, e16 === "version" ? ye("slot", null) : ye("time", null, ye("slot", null))))));
  }
  get el() {
    return this;
  }
  static get style() {
    return r6;
  }
}, [1, "gcds-date-modified", { type: [1025], errors: [32], lang: [32] }]);
function l6() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-date-modified", "gcds-text"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-date-modified":
        if (!customElements.get(t27)) {
          customElements.define(t27, f6);
        }
        break;
      case "gcds-text":
        if (!customElements.get(t27)) {
          r5();
        }
        break;
    }
  });
}
var h8 = l6;

// node_modules/@gcds-core/components/dist/components/gcds-details.js
var i7 = '@layer reset, default, hover, focus, print;@layer reset{:host{display:block}:host .details__summary{background-color:transparent;border-color:transparent;cursor:pointer;display:block}:host .details__panel slot{display:initial}:host .details__panel ::slotted(:first-child){margin-block-start:0}:host .details__panel ::slotted(:last-child){margin-block-end:0}:host .details__panel ::slotted(ol),:host .details__panel ::slotted(ul){padding:0}}@layer default{:host .gcds-details .details__summary{color:var(--gcds-details-default-text);font:var(--gcds-details-font-desktop);padding:var(--gcds-details-summary-padding);position:relative;text-align:left;text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(\n        --gcds-details-default-decoration-thickness\n      );text-underline-offset:.2em;transition:background-color .15s ease-in-out,color .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-details .details__summary{font:var(--gcds-details-font-mobile)}}:host .gcds-details .details__summary:before{border-block-end:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-start:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-inline-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;content:"";height:0;left:var(--gcds-details-summary-arrow-left);position:absolute;top:var(--gcds-details-summary-arrow-top);transition:transform .15s ease-in-out;width:0}:host .gcds-details .details__summary[aria-expanded=false]+.details__panel{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host .gcds-details .details__summary[aria-expanded=true]:before{transform:rotate(90deg)}:host .gcds-details .details__panel{margin:var(--gcds-details-panel-margin);padding:var(--gcds-details-panel-padding);position:relative}:host .gcds-details .details__panel summary{display:none}:host .gcds-details .details__panel:before{background-color:var(--gcds-details-panel-border-color);content:"";display:block;height:100%;left:0;position:absolute;top:0;width:var(--gcds-details-panel-border-width)}:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font-desktop)}@media only screen and (width < 48em){:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font-mobile)}}:host .gcds-details .details__panel ::slotted(:not(:last-child)){margin-block-end:var(--gcds-details-panel-slotted-margin)!important;margin-block-start:0!important}:host .gcds-details .details__panel ::slotted(ol),:host .gcds-details .details__panel ::slotted(ul){margin-inline-start:var(\n          --gcds-details-panel-slotted-margin\n        )!important}:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small-desktop)}@media only screen and (width < 48em){:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small-mobile)}}}@layer hover{@media (hover:hover){:host .gcds-details .details__summary:hover:not(:focus){color:var(--gcds-details-hover-text);text-decoration-thickness:var(--gcds-details-hover-decoration-thickness);text-underline-offset:.2em}:host .gcds-details .details__summary:hover:not(:focus):before{color:var(--gcds-details-hover-text)}}}@layer focus{:host .gcds-details .details__summary:focus{background-color:var(--gcds-details-focus-background);border-radius:var(--gcds-details-focus-border-radius);box-shadow:var(--gcds-details-focus-box-shadow);color:var(--gcds-details-focus-text);outline:var(--gcds-details-focus-outline);outline-offset:var(--gcds-details-focus-outline-offset);text-decoration:none}}@layer print{@media print{:host .gcds-details .details__summary{color:var(--gcds-details-print-summary-text);font-weight:var(--gcds-details-print-summary-font-weight);text-decoration:none}:host .gcds-details .details__summary:before{transform:rotate(90deg)}:host .gcds-details .details__panel{clip-path:none;clip:auto;border-left:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);display:block;height:auto;overflow:visible;position:static;white-space:normal;width:auto}}}';
var l7 = Et(class t15 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsClick = Ue(this, "gcdsClick");
    this.open = false;
    this.handleToggle = (t26) => {
      this.open = !this.open;
      this.open = t26.target.open;
    };
  }
  handleBeforePrint() {
    if (!this.open) {
      this.toggle();
      this.detailsElement.setAttribute("data-was-closed", "true");
    }
  }
  handleAfterPrint() {
    var t26;
    if (((t26 = this.detailsElement) === null || t26 === void 0 ? void 0 : t26.getAttribute("data-was-closed")) === "true") {
      this.toggle();
      this.detailsElement.removeAttribute("data-was-closed");
    }
  }
  async toggle() {
    this.open = !this.open;
    this.detailsElement.open = this.open;
  }
  render() {
    const { detailsTitle: t26, open: e16 } = this;
    return ye(ge, { key: "165e069eb5507fe81e7f2e3f23d70cf3e5979aa7" }, ye("div", { key: "a9bbede603871396dcdbfe6d8a4a25952b611f58", class: "gcds-details" }, ye("button", { key: "fa1db12503e14a3e99781759a3fc5f1544a24235", "aria-expanded": e16.toString(), "aria-controls": "details__panel", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (t27) => {
      const e17 = o2(t27, this.gcdsClick);
      if (e17) {
        this.toggle();
      }
    }, class: "details__summary", id: "details__summary" }, t26), ye("details", { key: "b63ec18b239b98bbb308989a4b71d4bda95372be", open: e16, id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary", onToggle: (t27) => this.handleToggle(t27), ref: (t27) => this.detailsElement = t27 }, ye("summary", { key: "f64cf84f9a239e19e8978e8511b94bc7b2e7dfc0" }, t26), ye("slot", { key: "d438628d3f47d1a15f4e03a603a86f08bf25a658" }))));
  }
  get el() {
    return this;
  }
  static get style() {
    return i7;
  }
}, [1, "gcds-details", { detailsTitle: [1, "details-title"], open: [1540], toggle: [64] }, [[8, "beforeprint", "handleBeforePrint"], [8, "afterprint", "handleAfterPrint"]]]);
function r7() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-details"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-details":
        if (!customElements.get(t27)) {
          customElements.define(t27, l7);
        }
        break;
    }
  });
}
var c7 = r7;

// node_modules/@gcds-core/components/dist/components/gcds-error-message.js
var p6 = n9;

// node_modules/@gcds-core/components/dist/components/p-C2_5JJxc.js
var n13 = '@layer reset, default, limit, role, margin;@layer reset{:host{color:var(--gcds-heading-default-text);display:block}:host :is(h1,h2,h3,h4,h5,h6){box-sizing:border-box;margin:0}:host slot{display:initial}}@layer default{:host :is(h1,h2,h3,h4,h5,h6){text-wrap:balance}:host h1.gcds-heading{font:var(--gcds-heading-h1-desktop)}@media only screen and (width < 48em){:host h1.gcds-heading{font:var(--gcds-heading-h1-mobile)}}:host h1.gcds-heading:after{background-color:var(--gcds-heading-h1-border-background);content:"";display:block;height:var(--gcds-heading-h1-border-height);margin-block-start:var(--gcds-heading-h1-border-margin);width:var(--gcds-heading-h1-border-width)}:host h2.gcds-heading{font:var(--gcds-heading-h2-desktop)}@media only screen and (width < 48em){:host h2.gcds-heading{font:var(--gcds-heading-h2-mobile)}}:host h3.gcds-heading{font:var(--gcds-heading-h3-desktop)}@media only screen and (width < 48em){:host h3.gcds-heading{font:var(--gcds-heading-h3-mobile)}}:host h4.gcds-heading{font:var(--gcds-heading-h4-desktop)}@media only screen and (width < 48em){:host h4.gcds-heading{font:var(--gcds-heading-h4-mobile)}}:host h5.gcds-heading{font:var(--gcds-heading-h5-desktop)}@media only screen and (width < 48em){:host h5.gcds-heading{font:var(--gcds-heading-h5-mobile)}}:host h6.gcds-heading{font:var(--gcds-heading-h6-desktop)}@media only screen and (width < 48em){:host h6.gcds-heading{font:var(--gcds-heading-h6-mobile)}}}@layer limit{:host h1.limit{max-width:var(--gcds-heading-character-limit-h1)}:host h2.limit{max-width:var(--gcds-heading-character-limit-h2)}:host h3.limit{max-width:var(--gcds-heading-character-limit-h3)}:host h4.limit{max-width:var(--gcds-heading-character-limit-h4)}:host h5.limit{max-width:var(--gcds-heading-character-limit-h5)}:host h6.limit{max-width:var(--gcds-heading-character-limit-h6)}}@layer margin{:host :is(h1,h2,h3,h4,h5,h6).mt-0{margin-block-start:var(--gcds-heading-spacing-0)}:host :is(h1,h2,h3,h4,h5,h6).mt-25{margin-block-start:var(--gcds-heading-spacing-25)}:host :is(h1,h2,h3,h4,h5,h6).mt-50{margin-block-start:var(--gcds-heading-spacing-50)}:host :is(h1,h2,h3,h4,h5,h6).mt-75{margin-block-start:var(--gcds-heading-spacing-75)}:host :is(h1,h2,h3,h4,h5,h6).mt-100{margin-block-start:var(--gcds-heading-spacing-100)}:host :is(h1,h2,h3,h4,h5,h6).mt-125{margin-block-start:var(--gcds-heading-spacing-125)}:host :is(h1,h2,h3,h4,h5,h6).mt-150{margin-block-start:var(--gcds-heading-spacing-150)}:host :is(h1,h2,h3,h4,h5,h6).mt-175{margin-block-start:var(--gcds-heading-spacing-175)}:host :is(h1,h2,h3,h4,h5,h6).mt-200{margin-block-start:var(--gcds-heading-spacing-200)}:host :is(h1,h2,h3,h4,h5,h6).mt-225{margin-block-start:var(--gcds-heading-spacing-225)}:host :is(h1,h2,h3,h4,h5,h6).mt-250{margin-block-start:var(--gcds-heading-spacing-250)}:host :is(h1,h2,h3,h4,h5,h6).mt-300{margin-block-start:var(--gcds-heading-spacing-300)}:host :is(h1,h2,h3,h4,h5,h6).mt-350{margin-block-start:var(--gcds-heading-spacing-350)}:host :is(h1,h2,h3,h4,h5,h6).mt-400{margin-block-start:var(--gcds-heading-spacing-400)}:host :is(h1,h2,h3,h4,h5,h6).mt-450{margin-block-start:var(--gcds-heading-spacing-450)}:host :is(h1,h2,h3,h4,h5,h6).mt-500{margin-block-start:var(--gcds-heading-spacing-500)}:host :is(h1,h2,h3,h4,h5,h6).mt-550{margin-block-start:var(--gcds-heading-spacing-550)}:host :is(h1,h2,h3,h4,h5,h6).mt-600{margin-block-start:var(--gcds-heading-spacing-600)}:host :is(h1,h2,h3,h4,h5,h6).mt-650{margin-block-start:var(--gcds-heading-spacing-650)}:host :is(h1,h2,h3,h4,h5,h6).mt-700{margin-block-start:var(--gcds-heading-spacing-700)}:host :is(h1,h2,h3,h4,h5,h6).mt-750{margin-block-start:var(--gcds-heading-spacing-750)}:host :is(h1,h2,h3,h4,h5,h6).mt-800{margin-block-start:var(--gcds-heading-spacing-800)}:host :is(h1,h2,h3,h4,h5,h6).mt-850{margin-block-start:var(--gcds-heading-spacing-850)}:host :is(h1,h2,h3,h4,h5,h6).mt-900{margin-block-start:var(--gcds-heading-spacing-900)}:host :is(h1,h2,h3,h4,h5,h6).mt-950{margin-block-start:var(--gcds-heading-spacing-950)}:host :is(h1,h2,h3,h4,h5,h6).mt-1000{margin-block-start:var(--gcds-heading-spacing-1000)}:host :is(h1,h2,h3,h4,h5,h6).mt-1050{margin-block-start:var(--gcds-heading-spacing-1050)}:host :is(h1,h2,h3,h4,h5,h6).mt-1100{margin-block-start:var(--gcds-heading-spacing-1100)}:host :is(h1,h2,h3,h4,h5,h6).mt-1150{margin-block-start:var(--gcds-heading-spacing-1150)}:host :is(h1,h2,h3,h4,h5,h6).mt-1200{margin-block-start:var(--gcds-heading-spacing-1200)}:host :is(h1,h2,h3,h4,h5,h6).mt-1250{margin-block-start:var(--gcds-heading-spacing-1250)}:host :is(h1,h2,h3,h4,h5,h6).mb-0{margin-block-end:var(--gcds-heading-spacing-0)}:host :is(h1,h2,h3,h4,h5,h6).mb-25{margin-block-end:var(--gcds-heading-spacing-25)}:host :is(h1,h2,h3,h4,h5,h6).mb-50{margin-block-end:var(--gcds-heading-spacing-50)}:host :is(h1,h2,h3,h4,h5,h6).mb-75{margin-block-end:var(--gcds-heading-spacing-75)}:host :is(h1,h2,h3,h4,h5,h6).mb-100{margin-block-end:var(--gcds-heading-spacing-100)}:host :is(h1,h2,h3,h4,h5,h6).mb-125{margin-block-end:var(--gcds-heading-spacing-125)}:host :is(h1,h2,h3,h4,h5,h6).mb-150{margin-block-end:var(--gcds-heading-spacing-150)}:host :is(h1,h2,h3,h4,h5,h6).mb-175{margin-block-end:var(--gcds-heading-spacing-175)}:host :is(h1,h2,h3,h4,h5,h6).mb-200{margin-block-end:var(--gcds-heading-spacing-200)}:host :is(h1,h2,h3,h4,h5,h6).mb-225{margin-block-end:var(--gcds-heading-spacing-225)}:host :is(h1,h2,h3,h4,h5,h6).mb-250{margin-block-end:var(--gcds-heading-spacing-250)}:host :is(h1,h2,h3,h4,h5,h6).mb-300{margin-block-end:var(--gcds-heading-spacing-300)}:host :is(h1,h2,h3,h4,h5,h6).mb-350{margin-block-end:var(--gcds-heading-spacing-350)}:host :is(h1,h2,h3,h4,h5,h6).mb-400{margin-block-end:var(--gcds-heading-spacing-400)}:host :is(h1,h2,h3,h4,h5,h6).mb-450{margin-block-end:var(--gcds-heading-spacing-450)}:host :is(h1,h2,h3,h4,h5,h6).mb-500{margin-block-end:var(--gcds-heading-spacing-500)}:host :is(h1,h2,h3,h4,h5,h6).mb-550{margin-block-end:var(--gcds-heading-spacing-550)}:host :is(h1,h2,h3,h4,h5,h6).mb-600{margin-block-end:var(--gcds-heading-spacing-600)}:host :is(h1,h2,h3,h4,h5,h6).mb-650{margin-block-end:var(--gcds-heading-spacing-650)}:host :is(h1,h2,h3,h4,h5,h6).mb-700{margin-block-end:var(--gcds-heading-spacing-700)}:host :is(h1,h2,h3,h4,h5,h6).mb-750{margin-block-end:var(--gcds-heading-spacing-750)}:host :is(h1,h2,h3,h4,h5,h6).mb-800{margin-block-end:var(--gcds-heading-spacing-800)}:host :is(h1,h2,h3,h4,h5,h6).mb-850{margin-block-end:var(--gcds-heading-spacing-850)}:host :is(h1,h2,h3,h4,h5,h6).mb-900{margin-block-end:var(--gcds-heading-spacing-900)}:host :is(h1,h2,h3,h4,h5,h6).mb-950{margin-block-end:var(--gcds-heading-spacing-950)}:host :is(h1,h2,h3,h4,h5,h6).mb-1000{margin-block-end:var(--gcds-heading-spacing-1000)}:host :is(h1,h2,h3,h4,h5,h6).mb-1050{margin-block-end:var(--gcds-heading-spacing-1050)}:host :is(h1,h2,h3,h4,h5,h6).mb-1100{margin-block-end:var(--gcds-heading-spacing-1100)}:host :is(h1,h2,h3,h4,h5,h6).mb-1150{margin-block-end:var(--gcds-heading-spacing-1150)}:host :is(h1,h2,h3,h4,h5,h6).mb-1200{margin-block-end:var(--gcds-heading-spacing-1200)}:host :is(h1,h2,h3,h4,h5,h6).mb-1250{margin-block-end:var(--gcds-heading-spacing-1250)}}@layer role{:host .gcds-heading.role-primary{color:var(--gcds-heading-role-primary)}:host .gcds-heading.role-secondary{color:var(--gcds-heading-role-secondary)}:host .gcds-heading.role-light{color:var(--gcds-heading-role-light)}}';
var t16 = Et(class h9 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.headingRole = "primary";
    this.characterLimit = true;
    this.marginBottom = "300";
  }
  validateTag(h19) {
    const a11 = ["h1", "h2", "h3", "h4", "h5", "h6"];
    if (!a11.includes(h19)) {
      console.error("Not a valid tag.");
    }
  }
  validateHeadingRole(h19) {
    const a11 = ["light", "primary", "secondary"];
    if (!a11.includes(h19)) {
      this.headingRole = "primary";
    }
  }
  validateMarginTop(h19) {
    if (!this.marginTop || this.marginTop && !n7.includes(h19)) {
      this.marginTop = this.tag === "h1" ? "0" : "600";
    }
  }
  validateMarginBottom(h19) {
    if (this.marginBottom && !n7.includes(h19)) {
      this.marginBottom = "300";
    }
  }
  componentWillLoad() {
    this.validateTag(this.tag);
    this.validateMarginTop(this.marginTop);
    this.validateMarginBottom(this.marginBottom);
  }
  render() {
    const { characterLimit: h19, marginTop: a11, marginBottom: g13, tag: n16, headingRole: t26 } = this;
    const d17 = n16;
    return ye(ge, { key: "27a2ae93a052f3ed90830b1834c510a3da6aaeb1" }, ye(d17, { key: "582d4079c24ad038345816c59331500238824e03", class: `
            gcds-heading
            ${t26 ? `role-${t26}` : ""}
            ${h19 ? "limit" : ""}
            ${a11 ? `mt-${a11}` : ""}
            ${g13 ? `mb-${g13}` : ""}
          ` }, ye("slot", { key: "54569b6f4c34e43be86c45e61b80723e3aa3043c" })));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { tag: ["validateTag"], headingRole: ["validateHeadingRole"], marginTop: ["validateMarginTop"], marginBottom: ["validateMarginBottom"] };
  }
  static get style() {
    return n13;
  }
}, [1, "gcds-heading", { tag: [1025], headingRole: [1025, "heading-role"], characterLimit: [4, "character-limit"], marginTop: [1025, "margin-top"], marginBottom: [1025, "margin-bottom"] }, void 0, { tag: ["validateTag"], headingRole: ["validateHeadingRole"], marginTop: ["validateMarginTop"], marginBottom: ["validateMarginBottom"] }]);
function d9() {
  if (typeof customElements === "undefined") {
    return;
  }
  const h19 = ["gcds-heading"];
  h19.forEach((h20) => {
    switch (h20) {
      case "gcds-heading":
        if (!customElements.get(h20)) {
          customElements.define(h20, t16);
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/gcds-error-summary.js
var d10 = { en: { heading: "There was a problem", subheading: "Errors were found on this page:" }, fr: { heading: "Un problème est survenu", subheading: "Des erreurs ont été trouvées sur cette page :" } };
var h10 = "@layer reset, default, compact;@layer reset{:host{display:block}}@layer default{:host{container:component summary/inline-size}:host .gcds-error-summary{border:var(--gcds-error-summary-border-width) solid var(--gcds-error-summary-border-color);color:var(--gcds-error-summary-text);display:none;margin:var(--gcds-error-summary-margin);padding:var(--gcds-error-summary-padding);transition:background .15s ease-in-out,border .15s ease-in-out,color .15s ease-in-out}:host .gcds-error-summary.gcds-show{display:block}:host .gcds-error-summary .summary__errorlist{margin:var(--gcds-error-summary-list-margin);padding:0}:host .gcds-error-summary .summary__errorlist .summary__listitem{max-width:var(--gcds-error-summary-max-width)}:host .gcds-error-summary .summary__errorlist .summary__listitem:not(:last-child){padding:var(--gcds-error-summary-list-item-padding)}:host .gcds-error-summary .summary__errorlist .summary__listitem gcds-link::part(link):not(:focus){color:var(--gcds-error-summary-link-color)}}@layer compact{@container summary (width < 24em){:host .gcds-error-summary{padding:var(--gcds-error-summary-mobile-padding)}}}";
var u8 = Et(class s10 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsClick = Ue(this, "gcdsClick");
    this.listen = true;
    this.errorLinksObject = {};
    this.errorQueue = {};
    this.hasSubmitted = false;
  }
  listenChanged() {
    if (this.errorLinks) {
      this.listen = false;
    }
  }
  errorLinksChanged(s13) {
    if (typeof s13 == "string") {
      this.errorLinks = JSON.parse(s13);
    } else if (typeof s13 == "object") {
      this.errorLinks = s13;
    }
    this.errorQueue = this.errorLinks;
    if (this.listen) {
      this.listen = false;
    }
  }
  errorListener(s13) {
    if (this.listen && s13.target.closest("form") == this.el.closest("form")) {
      this.errorLinksObject[s13.detail.message] = s13.target;
    }
  }
  validListener(s13) {
    if (this.listen && s13.target.closest("form") == this.el.closest("form")) {
      for (const [r14, e16] of Object.entries(this.errorLinksObject)) {
        if (e16 == s13.target) {
          delete this.errorLinksObject[r14];
        }
      }
      if (this.errorQueue) {
        const s14 = this.sortErrors();
        this.errorQueue = Object.assign({}, s14);
      }
    }
  }
  submitListener(s13) {
    if (this.listen && s13.target.closest("form") == this.el.closest("form")) {
      this.hasSubmitted = true;
      setTimeout(() => {
        const s14 = this.sortErrors();
        this.errorQueue = Object.assign({}, s14);
        setTimeout(() => {
          this.shadowElement.focus();
        }, 50);
      }, 100);
    }
  }
  sortErrors() {
    const s13 = Object.entries(this.errorLinksObject).map(([s14, r15]) => [s14, r15, r15.getBoundingClientRect().y]);
    s13.sort(function(s14, r15) {
      return s14[2] - r15[2];
    });
    const r14 = {};
    s13.forEach(function(s14) {
      r14[s14[0]] = s14[1];
    });
    return r14;
  }
  focusElement(s13) {
    var r14;
    const e16 = document.querySelector(s13);
    const t26 = `[for=${s13.replace("#", "")}]`;
    (r14 = e16.closest("form").querySelector(t26)) === null || r14 === void 0 ? void 0 : r14.scrollIntoView();
    e16.focus();
  }
  updateLang() {
    const s13 = new MutationObserver((s14) => {
      if (s14[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    s13.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    this.listenChanged();
    if (this.errorLinks && typeof this.errorLinks == "string") {
      this.errorQueue = Object.assign({}, JSON.parse(this.errorLinks));
    } else if (this.errorLinks && typeof this.errorLinks == "object") {
      this.errorQueue = Object.assign({}, this.errorLinks);
    }
  }
  render() {
    const { heading: s13, errorQueue: r14, lang: e16, hasSubmitted: o12, errorLinks: a11 } = this;
    return ye(ge, { key: "a42f126a2bbbe41621a5c56d04c87b31e87d0363" }, ye("div", { key: "eeee2e16453b3c7911042cabb079ab072d3bcd09", role: "alert", tabindex: "-1", ref: (s14) => this.shadowElement = s14, class: `gcds-error-summary ${(o12 || a11) && Object.keys(r14).length > 0 ? "gcds-show" : ""}` }, ye("gcds-heading", { key: "5c0aa122bc9f7a1dc250d856734d99befb88502e", tag: "h2", "margin-top": "0", "margin-bottom": "225" }, s13 !== null && s13 !== void 0 ? s13 : d10[e16].heading), ye("ol", { key: "2fd12eca1a9ffe4f11aedfdd3b93d3a0becf7420", class: "summary__errorlist" }, (o12 || a11) && Object.keys(r14).length > 0 && Object.keys(r14).map((s14) => ye("li", { class: "summary__listitem" }, ye("gcds-link", { size: "regular", href: a11 ? s14 : "#", onClick: (e17) => {
      e17.preventDefault();
      a11 ? this.focusElement(s14) : r14[s14].focus();
    } }, a11 ? r14[s14] : s14))))));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { listen: ["listenChanged"], errorLinks: ["errorLinksChanged"] };
  }
  static get style() {
    return h10;
  }
}, [1, "gcds-error-summary", { heading: [513], listen: [1028], errorLinks: [1025, "error-links"], lang: [32], errorQueue: [32], hasSubmitted: [32] }, [[4, "gcdsError", "errorListener"], [4, "gcdsValid", "validListener"], [4, "submit", "submitListener"]], { listen: ["listenChanged"], errorLinks: ["errorLinksChanged"] }]);
function l8() {
  if (typeof customElements === "undefined") {
    return;
  }
  const s13 = ["gcds-error-summary", "gcds-heading", "gcds-icon", "gcds-link"];
  s13.forEach((s14) => {
    switch (s14) {
      case "gcds-error-summary":
        if (!customElements.get(s14)) {
          customElements.define(s14, u8);
        }
        break;
      case "gcds-heading":
        if (!customElements.get(s14)) {
          d9();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(s14)) {
          t4();
        }
        break;
      case "gcds-link":
        if (!customElements.get(s14)) {
          k2();
        }
        break;
    }
  });
}
var f7 = l8;

// node_modules/@gcds-core/components/dist/components/gcds-fieldset.js
var c8 = { en: { legendSizeError: "gcds-fieldset: Invalid size." }, fr: { legendSizeError: "gcds-fieldset: Taille invalide." } };
var g5 = "@layer reset, default, size;@layer reset{:host{display:block}:host .gcds-fieldset{border:0;min-inline-size:auto;padding:0}:host legend{padding:0}:host slot{display:block;margin:0}}@layer default{.gcds-fieldset{color:var(--gcds-fieldset-default-text)}.gcds-fieldset legend{margin:var(--gcds-fieldset-legend-margin)!important}}@layer size{.gcds-fieldset legend.size-h2{font:var(--gcds-fieldset-legend-size-h2-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h2{font:var(--gcds-fieldset-legend-size-h2-mobile)}}.gcds-fieldset legend.size-h3{font:var(--gcds-fieldset-legend-size-h3-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h3{font:var(--gcds-fieldset-legend-size-h3-mobile)}}.gcds-fieldset legend.size-h4{font:var(--gcds-fieldset-legend-size-h4-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h4{font:var(--gcds-fieldset-legend-size-h4-mobile)}}.gcds-fieldset legend.size-h5{font:var(--gcds-fieldset-legend-size-h5-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h5{font:var(--gcds-fieldset-legend-size-h5-mobile)}}.gcds-fieldset legend.size-h6{font:var(--gcds-fieldset-legend-size-h6-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h6{font:var(--gcds-fieldset-legend-size-h6-mobile)}}}";
var a6 = Et(class e8 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.inheritedAttributes = {};
  }
  validateLegendSize(e16) {
    const s13 = ["h2", "h3", "h4", "h5", "h6"];
    if (!s13.includes(e16)) {
      console.error(`${c8["en"].legendSizeError} | ${c8["fr"].legendSizeError}`);
    }
  }
  async componentWillLoad() {
    this.validateLegendSize(this.legendSize);
    this.inheritedAttributes = r2(this.el, this.shadowElement);
  }
  render() {
    const { hint: e16, inheritedAttributes: s13, legend: i12, legendSize: l17 } = this;
    const n16 = Object.assign({}, s13);
    return ye(ge, { key: "3cd874d549d298eaab3347e3a804d3bec7d1e4a9" }, ye("fieldset", Object.assign({ key: "431a72699d4e23445c4f7e8e52422351ceb16e9f", class: "gcds-fieldset" }, n16, { "aria-labelledby": e16 ? `fieldset-legend fieldset-hint` : `fieldset-legend`, tabindex: "-1", ref: (e17) => this.shadowElement = e17 }), ye("legend", { key: "9a24d81b5304693d0aa32b4895b2505c0fb28ff9", id: "fieldset-legend", class: `size-${l17}` }, i12), e16 ? ye("gcds-hint", { id: "fieldset-hint", "hint-id": "fieldset" }, e16) : null, ye("slot", { key: "a820afec5165dd7175809e0c69269e99dfa85ec8" })));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { legendSize: ["validateLegendSize"] };
  }
  static get style() {
    return g5;
  }
}, [17, "gcds-fieldset", { hint: [513], legend: [513], legendSize: [1025, "legend-size"], inheritedAttributes: [32] }, void 0, { legendSize: ["validateLegendSize"] }]);
function r8() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-fieldset", "gcds-hint", "gcds-text"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-fieldset":
        if (!customElements.get(e17)) {
          customElements.define(e17, a6);
        }
        break;
      case "gcds-hint":
        if (!customElements.get(e17)) {
          d7();
        }
        break;
      case "gcds-text":
        if (!customElements.get(e17)) {
          r5();
        }
        break;
    }
  });
}
var o8 = r8;

// node_modules/@gcds-core/components/dist/components/gcds-file-uploader.js
var v4 = { en: { button: { remove: "Remove", upload: "Choose file" }, summary: { selected: "Currently selected:", unselected: "No file currently selected." }, removeFile: "Remove file", droppedError: "One or more of the dropped files is unable to be uploaded. Accepted file types:" }, fr: { button: { remove: "Supprimer", upload: "Choisir un fichier" }, summary: { selected: "Actuellement sélectionné:", unselected: "Aucun fichier actuellement sélectionné." }, removeFile: "Supprimer le fichier", droppedError: "Un ou plusieurs fichiers déposés ne peuvent pas être téléversés. Types de fichiers acceptés :" } };
var w6 = "@layer reset, default, input, files, disabled, error, focus, active;@layer reset{:host{display:block}:host .gcds-file-uploader-wrapper{border:0;margin:0;padding:0}:host .gcds-file-uploader-wrapper button{cursor:pointer;font:inherit;outline:0}}@layer default{:host .gcds-file-uploader-wrapper{align-items:flex-start;color:var(--gcds-file-uploader-default-text);display:flex;flex-direction:column;font:var(--gcds-file-uploader-font-desktop);max-width:90%;transition:color .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-file-uploader-wrapper{font:var(--gcds-file-uploader-font-mobile)}}:host .gcds-file-uploader-wrapper button{border-radius:var(--gcds-file-uploader-button-border-radius);transition:all .15s ease-in-out}}@layer input{:host .gcds-file-uploader-wrapper .file-uploader__input{display:inline-block;position:relative}:host .gcds-file-uploader-wrapper .file-uploader__input button{background-color:var(--gcds-file-uploader-button-background);border:var(--gcds-file-uploader-button-border-width) solid var(--gcds-file-uploader-button-text);color:var(--gcds-file-uploader-button-text);font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-button-margin);padding:var(--gcds-file-uploader-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__input input{cursor:pointer;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}:host .gcds-file-uploader-wrapper .file-uploader__input input::-webkit-file-upload-button{cursor:pointer}:host .gcds-file-uploader-wrapper .file-uploader__input #file-uploader__summary{height:0;margin:0;overflow:hidden;visibility:hidden}}@layer files{:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file{align-items:center;border:var(--gcds-file-uploader-file-border-width) solid var(--gcds-file-uploader-file-border-color);display:flex;justify-content:space-between;max-width:var(--gcds-file-uploader-file-max-width);padding:var(--gcds-file-uploader-file-padding);width:100%}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:not(:last-of-type){border-block-end:0}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:last-of-type{margin:var(--gcds-file-uploader-button-margin)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text{overflow:auto}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text::part(text){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button{align-items:center;background:transparent;border:0;color:var(--gcds-file-uploader-file-button-default-text);display:flex;font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-file-button-margin);padding:var(--gcds-file-uploader-file-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus) span{overflow:visible;text-decoration:underline var(--gcds-file-uploader-file-button-default-decoration-thickness);text-underline-offset:var(\n          --gcds-file-uploader-file-button-underline-offset\n        )}}@layer disabled{:host .gcds-file-uploader-wrapper.gcds-disabled{color:var(--gcds-file-uploader-disabled-text)}:host .gcds-file-uploader-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-file-uploader-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-file-uploader-wrapper.gcds-disabled :is(.file-uploader__input,.file-uploader__uploaded-file){pointer-events:none}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file button{color:inherit}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button{background-color:var(--gcds-file-uploader-disabled-background);border-color:currentColor}}@layer error{:host .gcds-file-uploader-wrapper.gcds-error .file-uploader__uploaded-file{border-color:var(--gcds-file-uploader-file-danger-border-color)}}@layer hover{@media (hover:hover){:host .gcds-file-uploader-wrapper .file-uploader__input:not(:focus-within):hover button{background-color:var(--gcds-file-uploader-hover-button-background)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover{color:var(--gcds-file-uploader-file-button-hover-text)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover span{text-decoration-thickness:var(\n            --gcds-file-uploader-file-button-hover-decoration-thickness\n          )}}}@layer focus{:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file:focus-within{border-color:var(--gcds-file-uploader-file-focus-border-color)}:host .gcds-file-uploader-wrapper:focus-within .file-uploader__input:focus-within button,:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file button:focus{background-color:var(--gcds-file-uploader-focus-button-background);border-color:var(--gcds-file-uploader-focus-button-background);color:var(--gcds-file-uploader-focus-button-text);outline:var(--gcds-file-uploader-focus-button-outline-width) solid var(--gcds-file-uploader-focus-button-background);outline-offset:var(--gcds-file-uploader-focus-button-outline-offset)}}@layer active{:host .gcds-file-uploader-wrapper .file-uploader__input:has(input:active) button{background-color:var(--gcds-file-uploader-active-button-background);border-color:var(--gcds-file-uploader-active-button-background);color:var(--gcds-file-uploader-active-button-text)}}";
var _3 = Et(class e9 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsChange = Ue(this, "gcdsChange");
    this.gcdsInput = Ue(this, "gcdsInput");
    this.gcdsRemoveFile = Ue(this, "gcdsRemoveFile");
    this.gcdsError = Ue(this, "gcdsError");
    this.gcdsValid = Ue(this, "gcdsValid");
    this.internals = this.attachInternals();
    this.inputTitle = "";
    this._validator = i5;
    this.hideLabel = false;
    this.required = false;
    this.disabled = false;
    this.value = [];
    this.validateOn = "blur";
    this.inheritedAttributes = {};
    this.onBlur = () => {
      if (this.validateOn == "blur") {
        this.validate();
      }
      this.gcdsBlur.emit();
    };
    this.handleInput = (e16, t26) => {
      const i12 = [];
      const r14 = Array.from(e16.target.files);
      this.files = e16.target.files;
      r14.map((e17) => {
        i12.push(e17["name"]);
      });
      this.addFilesToFormData(r14);
      this.value = [...i12];
      if (this.validateOn == "blur") {
        setTimeout(() => {
          this.validate();
        }, 100);
      }
      if (e16.type === "change") {
        const t27 = new e16.constructor(e16.type, e16);
        this.el.dispatchEvent(t27);
      } else {
        this.updateValidity();
      }
      t26.emit(this.value);
    };
    this.removeFile = (e16) => {
      e16.preventDefault();
      const t26 = e16.target.closest(".file-uploader__uploaded-file").childNodes[0].textContent;
      const i12 = this.value;
      const r14 = i12.indexOf(t26);
      if (r14 > -1) {
        i12.splice(r14, 1);
        const e17 = new DataTransfer();
        for (let i13 = 0; i13 < this.shadowElement.files.length; i13++) {
          if (this.shadowElement.files[i13].name != t26) {
            e17.items.add(this.shadowElement.files[i13]);
          }
        }
        this.shadowElement.files = e17.files;
        this.files = e17.files;
        this.addFilesToFormData(Array.from(this.shadowElement.files));
      }
      this.value = [...i12];
      this.gcdsRemoveFile.emit(this.value);
      this.gcdsChange.emit(this.value);
      this.el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      this.updateValidity();
    };
    this.addFilesToFormData = (e16) => {
      const t26 = new FormData();
      if (e16.length > 0) {
        e16.forEach((e17) => {
          t26.append(this.name, e17, e17.name);
        });
      }
      this.internals.setFormValue(t26);
    };
  }
  validateDisabledSelect() {
    if (this.required) {
      this.disabled = false;
    }
  }
  watchFiles() {
    const e16 = [];
    const t26 = Array.from(this.files);
    t26.map((t27) => {
      e16.push(t27["name"]);
    });
    this.addFilesToFormData(t26);
    this.value = [...e16];
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  validateValidator() {
    this._validator = y2(this.validator);
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  get validity() {
    return this.internals.validity;
  }
  async validate() {
    m2(this.el, this._validator.validate(this.shadowElement.files), this.label, this.gcdsError, this.gcdsValid, this.lang);
    this.inputTitle = this.errorMessage;
  }
  async checkValidity() {
    return this.internals.checkValidity();
  }
  async getValidationMessage() {
    return this.internals.validationMessage;
  }
  submitListener(e16) {
    if (e16.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError && this.validateOn != "other") {
        e16.preventDefault();
      }
    }
  }
  formResetCallback() {
    this.internals.setFormValue("");
    this.value = [];
  }
  formStateRestoreCallback(e16) {
    this.internals.setFormValue(e16);
    this.value = e16;
  }
  updateValidity() {
    if (!this.shadowElement) return;
    const e16 = this.shadowElement.validity;
    let t26 = null;
    if (e16 === null || e16 === void 0 ? void 0 : e16.valueMissing) {
      t26 = this.lang === "en" ? "You must upload a file to continue." : "Vous devez téléverser un fichier pour continuer.";
    }
    this.internals.setValidity(e16, t26, this.shadowElement);
    this.inputTitle = t26;
  }
  handleDrop(e16) {
    e16.preventDefault();
    const t26 = e16.dataTransfer.files;
    if (t26 && t26.length > 0) {
      const e17 = new DataTransfer();
      for (const i12 of t26) {
        e17.items.add(i12);
      }
      if (e17.files.length > 0) {
        this.shadowElement.files = e17.files;
        this.files = e17.files;
      }
      this.gcdsChange.emit(this.value);
      this.el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      this.updateValidity();
    }
    this.shadowElement.focus();
  }
  updateLang() {
    const e16 = new MutationObserver((e17) => {
      if (e17[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    e16.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
    a3(this.el, "file");
    this.validateValidator();
    this.inheritedAttributes = r2(this.el, this.shadowElement);
  }
  async componentDidLoad() {
    this.updateValidity();
    if (this.autofocus) {
      requestAnimationFrame(() => {
        var e16;
        (e16 = this.shadowElement) === null || e16 === void 0 ? void 0 : e16.focus();
      });
    }
  }
  render() {
    const { accept: e16, disabled: t26, errorMessage: i12, hasError: o12, hint: l17, label: a11, hideLabel: d17, lang: u16, multiple: c19, name: n16, required: p16, uploaderId: f12, value: h19, inputTitle: g13, autofocus: b10, form: m10, inheritedAttributes: w10 } = this;
    const _6 = Object.assign(Object.assign({ accept: e16, disabled: t26, multiple: c19, name: n16, required: p16, value: h19, title: g13, autofocus: b10, form: m10 }, w10), { "aria-describedby": `${w10["aria-describedby"] ? `${w10["aria-describedby"]} ` : ""}file-uploader__summary` });
    const y5 = { label: a11, required: p16 };
    if (l17 || i12) {
      const e17 = l17 ? `hint-${f12} ` : "";
      const t27 = i12 ? `error-message-${f12} ` : "";
      _6["aria-describedby"] = `${e17}${t27}${_6["aria-describedby"]}`;
    }
    return ye(ge, { key: "7f8da364ccd3dd2247eb3ca0acfdf626350bc935" }, ye("div", { key: "194df3b32d1751a1552d19a4a09f6794fd93e960", class: `gcds-file-uploader-wrapper ${t26 ? "gcds-disabled" : ""} ${o12 ? "gcds-error" : ""}` }, ye("gcds-label", Object.assign({ key: "4ae5e97f811a21823866c153211ce7903175351e" }, y5, { "hide-label": d17, "label-for": f12, lang: u16 })), l17 ? ye("gcds-hint", { "hint-id": f12 }, l17) : null, i12 ? ye("gcds-error-message", { messageId: f12 }, i12) : null, ye("div", { key: "f40d3488ea2aaa8d2833c4f1c988f67c847deb94", class: `file-uploader__input ${h19.length > 0 ? "uploaded-files" : ""}`, onDrop: (e17) => this.handleDrop(e17), onDragOver: (e17) => e17.preventDefault() }, ye("button", { key: "9ce270d208d451d2b240d8049d5b5a07a5bf1791", type: "button", tabindex: "-1", onClick: () => this.shadowElement.click() }, v4[u16].button.upload), ye("input", Object.assign({ key: "9ef4ac5e052c73626541fdfc3f2eb98fc65f4482", type: "file", id: f12 }, _6, { onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: (e17) => this.handleInput(e17, this.gcdsInput), onChange: (e17) => this.handleInput(e17, this.gcdsChange), "aria-invalid": o12 ? "true" : "false", ref: (e17) => this.shadowElement = e17 })), h19.length > 0 ? ye("gcds-sr-only", { id: "file-uploader__summary" }, ye("span", null, v4[u16].summary.selected, " "), h19.map((e17) => ye("span", null, e17, " "))) : ye("gcds-sr-only", { id: "file-uploader__summary" }, v4[u16].summary.unselected)), h19.length > 0 ? h19.map((e17) => ye("div", { class: "file-uploader__uploaded-file", "aria-label": `${v4[u16].removeFile} ${e17}.` }, ye("gcds-text", { "margin-bottom": "0" }, e17), ye("button", { onClick: (e18) => this.removeFile(e18) }, ye("span", null, v4[u16].button.remove), ye("gcds-icon", { name: "close", size: "text", "margin-left": "150" })))) : null));
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { disabled: ["validateDisabledSelect"], files: ["watchFiles"], errorMessage: ["validateErrorMessage"], validator: ["validateValidator"], hasError: ["validateHasError"] };
  }
  static get style() {
    return w6;
  }
}, [81, "gcds-file-uploader", { uploaderId: [1537, "uploader-id"], name: [1], label: [513], hideLabel: [4, "hide-label"], required: [516], disabled: [1540], value: [1040], accept: [513], multiple: [516], files: [1040], errorMessage: [1537, "error-message"], hint: [513], validator: [1040], validateOn: [1025, "validate-on"], validity: [2064], autofocus: [516], form: [513], hasError: [32], inheritedAttributes: [32], lang: [32], validate: [64], checkValidity: [64], getValidationMessage: [64] }, [[4, "submit", "submitListener"]], { disabled: ["validateDisabledSelect"], files: ["watchFiles"], errorMessage: ["validateErrorMessage"], validator: ["validateValidator"], hasError: ["validateHasError"] }]);
function y3() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-file-uploader", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-sr-only", "gcds-text"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-file-uploader":
        if (!customElements.get(e17)) {
          customElements.define(e17, _3);
        }
        break;
      case "gcds-error-message":
        if (!customElements.get(e17)) {
          n9();
        }
        break;
      case "gcds-hint":
        if (!customElements.get(e17)) {
          d7();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(e17)) {
          t4();
        }
        break;
      case "gcds-label":
        if (!customElements.get(e17)) {
          n11();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(e17)) {
          o5();
        }
        break;
      case "gcds-text":
        if (!customElements.get(e17)) {
          r5();
        }
        break;
    }
  });
}
var x3 = y3;

// node_modules/@gcds-core/components/dist/components/p-lkjXk2K8.js
var i8 = { en: { link: "https://canada.ca/en.html", gc: "Government of Canada" }, fr: { link: "https://canada.ca/fr.html", gc: "Gouvernement du Canada" } };
var r9 = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 819 78" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="signature-en-title">
	<title id="signature-en-title">Government of Canada</title>
	<path d="M0,0 36.84,0 36.84,75.01 0,75.01z M118.54,0 155.38,0 155.38,75.01 118.54,75.01z M72.58,15.61,77.84,4.9l5.22,10.32c.65,1.09,1.18,1,2.22.48l4.49-2.22L86.85,27.89c-.61,2.83,1,3.66,2.75,1.74L96,22.79l1.7,3.87c.57,1.17,1.43,1,2.57.79l6.61-1.39-2.22,8.35,0,.18c-.26,1.09-.78,2,.44,2.53l2.35,1.17L93.77,49.82c-1.39,1.43-.91,1.87-.39,3.48l1.26,3.87-12.71-2.3c-1.57-.39-2.66-.39-2.7.87l.52,14.58H75.93l.52-14.54c0-1.43-1.09-1.39-3.66-.86L61,57.18l1.52-3.87c.52-1.48.66-2.48-.52-3.48L48.11,38.46l2.57-1.57c.74-.57.78-1.17.39-2.44L48.46,26l6.7,1.43c1.87.44,2.39,0,2.87-1l1.87-3.83L66.52,30c1.17,1.39,2.83.48,2.31-1.52L65.65,12.86l4.92,2.83c.78.48,1.61.61,2.09-.3" class="fip_flag" />
	<path d="M29.4,31.73h-3.46l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.57.12,15.82.12c6.75,0,12.41,3.59,13.23,10.55h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.08,8.56-3.24,8.65-8.48h-8.21V15.47H29.4ZM44.83,28.44c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.24,28.44,44.83,28.44Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52,8.77,44.83,8.77s-11.29,4.93-11.29,11.76S37.65,32.34,44.83,32.34ZM58,9.38h5.36L69,26.54h.09l5.45-17.17h5.1l-8,22.35h-5.53ZM86.51,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61H98c-.87,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM106.7,9.38h4.63V13.7h.09a7.21,7.21,0,0,1,6.53-4.93,11.69,11.69,0,0,1,1.86.13v4.76a17.6,17.6,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V31.73H106.7V9.38ZM121.92,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73h-4.93V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73h-4.93V9.38ZM146.74,9.38h4.67v3.11h.13a7.47,7.47,0,0,1,6.87-3.72c2.72,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V31.73h-4.93V18.67c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6v13.1h-4.93V17.38c0-3.07-1-4.71-3.93-4.71-2.55,0-4.89,2.08-4.89,5.79V31.73h-4.93V9.38ZM188.21,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM208.4,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73H223.1V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73H208.4V9.38ZM231,9.38h3.71V2.67h4.93v6.7h4.45v3.68h-4.45V25c0,2,.17,3.07,2.38,3.07a8.25,8.25,0,0,0,2.08-.18v3.81c-1.08.08-2.12.26-3.2.26-5.15,0-6.1-2-6.19-5.71V13.05H231V9.38ZM12,71.68c-4.41,0-6.36-4-6.36-7.91S7.6,55.9,12,55.9s6.36,4,6.36,7.87S16.43,71.68,12,71.68Zm0,3.89c7.18,0,11.28-4.93,11.28-11.8S19.19,52,12,52s-11.29,4.93-11.29,11.76S4.83,75.57,12,75.57ZM25.2,52.61h3.67V50.76c0-5.71,3-6.66,6.18-6.66a13.89,13.89,0,0,1,3.46.3v3.85a8.32,8.32,0,0,0-2.29-.26c-1.34,0-2.42.48-2.42,2.33v2.29H38v3.68H33.8V75h-4.93V56.29H25.2ZM74.58,53.91c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.44-3.59,7.87-8.09H80c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.54-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.4ZM98.06,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93C89,57,91,55.9,93.73,55.9c2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM108.3,52.61H113V55.9l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V75H123V60.92c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V75H108.3V52.61ZM146.91,67.45c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.19,7.19,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM161,64c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S161,67.88,161,64ZM178.22,44.1h-4.93V55.51h-.09c-1.51-2.46-4.63-3.5-7.44-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.41,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.1ZM197.37,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.35,12.35,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69Z" class="fip_text" transform="translate(218,0)" />
	<path d="M29.47,32H26l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.64.4,15.89.4C22.64.4,28.3,4,29.12,11h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.09,8.56-3.24,8.65-8.47h-8.21V15.75h13.14V32ZM44.9,28.72c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.31,28.72,44.9,28.72Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52.08,9,44.9,9,33.62,14,33.62,20.81,37.73,32.61,44.9,32.61ZM79.93,32h-4.84V28.9H75a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V9.65h4.93V23.36c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V32ZM82.91,9.65h5.36l5.66,17.17H94l5.45-17.17h5.1l-8,22.35H91ZM111.4,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C128.66,15.4,124.33,9,117.28,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM131.6,9.65h4.63V14h.08A7.22,7.22,0,0,1,142.84,9a11.75,11.75,0,0,1,1.86.13v4.76a17.5,17.5,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V32H131.6V9.65ZM146.81,9.65h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32h-4.93V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V32h-4.93ZM175.48,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C192.73,15.4,188.41,9,181.36,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.87,2.47-2.6,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM195.67,9.65h4.67v3.11h.13A7.47,7.47,0,0,1,207.34,9c2.73,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V32h-4.93V19c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6V32h-4.93V17.65c0-3.07-1-4.71-3.93-4.71-2.55,0-4.88,2.08-4.88,5.79V32h-4.93V9.65ZM237.14,18.86A5.84,5.84,0,0,1,243,12.94c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C254.39,15.4,250.06,9,243,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM257.33,9.65H262v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32H272V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V32h-4.93ZM279.9,9.65h3.72V3h4.93v6.7H293v3.68h-4.45V25.27c0,2,.17,3.07,2.38,3.07a8.43,8.43,0,0,0,2.08-.17V32c-1.08.08-2.12.26-3.2.26-5.14,0-6.09-2-6.18-5.71V13.33h-3.72V9.65ZM5.69,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S5.69,68.15,5.69,64.31ZM22.9,44.37H18V55.79h-.09c-1.51-2.46-4.63-3.5-7.43-3.5-4.89,0-9.69,3.54-9.69,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.08v3h4.67V44.37ZM47.89,75.25H43V72.13H43a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V52.89h4.93V66.59c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V75.25ZM86.63,54.19c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.43-3.58,7.87-8.08h5.28c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.53-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.41ZM110.11,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-9-6.49-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.17-3.55,4.93-3.55,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.37,12.37,0,0,0,3.11-.56V71.88a7.21,7.21,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM120.35,52.89H125v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V75.25h-4.93V61.19c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V75.25h-4.93ZM159,67.72c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72S157.45,65,159,64v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.33,12.33,0,0,0,3.11-.56V71.88a7.17,7.17,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM173.06,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S173.06,68.15,173.06,64.31Zm17.21-19.93h-4.93V55.79h-.09c-1.51-2.46-4.62-3.5-7.43-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.37ZM209.42,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.34,12.34,0,0,0,3.11-.56V71.88a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77Z" class="fip_text" transform="translate(526,0)" />
</svg>
`;
var n14 = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 819 78" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="signature-fr-title">
	<title id="signature-fr-title">Gouvernement du Canada</title>
	<path d="M0,0 36.84,0 36.84,75.01 0,75.01z M118.54,0 155.38,0 155.38,75.01 118.54,75.01z M72.58,15.61,77.84,4.9l5.22,10.32c.65,1.09,1.18,1,2.22.48l4.49-2.22L86.85,27.89c-.61,2.83,1,3.66,2.75,1.74L96,22.79l1.7,3.87c.57,1.17,1.43,1,2.57.79l6.61-1.39-2.22,8.35,0,.18c-.26,1.09-.78,2,.44,2.53l2.35,1.17L93.77,49.82c-1.39,1.43-.91,1.87-.39,3.48l1.26,3.87-12.71-2.3c-1.57-.39-2.66-.39-2.7.87l.52,14.58H75.93l.52-14.54c0-1.43-1.09-1.39-3.66-.86L61,57.18l1.52-3.87c.52-1.48.66-2.48-.52-3.48L48.11,38.46l2.57-1.57c.74-.57.78-1.17.39-2.44L48.46,26l6.7,1.43c1.87.44,2.39,0,2.87-1l1.87-3.83L66.52,30c1.17,1.39,2.83.48,2.31-1.52L65.65,12.86l4.92,2.83c.78.48,1.61.61,2.09-.3" class="fip_flag" />
	<path d="M29.47,32H26l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.64.4,15.89.4C22.64.4,28.3,4,29.12,11h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.09,8.56-3.24,8.65-8.47h-8.21V15.75h13.14V32ZM44.9,28.72c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.31,28.72,44.9,28.72Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52.08,9,44.9,9,33.62,14,33.62,20.81,37.73,32.61,44.9,32.61ZM79.93,32h-4.84V28.9H75a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V9.65h4.93V23.36c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V32ZM82.91,9.65h5.36l5.66,17.17H94l5.45-17.17h5.1l-8,22.35H91ZM111.4,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C128.66,15.4,124.33,9,117.28,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM131.6,9.65h4.63V14h.08A7.22,7.22,0,0,1,142.84,9a11.75,11.75,0,0,1,1.86.13v4.76a17.5,17.5,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V32H131.6V9.65ZM146.81,9.65h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32h-4.93V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V32h-4.93ZM175.48,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C192.73,15.4,188.41,9,181.36,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.87,2.47-2.6,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM195.67,9.65h4.67v3.11h.13A7.47,7.47,0,0,1,207.34,9c2.73,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V32h-4.93V19c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6V32h-4.93V17.65c0-3.07-1-4.71-3.93-4.71-2.55,0-4.88,2.08-4.88,5.79V32h-4.93V9.65ZM237.14,18.86A5.84,5.84,0,0,1,243,12.94c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C254.39,15.4,250.06,9,243,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM257.33,9.65H262v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32H272V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V32h-4.93ZM279.9,9.65h3.72V3h4.93v6.7H293v3.68h-4.45V25.27c0,2,.17,3.07,2.38,3.07a8.43,8.43,0,0,0,2.08-.17V32c-1.08.08-2.12.26-3.2.26-5.14,0-6.09-2-6.18-5.71V13.33h-3.72V9.65ZM5.69,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S5.69,68.15,5.69,64.31ZM22.9,44.37H18V55.79h-.09c-1.51-2.46-4.63-3.5-7.43-3.5-4.89,0-9.69,3.54-9.69,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.08v3h4.67V44.37ZM47.89,75.25H43V72.13H43a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V52.89h4.93V66.59c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V75.25ZM86.63,54.19c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.43-3.58,7.87-8.08h5.28c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.53-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.41ZM110.11,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-9-6.49-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.17-3.55,4.93-3.55,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.37,12.37,0,0,0,3.11-.56V71.88a7.21,7.21,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM120.35,52.89H125v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V75.25h-4.93V61.19c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V75.25h-4.93ZM159,67.72c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72S157.45,65,159,64v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.33,12.33,0,0,0,3.11-.56V71.88a7.17,7.17,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM173.06,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S173.06,68.15,173.06,64.31Zm17.21-19.93h-4.93V55.79h-.09c-1.51-2.46-4.62-3.5-7.43-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.37ZM209.42,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.34,12.34,0,0,0,3.11-.56V71.88a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77Z" class="fip_text" transform="translate(218,0)" />
	<path d="M29.4,31.73h-3.46l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.57.12,15.82.12c6.75,0,12.41,3.59,13.23,10.55h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.08,8.56-3.24,8.65-8.48h-8.21V15.47H29.4ZM44.83,28.44c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.24,28.44,44.83,28.44Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52,8.77,44.83,8.77s-11.29,4.93-11.29,11.76S37.65,32.34,44.83,32.34ZM58,9.38h5.36L69,26.54h.09l5.45-17.17h5.1l-8,22.35h-5.53ZM86.51,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61H98c-.87,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM106.7,9.38h4.63V13.7h.09a7.21,7.21,0,0,1,6.53-4.93,11.69,11.69,0,0,1,1.86.13v4.76a17.6,17.6,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V31.73H106.7V9.38ZM121.92,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73h-4.93V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73h-4.93V9.38ZM146.74,9.38h4.67v3.11h.13a7.47,7.47,0,0,1,6.87-3.72c2.72,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V31.73h-4.93V18.67c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6v13.1h-4.93V17.38c0-3.07-1-4.71-3.93-4.71-2.55,0-4.89,2.08-4.89,5.79V31.73h-4.93V9.38ZM188.21,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM208.4,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73H223.1V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73H208.4V9.38ZM231,9.38h3.71V2.67h4.93v6.7h4.45v3.68h-4.45V25c0,2,.17,3.07,2.38,3.07a8.25,8.25,0,0,0,2.08-.18v3.81c-1.08.08-2.12.26-3.2.26-5.15,0-6.1-2-6.19-5.71V13.05H231V9.38ZM12,71.68c-4.41,0-6.36-4-6.36-7.91S7.6,55.9,12,55.9s6.36,4,6.36,7.87S16.43,71.68,12,71.68Zm0,3.89c7.18,0,11.28-4.93,11.28-11.8S19.19,52,12,52s-11.29,4.93-11.29,11.76S4.83,75.57,12,75.57ZM25.2,52.61h3.67V50.76c0-5.71,3-6.66,6.18-6.66a13.89,13.89,0,0,1,3.46.3v3.85a8.32,8.32,0,0,0-2.29-.26c-1.34,0-2.42.48-2.42,2.33v2.29H38v3.68H33.8V75h-4.93V56.29H25.2ZM74.58,53.91c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.44-3.59,7.87-8.09H80c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.54-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.4ZM98.06,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93C89,57,91,55.9,93.73,55.9c2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM108.3,52.61H113V55.9l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V75H123V60.92c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V75H108.3V52.61ZM146.91,67.45c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.19,7.19,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM161,64c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S161,67.88,161,64ZM178.22,44.1h-4.93V55.51h-.09c-1.51-2.46-4.63-3.5-7.44-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.41,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.1ZM197.37,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.35,12.35,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69Z" class="fip_text" transform="translate(575,0)" />
</svg>
`;
var V = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 143 34" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="wordmark-en-title">
	<title id="wordmark-en-title">Symbol of the Government of Canada</title>
	<g id="wmms" transform="translate(-1, -1)">
		<path class="fip_flag" d="M137.9,1.2h5.2v10.4h-5.2V1.2z M128.9,6.4l-0.3,0.1c0,0,1.8,1.5,1.8,1.6c0.1,0.1,0.2,0.1,0.1,0.4 c-0.1,0.3-0.2,0.6-0.2,0.6s1.6-0.3,1.8-0.4c0.2,0,0.3,0,0.3,0.2c0,0.2-0.1,1.9-0.1,1.9h0.5c0,0-0.1-1.8-0.1-1.9 c0-0.2,0.1-0.2,0.3-0.2c0.2,0,1.8,0.4,1.8,0.4s-0.1-0.4-0.2-0.6c-0.1-0.3,0-0.3,0.1-0.4c0.1-0.1,1.8-1.6,1.8-1.6l-0.3-0.1 c-0.2-0.1-0.1-0.2-0.1-0.3s0.3-1.1,0.3-1.1s-0.8,0.2-0.9,0.2c-0.1,0-0.2,0-0.2-0.1s-0.2-0.5-0.2-0.5s-0.9,1-1,1.1 c-0.2,0.2-0.4,0-0.3-0.2c0-0.2,0.5-2.3,0.5-2.3s-0.5,0.3-0.7,0.4s-0.3,0.1-0.3-0.1c-0.1-0.2-0.7-1.3-0.7-1.4c0,0-0.6,1.2-0.7,1.4 s-0.2,0.2-0.3,0.1c-0.2-0.1-0.7-0.4-0.7-0.4s0.5,2.1,0.5,2.3s-0.1,0.3-0.3,0.2l-1-1.1c0,0-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.2,0.1 c-0.2,0-1-0.2-1-0.2s0.3,1,0.4,1.1C129.1,6.1,129.1,6.3,128.9,6.4z M122.2,1.2h5.2v10.4h-5.2V1.2z"/>
		<path class="fip_text" d="M144.2,32.4c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6 c-6.7,0-6.8,3.3-6.8,4.1c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9 c0,0.5,0,0.8,0,1.1c0,0.2,0,0.3,0,0.5l0,0l0,0v0.1c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4 c0.1,4,4.1,5.4,6.9,5.3c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2 C145.1,32.2,144.4,31.9,144.2,32.4z M131.7,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8 c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0v0.1l0,0l0,0v0.1l0,0l0,0l0,0v4.2C135.7,31.1,134.1,33.5,131.7,33.5z M122.5,33.4 c-0.4-0.1-2.9,0.2-2.9-7.4s0-23.9,0-23.9c0-0.3,0-1.1-0.9-1.1c-0.9,0-6.9,0.3-7.3,0.4c-0.4,0-0.7,0.5,0,0.5 c0.7,0.1,3.9,0.3,3.9,5.6c0,2.6,0,5.2,0,7.1c0,0.1,0,0.2,0,0.2c0,0.2,0,0.3-0.1,0.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.2,0-0.5-0.2 c-0.5-0.4-2.8-1.8-5.7-1.8c-4.7,0-10.5,3.4-10.5,10.4c0,7.5,5.3,11.1,10.8,11.1c2.7,0,4.6-1.2,5.3-1.6c0.8-0.5,0.7-0.4,0.8,0.3 c0.1,0.5,0,1.5,1.4,1.4c1.5-0.2,5.1-0.6,5.8-0.7C123.3,33.9,123.1,33.5,122.5,33.4z M110.1,33.7c-4.4,0-6.7-5.2-6.7-10.2 c0-5.5,3.1-9.2,6.4-9c4.3,0.3,5.4,3.7,5.5,9.8c0,0.4,0,0.8,0,1.3C115.2,31.6,112.7,33.7,110.1,33.7z M98.4,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.8,2,3.8,5v0.1c0,0.1,0,0.2,0,0.2v0.3 c0,0.1,0,0.3,0,0.4c-0.1,1.5-0.5,2-1.7,2.6c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C99.3,32.2,98.7,31.9,98.4,32.4z  M86,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0v0.1l0,0l0,0c0,0.1,0,0.2,0,0.4v-0.1 c0,0,0,0,0,0.1v4.2C89.9,31.1,88.3,33.5,86,33.5z M76.4,33.4c-0.8-0.2-2.2-1.1-2.2-5.5v-8c0-1.9,0.2-6.8-7.3-6.8 c-3.9,0-6.1,2-6.3,2.1c-0.3,0.3-0.5,0.4-0.6-0.1c-0.1-0.4-0.3-1-0.4-1.4c-0.1-0.3-0.3-0.6-1-0.5c-0.7,0.1-5.1,0.8-5.9,1 c-0.7,0.2-0.5,0.5,0,0.6c0.5,0.1,2.9,0.3,2.9,4.4s0,8.6,0,8.6c0,5-1,5.4-1.9,5.7c-1.2,0.3-0.6,0.7-0.1,0.7c0,0,8.9,0,9.1,0 c0.6,0,0.9-0.6-0.3-0.8c-1.2-0.2-2.3-0.9-2.3-4.8c0-0.4,0-4.7,0-5.5c0-2.1-0.5-8.5,5.3-8.6c4.1-0.1,4.5,3.3,4.5,5.5v8.5 c0,3.5-1,4.6-2.2,4.8c-1.1,0.2-0.9,0.7-0.3,0.7c0.2,0,9.3,0,9.3,0C77.2,34.2,77.7,33.7,76.4,33.4z M52.1,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9c0,0.5,0,0.8,0,1.1 c0,0.2,0,0.4-0.1,0.5v0.1l0,0c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C53,32.2,52.3,31.9,52.1,32.4z  M39.6,33.5c-2.8,0-3.5-2.3-3.5-3.5s0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0l0,0 c0,0,0,0.1,0,0.2l0,0l0,0v0.1l0,0l0,0l0,0v4.2C43.6,31.1,42,33.5,39.6,33.5z M30,24.8c-1,3.2-2.9,8.4-9.8,8.6 C13,33.5,8.7,28.6,8.5,19.5C8.2,9.8,12.4,2.4,18.9,2.2c7.3-0.1,9.9,8.6,10,9.9c0.1,1,1.4,0.9,1.4-0.1c0-0.5-0.6-9.1-0.8-10.1 c-0.2-1-1-0.6-1.2-0.2C28.2,2,28.4,1.4,28,2.3c-0.4,0.9-1.5,0.4-1.9,0.3c-1.2-0.5-3.5-1.7-7.2-1.6c-8.5,0.2-17.2,6.5-17,17.5 c0.2,10.7,8.8,16.7,16.8,16.6c7.3-0.1,11.4-4.7,12.6-10C31.7,23.8,30.4,23.5,30,24.8z"/>
	</g>
</svg>`;
var v5 = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 143 34" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="wordmark-fr-title">
	<title id="wordmark-fr-title">Symbole du Gouvernement du Canada</title>
	<g id="wmms" transform="translate(-1, -1)">
		<path class="fip_flag" d="M137.9,1.2h5.2v10.4h-5.2V1.2z M128.9,6.4l-0.3,0.1c0,0,1.8,1.5,1.8,1.6c0.1,0.1,0.2,0.1,0.1,0.4 c-0.1,0.3-0.2,0.6-0.2,0.6s1.6-0.3,1.8-0.4c0.2,0,0.3,0,0.3,0.2c0,0.2-0.1,1.9-0.1,1.9h0.5c0,0-0.1-1.8-0.1-1.9 c0-0.2,0.1-0.2,0.3-0.2c0.2,0,1.8,0.4,1.8,0.4s-0.1-0.4-0.2-0.6c-0.1-0.3,0-0.3,0.1-0.4c0.1-0.1,1.8-1.6,1.8-1.6l-0.3-0.1 c-0.2-0.1-0.1-0.2-0.1-0.3s0.3-1.1,0.3-1.1s-0.8,0.2-0.9,0.2c-0.1,0-0.2,0-0.2-0.1s-0.2-0.5-0.2-0.5s-0.9,1-1,1.1 c-0.2,0.2-0.4,0-0.3-0.2c0-0.2,0.5-2.3,0.5-2.3s-0.5,0.3-0.7,0.4s-0.3,0.1-0.3-0.1c-0.1-0.2-0.7-1.3-0.7-1.4c0,0-0.6,1.2-0.7,1.4 s-0.2,0.2-0.3,0.1c-0.2-0.1-0.7-0.4-0.7-0.4s0.5,2.1,0.5,2.3s-0.1,0.3-0.3,0.2l-1-1.1c0,0-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.2,0.1 c-0.2,0-1-0.2-1-0.2s0.3,1,0.4,1.1C129.1,6.1,129.1,6.3,128.9,6.4z M122.2,1.2h5.2v10.4h-5.2V1.2z"/>
		<path class="fip_text" d="M144.2,32.4c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6 c-6.7,0-6.8,3.3-6.8,4.1c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9 c0,0.5,0,0.8,0,1.1c0,0.2,0,0.3,0,0.5l0,0l0,0v0.1c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4 c0.1,4,4.1,5.4,6.9,5.3c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2 C145.1,32.2,144.4,31.9,144.2,32.4z M131.7,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8 c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0v0.1l0,0l0,0v0.1l0,0l0,0l0,0v4.2C135.7,31.1,134.1,33.5,131.7,33.5z M122.5,33.4 c-0.4-0.1-2.9,0.2-2.9-7.4s0-23.9,0-23.9c0-0.3,0-1.1-0.9-1.1c-0.9,0-6.9,0.3-7.3,0.4c-0.4,0-0.7,0.5,0,0.5 c0.7,0.1,3.9,0.3,3.9,5.6c0,2.6,0,5.2,0,7.1c0,0.1,0,0.2,0,0.2c0,0.2,0,0.3-0.1,0.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.2,0-0.5-0.2 c-0.5-0.4-2.8-1.8-5.7-1.8c-4.7,0-10.5,3.4-10.5,10.4c0,7.5,5.3,11.1,10.8,11.1c2.7,0,4.6-1.2,5.3-1.6c0.8-0.5,0.7-0.4,0.8,0.3 c0.1,0.5,0,1.5,1.4,1.4c1.5-0.2,5.1-0.6,5.8-0.7C123.3,33.9,123.1,33.5,122.5,33.4z M110.1,33.7c-4.4,0-6.7-5.2-6.7-10.2 c0-5.5,3.1-9.2,6.4-9c4.3,0.3,5.4,3.7,5.5,9.8c0,0.4,0,0.8,0,1.3C115.2,31.6,112.7,33.7,110.1,33.7z M98.4,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.8,2,3.8,5v0.1c0,0.1,0,0.2,0,0.2v0.3 c0,0.1,0,0.3,0,0.4c-0.1,1.5-0.5,2-1.7,2.6c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C99.3,32.2,98.7,31.9,98.4,32.4z  M86,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0v0.1l0,0l0,0c0,0.1,0,0.2,0,0.4v-0.1 c0,0,0,0,0,0.1v4.2C89.9,31.1,88.3,33.5,86,33.5z M76.4,33.4c-0.8-0.2-2.2-1.1-2.2-5.5v-8c0-1.9,0.2-6.8-7.3-6.8 c-3.9,0-6.1,2-6.3,2.1c-0.3,0.3-0.5,0.4-0.6-0.1c-0.1-0.4-0.3-1-0.4-1.4c-0.1-0.3-0.3-0.6-1-0.5c-0.7,0.1-5.1,0.8-5.9,1 c-0.7,0.2-0.5,0.5,0,0.6c0.5,0.1,2.9,0.3,2.9,4.4s0,8.6,0,8.6c0,5-1,5.4-1.9,5.7c-1.2,0.3-0.6,0.7-0.1,0.7c0,0,8.9,0,9.1,0 c0.6,0,0.9-0.6-0.3-0.8c-1.2-0.2-2.3-0.9-2.3-4.8c0-0.4,0-4.7,0-5.5c0-2.1-0.5-8.5,5.3-8.6c4.1-0.1,4.5,3.3,4.5,5.5v8.5 c0,3.5-1,4.6-2.2,4.8c-1.1,0.2-0.9,0.7-0.3,0.7c0.2,0,9.3,0,9.3,0C77.2,34.2,77.7,33.7,76.4,33.4z M52.1,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9c0,0.5,0,0.8,0,1.1 c0,0.2,0,0.4-0.1,0.5v0.1l0,0c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C53,32.2,52.3,31.9,52.1,32.4z  M39.6,33.5c-2.8,0-3.5-2.3-3.5-3.5s0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0l0,0 c0,0,0,0.1,0,0.2l0,0l0,0v0.1l0,0l0,0l0,0v4.2C43.6,31.1,42,33.5,39.6,33.5z M30,24.8c-1,3.2-2.9,8.4-9.8,8.6 C13,33.5,8.7,28.6,8.5,19.5C8.2,9.8,12.4,2.4,18.9,2.2c7.3-0.1,9.9,8.6,10,9.9c0.1,1,1.4,0.9,1.4-0.1c0-0.5-0.6-9.1-0.8-10.1 c-0.2-1-1-0.6-1.2-0.2C28.2,2,28.4,1.4,28,2.3c-0.4,0.9-1.5,0.4-1.9,0.3c-1.2-0.5-3.5-1.7-7.2-1.6c-8.5,0.2-17.2,6.5-17,17.5 c0.2,10.7,8.8,16.7,16.8,16.6c7.3-0.1,11.4-4.7,12.6-10C31.7,23.8,30.4,23.5,30,24.8z"/>
	</g>
</svg>`;
var M4 = "@layer reset, default, type.signature, type.wordmark, variant.colour, variant.white, desktop, highcontrast;@layer reset{:host{display:block;width:fit-content}}@layer default{:host .gcds-signature{display:flex}:host svg{display:block;max-width:100%}:host svg .fip_flag{fill:var(--gcds-signature-color-flag)}}@layer type.signature{:host(:not([type=wordmark])) svg{height:var(--gcds-signature-signature-height)}}@layer type.wordmark{:host([type=wordmark]) svg{height:var(--gcds-signature-wordmark-height);width:auto}}@layer variant.colour{:host(:not([variant=white])) svg .fip_text{fill:var(--gcds-signature-color-text)}}@layer variant.white{:host([variant=white]) svg :is(.fip_text){fill:var(--gcds-signature-white-default)}}@layer desktop{@media screen and (width >= 64em){:host(:not([type=wordmark])) svg{height:var(--gcds-signature-signature-height-desktop)}}}@layer highcontrast{@media (forced-colors:active){:host svg .fip_text{fill:CanvasText}}}";
var o9 = Et(class c9 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.type = "signature";
    this.variant = "colour";
    this.hasLink = false;
  }
  validateType(c19) {
    if (c19 != "signature" && c19 != "wordmark") {
      this.type = "signature";
    }
  }
  validateVariant(c19) {
    if (c19 != "colour" && c19 != "white") {
      this.variant = "colour";
    }
  }
  updateLang() {
    const c19 = new MutationObserver((c20) => {
      if (c20[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    c19.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
  }
  get selectSVG() {
    switch (this.type) {
      case "wordmark":
        if (this.lang == "en") {
          return V;
        } else {
          return v5;
        }
      case "signature":
      default:
        if (this.lang == "en") {
          return r9;
        } else {
          return n14;
        }
    }
  }
  render() {
    const { type: c19, hasLink: a11, lang: e16, selectSVG: h19 } = this;
    const l17 = { class: "gcds-signature" };
    const r14 = a11 ? "a" : "div";
    if (r14 === "a") {
      l17["href"] = i8[e16].link;
    }
    return ye(ge, { key: "3c6dc33d52689afe90a217cf6af7d57d5f5832ea" }, c19 === "signature" ? ye(r14, Object.assign({}, l17), ye("div", { innerHTML: h19 }), ye("gcds-sr-only", { tag: "span", lang: e16 === "en" ? "fr" : "en" }, e16 === "en" ? `/ ${i8.fr.gc}` : `/ ${i8.en.gc}`)) : ye("div", { class: "gcds-signature", innerHTML: h19 }));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { type: ["validateType"], variant: ["validateVariant"] };
  }
  static get style() {
    return M4;
  }
}, [1, "gcds-signature", { type: [1537], variant: [1537], hasLink: [1028, "has-link"], lang: [32] }, void 0, { type: ["validateType"], variant: ["validateVariant"] }]);
function Z2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const c19 = ["gcds-signature", "gcds-sr-only"];
  c19.forEach((c20) => {
    switch (c20) {
      case "gcds-signature":
        if (!customElements.get(c20)) {
          customElements.define(c20, o9);
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(c20)) {
          o5();
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/gcds-footer.js
var g6 = { en: { gov: { heading: "Government of Canada", menu: { contacts: { text: "All contacts", link: "https://www.canada.ca/en/contact.html" }, dept: { text: "Departments and agencies", link: "https://www.canada.ca/en/government/dept.html" }, about: { text: "About government", link: "https://www.canada.ca/en/government/system.html" } } }, themes: { heading: "Themes and topics", menu: { jobs: { text: "Jobs", link: "https://www.canada.ca/en/services/jobs.html" }, immigration: { text: "Immigration and citizenship", link: "https://www.canada.ca/en/services/immigration-citizenship.html" }, travel: { text: "Travel and tourism", link: "https://travel.gc.ca/" }, business: { text: "Business", link: "https://www.canada.ca/en/services/business.html" }, benefits: { text: "Benefits", link: "https://www.canada.ca/en/services/benefits.html" }, health: { text: "Health", link: "https://www.canada.ca/en/services/health.html" }, taxes: { text: "Taxes", link: "https://www.canada.ca/en/services/taxes.html" }, enviro: { text: "Environment and natural resources", link: "https://www.canada.ca/en/services/environment.html" }, defence: { text: "National security and defence", link: "https://www.canada.ca/en/services/defence.html" }, culture: { text: "Culture, history and sport", link: "https://www.canada.ca/en/services/culture.html" }, policing: { text: "Policing, justice and emergencies", link: "https://www.canada.ca/en/services/policing.html" }, transport: { text: "Transport and infrastructure", link: "https://www.canada.ca/en/services/transport.html" }, world: { text: "Canada and the world", link: "https://international.gc.ca/world-monde/index.aspx?lang=eng" }, finance: { text: "Money and finances", link: "https://www.canada.ca/en/services/finance.html" }, science: { text: "Science and innovation", link: "https://www.canada.ca/en/services/science.html" }, indigenous: { text: "Indigenous Peoples", link: "https://www.canada.ca/en/services/indigenous-peoples.html" }, veterans: { text: "Veterans and military", link: "https://www.canada.ca/en/services/veterans.html" }, youth: { text: "Youth", link: "https://www.canada.ca/en/services/youth.html" }, life: { text: "Manage life events", link: "https://www.canada.ca/en/services/life-events.html" } } }, site: { heading: "Government of Canada Corporate", menu: { social: { text: "Social media", link: "https://www.canada.ca/en/social.html" }, mobile: { text: "Mobile applications", link: "https://www.canada.ca/en/mobile.html" }, about: { text: "About Canada.ca", link: "https://www.canada.ca/en/government/about.html" }, terms: { text: "Terms and conditions", link: "https://www.canada.ca/en/transparency/terms.html" }, privacy: { text: "Privacy", link: "https://www.canada.ca/en/transparency/privacy.html" } } }, about: "About this site", topofpage: "Top of page" }, fr: { gov: { heading: "Gouvernement du Canada", menu: { contacts: { text: "Toutes les coordonnées", link: "https://www.canada.ca/fr/contact.html" }, dept: { text: "Ministères et organismes", link: "https://www.canada.ca/fr/gouvernement/min.html" }, about: { text: "À propos du gouvernement", link: "https://www.canada.ca/fr/gouvernement/systeme.html" } } }, themes: { heading: "Thèmes et sujets", menu: { jobs: { text: "Emplois", link: "https://www.canada.ca/fr/services/emplois.html" }, immigration: { text: "Immigration et citoyenneté", link: "https://www.canada.ca/fr/services/immigration-citoyennete.html" }, travel: { text: "Voyage et tourisme", link: "https://voyage.gc.ca/" }, business: { text: "Entreprises", link: "https://www.canada.ca/fr/services/entreprises.html" }, benefits: { text: "Prestations", link: "https://www.canada.ca/fr/services/prestations.html" }, health: { text: "Santé", link: "https://www.canada.ca/fr/services/sante.html" }, taxes: { text: "Impôts", link: "https://www.canada.ca/fr/services/impots.html" }, enviro: { text: "Environnement et ressources naturelles", link: "https://www.canada.ca/fr/services/environnement.html" }, defence: { text: "Sécurité nationale et défense", link: "https://www.canada.ca/fr/services/defense.html" }, culture: { text: "Culture, histoire et sport", link: "https://www.canada.ca/fr/services/culture.html" }, policing: { text: "Services de police, justice et urgences", link: "https://www.canada.ca/fr/services/police.html" }, transport: { text: "Transport et infrastructure", link: "https://www.canada.ca/fr/services/transport.html" }, world: { text: " Le Canada et le monde", link: "https://www.international.gc.ca/world-monde/index.aspx?lang=fra" }, finance: { text: "Argent et finances", link: "https://www.canada.ca/fr/services/finance.html" }, science: { text: "Science et innovation", link: "https://www.canada.ca/fr/services/science.html" }, indigenous: { text: "Autochtones", link: "https://www.canada.ca/fr/services/autochtones.html" }, veterans: { text: "Vétérans et militaires", link: "https://www.canada.ca/fr/services/veterans.html" }, youth: { text: "Jeunesse", link: "https://www.canada.ca/fr/services/jeunesse.html" }, life: { text: "Gérer les événements de la vie", link: "https://www.canada.ca/fr/services/evenements-vie.html" } } }, site: { heading: "Organisation du gouvernement du Canada", menu: { social: { text: "Médias sociaux", link: "https://www.canada.ca/fr/sociaux.html" }, mobile: { text: "Applications mobiles", link: "https://www.canada.ca/fr/mobile.html" }, about: { text: "À propos de Canada.ca", link: "https://www.canada.ca/fr/gouvernement/a-propos.html" }, terms: { text: "Avis", link: "https://www.canada.ca/fr/transparence/avis.html" }, privacy: { text: "Confidentialité", link: "https://www.canada.ca/fr/transparence/confidentialite.html" } } }, about: "À propos de ce site", topofpage: "Haut de la page" } };
var h11 = '@layer reset, default, contextual, main, sub, compact, medium, wide;@layer reset{:host{display:block}:host ul{list-style-type:none;margin:0;padding:0}:host slot{display:initial}:host gcds-link::part(link):not(:hover){text-decoration:none}:host .gcds-footer__sub ul li{display:block}}@layer default{:host{font:var(--gcds-footer-font)}:host .gcds-footer__contextual,:host .gcds-footer__main,:host .gcds-footer__sub{padding:var(--gcds-footer-band-padding-desktop)}:host .gcds-footer__header,:host .sub__header,:host .themenav__header{clip:rect(1px,1px,1px,1px);height:1px;margin:0;overflow:hidden;position:absolute;width:1px}:host [class$=__container]{justify-content:space-between;margin:var(--gcds-footer-container-margin);max-width:var(--gcds-footer-container-width);width:90%}:host nav{position:relative}:host [class$=__list]{display:grid;grid-template-columns:1fr;list-style:none;padding:var(--gcds-footer-list-padding);grid-gap:var(--gcds-footer-grid-gap)}:host [class$=__list] li gcds-link::part(link){color:var(--gcds-footer-main-text)}:host h3{font:var(--gcds-footer-font-heading);margin:var(--gcds-footer-heading-margin)}:host gcds-link::part(link){font:var(--gcds-footer-font)}}@layer contextual{:host .gcds-footer__contextual{background-color:var(--gcds-footer-contextual-background);color:var(--gcds-footer-contextual-text);container:component contextual/inline-size;margin-block-end:-1px}}@layer main{:host .gcds-footer__main{background-color:var(--gcds-footer-main-background);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmgAAAC9CAMAAAAwXXHOAAAAe1BMVEUAAAAYJjgbKDogIDkcOTkgMDgoKEMdJzgdKDcAAAAgKTkfLj4gKDgfKjgeJjgeKjgcKDgfJzhAQEAfKzceKDgdKDcdKjcAVVUhN0MeKDceKzcAAFUdKjgcKzkeLTwaMzMdKjcfKTYZJjIcKzkaKDgcKDgYKjgbKTgYKDjo9/gwAAAAKXRSTlMASTkoCSATe/8BUCHNSWXct1sEU+D9nQMXeIoD8zYiCsN1PST/bZK221OBjhQAAA8qSURBVHgB7NVVAUNRDAWwPr5jZp5/jwMR/Us0HAgAAAAAAAAAAAAAAAAAAAAgS1U3TRt/XdNHEqiGUurReBIxLUOQSNBm88VytRa0ZIK22Zbd/iBo2Vzn8XS+hKCRqDpdr7e4PyKe11ckger9Zdc+bGULYSAMj2uZMab/Bl/mJoWXLiuvNV8HiH/PYgSGMIdmFvhjZg7NHJoZEcRtZmQEbjOj5NDMoZlDM3No1kxIidvMUlowuy2lgtltS9qE2WUlTwN2H7fGTQMkrBtqYGhBWDMhjRs7KcKaSWnc2BkOrZ8lSRujpALWMjQOW1PCmil9F8PWtNCQbzekHLamgvUSmhda9DsLWOqHmramgHUMbU+bbxLWypLGjZ3V7wraSj/FsPmm0JCHTimHzTc7YI2E5oWWjRfk0Na00AKNWOqXcmgX2ZLuj50OzUoHh/14Em1Y5NaRgSGq26HTUm/UrBubTZhDe8CiAheZQ1uPuBk0hxaPGKPNobHZciz4PjSmv2gXWOmDTQ8DduMa4KOYFFqiBQsdVXvQ3lTPZwJ+xL1IxJzbdO53w42RPUJbQACsKXsTzU6cDm3pbEec/dl4fvn+xGmMZIPQCj9D45TQlo6EgVnKDjuyfjQ/KLTSsWAAI7PLXyeCI/46480scE6cRAs+o+ln7lwDQstz1nwzDSR6cGh7EYilIV+01KtoFJpDk3bVloZ80ZZeJcBEEw7teP7QikDp1QJi+bl+Ep/NoXHrVQFZvt8Ih/a5vrJ3J8iJK0EQQCvPkplVdf8T/rBFB61vYYStMWCTMYA2b82j1Qti2A5rSuMFLcKMOwZVvQGtKhnPGmpAG0HkayIK94Vm5AY0w4xnDVSRmpNRr4moRNw3/m2nTqtZmlPsF7QXtKNjbcWvXide0A5NvqBthDIfAFq5ytnv988OrbSV+vPQKh4AGoLjH+u5obG1lWbcP68ajXFOqn9dE+31/kf/ROvhBe3VSKsXtB9oor0aaUjJeEE7LmhtpxF/ON5TqTv8gnZ7hdZlzcn4u2G9oP2TPmdXGkEtsV1/u9+JXZ/mWd0vaHuTGn8Ps7WEoy38Z2MT16u0Ur2g3dbpBJylke7uPz2+wUKA14bS2Gq+oO0MtJ0/DQ1CICj5WtE5vpoXtHb/dWi5QCMyLoeWlIwb8oJWTI048o9DY5FEIGB+7kwy/ym0mtK/ABrCtE7mgv23oUEIMBCQr54K/Hqb0A3QGAyfCy7/MDRGpDygZQTvCq0M1/vdnaBhvfJtaDGgYSz+VWhkyeEIBGHyvtAQEXBEsO4DzeuVY6CNRfxlaJKIBVqAKdwVGge0uBO05LzygnZYqKJjQAsLsRVCOro3AD4gtMJ5mfUNsBehOf5koIwFmhnmJWjQiOOo2I8Hje0YCTe/DvYitPqr0IpFNqIcKf1xaFDOvxIOaAnkq0abBRmdURfLAVLa6d8OzXOFk/KrjfYPhq8a/Rk0RAR/O7RUcyyzlS9ox0Jrd7sq+97QAMAJAPeBVhMESv2CdiC0ZmZUhSvqX0LjuF/CLnyA5rekfaeZAc6vNEjNx4BGgPF0sWOEASnDiHIgwxL+GTSP+yUp1aVTJxZoxTu0WHP+jXBEZ+AAaBLj6QLEEhphyZGMdLACljfn1iFVZta3oPEtu6ClluAODYmah8L8GNAs5RPXaBTYSkZFlCOKkSpCvNDrtOsb0Fpvae6AVlriO0BLTtBya84udgRHQmNLxXi2ZK4Ko4K5QLNHk3z71ImI/DY07YDGPvqKIe+/Sgdz8xUbFnFcG42xI6xeGhLxXGHVqjAc9glajuuh7gvtH1xtm/t7nZwaRrVFsWIz4M3QiJuGOhlPFai5LoxEvN/YDO+p0bhoI/GFSx25vJBRUuEKtGZ8P+Q7NB8AjWGpHdysNG+GBt801Il4qiw9y3PrgWySCZICKUn5CbQ0gx0Rkb2cWjjcxhL6tM7zIyLQo7jYCL6v1SVoR5YtHChGHQDNWZIqt4AUbm6juX4ztJSWko+l0LIqz3fVkvoTaNKAVpISgI33JN5CuPiezOWxEJERqSUZkIPaBc3x/djVatfuNtrlcTRfbjuyfTO0auzDv8RPd1V6BevcrbLfln2qypFS7YHm1s50MokeazxD6/bn0PK4WbY6YHjDl9uOVt06qc7eY4edlqRMM54oXJ7rikCDzYjigLbwIwufQatgB7P19VTmkPQ5tIrvp3Z/ugprOo4tqbgJrRng5VnSwUsgUHpPvmUNzbv+PmRw+TriCWfRmyyHvehaoC3mkOHiJ9Aa7Codk21oR/YGsH+sBJokbI30pE5BJDcnr0a84wLi2qMfVcSpyZHJZ/wM3yKLEfYZ2gKPkb4IbeRnoMk2D/qDi/ug5apOiiksnWK2Pw71fnYBcb1FkjDblHe/TipsxBNCay+eEmdoyIhwBhv3hzaCoz5L1vtq+5oLynFJjz8Ua/MytI3OgPe1DWZoT/kGtAo2Y7kb0FjvdwwXfwZafXz3Rh4KzRpR3QStPpxv2RegjV3YD21Ibvx6aFhwOeMMLZLLJpZ/CFqeUroUHPURn43boXnjzLmk/OEE50+hcQVtsM1fD62rGRGJGZodSyWHRkzJ46Ft5Xhobp2T+9tom52B1Bx/8MxPoeWAtjqi+cuhjZIqztCQY9o9ay62flZoqSnNPdD8BWi+XqO5sYKWV/88cgWNzwUNGilOb+UoTxMpaIPKGGHpSaGxt2wcX6NRb8m9n4+GStZ2NevyWMx2eK6S8zmheSF1AjbA1fu9iu7yVAsOaOXM0V7PsdynhXTXer9G1JnLv/pBaNYqxX3Q3N09+uZ7oGHUmPvG0WY97VVSg1OWHP20n+jtdYU2iqtrnn7D22qNP5k9QcsAhlaM5Qpw6TDUej9XzwsjOCZi0EvRWWN1PC5uM13O+jo0AhG1H+0MDXMt4vRWZ0Bd57QkMLu6q97u+lNo0TtGfEoyW3Pq2Wq0ZLVXb+PrHA651NoMdGFZ0QwN9kmHPJbrtGBUrfdvVABYlNcYY1mqgtTyWEt5EhGIwJehoVS31WhTrxMzp1ZXdXW3Pg0itSMgydbllAe0D2k+WY3GcMdiiOOSpIhJHoSIHKfXGdrN2YZ2+lYZUWN1PC7Q/C1orJJMUqs49kCDSzdnQDsgnbwATc8HLTNIogTAdqr9FljJt8gRHLPCzwctv9TcS30nRumTJOq20cXe2sHngobwtTNBV5VGjoCWPiUljT5BZfZYPf/QApyAAR8KrXk0tP0pBkvfzvNBU6XtUgIArSLeYtl2tmoN8bmGN3gBWtwPmiPC+ka6+qmgYfmrfRquFdafokNhtN2I1BTDQOlH0tXVN0IDpmXdAVqxr1RF0MWYLTWtOY1pPQP9dNBwGVpjQIvwsXhqvCyvJgNRRdB7odFlg2P5SGiVWVlVWedfvqpWt7dk9Mbez6E1OXaXlAHNqeDsOOoZT50DGtfQYgx7XIZWrrHY6ezTQvWy0/OG+ZAgu4KLdBCWigBLTYA5VsdHWFfc0BkYw3Ek0tIx0Exa8scZejPI6ZaSTqOrydUeXoEWu6FpBzQ8HrS8Bg2XqvriAKj2fN2cW0pGcN7QY0F9GhbGVOy5PL01X/af16DBhZjDjUbZMdAi1tDyvGOEY/uAFqv8KLTsR4NGtBwR7P4/tMrlqOIlaOftOb6jV9eqcWzI88IZGr8HjU6J6w2gtSfNGCHSV6FVVUk9ZexYZ1TmvbHrMrQVpXRJ5dScct4Cza0HnIJaoKljA9rAw3ECAQ6DNmagAEsFAKUGgByry49kFkmvoY2qC4kATSCQ2h/O3wY/2uvcbopUWntT1VegSfEwQc8TtD5DqwGtlsPW/6cM90DLz6GNfGt4g1qSJ7BZX/lWbkkwgjSJa52BVme936RyjW2n28hYHijKdRXakeNozAeC5p6bVyz5/1clun2SlhHuAe37NZoyO6uzDoFmWrcn17PjRUqS19DM1hKAHj0nywEta2pGje0aWfaryK5lf34JWldfh0YsRW1yHk94OGfKpbybA9pYOk+3N5ai91sOqNEYDjqgkXOvEzBLSp78NNBmJlMSGOdY30luVouFNbSoM3FIDAjB99uypgq6GRaDGsGynBGZERY9gyFWv3yyB+qmNdK0KnLynqwBeRpHQypP7VVj6ZO47wmNxLSSvWoWW8qPl7+WihHBvjBrUnbeCs1LG80Ra2g5/c/GOdWdFVEIYzl4ftXWhp6sL0KrU4HcBo1SZakjLHwCbbMLO4LI5aFWfcsMqsf7wmscOJ6yAS2yJJDQW8oEy6U7QqNV2JqX8ekE4o8X9KeEsxJrM9+Axv9/g7wGTUozgsSWMyGsnSkjIgitU7wIjVvQ3nIztMK8jZHjIcPb0HL113VwQMvWhcR9gpREbjR1x1Pqc42GiJUOS833e9tuzfnJGm1Qy9R2TGp3ENxwSeKWU+eoYSwE9kLTRWiTm+Jn0LQUMEsPBW38QpUkQdRoBEg9RnUcLOP0LC8Z9Rwk5Tu0ZeuqF7Yk8ZaUjLfUacHnDedD1EACxg3QDOvgmOnSxyQHNJ0PSNuSnUpb6dSyNvbWqmeZ9qlpUTWOmtPchLZx3DVoejRoWjLXzfW+XEMSAlKaE7ScoBVT6mF2eiUflK6q6vGgestpe1f1MW8E25cB7YeyDW1kExoHND8uNGjEYalBBi3J5ocxJsmrrkOTqM1e54PEAX07noc3Nh2XS4cFN0IbIeF6NGj+2C0zF0j8WGr48KldpTnfhVakpSRTByeD+nZyo42mJtQMH+d5xK7boY08ADQmyLkrsD1NzPpkXPRwaOsuXEAHx5n/ClpANQoSpI4OXNeg8RGhwWPYiUB//taLi9BqQOsngXZI0t6G1oTukanqfzho41ezndrOdWgsJf8eNKm8eep8qsQPhLFtaO/oJhkRXCrFdETwAjTAvwza/k7sCxozsaeAMlIX0mmjRs8rgjo0/x6aXol/HLoOuYLiHAd9NDRSAuH/2rtXI4tiIAaidizSfPKPcGvBpQ9ZrA+ZBLqGykg5YeXXpsdv7a4Rlv9nSSC0K527jgKhadw1TgCh6buSY0BodWtuSe0cENr9xlvbOSA0+V/XHceA0DROA6HptNNAaJoqh4HQ1E4CoamqZ9c5IDTVrMNAaBrHgdDuOg+E1s4DoWmcBkJTrdNAaGrngdDaT4DQ9jc/AULzM8Af2qL98u71t1EAAAAASUVORK5CYII=);background-position:100% 100%;background-repeat:no-repeat;color:var(--gcds-footer-main-text);container:component main/inline-size}:host .gcds-footer__main nav:first-of-type:after{border-block-end:var(--gcds-footer-main-nav-first-after-border-width) solid var(--gcds-footer-main-nav-first-after-border-color);content:"";display:block;margin:var(--gcds-footer-grid-gap) 0;width:var(--gcds-footer-main-nav-first-after-width)}:host .gcds-footer__main nav.main__themenav .themenav__list{display:grid;grid-auto-flow:column;grid-template-rows:repeat(19,1fr)}}@layer sub{:host .gcds-footer__sub{background-color:var(--gcds-footer-sub-background);container:component sub/inline-size}:host .gcds-footer__sub .sub__container{display:grid;grid-gap:var(--gcds-footer-grid-gap);grid-template-areas:"list wordmark";grid-template-columns:3fr 1fr}:host .gcds-footer__sub .sub__container nav{align-items:center;display:flex;grid-area:list}:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:flex;grid-area:wordmark}:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{align-self:end;margin:var(--gcds-footer-sub-signature-margin);max-height:var(--gcds-footer-sub-signature-max-height);min-width:var(--gcds-footer-sub-signature-min-width);width:var(--gcds-footer-sub-signature-width)}}@layer compact{@media only screen and (width < 48em){:host .gcds-footer__contextual,:host .gcds-footer__main,:host .gcds-footer__sub{padding:var(--gcds-footer-band-padding-mobile)}}@container sub (width <= 30em){:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{max-height:var(--gcds-footer-sub-signature-sm-max-height);width:var(--gcds-footer-sub-signature-sm-width)}}}@layer medium{@container contextual (width >= 45em){:host .gcds-footer__contextual [class$=__list]{grid-template-columns:1fr 1fr}}@container main (width >= 45em){:host .gcds-footer__main [class$=__list]{grid-template-columns:1fr 1fr}:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(10,1fr)}}@container sub (width < 60.2em){:host .gcds-footer__sub .sub__container{display:block}:host .gcds-footer__sub .sub__container ul li{margin:0 0 var(--gcds-footer-grid-gap)}}}@layer wide{@container contextual (width >= 60.2em){:host .gcds-footer__contextual [class$=__list]{grid-template-columns:1fr 1fr 1fr}}@container main (width >= 60.2em){:host .gcds-footer__main [class$=__list]{grid-template-columns:1fr 1fr 1fr}:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(7,1fr)}}@container sub (width >= 60.2em){:host .gcds-footer__sub .sub__container ul li{display:inline-block;margin-block-end:0}:host .gcds-footer__sub .sub__container ul li:first-of-type:before{content:"";margin:0}:host .gcds-footer__sub .sub__container ul li:before{content:"\\2022";display:inline;margin:var(--gcds-footer-sub-listitem-before-margin)}:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:inline-block}}}';
var m7 = Et(class t17 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsClick = Ue(this, "gcdsClick");
    this.display = "compact";
  }
  contextualLinksChanged(t26) {
    if (typeof t26 == "string") {
      this.contextualLinksObject = JSON.parse(t26);
    } else if (typeof t26 == "object") {
      this.contextualLinksObject = t26;
    }
  }
  subLinksChanged(t26) {
    if (typeof t26 == "string") {
      this.subLinksObject = JSON.parse(t26);
    } else if (typeof t26 == "object") {
      this.subLinksObject = t26;
    }
  }
  updateLang() {
    const t26 = new MutationObserver((t27) => {
      if (t27[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    t26.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    if (this.contextualLinks && typeof this.contextualLinks == "string") {
      this.contextualLinksObject = JSON.parse(this.contextualLinks);
    } else if (this.contextualLinks && typeof this.contextualLinks == "object") {
      this.contextualLinksObject = this.contextualLinks;
    }
    if (this.subLinks && typeof this.subLinks == "string") {
      this.subLinksObject = JSON.parse(this.subLinks);
    } else if (this.subLinks && typeof this.subLinks == "object") {
      this.subLinksObject = this.subLinks;
    }
  }
  get renderSignature() {
    if (this.el.querySelector('[slot="signature"]')) {
      return ye("slot", { name: "wordmark" });
    } else {
      return ye("div", { class: "sub__wordmark" }, ye("gcds-signature", { type: "wordmark", lang: this.lang }));
    }
  }
  render() {
    const { lang: t26, display: e16, contextualHeading: a11, contextualLinksObject: i12, subLinks: o12, subLinksObject: r14, renderSignature: c19 } = this;
    const l17 = g6[t26].gov.menu;
    const d17 = g6[t26].themes.menu;
    const h19 = g6[t26].site.menu;
    let m10 = 0;
    let u16 = 0;
    return ye(ge, { key: "7e858fa9f2bfaa8f683fe26375b091761fff459a", role: "contentinfo", "aria-label": "Footer" }, ye("gcds-sr-only", { key: "7496ed74840b2b387980e59ddd89c3549db525a7", tag: "h2" }, g6[t26].about), i12 && a11 && ye("div", { key: "fc3e8e4cd20c619b14ac3131a101b57be2a2591b", class: "gcds-footer__contextual" }, ye("div", { key: "b198915a312df2c4c0b5a9c94792bf3d609f9325", class: "contextual__container" }, ye("nav", { key: "647836ad40250308d7e57e49e437aea02e40f772", "aria-labelledby": "contextual__heading" }, ye("h3", { key: "776b38488c416f4d13a2ed0397694be2436e7e2a", id: "contextual__heading", class: "contextual__heading" }, a11), ye("ul", { key: "e766519d02dc672fc0127e0d25871948d2b1a2a3", class: "contextual__list" }, Object.keys(i12).map((t27) => {
      if (m10 < 3) {
        m10++;
        return ye("li", null, ye("gcds-link", { size: "small", href: i12[t27] }, t27));
      }
    }))))), e16 === "full" ? ye("div", { class: "gcds-footer__main" }, ye("div", { class: "main__container" }, ye("nav", { class: "main__govnav", "aria-labelledby": "govnav__heading" }, ye("h3", { id: "govnav__heading" }, g6[t26].gov.heading), ye("ul", { class: "govnav__list" }, Object.keys(l17).map((t27) => ye("li", null, ye("gcds-link", { size: "small", href: l17[t27].link }, l17[t27].text))))), ye("nav", { class: "main__themenav", "aria-labelledby": "themenav__heading" }, ye("gcds-sr-only", { tag: "h4", id: "themenav__heading" }, g6[t26].themes.heading), ye("ul", { class: "themenav__list" }, Object.keys(d17).map((t27) => ye("li", null, ye("gcds-link", { size: "small", href: d17[t27].link }, d17[t27].text))))))) : null, ye("div", { key: "f374a7be6e1e64ae23bd409ed9b1da0351f1f479", class: "gcds-footer__sub" }, ye("div", { key: "1f38f3666e22111dbeb70b210e8931173fd7b7cc", class: "sub__container" }, ye("nav", { key: "8d25d9b17f46f90d7f6278007bd53a6237fa7e6e", "aria-labelledby": "sub__heading" }, ye("gcds-sr-only", { key: "05afc9849b76b122ddbc8e554b9d8005aca73b0e", tag: "h3", id: "sub__heading" }, g6[t26].site.heading), ye("ul", { key: "72aa0a35a40880e1916a45d0abc848ab3b3c2c6a" }, o12 ? Object.keys(r14).map((t27) => {
      if (u16 < 5) {
        u16++;
        return ye("li", null, ye("gcds-link", { size: "small", href: r14[t27] }, t27));
      }
    }) : Object.keys(h19).map((t27) => ye("li", null, ye("gcds-link", { size: "small", href: h19[t27].link }, h19[t27].text))))), c19)));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { contextualLinks: ["contextualLinksChanged"], subLinks: ["subLinksChanged"] };
  }
  static get style() {
    return h11;
  }
}, [1, "gcds-footer", { display: [1537], contextualHeading: [1, "contextual-heading"], contextualLinks: [1025, "contextual-links"], subLinks: [1025, "sub-links"], lang: [32] }, void 0, { contextualLinks: ["contextualLinksChanged"], subLinks: ["subLinksChanged"] }]);
function u9() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-footer", "gcds-icon", "gcds-link", "gcds-signature", "gcds-sr-only"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-footer":
        if (!customElements.get(t27)) {
          customElements.define(t27, m7);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(t27)) {
          t4();
        }
        break;
      case "gcds-link":
        if (!customElements.get(t27)) {
          k2();
        }
        break;
      case "gcds-signature":
        if (!customElements.get(t27)) {
          Z2();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(t27)) {
          o5();
        }
        break;
    }
  });
}
var p7 = u9;

// node_modules/@gcds-core/components/dist/components/gcds-grid.js
var i9 = { en: { gapDesktopError: "gcds-grid: Invalid spacing value for gap-desktop.", gapTabletError: "gcds-grid: Invalid spacing value for gap-tablet." }, fr: { gapDesktopError: "gcds-grid: Valeur d'espacement invalide pour gap-desktop.", gapTabletError: "gcds-grid: Valeur d'espacement invalide pour gap-tablet." } };
var c10 = "@layer reset, default, display, align, justify, place, equalHeight, tablet, desktop;@layer reset{:host{display:block}:host .gcds-grid{box-sizing:border-box;margin:0;padding:0}}@layer default{:host .gcds-grid{gap:var(--gcds-grid-gap);grid-template-columns:var(--gcds-grid-columns,1fr)}}@layer display{:host .gcds-grid.display-grid-with-cols{display:grid;grid-template-columns:1fr}:host .gcds-grid.display-grid{display:grid}:host .gcds-grid.display-inline-grid{display:inline-grid}}@layer align{:host .gcds-grid.align-content-center{align-content:center}:host .gcds-grid.align-content-end{align-content:end}:host .gcds-grid.align-content-space-around{align-content:space-around}:host .gcds-grid.align-content-space-between{align-content:space-between}:host .gcds-grid.align-content-space-evenly{align-content:space-evenly}:host .gcds-grid.align-content-start{align-content:start}:host .gcds-grid.align-content-stretch{align-content:stretch}:host .gcds-grid.align-items-baseline{align-items:baseline}:host .gcds-grid.align-items-center{align-items:center}:host .gcds-grid.align-items-end{align-items:end}:host .gcds-grid.align-items-start{align-items:start}:host .gcds-grid.align-items-stretch{align-items:stretch}}@layer justify{:host .gcds-grid.justify-content-center{justify-content:center}:host .gcds-grid.justify-content-end{justify-content:end}:host .gcds-grid.justify-content-space-around{justify-content:space-around}:host .gcds-grid.justify-content-space-between{justify-content:space-between}:host .gcds-grid.justify-content-space-evenly{justify-content:space-evenly}:host .gcds-grid.justify-content-start{justify-content:start}:host .gcds-grid.justify-content-stretch{justify-content:stretch}:host .gcds-grid.justify-items-center{justify-items:center}:host .gcds-grid.justify-items-end{justify-items:end}:host .gcds-grid.justify-items-start{justify-items:start}:host .gcds-grid.justify-items-stretch{justify-items:stretch}}@layer place{:host .gcds-grid.place-content-center{place-content:center}:host .gcds-grid.place-content-end{place-content:end}:host .gcds-grid.place-content-space-around{place-content:space-around}:host .gcds-grid.place-content-space-between{place-content:space-between}:host .gcds-grid.place-content-space-evenly{place-content:space-evenly}:host .gcds-grid.place-content-start{place-content:start}:host .gcds-grid.place-content-stretch{place-content:stretch}:host .gcds-grid.place-items-center{place-items:center}:host .gcds-grid.place-items-end{place-items:end}:host .gcds-grid.place-items-start{place-items:start}:host .gcds-grid.place-items-stretch{place-items:stretch}}@layer equalHeight{:host .gcds-grid.equal-row-height{align-items:stretch;grid-auto-rows:1fr}}@layer tablet{@media screen and (width >= 48em){:host .gcds-grid{gap:var(--gcds-grid-gap-tablet,var(--gcds-grid-gap));grid-template-columns:var(\n        --gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr)\n      )}:host .gcds-grid.display-grid-with-cols{grid-template-columns:repeat(var(--gcds-grid-columns-default-tablet),minmax(0,1fr))}}}@layer desktop{@media screen and (width >= 64em){:host .gcds-grid{gap:var(--gcds-grid-gap-desktop,var(--gcds-grid-gap-tablet,var(--gcds-grid-gap)));grid-template-columns:var(\n        --gcds-grid-columns-desktop,var(--gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr))\n      )}:host .gcds-grid.display-grid-with-cols{grid-template-columns:repeat(var(--gcds-grid-columns-default-desktop),minmax(0,1fr))}}}";
var d11 = ["150", "175", "200", "225", "250", "300", "350", "400", "450", "500", "550", "600", "650", "700", "750", "800"];
var g7 = Et(class t18 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.display = "grid";
    this.equalRowHeight = false;
    this.gap = "300";
    this.tag = "div";
  }
  validateGap(t26) {
    const e16 = d11;
    if (!e16.includes(t26)) {
      this.gap = "300";
    }
  }
  validateGapTablet(t26) {
    const e16 = d11;
    if (t26 != void 0 && !e16.includes(t26)) {
      this.gapTablet = void 0;
      console.error(`${i9["en"].gapTabletError} | ${i9["fr"].gapTabletError}`);
    }
  }
  validateGapDesktop(t26) {
    const e16 = d11;
    if (t26 != void 0 && !e16.includes(t26)) {
      this.gapDesktop = void 0;
      console.error(`${i9["en"].gapDesktopError} | ${i9["fr"].gapDesktopError}`);
    }
  }
  validateTag(t26) {
    const e16 = ["article", "aside", "div", "dl", "main", "nav", "ol", "section", "ul"];
    if (!e16.includes(t26)) {
      this.tag = "div";
    }
  }
  componentWillLoad() {
    this.validateTag(this.tag);
    this.validateGap(this.gap);
    this.validateGapTablet(this.gapTablet);
    this.validateGapDesktop(this.gapDesktop);
  }
  render() {
    const { alignment: t26, alignContent: e16, alignItems: a11, columns: i12, columnsDesktop: c19, columnsTablet: d17, container: g13, display: l17, equalRowHeight: o12, gap: r14, gapTablet: p16, gapDesktop: u16, justifyContent: m10, justifyItems: h19, placeContent: f12, placeItems: y5, tag: v7 } = this;
    const b10 = v7;
    const j7 = `
      gcds-grid
      ${e16 ? `align-content-${e16}` : ""}
      ${a11 ? `align-items-${a11}` : ""}
      ${(i12 || d17 || c19) === void 0 ? `display-grid-with-cols` : `display-${l17}`}
      ${o12 ? "equal-row-height" : ""}
      ${m10 ? `justify-content-${m10}` : ""}
      ${h19 ? `justify-items-${h19}` : ""}
      ${f12 ? `place-content-${f12}` : ""}
      ${y5 ? `place-items-${y5}` : ""}
    `;
    function k6() {
      const t27 = {};
      const e17 = (e18, s13, n16 = "") => {
        const a12 = `var(--gcds-grid-gap-${e18})`;
        const i13 = s13 === "gap" ? a12 : e18;
        if (e18) {
          t27[`--gcds-grid-${s13}${n16}`] = i13;
        }
      };
      e17(i12, "columns");
      e17(d17, "columns", "-tablet");
      e17(c19, "columns", "-desktop");
      e17(r14, "gap");
      e17(p16, "gap", "-tablet");
      e17(u16, "gap", "-desktop");
      return t27;
    }
    return ye(ge, null, g13 ? ye("gcds-container", { size: g13, alignment: t26 }, ye(b10, { class: j7, style: k6() }, ye("slot", null))) : ye(b10, { class: j7, style: k6() }, ye("slot", null)));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { gap: ["validateGap"], gapTablet: ["validateGapTablet"], gapDesktop: ["validateGapDesktop"], tag: ["validateTag"] };
  }
  static get style() {
    return c10;
  }
}, [1, "gcds-grid", { columns: [1], columnsTablet: [1, "columns-tablet"], columnsDesktop: [1, "columns-desktop"], container: [1], display: [1], equalRowHeight: [4, "equal-row-height"], gap: [1025], gapTablet: [1025, "gap-tablet"], gapDesktop: [1025, "gap-desktop"], tag: [1025], alignment: [1], alignContent: [1, "align-content"], justifyContent: [1, "justify-content"], placeContent: [1, "place-content"], alignItems: [1, "align-items"], justifyItems: [1, "justify-items"], placeItems: [1, "place-items"] }, void 0, { gap: ["validateGap"], gapTablet: ["validateGapTablet"], gapDesktop: ["validateGapDesktop"], tag: ["validateTag"] }]);
function l9() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-grid", "gcds-container"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-grid":
        if (!customElements.get(t27)) {
          customElements.define(t27, g7);
        }
        break;
      case "gcds-container":
        if (!customElements.get(t27)) {
          r3();
        }
        break;
    }
  });
}
var r10 = l9;

// node_modules/@gcds-core/components/dist/components/gcds-grid-col.js
var a7 = "@layer reset, default, tablet, desktop;@layer reset{:host{display:block}:host .gcds-grid-col{box-sizing:border-box;display:block;margin:0;padding:0}}@layer default{:host{grid-column:span var(--gcds-grid-columns-default-base) /span var(--gcds-grid-columns-default-base)}:host .gcds-grid-col{height:100%;width:100%}}@layer tablet{@media screen and (width >= 48em){:host{grid-column:span var(--gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet)) /span var(--gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet))}}}@layer desktop{@media screen and (width >= 64em){:host{grid-column:span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop)) /span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop))}}}";
var l10 = Et(class t19 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.tag = "div";
    this.tablet = 6;
  }
  validateTablet(t26) {
    const s13 = [1, 2, 3, 4, 5, 6];
    if (!s13.includes(t26)) {
      this.tablet = 6;
    }
  }
  validateDesktop(t26) {
    const s13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    if (this.desktop && !s13.includes(t26)) {
      this.desktop = 12;
    }
  }
  componentWillLoad() {
    this.validateTablet(this.tablet);
    this.validateDesktop(this.desktop);
  }
  render() {
    const { desktop: t26, tablet: s13, tag: a11 } = this;
    const l17 = a11;
    function o12() {
      const e16 = {};
      if (s13) {
        e16["--gcds-grid-col-tablet"] = s13;
      }
      if (t26) {
        e16["--gcds-grid-col-desktop"] = t26;
      } else if (s13) {
        e16["--gcds-grid-col-desktop"] = s13 * 2;
      }
      return e16;
    }
    return ye(ge, { style: o12() }, ye(l17, { class: "gcds-grid-col" }, ye("slot", null)));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { tablet: ["validateTablet"], desktop: ["validateDesktop"] };
  }
  static get style() {
    return a7;
  }
}, [1, "gcds-grid-col", { tag: [1], tablet: [1026], desktop: [1026] }, void 0, { tablet: ["validateTablet"], desktop: ["validateDesktop"] }]);
function o10() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-grid-col"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-grid-col":
        if (!customElements.get(t27)) {
          customElements.define(t27, l10);
        }
        break;
    }
  });
}
var c11 = o10;

// node_modules/@gcds-core/components/dist/components/p-CD3FZzRP.js
var c12 = { en: { abbreviation: "fr", heading: "Language selection", language: "Français" }, fr: { abbreviation: "en", heading: "Sélection de la langue", language: "English" } };
var r11 = "@layer reset, default, desktop, mobile;@layer reset{:host{display:block}:host .gcds-lang-toggle h2{margin:0;overflow:hidden;position:absolute;width:0}}@layer default{:host .gcds-lang-toggle gcds-link::part(link){display:inline-block;padding:var(--gcds-lang-toggle-padding)}:host .gcds-lang-toggle span{display:none}:host .gcds-lang-toggle abbr{text-decoration:none;text-transform:uppercase}}@layer desktop{@media screen and (width >= 48em){:host .gcds-lang-toggle gcds-link::part(link){font:var(--gcds-lang-toggle-font-desktop);padding-inline:0!important}:host .gcds-lang-toggle span{display:initial}:host .gcds-lang-toggle abbr{display:none}}}@layer mobile{@media screen and (width < 48em){:host .gcds-lang-toggle gcds-link::part(link){font:var(--gcds-lang-toggle-font-mobile)}}}";
var h12 = Et(class e10 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsClick = Ue(this, "gcdsClick");
  }
  updateLang() {
    const e16 = new MutationObserver((e17) => {
      if (e17[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    e16.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
  }
  render() {
    const { lang: e16, href: s13 } = this;
    return ye(ge, { key: "abb80842d149c0505fdfaeb1bea1d693f8ab7acd" }, ye("div", { key: "544f51158c13552ca6d918a976851ae114d8b15b", class: "gcds-lang-toggle" }, ye("gcds-sr-only", { key: "ad847ef3d7b32528ac5a02d86907e7646a6133b6", id: "lang-toggle__heading", tag: "h2" }, c12[e16].heading), ye("gcds-link", { key: "7ed33cd0eee4468e60294eb449627a546128f9b8", size: "regular", href: s13, lang: c12[e16].abbreviation }, ye("span", { key: "d1586f4d7c5b2b0b16f5e123e0dbc1715e9a7616" }, c12[e16].language), ye("abbr", { key: "38bfded01448eeccd475feca0275d34cbb8745b3", title: c12[e16].language }, c12[e16].abbreviation))));
  }
  get el() {
    return this;
  }
  static get style() {
    return r11;
  }
}, [1, "gcds-lang-toggle", { href: [513], lang: [32] }]);
function b5() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-lang-toggle", "gcds-icon", "gcds-link", "gcds-sr-only"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-lang-toggle":
        if (!customElements.get(e17)) {
          customElements.define(e17, h12);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(e17)) {
          t4();
        }
        break;
      case "gcds-link":
        if (!customElements.get(e17)) {
          k2();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(e17)) {
          o5();
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/gcds-header.js
var h13 = { en: { skip: "Skip to main content", skipLabel: "Skip to" }, fr: { skip: "Passer au contenu principal", skipLabel: "Passer au" } };
var m8 = '@layer reset, default, brand, menu, wide;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host{margin:var(--gcds-header-margin)!important}:host .gcds-header__container{justify-content:space-between;margin:0 auto;max-width:var(--gcds-header-container-max-width);width:90%}:host .gcds-header__skip-to-nav{margin-inline:auto;position:absolute;text-align:center;top:var(--gcds-header-skiptonav-top);width:100%}:host .gcds-header__skip-to-nav gcds-link{left:0;position:absolute;top:0;width:inherit;z-index:3}:host .gcds-header__skip-to-nav gcds-link:not(:focus){height:0;overflow:hidden;width:0;clip:rect(0,0,0,0)}}@layer brand{:host .gcds-header__brand{border-block-end:var(--gcds-header-brand-border-width) solid var(--gcds-header-brand-border-color);container:component brand/inline-size;padding:var(--gcds-header-brand-padding)}:host .gcds-header__brand .brand__container{display:grid;grid-gap:var(--gcds-header-brand-grid-gap);grid-template-areas:"signature toggle" "search search";grid-template-columns:1fr .1fr;margin:0 auto;max-width:var(--gcds-header-container-max-width);width:90%}:host .gcds-header__brand .brand__container.container--simple{grid-template-areas:"signature toggle"}:host .gcds-header__brand .brand__container :is(.brand__toggle,slot[name=toggle]){grid-area:toggle;text-align:right}:host .gcds-header__brand .brand__container :is(.brand__signature,slot[name=signature]){align-content:center;grid-area:signature}:host .gcds-header__brand .brand__container .brand__search{display:block;grid-area:search;max-width:100%}}@layer menu{:host{--gcds-nav-group-mobile-trigger-margin:var(--gcds-header-menu-top-nav-mobile-trigger-margin)}}@layer wide{@container brand (width >= 51em){:host .gcds-header__brand .brand__container{grid-template-areas:"toggle toggle" "signature search";grid-template-columns:1fr 1fr}:host .gcds-header__brand .brand__container .brand__search,:host .gcds-header__brand .brand__container slot[name=search]{margin-inline-start:auto;width:fit-content}}}';
var u10 = Et(class e11 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsClick = Ue(this, "gcdsClick");
    this.signatureHasLink = true;
  }
  updateLang() {
    const e16 = new MutationObserver((e17) => {
      if (e17[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    e16.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
  }
  get renderSkipToNav() {
    if (this.el.querySelector('[slot="skip-to-nav"]')) {
      return ye("slot", { name: "skip-to-nav" });
    } else if (this.skipToHref) {
      return ye("nav", { class: "gcds-header__skip-to-nav", "aria-label": h13[this.lang].skipLabel }, ye("gcds-link", { href: this.skipToHref }, h13[this.lang].skip));
    } else {
      return;
    }
  }
  get renderToggle() {
    if (this.el.querySelector('[slot="toggle"]')) {
      return ye("slot", { name: "toggle" });
    } else if (this.langHref) {
      return ye("section", { class: "brand__toggle" }, ye("gcds-lang-toggle", { lang: this.lang, href: this.langHref }));
    } else {
      return;
    }
  }
  get renderSignature() {
    if (this.el.querySelector('[slot="signature"]')) {
      return ye("slot", { name: "signature" });
    } else {
      return ye("div", { class: "brand__signature" }, ye("gcds-signature", { type: "signature", "has-link": this.signatureHasLink, lang: this.lang }));
    }
  }
  get renderSearch() {
    if (this.el.querySelector('[slot="search"]')) {
      return ye("div", { class: "brand__search" }, ye("slot", { name: "search" }));
    } else {
      return;
    }
  }
  get hasSearch() {
    return !!this.el.querySelector('[slot="search"]');
  }
  get hasBanner() {
    return !!this.el.querySelector('[slot="banner"]');
  }
  get hasBreadcrumb() {
    return !!this.el.querySelector('[slot="breadcrumb"]');
  }
  render() {
    const { renderSkipToNav: e16, renderToggle: a11, renderSignature: r14, renderSearch: n16, hasSearch: i12, hasBanner: d17, hasBreadcrumb: o12 } = this;
    return ye(ge, { key: "2787783d5b595f8f64b189017993dc6cf1cb6be2", role: "banner" }, e16, d17 ? ye("slot", { name: "banner" }) : null, ye("div", { key: "cad8a5a1262b661ac8575eb2c29b0e8eeeaec778", class: "gcds-header__brand" }, ye("div", { key: "adefc05190f8b6c0d2d75df7d423f230f6d8f6fa", class: `brand__container ${!i12 ? "container--simple" : ""}` }, a11, r14, n16)), ye("slot", { key: "e83e3939de4a1846196072f0e87417942dc19b42", name: "menu" }), o12 ? ye("div", { class: "gcds-header__container" }, ye("slot", { name: "breadcrumb" })) : null);
  }
  get el() {
    return this;
  }
  static get style() {
    return m8;
  }
}, [1, "gcds-header", { langHref: [513, "lang-href"], signatureHasLink: [4, "signature-has-link"], skipToHref: [1, "skip-to-href"], lang: [32] }]);
function b6() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-header", "gcds-icon", "gcds-lang-toggle", "gcds-link", "gcds-signature", "gcds-sr-only"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-header":
        if (!customElements.get(e17)) {
          customElements.define(e17, u10);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(e17)) {
          t4();
        }
        break;
      case "gcds-lang-toggle":
        if (!customElements.get(e17)) {
          b5();
        }
        break;
      case "gcds-link":
        if (!customElements.get(e17)) {
          k2();
        }
        break;
      case "gcds-signature":
        if (!customElements.get(e17)) {
          Z2();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(e17)) {
          o5();
        }
        break;
    }
  });
}
var _4 = b6;

// node_modules/@gcds-core/components/dist/components/gcds-heading.js
var c13 = d9;

// node_modules/@gcds-core/components/dist/components/gcds-hint.js
var t20 = d7;

// node_modules/@gcds-core/components/dist/components/gcds-icon.js
var p8 = t4;

// node_modules/@gcds-core/components/dist/components/gcds-input.js
var c14 = E3;

// node_modules/@gcds-core/components/dist/components/gcds-label.js
var t21 = n11;

// node_modules/@gcds-core/components/dist/components/gcds-lang-toggle.js
var p9 = b5;

// node_modules/@gcds-core/components/dist/components/gcds-link.js
var a8 = k2;

// node_modules/@gcds-core/components/dist/components/p-vQK7tx8W.js
var c15 = "@layer reset, defaults, sideNav, topNav, mobileNav, desktop, mobile, hover, focus;@layer reset{:host *{box-sizing:border-box;margin:0;padding:0}}@layer defaults{:host{align-self:flex-end;display:flex;flex-direction:column;position:relative}:host .gcds-nav-group__trigger{align-items:center;background:transparent;border:0;color:var(--gcds-nav-group-trigger-text);cursor:pointer;display:flex;font:var(--gcds-nav-group-font);padding:var(--gcds-nav-group-trigger-padding);text-align:left;width:100%}:host .gcds-nav-group__trigger[aria-expanded=false]+.gcds-nav-group__list{display:none}:host .gcds-nav-group__trigger-desc{display:none}:host ul{list-style:none}}@layer sideNav{:host .gcds-trigger--expandable{font-weight:var(--gcds-nav-group-side-nav-trigger-font-weight);margin-block-end:var(--gcds-nav-group-side-nav-trigger-margin)}:host .gcds-trigger--expandable gcds-icon{margin-inline-end:var(--gcds-nav-group-side-nav-trigger-icon-margin)}}@layer topNav{:host .gcds-trigger--dropdown{color:var(--gcds-nav-group-top-nav-trigger-text);padding:var(--gcds-nav-group-top-nav-trigger-padding);text-decoration:underline solid currentColor var(--gcds-nav-group-top-nav-trigger-decoration-thickness);text-decoration-color:transparent;text-underline-offset:var(\n      --gcds-nav-group-top-nav-trigger-underline-offset\n    );transition:all .25s ease-in-out}:host .gcds-trigger--dropdown[aria-expanded=true]{background-color:var(\n        --gcds-nav-group-top-nav-trigger-expanded-background-color\n      )}:host .gcds-trigger--dropdown gcds-icon{margin-inline-start:var(--gcds-nav-group-top-nav-trigger-icon-margin);order:2}}@layer mobileNav{:host(.gcds-mobile-nav){width:100%}:host(.gcds-mobile-nav) .gcds-trigger--expandable{border:var(--gcds-nav-group-mobile-trigger-border-width) solid;border-radius:var(--gcds-nav-group-mobile-trigger-border-radius);color:var(--gcds-nav-group-mobile-trigger-text);flex-direction:row-reverse;justify-content:center;margin-block-start:var(--gcds-nav-group-mobile-trigger-margin);text-align:center}:host(.gcds-mobile-nav) .gcds-trigger--expandable gcds-icon{display:none}:host([open].gcds-mobile-nav){background-color:var(--gcds-nav-group-mobile-background);height:100vh;left:0;overflow-y:scroll;padding:var(--gcds-nav-group-mobile-padding)!important;position:fixed;top:0;width:100%;z-index:100}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-nav-group__trigger{max-width:var(--gcds-nav-group-trigger-max-width)}:host .gcds-nav--expandable{padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}:host .gcds-nav--dropdown{background-color:var(--gcds-nav-group-top-nav-dropdown-background);border-radius:var(--gcds-border-radius-md);box-shadow:var(--gcds-nav-group-top-nav-dropdown-box-shadow);left:0;margin-block-start:var(--gcds-spacing-200);padding:var(--gcds-nav-group-top-nav-dropdown-padding);position:absolute;top:100%;width:var(--gcds-nav-group-top-nav-dropdown-width);z-index:1}:host .gcds-nav--dropdown.dropdown-right{left:auto;right:0}:host(.gcds-mobile-nav)>.gcds-nav--expandable{display:block;padding:0}:host(.gcds-mobile-nav) .gcds-trigger--expandable{display:none}:host(.gcds-mobile-nav-topnav)>.gcds-nav--expandable{display:flex}}}@layer mobile{@media only screen and (width < 64em){:host(.gcds-mobile-nav)>.gcds-nav--expandable{margin:var(--gcds-nav-group-mobile-list-margin)}:host([open]:not(.gcds-mobile-nav)) .gcds-nav-group__list{padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}}@media only screen and (48em < width < 64em){:host(.gcds-mobile-nav) .gcds-trigger--expandable{align-self:flex-start;width:auto}}}@layer hover{@media (hover:hover){:host .gcds-nav-group__trigger:hover{color:var(--gcds-nav-group-trigger-hover-text)}:host .gcds-trigger--dropdown:hover{color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-thickness:var(\n          --gcds-nav-group-top-nav-trigger-hover-decoration-thickness\n        )}:host .gcds-trigger--expandable:hover{background-color:var(\n          --gcds-nav-group-side-nav-trigger-hover-background\n        )}}}@layer focus{:host .gcds-nav-group__trigger:focus{background-color:var(--gcds-nav-group-trigger-focus-background);border-color:var(--gcds-nav-group-trigger-focus-background);border-radius:var(--gcds-nav-group-trigger-focus-border-radius);box-shadow:var(--gcds-nav-group-trigger-focus-box-shadow);color:var(--gcds-nav-group-trigger-focus-text);outline:var(--gcds-nav-group-trigger-focus-outline);outline-offset:var(--gcds-nav-group-trigger-focus-outline-offset);text-decoration:none}}";
var v6 = Et(class r12 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsClick = Ue(this, "gcdsClick");
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.open = false;
  }
  async focusOutListener(r14) {
    if ((r14.target === this.el || this.el.contains(r14.target)) && !this.el.contains(r14.relatedTarget) && this.navStyle.includes("dropdown") && this.open && window.innerWidth >= 1024) {
      setTimeout(() => this.toggleNav(), 200);
    }
  }
  async focusTrigger() {
    this.triggerElement.focus();
  }
  async toggleNav() {
    this.open = !this.open;
    for (let r14 = 0; r14 < this.el.children.length; r14++) {
      if (this.el.children[r14].nodeName == "GCDS-NAV-GROUP" && this.el.children[r14].hasAttribute("open")) {
        this.el.children[r14].toggleNav();
      }
    }
    if (this.el.classList.contains("gcds-mobile-nav-topnav")) {
      const r14 = n2("gcds-top-nav", this.el);
      const o12 = r14.querySelectorAll("gcds-nav-group");
      o12.forEach((r15) => {
        if (r15.hasAttribute("open")) {
          r15.toggleNav();
        }
      });
    }
    if (this.el.classList.contains("gcds-mobile-nav")) {
      if (this.open) {
        this.navPosiiton = window.scrollY;
        document.body.style.position = "fixed";
      } else {
        document.body.style.removeProperty("position");
        window.scrollTo(0, this.navPosiiton);
      }
    }
  }
  updateLang() {
    const r14 = new MutationObserver((r15) => {
      if (r15[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    r14.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    if (this.el.parentNode.nodeName == "GCDS-TOP-NAV") {
      this.navStyle = "dropdown";
      const r14 = this.el.parentNode.getAttribute("alignment");
      if (r14 === "end") {
        this.navStyle += " dropdown-right";
      }
      if (this.open) {
        this.open = false;
      }
    } else {
      this.navStyle = "expandable";
    }
    if (this.el.parentNode.nodeName == "GCDS-NAV-GROUP" && !this.el.parentNode.classList.contains("gcds-mobile-nav") && this.el.closest("gcds-top-nav")) {
      this.el.remove();
    }
  }
  render() {
    const { closeTrigger: r14, menuLabel: o12, open: e16, openTrigger: n16 } = this;
    return ye(ge, { key: "dc41c8634f5207f3264c193fa4b643a5d7460bcb", role: "listitem", open: e16 }, ye("button", { key: "993f5335ec64d025e881c8d3149bc2f6507ae919", "aria-haspopup": "true", tabIndex: 0, "aria-expanded": e16.toString(), ref: (r15) => this.triggerElement = r15, class: `gcds-nav-group__trigger gcds-trigger--${this.navStyle}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (r15) => {
      const o13 = o2(r15, this.gcdsClick);
      if (o13) {
        this.toggleNav();
      }
    } }, ye("gcds-icon", { key: "78f16f4980aa7aa8b0226b4760763ba41ecc0e2b", name: this.navStyle === "expandable" ? e16 ? "chevron-down" : "chevron-right" : e16 ? "chevron-up" : "chevron-down" }), r14 && e16 ? r14 : n16), ye("ul", { key: "349c7a14f3e13ef7344ea40e35ac8c9000f8d390", "aria-label": o12, class: `gcds-nav-group__list gcds-nav--${this.navStyle}` }, ye("slot", { key: "73a3ba354f2a90a0cea6edfe9e47b1ad5c85e92d" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return c15;
  }
}, [1, "gcds-nav-group", { closeTrigger: [513, "close-trigger"], menuLabel: [513, "menu-label"], openTrigger: [513, "open-trigger"], open: [1540], lang: [32], navStyle: [32], navPosiiton: [32], focusTrigger: [64], toggleNav: [64] }, [[4, "focusout", "focusOutListener"]]]);
function l11() {
  if (typeof customElements === "undefined") {
    return;
  }
  const r14 = ["gcds-nav-group", "gcds-icon"];
  r14.forEach((r15) => {
    switch (r15) {
      case "gcds-nav-group":
        if (!customElements.get(r15)) {
          customElements.define(r15, v6);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(r15)) {
          t4();
        }
        break;
    }
  });
}

// node_modules/@gcds-core/components/dist/components/gcds-nav-group.js
var p10 = l11;

// node_modules/@gcds-core/components/dist/components/gcds-nav-link.js
var d12 = "@layer reset, default, variants, hover, active, focus;@layer reset{:host .gcds-nav-link{box-sizing:border-box}:host .gcds-nav-link slot{display:initial}}@layer default{:host .gcds-nav-link{border-inline:var(--gcds-nav-link-border-width) solid transparent;color:var(--gcds-nav-link-default-text);display:flex;font:var(--gcds-nav-link-font);margin-block-end:var(--gcds-nav-link-margin);padding:var(--gcds-nav-link-padding);text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(\n      --gcds-nav-link-default-decoration-thickness\n    );text-underline-offset:var(--gcds-nav-link-default-underline-offset);transition:all .25s ease-in-out}@media only screen and (width < 64em){:host .gcds-nav-link{font:var(--gcds-nav-link-font-mobile);min-width:50%}}@media only screen and (width > 48em){:host .gcds-nav-link{max-width:var(--gcds-nav-link-default-max-width)}}:host .gcds-nav-link[aria-current=page]{pointer-events:none;text-decoration:none}}@layer variants{@media only screen and (width >= 64em){:host>.gcds-nav-link--topnav.gcds-nav-link{border-block:var(--gcds-nav-link-border-width) solid transparent;border-inline:0;color:var(--gcds-nav-link-top-nav-text);margin:var(--gcds-nav-link-top-nav-margin);padding:var(--gcds-nav-link-top-nav-padding)}:host>.gcds-nav-link--topnav.gcds-nav-link:not(:hover){text-decoration-color:transparent}:host([slot=home])>.gcds-nav-link{color:var(--gcds-nav-link-top-nav-text-primary);font:var(--gcds-nav-link-top-nav-home-font);padding:var(--gcds-nav-link-top-nav-home-padding)}}:host>.gcds-nav-link--sidenav.gcds-nav-link{padding:var(--gcds-nav-link-side-nav-padding)}}@layer hover{@media (hover:hover){:host .gcds-nav-link:hover{color:var(--gcds-nav-link-hover-text);text-decoration-thickness:var(\n        --gcds-nav-link-hover-decoration-thickness\n      )}:host>.gcds-nav-link--dropdown.gcds-nav-link:hover,:host>.gcds-nav-link--sidenav.gcds-nav-link:hover{color:var(--gcds-nav-link-hover-text)}:host>.gcds-nav-link--sidenav.gcds-nav-link:hover{background-color:var(--gcds-nav-link-side-nav-hover-background)}:host>.gcds-nav-link--dropdown.gcds-nav-link:hover{background-color:var(--gcds-nav-link-top-nav-hover-background)}}}@layer active{:host .gcds-nav-link[aria-current=page]{background-color:var(--gcds-nav-link-active-background);border-inline-start-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-active-text)}@media only screen and (width >= 64em){:host>.gcds-nav-link--topnav.gcds-nav-link[aria-current=page]{background-color:transparent;border-block-end-color:currentColor;color:var(--gcds-nav-link-top-nav-text-primary)}}:host>.gcds-nav-link--sidenav.gcds-nav-link[aria-current=page]{font-weight:var(--gcds-nav-link-active-font-weight)}}@layer focus{:host .gcds-nav-link:focus{background-color:var(--gcds-nav-link-focus-background);border-color:var(--gcds-nav-link-focus-background);border-radius:var(--gcds-nav-link-focus-border-radius);box-shadow:var(--gcds-nav-link-focus-box-shadow);color:var(--gcds-nav-link-focus-text);outline:var(--gcds-nav-link-focus-outline);outline-offset:var(--gcds-nav-link-focus-outline-offset);text-decoration:none}}";
var c16 = Et(class n15 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsClick = Ue(this, "gcdsClick");
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
  }
  async focusLink() {
    this.linkElement.focus();
  }
  updateLang() {
    const n16 = new MutationObserver((n17) => {
      if (n17[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    n16.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    if (this.el.closest("gcds-top-nav")) {
      if (this.el.parentNode.nodeName == "GCDS-TOP-NAV") {
        this.navStyle = "topnav";
      } else {
        this.navStyle = "dropdown";
      }
    } else {
      this.navStyle = "sidenav";
    }
  }
  render() {
    const { current: n16, href: a11 } = this;
    const o12 = {};
    if (n16) {
      o12["aria-current"] = "page";
    }
    return ye(ge, { key: "69d1a5cf3b6ec8277ecbc0b994c679a85485f288", role: "listitem" }, ye("a", Object.assign({ key: "e6fa6df38ec8f39e69e6e030846353e969640680", class: `gcds-nav-link gcds-nav-link--${this.navStyle}`, href: a11 }, o12, { tabIndex: 0, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (n17) => o2(n17, this.gcdsClick, a11), ref: (n17) => this.linkElement = n17 }), ye("slot", { key: "77b17d920b3c8e9fed6467aff446f928d246cf19" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return d12;
  }
}, [1, "gcds-nav-link", { href: [513], current: [516], lang: [32], navStyle: [32], focusLink: [64] }]);
function l12() {
  if (typeof customElements === "undefined") {
    return;
  }
  const n16 = ["gcds-nav-link"];
  n16.forEach((n17) => {
    switch (n17) {
      case "gcds-nav-link":
        if (!customElements.get(n17)) {
          customElements.define(n17, c16);
        }
        break;
    }
  });
}
var g8 = l12;

// node_modules/@gcds-core/components/dist/components/gcds-notice.js
var g9 = { en: { success: "Success: ", info: "Information: ", warning: "Warning: ", danger: "Danger: " }, fr: { success: "Succès : ", info: "Information : ", warning: "Avertissement : ", danger: "Danger : " } };
var l13 = '@layer reset, default, type;@layer reset{:host{display:block}:host .gcds-notice{box-sizing:border-box;text-align:left}:host .gcds-notice slot{display:initial}}@layer default{:host .gcds-notice{color:var(--gcds-notice-text);display:grid;gap:var(--gcds-notice-icon-gap);grid-template-columns:var(--gcds-notice-icon-width) auto}:host .gcds-notice .notice__heading{--gcds-heading-h2-desktop:var(\n        --gcds-notice-content-heading-font-desktop\n      );--gcds-heading-h2-mobile:var(--gcds-notice-content-heading-font-mobile);--gcds-heading-h4-desktop:var(\n        --gcds-notice-content-heading-font-desktop\n      );--gcds-heading-h4-mobile:var(--gcds-notice-content-heading-font-mobile);--gcds-heading-h5-desktop:var(\n        --gcds-notice-content-heading-font-desktop\n      );--gcds-heading-h5-mobile:var(--gcds-notice-content-heading-font-mobile);margin-block-start:var(\n        --gcds-notice-content-heading-margin-block-start-desktop\n      )}@media only screen and (width < 48em){:host .gcds-notice .notice__heading{margin-block-start:var(\n          --gcds-notice-content-heading-margin-block-start-mobile\n        )}}:host .gcds-notice .notice__icon{margin:var(--gcds-notice-icon-margin)}:host .gcds-notice .notice__icon:before{background-color:currentColor;content:"";display:block;height:var(--gcds-notice-icon-before-height);margin:0 auto;width:var(--gcds-notice-border-width)}:host .gcds-notice .notice__icon:after{background-color:currentColor;content:"";display:block;height:var(--gcds-notice-icon-after-height);margin:0 auto;width:var(--gcds-notice-border-width)}:host .gcds-notice ::slotted(*){font:var(--gcds-notice-content-slotted-font-desktop);margin-block-start:0}@media only screen and (width < 48em){:host .gcds-notice ::slotted(*){font:var(--gcds-notice-content-slotted-font-mobile)}}:host .gcds-notice ::slotted(:last-child){margin-block-end:0}:host .gcds-notice ::slotted(:not(:last-child)){margin-block-end:var(--gcds-notice-content-slotted-margin)}:host .gcds-notice ::slotted(ol),:host .gcds-notice ::slotted(ul){margin-inline-start:var(--gcds-notice-content-slotted-list-margin);padding:0}}@layer type{:host .gcds-notice.notice--role-danger .notice__icon{color:var(--gcds-notice-danger-text)}:host .gcds-notice.notice--role-info .notice__icon{color:var(--gcds-notice-info-text)}:host .gcds-notice.notice--role-success .notice__icon{color:var(--gcds-notice-success-text)}:host .gcds-notice.notice--role-warning .notice__icon{color:var(--gcds-notice-warning-text)}}';
var h14 = Et(class t22 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.errors = [];
  }
  validateNoticeRole() {
    if (!this.noticeRole) {
      this.errors.push("noticeRole");
    } else if (this.errors.includes("noticeRole")) {
      this.errors.splice(this.errors.indexOf("noticeRole"), 1);
    }
  }
  validateNoticeTitle() {
    if (!this.noticeTitle || this.noticeTitle === "") {
      this.errors.push("noticeTitle");
    } else if (this.errors.includes("noticeTitle")) {
      this.errors.splice(this.errors.indexOf("noticeTitle"), 1);
    }
  }
  validateNoticeTitleTag() {
    if (!this.noticeTitleTag || !["h2", "h3", "h4", "h5"].includes(this.noticeTitleTag)) {
      this.errors.push("noticeTitleTag");
    } else if (this.errors.includes("noticeTitleTag")) {
      this.errors.splice(this.errors.indexOf("noticeTitleTag"), 1);
    }
  }
  updateLang() {
    const t26 = new MutationObserver((t27) => {
      if (t27[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    t26.observe(this.el, s2);
  }
  validateChildren() {
    if (this.el.innerHTML.trim() == "") {
      this.errors.push("children");
    } else if (this.errors.includes("children")) {
      this.errors.splice(this.errors.indexOf("children"), 1);
    }
  }
  validateRequiredProps() {
    this.validateNoticeTitle();
    this.validateNoticeRole();
    this.validateNoticeTitleTag();
    this.validateChildren();
    if (this.errors.includes("noticeRole") || this.errors.includes("noticeTitle") || this.errors.includes("noticeTitleTag") || this.errors.includes("children")) {
      return false;
    }
    return true;
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    const t26 = this.validateRequiredProps();
    if (!t26) {
      a2("gcds-notice", this.errors);
    }
  }
  render() {
    const { noticeRole: t26, noticeTitle: e16, noticeTitleTag: n16 } = this;
    const c19 = { danger: "exclamation-circle", info: "info-circle", success: "checkmark-circle", warning: "warning-triangle" };
    return ye(ge, { key: "eeefda750a72d686551bf8fb9d19e01041443383" }, this.validateRequiredProps() && ye("section", { key: "6e02932b54e765e2209dbfce48d195cf49c18b71", class: `gcds-notice notice--role-${t26}` }, ye("gcds-icon", { key: "3dc298767a00715811ccec1f9c372acf919fd3d4", class: "notice__icon", size: "h4", name: c19[t26] }), ye("div", { key: "214a8893e623fa271f673cb79df6a732a6c72964" }, ye("gcds-heading", { key: "ea7a87df48aa86ca8c85128dfcdd49ea39430217", tag: n16, "margin-top": "0", "margin-bottom": "100", class: "notice__heading" }, ye("gcds-sr-only", { key: "517fd7249667e0f971b009f65b070dc11440d69e", tag: "span" }, g9[this.lang][t26]), e16), ye("slot", { key: "fdf48fa2daceb1af2f8058e53e4a3d00d6424444" }))));
  }
  get el() {
    return this;
  }
  static get style() {
    return l13;
  }
}, [1, "gcds-notice", { noticeRole: [1, "notice-role"], noticeTitle: [1, "notice-title"], noticeTitleTag: [1, "notice-title-tag"], errors: [32], lang: [32] }]);
function f8() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-notice", "gcds-heading", "gcds-icon", "gcds-sr-only"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-notice":
        if (!customElements.get(t27)) {
          customElements.define(t27, h14);
        }
        break;
      case "gcds-heading":
        if (!customElements.get(t27)) {
          d9();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(t27)) {
          t4();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(t27)) {
          o5();
        }
        break;
    }
  });
}
var b7 = f8;

// node_modules/@gcds-core/components/dist/components/gcds-pagination.js
var p11 = { en: { next: "Next", listNext: "Next", previous: "Previous", listPrevious: "Previous", previousMobile: "Prev", nextPage: "Next page", previousPage: "Previous page", pageNumber: "Page {#}", pageNumberOf: "Page {#} of {total} of {label}" }, fr: { next: "Suivante", listNext: "Suiv.", previous: "Précédent", listPrevious: "Préc.", previousMobile: "Préc.", nextPage: "Page suivante", previousPage: "Page précédente", pageNumber: "Page {#}", pageNumberOf: "Page {#} sur {total} des {label}" } };
function c17(i12, t26, s13) {
  let n16 = "";
  let a11 = "";
  let e16 = 0;
  for (const n17 in i12.queryStrings) {
    let o13 = n17;
    let g13 = i12.queryStrings[n17];
    if (n17.includes("::")) {
      const a12 = n17.split("::")[1];
      const e17 = /\{\{([^)]+)\}\}/;
      const l17 = e17.exec(i12.queryStrings[n17]);
      if (a12 == "offset") {
        let a13 = t26;
        if (s13 == "next") {
          ++a13;
        } else if (s13 == "previous") {
          --a13;
        }
        g13 = l17 ? i12.queryStrings[n17].replace(`{{${l17[1]}}}`, `${(a13 - 1) * Number(l17[1])}`) : (a13 - 1) * i12.queryStrings[n17];
        o13 = o13.replace("::offset", "");
      }
      if (a12 == "match") {
        let a13 = t26;
        if (s13 == "next") {
          ++a13;
        } else if (s13 == "previous") {
          --a13;
        }
        g13 = l17 ? i12.queryStrings[n17].replace(`{{${l17[1]}}}`, `${a13 * Number(l17[1])}`) : a13 * i12.queryStrings[n17];
        o13 = o13.replace("::match", "");
      }
    }
    if (e16 == 0) {
      a11 += `?${o13}=${g13}`;
    } else {
      a11 += `&${o13}=${g13}`;
    }
    ++e16;
  }
  if (i12.fragment) {
    n16 = `#${i12.fragment}`;
  }
  const o12 = `${a11}${n16}`;
  return o12;
}
function d13(i12, t26, s13) {
  if (s13 <= 5) {
    return "";
  } else if (t26 == 1 || t26 == s13) {
    if (t26 - i12 == 4 || t26 - i12 == -4) {
      return "gcds-pagination-list-breakpoint-xxs";
    } else if (t26 - i12 == 5 || t26 - i12 == -5) {
      return "gcds-pagination-list-breakpoint-xs";
    } else if (t26 - i12 > 5 || t26 - i12 < -5) {
      return "gcds-pagination-list-breakpoint-sm";
    }
  } else if (t26 == 2 || t26 == s13 - 1) {
    if (t26 - i12 == 3 || t26 - i12 == -3) {
      return "gcds-pagination-list-breakpoint-xxs";
    } else if (t26 - i12 == 4 || t26 - i12 == -4) {
      return "gcds-pagination-list-breakpoint-xs";
    } else if (t26 - i12 > 4 || t26 - i12 < -4) {
      return "gcds-pagination-list-breakpoint-sm";
    }
  } else if (t26 > 2 && t26 < s13 - 1 && s13 < 10 && t26 == 5) {
    if (t26 - i12 == 2 || t26 - i12 == -2) {
      return "gcds-pagination-list-breakpoint-xs";
    } else if (t26 - i12 >= 3 || t26 - i12 <= -3) {
      return "gcds-pagination-list-breakpoint-sm";
    }
  } else if (t26 > 2 && t26 < s13 - 1) {
    if (t26 - i12 == 2 || t26 - i12 == -2) {
      return "gcds-pagination-list-breakpoint-xxs";
    } else if (t26 - i12 == 3 || t26 - i12 == -3) {
      return "gcds-pagination-list-breakpoint-xs";
    } else if (t26 - i12 > 3 || t26 - i12 < -3) {
      return "gcds-pagination-list-breakpoint-sm";
    }
  }
}
var r13 = '@layer reset, default, list, simple, wide, compact, hover, active, focus;@layer reset{:host{display:block}:host .gcds-pagination ul{list-style:none;padding:0}}@layer default{:host .gcds-pagination{container:component pagination/inline-size}:host .gcds-pagination li a{border-radius:var(--gcds-pagination-border-radius);color:var(--gcds-pagination-default-text);font:var(--gcds-pagination-font-desktop)}@media only screen and (width < 48em){:host .gcds-pagination li a{font:var(--gcds-pagination-font-mobile)}}}@layer list{:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext){display:flex;flex-direction:row;margin:0;width:fit-content}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li{margin:var(--gcds-pagination-listitem-margin)}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses{align-items:center;display:flex;height:3rem;justify-content:center;min-width:3rem}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button-mobile,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile{height:auto;min-width:auto;padding:var(--gcds-pagination-list-end-button-padding);text-decoration:none;width:auto}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button-mobile span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile span{text-decoration:underline}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-mobile-prevnext{display:none}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-list-mobile-ellipses{display:none}:host .gcds-pagination .gcds-pagination-list-mobile-prevnext{display:flex;margin:var(--gcds-pagination-mobile-list-prevnext-margin)}:host .gcds-pagination>div{width:fit-content}}@layer simple{:host .gcds-pagination-simple{display:flex;flex-direction:column;justify-content:space-between}:host .gcds-pagination-simple li{margin:var(--gcds-pagination-simple-listitem-margin)}:host .gcds-pagination-simple li:has(+li){border-block-end:var(--gcds-pagination-simple-listitem-divider-border);margin-block-end:var(--gcds-pagination-simple-listitem-divider-margin);padding:var(--gcds-pagination-simple-listitem-divider-padding)}:host .gcds-pagination-simple li a{display:grid;padding:var(--gcds-pagination-simple-padding)}:host .gcds-pagination-simple li a>gcds-icon{grid-area:icon}:host .gcds-pagination-simple li a>.gcds-pagination-simple-text{grid-area:text;margin:var(--gcds-pagination-simple-listitem-text-margin)}:host .gcds-pagination-simple li a>span{font-weight:var(--gcds-pagination-simple-label-font-weight);grid-area:label}:host .gcds-pagination-simple .gcds-pagination-simple-listitem a{text-decoration:none}:host .gcds-pagination-simple .gcds-pagination-simple-listitem a .gcds-pagination-simple-text,:host .gcds-pagination-simple .gcds-pagination-simple-listitem a span{text-decoration:underline}:host .gcds-pagination-simple .gcds-pagination-simple-listitem a{grid-template-areas:"icon text" "icon label";grid-template-columns:2rem 6fr}}@layer wide{@container pagination (width > 44em){:host .gcds-pagination-list-mobile-prevnext{display:none}}}@layer compact{@container pagination (width <= 44em){:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a{border:var(--gcds-pagination-border-width) solid}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses{min-width:auto}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li:has(>a.gcds-pagination-end-button){margin:0}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li .gcds-pagination-end-button{display:none}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-mobile-prevnext{display:block}}@container pagination (width <= 30em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-sm{display:none}}@container pagination (width <= 27.5em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-xs{display:none}}@container pagination (width <= 25em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-xxs{display:none}}@container pagination (width <= 19em){:host .gcds-pagination-list li{margin:var(--gcds-pagination-mobile-list-item-margin)}}}@layer hover{@media (hover:hover){:host .gcds-pagination ul li a:hover{background:var(--gcds-pagination-hover-background);color:var(--gcds-pagination-hover-text)}}}@layer active{:host .gcds-pagination ul li a:active:not(:focus),:host .gcds-pagination ul li a[aria-current*=page]:not(:focus){background:var(--gcds-pagination-active-background);border-color:var(--gcds-pagination-active-background);color:var(--gcds-pagination-active-text);text-decoration:none}}@layer focus{:host .gcds-pagination ul li a:focus{background-color:var(--gcds-pagination-focus-background);border-color:var(--gcds-pagination-focus-background);box-shadow:var(--gcds-pagination-focus-box-shadow);color:var(--gcds-pagination-focus-text);outline:var(--gcds-pagination-focus-outline-width) solid var(--gcds-pagination-focus-background);outline-offset:var(--gcds-pagination-border-width);text-decoration:none}}';
var h15 = Et(class i10 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsClick = Ue(this, "gcdsClick");
    this.listitems = [];
    this.mobilePrevNext = [];
    this.display = "list";
  }
  watchCurrentPage(i12) {
    this.currentStep = i12;
  }
  urlChanged(i12) {
    if (typeof i12 == "string") {
      this.urlObject = JSON.parse(i12);
    } else if (typeof i12 == "object") {
      this.urlObject = i12;
    }
  }
  watchLang() {
    if (this.display == "list") {
      this.configureListPagination();
    }
  }
  configurePaginationStep(i12, t26, s13) {
    const a11 = this.urlObject ? c17(this.urlObject, i12, t26) : "javascript:void(0)";
    const o12 = { href: a11, tabindex: 0, "aria-label": !t26 ? p11[this.lang].pageNumberOf.replace("{#}", i12).replace("{total}", this.totalPages).replace("{label}", this.label) : t26 == "next" ? `${p11[this.lang].nextPage}: ${p11[this.lang].pageNumberOf.replace("{#}", ++i12).replace("{total}", this.totalPages).replace("{label}", this.label)}` : `${p11[this.lang].previousPage}: ${p11[this.lang].pageNumberOf.replace("{#}", --i12).replace("{total}", this.totalPages).replace("{label}", this.label)}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (t27) => o2(t27, this.gcdsClick, { page: i12, href: a11 }) };
    if (i12 == this.currentPage && !t26) {
      o12["aria-current"] = "page";
    }
    if (t26) {
      return ye("li", null, t26 === "next" ? ye("a", Object.assign({}, o12, { class: !s13 ? "gcds-pagination-end-button" : "gcds-pagination-end-button-mobile" }), ye("span", null, p11[this.lang].listNext), ye("gcds-icon", { "margin-left": "150", name: "chevron-right" })) : ye("a", Object.assign({}, o12, { class: !s13 ? "gcds-pagination-end-button" : "gcds-pagination-end-button-mobile" }), ye("gcds-icon", { "margin-right": "150", name: "chevron-left" }), ye("span", null, s13 ? p11[this.lang].previousMobile : p11[this.lang].listPrevious)));
    } else {
      return ye("li", { class: i12 != 1 && i12 != this.totalPages ? d13(i12, this.currentPage, this.totalPages) : "" }, ye("a", Object.assign({}, o12), i12));
    }
  }
  configureListPagination() {
    this.listitems = [];
    this.mobilePrevNext = [];
    if (this.currentPage != 1) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, "previous"));
      this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, "previous", true));
    }
    let i12 = false;
    let t26 = false;
    for (let s13 = 1; s13 <= this.totalPages; s13++) {
      if (s13 == 2 && this.currentPage < 6 && this.currentPage > 3 && this.totalPages > 9) {
        this.listitems.push(ye("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, ye("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      } else if (s13 == 2 && this.totalPages < 10 && this.totalPages > 5 && this.currentPage > 3) {
        this.listitems.push(ye("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, ye("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
      if (s13 == this.currentPage || s13 == 1 || s13 == this.totalPages || s13 >= this.currentPage - 2 && s13 <= this.currentPage + 2 || this.totalPages < 10) {
        this.listitems.push(this.configurePaginationStep(s13));
      } else if (this.currentPage <= 5 && s13 <= 7 || this.currentPage >= this.totalPages - 4 && s13 >= this.totalPages - 6) {
        this.listitems.push(this.configurePaginationStep(s13));
      } else if (this.currentPage == 5 && s13 == 2 || this.currentPage == this.totalPages - 4 && s13 == this.totalPages - 1) {
        this.listitems.push(this.configurePaginationStep(s13));
      } else if (!i12 && s13 < this.currentPage - 2) {
        this.listitems.push(ye("li", { "aria-hidden": "true" }, ye("span", { class: "gcds-pagination-list-ellipses" }, "...")));
        i12 = true;
      } else if (!t26 && s13 > this.currentPage + 2 && s13 < this.totalPages) {
        this.listitems.push(ye("li", { "aria-hidden": "true" }, ye("span", { class: "gcds-pagination-list-ellipses" }, "...")));
        t26 = true;
      }
      if (s13 == this.totalPages - 1 && this.currentPage > this.totalPages - 5 && this.currentPage < this.totalPages - 2 && this.totalPages > 9) {
        this.listitems.push(ye("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, ye("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      } else if (s13 == this.totalPages - 1 && this.totalPages < 10 && this.totalPages > 5 && this.currentPage < this.totalPages - 2) {
        this.listitems.push(ye("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, ye("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
    }
    if (this.currentPage != this.totalPages) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, "next"));
      this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, "next", true));
    }
  }
  updateLang() {
    const i12 = new MutationObserver((i13) => {
      if (i13[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    i12.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    if (this.url && typeof this.url == "string") {
      this.urlObject = JSON.parse(this.url);
    } else if (this.url && typeof this.url == "object") {
      this.urlObject = this.url;
    }
    if (this.display == "list") {
      this.configureListPagination();
    }
  }
  componentDidUpdate() {
    if (this.display == "list") {
      this.configureListPagination();
    }
  }
  render() {
    const { display: i12, label: t26, previousHref: s13, previousLabel: o12, nextHref: g13, nextLabel: l17, lang: c19 } = this;
    return ye(ge, { key: "9a81d301de4f742c83fd7a07b016569b993aaac1", role: "navigation", "aria-label": t26 }, ye("div", { key: "d8cfd7c590b889f58d04db1781c528589e052b1f", class: "gcds-pagination" }, i12 === "list" ? ye("div", null, ye("ul", { class: "gcds-pagination-list" }, this.listitems), ye("ul", { class: "gcds-pagination-list-mobile-prevnext" }, this.mobilePrevNext)) : ye("ul", { class: "gcds-pagination-simple" }, s13 && ye("li", { class: "gcds-pagination-simple-listitem" }, ye("a", { href: s13, tabindex: 0, "aria-label": `${p11[c19].previousPage}${o12 ? `: ${o12}` : ""}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (i13) => o2(i13, this.gcdsClick, s13) }, ye("gcds-icon", { "margin-right": "150", name: "chevron-left", size: "h6" }), ye("div", { class: "gcds-pagination-simple-text" }, p11[c19].previous), ye("span", null, o12))), g13 && ye("li", { class: "gcds-pagination-simple-listitem" }, ye("a", { href: g13, tabindex: 0, "aria-label": `${p11[c19].nextPage}${l17 ? `: ${l17}` : ""}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (i13) => o2(i13, this.gcdsClick, g13) }, ye("gcds-icon", { "margin-right": "150", name: "chevron-right", size: "h6" }), ye("div", { class: "gcds-pagination-simple-text" }, p11[c19].next), ye("span", null, l17))))));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { currentPage: ["watchCurrentPage"], url: ["urlChanged"], lang: ["watchLang"] };
  }
  static get style() {
    return r13;
  }
}, [1, "gcds-pagination", { display: [1], label: [1], previousHref: [1, "previous-href"], previousLabel: [513, "previous-label"], nextHref: [1, "next-href"], nextLabel: [513, "next-label"], totalPages: [2, "total-pages"], currentPage: [514, "current-page"], url: [1], currentStep: [32], lang: [32] }, void 0, { currentPage: ["watchCurrentPage"], url: ["urlChanged"], lang: ["watchLang"] }]);
function u11() {
  if (typeof customElements === "undefined") {
    return;
  }
  const i12 = ["gcds-pagination", "gcds-icon"];
  i12.forEach((i13) => {
    switch (i13) {
      case "gcds-pagination":
        if (!customElements.get(i13)) {
          customElements.define(i13, h15);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(i13)) {
          t4();
        }
        break;
    }
  });
}
var b8 = u11;

// node_modules/@gcds-core/components/dist/components/gcds-radios.js
function w7(s13) {
  if (typeof s13 !== "object" || s13 === null) return false;
  const i12 = ["id", "label", "value", "hint", "checked"];
  const e16 = Object.keys(s13);
  const t26 = typeof s13.id === "string" && typeof s13.label === "string" && typeof s13.value === "string" && (s13.hint === void 0 || typeof s13.hint === "string") && (s13.checked === void 0 || typeof s13.checked === "boolean");
  const a11 = e16.every((s14) => i12.includes(s14));
  return t26 && a11;
}
var _5 = { en: { required: " (required)" }, fr: { required: " (obligatoire)" } };
var x4 = '@layer reset, default, disabled, error, focus, a11y.highcontrast;@layer reset{:host{display:block}:host .gcds-radios__fieldset{border:0;min-inline-size:auto;padding:0}:host .gcds-radios__fieldset legend{padding:0}:host .gcds-radio{border:0;padding:0}:host .gcds-radio gcds-label{display:block}:host .gcds-radio gcds-label>label:after,:host .gcds-radio gcds-label>label:before{box-sizing:border-box;content:"";cursor:pointer;position:absolute}}@layer default{:host .gcds-radios__legend{font:var(--gcds-radio-legend-font-desktop);margin:var(--gcds-radio-legend-margin)}:host .gcds-radios__legend .legend__required{font:var(--gcds-radio-legend-required-font-desktop)}@media only screen and (width < 48em){:host .gcds-radios__legend{font:var(--gcds-radio-legend-font-mobile)}:host .gcds-radios__legend .legend__required{font:var(--gcds-radio-legend-required-font-mobile)}}:host .gcds-radios__legend:not(:has(+gcds-hint)){margin:var(--gcds-radio-legend-hint-margin)}:host gcds-hint:part(hint){margin:var(--gcds-radio-hint-margin)}:host .gcds-radio{color:var(--gcds-radio-default-text);font:var(--gcds-radio-font);margin:var(--gcds-radio-margin)!important;max-width:var(--gcds-radio-max-width);min-height:calc(var(--gcds-radio-input-height-and-width) - var(--gcds-radio-padding));padding:var(--gcds-radio-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-radio :is(gcds-label,gcds-hint){padding:var(--gcds-radio-label-padding)!important}:host .gcds-radio gcds-hint::part(hint){margin:0}:host .gcds-radio gcds-label:after,:host .gcds-radio gcds-label:before,:host .gcds-radio input{position:absolute}:host .gcds-radio gcds-label>label:before,:host .gcds-radio input{height:var(--gcds-radio-input-height-and-width);left:0;top:0;width:var(--gcds-radio-input-height-and-width)}:host .gcds-radio input{opacity:0}:host .gcds-radio gcds-label>label{width:fit-content;--gcds-label-font-desktop:var(--gcds-radio-label-font-desktop);--gcds-label-font-mobile:var(--gcds-radio-label-font-mobile)}:host .gcds-radio gcds-label>label:after,:host .gcds-radio gcds-label>label:before{border-radius:var(--gcds-radio-border-radius)}:host .gcds-radio gcds-label>label:before{background-color:var(--gcds-radio-default-background);border:var(--gcds-radio-input-border-width) solid;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-radio gcds-label>label:after{background-color:currentcolor;height:var(--gcds-radio-check-height-and-width);left:var(--gcds-radio-check-left);opacity:0;top:var(--gcds-radio-check-top);width:var(--gcds-radio-check-height-and-width)}:host .gcds-radio input:checked+gcds-label>label:after{opacity:1}}@layer disabled{:host .gcds-radio.gcds-radio--disabled{color:var(--gcds-radio-disabled-text)}:host .gcds-radio.gcds-radio--disabled gcds-label>label{--gcds-label-text:currentColor;cursor:not-allowed}:host .gcds-radio.gcds-radio--disabled gcds-label>label:after,:host .gcds-radio.gcds-radio--disabled gcds-label>label:before{cursor:not-allowed}:host .gcds-radio.gcds-radio--disabled gcds-label>label:before{background-color:var(--gcds-radio-disabled-background);border-color:var(--gcds-radio-disabled-border)}:host .gcds-radio.gcds-radio--disabled gcds-hint{--gcds-hint-text:currentColor}}@layer error{:host gcds-error-message{margin:var(--gcds-radio-error-message-margin)}:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label>label:before{border-color:var(--gcds-radio-danger-border)}:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label>label:after{background-color:var(--gcds-radio-danger-border)}}@layer focus{:host .gcds-radio:focus-within input:focus+gcds-label>label:before{background:var(--gcds-radio-focus-background);box-shadow:var(--gcds-radio-focus-box-shadow);color:var(--gcds-radio-focus-color);outline:var(--gcds-radio-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-radio-input-border-width)}:host .gcds-radio:focus-within input:focus+gcds-label>label:after{box-shadow:inset 0 0 2rem var(--gcds-radio-focus-color)}}@layer a11y.highcontrast{@media (prefers-color-scheme:light){:host .gcds-radio gcds-label>label:after{background-color:buttonText}}@media (prefers-color-scheme:dark){:host .gcds-radio gcds-label>label:after{background-color:buttonText}}}';
var j4 = Et(class s11 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsInput = Ue(this, "gcdsInput");
    this.gcdsChange = Ue(this, "gcdsChange");
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsValid = Ue(this, "gcdsValid");
    this.gcdsError = Ue(this, "gcdsError");
    this.internals = this.attachInternals();
    this.radioTitle = "";
    this._validator = i5;
    this.validateOn = "blur";
    this.hideLegend = false;
    this.inheritedAttributes = {};
    this.errors = [];
    this.onBlur = () => {
      this.gcdsBlur.emit();
    };
    this.onBlurValidate = () => {
      if (this.validateOn == "blur") {
        this.validate();
      }
      this.gcdsBlur.emit();
    };
    this.handleInput = (s13, i12) => {
      const e16 = s13.target && s13.target.value;
      this.value = e16;
      this.internals.setFormValue(e16 ? e16 : null, "checked");
      if (s13.type === "change") {
        const i13 = new s13.constructor(s13.type, s13);
        this.el.dispatchEvent(i13);
      } else {
        this.updateValidity();
      }
      i12.emit(this.value);
    };
  }
  validateOptions() {
    let s13 = false;
    if (typeof this.options === "string" && this.options.trim() !== "") {
      try {
        this.options = JSON.parse(this.options);
      } catch (s14) {
        a2("gcds-radios", ["Invalid JSON string for options"]);
        this.options = null;
      }
    }
    if (Array.isArray(this.options)) {
      this.optionsArr = this.options;
    } else {
      this.optionsArr = null;
    }
    if (this.optionsArr && this.optionsArr.length > 1) {
      s13 = this.optionsArr.some((s14) => !w7(s14));
    } else {
      s13 = true;
    }
    if (this.optionsArr && !this.value) {
      this.optionsArr.forEach((s14) => {
        if (s14.checked === "true" || s14.checked === true) {
          this.value = s14.value;
          this.internals.setFormValue(s14.value, "checked");
        }
      });
    }
    this.errors = u2(this.errors, "options", this.optionsArr, s13);
  }
  validateName() {
    this.errors = u2(this.errors, "name", this.name);
  }
  validateLegend() {
    this.errors = u2(this.errors, "legend", this.legend);
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    } else {
      this.hasError = this.errorMessage ? true : false;
    }
  }
  validateValue() {
    if (this.optionsArr && this.value !== null) {
      let s13 = false;
      this.optionsArr.map((i12) => {
        if (i12.value == this.value) {
          s13 = true;
        }
      });
      if (!s13) {
        this.value = null;
        this.internals.setFormValue(this.value);
      }
      this.updateValidity();
    }
  }
  get validity() {
    return this.internals.validity;
  }
  validateValidator() {
    this._validator = y2(this.validator);
  }
  async validate() {
    m2(this.el, this._validator.validate(this.value), this.legend, this.gcdsError, this.gcdsValid, this.lang);
    this.radioTitle = this.errorMessage;
  }
  async checkValidity() {
    return this.internals.checkValidity();
  }
  async getValidationMessage() {
    return this.internals.validationMessage;
  }
  submitListener(s13) {
    if (s13.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError && this.validateOn != "other") {
        s13.preventDefault();
      }
    }
  }
  formResetCallback() {
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue, "checked");
      this.value = this.initialValue;
    }
  }
  formStateRestoreCallback(s13) {
    this.internals.setFormValue(s13);
    this.value = s13;
  }
  updateValidity() {
    var s13;
    if (((s13 = this.shadowElement) === null || s13 === void 0 ? void 0 : s13.length) > 1) {
      const s14 = d2(this.shadowElement);
      let i12 = null;
      if (s14 === null || s14 === void 0 ? void 0 : s14.valueMissing) {
        i12 = this.lang === "en" ? "Choose an option to continue." : "Choisissez une option pour continuer.";
      }
      this.internals.setValidity(s14, i12, this.shadowElement[0]);
      this.radioTitle = i12;
    }
  }
  watchLang(s13, i12) {
    if (s13 !== i12) {
      this.lang = s13;
    }
  }
  validateRequiredProps() {
    this.validateLegend();
    this.validateName();
    return i2(this.errors, ["name", "legend", "options"]);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.validateOptions();
    this.validateRequiredProps();
    this.validateErrorMessage();
    a3(this.el, "radio");
    this.validateValidator();
    this.initialValue = this.value ? this.value : null;
    const s13 = this.validateRequiredProps();
    if (!s13) {
      a2("gcds-radios", this.errors);
    }
  }
  async componentDidUpdate() {
    const s13 = this.validateRequiredProps();
    if (!s13) {
      a2("gcds-radios", this.errors);
    }
  }
  async componentDidLoad() {
    this.updateValidity();
    if (this.autofocus) {
      requestAnimationFrame(() => {
        this.shadowElement[0].focus();
      });
    }
  }
  render() {
    const { lang: s13, name: i12, legend: e16, value: r14, required: o12, hint: l17, errorMessage: c19, disabled: n16, hasError: h19, radioTitle: g13, form: u16, inheritedAttributes: b10 } = this;
    const f12 = { tabindex: "-1", "aria-labelledby": "radios-legend" };
    if (l17) {
      const s14 = this.hint ? `radios-hint ` : "";
      f12["aria-labelledby"] = `${f12["aria-labelledby"]} ${s14}`.trim();
    }
    if (this.validateRequiredProps()) {
      return ye(ge, { key: "3bd16e4a6cc77fc6114f37791a4342baef496716", onBlur: () => this.onBlurValidate() }, ye("fieldset", Object.assign({ key: "8c91df0fae62ebcae079551bc5362e1770d2da23", class: "gcds-radios__fieldset" }, f12), ye("legend", { key: "7372c1addc1d1c715b58ca0dd3dcc75fc6c38be4", id: "radios-legend", class: "gcds-radios__legend" }, this.hideLegend ? ye("gcds-sr-only", { tag: "span" }, e16, o12 && ye("span", { class: "legend__required" }, _5[s13].required)) : ye(Ct, null, e16, o12 && ye("span", { class: "legend__required" }, _5[s13].required))), l17 ? ye("gcds-hint", { id: "radios-hint", "hint-id": "radios" }, l17) : null, c19 ? ye("gcds-error-message", { id: "radios-error", messageId: "radios" }, c19) : null, this.optionsArr && this.optionsArr.map((e17) => {
        const a11 = Object.assign({ name: i12, disabled: n16, required: o12, value: e17.value, checked: e17.value === r14, title: g13, form: u16 }, b10);
        if (e17.hint) {
          const s14 = e17.hint ? `hint-${e17.id} ` : "";
          a11["aria-describedby"] = `${s14}${a11["aria-describedby"] ? `${a11["aria-describedby"]}` : ""}`;
        }
        if (h19) {
          a11["aria-invalid"] = "true";
          a11["aria-description"] = c19;
        }
        return ye("div", { class: `gcds-radio ${n16 ? "gcds-radio--disabled" : ""} ${h19 ? "gcds-radio--error" : ""}` }, ye("input", Object.assign({ id: e17.id, type: "radio" }, a11, { onInput: (s14) => this.handleInput(s14, this.gcdsInput), onChange: (s14) => this.handleInput(s14, this.gcdsChange), onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), ref: (s14) => this.shadowElement = [...this.shadowElement || [], s14] })), ye("gcds-label", { label: e17.label, "label-for": e17.id, lang: s13, onClick: (s14) => s14.stopPropagation() }), e17.hint ? ye("gcds-hint", { "hint-id": e17.id }, e17.hint) : null);
      })));
    }
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { options: ["validateOptions"], name: ["validateName"], legend: ["validateLegend"], errorMessage: ["validateErrorMessage"], value: ["validateValue"], validator: ["validateValidator"], lang: ["watchLang"] };
  }
  static get style() {
    return x4;
  }
}, [81, "gcds-radios", { options: [1025], name: [513], autofocus: [516], form: [513], legend: [513], required: [516], hint: [513], errorMessage: [1025, "error-message"], disabled: [1540], value: [1537], validity: [2064], validator: [1040], validateOn: [1025, "validate-on"], hideLegend: [4, "hide-legend"], hasError: [32], inheritedAttributes: [32], lang: [32], errors: [32], validate: [64], checkValidity: [64], getValidationMessage: [64] }, [[4, "submit", "submitListener"]], { options: ["validateOptions"], name: ["validateName"], legend: ["validateLegend"], errorMessage: ["validateErrorMessage"], value: ["validateValue"], validator: ["validateValidator"], lang: ["watchLang"] }]);
function q4() {
  if (typeof customElements === "undefined") {
    return;
  }
  const s13 = ["gcds-radios", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-sr-only", "gcds-text"];
  s13.forEach((s14) => {
    switch (s14) {
      case "gcds-radios":
        if (!customElements.get(s14)) {
          customElements.define(s14, j4);
        }
        break;
      case "gcds-error-message":
        if (!customElements.get(s14)) {
          n9();
        }
        break;
      case "gcds-hint":
        if (!customElements.get(s14)) {
          d7();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(s14)) {
          t4();
        }
        break;
      case "gcds-label":
        if (!customElements.get(s14)) {
          n11();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(s14)) {
          o5();
        }
        break;
      case "gcds-text":
        if (!customElements.get(s14)) {
          r5();
        }
        break;
    }
  });
}
var C3 = q4;

// node_modules/@gcds-core/components/dist/components/gcds-search.js
var l14 = { en: { search: "Search", searchLabel: "Search {$}" }, fr: { search: "Recherche", searchLabel: "Rechercher dans {$}" } };
var u12 = "@layer reset, default, focus;@layer reset{:host{display:block}:host .gcds-search input{background-image:none;box-sizing:border-box}:host [type=search]::-webkit-search-cancel-button,:host [type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}}@layer default{:host .gcds-search .gcds-search__header{display:block;height:0;margin:0;overflow:hidden;width:0}:host .gcds-search .gcds-search__form{display:flex;margin:var(--gcds-search-margin)!important}:host .gcds-search input{background-color:var(--gcds-search-default-background);border:var(--gcds-search-border-width) solid var(--gcds-search-border-color);border-radius:0;border-right:0 solid transparent;box-sizing:border-box;color:var(--gcds-search-default-text);font:var(--gcds-search-font);max-height:var(--gcds-search-max-height);padding:var(--gcds-search-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}:host .gcds-search input::placeholder{color:var(--gcds-search-placeholder)}:host .gcds-search gcds-button{--gcds-button-mobile-margin:0}:host .gcds-search gcds-button::part(button){border-radius:0;height:var(--gcds-search-button-width-height);padding:0;width:var(--gcds-search-button-width-height)}}@layer focus{:host .gcds-search input:focus{border-color:var(--gcds-search-focus-border-color);border-width:var(--gcds-search-focus-border-width);box-shadow:var(--gcds-search-focus-box-shadow);margin:var(--gcds-search-focus-margin);outline:var(--gcds-search-outline-width) solid var(--gcds-search-focus-border-color);outline-offset:var(--gcds-search-border-width);z-index:30}:host .gcds-search ::part(button):focus{box-shadow:var(--gcds-search-focus-box-shadow)}}";
var b9 = Et(class s12 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsInput = Ue(this, "gcdsInput");
    this.gcdsChange = Ue(this, "gcdsChange");
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsSubmit = Ue(this, "gcdsSubmit");
    this.placeholder = "Canada.ca";
    this.action = "/sr/srb.html";
    this.method = "get";
    this.name = "q";
    this.searchId = "search";
    this.suggestedArray = null;
    this.handleInput = (s13, e16) => {
      const t26 = s13.target;
      this.value = t26.value;
      e16.emit(this.value);
    };
  }
  watchSuggestedHandler() {
    if (this.suggested == null || this.suggested.length === 0) {
      this.suggestedArray = null;
      return;
    }
    if (typeof this.suggested === "string") {
      try {
        this.suggested = JSON.parse(this.suggested);
      } catch (s13) {
        console.error("gcds-search: suggested prop is not valid JSON string", s13);
        this.suggestedArray = null;
        return;
      }
    }
    this.suggestedArray = this.suggested;
  }
  updateLang() {
    const s13 = new MutationObserver((s14) => {
      if (s14[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    s13.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.watchSuggestedHandler();
    this.updateLang();
  }
  render() {
    const { placeholder: s13, action: e16, method: t26, name: r14, value: o12, lang: h19, searchId: i12, suggestedArray: n16 } = this;
    const g13 = `${l14[h19].searchLabel.replace("{$}", s13)}`;
    const u16 = { name: r14, placeholder: g13 };
    const b10 = e16 === "/sr/srb.html" ? `https://www.canada.ca/${h19}/sr/srb.html` : e16;
    return ye(ge, { key: "86ac279eefbc17baee674c2997e127d3b5a20802" }, ye("section", { key: "c61a273e09c805540ca3a1a31cdcb749c7e04b1f", class: "gcds-search" }, ye("gcds-sr-only", { key: "14f5c0f5d537821b1ee7e573824fb4e8f52ce9d0", tag: "h2" }, l14[h19].search), ye("form", { key: "d4bc7d4570f4d456216e8388edf9e2632c5d97ca", action: b10, method: t26, role: "search", onSubmit: (s14) => o2(s14, this.gcdsSubmit, this.value), class: "gcds-search__form" }, ye("gcds-label", { key: "f9b12776718938c81ae1e832b7e9cbd990e36b4e", label: g13, "label-for": i12, "hide-label": true }), ye("input", Object.assign({ key: "949cebb5efdf13db2ac669d5f7ed87892e235b10", type: "search", id: i12 }, n16 ? { list: "search-list" } : {}, { size: 34, maxLength: 170, onInput: (s14) => this.handleInput(s14, this.gcdsInput), onChange: (s14) => this.handleInput(s14, this.gcdsChange), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, u16, { class: "gcds-search__input", value: o12 })), n16 && ye("datalist", { key: "99dae417e4c831258c23d4149e89cc7391ecd058", id: "search-list" }, n16.map((s14, e17) => ye("option", { value: s14, key: e17 }))), ye("gcds-button", { key: "666e36ab503ef667109cd437ed797dbb77ca8aff", type: "submit", class: "gcds-search__button", exportparts: "button" }, ye("gcds-icon", { key: "c116c3c0d584bf47417852aec4211ca0a7b4a304", name: "search", label: l14[h19].search, size: "h3" })))));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { suggested: ["watchSuggestedHandler"] };
  }
  static get style() {
    return u12;
  }
}, [1, "gcds-search", { placeholder: [1], action: [1], method: [1], name: [1], searchId: [1, "search-id"], value: [1025], suggested: [1025], lang: [32], suggestedArray: [32] }, void 0, { suggested: ["watchSuggestedHandler"] }]);
function f9() {
  if (typeof customElements === "undefined") {
    return;
  }
  const s13 = ["gcds-search", "gcds-button", "gcds-icon", "gcds-label", "gcds-sr-only"];
  s13.forEach((s14) => {
    switch (s14) {
      case "gcds-search":
        if (!customElements.get(s14)) {
          customElements.define(s14, b9);
        }
        break;
      case "gcds-button":
        if (!customElements.get(s14)) {
          h5();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(s14)) {
          t4();
        }
        break;
      case "gcds-label":
        if (!customElements.get(s14)) {
          n11();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(s14)) {
          o5();
        }
        break;
    }
  });
}
var p12 = f9;

// node_modules/@gcds-core/components/dist/components/gcds-select.js
var p13 = w4;

// node_modules/@gcds-core/components/dist/components/p-CLIep7rR.js
async function a9(a11, i12, s13) {
  const n16 = a11.key;
  const c19 = s13.indexOf(document.activeElement == i12 ? document.activeElement.shadowRoot.activeElement : document.activeElement);
  const o12 = s13[c19];
  switch (n16) {
    case "ArrowDown":
      a11.preventDefault();
      if (c19 + 1 > s13.length - 1) {
        await e12(0, s13);
      } else {
        await e12(c19 + 1, s13);
      }
      setTimeout(() => {
        i12.updateNavItemQueue(i12);
      }, 200);
      break;
    case "ArrowUp":
      a11.preventDefault();
      if (c19 - 1 < 0) {
        await e12(s13.length - 1, s13);
      } else {
        await e12(c19 - 1, s13);
      }
      setTimeout(() => {
        i12.updateNavItemQueue(i12);
      }, 200);
      break;
    case "ArrowRight":
      a11.preventDefault();
      if (o12.nodeName == "GCDS-NAV-GROUP" && !o12.hasAttribute("open")) {
        await t23(o12, i12);
      }
      break;
    case "ArrowLeft":
    case "Escape":
      a11.preventDefault();
      if (o12.nodeName == "GCDS-NAV-GROUP" && o12.hasAttribute("open")) {
        await t23(o12, i12);
      } else if (o12.parentNode.nodeName == "GCDS-NAV-GROUP") {
        await t23(o12.parentNode, i12);
      } else if (o12.parentNode == i12 && await o12.parentNode.getNavSize() == "mobile") {
        await t23(s13[s13.length - 1], i12);
      }
      break;
    case "Tab":
      if (await i12.getNavSize() == "mobile") {
        if (a11.shiftKey) {
          if (c19 == s13.length - 1 && o12.hasAttribute("open")) {
            a11.preventDefault();
            await e12(s13.length - 2, s13);
          }
        } else {
          if (c19 == s13.length - 2) {
            a11.preventDefault();
            await e12(s13.length - 1, s13);
          }
        }
      }
      setTimeout(() => {
        i12.updateNavItemQueue(i12);
      }, 200);
      break;
    case "Enter":
    case " ":
      if (o12.nodeName == "GCDS-NAV-GROUP") {
        a11.preventDefault();
        await t23(o12, i12);
      }
      break;
  }
}
async function e12(a11, e16) {
  if (e16[a11].nodeName == "GCDS-NAV-LINK") {
    e16[a11].focusLink();
  } else if (e16[a11].nodeName == "GCDS-NAV-GROUP") {
    e16[a11].focusTrigger();
  }
}
async function t23(a11, t26) {
  const i12 = a11;
  if (i12.hasAttribute("open")) {
    await i12.toggleNav();
    i12.focusTrigger();
    t26.updateNavItemQueue(t26);
  } else {
    await i12.toggleNav();
    setTimeout(async () => {
      await e12(0, document.activeElement == t26 ? t26.children : i12.children);
    }, 10);
    t26.updateNavItemQueue(t26);
  }
}
async function i11(a11) {
  const e16 = Array.from(a11.children);
  e16.forEach(async (a12) => {
    if (a12.nodeName == "GCDS-NAV-GROUP" && a12.open) {
      const t26 = await i11(a12);
      e16.splice(e16.indexOf(a12) + 1, 0, ...t26);
    }
  });
  return e16;
}

// node_modules/@gcds-core/components/dist/components/gcds-side-nav.js
var l15 = { en: { closeTrigger: "Close", menuLabel: "Menu", navLabel: " - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu." }, fr: { closeTrigger: "Fermer", menuLabel: "Menu", navLabel: " - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement." } };
var h16 = "@layer reset, default, desktop, mobile;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}}@layer default{:host{width:100%}:host .gcds-side-nav__heading{color:var(--gcds-side-nav-heading-color);font:var(--gcds-side-nav-heading-font);margin-block-end:var(--gcds-side-nav-heading-margin);padding:var(--gcds-side-nav-heading-padding)}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-side-nav{max-width:var(--gcds-side-nav-max-width)}}}@layer mobile{@media only screen and (width < 64em){:host .gcds-side-nav__heading{display:block;height:0;margin:0;overflow:hidden;padding:0;width:0}}}";
var u13 = Et(class e13 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.navItems = [];
  }
  async focusInListener(e16) {
    if (this.el.contains(e16.target) && !this.navSize) {
      const e17 = window.matchMedia("screen and (min-width: 64em)");
      const s13 = this.el;
      const t26 = this.mobile;
      if (e17.matches) {
        this.navSize = "desktop";
      } else {
        this.navSize = "mobile";
      }
      await this.updateNavItemQueue(this.el);
      e17.addEventListener("change", async function(e18) {
        if (e18.matches) {
          s13.updateNavSize("desktop");
          await s13.updateNavItemQueue(s13);
          if (t26.hasAttribute("open")) {
            t26.toggleNav();
          }
        } else {
          s13.updateNavSize("mobile");
          await s13.updateNavItemQueue(s13);
        }
      });
    }
  }
  async focusOutListener(e16) {
    if (e16.relatedTarget !== null && e16.relatedTarget !== this.el && !this.el.contains(e16.relatedTarget)) {
      if (this.navSize == "mobile") {
        if (this.mobile.hasAttribute("open")) {
          await this.mobile.toggleNav();
        }
      }
    }
  }
  async keyDownListener(e16) {
    if (this.el.contains(document.activeElement)) {
      a9(e16, this.el, this.navItems);
    }
    if (this.navSize == "mobile" && this.mobile.open == true && e16.key == "Escape") {
      await this.mobile.toggleNav();
    }
  }
  async gcdsClickListener(e16) {
    if (this.el.contains(e16.target)) {
      if (e16.target == this.el && this.navSize == "mobile") {
        await this.updateNavItemQueue(e16.target);
      } else if (e16.target.nodeName == "GCDS-NAV-GROUP" && !e16.target.hasAttribute("open")) {
        await this.updateNavItemQueue(this.el);
      }
    }
  }
  updateLang() {
    const e16 = new MutationObserver((e17) => {
      if (e17[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    e16.observe(this.el, s2);
  }
  async getNavSize() {
    return this.navSize;
  }
  async updateNavSize(e16) {
    this.navSize = e16;
  }
  async updateNavItemQueue(e16, s13) {
    if (s13) {
      const s14 = await i11(e16);
      this.navItems = [e16, ...s14];
    } else {
      this.navItems = await i11(e16);
    }
    if (this.navSize == "mobile") {
      this.navItems = [...this.navItems, this.mobile];
    }
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
  }
  render() {
    const { label: e16, lang: s13 } = this;
    return ye(ge, { key: "8221fa7bc5a7504bc9373dcd791a955ccf7595a8" }, ye("nav", { key: "d03d74cdcf03e78fdfe4ea8f782d44eb0a4c3229", "aria-label": `${e16}${l15[s13].navLabel}`, class: "gcds-side-nav" }, ye("h2", { key: "296c2207b09b4ac48f2d753e03ef1f3f7bbb9443", class: "gcds-side-nav__heading" }, e16), ye("ul", { key: "487bf04ce21f73a22dd12582257463c670025b64" }, ye("gcds-nav-group", { key: "d22d5cad3feca464205e5449175c532ee62756a7", menuLabel: l15[s13].menuLabel, closeTrigger: l15[s13].closeTrigger, openTrigger: l15[s13].menuLabel, class: "gcds-mobile-nav", ref: (e17) => this.mobile = e17, lang: s13 }, ye("slot", { key: "25f76853bdba7ac0b60c871dc29238d2b9321278" })))));
  }
  get el() {
    return this;
  }
  static get style() {
    return h16;
  }
}, [1, "gcds-side-nav", { label: [1], lang: [32], navItems: [32], navSize: [32], getNavSize: [64], updateNavSize: [64], updateNavItemQueue: [64] }, [[4, "focusin", "focusInListener"], [4, "focusout", "focusOutListener"], [4, "keydown", "keyDownListener"], [4, "gcdsClick", "gcdsClickListener"]]]);
function g10() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-side-nav", "gcds-icon", "gcds-nav-group"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-side-nav":
        if (!customElements.get(e17)) {
          customElements.define(e17, u13);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(e17)) {
          t4();
        }
        break;
      case "gcds-nav-group":
        if (!customElements.get(e17)) {
          l11();
        }
        break;
    }
  });
}
var f10 = g10;

// node_modules/@gcds-core/components/dist/components/gcds-signature.js
var p14 = Z2;

// node_modules/@gcds-core/components/dist/components/gcds-sr-only.js
var j5 = o5;

// node_modules/@gcds-core/components/dist/components/gcds-stepper.js
var o11 = { en: { step: "Step", of: "of" }, fr: { step: "Étape", of: "sur" } };
var d14 = "@layer reset, default;@layer reset{:host{display:block}}@layer default{:host .gcds-stepper .gcds-stepper__steps{display:block;font:var(--gcds-stepper-font-desktop);margin:var(--gcds-stepper-margin-desktop)}@media only screen and (width < 48em){:host .gcds-stepper .gcds-stepper__steps{font:var(--gcds-stepper-font-mobile);margin:var(--gcds-stepper-margin-mobile)}}}";
var l16 = Et(class t24 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.tag = "h2";
    this.errors = [];
  }
  validateCurrentStep() {
    if (this.currentStep <= 0 || isNaN(this.currentStep) || this.currentStep > this.totalSteps) {
      this.errors.push("currentStep");
    } else if (this.errors.includes("currentStep")) {
      this.errors.splice(this.errors.indexOf("currentStep"), 1);
    }
  }
  validateTotalSteps() {
    if (this.totalSteps <= 0 || isNaN(this.totalSteps) || this.totalSteps < this.currentStep) {
      this.errors.push("totalSteps");
    } else if (this.errors.includes("totalSteps")) {
      this.errors.splice(this.errors.indexOf("totalSteps"), 1);
    }
  }
  updateLang() {
    const t26 = new MutationObserver((t27) => {
      if (t27[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    t26.observe(this.el, s2);
  }
  validateChildren() {
    if (this.el.innerHTML.trim() == "") {
      this.errors.push("children");
    } else if (this.errors.includes("children")) {
      this.errors.splice(this.errors.indexOf("children"), 1);
    }
  }
  validateRequiredProps() {
    this.validateCurrentStep();
    this.validateTotalSteps();
    this.validateChildren();
    if (this.errors.includes("totalSteps") || this.errors.includes("currentStep") || this.errors.includes("children")) {
      return false;
    }
    return true;
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    const t26 = this.validateRequiredProps();
    if (!t26) {
      a2("gcds-stepper", this.errors);
    }
  }
  render() {
    const { currentStep: t26, lang: e16, totalSteps: i12, tag: a11 } = this;
    return ye(ge, { key: "f1993913f8b72d290795ec115d98c71b632f15ff" }, this.validateRequiredProps() && ye("gcds-heading", { key: "a9e463a3af19661b6288f14fdb50e0370b8ed13b", tag: a11, class: "gcds-stepper", "margin-top": "0", "margin-bottom": "225" }, ye("span", { key: "3a243f6d77c772e72d9d4e5a3220c0e6a6708acd", class: "gcds-stepper__steps" }, `${o11[e16].step} ${t26} ${o11[e16].of} ${i12}`, ye("gcds-sr-only", { key: "3be1e619a4c90784dfa9bb04fd96c9abf6765c7e" }, " : ")), ye("slot", { key: "ba84993194f42e578c15b4c88bd8b85549bc77cb" })));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { currentStep: ["validateCurrentStep"], totalSteps: ["validateTotalSteps"] };
  }
  static get style() {
    return d14;
  }
}, [1, "gcds-stepper", { currentStep: [1026, "current-step"], totalSteps: [1026, "total-steps"], tag: [1], errors: [32], lang: [32] }, void 0, { currentStep: ["validateCurrentStep"], totalSteps: ["validateTotalSteps"] }]);
function h17() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-stepper", "gcds-heading", "gcds-sr-only"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-stepper":
        if (!customElements.get(t27)) {
          customElements.define(t27, l16);
        }
        break;
      case "gcds-heading":
        if (!customElements.get(t27)) {
          d9();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(t27)) {
          o5();
        }
        break;
    }
  });
}
var g11 = h17;

// node_modules/@gcds-core/components/dist/components/gcds-text.js
var a10 = r5;

// node_modules/@gcds-core/components/dist/components/gcds-textarea.js
var w8 = { en: { characters: { left: "Characters left: ", maxlength: "You can enter up to {{num}} characters" } }, fr: { characters: { left: "Caractères restants : ", maxlength: "Vous pouvez saisir jusqu'à {{num}} caractères" } } };
var y4 = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-textarea-wrapper{border:0;margin:0;padding:0}:host .gcds-textarea-wrapper textarea{box-sizing:border-box}}@layer default{:host .gcds-textarea-wrapper{color:var(--gcds-textarea-default-text);font:var(--gcds-textarea-font-desktop);max-width:75ch;transition:color .15s ease-in-out;width:100%}@media only screen and (width < 48em){:host .gcds-textarea-wrapper{font:var(--gcds-textarea-font-mobile)}}:host .gcds-textarea-wrapper textarea{background-color:var(--gcds-textarea-default-background);background-image:none;border:var(--gcds-textarea-border-width) solid;border-radius:var(--gcds-textarea-border-radius);color:var(--gcds-textarea-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-textarea-margin)!important;max-width:100%;min-height:var(--gcds-textarea-min-height);min-width:50%;padding:var(--gcds-textarea-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}}@layer disabled{:host .gcds-textarea-wrapper.gcds-disabled{color:var(--gcds-textarea-disabled-text)}:host .gcds-textarea-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-textarea-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-textarea-wrapper.gcds-disabled textarea:disabled{background-color:var(--gcds-textarea-disabled-background);border-color:var(--gcds-textarea-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-textarea-wrapper .error-message-container{display:block}:host .gcds-textarea-wrapper textarea.gcds-error:not(:focus){border-color:var(--gcds-textarea-danger-border)}}@layer focus{:host .gcds-textarea-wrapper:focus-within textarea:focus{border-color:var(--gcds-textarea-focus-border);box-shadow:var(--gcds-textarea-focus-box-shadow);outline:var(--gcds-textarea-outline-width) solid var(--gcds-textarea-focus-border);outline-offset:var(--gcds-textarea-border-width)}}";
var k5 = Et(class t25 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = Ue(this, "gcdsFocus");
    this.gcdsBlur = Ue(this, "gcdsBlur");
    this.gcdsChange = Ue(this, "gcdsChange");
    this.gcdsInput = Ue(this, "gcdsInput");
    this.gcdsError = Ue(this, "gcdsError");
    this.gcdsValid = Ue(this, "gcdsValid");
    this.internals = this.attachInternals();
    this.htmlValidationErrors = [];
    this.textareaTitle = "";
    this.lastInputTimeStamp = null;
    this.lastInputValue = "";
    this.valueChecker = null;
    this._validator = i5;
    this.hideLimit = false;
    this.disabled = false;
    this.hideLabel = false;
    this.required = false;
    this.rows = 5;
    this.validateOn = "blur";
    this.inheritedAttributes = {};
    this.onFocus = () => {
      this.gcdsFocus.emit();
      this.valueChecker = window.setInterval(() => {
        if (!this.lastInputTimeStamp || Date.now() - 500 >= this.lastInputTimeStamp) {
          this.updateIfValueChanged();
        }
      }, 1e3);
    };
    this.onBlur = () => {
      if (this.validateOn == "blur") {
        this.validate();
      }
      this.gcdsBlur.emit();
      if (this.valueChecker) {
        window.clearInterval(this.valueChecker);
      }
    };
    this.handleInput = (t26, s13) => {
      const e16 = t26.target && t26.target.value;
      this.value = e16;
      this.internals.setFormValue(e16 ? e16 : null);
      this.shadowElement.value = e16;
      if (t26.type === "change") {
        const s14 = new t26.constructor(t26.type, t26);
        this.el.dispatchEvent(s14);
      } else {
        this.updateValidity();
        if (this.maxlength) {
          this.lastInputTimeStamp = Date.now();
        }
      }
      s13.emit(this.value);
    };
  }
  validateDisabledTextarea() {
    if (this.required) {
      this.disabled = false;
    }
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  watchValue(t26) {
    if (this.shadowElement) {
      this.shadowElement.value = t26 || "";
    }
    this.internals.setFormValue(t26 || null);
  }
  validateValidator() {
    this._validator = y2(this.validator);
  }
  get validity() {
    return this.internals.validity;
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  updateIfValueChanged() {
    if (this.shadowElement.value !== this.lastInputValue) {
      this.lastInputValue = this.shadowElement.value;
      setTimeout(() => {
        const t26 = this.el.shadowRoot.querySelector(`#textarea__sr-count-${this.textareaId}`);
        if (t26) {
          t26.textContent = `${w8[this.lang].characters.left}${this.value === void 0 ? this.maxlength : this.maxlength - this.value.length}`;
        }
      }, 1500);
    }
  }
  async validate() {
    m2(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
    if (this.required && !this.internals.checkValidity() || !this.internals.checkValidity()) {
      if (!this.internals.validity.valueMissing) {
        this.errorMessage = p2(this.htmlValidationErrors[0], this.lang, this.el);
        this.textareaTitle = this.errorMessage;
      }
    }
  }
  async checkValidity() {
    return this.internals.checkValidity();
  }
  async getValidationMessage() {
    return this.internals.validationMessage;
  }
  submitListener(t26) {
    if (t26.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError && this.validateOn != "other") {
        t26.preventDefault();
      }
    }
  }
  formResetCallback() {
    if (this.value !== this.initialValue) {
      this.value = this.initialValue;
      if (this.shadowElement) {
        this.shadowElement.value = this.initialValue || "";
      }
      this.internals.setFormValue(this.initialValue || null);
    }
  }
  formStateRestoreCallback(t26) {
    this.internals.setFormValue(t26);
    this.value = t26;
  }
  updateValidity(t26) {
    const s13 = this.shadowElement.validity;
    this.htmlValidationErrors = [];
    for (const t27 in s13) {
      if (s13[t27] === true && t27 !== "valid") {
        this.htmlValidationErrors.push(t27);
      }
    }
    for (const s14 in t26) {
      this.htmlValidationErrors.push(s14);
    }
    const e16 = t26 ? Object.assign(Object.assign({}, this.shadowElement.validity), t26) : this.shadowElement.validity;
    let a11 = null;
    if (this.htmlValidationErrors.length > 0) {
      a11 = p2(this.htmlValidationErrors[0], this.lang, this.el);
    }
    this.internals.setValidity(e16, a11, this.shadowElement);
    this.textareaTitle = a11;
  }
  updateLang() {
    const t26 = new MutationObserver((t27) => {
      if (t27[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    t26.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    this.validateDisabledTextarea();
    this.validateHasError();
    this.validateErrorMessage();
    a3(this.el, "textarea");
    this.validateValidator();
    this.inheritedAttributes = r2(this.el, this.shadowElement, ["placeholder"]);
    this.internals.setFormValue(this.value ? this.value : null);
    this.initialValue = this.value ? this.value : null;
    this.lastInputValue = this.value ? this.value : "";
  }
  componentDidLoad() {
    let t26;
    if (this.value && (this.minlength || this.maxlength)) {
      if (this.minlength && this.value.length < this.minlength) {
        t26 = { tooShort: true };
      } else if (this.maxlength && this.value.length > this.maxlength) {
        t26 = { tooLong: true };
      }
    }
    this.updateValidity(t26);
    if (this.autofocus) {
      requestAnimationFrame(() => {
        var t27;
        (t27 = this.shadowElement) === null || t27 === void 0 ? void 0 : t27.focus();
      });
    }
  }
  render() {
    const { autofocus: t26, cols: s13, disabled: e16, errorMessage: o12, form: d17, hideLabel: h19, hideLimit: l17, hint: c19, label: n16, maxlength: u16, minlength: g13, required: f12, rows: b10, textareaId: m10, value: x5, hasError: p16, inheritedAttributes: v7, lang: y5, name: k6, textareaTitle: E6 } = this;
    const $2 = { maxWidth: `${s13 * 1.5}ch` };
    const j7 = { label: n16, required: f12 };
    const V2 = Object.assign({ name: k6, autofocus: t26, disabled: e16, form: d17, maxlength: u16, minlength: g13, required: f12, rows: b10, title: E6 }, v7);
    if (c19 || o12 || u16) {
      const t27 = c19 ? `hint-${m10} ` : "";
      const s14 = o12 ? `error-message-${m10} ` : "";
      const e17 = u16 ? `textarea__count-${m10} ` : "";
      V2["aria-describedby"] = `${t27}${s14}${e17}${V2["aria-describedby"] ? `${V2["aria-describedby"]}` : ""}`;
    }
    return ye(ge, { key: "5f44ed3469dff257e990ce0350f4fbd8553c9a0d" }, ye("div", { key: "b4ab687437aa45420a5701170f7d3f8aef67a73d", class: `gcds-textarea-wrapper ${e16 ? "gcds-disabled" : ""} ${p16 ? "gcds-error" : ""}` }, ye("gcds-label", Object.assign({ key: "9ece7412c657f8a1c554075912db279a3c8a8c35" }, j7, { "hide-label": h19, "label-for": m10, lang: y5 })), c19 ? ye("gcds-hint", { "hint-id": m10 }, c19) : null, o12 ? ye("gcds-error-message", { messageId: m10 }, o12) : null, ye("textarea", Object.assign({ key: "2a010536fbba3c406b18df2f0dbb5d3e07fd1964" }, V2, { class: p16 ? "gcds-error" : null, id: m10, onBlur: () => this.onBlur(), onFocus: () => this.onFocus(), onInput: (t27) => this.handleInput(t27, this.gcdsInput), onChange: (t27) => this.handleInput(t27, this.gcdsChange), "aria-labelledby": `label-for-${m10}`, "aria-invalid": o12 ? "true" : "false", style: s13 ? $2 : null, ref: (t27) => this.shadowElement = t27 }), x5), u16 ? ye(Ct, null, ye("gcds-sr-only", { tag: "span", id: `textarea__count-${m10}` }, w8[y5].characters.maxlength.replace("{{num}}", u16)), !l17 && ye("gcds-text", { id: `textarea__visual-count-${m10}`, "aria-hidden": "true" }, w8[y5].characters.left, x5 == void 0 ? u16 : u16 - x5.length), ye("gcds-sr-only", { tag: "span" }, ye("span", { id: `textarea__sr-count-${m10}`, role: "status", "aria-atomic": "true" }))) : null));
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { disabled: ["validateDisabledTextarea"], errorMessage: ["validateErrorMessage"], value: ["watchValue"], validator: ["validateValidator"], hasError: ["validateHasError"] };
  }
  static get style() {
    return y4;
  }
}, [81, "gcds-textarea", { autofocus: [516], form: [513], hideLimit: [4, "hide-limit"], maxlength: [514], minlength: [514], cols: [2], disabled: [1028], errorMessage: [1025, "error-message"], hideLabel: [4, "hide-label"], hint: [1], label: [1], name: [1], required: [4], rows: [2], textareaId: [1, "textarea-id"], value: [1025], validator: [1040], validateOn: [1025, "validate-on"], validity: [2064], inheritedAttributes: [32], hasError: [32], lang: [32], validate: [64], checkValidity: [64], getValidationMessage: [64] }, [[4, "submit", "submitListener"]], { disabled: ["validateDisabledTextarea"], errorMessage: ["validateErrorMessage"], value: ["watchValue"], validator: ["validateValidator"], hasError: ["validateHasError"] }]);
function E5() {
  if (typeof customElements === "undefined") {
    return;
  }
  const t26 = ["gcds-textarea", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-sr-only", "gcds-text"];
  t26.forEach((t27) => {
    switch (t27) {
      case "gcds-textarea":
        if (!customElements.get(t27)) {
          customElements.define(t27, k5);
        }
        break;
      case "gcds-error-message":
        if (!customElements.get(t27)) {
          n9();
        }
        break;
      case "gcds-hint":
        if (!customElements.get(t27)) {
          d7();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(t27)) {
          t4();
        }
        break;
      case "gcds-label":
        if (!customElements.get(t27)) {
          n11();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(t27)) {
          o5();
        }
        break;
      case "gcds-text":
        if (!customElements.get(t27)) {
          r5();
        }
        break;
    }
  });
}
var j6 = E5;

// node_modules/@gcds-core/components/dist/components/gcds-top-nav.js
var d15 = { en: { closeTrigger: "Close", menuLabel: "Menu", navLabel: " - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu." }, fr: { closeTrigger: "Fermer", menuLabel: "Menu", navLabel: " - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement." } };
var u14 = "@layer reset, default, desktop;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0}:host ul{padding:0}}@layer default{:host .gcds-top-nav .gcds-top-nav__container{display:flex;flex-direction:column;margin-inline:auto;max-width:var(--gcds-top-nav-max-width);width:90%}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-top-nav{border-block-end:var(--gcds-top-nav-border-width) solid var(--gcds-top-nav-border-color)}:host .gcds-top-nav .gcds-top-nav__container{align-items:flex-end;flex-direction:row}:host .gcds-top-nav .nav-container__list{align-items:flex-end;display:flex;width:fit-content}:host .gcds-top-nav .nav-container__list.nav-list--end{margin-inline-start:auto}}}";
var h18 = Et(class e14 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.alignment = "start";
    this.navItems = [];
  }
  async focusInListener(e16) {
    if (this.el.contains(e16.target) && !this.navSize) {
      const e17 = window.matchMedia("screen and (min-width: 64em)");
      const t26 = this.el;
      const s13 = this.mobile;
      if (e17.matches) {
        this.navSize = "desktop";
      } else {
        this.navSize = "mobile";
      }
      await this.updateNavItemQueue(this.el);
      e17.addEventListener("change", async function(e18) {
        if (e18.matches) {
          t26.updateNavSize("desktop");
          await t26.updateNavItemQueue(t26);
          if (s13.hasAttribute("open")) {
            s13.toggleNav();
            const e19 = t26.querySelectorAll("gcds-nav-group");
            e19.forEach((e20) => {
              if (e20.hasAttribute("open")) {
                e20.toggleNav();
              }
            });
          }
        } else {
          t26.updateNavSize("mobile");
          const e19 = t26.querySelectorAll("gcds-nav-group");
          e19.forEach((e20) => {
            if (e20.hasAttribute("open")) {
              e20.toggleNav();
            }
          });
          await t26.updateNavItemQueue(t26);
        }
      });
    }
  }
  async focusOutListener(e16) {
    if (e16.relatedTarget !== null && e16.relatedTarget !== this.el && !this.el.contains(e16.relatedTarget)) {
      if (this.navSize == "mobile") {
        if (this.mobile.hasAttribute("open")) {
          await this.mobile.toggleNav();
        }
      }
    }
  }
  async keyDownListener(e16) {
    if (this.el.contains(document.activeElement)) {
      a9(e16, this.el, this.navItems);
    } else if (this.navSize == "mobile" && this.mobile.open == true && e16.key == "Escape") {
      await this.mobile.toggleNav();
    }
  }
  async gcdsClickListener(e16) {
    if (this.el.contains(e16.target)) {
      if (e16.target == this.el && this.navSize == "mobile") {
        await this.updateNavItemQueue(e16.target);
      } else if (e16.target.nodeName == "GCDS-NAV-GROUP" && !e16.target.hasAttribute("open")) {
        await this.updateNavItemQueue(e16.target, true);
        e16.target.focusTrigger();
      }
    }
  }
  updateLang() {
    const e16 = new MutationObserver((e17) => {
      if (e17[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    e16.observe(this.el, s2);
  }
  async getNavSize() {
    return this.navSize;
  }
  async updateNavSize(e16) {
    this.navSize = e16;
  }
  async updateNavItemQueue(e16, t26) {
    if (t26) {
      const t27 = await i11(e16);
      this.navItems = [e16, ...t27];
    } else {
      this.navItems = await i11(e16);
    }
    if (e16 == this.el && this.navSize == "mobile") {
      this.navItems = [...this.navItems, this.mobile];
    }
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
  }
  render() {
    const { label: e16, alignment: t26, lang: i12 } = this;
    return ye(ge, { key: "18c2287d2897c0083e18ce0328b9ad3e11b653ab" }, ye("div", { key: "51a67d89ffc0e6bed7f681d6db1ed723a14c1039", class: "gcds-top-nav" }, ye("nav", { key: "320708f41cab0cdfb939b946192e7ed29ba905ba", "aria-label": `${e16}${d15[i12].navLabel}` }, ye("ul", { key: "9cbcfc3fa23425bbc586e852b1933e14758831b6", class: "gcds-top-nav__container" }, ye("gcds-nav-group", { key: "6ab0535a65cf3bd35269e1029eb3372209558d8d", menuLabel: d15[i12].menuLabel, closeTrigger: d15[i12].closeTrigger, openTrigger: d15[i12].menuLabel, class: "gcds-mobile-nav gcds-mobile-nav-topnav", ref: (e17) => this.mobile = e17, lang: i12 }, ye("slot", { key: "9e38ad5476d2936ea73932b3ee843e966536affd", name: "home" }), ye("li", { key: "46c97c91d1b91d44d4e79eec0ffd1e1d1973f372", class: `nav-container__list nav-list--${t26}` }, ye("ul", { key: "7f2a4294e6b3f43b814805c8628de5856b120ff1", class: `nav-container__list nav-list--${t26}` }, ye("slot", { key: "a5e81e5b63fadcd353eef2738cc7455068604c2e" }))))))));
  }
  get el() {
    return this;
  }
  static get style() {
    return u14;
  }
}, [1, "gcds-top-nav", { label: [1], alignment: [1], lang: [32], navItems: [32], navSize: [32], getNavSize: [64], updateNavSize: [64], updateNavItemQueue: [64] }, [[4, "focusin", "focusInListener"], [4, "focusout", "focusOutListener"], [4, "keydown", "keyDownListener"], [4, "gcdsClick", "gcdsClickListener"]]]);
function f11() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-top-nav", "gcds-icon", "gcds-nav-group"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-top-nav":
        if (!customElements.get(e17)) {
          customElements.define(e17, h18);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(e17)) {
          t4();
        }
        break;
      case "gcds-nav-group":
        if (!customElements.get(e17)) {
          l11();
        }
        break;
    }
  });
}
var g12 = f11;

// node_modules/@gcds-core/components/dist/components/gcds-topic-menu.js
var c18 = { en: { buttonLabel: "Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it.", menuLabelFull: "Main menu", menuLabelHidden: "Main ", menuToggle: "Menu" }, fr: { buttonLabel: "Appuyez sur la barre d'espacement pour ouvrir ou sur la touche d'échappement pour fermer le menu. Utilisez les flèches haut et bas pour choisir un élément de sous-menu. Appuyez sur la touche Entrée ou sur la flèche vers la droite pour le développer, ou sur la flèche vers la gauche ou la touche Échap pour le réduire. Utilisez les flèches haut et bas pour choisir un élément de ce niveau et la touche Entrée pour y accéder.", menuLabelFull: "Menu principal", menuLabelHidden: " principal", menuToggle: "Menu" } };
var m9 = { en: `<li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-jobs" aria-expanded="false" href="#">Jobs and the workplace</a><ul id="gc-mnu-jobs" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs.html">Jobs<span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs/opportunities.html">Find a job</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs/training.html">Training</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/hire.html">Hiring and managing employees</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/start-business">Starting a business</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs/workplace.html">Workplace standards</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/pensions.html">Pensions and retirement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/ei.html">Employment Insurance benefits and leave</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-jobs-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-jobs-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/employment-social-development/programs/ei/ei-list/ei-roe/access-roe.html">View your Records of Employment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/employment-social-development/services/sin.html">Apply for a Social Insurance Number (SIN)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/employment-social-development/services/foreign-workers.html">Hire a temporary foreign worker</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html">Immigrate as a skilled worker</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-cit" aria-expanded="false" href="#">Immigration and citizenship</a><ul id="gc-mnu-cit" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration<span class="hidden-xs hidden-sm">and citizenship</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application.html">My application</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html">Visit</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html">Immigrate</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html">Work</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html">Study</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html">Citizenship</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html">New immigrants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians.html">Canadians</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees.html">Refugees and asylum</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/immigration-citizenship/enforcement-violations.html">Enforcement and violations</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-cit-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-cit-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html">Sign in or create an account to apply online</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html">Check your application status</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html">Check application processing times</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides.html">Find an application form</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/english/information/fees/index.asp">Pay your fees</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/english/visit/visas.asp">Find out if you need an eTA or a visa to visit Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/english/helpcentre/index-featured-can.asp">Have questions? Find answers in the Help Centre</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-travel" aria-expanded="false" href="#">Travel and tourism</a><ul id="gc-mnu-travel" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/">Travel<span class="hidden-xs hidden-sm">and tourism</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/travelling/advisories">Travel advice and advisories</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/travel-covid">COVID-19: Travel, testing and borders</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html?outside">Visit Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/travelling">Travel outside Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/air">Air travel</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/returning">Return to Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html">Canadian passports and travel documents</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/canadian-tourism">Canadian attractions, events and experiences</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/assistance">Assistance outside Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/stay-connected">Stay connected</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-travel-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-travel-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/assistance/emergency-assistance">Emergency assistance abroad</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cic.gc.ca/english/visit/visas.asp">Find out if you need a visa to travel to Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html">Apply for an eTA</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/services/travel-voyage/prog/nexus/menu-eng.html">Apply for NEXUS</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/travelling/registration">Register as a Canadian abroad</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/travelling/documents/travel-insurance">Travel insurance</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-biz" aria-expanded="false" href="#">Business and industry</a><ul id="gc-mnu-biz" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business.html">Business<span class="hidden-xs hidden-sm">and industry</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/start.html">Starting a business</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/grants.html">Business grants and financing</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/taxes.html">Business taxes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/federal-corporations.html">Federal corporations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/hire.html">Hiring and managing employees</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/trade.html">International trade and investment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/permits.html">Permits, licences and regulations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/doing-business.html">Doing business with government</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/innovation.html">R&D and innovation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/research.html">Research and business intelligence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/ip.html">Intellectual property and copyright</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/maintaingrowimprovebusiness.html">Maintaining your business</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/protecting.html">Protecting your business</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/bankruptcy.html">Insolvency for business</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-biz-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-biz-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.ic.gc.ca/app/scr/cc/CorporationsCanada/fdrlCrpSrch.html?locale=en_CA">Find a corporation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/prog/manif/portal-portail-eng.html">Report your imported goods</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ised-isde.canada.ca/cipo/trademark-search/srch?null=&lang=eng">Search for trademarks</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2018/html/tblmod-1-eng.html">Review custom tariffs for importing goods</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.ic.gc.ca/opic-cipo/cpd/eng/introduction.html">Find a patent</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/comm-eng.html">Import and export from Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ic.gc.ca/eic/site/cd-dgc.nsf/eng/h_cs03922.html">Name a business</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.ic.gc.ca/app/scr/cc/CorporationsCanada/hm.html?locale=en_CA">Make changes to your corporation (Online Filing Centre)</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-benny" aria-expanded="false" href="#">Benefits</a><ul id="gc-mnu-benny" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits.html">Benefits<span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/ei.html">Employment Insurance benefits and leave</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/family.html">Family and caregiving benefits</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/publicpensions.html">Public pensions</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/education.html">Student aid and education planning</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/housing.html">Housing benefits</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/disability.html">Disability benefits</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.canada.ca/en/services/benefits/audience.html">Benefits by audience</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/calendar.html">Benefits payment dates</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://benefitsfinder.services.gc.ca/hm?GoCTemplateCulture=en-CA">Benefits finder</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/notify-government-death.html">Notify the government of a death</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-benny-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-benny-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit.html">Apply for Employment Insurance</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans.html">Apply for student loans and grants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/government/sign-in-online-account.html">Sign in to a Government of Canada online account</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.tpsgc-pwgsc.gc.ca/recgen/txt/depot-deposit-eng.html">Sign up for direct deposit</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/ei/ei-internet-reporting.html">Submit your EI report</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cra-arc.gc.ca/bnfts/clcltr/cfbc-eng.html">Child and family benefits calculators</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-health" aria-expanded="false" href="#">Health</a><ul id="gc-mnu-health" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health.html">Health<span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/food-nutrition.html">Food and nutrition</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/public-health/services/diseases.html">Diseases and conditions</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/public-health/topics/immunization-vaccines.html">Vaccines and immunization</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/drug-health-products.html">Drug and health products</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/product-safety.html">Product safety</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/health-risks-safety.html">Health risks and safety</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/healthy-living.html">Healthy living</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/aboriginal-health.html">Indigenous health</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/health-system-services.html">Health system and services</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/science-research-data.html">Science, research and data</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-health-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-health-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis/industry-licensees-applicants/licensed-cultivators-processors-sellers.html">Licensed cultivators, processors and seller of cannabis</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://healthycanadians.gc.ca/recall-alert-rappel-avis/index-eng.php">Food and product recalls and safety alerts</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/health-canada/services/canada-food-guides.html">Canada's food guide</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-taxes" aria-expanded="false" href="#">Taxes</a><ul id="gc-mnu-taxes" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes.html">Taxes<span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/income-tax.html">Income tax</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html">GST/HST</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll.html">Payroll</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/business-number.html">Business number</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/savings-and-pension-plans.html">Savings and pension plans</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/child-and-family-benefits.html">Tax credits and benefits for individuals</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/excise-taxes-duties-and-levies.html">Excise taxes, duties, and levies</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/charities.html">Charities and giving</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-taxes-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-taxes-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html">My Account</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/business-account.html">My Business Account</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/e-services/represent-a-client.html">Represent a Client</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/gst-hst-netfile.html">File a GST/HST return (NETFILE)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/make-a-payment-canada-revenue-agency.html">Make a payment to the Canada Revenue Agency</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/benefit-payment-dates.html">Find the next benefit payment date</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-enviro" aria-expanded="false" href="#">Environment and natural resources</a><ul id="gc-mnu-enviro" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment.html">Environment<span class="hidden-xs hidden-sm">and natural resources</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/weather.html">Weather, climate and hazards</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/energy.html">Energy</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/natural-resources.html">Natural resources</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://agriculture.canada.ca/en/agriculture-and-environment">Agriculture and the environment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/fisheries.html">Fisheries</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/wildlife-plants-species.html">Wildlife, plants and species</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/pollution-waste-management.html">Pollution and waste management</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/conservation.html">Environmental conservation and protection</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-enviro-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-enviro-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://weather.gc.ca/canada_e.html">Local weather forecast</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.nrcan.gc.ca/energy/efficiency/transportation/20996">Fuel-efficient vehicles</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.nrcan.gc.ca/homes">Home energy efficiency</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry.html">Species at risk</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/environment-climate-change/services/seasonal-weather-hazards.html">Prepare for severe weather</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-defence" aria-expanded="false" href="#">National security and defence</a><ul id="gc-mnu-defence" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence.html"><span class="hidden-xs hidden-sm">National security and defence</span><span class="visible-xs-inline visible-sm-inline">Defence: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/nationalsecurity.html">National security</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/caf.html">Canadian Armed Forces</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/defence-equipment-purchases-upgrades.html">Defence equipment purchases and upgrades</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/transportation-security.html">Transportation security</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/securingborder.html">Securing the border</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/cybersecurity.html">Cyber security</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/jobs.html">Jobs in national security and defence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/government/publicservice/benefitsmilitary.html">Services and benefits for the military</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-defence-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-defence-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://forces.ca/en/careers/">Jobs in the Canadian Armed Forces</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/department-national-defence/services/military-history/history-heritage/insignia-flags/ranks/rank-appointment-insignia.html">Military ranks</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/caf/equipment.html">Defence equipment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.publicsafety.gc.ca/cnt/ntnl-scrt/cntr-trrrsm/lstd-ntts/crrnt-lstd-ntts-en.aspx">Current list of terrorist entities</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/department-national-defence/services/cadets-junior-canadian-rangers/cadets/join-us.html">Join the Cadet Program</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://dgpaapp.forces.gc.ca/en/canada-defence-policy/index.asp">Canada's Defence policy</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-culture" aria-expanded="false" href="#">Culture, history and sport</a><ul id="gc-mnu-culture" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture.html">Culture<span class="hidden-xs hidden-sm">, history and sport</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/canadian-heritage/services/funding.html">Funding - Culture, history and sport</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/events-celebrations-commemorations.html">Events, celebrations and commemorations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/cultural-attractions.html">Cultural landmarks and attractions</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/canadian-identity-society.html">Canadian identity and society</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/sport.html">Sport</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/history-heritage.html">History and heritage</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/arts-media.html">Arts and media</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/cultural-youth-programs.html">Cultural youth programs</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/cultural-trade-investment.html">Cultural trade and investment</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-culture-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-culture-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.veterans.gc.ca/eng/remembrance/memorials/canadian-virtual-war-memorial">Visit the Canadian Virtual War Memorial</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/canadian-identity-society/anthems-symbols.html">Anthems and symbols of Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://crtc.gc.ca/eng/8045/d2018.htm">Find a CRTC decision</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://library-archives.canada.ca/eng/collection/research-help/genealogy-family-history/pages/genealogy-family-history.aspx">Research your family history</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.bac-lac.gc.ca/eng/census/Pages/census.aspx">Search census records</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/cultural-attractions/attractions-canada-capital.html">Landmarks and attractions in Canada's capital</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-policing" aria-expanded="false" href="#">Policing, justice and emergencies</a><ul id="gc-mnu-policing" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing.html">Policing<span class="hidden-xs hidden-sm">, justice and emergencies</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/police/index.html">Policing</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/justice.html">Justice</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/emergencies.html">Emergencies</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/corrections.html">Corrections</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/parole.html">Parole, record suspension, expungement and clemency</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/victims.html">Victims of crime</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-policing-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-policing-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.rcmp-grc.gc.ca/cfp-pcaf/online_en-ligne/index-eng.htm">Apply/Renew a firearms licence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.rcmp-grc.gc.ca/en/criminal-record-checks">Get a criminal records check</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/parole-board/services/record-suspensions/official-pbc-application-guide-and-forms.html">Apply for a criminal record suspension</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.getprepared.gc.ca/cnt/hzd/drng-en.aspx">What to do during an emergency</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/police/community-safety-policing/impaired-driving.html">Know the law on impaired driving</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/police/help-solve-crime.html">Help solve a crime</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-trans" aria-expanded="false" href="#">Transport and infrastructure</a><ul id="gc-mnu-trans" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/transport.html">Transport<span class="hidden-xs hidden-sm">and infrastructure</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/aviation.html">Aviation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/marine.html">Marine transportation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/road.html">Road transportation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/rail.html">Rail transportation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/dangerous-goods.html">Dangerous goods</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/infrastructure.html">Infrastructure</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-trans-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-trans-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/transport/zero-emission-vehicles.html">Zero-emission vehicles</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/aviation/drone-safety.html">Drone safety</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://tc.canada.ca/en/aviation/aviation-security/what-not-bring-plane">What you can't bring on an airplane</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/eng/marinesafety/oep-vesselreg-menu-728.htm">Register your vessel</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/road/child-car-seat-safety.html">Child car seat safety</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/eng/tdg/clear-tofc-211.htm">Transporting dangerous goods - Regulations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/eng/acts-regulations/regulations-sor96-433.htm">Canadian Aviation Regulations</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-canworld" aria-expanded="false" href="#">Canada and the world</a><ul id="gc-mnu-canworld" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world<span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/offices-bureaux/index.aspx?lang=eng">International offices and emergency contacts</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/study_work_travel-etude_travail_voyage/index.aspx?lang=eng">Study, work and travel worldwide</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/country-pays/index.aspx?lang=eng">Information by countries and territories</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/stories-histoires/index.aspx?lang=eng">Stories</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/international_relations-relations_internationales/index.aspx?lang=eng">International relations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/index.aspx?lang=eng">Global issues and international assistance</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/funding-financement/index.aspx?lang=eng">Funding for international initiatives</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/trade.html">International trade and investment</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-canworld-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-canworld-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.educanada.ca/scholarships-bourses/non_can/index.aspx?lang=eng">Find a Canadian scholarship as an international student</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.treaty-accord.gc.ca/index.aspx?Lang=eng">International treaties signed by Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.educanada.ca/index.aspx?lang=eng">Find international study or research opportunities in Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/assistance/embassies-consulates">Contact an embassy or consulate</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/protocol-protocole/reps.aspx?lang=eng">Contact a foreign representative in Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/gac-amc/about-a_propos/services/authentication-authentification/step-etape-1.aspx?lang=eng">Authenticate a document</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-money" aria-expanded="false" href="#">Money and finances</a><ul id="gc-mnu-money" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance.html"><span class="hidden-xs hidden-sm">Money and finances</span><span class="visible-xs-inline visible-sm-inline">Finance: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/manage.html">Managing your money</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/debt.html">Debt and borrowing</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/savings.html">Savings and investments</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/educationfunding.html">Education funding</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/pensions.html">Pensions and retirement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/fraud.html">Protection from frauds and scams</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/tools.html">Financial tools and calculators</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/financial-consumer-agency/services/financial-literacy-programs.html">Financial literacy programs</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/consumer-affairs.html">Consumer affairs</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/bankruptcy.html">Insolvency</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/government/system/finances.html">Government finances</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/grants.html">Business grants and financing</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/permits/federallyregulatedindustrysectors/financialservicesregulation.html">Financial and money services regulation</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-money-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-money-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.ic.gc.ca/app/scr/bsf-osb/ins/login.html?lang=eng">Find a bankruptcy or insolvency record</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs/education/student-financial-aid/student-loan.html">Student loans</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.tpsgc-pwgsc.gc.ca/recgen/txt/depot-deposit-eng.html">Set up direct deposit</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages.html">Mortgages</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score.html">Credit report and scores</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://itools-ioutils.fcac-acfc.gc.ca/BP-PB/budget-planner">Make a budget</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">Rates and contribution limits</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-science" aria-expanded="false" href="#">Science and innovation</a><ul id="gc-mnu-science" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science.html">Science<span class="hidden-xs hidden-sm">and innovation</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/researchfunding.html">Research funding and awards</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/sciencesubjects.html">Science subjects</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/open-data.html">Open data, statistics and archives</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/institutes.html">Research institutes and facilities</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/innovation.html">R&D and innovation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/ip.html">Intellectual property and copyright</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/scientistsdirectory.html">Directory of scientists and research professionals</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/educationalresources.html">Science education resources</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-science-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-science-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada/codes-canada-publications">National building codes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://nrc.canada.ca/en/web-clock/">Official times across Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://nrc.canada.ca/en/research-development/products-services/software-applications/sun-calculator/">Check sunrise and sunset times</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://nrc.canada.ca/en/support-technology-innovation/financial-support-technology-innovation-through-nrc-irap">Grants for technological innovation (IRAP)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://science-libraries.canada.ca/eng/home/">Federal Science Library</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://asc-csa.gc.ca/eng/astronomy/auroramax/hd-480.asp">Live view of northern lights cam</a></li></ul></li></ul></li>`, fr: `<li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-jobs" aria-expanded="false" href="#">Emplois et milieu de travail</a><ul id="gc-mnu-jobs" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/emplois.html">Emplois<span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/emplois/opportunites.html">Trouver un emploi</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/emplois/formation.html">Formation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/gestion-entreprise">Embauche et gestion de personnel</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/demarrage-entreprise">Démarrage d'entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/emplois/milieu-travail.html">Normes en milieu de travail</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/pensions.html">Pensions et retraite</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/ae.html">Prestations d'assurance-emploi et congés</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-jobs-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-jobs-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/emploi-developpement-social/programmes/assurance-emploi/ae-liste/assurance-emploi-re/acceder-re.html">Voir vos Relevés d’emploi</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/emploi-developpement-social/services/numero-assurance-sociale.html">Demander un numéro d’assurance-sociale</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/emploi-developpement-social/services/travailleurs-etrangers.html">Embaucher un travailleur étranger temporaire</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express.html">Immigrer en tant que travailleur qualifié</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-cit" aria-expanded="false" href="#">Immigration et citoyenneté</a><ul id="gc-mnu-cit" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/immigration-citoyennete.html">Immigration<span class="hidden-xs hidden-sm">et citoyenneté</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande.html">Ma demande</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/visiter-canada.html">Visiter</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada.html">Immigrer</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/travailler-canada.html">Travailler</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada.html">Étudier</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/citoyennete-canadienne.html">Citoyenneté</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/nouveaux-immigrants.html">Nouveaux immigrants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/canadiens.html">Canadiens</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/refugies.html">Réfugiés et octroi de l’asile</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/immigration-citoyennete/application-loi-infractions.html">Application de la loi et infractions</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-cit-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-cit-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/compte.html">Se connecter ou créer un compte pour présenter une demande en ligne</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/verifier-etat.html">Vérifier l’état de sa demande</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/francais/information/delais/index.asp">Vérifier les délais de traitement des demandes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/formulaires-demande-guides.html">Trouver un formulaire de demande</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/francais/information/frais/index.asp">Payer les frais</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/francais/visiter/visas.asp">Déterminer si vous avez besoin d’une AVE ou d’un visa pour visiter le Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/francais/centre-aide/index-en-vedette-can.asp">Trouver réponse à ses questions dans le Centre d’aide</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-travel" aria-expanded="false" href="#">Voyage et tourisme</a><ul id="gc-mnu-travel" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/">Voyage<span class="hidden-xs hidden-sm">et tourisme</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/voyager/avertissements">Conseils aux voyageurs et avertissements</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/voyage-covid">COVID-19 : voyage, dépistage et frontières</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/visiter-canada.html?outside">Visiter le Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/voyager">Voyager à l’étranger</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/avion">Voyager en avion</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/retour">Retour au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/passeports-canadiens.html">Passeports et documents de voyage canadiens</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/tourisme-canadien">Attraits touristiques, événements et expériences au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/assistance">Assistance à l’extérieur du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/restez-branches">Restez branchés</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-travel-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-travel-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/assistance/assistance-d-urgence">Assistance d'urgence à l'étranger</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cic.gc.ca/francais/visiter/visas.asp">Vérifiez si vous avez besoin d’un visa pour voyager au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/visiter-canada/ave.html">Présentez une demande d’Autorisation de voyage électronique (AVE)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/services/travel-voyage/prog/nexus/menu-fra.html">Adhérez à NEXUS</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/voyager/inscription">Inscrivez-vous comme Canadien à l’étranger</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/voyager/documents/assurance-voyage">Assurance voyage</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-biz" aria-expanded="false" href="#">Entreprises et industrie</a><ul id="gc-mnu-biz" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises.html">Entreprises<span class="hidden-xs hidden-sm">et industrie</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/lancer.html">Démarrage d'entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/subventions.html">Subventions et financement pour les entreprises</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/impots.html">Taxes et impôt des entreprises</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/societes-de-regime-federal.html">Sociétés de régime fédéral</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/engager.html">Embauche et gestion de personnel</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/commerce.html">Commerce international et investissements</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/permis.html">Permis, licences et règlements</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/faire-affaire.html">Faire affaire avec le gouvernement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/innovation.html">Recherche-développement et innovation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/recherche.html">Recherche et renseignements d'affaires</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/pi.html">Propriété intellectuelle et droit d'auteur</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/maintenirfairecroitreameliorerentreprise.html">Administration de votre entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/proteger.html">Protection de votre entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/faillites.html">Insolvabilité pour les entreprises</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-biz-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-biz-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ised-isde.canada.ca/cc/lgcy/fdrlCrpSrch.html?lang=fra">Trouver une société</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/prog/manif/portal-portail-fra.html">Déclarer vos produits importés</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ised-isde.canada.ca/opic/recherche-marques/srch?null=&lang=fre">Chercher des marques de commerce</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2018/html/tblmod-1-fra.html">Réviser les tarifs des douanes pour l’importation de produits</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.ic.gc.ca/opic-cipo/cpd/fra/introduction.html">Trouver un brevet</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/comm-fra.html">Importer et exporter à partir du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ic.gc.ca/eic/site/cd-dgc.nsf/fra/h_cs03922.html">Trouver un nom pour votre compagnie</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ised-isde.canada.ca/cc/lgcy/hm.html?locale=fr_CA">Apporter des changements à votre société (Centre de dépôt en ligne)</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-benny" aria-expanded="false" href="#">Prestations</a><ul id="gc-mnu-benny" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations.html">Prestations<span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/ae.html">Prestations d&#39;assurance-emploi et cong&eacute;s</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/famille.html">Prestations pour les familles et les proches aidants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/pensionspubliques.html">Pensions publiques</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/etudes.html">Aide financière aux étudiants et planification des études</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/logement.html">Prestations relatives au logement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/handicap.html">Prestations d’invalidité</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.canada.ca/fr/services/prestations/clientele.html">Prestations par clientèle</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/calendrier.html">Dates de paiement des prestations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://benefitsfinder.services.gc.ca/hm?GoCTemplateCulture=fr-CA&cl=true">Chercheur de prestations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/aviser-gouvernement-deces.html">Aviser le gouvernement d’un décès</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-benny-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-benny-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/ae/assurance-emploi-reguliere.html">Présenter une demande d’assurance-emploi</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/education/aide-etudiants/bourses-prets.html">Faire une demande de bourses et de prêts d’études</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/gouvernement/ouvrir-session-dossier-compte-en-ligne.html">Ouvrir une session pour un compte en ligne du gouvernement du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.tpsgc-pwgsc.gc.ca/recgen/txt/depot-deposit-fra.html">Inscrivez-vous au dépôt direct</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/calculateur-prestations-enfants-familles.html">Calculateur de prestations pour enfants et familles</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/ae/assurance-emploi-declaration-internet.html">Soumettre une déclaration d’assurance-emploi</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-health" aria-expanded="false" href="#">Santé</a><ul id="gc-mnu-health" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante.html">Santé<span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/aliments-et-nutrition.html">Aliments et nutrition</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/sante-publique/services/maladies.html">Maladies et affections</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/sante-publique/sujets/immunisation-et-vaccins.html">Vaccins et immunisation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/medicaments-et-produits-sante.html">Médicaments et produits de santé</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/securite-produits.html">Sécurité des produits</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/securite-et-risque-pour-sante.html">Sécurité et risque pour la santé</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/vie-saine.html">Vie saine</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/sante-autochtones.html">Santé des Autochtones</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/systeme-et-services-sante.html">Système et services de santé</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/science-recherche-et-donnees.html">Science, recherche et données</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-health-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-health-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/sante-canada/services/drogues-medicaments/cannabis/titulaires-licences-demandeurs-industrie/cultivateurs-transformateurs-vendeurs-autorises.html">Cultivateurs, transformateurs et vendeurs de cannabis qui détiennent une licence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.canadiensensante.gc.ca/recall-alert-rappel-avis/index-fra.php">Rappels d'aliments et de produits et alertes de sécurité</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/sante-canada/services/guides-alimentaires-canada.html">Guide alimentaire du Canada</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-taxes" aria-expanded="false" href="#">Impôts</a><ul id="gc-mnu-taxes" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots.html">Impôts<span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/impot-sur-le-revenu.html">Impôt sur le revenu</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/tps-tvh-entreprises.html">TPS/TVH</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/retenues-paie.html">Retenues sur la paie</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/numero-dentreprise.html">Numéro d'entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/regimes-depargne-et-de-pension.html">Régimes d’épargne et de pension</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/prestations-pour-enfants-et-familles.html">Crédits d’impôt et prestations pour les particuliers</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/taxes-daccise-droits-et-prelevements.html">Taxes d’accise, droits et prélèvements</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/bienfaisance.html">Organismes de bienfaisance et dons</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-taxes-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-taxes-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-numeriques-particuliers/dossier-particuliers.html">Mon dossier</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-numeriques-entreprises/dossier-entreprise.html">Mon dossier d'entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/services-electroniques/representer-client.html">Représenter un client</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-numeriques-entreprises/impotnet-tps-tvh.html">Transmettre une déclaration de TPS/TVH (IMPÔTNET)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/faire-paiement-a-agence-revenu-canada.html">Faire un paiement à l'Agence du revenu du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/dates-versement-prestations.html">Trouver la date du prochain versement des prestations</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-enviro" aria-expanded="false" href="#">Environnement et ressources naturelles</a><ul id="gc-mnu-enviro" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement.html">Environnement<span class="hidden-xs hidden-sm">et ressources naturelles</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/meteo.html">Météo, climat et catastrophes naturelles</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/energie.html">Énergie</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/ressources-naturelles.html">Ressources naturelles</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://agriculture.canada.ca/fr/agriculture-environnement">Agriculture et environnement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/peches.html">Pêches</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/faune-flore-especes.html">Faune, flore et espèces</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/pollution-gestion-dechets.html">Pollution et gestion des déchets</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/conservation.html">Conservation et protection de l'environnement</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-enviro-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-enviro-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://meteo.gc.ca/canada_f.html">Prévisions météo locales</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.rncan.gc.ca/energie/efficacite/transports/20997">Véhicules écoénergétiques</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.rncan.gc.ca/maisons">Efficacité énergétique des maisons</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/environnement-changement-climatique/services/registre-public-especes-peril.html">Espèces en péril</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/environnement-changement-climatique/services/meteo-saisonniere-dangereuse.html">Préparation aux conditions météorologiques dangereuses</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-defence" aria-expanded="false" href="#">Sécurité nationale et défense</a><ul id="gc-mnu-defence" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense.html"><span class="hidden-xs hidden-sm">Sécurité nationale et défense</span><span class="visible-xs-inline visible-sm-inline">Défense : accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/securitenationale.html">Sécurité nationale</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/fac.html">Forces armées canadiennes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/achat-mise-a-niveau-equipement-defense.html">Achat et mise à niveau d’équipement de la Défense</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/surete-transports.html">Sûreté des transports</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/securiserfrontiere.html">Sécuriser la frontière</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/cybersecurite.html">Cybersécurité</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/emplois.html">Emplois en sécurité nationale et en défense</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/gouvernement/fonctionpublique/avantagesmilitaires.html">Services et avantages sociaux du personnel militaire</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-defence-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-defence-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://forces.ca/fr/carrieres/">Emplois dans les Forces armées canadiennes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/ministere-defense-nationale/services/histoire-militaire/histoire-patrimoine/insignes-drapeaux/grades/insignes-grade-fonction.html">Grades militaires</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/fac/equipement.html">Équipement de la Défense</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/ministere-defense-nationale/services/cadets-rangers-juniors-canadiens/cadets/rejoignez-nous.html">Joignez-vous aux cadets</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://dgpaapp.forces.gc.ca/fr/politique-defense-canada/index.asp">Politique de défense du Canada</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-culture" aria-expanded="false" href="#">Culture, histoire et sport</a><ul id="gc-mnu-culture" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture.html">Culture<span class="hidden-xs hidden-sm">, histoire et sport</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/patrimoine-canadien/services/financement.html">Financement - Culture, histoire et sport</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/evenements-celebrations-commemorations.html">Événements, célébrations et commémorations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/attraits-culturels.html">Lieux et attraits culturels</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/identite-canadienne-societe.html">Identité canadienne et société</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/sport.html">Sport</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/histoire-patrimoine.html">Histoire et patrimoine</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/arts-media.html">Arts et média</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/programmes-culturels-jeunes.html">Programmes culturels pour les jeunes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/commerce-investissement-culturels.html">Commerce et investissement culturels</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-culture-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-culture-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.veterans.gc.ca/fra/remembrance/memorials/canadian-virtual-war-memorial">Visitez le Mémorial virtuel de guerre du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/identite-canadienne-societe/hymnes-symboles.html">Hymnes et symboles du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://crtc.gc.ca/fra/8045/d2018.htm">Trouvez une décision du CRTC</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://bibliotheque-archives.canada.ca/fra/collection/aide-recherche/genealogie-histoire-famille/Pages/genealogie-histoire-famille.aspx">Faites des recherches sur votre histoire familiale</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.bac-lac.gc.ca/fra/recensements/Pages/recensements.aspx">Cherchez des documents de recensement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/attraits-culturels/attraits-capitale-canada.html">Lieux et attraits dans la capitale du Canada</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-policing" aria-expanded="false" href="#">Services de police, justice et urgences</a><ul id="gc-mnu-policing" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police.html">Services de police<span class="hidden-xs hidden-sm">, justice et urgences</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/servicespolice.html">Services de police</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/justice.html">Justice</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/urgences.html">Urgences</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/correctionnels.html">Services correctionnels</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/liberationconditionnelle.html">Libération conditionnelle, suspension du casier, radiation et clémence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/victimes.html">Victimes d'actes criminels</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-policing-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-policing-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.rcmp-grc.gc.ca/cfp-pcaf/online_en-ligne/index-fra.htm">Demander ou renouveler un permis d'arme à feu</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.rcmp-grc.gc.ca/fr/verification-casier-judiciaire">Obtenir une attestation de vérification de casier judiciaire</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/commission-liberations-conditionnelles/services/suspension-du-casier/guide-et-formulaires-de-demande.html">Demander la suspension d’un casier judiciaire</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.preparez-vous.gc.ca/cnt/hzd/drng-fr.aspx">Que faire durant une urgence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/servicespolice/securite-communautaire-police/conduite-facultes-affaiblies.html">Connaissez la loi sur la conduite avec facultés affaiblies</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/servicespolice/aider-resoudre-un-crime.html">Aidez à résoudre un crime</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-trans" aria-expanded="false" href="#">Transport et infrastructure</a><ul id="gc-mnu-trans" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/transport.html">Transport<span class="hidden-xs hidden-sm">et infrastructure</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/aviation.html">Aviation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/maritime.html">Transport maritime</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/routier.html">Transport routier</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/ferroviaire.html">Transport ferroviaire</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/marchandises-dangereuses.html">Marchandises dangereuses</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/infrastructures.html">Infrastructure</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-trans-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-trans-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/transport/vehicules-zero-emission.html">Véhicules zéro émission</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/aviation/securite-drones.html">Sécurité des drones</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/surete-transports/aerienne/articles-interdits-bord-avion.html">Articles interdits à bord d’un avion</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fra/securitemaritime/epe-immabatiments-menu-728.htm">Immatriculer votre bâtiment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/routier/securite-sieges-auto-enfants.html">Sécurité des sièges d'auto pour enfants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fra/tmd/clair-tdesm-211.htm">Transporter des marchandises dangereuses - Règlements</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/transports-canada/organisation/lois-reglements/reglements/sor-96-433.html">Règlement de l’aviation canadien</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-canworld" aria-expanded="false" href="#">Canada et le monde</a><ul id="gc-mnu-canworld" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/index.aspx?lang=fra">Le Canada et le monde<span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/offices-bureaux/index.aspx?lang=fra">Bureaux internationaux et contacts d’urgence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/study_work_travel-etude_travail_voyage/index.aspx?lang=fra">Étude, travail et voyage partout dans le monde</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/country-pays/index.aspx?lang=fra">Information par pays et territoires</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/stories-histoires/index.aspx?lang=fra">Histoires</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/international_relations-relations_internationales/index.aspx?lang=fra">Relations internationales</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/index.aspx?lang=fra">Enjeux mondiaux et aide internationale</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/funding-financement/index.aspx?lang=fra">Financement d’initiatives internationales</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/commerce.html">Commerce international et investissement</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-canworld-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-canworld-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.educanada.ca/scholarships-bourses/non_can/index.aspx?lang=fra">Trouver une bourse d’études canadienne en tant qu’étudiant international</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://treaty-accord.gc.ca/index.aspx?Lang=fra">Traités internationaux signés par le Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.educanada.ca/index.aspx?lang=fra">Trouver des occasions d’étude ou de recherche au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/assistance/ambassades-consulats">Communiquer avec une ambassade ou un consulat</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/protocol-protocole/reps.aspx?lang=fra">Communiquer avec un représentant étranger au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/gac-amc/about-a_propos/services/authentication-authentification/step-etape-1.aspx?lang=fra">Authentifier un document</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-money" aria-expanded="false" href="#">Argent et finances</a><ul id="gc-mnu-money" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance.html"><span class="hidden-xs hidden-sm">Argent et finances</span><span class="visible-xs-inline visible-sm-inline">Finances : accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/gerer.html">Gérer votre argent</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/dettes.html">Dettes et emprunts</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/epargne.html">Épargne et investissement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/financementetudes.html">Financement des études</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/pensions.html">Pensions et retraite</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/fraude.html">Protection contre la fraude et les escroqueries</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/outils.html">Calculatrices et outils financiers</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/programmes-litteratie-financiere.html">Programmes de littératie financière</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/questions-consommation.html">Questions de consommation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/faillite.html">Insolvabilité</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots.html">Impôts</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/gouvernement/systeme/finances.html">Finances publiques</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/subventions.html">Subventions et financement pour les entreprises</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/permis/secteursindustriereglementationfederale/regleservicesfinanciers.html">Réglementation des services financiers et monétaires</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-money-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-money-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.ic.gc.ca/app/scr/bsf-osb/ins/connexion.html?lang=fra">Trouver un dossier de faillite ou d’insolvabilité</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/emplois/education/aide-financiere-etudiants/pret-etudiants.html">Prêts étudiants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.tpsgc-pwgsc.gc.ca/recgen/txt/depot-deposit-fra.html">Inscrivez-vous au dépôt direct</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/hypotheques.html">Obtenir des renseignements sur les hypothèques</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/dossier-pointage-credit.html">Dossiers et cotes de crédit</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://itools-ioutils.fcac-acfc.gc.ca/BP-PB/planificateur-budgetaire">Faire un budget</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/impot/administrateurs-regimes-enregistres/fesp/plafonds-cd-reer-rpdb-celi-mgap.html">Taux et limites de contribution</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-science" aria-expanded="false" href="#">Science et innovation</a><ul id="gc-mnu-science" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science.html">Science<span class="hidden-xs hidden-sm">et innovation</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/financementrecherche.html">Financement, subventions et prix pour la recherche</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/themesscientifiques.html">Thèmes scientifiques</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/donnees-ouvertes.html">Données ouvertes, statistiques et archives</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/instituts.html">Instituts et établissements de recherches</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/innovation.html">R-D et innovation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/pi.html">Propriété intellectuelle et droit d'auteur</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/repertoirescientifiques.html">Répertoire des scientifiques et des professionnels de la recherche</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/ressourcespedagogiques.html">Ressources pédagogiques scientifiques</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-science-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-science-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://cnrc.canada.ca/fr/certifications-evaluations-normes/codes-canada/publications-codes-canada">Code national du bâtiment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://cnrc.canada.ca/fr/horloge-web/">Heures officielles au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://cnrc.canada.ca/fr/recherche-developpement/produits-services/logiciels-applications/calculatrice-soleil/">Trouver les heures de levers et de couchers du soleil</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://cnrc.canada.ca/fr/soutien-linnovation-technologique/soutien-financier-linnovation-technologique-pari-cnrc">Bourses pour l’innovation technologique (PARI)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://science-libraries.canada.ca/fra/accueil/">Bibliothèque scientifique fédérale</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://asc-csa.gc.ca/fra/astronomie/auroramax/hd-480.asp">Aurores boréales en direct</a></li></ul></li></ul></li>` };
var d16 = '@layer reset, default, mobile, xsMobile, focus;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0}}@layer default{:host .gcds-topic-menu__heading,:host .gcds-topic-menu__main{display:inherit;height:0;margin:0;overflow:hidden;width:0}:host .visible-sm-inline{display:none}:host .gcds-topic-menu{font:var(--gcds-topic-menu-font);margin-inline:auto;max-width:var(--gcds-topic-menu-max-width);position:relative;width:90%}:host .gcds-topic-menu button[aria-haspopup=true]{background-color:var(--gcds-topic-menu-button-background);border:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-button-border);color:var(--gcds-topic-menu-button-text);cursor:pointer;font:inherit;margin-inline-start:0;padding:var(--gcds-topic-menu-button-padding);text-transform:uppercase}:host .gcds-topic-menu button[aria-haspopup=true].gcds-topic-menu--home{background-color:var(--gcds-topic-menu-button-home-background);border-color:var(--gcds-topic-menu-button-home-border-color);color:var(--gcds-topic-menu-button-home-text)}:host .gcds-topic-menu button[aria-haspopup=true]:hover,:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]{background-color:var(--gcds-topic-menu-button-expanded-background);border-color:var(--gcds-topic-menu-button-expanded-border-color);color:var(--gcds-topic-menu-button-expanded-text)}:host .gcds-topic-menu [aria-haspopup=true][aria-expanded=false]+[role=menu]{display:none}:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]+[role=menu]{z-index:9991}:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]+[role=menu] [role=menuitem]{position:relative;z-index:9991}:host .gcds-topic-menu [aria-haspopup=true][aria-expanded=true]+[role=menu]{z-index:9990}:host .gcds-topic-menu [role=menu]{background-color:var(--gcds-topic-menu-topiclist-background);color:var(--gcds-topic-menu-themelist-text);list-style:none;margin:0;padding:0;position:absolute;width:var(--gcds-topic-menu-themelist-width)}:host .gcds-topic-menu [role=menu][data-top-menu]{-webkit-box-shadow:var(--gcds-topic-menu-topiclist-box-shadow);box-shadow:var(--gcds-topic-menu-topiclist-box-shadow)}:host .gcds-topic-menu [role=menu]>li{border-inline-start:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-themelist-item-border)}:host .gcds-topic-menu [role=menu]>li:first-child{border-block-start:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-themelist-item-border)}:host .gcds-topic-menu [role=menu] [role=menu]{border-block-start:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-topiclist-border);color:var(--gcds-topic-menu-topiclist-text);left:var(--gcds-topic-menu-topiclist-left);margin-block-end:var(--gcds-topic-menu-topiclist-margin-block-end);min-height:var(--gcds-topic-menu-topiclist-min-height);padding:var(--gcds-topic-menu-topiclist-padding);top:0;width:var(--gcds-topic-menu-topiclist-width)}:host .gcds-topic-menu [role=menu] [role=menu] li{border:0;width:45%}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]{border-block-end:0;border-inline-end:0;color:var(--gcds-topic-menu-topiclist-menuitem-text);padding:var(--gcds-topic-menu-topiclist-menuitem-padding);text-decoration:underline;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem][aria-haspopup=true],:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem][aria-haspopup=true]:hover{color:var(--gcds-topic-menu-topiclist-menuitem-popup-text);font:var(--gcds-topic-menu-topiclist-menuitem-popup-font);text-decoration:none}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]:hover{color:var(--gcds-topic-menu-topiclist-menuitem-hover-text);text-decoration-thickness:var(\n                    --gcds-topic-menu-topiclist-menuitem-hover-text-decoration-thickness\n                  )}}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child{margin-block-end:var(\n                --gcds-topic-menu-topiclist-item-first-margin-block-end\n              );width:100%}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child [role=menuitem]{font:var(--gcds-topic-menu-topiclist-item-first-font);text-decoration:underline}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{left:var(--gcds-topic-menu-topiclist-item-last-left);position:absolute;top:var(--gcds-topic-menu-topiclist-item-last-top)}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [aria-expanded=true]{background:transparent}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu]{list-style:disc;padding-block-start:0}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu]{background:transparent;border-block-start:0;-webkit-box-shadow:none;box-shadow:none;left:auto;min-height:auto;top:auto;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li{width:var(--gcds-topic-menu-mostrequested-item-width)}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:first-child{margin-block-end:var(\n                  --gcds-topic-menu-mostrequested-item-first-margin-block-end\n                )}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:first-child [role=menuitem]{font:inherit;text-decoration:underline;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:last-child{left:auto;position:relative;top:auto}@media screen and (61.9375rem <= width <= 74.9375rem){:host .gcds-topic-menu [role=menu] [role=menu] li{width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{left:auto;margin-block-start:var(\n                --gcds-topic-menu-mostrequested-item-last-margin-block-start\n              );position:relative;top:auto}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu]{margin-block-end:0;padding-block-end:0;position:relative}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:last-child{margin-block-start:0}}:host .gcds-topic-menu [role=menuitem],:host .gcds-topic-menu [role=menuitem]:visited{border-block-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-menuitem-border-block-end);box-sizing:border-box;color:var(--gcds-topic-menu-menuitem-text);display:block;font:var(--gcds-topic-menu-font);padding:var(--gcds-topic-menu-menuitem-padding);text-decoration:none;text-underline-offset:var(\n          --gcds-topic-menu-menuitem-text-underline-offset\n        );width:var(--gcds-topic-menu-menuitem-width)}:host .gcds-topic-menu [role=menuitem]:focus,:host .gcds-topic-menu [role=menuitem]:visited:focus{z-index:9999!important}:host .gcds-topic-menu [role=menuitem]:hover,:host .gcds-topic-menu [role=menuitem]:visited:hover,:host .gcds-topic-menu [role=menuitem]:visited[aria-expanded=true],:host .gcds-topic-menu [role=menuitem][aria-expanded=true]{background-color:var(--gcds-topic-menu-menuitem-expanded-background);color:var(--gcds-topic-menu-menuitem-expanded-text)}:host .gcds-topic-menu [role=menuitem][aria-haspopup=true][aria-expanded=false][aria-controls]:not([aria-controls*=sub]):not(:hover){background-color:var(--gcds-topic-menu-themelist-background)}}@layer mobile{@media screen and (width <= 61.9375rem){:host .gcds-topic-menu .visible-sm-inline{display:inline-block;text-decoration:underline}:host .gcds-topic-menu .hidden-sm{display:none}:host .gcds-topic-menu [role=menu]{margin-block-end:var(\n          --gcds-topic-menu-mobile-themelist-margin-block-start\n        );position:static;width:auto}:host .gcds-topic-menu [role=menu] [role=menu]{border-block-start:0;-webkit-box-shadow:none;box-shadow:none;margin-block-end:0;min-height:auto;padding:0;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li{width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(\n                  --gcds-topic-menu-mobile-topiclist-menuitem-border-block-end\n                );padding:var(--gcds-topic-menu-mobile-topiclist-menuitem-padding)}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]:hover{background-color:transparent;color:var(\n                    --gcds-topic-menu-mobile-topiclist-menuitem-hover-text\n                  )}}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem][aria-haspopup]{font:inherit}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child{margin-block-end:0}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(\n                  --gcds-topic-menu-mobile-topiclist-item-first-menuitem-border\n                );color:var(\n                --gcds-topic-menu-mobile-topiclist-item-first-menuitem-text\n              );text-decoration:underline;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{left:auto;position:static;top:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-mobile-mostrequested-border);color:var(\n                --gcds-topic-menu-mobile-topiclist-item-last-menuitem-text\n              );text-decoration:none}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menuitem]:hover{color:var(\n                    --gcds-topic-menu-mobile-topiclist-item-last-menuitem-hover-text\n                  );text-decoration:underline}}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu]{list-style:none;padding-block-start:0}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu] li{width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu] li [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-mobile-mostrequested-border)}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu] li [role=menuitem]:hover{color:var(\n                        --gcds-topic-menu-mobile-mostrequested-hover-text\n                      );text-decoration:underline}}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child,:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{background-color:var(\n              --gcds-topic-menu-mobile-mostrequested-background\n            )}:host .gcds-topic-menu [role=menuitem]{width:auto}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li{margin-inline-start:var(\n              --gcds-topic-menu-mobile-item-expanded-margin-inline-start\n            )}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:first-child,:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:last-child{margin-inline-start:0}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:first-child [role=menuitem],:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:last-child [role=menuitem]{padding-inline-start:var(\n                  --gcds-topic-menu-mobile-item-expanded-padding-inline-start\n                )}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:last-child [role=menu] [role=menuitem]{padding-inline-start:0}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] [role=menu] li{margin-inline-start:var(\n              --gcds-topic-menu-mobile-mostrequested-expanded-margin-inline-start\n            )}:host .gcds-topic-menu [aria-expanded=true]+[role=menu] [role=menu] [role=menu]{background-color:var(\n            --gcds-topic-menu-mobile-mostrequested-background\n          )}:host .gcds-topic-menu [aria-haspopup]:not(button):before{content:"\\25BA\\a0"}:host .gcds-topic-menu [aria-haspopup][aria-expanded=true]:not(button):before{content:"\\25BC\\a0"}:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]+[role=menu]{border-inline-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-mobile-themelist-border)}}}@layer xsMobile{@media screen and (width <= 47.9375rem){:host .gcds-topic-menu>[role=menu]{margin-inline:calc(-50vw - -50%)}}}@layer focus{:host .gcds-topic-menu :is(button[aria-haspopup=true],[role=menuitem]):focus{background-color:var(--gcds-topic-menu-focus-background);border-color:var(--gcds-topic-menu-focus-background);border-inline-end:0;border-radius:var(--gcds-topic-menu-focus-border-radius);box-shadow:var(--gcds-topic-menu-focus-box-shadow);color:var(--gcds-topic-menu-focus-text);outline:var(--gcds-topic-menu-focus-outline);outline-offset:var(--gcds-topic-menu-focus-outline-offset)}}';
var u15 = Et(class e15 extends k {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.home = false;
    this.open = false;
    this.navItems = [];
  }
  async keyDownListener(e16) {
    if (this.el == document.activeElement && this.themeList.contains(document.activeElement.shadowRoot.activeElement)) {
      const a11 = e16.key;
      const i12 = this.navItems.indexOf(document.activeElement.shadowRoot.activeElement);
      const t26 = this.navItems[i12];
      switch (a11) {
        case "ArrowDown":
          e16.preventDefault();
          if (i12 + 1 > this.navItems.length - 1) {
            await this.focusMenuLink(this.navItems, t26, 0);
          } else {
            await this.focusMenuLink(this.navItems, t26, i12 + 1);
          }
          break;
        case "ArrowUp":
          e16.preventDefault();
          if (i12 - 1 < 0) {
            await this.focusMenuLink(this.navItems, t26, this.navItems.length - 1);
          } else {
            await this.focusMenuLink(this.navItems, t26, i12 - 1);
          }
          break;
        case "ArrowRight":
          e16.preventDefault();
          if (t26.hasAttribute("aria-haspopup") && !t26.hasAttribute("data-keep-expanded")) {
            await this.updateNavItemQueue(t26.parentNode.children[1]);
            t26.setAttribute("aria-expanded", "true");
            this.navItems[0].focus();
          } else if (t26.hasAttribute("aria-haspopup") && this.navSize == "desktop") {
            await this.focusMenuLink(this.navItems, t26, i12 + 1);
          } else if (t26.hasAttribute("aria-haspopup") && this.navSize == "mobile") {
            await this.updateNavItemQueue(t26.parentNode.children[1]);
            t26.setAttribute("aria-expanded", "true");
            this.navItems[0].focus();
          }
          break;
        case "Enter":
          if (t26.closest("ul").hasAttribute("data-top-menu")) {
            await this.updateNavItemQueue(t26.parentNode.children[1]);
            this.navItems[0].focus();
          }
          break;
        case "ArrowLeft":
        case "Escape": {
          e16.preventDefault();
          const a12 = t26.closest("ul");
          if (a12.parentNode.querySelector("a").hasAttribute("data-keep-expanded")) {
            await this.updateNavItemQueue(a12.parentNode.closest("ul"));
            await this.focusMenuLink(this.navItems, t26, this.navItems.indexOf(a12.parentNode.querySelector("a")));
            if (this.navSize == "mobile") {
              a12.parentNode.querySelector("a").setAttribute("aria-expanded", "false");
            }
          } else if (a12.parentNode.closest("ul")) {
            await this.updateNavItemQueue(a12.parentNode.closest("ul"));
            await this.focusMenuLink(this.navItems, t26, this.navItems.indexOf(a12.parentNode.querySelector("a")));
            if (this.navSize == "mobile") {
              a12.parentNode.querySelector("a").setAttribute("aria-expanded", "false");
            }
          } else {
            this.menuButton.focus();
            await this.toggleNav();
          }
          break;
        }
        case "Tab":
          await this.toggleNav();
          break;
      }
    }
  }
  async closeAllMenus() {
    for (let e16 = 0; e16 < this.themeList.children.length; e16++) {
      const a11 = this.themeList.children[e16].querySelector("a");
      a11.setAttribute("aria-expanded", "false");
    }
  }
  async toggleNav() {
    this.open = !this.open;
    if (this.open) {
      const e16 = window.matchMedia("screen and (max-width: 991px)");
      const a11 = this.el;
      if (e16.matches) {
        this.navSize = "mobile";
      } else {
        this.navSize = "desktop";
      }
      e16.addEventListener("change", async (e17) => {
        if (e17.matches) {
          a11.updateNavSize("mobile");
          a11.shadowRoot.querySelectorAll("[data-keep-expanded]").forEach((e18) => {
            e18.setAttribute("aria-expanded", "false");
          });
        } else {
          a11.updateNavSize("desktop");
          a11.shadowRoot.querySelectorAll("[data-keep-expanded]").forEach((e18) => {
            e18.setAttribute("aria-expanded", "true");
          });
        }
      });
      if (this.navSize == "desktop") {
        this.themeList.children[0].children[0].setAttribute("aria-expanded", "true");
      } else {
        this.el.shadowRoot.querySelectorAll("[data-keep-expanded]").forEach((e17) => {
          e17.setAttribute("aria-expanded", "false");
        });
      }
      setTimeout(() => {
        this.themeList.children[0].querySelector("a").focus();
      }, 50);
      await this.updateNavItemQueue(this.themeList);
    } else {
      this.closeAllMenus();
    }
  }
  async updateNavSize(e16) {
    this.navSize = e16;
  }
  async getNavSize() {
    return this.navSize;
  }
  async updateNavItemQueue(e16) {
    const a11 = [];
    for (let i12 = 0; i12 < e16.children.length; i12++) {
      const t26 = e16.children[i12].querySelector("a");
      if (t26) {
        a11.push(t26);
        if (t26.hasAttribute("data-keep-expanded") && this.navSize == "desktop") {
          for (let e17 = 0; e17 < t26.parentNode.children[1].children.length; e17++) {
            a11.push(t26.parentNode.children[1].children[e17].querySelector("a"));
          }
        }
      }
    }
    this.navItems = a11;
  }
  focusMenuLink(e16, a11, i12) {
    if (a11.closest("ul").hasAttribute("data-top-menu") && a11.hasAttribute("aria-haspopup") && !a11.hasAttribute("data-keep-expanded")) {
      this.closeAllMenus();
    } else if (a11.hasAttribute("aria-haspopup") && !a11.hasAttribute("data-keep-expanded")) {
      a11.setAttribute("aria-expanded", "false");
    }
    e16[i12].focus();
    if (e16[i12].hasAttribute("aria-haspopup") && this.navSize == "desktop") {
      e16[i12].setAttribute("aria-expanded", "true");
    }
  }
  updateLang() {
    const e16 = new MutationObserver((e17) => {
      if (e17[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    e16.observe(this.el, s2);
  }
  async componentWillLoad() {
    this.lang = t2(this.el);
    this.updateLang();
    try {
      const e16 = await fetch(`https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-${this.lang}.html`);
      this.listItems = await e16.text();
    } catch (e16) {
      this.listItems = m9[this.lang];
    }
  }
  async componentDidLoad() {
    const e16 = this.el;
    let a11;
    for (let i12 = 0; i12 < this.themeList.children.length; i12++) {
      const t26 = this.themeList.children[i12].querySelector("a");
      t26.addEventListener("click", async (a12) => {
        a12.preventDefault();
        if (await e16.getNavSize() == "desktop") {
          await e16.closeAllMenus();
          t26.setAttribute("aria-expanded", "true");
        } else {
          if (t26.getAttribute("aria-expanded") == "false") {
            t26.setAttribute("aria-expanded", "true");
            await e16.updateNavItemQueue(t26.parentNode.children[1]);
            setTimeout(() => {
              t26.parentNode.children[1].children[0].querySelector("a").focus();
            }, 50);
          } else {
            await e16.closeAllMenus();
            await e16.updateNavItemQueue(t26.closest("ul"));
            setTimeout(() => {
              t26.focus();
            }, 50);
          }
        }
      });
      t26.addEventListener("mouseenter", async () => {
        if (await e16.getNavSize() == "desktop") {
          a11 = setTimeout(async function() {
            await e16.closeAllMenus();
            t26.setAttribute("aria-expanded", "true");
          }, 400);
        }
      });
      t26.addEventListener("mouseleave", () => {
        clearTimeout(a11);
      });
      const n16 = this.themeList.children[i12].querySelector("ul").querySelector("[aria-haspopup]");
      n16.addEventListener("click", async (a12) => {
        a12.preventDefault();
        if (await e16.getNavSize() == "mobile") {
          if (n16.getAttribute("aria-expanded") == "true") {
            n16.setAttribute("aria-expanded", "false");
          } else {
            n16.setAttribute("aria-expanded", "true");
            const a13 = n16.parentNode.querySelector("ul");
            a13.children[0].querySelector("a").focus();
            await e16.updateNavItemQueue(a13);
          }
        }
      });
    }
  }
  render() {
    const { home: e16, lang: a11 } = this;
    return ye(ge, { key: "ea92a830119382cdd950f7346cb750b954fb77e5" }, ye("nav", { key: "36bad924be21e3b404b2b65bcc7de63ad3b07a79", class: "gcds-topic-menu", "aria-labelledby": "gcds-topic-menu__heading" }, ye("gcds-sr-only", { key: "1c5c7fff833cb328a828c6a3abd336f8c82062fc", id: "gcds-topic-menu__heading", tag: "h2" }, c18[a11].menuLabelFull), ye("button", { key: "2c5be1c6a65708bf3f9a1e71692e12654c28c028", "aria-haspopup": "true", "aria-expanded": this.open.toString(), "aria-label": c18[a11].buttonLabel, onClick: async () => await this.toggleNav(), ref: (e17) => this.menuButton = e17, class: e16 && "gcds-topic-menu--home" }, this.lang == "en" ? ye(Ct, null, ye("gcds-sr-only", { tag: "span" }, c18[a11].menuLabelHidden), c18[a11].menuToggle) : ye(Ct, null, c18[a11].menuToggle, ye("gcds-sr-only", { tag: "span" }, c18[a11].menuLabelHidden)), ye("gcds-icon", { key: "d778a38a9a3967ff4e52a76033b15d4863b39aa1", name: "chevron-down", "margin-left": "100", size: "text-small" })), ye("ul", { key: "e9bcb8fbb357f8d05c09849ceff2fde3f5fd1806", role: "menu", "aria-orientation": "vertical", "data-top-menu": true, innerHTML: this.listItems, ref: (e17) => this.themeList = e17 })));
  }
  get el() {
    return this;
  }
  static get style() {
    return d16;
  }
}, [1, "gcds-topic-menu", { home: [4], open: [32], lang: [32], navItems: [32], navSize: [32], closeAllMenus: [64], toggleNav: [64], updateNavSize: [64], getNavSize: [64], updateNavItemQueue: [64] }, [[4, "keydown", "keyDownListener"]]]);
function p15() {
  if (typeof customElements === "undefined") {
    return;
  }
  const e16 = ["gcds-topic-menu", "gcds-icon", "gcds-sr-only"];
  e16.forEach((e17) => {
    switch (e17) {
      case "gcds-topic-menu":
        if (!customElements.get(e17)) {
          customElements.define(e17, u15);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(e17)) {
          t4();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(e17)) {
          o5();
        }
        break;
    }
  });
}
var w9 = p15;

// node_modules/@gcds-core/components-vue/dist/components.js
var GcdsAlert = defineContainer("gcds-alert", f3, [
  "alertRole",
  "container",
  "heading",
  "hideCloseBtn",
  "hideRoleIcon",
  "isFixed",
  "gcdsDismiss"
], [
  "gcdsDismiss"
]);
var GcdsBreadcrumbs = defineContainer("gcds-breadcrumbs", u4, [
  "hideCanadaLink"
]);
var GcdsBreadcrumbsItem = defineContainer("gcds-breadcrumbs-item", p3, [
  "href",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
]);
var GcdsButton = defineContainer("gcds-button", c4, [
  "type",
  "buttonRole",
  "size",
  "buttonId",
  "name",
  "disabled",
  "value",
  "href",
  "rel",
  "target",
  "download",
  "gcdsClick",
  "gcdsFocus",
  "gcdsBlur"
], [
  "gcdsClick",
  "gcdsFocus",
  "gcdsBlur"
]);
var GcdsCard = defineContainer("gcds-card", p4, [
  "cardTitle",
  "href",
  "cardTitleTag",
  "description",
  "badge",
  "imgSrc",
  "imgAlt",
  "rel",
  "target",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
]);
var GcdsCheckboxes = defineContainer("gcds-checkboxes", M2, [
  "name",
  "legend",
  "options",
  "required",
  "disabled",
  "autofocus",
  "form",
  "hideLabel",
  "hideLegend",
  "value",
  "errorMessage",
  "hint",
  "validator",
  "validateOn",
  "validity",
  "gcdsClick",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsInput",
  "gcdsChange",
  "gcdsError",
  "gcdsValid"
], [
  "gcdsClick",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsInput",
  "gcdsChange",
  "gcdsError",
  "gcdsValid"
], "value", "gcdsChange");
var GcdsContainer = defineContainer("gcds-container", a5, [
  "alignment",
  "border",
  "layout",
  "margin",
  "padding",
  "size",
  "tag"
]);
var GcdsDateInput = defineContainer("gcds-date-input", j3, [
  "name",
  "legend",
  "format",
  "value",
  "required",
  "hint",
  "errorMessage",
  "disabled",
  "autofocus",
  "max",
  "min",
  "form",
  "validity",
  "validator",
  "validateOn",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsInput",
  "gcdsChange",
  "gcdsError",
  "gcdsValid"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsInput",
  "gcdsChange",
  "gcdsError",
  "gcdsValid"
], "value", "gcdsChange");
var GcdsDateModified = defineContainer("gcds-date-modified", h8, [
  "type"
]);
var GcdsDetails = defineContainer("gcds-details", c7, [
  "detailsTitle",
  "open",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
]);
var GcdsErrorMessage = defineContainer("gcds-error-message", p6, [
  "messageId"
]);
var GcdsErrorSummary = defineContainer("gcds-error-summary", f7, [
  "heading",
  "listen",
  "errorLinks",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
]);
var GcdsFieldset = defineContainer("gcds-fieldset", o8, [
  "hint",
  "legend",
  "legendSize"
]);
var GcdsFileUploader = defineContainer("gcds-file-uploader", x3, [
  "uploaderId",
  "name",
  "label",
  "hideLabel",
  "required",
  "disabled",
  "value",
  "accept",
  "multiple",
  "files",
  "errorMessage",
  "hint",
  "validator",
  "validateOn",
  "validity",
  "autofocus",
  "form",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsChange",
  "gcdsInput",
  "gcdsRemoveFile",
  "gcdsError",
  "gcdsValid"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsChange",
  "gcdsInput",
  "gcdsRemoveFile",
  "gcdsError",
  "gcdsValid"
], "value", "gcdsChange");
var GcdsFooter = defineContainer("gcds-footer", p7, [
  "display",
  "contextualHeading",
  "contextualLinks",
  "subLinks",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
]);
var GcdsGrid = defineContainer("gcds-grid", r10, [
  "columns",
  "columnsTablet",
  "columnsDesktop",
  "container",
  "display",
  "equalRowHeight",
  "gap",
  "gapTablet",
  "gapDesktop",
  "tag",
  "alignment",
  "alignContent",
  "justifyContent",
  "placeContent",
  "alignItems",
  "justifyItems",
  "placeItems"
]);
var GcdsGridCol = defineContainer("gcds-grid-col", c11, [
  "tag",
  "tablet",
  "desktop"
]);
var GcdsHeader = defineContainer("gcds-header", _4, [
  "langHref",
  "signatureHasLink",
  "skipToHref",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
]);
var GcdsHeading = defineContainer("gcds-heading", c13, [
  "tag",
  "headingRole",
  "characterLimit",
  "marginTop",
  "marginBottom"
]);
var GcdsHint = defineContainer("gcds-hint", t20, [
  "hintId"
]);
var GcdsIcon = defineContainer("gcds-icon", p8, [
  "label",
  "marginLeft",
  "marginRight",
  "name",
  "size"
]);
var GcdsInput = defineContainer("gcds-input", c14, [
  "disabled",
  "errorMessage",
  "hideLabel",
  "hint",
  "inputId",
  "name",
  "label",
  "required",
  "size",
  "type",
  "inputmode",
  "value",
  "autocomplete",
  "autofocus",
  "form",
  "max",
  "maxlength",
  "min",
  "minlength",
  "pattern",
  "readonly",
  "step",
  "validity",
  "validator",
  "validateOn",
  "suggestions",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsInput",
  "gcdsSuggestionSelected",
  "gcdsChange",
  "gcdsError",
  "gcdsValid"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsInput",
  "gcdsSuggestionSelected",
  "gcdsChange",
  "gcdsError",
  "gcdsValid"
], "value", "gcdsChange");
var GcdsLabel = defineContainer("gcds-label", t21, [
  "hideLabel",
  "label",
  "labelFor",
  "required"
]);
var GcdsLangToggle = defineContainer("gcds-lang-toggle", p9, [
  "href",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
]);
var GcdsLink = defineContainer("gcds-link", a8, [
  "linkRole",
  "size",
  "display",
  "href",
  "rel",
  "target",
  "external",
  "download",
  "type",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
]);
var GcdsNavGroup = defineContainer("gcds-nav-group", p10, [
  "closeTrigger",
  "menuLabel",
  "openTrigger",
  "open",
  "gcdsClick",
  "gcdsFocus",
  "gcdsBlur"
], [
  "gcdsClick",
  "gcdsFocus",
  "gcdsBlur"
]);
var GcdsNavLink = defineContainer("gcds-nav-link", g8, [
  "href",
  "current",
  "gcdsClick",
  "gcdsFocus",
  "gcdsBlur"
], [
  "gcdsClick",
  "gcdsFocus",
  "gcdsBlur"
]);
var GcdsNotice = defineContainer("gcds-notice", b7, [
  "noticeRole",
  "noticeTitle",
  "noticeTitleTag"
]);
var GcdsPagination = defineContainer("gcds-pagination", b8, [
  "display",
  "label",
  "previousHref",
  "previousLabel",
  "nextHref",
  "nextLabel",
  "totalPages",
  "currentPage",
  "url",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsClick"
]);
var GcdsRadios = defineContainer("gcds-radios", C3, [
  "options",
  "name",
  "autofocus",
  "form",
  "legend",
  "required",
  "hint",
  "errorMessage",
  "disabled",
  "value",
  "validity",
  "validator",
  "validateOn",
  "hideLegend",
  "gcdsInput",
  "gcdsChange",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsValid",
  "gcdsError"
], [
  "gcdsInput",
  "gcdsChange",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsValid",
  "gcdsError"
], "value", "gcdsChange");
var GcdsSearch = defineContainer("gcds-search", p12, [
  "placeholder",
  "action",
  "method",
  "name",
  "searchId",
  "value",
  "suggested",
  "gcdsInput",
  "gcdsChange",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsSubmit"
], [
  "gcdsInput",
  "gcdsChange",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsSubmit"
]);
var GcdsSelect = defineContainer("gcds-select", p13, [
  "selectId",
  "label",
  "hideLabel",
  "name",
  "required",
  "disabled",
  "defaultValue",
  "autofocus",
  "form",
  "autocomplete",
  "value",
  "errorMessage",
  "hint",
  "validity",
  "validator",
  "validateOn",
  "gcdsChange",
  "gcdsInput",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsError",
  "gcdsValid"
], [
  "gcdsChange",
  "gcdsInput",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsError",
  "gcdsValid"
], "value", "gcdsChange");
var GcdsSideNav = defineContainer("gcds-side-nav", f10, [
  "label"
]);
var GcdsSignature = defineContainer("gcds-signature", p14, [
  "type",
  "variant",
  "hasLink"
]);
var GcdsSrOnly = defineContainer("gcds-sr-only", j5, [
  "tag"
]);
var GcdsStepper = defineContainer("gcds-stepper", g11, [
  "currentStep",
  "totalSteps",
  "tag"
]);
var GcdsText = defineContainer("gcds-text", a10, [
  "textRole",
  "characterLimit",
  "display",
  "marginTop",
  "marginBottom",
  "size"
]);
var GcdsTextarea = defineContainer("gcds-textarea", j6, [
  "autofocus",
  "form",
  "hideLimit",
  "maxlength",
  "minlength",
  "cols",
  "disabled",
  "errorMessage",
  "hideLabel",
  "hint",
  "label",
  "name",
  "required",
  "rows",
  "textareaId",
  "value",
  "validator",
  "validateOn",
  "validity",
  "gcdsFocus",
  "gcdsBlur",
  "gcdsChange",
  "gcdsInput",
  "gcdsError",
  "gcdsValid"
], [
  "gcdsFocus",
  "gcdsBlur",
  "gcdsChange",
  "gcdsInput",
  "gcdsError",
  "gcdsValid"
], "value", "gcdsChange");
var GcdsTopNav = defineContainer("gcds-top-nav", g12, [
  "label",
  "alignment"
]);
var GcdsTopicMenu = defineContainer("gcds-topic-menu", w9, [
  "home"
]);

// node_modules/@gcds-core/components/dist/esm/loader.js
var defineCustomElements = async (win, options) => {
  if (typeof window === "undefined") return void 0;
  await globalScripts();
  return bootstrapLazy(JSON.parse('[["gcds-alert_38",[[81,"gcds-date-input",{"name":[1],"legend":[1],"format":[1],"value":[1025],"required":[4],"hint":[1],"errorMessage":[1025,"error-message"],"disabled":[1028],"autofocus":[516],"max":[513],"min":[513],"form":[513],"validity":[2064],"validator":[1040],"validateOn":[1025,"validate-on"],"monthValue":[32],"dayValue":[32],"yearValue":[32],"hasError":[32],"errors":[32],"lang":[32],"validate":[64],"checkValidity":[64],"getValidationMessage":[64]},[[4,"submit","submitListener"]],{"name":["validateName"],"legend":["validateLegend"],"format":["validateFormat"],"value":["watchValue"],"validator":["validateValidator"]}],[81,"gcds-checkboxes",{"name":[513],"legend":[513],"options":[1025],"required":[516],"disabled":[1540],"autofocus":[516],"form":[513],"hideLabel":[4,"hide-label"],"hideLegend":[4,"hide-legend"],"value":[1537],"errorMessage":[1537,"error-message"],"hint":[1537],"validator":[1040],"validateOn":[1025,"validate-on"],"validity":[2064],"inheritedAttributes":[32],"hasError":[32],"lang":[32],"errors":[32],"validate":[64],"checkValidity":[64],"getValidationMessage":[64]},[[4,"formdata","formdataListener"],[4,"submit","submitListener"]],{"name":["validateName"],"legend":["validateLegend"],"options":["validateOptions"],"disabled":["validateDisabledCheckbox"],"value":["validateValue"],"errorMessage":["validateErrorMessage"],"validator":["validateValidator"],"hasError":["validateHasError"],"lang":["watchLang"]}],[81,"gcds-file-uploader",{"uploaderId":[1537,"uploader-id"],"name":[1],"label":[513],"hideLabel":[4,"hide-label"],"required":[516],"disabled":[1540],"value":[1040],"accept":[513],"multiple":[516],"files":[1040],"errorMessage":[1537,"error-message"],"hint":[513],"validator":[1040],"validateOn":[1025,"validate-on"],"validity":[2064],"autofocus":[516],"form":[513],"hasError":[32],"inheritedAttributes":[32],"lang":[32],"validate":[64],"checkValidity":[64],"getValidationMessage":[64]},[[4,"submit","submitListener"]],{"disabled":["validateDisabledSelect"],"files":["watchFiles"],"errorMessage":["validateErrorMessage"],"validator":["validateValidator"],"hasError":["validateHasError"]}],[81,"gcds-radios",{"options":[1025],"name":[513],"autofocus":[516],"form":[513],"legend":[513],"required":[516],"hint":[513],"errorMessage":[1025,"error-message"],"disabled":[1540],"value":[1537],"validity":[2064],"validator":[1040],"validateOn":[1025,"validate-on"],"hideLegend":[4,"hide-legend"],"hasError":[32],"inheritedAttributes":[32],"lang":[32],"errors":[32],"validate":[64],"checkValidity":[64],"getValidationMessage":[64]},[[4,"submit","submitListener"]],{"options":["validateOptions"],"name":["validateName"],"legend":["validateLegend"],"errorMessage":["validateErrorMessage"],"value":["validateValue"],"validator":["validateValidator"],"lang":["watchLang"]}],[81,"gcds-textarea",{"autofocus":[516],"form":[513],"hideLimit":[4,"hide-limit"],"maxlength":[514],"minlength":[514],"cols":[2],"disabled":[1028],"errorMessage":[1025,"error-message"],"hideLabel":[4,"hide-label"],"hint":[1],"label":[1],"name":[1],"required":[4],"rows":[2],"textareaId":[1,"textarea-id"],"value":[1025],"validator":[1040],"validateOn":[1025,"validate-on"],"validity":[2064],"inheritedAttributes":[32],"hasError":[32],"lang":[32],"validate":[64],"checkValidity":[64],"getValidationMessage":[64]},[[4,"submit","submitListener"]],{"disabled":["validateDisabledTextarea"],"errorMessage":["validateErrorMessage"],"value":["watchValue"],"validator":["validateValidator"],"hasError":["validateHasError"]}],[1,"gcds-header",{"langHref":[513,"lang-href"],"signatureHasLink":[4,"signature-has-link"],"skipToHref":[1,"skip-to-href"],"lang":[32]}],[1,"gcds-card",{"cardTitle":[513,"card-title"],"href":[513],"cardTitleTag":[1,"card-title-tag"],"description":[513],"badge":[1537],"imgSrc":[513,"img-src"],"imgAlt":[513,"img-alt"],"rel":[1],"target":[1],"lang":[32],"errors":[32]},null,{"cardTitle":["validateCardTitle"],"href":["validateHref"],"badge":["validateBadge"]}],[1,"gcds-footer",{"display":[1537],"contextualHeading":[1,"contextual-heading"],"contextualLinks":[1025,"contextual-links"],"subLinks":[1025,"sub-links"],"lang":[32]},null,{"contextualLinks":["contextualLinksChanged"],"subLinks":["subLinksChanged"]}],[1,"gcds-search",{"placeholder":[1],"action":[1],"method":[1],"name":[1],"searchId":[1,"search-id"],"value":[1025],"suggested":[1025],"lang":[32],"suggestedArray":[32]},null,{"suggested":["watchSuggestedHandler"]}],[1,"gcds-breadcrumbs",{"hideCanadaLink":[4,"hide-canada-link"],"lang":[32]}],[1,"gcds-error-summary",{"heading":[513],"listen":[1028],"errorLinks":[1025,"error-links"],"lang":[32],"errorQueue":[32],"hasSubmitted":[32]},[[4,"gcdsError","errorListener"],[4,"gcdsValid","validListener"],[4,"submit","submitListener"]],{"listen":["listenChanged"],"errorLinks":["errorLinksChanged"]}],[1,"gcds-notice",{"noticeRole":[1,"notice-role"],"noticeTitle":[1,"notice-title"],"noticeTitleTag":[1,"notice-title-tag"],"errors":[32],"lang":[32]}],[1,"gcds-alert",{"alertRole":[1,"alert-role"],"container":[1],"heading":[1],"hideCloseBtn":[4,"hide-close-btn"],"hideRoleIcon":[4,"hide-role-icon"],"isFixed":[1028,"is-fixed"],"isOpen":[32],"lang":[32]}],[1,"gcds-side-nav",{"label":[1],"lang":[32],"navItems":[32],"navSize":[32],"getNavSize":[64],"updateNavSize":[64],"updateNavItemQueue":[64]},[[4,"focusin","focusInListener"],[4,"focusout","focusOutListener"],[4,"keydown","keyDownListener"],[4,"gcdsClick","gcdsClickListener"]]],[1,"gcds-stepper",{"currentStep":[1026,"current-step"],"totalSteps":[1026,"total-steps"],"tag":[1],"errors":[32],"lang":[32]},null,{"currentStep":["validateCurrentStep"],"totalSteps":["validateTotalSteps"]}],[1,"gcds-top-nav",{"label":[1],"alignment":[1],"lang":[32],"navItems":[32],"navSize":[32],"getNavSize":[64],"updateNavSize":[64],"updateNavItemQueue":[64]},[[4,"focusin","focusInListener"],[4,"focusout","focusOutListener"],[4,"keydown","keyDownListener"],[4,"gcdsClick","gcdsClickListener"]]],[1,"gcds-date-modified",{"type":[1025],"errors":[32],"lang":[32]}],[1,"gcds-grid",{"columns":[1],"columnsTablet":[1,"columns-tablet"],"columnsDesktop":[1,"columns-desktop"],"container":[1],"display":[1],"equalRowHeight":[4,"equal-row-height"],"gap":[1025],"gapTablet":[1025,"gap-tablet"],"gapDesktop":[1025,"gap-desktop"],"tag":[1025],"alignment":[1],"alignContent":[1,"align-content"],"justifyContent":[1,"justify-content"],"placeContent":[1,"place-content"],"alignItems":[1,"align-items"],"justifyItems":[1,"justify-items"],"placeItems":[1,"place-items"]},null,{"gap":["validateGap"],"gapTablet":["validateGapTablet"],"gapDesktop":["validateGapDesktop"],"tag":["validateTag"]}],[1,"gcds-pagination",{"display":[1],"label":[1],"previousHref":[1,"previous-href"],"previousLabel":[513,"previous-label"],"nextHref":[1,"next-href"],"nextLabel":[513,"next-label"],"totalPages":[2,"total-pages"],"currentPage":[514,"current-page"],"url":[1],"currentStep":[32],"lang":[32]},null,{"currentPage":["watchCurrentPage"],"url":["urlChanged"],"lang":["watchLang"]}],[1,"gcds-details",{"detailsTitle":[1,"details-title"],"open":[1540],"toggle":[64]},[[8,"beforeprint","handleBeforePrint"],[8,"afterprint","handleAfterPrint"]]],[1,"gcds-grid-col",{"tag":[1],"tablet":[1026],"desktop":[1026]},null,{"tablet":["validateTablet"],"desktop":["validateDesktop"]}],[1,"gcds-nav-link",{"href":[513],"current":[516],"lang":[32],"navStyle":[32],"focusLink":[64]}],[81,"gcds-input",{"disabled":[1028],"errorMessage":[1025,"error-message"],"hideLabel":[4,"hide-label"],"hint":[1],"inputId":[1,"input-id"],"name":[1],"label":[1],"required":[4],"size":[2],"type":[1],"inputmode":[1],"value":[1025],"autocomplete":[1],"autofocus":[516],"form":[513],"max":[520],"maxlength":[514],"min":[520],"minlength":[514],"pattern":[513],"readonly":[516],"step":[520],"validity":[2064],"validator":[1040],"validateOn":[1025,"validate-on"],"suggestions":[1025],"inheritedAttributes":[32],"hasError":[32],"lang":[32],"validate":[64],"checkValidity":[64],"getValidationMessage":[64]},[[4,"submit","submitListener"],[4,"keydown","keyDownListener"]],{"disabled":["validateDisabledInput"],"errorMessage":["validateErrorMessage"],"value":["watchValue"],"validator":["validateValidator"],"suggestions":["validateSuggestions"],"hasError":["validateHasError"],"aria-invalid":["ariaInvalidWatcher"],"aria-description":["ariaDescriptiondWatcher"]}],[81,"gcds-select",{"selectId":[1537,"select-id"],"label":[513],"hideLabel":[4,"hide-label"],"name":[513],"required":[516],"disabled":[1540],"defaultValue":[513,"default-value"],"autofocus":[516],"form":[513],"autocomplete":[1],"value":[1025],"errorMessage":[1537,"error-message"],"hint":[513],"validity":[2064],"validator":[1040],"validateOn":[1025,"validate-on"],"hasError":[32],"inheritedAttributes":[32],"lang":[32],"options":[32],"validate":[64],"checkValidity":[64],"getValidationMessage":[64]},[[4,"submit","submitListener"]],{"disabled":["validateDisabledSelect"],"value":["watchValue"],"errorMessage":["validateErrorMessage"],"validator":["validateValidator"],"hasError":["validateHasError"],"aria-invalid":["ariaInvalidWatcher"],"aria-description":["ariaDescriptiondWatcher"]}],[1,"gcds-lang-toggle",{"href":[513],"lang":[32]}],[1,"gcds-breadcrumbs-item",{"href":[1]}],[17,"gcds-button",{"type":[1025],"buttonRole":[1025,"button-role"],"size":[1025],"buttonId":[1,"button-id"],"name":[1],"disabled":[516],"value":[1],"href":[1],"rel":[1],"target":[1],"download":[1],"inheritedAttributes":[32],"lang":[32]},null,{"type":["validateType"],"buttonRole":["validateButtonRole"],"size":["validateSize"],"disabled":["validateDisabled"]}],[1,"gcds-nav-group",{"closeTrigger":[513,"close-trigger"],"menuLabel":[513,"menu-label"],"openTrigger":[513,"open-trigger"],"open":[1540],"lang":[32],"navStyle":[32],"navPosiiton":[32],"focusTrigger":[64],"toggleNav":[64]},[[4,"focusout","focusOutListener"]]],[1,"gcds-signature",{"type":[1537],"variant":[1537],"hasLink":[1028,"has-link"],"lang":[32]},null,{"type":["validateType"],"variant":["validateVariant"]}],[1,"gcds-container",{"alignment":[1],"border":[4],"layout":[1],"margin":[1],"padding":[1],"size":[1],"tag":[1]}],[1,"gcds-heading",{"tag":[1025],"headingRole":[1025,"heading-role"],"characterLimit":[4,"character-limit"],"marginTop":[1025,"margin-top"],"marginBottom":[1025,"margin-bottom"]},null,{"tag":["validateTag"],"headingRole":["validateHeadingRole"],"marginTop":["validateMarginTop"],"marginBottom":["validateMarginBottom"]}],[1,"gcds-error-message",{"messageId":[1,"message-id"]}],[1,"gcds-link",{"linkRole":[1025,"link-role"],"size":[1025],"display":[1025],"href":[1],"rel":[1],"target":[1],"external":[4],"download":[1],"type":[1],"inheritedAttributes":[32],"lang":[32]},null,{"linkRole":["validateLinkRole"],"size":["validateSize"],"display":["validateDisplay"]}],[1,"gcds-hint",{"hintId":[1,"hint-id"]}],[0,"gcds-label",{"hideLabel":[4,"hide-label"],"label":[1],"labelFor":[1,"label-for"],"required":[4],"lang":[32]}],[1,"gcds-text",{"textRole":[1025,"text-role"],"characterLimit":[4,"character-limit"],"display":[1025],"marginTop":[1025,"margin-top"],"marginBottom":[1025,"margin-bottom"],"size":[1025]},null,{"textRole":["validateTextRole"],"display":["validateDisplay"],"marginTop":["validateMarginTop"],"marginBottom":["validateMarginBottom"],"size":["validateSize"]}],[1,"gcds-sr-only",{"tag":[1025]},null,{"tag":["validateTag"]}],[1,"gcds-icon",{"label":[1],"marginLeft":[1,"margin-left"],"marginRight":[1,"margin-right"],"name":[1025],"size":[1]},null,{"name":["validateName"],"size":["validateSize"]}]]],["gcds-fieldset",[[17,"gcds-fieldset",{"hint":[513],"legend":[513],"legendSize":[1025,"legend-size"],"inheritedAttributes":[32]},null,{"legendSize":["validateLegendSize"]}]]],["gcds-topic-menu",[[1,"gcds-topic-menu",{"home":[4],"open":[32],"lang":[32],"navItems":[32],"navSize":[32],"closeAllMenus":[64],"toggleNav":[64],"updateNavSize":[64],"getNavSize":[64],"updateNavItemQueue":[64]},[[4,"keydown","keyDownListener"]]]]]]'), options);
};

// node_modules/@gcds-core/components/loader/index.js
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a11 = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a11, [], this.constructor);
    };
    HTMLElement.prototype = a11.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a11);
  }
})();

// node_modules/@gcds-core/components-vue/dist/plugin.js
var GcdsComponents = {
  async install() {
    defineCustomElements();
  }
};
export {
  GcdsAlert,
  GcdsBreadcrumbs,
  GcdsBreadcrumbsItem,
  GcdsButton,
  GcdsCard,
  GcdsCheckboxes,
  GcdsComponents,
  GcdsContainer,
  GcdsDateInput,
  GcdsDateModified,
  GcdsDetails,
  GcdsErrorMessage,
  GcdsErrorSummary,
  GcdsFieldset,
  GcdsFileUploader,
  GcdsFooter,
  GcdsGrid,
  GcdsGridCol,
  GcdsHeader,
  GcdsHeading,
  GcdsHint,
  GcdsIcon,
  GcdsInput,
  GcdsLabel,
  GcdsLangToggle,
  GcdsLink,
  GcdsNavGroup,
  GcdsNavLink,
  GcdsNotice,
  GcdsPagination,
  GcdsRadios,
  GcdsSearch,
  GcdsSelect,
  GcdsSideNav,
  GcdsSignature,
  GcdsSrOnly,
  GcdsStepper,
  GcdsText,
  GcdsTextarea,
  GcdsTopNav,
  GcdsTopicMenu
};
//# sourceMappingURL=@gcds-core_components-vue.js.map
