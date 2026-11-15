import { ImageResponse } from "next/og";
import { site } from "@/content";

/** Branded Open Graph template. Each page passes its own title: /og?title=... */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? site.brandName).slice(0, 110);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#131620",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(49,207,249,0.28), transparent 45%), radial-gradient(circle at 10% 100%, rgba(7,201,143,0.22), transparent 45%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 700 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg,#4b89f3,#31cff9,#92f18f)" }} />
          {site.brandName}
        </div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 58 : 70, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, color: "#b4bdd0" }}>
          <span>HVAC &amp; plumbing marketing, South Florida</span>
          <span style={{ background: "#07c98f", color: "#131620", padding: "12px 24px", borderRadius: 10, fontWeight: 700 }}>Free Online Audit</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
