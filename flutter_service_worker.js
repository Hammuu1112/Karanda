'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0ef60e12793c4e8a88d0f4abe213418b",
"assets/AssetManifest.bin.json": "40e0757194c54594188d3d7354b622c4",
"assets/AssetManifest.json": "6886ebe23d736ac4f601000642c66f19",
"assets/assets/brand/karanda_full_name_logo.png": "476c1d62d9825825bc901679afdfbab8",
"assets/assets/brand/karanda_mix.png": "81ea27748342e7f228036ba75489eaaa",
"assets/assets/brand/karanda_shape.png": "ac6d17b09856feee9ce845eb1eddd267",
"assets/assets/data/combination.json": "a248b73342c3f02bd7444cdca800c917",
"assets/assets/data/cooking_box.json": "28d3094ba322ea179f267b912a8e61b8",
"assets/assets/data/dehkias_light.json": "3a2759cf24150b59d38ef2d1bddfc2c3",
"assets/assets/data/horse_status.json": "6d69462e1b7e6004609bacf47b063ad8",
"assets/assets/data/light_stones.json": "c312eaa4e5c6ebfd61807325986c7b64",
"assets/assets/data/magical_lightstone_crystal.json": "b951e3237f6108beeb1517f1cb4582cb",
"assets/assets/data/melody_of_stars.json": "164edbe779d3d20b995212365c166085",
"assets/assets/data/ship_upgrading.json": "a709acac88868a4d7bb9f73d37c6b714",
"assets/assets/data/trade_level.json": "978bfe4a2e5c414367434d656a0fc0f1",
"assets/assets/data/world_boss.json": "281ee7c92fc890aa22f17323e2047f59",
"assets/assets/Hammuu": "62df9d9743bc69849b5da3450a03c162",
"assets/assets/icons/bdo.png": "eff04c86848ea70cee3fa0713123ec59",
"assets/assets/icons/bdocodex.png": "5fb27b8018ec01b4c64ac0e8047e2fb3",
"assets/assets/icons/bdolytics.png": "7a5701505da0fe8dce23f8dde5816368",
"assets/assets/icons/discord.png": "d74865e1094f5ac0a0e782875449ff66",
"assets/assets/icons/garmoth.png": "1942da7e4277df31dae8294f6cecaca0",
"assets/assets/icons/inven.png": "227132c3009171ab9301509c5f4701ae",
"assets/assets/icons/onTopReplica.png": "1c95d5209c23437e7452b107010eb3cf",
"assets/assets/image/Black_desert_ocean_map(v1.2).jpg": "9bbe831523833b63bcd3b9c60bf9e537",
"assets/assets/image/chzzk_full.png": "2165ced1acb1c4347f764b998afc9ba5",
"assets/assets/image/cooking_box.png": "b3da6f439bb703761a5089c01861ca7d",
"assets/assets/image/dehkias_light.png": "9af5c5c6c4acd0a183bb69b88e9b934f",
"assets/assets/image/discord_full.png": "3f894989b269f8d72584747e78175bf5",
"assets/assets/image/discord_full_reverse.png": "893af1ca06cd7b1398150ff3f4e4c137",
"assets/assets/image/live_banner.jpg": "640247b0b9edaf2089c641904d480316",
"assets/assets/image/logo/initial.png": "f87255e8d9c0e124dc30a0946f9f6a5c",
"assets/assets/image/logo/karanda_logo.png": "577324048eea925ebddb864d3e7784b9",
"assets/assets/image/logo/karanda_logo_sqaure.png": "23856322dca29d762fe47527da3cbe1e",
"assets/assets/image/magical_lightstone_crystal.png": "4b5e3cd3743088ca287eab067b81eff7",
"assets/assets/image/melody_of_stars.png": "393ebc4b182709dbd5f6b8f16a92936c",
"assets/assets/image/unknown_item.png": "052309b49c49c0626716db3201910d0c",
"assets/assets/sounds/boss_alarm.mp3": "1f3ef59787c89d3aa4a74de2af63be6a",
"assets/assets/sounds/notification.mp3": "568c452268d8a1df3b09d449f6b59232",
"assets/assets/translations/en-US.json": "4f5a89ef62dc1529de1084edeb6a53ec",
"assets/assets/translations/ko-KR.json": "f37f3b7ad9d8cac939d19c6d6de891a2",
"assets/FontManifest.json": "2d0886a6570c80ced7864a76dbf779b2",
"assets/fonts/Maplestory%2520Bold.ttf": "b0a6a2693556296fa674f5e4de61810b",
"assets/fonts/Maplestory%2520Light.ttf": "fb932d042f385927ba59e9a690538709",
"assets/fonts/MaterialIcons-Regular.otf": "6b3cbbe16cd641031d3ac65011810a31",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFB.otf": "d1b7d1fc8bfe4eccc8aeb7ff95bad663",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFEB.otf": "80d60e4eb529133db2d93250100760f5",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFL.otf": "75662d6e584f51c83a805698c3de0f20",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFR.otf": "30caed9c2deb38480396e8ed892dc3cc",
"assets/fonts/NotoSansKR/NotoSansKR-Black.ttf": "15e2e9d1b8e380eafc51a606a7e671d6",
"assets/fonts/NotoSansKR/NotoSansKR-Bold.ttf": "671db5f821991c90d7f8499bcf9fed7e",
"assets/fonts/NotoSansKR/NotoSansKR-Medium.ttf": "4dee649c78a37741c4f5d9fdb69ea434",
"assets/fonts/NotoSansKR/NotoSansKR-Regular.ttf": "e910afbd441c5247227fb4a731d65799",
"assets/fonts/NotoSansKR/NotoSansKR-Thin.ttf": "b59719d81a60f284b7c372c7891689fd",
"assets/NOTICES": "957a534ce990f17478bda0419468c91d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1d52679d3915103353761249640e5d31",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2623e67b0d81306b97a508e9164542e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "31e34797cd0865c21615d945e3ce3a46",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "161a4a6015ec8fa1e603b4c647d6eb5d",
"icons/android-chrome-192x192.png": "6b2c40f0cd009f01f65b44a4926cbee3",
"icons/android-chrome-512x512.png": "4400fc1c4c0c94f5f007f771d573c621",
"icons/apple-touch-icon.png": "3f98cc531166253b3d4c45465ec02390",
"icons/favicon-16x16.png": "dbb9ad04c6bcfebebd4fdea7ccb2dc14",
"icons/favicon-32x32.png": "bf8ae1f0210a568b65cc2d4208004cdd",
"icons/favicon.ico": "a4a2e9bd7f38cd26922a4ad9ac9a8714",
"img/flutter-logo.png": "680596443602745483f66870e07d7e94",
"index.html": "7cebe34231a751023b220b0a9883290f",
"/": "7cebe34231a751023b220b0a9883290f",
"install.js": "2c8700fd8bf96f556c179c5eaea8e8a2",
"main.dart.js": "e840173c4285879fbe78dd281503e262",
"manifest.json": "2294636d78cd716fa88b570987cb468b",
"styles.css": "163855fd240b2a8d4e378c5187267607",
"version.json": "3f4c602d4372383e3f9bef8adffaf2c9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
