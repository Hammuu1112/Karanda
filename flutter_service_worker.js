'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "379debc89fb89d033cd0691084ebecdb",
"assets/AssetManifest.bin.json": "b3b166d5399cc6b81140e760a80f9719",
"assets/AssetManifest.json": "ee25679d0ecdc2ef2ffd4bf575d32a80",
"assets/assets/brand/karanda_full_name_logo.png": "476c1d62d9825825bc901679afdfbab8",
"assets/assets/brand/karanda_mix.png": "81ea27748342e7f228036ba75489eaaa",
"assets/assets/brand/karanda_shape.png": "ac6d17b09856feee9ce845eb1eddd267",
"assets/assets/data/combination.json": "a248b73342c3f02bd7444cdca800c917",
"assets/assets/data/cooking_box.json": "28d3094ba322ea179f267b912a8e61b8",
"assets/assets/data/dehkias_light.json": "3a2759cf24150b59d38ef2d1bddfc2c3",
"assets/assets/data/horse_status.json": "0bd46a5f770fd1c04424595e52f34b88",
"assets/assets/data/light_stones.json": "c312eaa4e5c6ebfd61807325986c7b64",
"assets/assets/data/magical_lightstone_crystal.json": "b4a662df95d23137ca85c049aed5fe60",
"assets/assets/data/melody_of_stars.json": "164edbe779d3d20b995212365c166085",
"assets/assets/data/ship_upgrading.json": "a709acac88868a4d7bb9f73d37c6b714",
"assets/assets/data/trade_level.json": "978bfe4a2e5c414367434d656a0fc0f1",
"assets/assets/data/world_boss.json": "519c6da9ef7934ed013598911de477b0",
"assets/assets/data/world_boss_timetable.json": "2a2a2d1ea2c53c988146bb35ea781ccf",
"assets/assets/Hammuu": "df7238b5131c83682561c437ff0b54a3",
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
"assets/assets/translations/en-US.json": "9ea09ab73b48f3885ddc7ba286dc9833",
"assets/assets/translations/ko-KR.json": "1b98315be67eef4607fa73a99286739f",
"assets/FontManifest.json": "58d93217838352d2a82cf89c5e9dcdbd",
"assets/fonts/Maplestory%2520Bold.ttf": "b0a6a2693556296fa674f5e4de61810b",
"assets/fonts/Maplestory%2520Light.ttf": "fb932d042f385927ba59e9a690538709",
"assets/fonts/MaterialIcons-Regular.otf": "77eb7ed6375a1eb18673816940b381ee",
"assets/fonts/NanumSquareRound.otf": "d1b7d1fc8bfe4eccc8aeb7ff95bad663",
"assets/NOTICES": "3b81b152d7f32ec074a9b7d29e20709e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1d52679d3915103353761249640e5d31",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "822753edad64d26bd0af0ef4536603ce",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1981460e4a8d3ec43442cdd7943c1eb0",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b6c68717c10de148066d8e188ecaf261",
"icons/android-chrome-192x192.png": "6b2c40f0cd009f01f65b44a4926cbee3",
"icons/android-chrome-512x512.png": "4400fc1c4c0c94f5f007f771d573c621",
"icons/apple-touch-icon.png": "3f98cc531166253b3d4c45465ec02390",
"icons/favicon-16x16.png": "dbb9ad04c6bcfebebd4fdea7ccb2dc14",
"icons/favicon-32x32.png": "bf8ae1f0210a568b65cc2d4208004cdd",
"icons/favicon.ico": "a4a2e9bd7f38cd26922a4ad9ac9a8714",
"img/flutter-logo.png": "680596443602745483f66870e07d7e94",
"index.html": "f733a2d182bd827af81c79d9137903e2",
"/": "f733a2d182bd827af81c79d9137903e2",
"main.dart.js": "e47900f86d956bc3f26a1ea0ca3d4885",
"manifest.json": "2294636d78cd716fa88b570987cb468b",
"styles.css": "5d21414ed58302f2af4e628ea66ed71f",
"version.json": "6ff00ae22940eefcec79098ad710e5f6"};
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
