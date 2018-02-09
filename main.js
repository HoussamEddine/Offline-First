
if ("serviceWorker" in navigator) {
  addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").then(function (reg) {
      console.log("SW REGISTRED");
    })
      .catch(function (err) {
        console.log(err);
      });
  });
}