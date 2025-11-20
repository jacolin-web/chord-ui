import {
  addFunctionSerializer,
  composeStyles,
  hasFileScope,
  style
} from "./chunk-2J7G35HP.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-74286718.esm.js
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
var createSprinkles = (composeStyles2) => function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var sprinklesStyles = Object.assign({}, ...args.map((a) => a.styles));
  var sprinklesKeys = Object.keys(sprinklesStyles);
  var shorthandNames = sprinklesKeys.filter((property) => "mappings" in sprinklesStyles[property]);
  var sprinklesFn = (props) => {
    var classNames = [];
    var shorthands = {};
    var nonShorthands = _objectSpread2({}, props);
    var hasShorthands = false;
    for (var shorthand of shorthandNames) {
      var value = props[shorthand];
      if (value != null) {
        var sprinkle = sprinklesStyles[shorthand];
        hasShorthands = true;
        for (var propMapping of sprinkle.mappings) {
          shorthands[propMapping] = value;
          if (nonShorthands[propMapping] == null) {
            delete nonShorthands[propMapping];
          }
        }
      }
    }
    var finalProps = hasShorthands ? _objectSpread2(_objectSpread2({}, shorthands), nonShorthands) : props;
    var _loop = function _loop2() {
      var propValue = finalProps[prop];
      var sprinkle2 = sprinklesStyles[prop];
      try {
        if (sprinkle2.mappings) {
          return 1;
        }
        if (typeof propValue === "string" || typeof propValue === "number") {
          if (true) {
            if (!sprinkle2.values[propValue].defaultClass) {
              throw new Error();
            }
          }
          classNames.push(sprinkle2.values[propValue].defaultClass);
        } else if (Array.isArray(propValue)) {
          for (var responsiveIndex = 0; responsiveIndex < propValue.length; responsiveIndex++) {
            var responsiveValue = propValue[responsiveIndex];
            if (responsiveValue != null) {
              var conditionName = sprinkle2.responsiveArray[responsiveIndex];
              if (true) {
                if (!sprinkle2.values[responsiveValue].conditions[conditionName]) {
                  throw new Error();
                }
              }
              classNames.push(sprinkle2.values[responsiveValue].conditions[conditionName]);
            }
          }
        } else {
          for (var _conditionName in propValue) {
            var _value = propValue[_conditionName];
            if (_value != null) {
              if (true) {
                if (!sprinkle2.values[_value].conditions[_conditionName]) {
                  throw new Error();
                }
              }
              classNames.push(sprinkle2.values[_value].conditions[_conditionName]);
            }
          }
        }
      } catch (e) {
        if (true) {
          class SprinklesError extends Error {
            constructor(message) {
              super(message);
              this.name = "SprinklesError";
            }
          }
          var format = (v) => typeof v === "string" ? '"'.concat(v, '"') : v;
          var invalidPropValue = (prop2, value2, possibleValues) => {
            throw new SprinklesError('"'.concat(prop2, '" has no value ').concat(format(value2), ". Possible values are ").concat(Object.keys(possibleValues).map(format).join(", ")));
          };
          if (!sprinkle2) {
            throw new SprinklesError('"'.concat(prop, '" is not a valid sprinkle'));
          }
          if (typeof propValue === "string" || typeof propValue === "number") {
            if (!(propValue in sprinkle2.values)) {
              invalidPropValue(prop, propValue, sprinkle2.values);
            }
            if (!sprinkle2.values[propValue].defaultClass) {
              throw new SprinklesError('"'.concat(prop, '" has no default condition. You must specify which conditions to target explicitly. Possible options are ').concat(Object.keys(sprinkle2.values[propValue].conditions).map(format).join(", ")));
            }
          }
          if (typeof propValue === "object") {
            if (!("conditions" in sprinkle2.values[Object.keys(sprinkle2.values)[0]])) {
              throw new SprinklesError('"'.concat(prop, '" is not a conditional property'));
            }
            if (Array.isArray(propValue)) {
              if (!("responsiveArray" in sprinkle2)) {
                throw new SprinklesError('"'.concat(prop, '" does not support responsive arrays'));
              }
              var breakpointCount = sprinkle2.responsiveArray.length;
              if (breakpointCount < propValue.length) {
                throw new SprinklesError('"'.concat(prop, '" only supports up to ').concat(breakpointCount, " breakpoints. You passed ").concat(propValue.length));
              }
              for (var _responsiveValue of propValue) {
                if (!sprinkle2.values[_responsiveValue]) {
                  invalidPropValue(prop, _responsiveValue, sprinkle2.values);
                }
              }
            } else {
              for (var _conditionName2 in propValue) {
                var _value2 = propValue[_conditionName2];
                if (_value2 != null) {
                  if (!sprinkle2.values[_value2]) {
                    invalidPropValue(prop, _value2, sprinkle2.values);
                  }
                  if (!sprinkle2.values[_value2].conditions[_conditionName2]) {
                    throw new SprinklesError('"'.concat(prop, '" has no condition named ').concat(format(_conditionName2), ". Possible values are ").concat(Object.keys(sprinkle2.values[_value2].conditions).map(format).join(", ")));
                  }
                }
              }
            }
          }
        }
        throw e;
      }
    };
    for (var prop in finalProps) {
      if (_loop()) continue;
    }
    return composeStyles2(classNames.join(" "));
  };
  return Object.assign(sprinklesFn, {
    properties: new Set(sprinklesKeys)
  });
};

