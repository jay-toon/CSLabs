this.addEventListener("install", (event) => {
    event.waitUntil(
      caches
        .open("v1")
        .then((cache) =>
          cache.addAll([
            "../index.html",
            "../styles.css",
            "../theme/dark.css",
            "../theme/light.css",
          ]),
        ),
    );
  });