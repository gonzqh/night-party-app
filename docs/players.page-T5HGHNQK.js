import {
  SessionService,
  addIcons,
  icons_exports
} from "./chunk-FLYVGBRG.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonModal2 as IonModal,
  IonSelect,
  IonSelectOption,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TJQERPMD.js";
import "./chunk-5UZFVFDN.js";
import "./chunk-ZANXXOCD.js";
import "./chunk-2WZOUF3G.js";
import "./chunk-PARCMA52.js";
import "./chunk-LKBYLB4C.js";
import "./chunk-Y62B47P5.js";
import "./chunk-6GY55RSK.js";
import "./chunk-7D2IXJO2.js";
import "./chunk-FZZSIR43.js";
import "./chunk-X4NBNE3H.js";
import "./chunk-CK6Z7TRK.js";
import "./chunk-ND3EZUDG.js";
import "./chunk-YAS4LRVC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-FIHNAPU4.js";

// node_modules/@capacitor/core/dist/index.js
var ExceptionCode;
(function(ExceptionCode2) {
  ExceptionCode2["Unimplemented"] = "UNIMPLEMENTED";
  ExceptionCode2["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
var CapacitorException = class extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }
};
var getPlatformId = (win) => {
  var _a, _b;
  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return "android";
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return "ios";
  } else {
    return "web";
  }
};
var createCapacitor = (win) => {
  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  const getPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };
  const isNativePlatform = () => getPlatform() !== "web";
  const isPluginAvailable = (pluginName) => {
    const plugin = registeredPlugins.get(pluginName);
    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      return true;
    }
    if (getPluginHeader(pluginName)) {
      return true;
    }
    return false;
  };
  const getPluginHeader = (pluginName) => {
    var _a;
    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find((h) => h.name === pluginName);
  };
  const handleError = (err) => win.console.error(err);
  const registeredPlugins = /* @__PURE__ */ new Map();
  const registerPlugin2 = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);
    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }
    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;
    const loadPluginImplementation = () => __async(null, null, function* () {
      if (!jsImplementation && platform in jsImplementations) {
        jsImplementation = typeof jsImplementations[platform] === "function" ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
      } else if (capCustomPlatform !== null && !jsImplementation && "web" in jsImplementations) {
        jsImplementation = typeof jsImplementations["web"] === "function" ? jsImplementation = yield jsImplementations["web"]() : jsImplementation = jsImplementations["web"];
      }
      return jsImplementation;
    });
    const createPluginMethod = (impl, prop) => {
      var _a, _b;
      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find((m) => prop === m.name);
        if (methodHeader) {
          if (methodHeader.rtype === "promise") {
            return (options) => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };
    const createPluginMethodWrapper = (prop) => {
      let remove;
      const wrapper = (...args) => {
        const p = loadPluginImplementation().then((impl) => {
          const fn = createPluginMethod(impl, prop);
          if (fn) {
            const p2 = fn(...args);
            remove = p2 === null || p2 === void 0 ? void 0 : p2.remove;
            return p2;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });
        if (prop === "addListener") {
          p.remove = () => __async(null, null, function* () {
            return remove();
          });
        }
        return p;
      };
      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
      Object.defineProperty(wrapper, "name", {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };
    const addListener = createPluginMethodWrapper("addListener");
    const removeListener = createPluginMethodWrapper("removeListener");
    const addListenerNative = (eventName, callback) => {
      const call = addListener({ eventName }, callback);
      const remove = () => __async(null, null, function* () {
        const callbackId = yield call;
        removeListener({
          eventName,
          callbackId
        }, callback);
      });
      const p = new Promise((resolve) => call.then(() => resolve({ remove })));
      p.remove = () => __async(null, null, function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };
    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case "$$typeof":
            return void 0;
          case "toJSON":
            return () => ({});
          case "addListener":
            return pluginHeader ? addListenerNative : addListener;
          case "removeListener":
            return removeListener;
          default:
            return createPluginMethodWrapper(prop);
        }
      }
    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: /* @__PURE__ */ new Set([...Object.keys(jsImplementations), ...pluginHeader ? [platform] : []])
    });
    return proxy;
  };
  if (!cap.convertFileSrc) {
    cap.convertFileSrc = (filePath) => filePath;
  }
  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.registerPlugin = registerPlugin2;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled;
  return cap;
};
var initCapacitorGlobal = (win) => win.Capacitor = createCapacitor(win);
var Capacitor = /* @__PURE__ */ initCapacitorGlobal(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
var registerPlugin = Capacitor.registerPlugin;
var WebPlugin = class {
  constructor() {
    this.listeners = {};
    this.retainedEventArguments = {};
    this.windowListeners = {};
  }
  addListener(eventName, listenerFunc) {
    let firstListener = false;
    const listeners = this.listeners[eventName];
    if (!listeners) {
      this.listeners[eventName] = [];
      firstListener = true;
    }
    this.listeners[eventName].push(listenerFunc);
    const windowListener = this.windowListeners[eventName];
    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }
    if (firstListener) {
      this.sendRetainedArgumentsForEvent(eventName);
    }
    const remove = () => __async(this, null, function* () {
      return this.removeListener(eventName, listenerFunc);
    });
    const p = Promise.resolve({ remove });
    return p;
  }
  removeAllListeners() {
    return __async(this, null, function* () {
      this.listeners = {};
      for (const listener in this.windowListeners) {
        this.removeWindowListener(this.windowListeners[listener]);
      }
      this.windowListeners = {};
    });
  }
  notifyListeners(eventName, data, retainUntilConsumed) {
    const listeners = this.listeners[eventName];
    if (!listeners) {
      if (retainUntilConsumed) {
        let args = this.retainedEventArguments[eventName];
        if (!args) {
          args = [];
        }
        args.push(data);
        this.retainedEventArguments[eventName] = args;
      }
      return;
    }
    listeners.forEach((listener) => listener(data));
  }
  hasListeners(eventName) {
    var _a;
    return !!((_a = this.listeners[eventName]) === null || _a === void 0 ? void 0 : _a.length);
  }
  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: (event) => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }
  unimplemented(msg = "not implemented") {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }
  unavailable(msg = "not available") {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }
  removeListener(eventName, listenerFunc) {
    return __async(this, null, function* () {
      const listeners = this.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      this.listeners[eventName].splice(index, 1);
      if (!this.listeners[eventName].length) {
        this.removeWindowListener(this.windowListeners[eventName]);
      }
    });
  }
  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }
  removeWindowListener(handle) {
    if (!handle) {
      return;
    }
    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }
  sendRetainedArgumentsForEvent(eventName) {
    const args = this.retainedEventArguments[eventName];
    if (!args) {
      return;
    }
    delete this.retainedEventArguments[eventName];
    args.forEach((arg) => {
      this.notifyListeners(eventName, arg);
    });
  }
};
var encode = (str) => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
var decode = (str) => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
var CapacitorCookiesPluginWeb = class extends WebPlugin {
  getCookies() {
    return __async(this, null, function* () {
      const cookies = document.cookie;
      const cookieMap = {};
      cookies.split(";").forEach((cookie) => {
        if (cookie.length <= 0)
          return;
        let [key, value] = cookie.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        key = decode(key).trim();
        value = decode(value).trim();
        cookieMap[key] = value;
      });
      return cookieMap;
    });
  }
  setCookie(options) {
    return __async(this, null, function* () {
      try {
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value);
        const expires = options.expires ? `; expires=${options.expires.replace("expires=", "")}` : "";
        const path = (options.path || "/").replace("path=", "");
        const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : "";
        document.cookie = `${encodedKey}=${encodedValue || ""}${expires}; path=${path}; ${domain};`;
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  deleteCookie(options) {
    return __async(this, null, function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  clearCookies() {
    return __async(this, null, function* () {
      try {
        const cookies = document.cookie.split(";") || [];
        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  clearAllCookies() {
    return __async(this, null, function* () {
      try {
        yield this.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
};
var CapacitorCookies = registerPlugin("CapacitorCookies", {
  web: () => new CapacitorCookiesPluginWeb()
});
var readBlobAsBase64 = (blob) => __async(null, null, function* () {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      resolve(base64String.indexOf(",") >= 0 ? base64String.split(",")[1] : base64String);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
  });
});
var normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map((k) => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
var buildUrlParams = (params, shouldEncode = true) => {
  if (!params)
    return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;
    if (Array.isArray(value)) {
      item = "";
      value.forEach((str) => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      });
      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }
    return `${accumulator}&${item}`;
  }, "");
  return output.substr(1);
};
var buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({ method: options.method || "GET", headers: options.headers }, extra);
  const headers = normalizeHttpHeaders(options.headers);
  const type = headers["content-type"] || "";
  if (typeof options.data === "string") {
    output.body = options.data;
  } else if (type.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }
    output.body = params.toString();
  } else if (type.includes("multipart/form-data") || options.data instanceof FormData) {
    const form = new FormData();
    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }
    output.body = form;
    const headers2 = new Headers(output.headers);
    headers2.delete("content-type");
    output.headers = headers2;
  } else if (type.includes("application/json") || typeof options.data === "object") {
    output.body = JSON.stringify(options.data);
  }
  return output;
};
var CapacitorHttpPluginWeb = class extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return __async(this, null, function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get("content-type") || "";
      let { responseType = "text" } = response.ok ? options : {};
      if (contentType.includes("application/json")) {
        responseType = "json";
      }
      let data;
      let blob;
      switch (responseType) {
        case "arraybuffer":
        case "blob":
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;
        case "json":
          data = yield response.json();
          break;
        case "document":
        case "text":
        default:
          data = yield response.text();
      }
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    });
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */
  get(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), { method: "GET" }));
    });
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */
  post(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), { method: "POST" }));
    });
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */
  put(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), { method: "PUT" }));
    });
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */
  patch(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), { method: "PATCH" }));
    });
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */
  delete(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), { method: "DELETE" }));
    });
  }
};
var CapacitorHttp = registerPlugin("CapacitorHttp", {
  web: () => new CapacitorHttpPluginWeb()
});
var SystemBarsStyle;
(function(SystemBarsStyle2) {
  SystemBarsStyle2["Dark"] = "DARK";
  SystemBarsStyle2["Light"] = "LIGHT";
  SystemBarsStyle2["Default"] = "DEFAULT";
})(SystemBarsStyle || (SystemBarsStyle = {}));
var SystemBarType;
(function(SystemBarType2) {
  SystemBarType2["StatusBar"] = "StatusBar";
  SystemBarType2["NavigationBar"] = "NavigationBar";
})(SystemBarType || (SystemBarType = {}));
var SystemBarsPluginWeb = class extends WebPlugin {
  setStyle() {
    return __async(this, null, function* () {
      this.unavailable("not available for web");
    });
  }
  setAnimation() {
    return __async(this, null, function* () {
      this.unavailable("not available for web");
    });
  }
  show() {
    return __async(this, null, function* () {
      this.unavailable("not available for web");
    });
  }
  hide() {
    return __async(this, null, function* () {
      this.unavailable("not available for web");
    });
  }
};
var SystemBars = registerPlugin("SystemBars", {
  web: () => new SystemBarsPluginWeb()
});

