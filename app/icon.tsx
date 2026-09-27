import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "6px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt="NAVA AI"
          width={26}
          height={26}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
