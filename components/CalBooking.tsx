"use client";

/* Copied from the live site's Cal.com embed. Only the config values now come from content/site.ts. */

import { useEffect } from "react";
import { site } from "@/content/site";
import { sendEvent } from "./Analytics";

export default function CalBooking() {
  useEffect(() => {
    (function (C: Window & typeof globalThis, A: string, L: string) {
      type CalApi = ((...args: unknown[]) => void) & {
        loaded?: boolean;
        ns: Record<string, CalApi>;
        q: unknown[][];
      };

      const p = (a: CalApi, ar: unknown[]) => {
        a.q.push(ar);
      };
      const d = C.document;

      (C as unknown as Record<string, CalApi>)["Cal"] =
        (C as unknown as Record<string, CalApi>)["Cal"] ||
        (function (...args: unknown[]) {
          const cal = (C as unknown as Record<string, CalApi>)["Cal"] as CalApi;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.createElement("script");
            s.src = A;
            d.head.appendChild(s);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api: CalApi = Object.assign((...a: unknown[]) => p(api, a), { q: [] as unknown[][], ns: {} });
            const namespace = args[1] as string;
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, args);
            }
            return;
          }
          p(cal, args);
        } as unknown as CalApi);

      const ns = site.calcom.namespace;
      const calFn = (C as unknown as Record<string, CalApi>)["Cal"] as CalApi;
      calFn("init", ns, { origin: "https://app.cal.com" });

      calFn.ns[ns]("inline", {
        elementOrSelector: "#cal-inline-audit",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: site.calcom.calLink,
      });

      calFn.ns[ns]("ui", {
        cssVarsPerTheme: {
          dark: { "cal-brand": site.colors.green },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
      });

      calFn.ns[ns]("on", {
        action: "bookingSuccessful",
        callback: () => {
          sendEvent("schedule");
        },
      });
    })(window, "https://app.cal.com/embed/embed.js", "init");
  }, []);

  return <div id="cal-inline-audit" style={{ width: "100%", height: "100%", minHeight: "700px", overflow: "scroll" }} />;
}
