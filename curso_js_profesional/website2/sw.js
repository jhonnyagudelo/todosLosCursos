const VERSION = "V1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fech", (event) => {
  const request = event.request;
  //geet
  if (request.method !== "GET") {
    return;
  }

  //buscar cahce
  event.respondWith(cachedResponse(resquest));
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    //"/",
    //"/index.html",
    //"/assets/index.js",
    //"/assets/mediaPlayer.js",
    //"/assets/plugin/AutoPause.ts",
    //"/assets/plugin/AutoPlay.js",
    //"/assets/index.css",
    //"/assets/BigBuckBunny.mp4",
  ]);
}

async function cachedResponse(resquest) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(resquest);
  return response || fetch(request);
}

async function updateCache(resquest) {
  const cache = await caches.open(VERSION);
  const response = await fetch(resquest);
  return cache.put(resquest, response);
}
