"use strict";var precacheConfig=[["/assets/blockstack.min.js","3b257f51a093e1a6bf0e0fd4bcd0f2cf"],["/assets/branding-preview.png","22d55c5fb35111df35927f863aa83b69"],["/assets/favicon.ico","1953da1e891751b3c30ebcf86b01348f"],["/assets/fonts/Pacifico-Regular.min.woff2","a1c245f5090c607cdd7b3b59051ae1fc"],["/assets/fonts/photon-entypo.eot","2614e058b2dcb9d6e2e964730d795540"],["/assets/fonts/photon-entypo.svg","6886d7820410526d0ba73f5401b59b96"],["/assets/fonts/photon-entypo.ttf","1382c29cdb72f6c99043675d6e13b625"],["/assets/fonts/photon-entypo.woff","bf614256dbc49f4bf2cf786706bb0712"],["/assets/icon-192x192.png","fc8d2b20997aeb8863de145a163bf28f"],["/assets/pages.json","5b53108aa3bfedce9badb49d9b616896"],["/assets/profile.png","92cd531d7ed0ab38ea40a3faeb88a0a0"],["/assets/robots.txt","1ed4121e70445e3cf83b7fae2c2c2739"],["/assets/sitemap.xml","747791b4204fd27fd82d0a5d933f0a28"],["/assets/watermelon.png","03349700a4e631e93f65ca83fa52989f"],["/blockstack.min.js","3b257f51a093e1a6bf0e0fd4bcd0f2cf"],["/branding-preview.png","22d55c5fb35111df35927f863aa83b69"],["/bundle.fc1a7.js","975fe48d7f65b5623d675ab48d100bb4"],["/favicon.ico","1953da1e891751b3c30ebcf86b01348f"],["/icon-192x192.png","fc8d2b20997aeb8863de145a163bf28f"],["/index.html","efe2880ff09ec91c500468c01930c317"],["/manifest.json","8ee50e568523f96450303911d1e34fe0"],["/pages.json","5b53108aa3bfedce9badb49d9b616896"],["/profile.png","92cd531d7ed0ab38ea40a3faeb88a0a0"],["/robots.txt","1ed4121e70445e3cf83b7fae2c2c2739"],["/sitemap.xml","747791b4204fd27fd82d0a5d933f0a28"],["/style.adbf6.css","d315570d33140b43a90ec179ffaf6554"],["/watermelon.png","03349700a4e631e93f65ca83fa52989f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,n,!1);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});