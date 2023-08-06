// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2KqCd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "69ac763650a7f4bc";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jrhVf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _helpersJs = require("./helpers.js");
var _helpersJsDefault = parcelHelpers.interopDefault(_helpersJs);
window.addEventListener("load", ()=>{
    const room = (0, _helpersJsDefault.default).getQString(location.href, "room");
    const username = sessionStorage.getItem("username");
    if (!room) document.querySelector("#room-create").attributes.removeNamedItem("hidden");
    else if (!username) document.querySelector("#username-set").attributes.removeNamedItem("hidden");
    else {
        let commElem = document.getElementsByClassName("room-comm");
        for(let i = 0; i < commElem.length; i++)commElem[i].attributes.removeNamedItem("hidden");
        var pc = [];
        let socket = io("http://localhost:3000/stream");
        var socketId = "";
        var randomNumber = `__${(0, _helpersJsDefault.default).generateRandomString()}__${(0, _helpersJsDefault.default).generateRandomString()}__`;
        var myStream = "";
        var screen = "";
        var recordedStream = [];
        var mediaRecorder = "";
        //Get user video by default
        getAndSetUserStream();
        socket.on("connect", ()=>{
            //set socketId
            socketId = socket.io.engine.id;
            document.getElementById("randomNumber").innerText = randomNumber;
            socket.emit("subscribe", {
                room: room,
                socketId: socketId
            });
            socket.on("new user", (data)=>{
                socket.emit("newUserStart", {
                    to: data.socketId,
                    sender: socketId
                });
                pc.push(data.socketId);
                init(true, data.socketId);
            });
            socket.on("newUserStart", (data)=>{
                pc.push(data.sender);
                init(false, data.sender);
            });
            socket.on("ice candidates", async (data)=>{
                data.candidate && await pc[data.sender].addIceCandidate(new RTCIceCandidate(data.candidate));
            });
            socket.on("sdp", async (data)=>{
                if (data.description.type === "offer") {
                    data.description && await pc[data.sender].setRemoteDescription(new RTCSessionDescription(data.description));
                    (0, _helpersJsDefault.default).getUserFullMedia().then(async (stream)=>{
                        if (!document.getElementById("local").srcObject) (0, _helpersJsDefault.default).setLocalStream(stream);
                        //save my stream
                        myStream = stream;
                        stream.getTracks().forEach((track)=>{
                            pc[data.sender].addTrack(track, stream);
                        });
                        let answer = await pc[data.sender].createAnswer();
                        await pc[data.sender].setLocalDescription(answer);
                        socket.emit("sdp", {
                            description: pc[data.sender].localDescription,
                            to: data.sender,
                            sender: socketId
                        });
                    }).catch((e)=>{
                        console.error(e);
                    });
                } else if (data.description.type === "answer") await pc[data.sender].setRemoteDescription(new RTCSessionDescription(data.description));
            });
            socket.on("chat", (data)=>{
                (0, _helpersJsDefault.default).addChat(data, "remote");
            });
        });
        function getAndSetUserStream() {
            (0, _helpersJsDefault.default).getUserFullMedia().then((stream)=>{
                //save my stream
                myStream = stream;
                (0, _helpersJsDefault.default).setLocalStream(stream);
            }).catch((e)=>{
                console.error(`stream error: ${e}`);
            });
        }
        function sendMsg(msg) {
            let data = {
                room: room,
                msg: msg,
                sender: `${username} (${randomNumber})`
            };
            //emit chat message
            socket.emit("chat", data);
            //add localchat
            (0, _helpersJsDefault.default).addChat(data, "local");
        }
        function init(createOffer, partnerName) {
            pc[partnerName] = new RTCPeerConnection((0, _helpersJsDefault.default).getIceServer());
            if (screen && screen.getTracks().length) screen.getTracks().forEach((track)=>{
                pc[partnerName].addTrack(track, screen); //should trigger negotiationneeded event
            });
            else if (myStream) myStream.getTracks().forEach((track)=>{
                pc[partnerName].addTrack(track, myStream); //should trigger negotiationneeded event
            });
            else (0, _helpersJsDefault.default).getUserFullMedia().then((stream)=>{
                //save my stream
                myStream = stream;
                stream.getTracks().forEach((track)=>{
                    pc[partnerName].addTrack(track, stream); //should trigger negotiationneeded event
                });
                (0, _helpersJsDefault.default).setLocalStream(stream);
            }).catch((e)=>{
                console.error(`stream error: ${e}`);
            });
            //create offer
            if (createOffer) pc[partnerName].onnegotiationneeded = async ()=>{
                let offer = await pc[partnerName].createOffer();
                await pc[partnerName].setLocalDescription(offer);
                socket.emit("sdp", {
                    description: pc[partnerName].localDescription,
                    to: partnerName,
                    sender: socketId
                });
            };
            //send ice candidate to partnerNames
            pc[partnerName].onicecandidate = ({ candidate })=>{
                socket.emit("ice candidates", {
                    candidate: candidate,
                    to: partnerName,
                    sender: socketId
                });
            };
            //add
            pc[partnerName].ontrack = (e)=>{
                let str = e.streams[0];
                if (document.getElementById(`${partnerName}-video`)) document.getElementById(`${partnerName}-video`).srcObject = str;
                else {
                    //video elem
                    let newVid = document.createElement("video");
                    newVid.id = `${partnerName}-video`;
                    newVid.srcObject = str;
                    newVid.autoplay = true;
                    newVid.className = "remote-video";
                    //video controls elements
                    let controlDiv = document.createElement("div");
                    controlDiv.className = "remote-video-controls";
                    controlDiv.innerHTML = `<i class="fa fa-microphone text-white pr-3 mute-remote-mic" title="Mute"></i>
                        <i class="fa fa-expand text-white expand-remote-video" title="Expand"></i>`;
                    //create a new div for card
                    let cardDiv = document.createElement("div");
                    cardDiv.className = "card card-sm";
                    cardDiv.id = partnerName;
                    cardDiv.appendChild(newVid);
                    cardDiv.appendChild(controlDiv);
                    //put div in main-section elem
                    document.getElementById("videos").appendChild(cardDiv);
                    (0, _helpersJsDefault.default).adjustVideoElemSize();
                }
            };
            pc[partnerName].onconnectionstatechange = (d)=>{
                switch(pc[partnerName].iceConnectionState){
                    case "disconnected":
                    case "failed":
                        (0, _helpersJsDefault.default).closeVideo(partnerName);
                        break;
                    case "closed":
                        (0, _helpersJsDefault.default).closeVideo(partnerName);
                        break;
                }
            };
            pc[partnerName].onsignalingstatechange = (d)=>{
                switch(pc[partnerName].signalingState){
                    case "closed":
                        console.log("Signalling state is 'closed'");
                        (0, _helpersJsDefault.default).closeVideo(partnerName);
                        break;
                }
            };
        }
        function shareScreen() {
            (0, _helpersJsDefault.default).shareScreen().then((stream)=>{
                (0, _helpersJsDefault.default).toggleShareIcons(true);
                //disable the video toggle btns while sharing screen. This is to ensure clicking on the btn does not interfere with the screen sharing
                //It will be enabled was user stopped sharing screen
                (0, _helpersJsDefault.default).toggleVideoBtnDisabled(true);
                //save my screen stream
                screen = stream;
                //share the new stream with all partners
                broadcastNewTracks(stream, "video", false);
                //When the stop sharing button shown by the browser is clicked
                screen.getVideoTracks()[0].addEventListener("ended", ()=>{
                    stopSharingScreen();
                });
            }).catch((e)=>{
                console.error(e);
            });
        }
        function stopSharingScreen() {
            //enable video toggle btn
            (0, _helpersJsDefault.default).toggleVideoBtnDisabled(false);
            return new Promise((res, rej)=>{
                screen.getTracks().length && screen.getTracks().forEach((track)=>track.stop());
                res();
            }).then(()=>{
                (0, _helpersJsDefault.default).toggleShareIcons(false);
                broadcastNewTracks(myStream, "video");
            }).catch((e)=>{
                console.error(e);
            });
        }
        function broadcastNewTracks(stream, type, mirrorMode = true) {
            (0, _helpersJsDefault.default).setLocalStream(stream, mirrorMode);
            let track = type == "audio" ? stream.getAudioTracks()[0] : stream.getVideoTracks()[0];
            for(let p in pc){
                let pName = pc[p];
                if (typeof pc[pName] == "object") (0, _helpersJsDefault.default).replaceTrack(track, pc[pName]);
            }
        }
        function toggleRecordingIcons(isRecording) {
            let e = document.getElementById("record");
            if (isRecording) {
                e.setAttribute("title", "Stop recording");
                e.children[0].classList.add("text-danger");
                e.children[0].classList.remove("text-white");
            } else {
                e.setAttribute("title", "Record");
                e.children[0].classList.add("text-white");
                e.children[0].classList.remove("text-danger");
            }
        }
        function startRecording(stream) {
            mediaRecorder = new MediaRecorder(stream, {
                mimeType: "video/webm;codecs=vp9"
            });
            mediaRecorder.start(1000);
            toggleRecordingIcons(true);
            mediaRecorder.ondataavailable = function(e) {
                recordedStream.push(e.data);
            };
            mediaRecorder.onstop = function() {
                toggleRecordingIcons(false);
                (0, _helpersJsDefault.default).saveRecordedStream(recordedStream, username);
                setTimeout(()=>{
                    recordedStream = [];
                }, 3000);
            };
            mediaRecorder.onerror = function(e) {
                console.error(e);
            };
        }
        document.getElementById("chat-input-btn").addEventListener("click", (e)=>{
            console.log("here: ", document.getElementById("chat-input").value);
            if (document.getElementById("chat-input").value.trim()) {
                sendMsg(document.getElementById("chat-input").value);
                setTimeout(()=>{
                    document.getElementById("chat-input").value = "";
                }, 50);
            }
        });
        //Chat textarea
        document.getElementById("chat-input").addEventListener("keypress", (e)=>{
            if (e.which === 13 && e.target.value.trim()) {
                e.preventDefault();
                sendMsg(e.target.value);
                setTimeout(()=>{
                    e.target.value = "";
                }, 50);
            }
        });
        //When the video icon is clicked
        document.getElementById("toggle-video").addEventListener("click", (e)=>{
            e.preventDefault();
            let elem = document.getElementById("toggle-video");
            if (myStream.getVideoTracks()[0].enabled) {
                e.target.classList.remove("fa-video");
                e.target.classList.add("fa-video-slash");
                elem.setAttribute("title", "Show Video");
                myStream.getVideoTracks()[0].enabled = false;
            } else {
                e.target.classList.remove("fa-video-slash");
                e.target.classList.add("fa-video");
                elem.setAttribute("title", "Hide Video");
                myStream.getVideoTracks()[0].enabled = true;
            }
            broadcastNewTracks(myStream, "video");
        });
        //When the mute icon is clicked
        document.getElementById("toggle-mute").addEventListener("click", (e)=>{
            e.preventDefault();
            let elem = document.getElementById("toggle-mute");
            if (myStream.getAudioTracks()[0].enabled) {
                e.target.classList.remove("fa-microphone-alt");
                e.target.classList.add("fa-microphone-alt-slash");
                elem.setAttribute("title", "Unmute");
                myStream.getAudioTracks()[0].enabled = false;
            } else {
                e.target.classList.remove("fa-microphone-alt-slash");
                e.target.classList.add("fa-microphone-alt");
                elem.setAttribute("title", "Mute");
                myStream.getAudioTracks()[0].enabled = true;
            }
            broadcastNewTracks(myStream, "audio");
        });
        //When user clicks the 'Share screen' button
        document.getElementById("share-screen").addEventListener("click", (e)=>{
            e.preventDefault();
            if (screen && screen.getVideoTracks().length && screen.getVideoTracks()[0].readyState != "ended") stopSharingScreen();
            else shareScreen();
        });
        //When record button is clicked
        document.getElementById("record").addEventListener("click", (e)=>{
            /**
             * Ask user what they want to record.
             * Get the stream based on selection and start recording
             */ if (!mediaRecorder || mediaRecorder.state == "inactive") (0, _helpersJsDefault.default).toggleModal("recording-options-modal", true);
            else if (mediaRecorder.state == "paused") mediaRecorder.resume();
            else if (mediaRecorder.state == "recording") mediaRecorder.stop();
        });
        //When user choose to record screen
        document.getElementById("record-screen").addEventListener("click", ()=>{
            (0, _helpersJsDefault.default).toggleModal("recording-options-modal", false);
            if (screen && screen.getVideoTracks().length) startRecording(screen);
            else (0, _helpersJsDefault.default).shareScreen().then((screenStream)=>{
                startRecording(screenStream);
            }).catch(()=>{});
        });
        //When user choose to record own video
        document.getElementById("record-video").addEventListener("click", ()=>{
            (0, _helpersJsDefault.default).toggleModal("recording-options-modal", false);
            if (myStream && myStream.getTracks().length) startRecording(myStream);
            else (0, _helpersJsDefault.default).getUserFullMedia().then((videoStream)=>{
                startRecording(videoStream);
            }).catch(()=>{});
        });
    }
});

},{"./helpers.js":"6EYKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6EYKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    generateRandomString () {
        const crypto = window.crypto || window.msCrypto;
        let array = new Uint32Array(1);
        return crypto.getRandomValues(array);
    },
    closeVideo (elemId) {
        if (document.getElementById(elemId)) {
            document.getElementById(elemId).remove();
            this.adjustVideoElemSize();
        }
    },
    pageHasFocus () {
        return !(document.hidden || document.onfocusout || window.onpagehide || window.onblur);
    },
    getQString (url = "", keyToReturn = "") {
        url = url ? url : location.href;
        let queryStrings = decodeURIComponent(url).split("#", 2)[0].split("?", 2)[1];
        if (queryStrings) {
            let splittedQStrings = queryStrings.split("&");
            if (splittedQStrings.length) {
                let queryStringObj = {};
                splittedQStrings.forEach(function(keyValuePair) {
                    let keyValue = keyValuePair.split("=", 2);
                    if (keyValue.length) queryStringObj[keyValue[0]] = keyValue[1];
                });
                return keyToReturn ? queryStringObj[keyToReturn] ? queryStringObj[keyToReturn] : null : queryStringObj;
            }
            return null;
        }
        return null;
    },
    userMediaAvailable () {
        return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    },
    getUserFullMedia () {
        if (this.userMediaAvailable()) return navigator.mediaDevices.getUserMedia({
            video: true,
            audio: {
                echoCancellation: true,
                noiseSuppression: true
            }
        });
        else throw new Error("User media not available");
    },
    getUserAudio () {
        if (this.userMediaAvailable()) return navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: true,
                noiseSuppression: true
            }
        });
        else throw new Error("User media not available");
    },
    shareScreen () {
        if (this.userMediaAvailable()) return navigator.mediaDevices.getDisplayMedia({
            video: {
                cursor: "always"
            },
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44100
            }
        });
        else throw new Error("User media not available");
    },
    getIceServer () {
        return {
            iceServers: [
                {
                    urls: [
                        "stun:eu-turn4.xirsys.com"
                    ]
                },
                {
                    username: "ml0jh0qMKZKd9P_9C0UIBY2G0nSQMCFBUXGlk6IXDJf8G2uiCymg9WwbEJTMwVeiAAAAAF2__hNSaW5vbGVl",
                    credential: "4dd454a6-feee-11e9-b185-6adcafebbb45",
                    urls: [
                        "turn:eu-turn4.xirsys.com:80?transport=udp",
                        "turn:eu-turn4.xirsys.com:3478?transport=tcp"
                    ]
                }
            ]
        };
    },
    addChat (data, senderType) {
        let chatMsgDiv = document.querySelector("#chat-messages");
        let contentAlign = "justify-content-end";
        let senderName = "You";
        let msgBg = "bg-white";
        if (senderType === "remote") {
            contentAlign = "justify-content-start";
            senderName = data.sender;
            msgBg = "";
            this.toggleChatNotificationBadge();
        }
        let infoDiv = document.createElement("div");
        infoDiv.className = "sender-info";
        infoDiv.innerText = `${senderName} - ${moment().format("Do MMMM, YYYY h:mm a")}`;
        let colDiv = document.createElement("div");
        colDiv.className = `col-10 card chat-card msg ${msgBg}`;
        colDiv.innerHTML = xssFilters.inHTMLData(data.msg).autoLink({
            target: "_blank",
            rel: "nofollow"
        });
        let rowDiv = document.createElement("div");
        rowDiv.className = `row ${contentAlign} mb-2`;
        colDiv.appendChild(infoDiv);
        rowDiv.appendChild(colDiv);
        chatMsgDiv.appendChild(rowDiv);
        if (this.pageHasFocus) rowDiv.scrollIntoView();
    },
    toggleChatNotificationBadge () {
        if (document.querySelector("#chat-pane").classList.contains("chat-opened")) document.querySelector("#new-chat-notification").setAttribute("hidden", true);
        else document.querySelector("#new-chat-notification").removeAttribute("hidden");
    },
    replaceTrack (stream, recipientPeer) {
        let sender = recipientPeer.getSenders ? recipientPeer.getSenders().find((s)=>s.track && s.track.kind === stream.kind) : false;
        sender && sender.replaceTrack(stream);
    },
    toggleShareIcons (share) {
        let shareIconElem = document.querySelector("#share-screen");
        if (share) {
            shareIconElem.setAttribute("title", "Stop sharing screen");
            shareIconElem.children[0].classList.add("text-primary");
            shareIconElem.children[0].classList.remove("text-white");
        } else {
            shareIconElem.setAttribute("title", "Share screen");
            shareIconElem.children[0].classList.add("text-white");
            shareIconElem.children[0].classList.remove("text-primary");
        }
    },
    toggleVideoBtnDisabled (disabled) {
        document.getElementById("toggle-video").disabled = disabled;
    },
    maximiseStream (e) {
        let elem = e.target.parentElement.previousElementSibling;
        elem.requestFullscreen() || elem.mozRequestFullScreen() || elem.webkitRequestFullscreen() || elem.msRequestFullscreen();
    },
    singleStreamToggleMute (e) {
        if (e.target.classList.contains("fa-microphone")) {
            e.target.parentElement.previousElementSibling.muted = true;
            e.target.classList.add("fa-microphone-slash");
            e.target.classList.remove("fa-microphone");
        } else {
            e.target.parentElement.previousElementSibling.muted = false;
            e.target.classList.add("fa-microphone");
            e.target.classList.remove("fa-microphone-slash");
        }
    },
    saveRecordedStream (stream, user) {
        let blob = new Blob(stream, {
            type: "video/webm"
        });
        let file = new File([
            blob
        ], `${user}-${moment().unix()}-record.webm`);
        saveAs(file);
    },
    toggleModal (id, show) {
        let el = document.getElementById(id);
        if (show) {
            el.style.display = "block";
            el.removeAttribute("aria-hidden");
        } else {
            el.style.display = "none";
            el.setAttribute("aria-hidden", true);
        }
    },
    setLocalStream (stream, mirrorMode = true) {
        const localVidElem = document.getElementById("local");
        localVidElem.srcObject = stream;
        mirrorMode ? localVidElem.classList.add("mirror-mode") : localVidElem.classList.remove("mirror-mode");
    },
    adjustVideoElemSize () {
        let elem = document.getElementsByClassName("card");
        let totalRemoteVideosDesktop = elem.length;
        let newWidth = totalRemoteVideosDesktop <= 2 ? "50%" : totalRemoteVideosDesktop == 3 ? "33.33%" : totalRemoteVideosDesktop <= 8 ? "25%" : totalRemoteVideosDesktop <= 15 ? "20%" : totalRemoteVideosDesktop <= 18 ? "16%" : totalRemoteVideosDesktop <= 23 ? "15%" : totalRemoteVideosDesktop <= 32 ? "12%" : "10%";
        for(let i = 0; i < totalRemoteVideosDesktop; i++)elem[i].style.width = newWidth;
    },
    createDemoRemotes (str, total = 6) {
        let i = 0;
        let testInterval = setInterval(()=>{
            let newVid = document.createElement("video");
            newVid.id = `demo-${i}-video`;
            newVid.srcObject = str;
            newVid.autoplay = true;
            newVid.className = "remote-video";
            //video controls elements
            let controlDiv = document.createElement("div");
            controlDiv.className = "remote-video-controls";
            controlDiv.innerHTML = `<i class="fa fa-microphone text-white pr-3 mute-remote-mic" title="Mute"></i>
                <i class="fa fa-expand text-white expand-remote-video" title="Expand"></i>`;
            //create a new div for card
            let cardDiv = document.createElement("div");
            cardDiv.className = "card card-sm";
            cardDiv.id = `demo-${i}`;
            cardDiv.appendChild(newVid);
            cardDiv.appendChild(controlDiv);
            //put div in main-section elem
            document.getElementById("videos").appendChild(cardDiv);
            this.adjustVideoElemSize();
            i++;
            if (i == total) clearInterval(testInterval);
        }, 2000);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["2KqCd","jrhVf"], "jrhVf", "parcelRequire0985")

//# sourceMappingURL=index.50a7f4bc.js.map
