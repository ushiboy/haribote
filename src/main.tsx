import React from "react";
import ReactDOM from "react-dom/client";

import "@/i18n/config";
import { App } from "./presentations/App";

(async () => {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    worker.start({
      serviceWorker: {
        url: "/haribote/mockServiceWorker.js",
        options: {
          scope: "/haribote/",
        },
      },
    });
  }

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})();
