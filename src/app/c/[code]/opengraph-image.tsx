import { ImageResponse } from "next/og";
import {
  fetchInvitePreview,
  formatMeetAt,
  inviteCopy,
  isValidInviteCode,
} from "@/lib/invite-preview";

export const alt = "Convite para a Flowtr";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CORAL = "#ff5733";
const BG = "#0a0a0d";

export default async function Image({ params }: { params: Promise<{ code: string }> }) {
  const code = (await params).code.trim();
  const preview = isValidInviteCode(code) ? await fetchInvitePreview(code) : null;
  // The image URL carries no `?k=`; without data it is always the «volta» copy.
  const { title } = inviteCopy(preview, true);
  // Previews are cached by the messaging app: always the full date.
  const when =
    preview?.meetAtMillis != null
      ? formatMeetAt(preview.meetAtMillis, preview.timeZone, { relative: false })
      : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: BG,
          color: "#f5f5f7",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: 8,
            color: CORAL,
          }}
        >
          FLOWTR
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 34 ? 68 : 80,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
          {when ? (
            <div style={{ display: "flex", marginTop: 28, fontSize: 44, color: CORAL }}>
              {when}
            </div>
          ) : null}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
          Corres, caminhas ou pedalas e conquistas território.
        </div>
      </div>
    ),
    size,
  );
}