// node_modules/@capacitor/camera/dist/esm/definitions.js
var CameraSource;
(function(CameraSource2) {
  CameraSource2["Prompt"] = "PROMPT";
  CameraSource2["Camera"] = "CAMERA";
  CameraSource2["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function(CameraDirection2) {
  CameraDirection2["Rear"] = "REAR";
  CameraDirection2["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function(CameraResultType2) {
  CameraResultType2["Uri"] = "uri";
  CameraResultType2["Base64"] = "base64";
  CameraResultType2["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
var MediaType;
(function(MediaType2) {
  MediaType2[MediaType2["Photo"] = 0] = "Photo";
  MediaType2[MediaType2["Video"] = 1] = "Video";
})(MediaType || (MediaType = {}));
var MediaTypeSelection;
(function(MediaTypeSelection2) {
  MediaTypeSelection2[MediaTypeSelection2["Photo"] = 0] = "Photo";
  MediaTypeSelection2[MediaTypeSelection2["Video"] = 1] = "Video";
  MediaTypeSelection2[MediaTypeSelection2["All"] = 2] = "All";
})(MediaTypeSelection || (MediaTypeSelection = {}));
var EncodingType;
(function(EncodingType2) {
  EncodingType2[EncodingType2["JPEG"] = 0] = "JPEG";
  EncodingType2[EncodingType2["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var CameraErrorCode;
(function(CameraErrorCode2) {
  CameraErrorCode2["CameraPermissionDenied"] = "OS-PLUG-CAMR-0003";
  CameraErrorCode2["GalleryPermissionDenied"] = "OS-PLUG-CAMR-0005";
  CameraErrorCode2["NoCameraAvailable"] = "OS-PLUG-CAMR-0007";
  CameraErrorCode2["TakePhotoCancelled"] = "OS-PLUG-CAMR-0006";
  CameraErrorCode2["TakePhotoFailed"] = "OS-PLUG-CAMR-0010";
  CameraErrorCode2["TakePhotoInvalidArguments"] = "OS-PLUG-CAMR-0014";
  CameraErrorCode2["InvalidImageData"] = "OS-PLUG-CAMR-0008";
  CameraErrorCode2["EditPhotoFailed"] = "OS-PLUG-CAMR-0009";
  CameraErrorCode2["EditPhotoCancelled"] = "OS-PLUG-CAMR-0013";
  CameraErrorCode2["EditPhotoEmptyUri"] = "OS-PLUG-CAMR-0024";
  CameraErrorCode2["ImageNotFound"] = "OS-PLUG-CAMR-0011";
  CameraErrorCode2["ProcessImageFailed"] = "OS-PLUG-CAMR-0012";
  CameraErrorCode2["ChooseMediaFailed"] = "OS-PLUG-CAMR-0018";
  CameraErrorCode2["ChooseMediaCancelled"] = "OS-PLUG-CAMR-0020";
  CameraErrorCode2["MediaPathError"] = "OS-PLUG-CAMR-0021";
  CameraErrorCode2["FetchImageFromUriFailed"] = "OS-PLUG-CAMR-0028";
  CameraErrorCode2["RecordVideoFailed"] = "OS-PLUG-CAMR-0016";
  CameraErrorCode2["RecordVideoCancelled"] = "OS-PLUG-CAMR-0017";
  CameraErrorCode2["VideoNotFound"] = "OS-PLUG-CAMR-0025";
  CameraErrorCode2["PlayVideoFailed"] = "OS-PLUG-CAMR-0023";
  CameraErrorCode2["EncodeResultFailed"] = "OS-PLUG-CAMR-0019";
  CameraErrorCode2["FileNotFound"] = "OS-PLUG-CAMR-0027";
  CameraErrorCode2["InvalidArgument"] = "OS-PLUG-CAMR-0031";
  CameraErrorCode2["GeneralError"] = "OS-PLUG-CAMR-0026";
})(CameraErrorCode || (CameraErrorCode = {}));

// node_modules/@capacitor/camera/dist/esm/web.js
var CameraWeb = class extends WebPlugin {
  takePhoto(options) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        if (options.webUseInput) {
          this.takePhotoCameraInputExperience(options, resolve, reject);
        } else {
          this.takePhotoCameraExperience(options, resolve, reject);
        }
      }));
    });
  }
  recordVideo(_options) {
    return __async(this, null, function* () {
      throw this.unimplemented("recordVideo is not implemented on Web.");
    });
  }
  playVideo(_options) {
    return __async(this, null, function* () {
      throw this.unimplemented("playVideo is not implemented on Web.");
    });
  }
  chooseFromGallery(options) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        this.galleryInputExperience(options, resolve, reject);
      }));
    });
  }
  editPhoto(_options) {
    return __async(this, null, function* () {
      throw this.unimplemented("editPhoto is not implemented on Web.");
    });
  }
  editURIPhoto(_options) {
    return __async(this, null, function* () {
      throw this.unimplemented("editURIPhoto is not implemented on Web.");
    });
  }
  getPhoto(options) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        if (options.webUseInput || options.source === CameraSource.Photos) {
          this.fileInputExperience(options, resolve, reject);
        } else if (options.source === CameraSource.Prompt) {
          let actionSheet = document.querySelector("pwa-action-sheet");
          if (!actionSheet) {
            actionSheet = document.createElement("pwa-action-sheet");
            document.body.appendChild(actionSheet);
          }
          actionSheet.header = options.promptLabelHeader || "Photo";
          actionSheet.cancelable = false;
          actionSheet.options = [
            { title: options.promptLabelPhoto || "From Photos" },
            { title: options.promptLabelPicture || "Take Picture" }
          ];
          actionSheet.addEventListener("onSelection", (e) => __async(this, null, function* () {
            const selection = e.detail;
            if (selection === 0) {
              this.fileInputExperience(options, resolve, reject);
            } else {
              this.cameraExperience(options, resolve, reject);
            }
          }));
        } else {
          this.cameraExperience(options, resolve, reject);
        }
      }));
    });
  }
  pickImages(_options) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        this.multipleFileInputExperience(resolve, reject);
      }));
    });
  }
  cameraExperience(options, resolve, reject) {
    return __async(this, null, function* () {
      yield this._setupPWACameraModal(options.direction, (photo) => this._getCameraPhoto(photo, options), () => this.fileInputExperience(options, resolve, reject), resolve, reject);
    });
  }
  fileInputExperience(options, resolve, reject) {
    let input = document.querySelector("#_capacitor-camera-input");
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement("input");
      input.id = "_capacitor-camera-input";
      input.type = "file";
      input.hidden = true;
      document.body.appendChild(input);
      input.addEventListener("change", (_e) => {
        const file = input.files[0];
        let format = "jpeg";
        if (file.type === "image/png") {
          format = "png";
        } else if (file.type === "image/gif") {
          format = "gif";
        }
        if (options.resultType === "dataUrl" || options.resultType === "base64") {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            if (options.resultType === "dataUrl") {
              resolve({
                dataUrl: reader.result,
                format
              });
            } else if (options.resultType === "base64") {
              const b64 = reader.result.split(",")[1];
              resolve({
                base64String: b64,
                format
              });
            }
            cleanup();
          });
          reader.readAsDataURL(file);
        } else {
          resolve({
            webPath: URL.createObjectURL(file),
            format
          });
          cleanup();
        }
      });
      input.addEventListener("cancel", (_e) => {
        reject(new CapacitorException("User cancelled photos app"));
        cleanup();
      });
    }
    input.accept = "image/*";
    input.capture = true;
    if (options.source === CameraSource.Photos || options.source === CameraSource.Prompt) {
      input.removeAttribute("capture");
    } else if (options.direction === CameraDirection.Front) {
      input.capture = "user";
    } else if (options.direction === CameraDirection.Rear) {
      input.capture = "environment";
    }
    input.click();
  }
  multipleFileInputExperience(resolve, reject) {
    let input = document.querySelector("#_capacitor-camera-input-multiple");
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement("input");
      input.id = "_capacitor-camera-input-multiple";
      input.type = "file";
      input.hidden = true;
      input.multiple = true;
      document.body.appendChild(input);
      input.addEventListener("change", (_e) => {
        const photos = [];
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          let format = "jpeg";
          if (file.type === "image/png") {
            format = "png";
          } else if (file.type === "image/gif") {
            format = "gif";
          }
          photos.push({
            webPath: URL.createObjectURL(file),
            format
          });
        }
        resolve({ photos });
        cleanup();
      });
      input.addEventListener("cancel", (_e) => {
        reject(new CapacitorException("User cancelled photos app"));
        cleanup();
      });
    }
    input.accept = "image/*";
    input.click();
  }
  _getCameraPhoto(photo, options) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const format = this._getFileFormat(photo);
      if (options.resultType === "uri") {
        resolve({
          webPath: URL.createObjectURL(photo),
          format,
          saved: false
        });
      } else {
        reader.readAsDataURL(photo);
        reader.onloadend = () => {
          const r = reader.result;
          if (options.resultType === "dataUrl") {
            resolve({
              dataUrl: r,
              format,
              saved: false
            });
          } else {
            resolve({
              base64String: r.split(",")[1],
              format,
              saved: false
            });
          }
        };
        reader.onerror = (e) => {
          reject(e);
        };
      }
    });
  }
  takePhotoCameraExperience(options, resolve, reject) {
    return __async(this, null, function* () {
      yield this._setupPWACameraModal(options.cameraDirection, (photo) => {
        var _a;
        return this._buildPhotoMediaResult(photo, (_a = options.includeMetadata) !== null && _a !== void 0 ? _a : false);
      }, () => this.takePhotoCameraInputExperience(options, resolve, reject), resolve, reject);
    });
  }
  takePhotoCameraInputExperience(options, resolve, reject) {
    const input = this._createFileInput("_capacitor-camera-input-takephoto");
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    input.onchange = (_e) => __async(this, null, function* () {
      var _a;
      if (!this._validateFileInput(input, reject, cleanup)) {
        return;
      }
      const file = input.files[0];
      resolve(yield this._buildPhotoMediaResult(file, (_a = options.includeMetadata) !== null && _a !== void 0 ? _a : false));
      cleanup();
    });
    input.oncancel = () => {
      reject(new CapacitorException("User cancelled photos app"));
      cleanup();
    };
    input.accept = "image/*";
    if (options.cameraDirection === CameraDirection.Front) {
      input.capture = "user";
    } else {
      input.capture = "environment";
    }
    input.click();
  }
  galleryInputExperience(options, resolve, reject) {
    var _a, _b;
    const input = this._createFileInput("_capacitor-camera-input-gallery");
    input.multiple = (_a = options.allowMultipleSelection) !== null && _a !== void 0 ? _a : false;
    const cleanup = () => {
      var _a2;
      (_a2 = input.parentNode) === null || _a2 === void 0 ? void 0 : _a2.removeChild(input);
    };
    input.onchange = (_e) => __async(this, null, function* () {
      var _a2;
      if (!this._validateFileInput(input, reject, cleanup)) {
        return;
      }
      const results = [];
      for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        if (file.type.startsWith("image/")) {
          results.push(yield this._buildPhotoMediaResult(file, (_a2 = options.includeMetadata) !== null && _a2 !== void 0 ? _a2 : false));
        } else if (file.type.startsWith("video/")) {
          const format = this._getFileFormat(file);
          let thumbnail;
          let resolution;
          let duration;
          try {
            const videoInfo = yield this._getVideoMetadata(file);
            thumbnail = videoInfo.thumbnail;
            if (options.includeMetadata) {
              resolution = videoInfo.resolution;
              duration = videoInfo.duration;
            }
          } catch (e) {
            console.warn("Failed to get video metadata:", e);
          }
          const result = {
            type: MediaType.Video,
            thumbnail,
            webPath: URL.createObjectURL(file),
            saved: false
          };
          if (options.includeMetadata) {
            result.metadata = {
              format,
              resolution,
              size: file.size,
              creationDate: new Date(file.lastModified).toISOString(),
              duration
            };
          }
          results.push(result);
        }
      }
      resolve({ results });
      cleanup();
    });
    input.oncancel = () => {
      reject(new CapacitorException("User cancelled photos app"));
      cleanup();
    };
    const mediaType = (_b = options.mediaType) !== null && _b !== void 0 ? _b : MediaTypeSelection.Photo;
    if (mediaType === MediaTypeSelection.Photo) {
      input.accept = "image/*";
    } else if (mediaType === MediaTypeSelection.Video) {
      input.accept = "video/*";
    } else {
      input.accept = "image/*,video/*";
    }
    input.click();
  }
  _getFileFormat(file) {
    if (file.type === "image/png") {
      return "png";
    } else if (file.type === "image/gif") {
      return "gif";
    } else if (file.type.startsWith("video/")) {
      return file.type.split("/")[1];
    } else if (file.type.startsWith("image/")) {
      return "jpeg";
    }
    return file.type.split("/")[1] || "jpeg";
  }
  _buildPhotoMediaResult(file, includeMetadata) {
    return __async(this, null, function* () {
      const format = this._getFileFormat(file);
      const thumbnail = yield this._getBase64FromFile(file);
      const result = {
        type: MediaType.Photo,
        thumbnail,
        webPath: URL.createObjectURL(file),
        saved: false
      };
      if (includeMetadata) {
        const resolution = yield this._getImageResolution(file);
        result.metadata = {
          format,
          resolution,
          size: file.size,
          creationDate: "lastModified" in file ? new Date(file.lastModified).toISOString() : (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      return result;
    });
  }
  _validateFileInput(input, reject, cleanup) {
    if (!input.files || input.files.length === 0) {
      const message = input.multiple ? "No files selected" : "No file selected";
      reject(new CapacitorException(message));
      cleanup();
      return false;
    }
    return true;
  }
  _setupPWACameraModal(cameraDirection, onPhotoCallback, fallbackCallback, resolve, reject) {
    return __async(this, null, function* () {
      if (customElements.get("pwa-camera-modal")) {
        const cameraModal = document.createElement("pwa-camera-modal");
        cameraModal.facingMode = cameraDirection === CameraDirection.Front ? "user" : "environment";
        document.body.appendChild(cameraModal);
        try {
          yield cameraModal.componentOnReady();
          cameraModal.addEventListener("onPhoto", (e) => __async(null, null, function* () {
            const photo = e.detail;
            if (photo === null) {
              reject(new CapacitorException("User cancelled photos app"));
            } else if (photo instanceof Error) {
              reject(photo);
            } else {
              resolve(yield onPhotoCallback(photo));
            }
            cameraModal.dismiss();
            document.body.removeChild(cameraModal);
          }));
          cameraModal.present();
        } catch (e) {
          fallbackCallback();
        }
      } else {
        console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
        fallbackCallback();
      }
    });
  }
  _createFileInput(id) {
    let input = document.querySelector(`#${id}`);
    if (!input) {
      input = document.createElement("input");
      input.id = id;
      input.type = "file";
      input.hidden = true;
      document.body.appendChild(input);
    }
    return input;
  }
  _getImageResolution(image) {
    return __async(this, null, function* () {
      try {
        const bitmap = yield createImageBitmap(image);
        const resolution = `${bitmap.width}x${bitmap.height}`;
        bitmap.close();
        return resolution;
      } catch (e) {
        console.warn("Failed to get image resolution:", e);
        return void 0;
      }
    });
  }
  _getBase64FromFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        const base64 = dataUrl.split(",")[1];
        resolve(base64);
      };
      reader.onerror = (e) => {
        reject(e);
      };
      reader.readAsDataURL(file);
    });
  }
  _getVideoMetadata(videoFile) {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.muted = true;
      video.onloadedmetadata = () => {
        const seekTime = Math.min(1, video.duration * 0.1);
        video.currentTime = seekTime;
      };
      video.onseeked = () => {
        const result = {
          resolution: `${video.videoWidth}x${video.videoHeight}`,
          duration: video.duration
        };
        try {
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            result.thumbnail = canvas.toDataURL("image/jpeg", 0.8).split(",")[1];
          }
        } catch (e) {
          console.warn("Failed to generate video thumbnail:", e);
        }
        URL.revokeObjectURL(video.src);
        resolve(result);
      };
      video.onerror = () => {
        URL.revokeObjectURL(video.src);
        resolve({});
      };
      video.src = URL.createObjectURL(videoFile);
    });
  }
  checkPermissions() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.permissions) {
        throw this.unavailable("Permissions API not available in this browser");
      }
      try {
        const permission = yield window.navigator.permissions.query({
          name: "camera"
        });
        return {
          camera: permission.state,
          photos: "granted"
        };
      } catch (_a) {
        throw this.unavailable("Camera permissions are not available in this browser");
      }
    });
  }
  requestPermissions() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
  pickLimitedLibraryPhotos() {
    return __async(this, null, function* () {
      throw this.unavailable("Not implemented on web.");
    });
  }
  getLimitedLibraryPhotos() {
    return __async(this, null, function* () {
      throw this.unavailable("Not implemented on web.");
    });
  }
};
var Camera = new CameraWeb();

