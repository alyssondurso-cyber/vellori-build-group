import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        services: resolve(import.meta.dirname, "services.html"),
        stuccoBocaRaton: resolve(
          import.meta.dirname,
          "stucco-boca-raton.html"
        ),
        travertineBocaRaton: resolve(
          import.meta.dirname,
          "travertine-boca-raton.html"
        ),
        outdoorLivingBocaRaton: resolve(
          import.meta.dirname,
          "outdoor-living-boca-raton.html"
        ),
        concreteBocaRaton: resolve(
          import.meta.dirname,
          "concrete-boca-raton.html"
        ),
        serviceAreas: resolve(
          import.meta.dirname,
          "service-areas.html"
        ),
        stuccoPalmBeach: resolve(
          import.meta.dirname,
          "stucco-palm-beach.html"
        ),
        stuccoFortLauderdale: resolve(
          import.meta.dirname,
          "stucco-fort-lauderdale.html"
        ),
        stuccoMiami: resolve(
          import.meta.dirname,
          "stucco-miami.html"
        ),
      },
    },
  },
});
