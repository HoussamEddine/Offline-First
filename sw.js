
var CACH_N = "v1";
function onInstall(event) {
  event.waitUntil(
    caches.open(CACH_N).then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/main.js",
        "/assets/image.jpg"
      ])
    }).catch(function (err) {
      console.log(err);
    })
  );
}
function onFetch(event) {
  event.respondWith(
    caches.match(event.request).then(function (resp) {
      return resp || fetch(event.request).then(function (response) {
        caches.open(CACH_N).then(function (cache) {
          cache.put(event.request, response.clone());
        });
        return response;
      });
    }).catch(function (err) {
      console.log(err);
    })
  );
}

self.addEventListener("install", function (e) {
  onInstall(e);
});
self.addEventListener("fetch", function (e) {
  onFetch(e);
});