// node_modules/@capacitor/camera/dist/esm/index.js
var Camera2 = registerPlugin("Camera", {
  web: () => new CameraWeb()
});

// src/app/pages/players/players.page.ts
function PlayersPage_div_9_ion_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-avatar", 23);
    \u0275\u0275element(1, "img", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", p_r2.photo, \u0275\u0275sanitizeUrl);
  }
}
function PlayersPage_div_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "ion-icon", 26);
    \u0275\u0275elementEnd();
  }
}
function PlayersPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, PlayersPage_div_9_ion_avatar_1_Template, 2, 1, "ion-avatar", 15)(2, PlayersPage_div_9_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "div", 16)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "ion-button", 19);
    \u0275\u0275listener("click", function PlayersPage_div_9_Template_ion_button_click_10_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editPlayer(p_r2));
    });
    \u0275\u0275element(11, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-button", 21);
    \u0275\u0275listener("click", function PlayersPage_div_9_Template_ion_button_click_12_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deletePlayer(p_r2.id));
    });
    \u0275\u0275element(13, "ion-icon", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const defaultAvatar_r4 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r2.photo)("ngIfElse", defaultAvatar_r4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.role);
  }
}
function PlayersPage_ng_template_14_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 24);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.tempPhoto, \u0275\u0275sanitizeUrl);
  }
}
function PlayersPage_ng_template_14_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "ion-icon", 39);
    \u0275\u0275elementEnd();
  }
}
function PlayersPage_ng_template_14_ion_select_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275property("value", r_r6.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r6.label, " ");
  }
}
function PlayersPage_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 27)(1, "div", 28)(2, "div", 29);
    \u0275\u0275template(3, PlayersPage_ng_template_14_img_3_Template, 1, 1, "img", 30)(4, PlayersPage_ng_template_14_ng_template_4_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function PlayersPage_ng_template_14_Template_ion_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.modalName, $event) || (ctx_r2.modalName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32)(8, "ion-select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function PlayersPage_ng_template_14_Template_ion_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.modalRole, $event) || (ctx_r2.modalRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(9, PlayersPage_ng_template_14_ion_select_option_9_Template, 2, 2, "ion-select-option", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-button", 35);
    \u0275\u0275listener("click", function PlayersPage_ng_template_14_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.takePhoto());
    });
    \u0275\u0275text(11, " Tomar foto (Opcional) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-button", 36);
    \u0275\u0275listener("click", function PlayersPage_ng_template_14_Template_ion_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.savePlayer());
    });
    \u0275\u0275text(13, " Guardar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-button", 37);
    \u0275\u0275listener("click", function PlayersPage_ng_template_14_Template_ion_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(15, " Cancelar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const placeholder_r7 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.tempPhoto)("ngIfElse", placeholder_r7);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.modalName);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.modalRole);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.roles);
  }
}
var _PlayersPage = class _PlayersPage {
  constructor(session, router) {
    this.session = session;
    this.router = router;
    this.name = "";
    this.modalName = "";
    this.modalRole = "VERSATIL";
    this.players = [];
    this.isModalOpen = false;
    this.roles = [
      { id: "ACT", label: "ACTIVO", icon: "shield-outline" },
      { id: "PAS", label: "PASIVO", icon: "person-outline" },
      { id: "VER", label: "VERSATIL", icon: "flash-outline" }
    ];
    addIcons(icons_exports);
  }
  // ➕ abrir modal (crear nuevo jugador)
  openModal() {
    this.modalName = this.name || "";
    this.modalRole = "VERSATIL";
    this.tempPhoto = void 0;
    this.editingId = void 0;
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
    this.modalName = "";
    this.modalRole = "VERSATIL";
    this.tempPhoto = void 0;
    this.editingId = void 0;
  }
  // 📸 tomar foto
  takePhoto() {
    return __async(this, null, function* () {
      try {
        const image = yield Camera2.getPhoto({
          quality: 70,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Camera
        });
        this.tempPhoto = image.dataUrl;
      } catch (err) {
        console.error("Error c\xE1mara:", err);
      }
    });
  }
  savePlayer() {
    if (!this.modalName.trim())
      return;
    if (this.editingId) {
      const index = this.players.findIndex((p) => p.id === this.editingId);
      if (index !== -1) {
        this.players[index] = __spreadProps(__spreadValues({}, this.players[index]), {
          name: this.modalName,
          role: this.modalRole,
          photo: this.tempPhoto
        });
      }
    } else {
      const newPlayer = {
        id: Date.now().toString(),
        name: this.modalName,
        role: this.modalRole,
        photo: this.tempPhoto
      };
      this.players.push(newPlayer);
    }
    this.name = "";
    this.closeModal();
  }
  editPlayer(player) {
    this.editingId = player.id;
    this.modalName = player.name;
    this.modalRole = player.role ?? "VERSATIL";
    this.tempPhoto = player.photo;
    this.isModalOpen = true;
  }
  deletePlayer(id) {
    this.players = this.players.filter((p) => p.id !== id);
  }
  continue() {
    const minPlayers = this.session.getSessionData().game?.minPlayers ?? 0;
    const maxPlayers = this.session.getSessionData().game?.maxPlayers ?? Infinity;
    if (this.players.length < minPlayers) {
      alert(`M\xEDnimo ${minPlayers} jugadores`);
      return;
    }
    if (this.players.length > maxPlayers) {
      alert(`M\xE1ximo ${maxPlayers} jugadores`);
      return;
    }
    console.log(this.session.getSessionData());
    this.session.setPlayers(this.players);
    this.router.navigate(["/punishments"]);
  }
};
_PlayersPage.\u0275fac = function PlayersPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlayersPage)(\u0275\u0275directiveInject(SessionService), \u0275\u0275directiveInject(Router));
};
_PlayersPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlayersPage, selectors: [["app-players"]], decls: 15, vars: 3, consts: [["defaultAvatar", ""], ["placeholder", ""], [1, "app-background"], [1, "container"], [1, "title"], [1, "input-card"], ["placeholder", "Agregar jugador", 1, "player-input", 3, "ngModelChange", "ngModel"], [1, "add-btn", 3, "click"], ["name", "add-outline"], [1, "players-list"], ["class", "player-card", 4, "ngFor", "ngForOf"], [1, "fixed-button"], ["expand", "block", 1, "start-button", 3, "click"], [3, "isOpen"], [1, "player-card"], ["class", "avatar", 4, "ngIf", "ngIfElse"], [1, "player-info"], [1, "role"], [1, "actions"], ["fill", "clear", 3, "click"], ["name", "create-outline"], ["fill", "clear", "color", "danger", 3, "click"], ["name", "trash-outline"], [1, "avatar"], [3, "src"], [1, "default-avatar"], ["name", "person-outline"], [1, "modal-content"], [1, "modal-container"], [1, "photo-box"], [3, "src", 4, "ngIf", "ngIfElse"], ["placeholder", "Nombre del jugador", 1, "modal-input", 3, "ngModelChange", "ngModel"], [1, "select-box"], ["placeholder", "Selecciona rol", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["expand", "block", 1, "modal-btn", 3, "click"], ["expand", "block", 1, "modal-btn", "success", 3, "click"], ["expand", "block", 1, "modal-btn", "cancel", 3, "click"], [1, "placeholder"], ["name", "person-circle-outline"], [3, "value"]], template: function PlayersPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 2)(1, "div", 3)(2, "h1", 4);
    \u0275\u0275text(3, "Jugadores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "ion-input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function PlayersPage_Template_ion_input_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-button", 7);
    \u0275\u0275listener("click", function PlayersPage_Template_ion_button_click_6_listener() {
      return ctx.openModal();
    });
    \u0275\u0275element(7, "ion-icon", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275template(9, PlayersPage_div_9_Template, 14, 4, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 11)(11, "ion-button", 12);
    \u0275\u0275listener("click", function PlayersPage_Template_ion_button_click_11_listener() {
      return ctx.continue();
    });
    \u0275\u0275text(12, " Continuar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-modal", 13);
    \u0275\u0275template(14, PlayersPage_ng_template_14_Template, 16, 5, "ng-template");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.players);
    \u0275\u0275advance(4);
    \u0275\u0275property("isOpen", ctx.isModalOpen);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
  IonContent,
  IonButton,
  IonInput,
  IonAvatar,
  IonModal,
  IonIcon,
  IonSelect,
  IonSelectOption
], styles: ['@charset "UTF-8";\n\n\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-bottom: 120px;\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n}\n.input-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  margin-bottom: 20px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.player-input[_ngcontent-%COMP%] {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.5);\n}\n.add-btn[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 12px;\n  width: 44px;\n  height: 44px;\n}\n.players-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.player-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition: transform 0.2s ease;\n}\n.player-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n}\n.player-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: white;\n}\n.fixed-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n}\n.start-button[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 16px;\n  font-weight: 700;\n  font-size: 18px;\n  height: 50px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  --background: rgba(10, 10, 20, 0.95);\n}\n.modal-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.photo-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 14px;\n  margin-bottom: 20px;\n}\n.modal-btn[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  --border-radius: 14px;\n}\n.modal-btn.success[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n}\n.modal-btn.cancel[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.default-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n}\n.actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  gap: 6px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      rgba(10, 10, 20, 0.95),\n      rgba(20, 10, 30, 0.95));\n}\n.photo-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n}\n.photo-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.placeholder[_ngcontent-%COMP%] {\n  width: 80%;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 40px;\n}\n.modal-input[_ngcontent-%COMP%] {\n  padding: 10px !important;\n  text-align-last: center;\n}\n.modal-input[_ngcontent-%COMP%], \n.select-box[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 10px;\n  justify-items: anchor-center;\n}\n.role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.modal-btn[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  --border-radius: 14px;\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n}\n.modal-btn.success[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n}\n.modal-btn.cancel[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n/*# sourceMappingURL=players.page.css.map */'] });
var PlayersPage = _PlayersPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlayersPage, [{
    type: Component,
    args: [{ selector: "app-players", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonButton,
      IonInput,
      IonAvatar,
      IonModal,
      IonIcon,
      IonSelect,
      IonSelectOption
    ], template: '<ion-content class="app-background">\n\n  <div class="container">\n\n    <h1 class="title">Jugadores</h1>\n\n    <!-- INPUT -->\n    <div class="input-card">\n\n      <ion-input\n        [(ngModel)]="name"\n        placeholder="Agregar jugador"\n        class="player-input"\n      ></ion-input>\n\n      <ion-button class="add-btn" (click)="openModal()">\n        <ion-icon name="add-outline"></ion-icon>\n      </ion-button>\n\n    </div>\n\n    <!-- LISTA -->\n    <div class="players-list">\n\n      <div class="player-card" *ngFor="let p of players">\n\n        <ion-avatar class="avatar" *ngIf="p.photo; else defaultAvatar">\n          <img [src]="p.photo" />\n        </ion-avatar>\n\n        <ng-template #defaultAvatar>\n          <div class="default-avatar">\n            <ion-icon name="person-outline"></ion-icon>\n          </div>\n        </ng-template>\n\n        <div class="player-info">\n          <h2>{{ p.name }}</h2>\n          <small class="role">{{ p.role }}</small>\n        </div>\n\n        <div class="actions">\n          <ion-button fill="clear" (click)="editPlayer(p)">\n            <ion-icon name="create-outline"></ion-icon>\n          </ion-button>\n\n          <ion-button fill="clear" color="danger" (click)="deletePlayer(p.id)">\n            <ion-icon name="trash-outline"></ion-icon>\n          </ion-button>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <!-- CONTINUAR -->\n  <div class="fixed-button">\n    <ion-button expand="block" class="start-button" (click)="continue()">\n      Continuar\n    </ion-button>\n  </div>\n\n  <!-- MODAL CONSISTENTE (NO NEGRO ROTO) -->\n  <ion-modal [isOpen]="isModalOpen">\n    <ng-template>\n      <ion-content class="modal-content">\n\n        <div class="modal-container">\n\n          <!-- FOTO -->\n          <div class="photo-box">\n\n            <img *ngIf="tempPhoto; else placeholder" [src]="tempPhoto" />\n\n            <ng-template #placeholder>\n              <div class="placeholder">\n                <ion-icon name="person-circle-outline"></ion-icon>\n              </div>\n            </ng-template>\n\n          </div>\n\n          <!-- NOMBRE -->\n          <ion-input\n            [(ngModel)]="modalName"\n            placeholder="Nombre del jugador"\n            class="modal-input"\n          ></ion-input>\n\n          <!-- ROL SELECT -->\n          <div class="select-box">\n\n            <ion-select [(ngModel)]="modalRole" placeholder="Selecciona rol">\n              <ion-select-option *ngFor="let r of roles" [value]="r.label">\n                {{ r.label }}\n              </ion-select-option>\n            </ion-select>\n\n          </div>\n\n          <!-- BOTONES -->\n          <ion-button expand="block" class="modal-btn" (click)="takePhoto()">\n            Tomar foto (Opcional)\n          </ion-button>\n\n          <ion-button expand="block" class="modal-btn success" (click)="savePlayer()">\n            Guardar\n          </ion-button>\n\n          <ion-button expand="block" class="modal-btn cancel" (click)="closeModal()">\n            Cancelar\n          </ion-button>\n\n        </div>\n\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n</ion-content>', styles: ['@charset "UTF-8";\n\n/* src/app/pages/players/players.page.scss */\n.container {\n  padding: 20px;\n  padding-bottom: 120px;\n}\n.title {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n}\n.input-card {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  margin-bottom: 20px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.player-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.5);\n}\n.add-btn {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 12px;\n  width: 44px;\n  height: 44px;\n}\n.players-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.player-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition: transform 0.2s ease;\n}\n.player-card:active {\n  transform: scale(0.98);\n}\n.avatar {\n  width: 42px;\n  height: 42px;\n}\n.player-info h2 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: white;\n}\n.fixed-button {\n  position: fixed;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n}\n.start-button {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 16px;\n  font-weight: 700;\n  font-size: 18px;\n  height: 50px;\n}\n.modal-content {\n  --background: rgba(10, 10, 20, 0.95);\n}\n.modal-container {\n  padding: 20px;\n}\n.modal-title {\n  text-align: center;\n  color: white;\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.photo-preview img {\n  width: 100%;\n  border-radius: 14px;\n  margin-bottom: 20px;\n}\n.modal-btn {\n  margin-bottom: 10px;\n  --border-radius: 14px;\n}\n.modal-btn.success {\n  --background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n}\n.modal-btn.cancel {\n  --background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.default-avatar {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n}\n.actions {\n  margin-left: auto;\n  display: flex;\n  gap: 6px;\n}\n.modal-content {\n  --background:\n    linear-gradient(\n      135deg,\n      rgba(10, 10, 20, 0.95),\n      rgba(20, 10, 30, 0.95));\n}\n.photo-box {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n}\n.photo-box img,\n.placeholder {\n  width: 80%;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 40px;\n}\n.modal-input {\n  padding: 10px !important;\n  text-align-last: center;\n}\n.modal-input,\n.select-box ion-select {\n  margin-bottom: 12px;\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 10px;\n  justify-items: anchor-center;\n}\n.role {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.modal-btn {\n  margin-bottom: 10px;\n  --border-radius: 14px;\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n}\n.modal-btn.success {\n  --background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n}\n.modal-btn.cancel {\n  --background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n/*# sourceMappingURL=players.page.css.map */\n'] }]
  }], () => [{ type: SessionService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlayersPage, { className: "PlayersPage", filePath: "src/app/pages/players/players.page.ts", lineNumber: 42 });
})();
export {
  PlayersPage
};
/*! Bundled license information:

@capacitor/core/dist/index.js:
  (*! Capacitor: https://capacitorjs.com/ - MIT License *)
*/
//# sourceMappingURL=players.page-T5HGHNQK.js.map