// node_modules/@vanilla-extract/sprinkles/createUtils/dist/vanilla-extract-sprinkles-createUtils.esm.js
function createNormalizeValueFn(properties) {
  var {
    conditions
  } = properties;
  if (!conditions) {
    throw new Error("Styles have no conditions");
  }
  function normalizeValue(value) {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      if (!conditions.defaultCondition) {
        throw new Error("No default condition");
      }
      return {
        [conditions.defaultCondition]: value
      };
    }
    if (Array.isArray(value)) {
      if (!("responsiveArray" in conditions)) {
        throw new Error("Responsive arrays are not supported");
      }
      var returnValue = {};
      for (var index in conditions.responsiveArray) {
        if (value[index] != null) {
          returnValue[conditions.responsiveArray[index]] = value[index];
        }
      }
      return returnValue;
    }
    return value;
  }
  return addFunctionSerializer(normalizeValue, {
    importPath: "@vanilla-extract/sprinkles/createUtils",
    importName: "createNormalizeValueFn",
    args: [{
      conditions: properties.conditions
    }]
  });
}
function createMapValueFn(properties) {
  var {
    conditions
  } = properties;
  if (!conditions) {
    throw new Error("Styles have no conditions");
  }
  var normalizeValue = createNormalizeValueFn(properties);
  function mapValue(value, mapFn) {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      if (!conditions.defaultCondition) {
        throw new Error("No default condition");
      }
      return mapFn(value, conditions.defaultCondition);
    }
    var normalizedObject = Array.isArray(value) ? normalizeValue(value) : value;
    var mappedObject = {};
    for (var _key in normalizedObject) {
      if (normalizedObject[_key] != null) {
        mappedObject[_key] = mapFn(normalizedObject[_key], _key);
      }
    }
    return mappedObject;
  }
  return addFunctionSerializer(mapValue, {
    importPath: "@vanilla-extract/sprinkles/createUtils",
    importName: "createMapValueFn",
    args: [{
      conditions: properties.conditions
    }]
  });
}

// node_modules/@vanilla-extract/sprinkles/dist/vanilla-extract-sprinkles.esm.js
function defineProperties(options) {
  var styles = "shorthands" in options ? Object.fromEntries(Object.entries(options.shorthands).map((_ref) => {
    var [prop, mappings] = _ref;
    return [prop, {
      mappings
    }];
  })) : {};
  var _loop = function _loop2(key2) {
    var property = options.properties[key2];
    styles[key2] = {
      values: {}
    };
    if ("responsiveArray" in options) {
      styles[key2].responsiveArray = options.responsiveArray;
    }
    var processValue = (valueName2, value2) => {
      if ("conditions" in options) {
        styles[key2].values[valueName2] = {
          conditions: {}
        };
        var defaultConditions = options.defaultCondition ? Array.isArray(options.defaultCondition) ? options.defaultCondition : [options.defaultCondition] : [];
        var defaultClasses = [];
        for (var _conditionName in options.conditions) {
          var styleValue = typeof value2 === "object" ? value2 : {
            [key2]: value2
          };
          var condition = options.conditions[_conditionName];
          if (condition["@supports"]) {
            styleValue = {
              "@supports": {
                [condition["@supports"]]: styleValue
              }
            };
          }
          if (condition["@container"]) {
            styleValue = {
              "@container": {
                [condition["@container"]]: styleValue
              }
            };
          }
          if (condition["@media"]) {
            styleValue = {
              "@media": {
                [condition["@media"]]: styleValue
              }
            };
          }
          if (condition.selector) {
            styleValue = {
              selectors: {
                [condition.selector]: styleValue
              }
            };
          }
          if (options["@layer"]) {
            styleValue = {
              "@layer": {
                [options["@layer"]]: styleValue
              }
            };
          }
          var className = style(styleValue, "".concat(key2, "_").concat(String(valueName2), "_").concat(_conditionName));
          styles[key2].values[valueName2].conditions[_conditionName] = className;
          if (defaultConditions.indexOf(_conditionName) > -1) {
            defaultClasses.push(className);
          }
        }
        if (defaultClasses.length > 0) {
          styles[key2].values[valueName2].defaultClass = defaultClasses.join(" ");
        }
      } else {
        var _styleValue = typeof value2 === "object" ? value2 : {
          [key2]: value2
        };
        if (options["@layer"]) {
          _styleValue = {
            "@layer": {
              [options["@layer"]]: _styleValue
            }
          };
        }
        styles[key2].values[valueName2] = {
          defaultClass: style(_styleValue, "".concat(key2, "_").concat(String(valueName2)))
        };
      }
    };
    if (Array.isArray(property)) {
      for (var value of property) {
        processValue(value, value);
      }
    } else {
      for (var valueName in property) {
        var _value = property[valueName];
        processValue(valueName, _value);
      }
    }
  };
  for (var key in options.properties) {
    _loop(key);
  }
  var conditions = "conditions" in options ? {
    defaultCondition: options.defaultCondition,
    conditionNames: Object.keys(options.conditions),
    responsiveArray: options.responsiveArray
  } : void 0;
  return {
    conditions,
    styles
  };
}
var mockComposeStyles = (classList) => classList;
function createSprinkles2() {
  for (var _len = arguments.length, config = new Array(_len), _key = 0; _key < _len; _key++) {
    config[_key] = arguments[_key];
  }
  var sprinkles = createSprinkles(hasFileScope() ? composeStyles : mockComposeStyles)(...config);
  return addFunctionSerializer(sprinkles, {
    importPath: "@vanilla-extract/sprinkles/createRuntimeSprinkles",
    importName: "createSprinkles",
    args: config
  });
}
export {
  defineProperties as createAtomicStyles,
  createSprinkles2 as createAtomsFn,
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles2 as createSprinkles,
  defineProperties
};
//# sourceMappingURL=@vanilla-extract_sprinkles.js.map
