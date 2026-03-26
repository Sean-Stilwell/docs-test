// node_modules/@gcds-core/components/dist/esm/utils-BKOkUsrw.js
var I18N = {
  en: {
    valueMissing: "Enter information to continue.",
    typeMismatch: {
      email: "Enter a valid email address to continue. Use a standard format. Example: name@address.ca.",
      url: "Enter a URL in the specified format to continue."
    },
    patternMismatch: "Use the specified format to continue.",
    tooLong: "Enter {max} characters or less to continue. You've entered {current} characters.",
    tooShort: "Enter at least {min} characters to continue. You've entered {current} characters.",
    rangeUnderflow: "Enter a number that's {min} or more to continue.",
    rangeOverflow: "Enter a number that's {max} or less to continue.",
    stepMismatch: "Enter a number from the specified options to continue. The closest numbers to what you entered are {lower} and {upper}. ",
    badInput: "Enter a number to continue."
  },
  fr: {
    valueMissing: "Saisissez des renseignements pour continuer.",
    typeMismatch: {
      email: "Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.",
      url: "Entrez une adresse Web en utilisant le format spécifié pour continuer."
    },
    patternMismatch: "Utilisez le format spécifié pour continuer.",
    tooLong: "Entrez {max} caractères ou moins pour continuer. Vous en avez présentement {current}.",
    tooShort: "Entrez au moins {min} caractères pour continuer. Vous en avez présentement {current}.",
    rangeUnderflow: "Entrez un nombre plus grand ou égal à {min} pour continuer.",
    rangeOverflow: "Entrez un nombre plus petit ou égal à {max} pour continuer.",
    stepMismatch: "Entrez un nombre parmi les options spécifiées pour continuer. Les nombres les plus proches de votre entrée sont {lower} et {upper}.",
    badInput: "Entrez un nombre pour continuer."
  }
};
var inheritAttributes = (el, shadowElement, attributes = []) => {
  const attributeObject = {};
  for (let i = 0; i < el.attributes.length; i++) {
    const attr = el.attributes[i];
    if (attr.name.includes("aria-")) {
      attributeObject[attr.name] = attr.value;
    }
  }
  attributes.forEach((attr) => {
    if (el.hasAttribute(attr) || shadowElement && shadowElement.hasAttribute(attr)) {
      const value = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
var assignLanguage = (el) => {
  var _a;
  let lang = "";
  if (!el.getAttribute("lang")) {
    const closestLangAttribute = (_a = closestElement("[lang]", el)) === null || _a === void 0 ? void 0 : _a.getAttribute("lang");
    if (closestLangAttribute == "en" || !closestLangAttribute) {
      lang = "en";
    } else {
      lang = "fr";
    }
  } else if (el.getAttribute("lang") == "en") {
    lang = "en";
  } else {
    lang = "fr";
  }
  return lang;
};
var closestElement = (selector, el) => {
  if (el) {
    return el && el != document && typeof window != "undefined" && el != window && el.closest(selector) || closestElement(selector, el.getRootNode().host);
  }
  return null;
};
var observerConfig = {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ["lang"]
};
var emitEvent = (e, customEvent, value) => {
  const event = customEvent.emit(value);
  if (event.defaultPrevented || e.defaultPrevented) {
    e.preventDefault();
    return false;
  }
  return true;
};
var logError = (name, errorArr, optionalAttrsArrToRemove) => {
  const engMsg = "Render error, please check required properties.";
  const frMsg = "Erreur de rendu, veuillez vérifier les propriétés requises.";
  const errors = [...errorArr];
  if (optionalAttrsArrToRemove && optionalAttrsArrToRemove.length > 0) {
    for (const optionalAttr of optionalAttrsArrToRemove) {
      if (errors.includes(optionalAttr)) {
        errors.splice(errors.indexOf(optionalAttr), 1);
      }
    }
  }
  console.error(`${name}: ${engMsg} (${errors}) | ${name}: ${frMsg} (${errors})`);
};
var handleErrors = (errors, propertyName, property, external = false) => {
  if (property && typeof property === "string" && property.trim() === "" || !property || property === "" || external) {
    if (!errors.includes(propertyName)) {
      errors.push(propertyName);
    }
  } else if (errors.includes(propertyName)) {
    errors.splice(errors.indexOf(propertyName), 1);
  }
  return errors;
};
var isValid = (errors, requiredProps) => {
  const intersection = errors.filter((x) => requiredProps.includes(x));
  return intersection.length > 0 ? false : true;
};
var isValidDate = (dateString, forceFormat) => {
  const fullregex = /^\d{4}-\d{2}-\d{2}$/;
  const compactregex = /^\d{4}-\d{2}$/;
  let format = "";
  if (fullregex.test(dateString)) {
    format = "full";
  } else if (compactregex.test(dateString)) {
    format = "compact";
  } else {
    return false;
  }
  const formattedDate = `${dateString}${format === "compact" ? "-15" : ""}`;
  return isValidDay(formattedDate);
};
function isValidDay(date) {
  const [year, month, day] = date.split("-").map(Number);
  const thirtyOneDays = [1, 3, 5, 7, 8, 10, 12];
  const thirtyDays = [4, 6, 9, 11];
  if (month < 1 || month > 12) {
    return false;
  } else if (thirtyDays.includes(month) && (day < 1 || day > 30)) {
    return false;
  } else if (thirtyOneDays.includes(month) && (day < 1 || day > 31)) {
    return false;
  } else if (!isLeapYear(year) && month === 2 && (day < 1 || day > 28)) {
    return false;
  } else if (isLeapYear(year) && month === 2 && (day < 1 || day > 29)) {
    return false;
  }
  return true;
}
function isLeapYear(y) {
  return !(y & 3 || !(y % 25) && y & 15);
}
function handleValidationResult(element, validationResult, label, errorEv, validEv, lang, errors) {
  if (!validationResult.valid) {
    element.errorMessage = validationResult.reason[lang];
    errorEv.emit({
      message: `${label} - ${validationResult.reason[lang]}`
    });
    if (validationResult.errors) {
      return validationResult.errors;
    }
  } else {
    element.errorMessage = "";
    validEv.emit();
  }
  return errors;
}
function formatHTMLErrorMessage(error, lang, el) {
  switch (error) {
    case "valueMissing":
      return I18N[lang][error];
    case "typeMismatch":
      if (el.type === "url" || el.type === "email") {
        return I18N[lang][error][el.type];
      } else {
        return I18N[lang][error];
      }
    case "tooLong":
      return I18N[lang][error].replace("{max}", el.maxlength || el.characterCount).replace("{current}", el.value.length);
    case "tooShort":
      return I18N[lang][error].replace("{min}", el.minlength).replace("{current}", el.value.length);
    case "rangeUnderflow":
      return I18N[lang][error].replace("{min}", el.min);
    case "rangeOverflow":
      return I18N[lang][error].replace("{max}", el.max);
    case "stepMismatch":
      return I18N[lang][error].replace("{lower}", Math.floor(Number(el.value) / Number(el.step)) * Number(el.step)).replace("{upper}", Math.floor(Number(el.value) / Number(el.step)) * Number(el.step) + Number(el.step));
    case "badInput":
    case "patternMismatch":
    default:
      return I18N[lang][error];
  }
}
function validateRadioCheckboxGroup(elements) {
  if (elements && elements.length > 0) {
    const oneValid = elements.some((r) => {
      var _a;
      return (_a = r.validity) === null || _a === void 0 ? void 0 : _a.valid;
    });
    const validity = {
      valueMissing: !oneValid,
      typeMismatch: false,
      patternMismatch: false,
      tooLong: false,
      tooShort: false,
      rangeUnderflow: false,
      rangeOverflow: false,
      stepMismatch: false,
      badInput: false,
      customError: false,
      valid: oneValid
    };
    return validity;
  }
}

export {
  inheritAttributes,
  assignLanguage,
  closestElement,
  observerConfig,
  emitEvent,
  logError,
  handleErrors,
  isValid,
  isValidDate,
  isValidDay,
  handleValidationResult,
  formatHTMLErrorMessage,
  validateRadioCheckboxGroup
};
//# sourceMappingURL=chunk-3B56HNU6.js.map
