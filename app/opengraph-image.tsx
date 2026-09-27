import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "NAVA AI — Intelligence for a Better Tomorrow";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const logoBuffer = fs.readFileSync(path.join(process.cwd(), "public", "logo-mark.png"));
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "70px 80px",
          backgroundColor: "#060907",
          backgroundImage:
            "radial-gradient(circle at 75% 50%, rgba(0, 230, 118, 0.16), transparent 55%), radial-gradient(circle at 20% 85%, rgba(0, 230, 118, 0.08), transparent 45%)",
          color: "#F4F6F4",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Left Column: Brand & Copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "660px",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                border: "1.5px solid rgba(0, 230, 118, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0, 230, 118, 0.08)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoBase64}
                alt="NAVA AI"
                width={28}
                height={28}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "0.08em", display: "flex", gap: "6px" }}>
              <span>NAVA</span>
              <span style={{ color: "#00E676" }}>AI</span>
            </div>
            <div
              style={{
                marginLeft: "12px",
                padding: "6px 14px",
                borderRadius: "100px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                background: "rgba(255, 255, 255, 0.04)",
                fontSize: "12px",
                color: "#8F9E94",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Kerala · Vision 2040
            </div>
          </div>

          {/* Center Copy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#00E676",
                fontSize: "15px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  background: "#00E676",
                  borderRadius: "2px",
                }}
              />
              Same Land. Brighter Future.
            </div>

            <div
              style={{
                fontSize: "56px",
                fontWeight: "300",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <span>Intelligence for a</span>
              <span style={{ color: "#00E676", fontStyle: "italic" }}>
                Better Tomorrow
              </span>
            </div>

            <div
              style={{
                fontSize: "19px",
                color: "#8F9E94",
                lineHeight: 1.45,
                maxWidth: "600px",
              }}
            >
              A Greener, Smarter Kerala for Generations — uniting AI-powered infrastructure, precision ecological stewardship, and timeless cultural heritage.
            </div>
          </div>

          {/* Footer Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "20px",
              fontSize: "14px",
              color: "#8F9E94",
            }}
          >
            <span>People · Planet · Progress</span>
            <span>8.5241° N, 76.9366° E</span>
          </div>
        </div>

        {/* Right Column: Hero 3D Logo Mark Presentation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "420px",
            height: "420px",
            position: "relative",
          }}
        >
          {/* Subtle Ambient Backlight Disk */}
          <div
            style={{
              position: "absolute",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0, 230, 118, 0.22) 0%, rgba(0, 230, 118, 0.05) 55%, transparent 75%)",
            }}
          />

          {/* Official 3D Metallic Ribbon & Emerald Leaf Logo Mark */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="NAVA AI Logomark"
            width={350}
            height={350}
            style={{
              objectFit: "contain",
              filter: "drop-shadow(0 20px 35px rgba(0,0,0,0.7))",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
