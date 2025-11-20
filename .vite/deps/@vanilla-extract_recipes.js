import {
  addFunctionSerializer,
  style,
  styleVariants
} from "./chunk-2J7G35HP.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/@vanilla-extract/recipes/dist/createRuntimeFn-62c9670f.esm.js
function toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function mapValues(input, fn) {
  var result = {};
  for (var _key in input) {
    result[_key] = fn(input[_key], _key);
  }
  return result;
}
var shouldApplyCompound = (compoundCheck, selections, defaultVariants) => {
  for (var key of Object.keys(compoundCheck)) {
    var _selections$key;
    if (compoundCheck[key] !== ((_selections$key = selections[key]) !== null && _selections$key !== void 0 ? _selections$key : defaultVariants[key])) {
      return false;
    }
  }
  return true;
};
var createRuntimeFn = (config) => {
  var runtimeFn = (options) => {
    var className = config.defaultClassName;
    var selections = _objectSpread2(_objectSpread2({}, config.defaultVariants), options);
    for (var variantName in selections) {
      var _selections$variantNa;
      var variantSelection = (_selections$variantNa = selections[variantName]) !== null && _selections$variantNa !== void 0 ? _selections$variantNa : config.defaultVariants[variantName];
      if (variantSelection != null) {
        var selection = variantSelection;
        if (typeof selection === "boolean") {
          selection = selection === true ? "true" : "false";
        }
        var selectionClassName = (
          // @ts-expect-error
          config.variantClassNames[variantName][selection]
        );
        if (selectionClassName) {
          className += " " + selectionClassName;
        }
      }
    }
    for (var [compoundCheck, compoundClassName] of config.compoundVariants) {
      if (shouldApplyCompound(compoundCheck, selections, config.defaultVariants)) {
        className += " " + compoundClassName;
      }
    }
    return className;
  };
  runtimeFn.variants = () => Object.keys(config.variantClassNames);
  runtimeFn.classNames = {
    get base() {
      return config.defaultClassName.split(" ")[0];
    },
    get variants() {
      return mapValues(config.variantClassNames, (classNames) => mapValues(classNames, (className) => className.split(" ")[0]));
    }
  };
  return runtimeFn;
};

// node_modules/@vanilla-extract/recipes/dist/vanilla-extract-recipes.esm.js
function recipe(options, debugId) {
  var {
    variants = {},
    defaultVariants = {},
    compoundVariants = [],
    base
  } = options;
  var defaultClassName;
  if (!base || typeof base === "string") {
    var baseClassName = style({});
    defaultClassName = base ? "".concat(baseClassName, " ").concat(base) : baseClassName;
  } else {
    defaultClassName = style(base, debugId);
  }
  var variantClassNames = mapValues(variants, (variantGroup, variantGroupName) => styleVariants(variantGroup, (styleRule) => typeof styleRule === "string" ? [styleRule] : styleRule, debugId ? "".concat(debugId, "_").concat(variantGroupName) : variantGroupName));
  var compounds = [];
  for (var {
    style: theStyle,
    variants: _variants
  } of compoundVariants) {
    compounds.push([_variants, typeof theStyle === "string" ? theStyle : style(theStyle, "".concat(debugId, "_compound_").concat(compounds.length))]);
  }
  var config = {
    defaultClassName,
    variantClassNames,
    defaultVariants,
    compoundVariants: compounds
  };
  return addFunctionSerializer(createRuntimeFn(config), {
    importPath: "@vanilla-extract/recipes/createRuntimeFn",
    importName: "createRuntimeFn",
    // @ts-expect-error
    args: [config]
  });
}
export {
  recipe
};
//# sourceMappingURL=@vanilla-extract_recipes.js.map
