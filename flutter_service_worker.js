'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5f503400b338f2d6e8bc61438840a217",
"assets/AssetManifest.bin.json": "c869b8f8910d632aee89a835bb938581",
"assets/AssetManifest.json": "f9a919f003d94ee6e1c011dcaa99b93e",
"assets/assets/brand/karanda_full_name_logo.png": "476c1d62d9825825bc901679afdfbab8",
"assets/assets/brand/karanda_mix.png": "81ea27748342e7f228036ba75489eaaa",
"assets/assets/brand/karanda_shape.png": "ac6d17b09856feee9ce845eb1eddd267",
"assets/assets/data/combination.json": "2119dd3792cbfb266d48d8bd410e341f",
"assets/assets/data/cooking_box.json": "28d3094ba322ea179f267b912a8e61b8",
"assets/assets/data/lightStones.json": "68efebc19375c2dfa6e78b54818a528a",
"assets/assets/data/magical_lightstone_crystal.json": "b951e3237f6108beeb1517f1cb4582cb",
"assets/assets/data/melody_of_stars.json": "164edbe779d3d20b995212365c166085",
"assets/assets/data/shipExtension.json": "8469287cdff629803f8a468a7a9ab42e",
"assets/assets/data/shipExtensionItem.json": "c3d1c53a6db1b24bf11be7fd322ce6d9",
"assets/assets/data/ship_upgrading.json": "a709acac88868a4d7bb9f73d37c6b714",
"assets/assets/data/tradeLevel.json": "978bfe4a2e5c414367434d656a0fc0f1",
"assets/assets/Hammuu": "525a81c76f4aca25e8d54f2232bf0cb0",
"assets/assets/icons/bdo.png": "eff04c86848ea70cee3fa0713123ec59",
"assets/assets/icons/bdocodex.png": "5fb27b8018ec01b4c64ac0e8047e2fb3",
"assets/assets/icons/bdolytics.png": "7a5701505da0fe8dce23f8dde5816368",
"assets/assets/icons/bmc.png": "0b0c2c8f1ec4707ab6287a51500033d4",
"assets/assets/icons/bmc_reverse.png": "d73bfea1538abeddb44bff098bf3cfaf",
"assets/assets/icons/discord.png": "d74865e1094f5ac0a0e782875449ff66",
"assets/assets/icons/garmoth.png": "1942da7e4277df31dae8294f6cecaca0",
"assets/assets/icons/inven.png": "227132c3009171ab9301509c5f4701ae",
"assets/assets/icons/lotus.png": "d54b80cda246768001826a26182ff100",
"assets/assets/icons/moon.png": "fef1ab5987944681272fa4000779c058",
"assets/assets/icons/onTopReplica.png": "1c95d5209c23437e7452b107010eb3cf",
"assets/assets/icons/sun.png": "5cda771bc5b455d8634e78ad16edcac7",
"assets/assets/icons/toss.png": "98ad8ecbdc7efca2fa7618c6c9a6c5d6",
"assets/assets/image/Black_desert_ocean_map(v1.2).jpg": "9bbe831523833b63bcd3b9c60bf9e537",
"assets/assets/image/bmc_full.png": "486d94a030cb95a88786acf469c9c0d6",
"assets/assets/image/bmc_full_reverse.png": "53b97471e3343250521257afccced42f",
"assets/assets/image/cooking_box.png": "b3da6f439bb703761a5089c01861ca7d",
"assets/assets/image/discord_full.png": "3f894989b269f8d72584747e78175bf5",
"assets/assets/image/discord_full_reverse.png": "893af1ca06cd7b1398150ff3f4e4c137",
"assets/assets/image/logo/initial.png": "f87255e8d9c0e124dc30a0946f9f6a5c",
"assets/assets/image/logo/karanda_logo.png": "577324048eea925ebddb864d3e7784b9",
"assets/assets/image/logo/karanda_logo_sqaure.png": "23856322dca29d762fe47527da3cbe1e",
"assets/assets/image/magical_lightstone_crystal.png": "4b5e3cd3743088ca287eab067b81eff7",
"assets/assets/image/melody_of_stars.png": "393ebc4b182709dbd5f6b8f16a92936c",
"assets/assets/image/shipExtension/0001.png": "d0365e88c888aa4562ccf0a89645c4c9",
"assets/assets/image/shipExtension/0002.png": "0564c825025c5cc065aacbb2207fc574",
"assets/assets/image/shipExtension/0003.png": "dea317015431d50d358353edf3efd28f",
"assets/assets/image/shipExtension/0004.png": "be689018377358205257ebbac255e211",
"assets/assets/image/shipExtension/0005.png": "c3db290258ab6a34661c2f5c304ff6ca",
"assets/assets/image/shipExtension/0006.png": "475273546f22c0548d90638d402576db",
"assets/assets/image/shipExtension/0007.png": "02da8b06383d82e7151ee4e1225acb90",
"assets/assets/image/shipExtension/0008.png": "bb54451c1c6e32dfafe078a0659eb0a0",
"assets/assets/image/shipExtension/0009.png": "38ce399f0f602042ecf31601c29a49b8",
"assets/assets/image/shipExtension/0010.png": "43df180dd7d6d536bb9acadfd08cb256",
"assets/assets/image/shipExtension/0011.png": "bc4077b2d09bc1ff096b62f334e9b376",
"assets/assets/image/shipExtension/0012.png": "bf6d0d7847a56c936fe604d568e9b9fb",
"assets/assets/image/shipExtension/0013.png": "38ce399f0f602042ecf31601c29a49b8",
"assets/assets/image/shipExtension/0014.png": "b9734fb548259b738a13731690bbfc4e",
"assets/assets/image/shipExtension/0015.png": "42b219e7735cab071c05d9c716759657",
"assets/assets/image/shipExtension/0016.png": "c93c9913a6c3a2f528806a210fc7a91d",
"assets/assets/image/shipExtension/0017.png": "c28c2eff088c9172f2c3bd7c12454d5b",
"assets/assets/image/toss_full.png": "5caa6df3dec680806930d4d354684507",
"assets/assets/image/toss_full_reverse.png": "74a838534e83b82457c27a4fb6b764c6",
"assets/assets/image/unknown_item.png": "052309b49c49c0626716db3201910d0c",
"assets/FontManifest.json": "2d0886a6570c80ced7864a76dbf779b2",
"assets/fonts/Maplestory%2520Bold.ttf": "b0a6a2693556296fa674f5e4de61810b",
"assets/fonts/Maplestory%2520Light.ttf": "fb932d042f385927ba59e9a690538709",
"assets/fonts/MaterialIcons-Regular.otf": "8847e24406f55339f85796a50ab6199b",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFB.otf": "d1b7d1fc8bfe4eccc8aeb7ff95bad663",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFEB.otf": "80d60e4eb529133db2d93250100760f5",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFL.otf": "75662d6e584f51c83a805698c3de0f20",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFR.otf": "30caed9c2deb38480396e8ed892dc3cc",
"assets/fonts/NotoSansKR/NotoSansKR-Black.ttf": "15e2e9d1b8e380eafc51a606a7e671d6",
"assets/fonts/NotoSansKR/NotoSansKR-Bold.ttf": "671db5f821991c90d7f8499bcf9fed7e",
"assets/fonts/NotoSansKR/NotoSansKR-Medium.ttf": "4dee649c78a37741c4f5d9fdb69ea434",
"assets/fonts/NotoSansKR/NotoSansKR-Regular.ttf": "e910afbd441c5247227fb4a731d65799",
"assets/fonts/NotoSansKR/NotoSansKR-Thin.ttf": "b59719d81a60f284b7c372c7891689fd",
"assets/NOTICES": "481e25143c09352520f01852b365b56c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "da2b12c98ee2299bf3a73b4c67626fa6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "67d1e82ca459f400adea48b48807df21",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b1a334646c98dfd4f366b27422cf9bb6",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "6b2c40f0cd009f01f65b44a4926cbee3",
"icons/android-chrome-512x512.png": "4400fc1c4c0c94f5f007f771d573c621",
"icons/apple-touch-icon.png": "3f98cc531166253b3d4c45465ec02390",
"icons/favicon-16x16.png": "dbb9ad04c6bcfebebd4fdea7ccb2dc14",
"icons/favicon-32x32.png": "bf8ae1f0210a568b65cc2d4208004cdd",
"icons/favicon.ico": "a4a2e9bd7f38cd26922a4ad9ac9a8714",
"img/flutter-logo.png": "680596443602745483f66870e07d7e94",
"index.html": "0ac5e89a21bda3a2894c08deb9c7fca2",
"/": "0ac5e89a21bda3a2894c08deb9c7fca2",
"install.js": "2c8700fd8bf96f556c179c5eaea8e8a2",
"main.dart.js": "392f662411a824be29315b6e64e826ac",
"manifest.json": "cee3ff988c33441e88211224b05a88fb",
"styles.css": "163855fd240b2a8d4e378c5187267607",
"version.json": "3faa4640494d044907aea3d4764d86bf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
