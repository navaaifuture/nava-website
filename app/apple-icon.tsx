import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const logoBuffer = fs.readFileSync(path.join(process.cwd(), "public", "logo-mark.png"));
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#060907",
          borderRadius: "36px",
          border: "2px solid rgba(0, 230, 118, 0.3)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt="NAVA AI"
          width={136}
          height={136}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
