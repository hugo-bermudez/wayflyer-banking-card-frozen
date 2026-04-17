"use client";

import { useState } from "react";
import { SnowFlake, Eye, Undo } from "iconoir-react";

type CardState = "unfrozen" | "frozen";

export default function CardPage() {
  const [state, setState] = useState<CardState>("unfrozen");
  const isFrozen = state === "frozen";

  return (
    <div
      className="flex flex-col items-center justify-center h-full"
      style={{ background: "var(--nav-background)" }}
    >
      {/* Card preview area */}
      <div
        className="flex flex-col items-center justify-center gap-[var(--space-200)]"
        style={{ padding: "var(--space-250)" }}
      >
        {/* Card container */}
        <div
          style={{
            background: "var(--surface-level-1)",
            borderRadius: "var(--radius-150)",
            boxShadow: "var(--shadow-card)",
            padding: "var(--space-50)",
            paddingTop: "var(--space-150)",
            width: 386,
            height: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "var(--space-150)",
          }}
        >
          {/* Card title row */}
          <div
            className="flex items-start justify-between"
            style={{
              width: "100%",
              paddingLeft: "var(--space-100)",
              paddingRight: "var(--space-100)",
              flex: 1,
            }}
          >
            <span
              className="font-medium"
              style={{
                fontSize: 18,
                color: "var(--text-primary)",
                lineHeight: 1,
              }}
            >
              Office
            </span>
            <span
              className="font-medium"
              style={{
                fontSize: 12,
                lineHeight: 1,
                padding: "4px 5px",
                borderRadius: 6,
                background: "var(--subtle-bg)",
                color: "var(--subtle-fg)",
              }}
            >
              Virtual
            </span>
          </div>

          {/* Bank card */}
          <div
            className="relative overflow-hidden"
            style={{
              width: 370,
              height: 236,
              borderRadius: "var(--radius-100)",
              border: "1px solid rgba(250,250,250,0.24)",
              backgroundImage:
                "linear-gradient(120deg, rgb(248,99,86) 7%, rgb(223,70,173) 58%, rgb(52,39,240) 166%)",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "var(--shadow-button)",
            }}
          >
            {/* Card header */}
            <div className="flex items-center" style={{ height: 24, gap: 10 }}>
              <svg
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M22 0V4.67L26.27 4.67V4.8L23.17 16.46H23.07L18.94 3.71H10.18V8.4H11.38V8.55L8.95 16.46H8.8L6.24 6.86H0V11.55H2.63V11.68L6.13 24H11L15.82 10.71H15.92L20.98 24H25.82L32.71 0H22Z"
                  fill="white"
                />
              </svg>
              {isFrozen && (
                <div className="flex-1 flex justify-end">
                  <span
                    className="font-medium"
                    style={{
                      fontSize: 12,
                      lineHeight: 1,
                      padding: "4px 5px",
                      borderRadius: 6,
                      background: "var(--info-bg-light)",
                      color: "var(--info-fg)",
                    }}
                  >
                    Frozen
                  </span>
                </div>
              )}
            </div>

            {/* Card details */}
            <div
              className="flex flex-col justify-end flex-1"
              style={{ gap: 32 }}
            >
              <span
                style={{
                  fontSize: 32,
                  color: "var(--text-inverse)",
                  letterSpacing: -0.5,
                  lineHeight: 1.2,
                  fontFeatureSettings: "'ss01' 1, 'ss03' 1, 'zero' 1, 'ss02' 1",
                }}
              >
                &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;
                &bull;&bull;&bull;&bull; 0385
              </span>
              <div className="flex items-center" style={{ gap: 24 }}>
                <div className="flex items-center" style={{ gap: 8 }}>
                  <span
                    style={{
                      fontSize: 18,
                      color: "rgba(255,255,255,0.64)",
                      lineHeight: 1,
                    }}
                  >
                    Exp
                  </span>
                  <span
                    className="font-medium"
                    style={{
                      fontSize: 18,
                      color: "var(--text-inverse)",
                      lineHeight: 1,
                    }}
                  >
                    &bull;&bull;
                    <span style={{ color: "rgba(255,255,255,0.64)" }}>/</span>
                    &bull;&bull;
                  </span>
                </div>
                <div className="flex items-center" style={{ gap: 8 }}>
                  <span
                    style={{
                      fontSize: 18,
                      color: "rgba(255,255,255,0.64)",
                      lineHeight: 1,
                    }}
                  >
                    CVC
                  </span>
                  <span
                    className="font-medium"
                    style={{
                      fontSize: 18,
                      color: "var(--text-inverse)",
                      lineHeight: 1,
                    }}
                  >
                    &bull;&bull;&bull;
                  </span>
                </div>
              </div>
            </div>

            {/* Visa logo */}
            <div className="flex justify-end">
              <svg
                width="66"
                height="20"
                viewBox="0 0 66 20"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M24.3 0.3L15.9 19.7H10.5L6.4 4.1C6.1 3 5.9 2.5 5 2C3.6 1.2 1.3 0.5 0 0.1L0.1 0.3H8.9C10 0.3 11 1 11.2 2.3L13.3 13.5L18.6 0.3H24.3Z"
                  fill="white"
                />
                <path
                  d="M42.5 13.4C42.5 8.1 35.1 7.8 35.1 5.5C35.2 4.7 36 3.9 37.6 3.7C38.4 3.6 40.7 3.5 43.2 4.7L44.2 0.8C42.9 0.3 41.2 0 39.1 0C33.8 0 30 2.9 30 7.1C30 10.2 32.7 11.8 34.8 12.8C36.9 13.9 37.6 14.5 37.6 15.4C37.5 16.8 35.9 17.3 34.3 17.4C31.5 17.4 29.9 16.7 28.6 16.1L27.6 20.1C28.9 20.7 31.3 21.2 33.8 21.2C39.5 21.2 42.5 18.3 42.5 13.4Z"
                  fill="white"
                />
                <path
                  d="M55.6 0.3C54.7 0.3 53.9 0.8 53.5 1.7L45.4 19.7H51.1L52.2 16.7H59.1L59.8 19.7H64.8L60.4 0.3H55.6ZM53.7 12.6L56.6 4.8L58.3 12.6H53.7Z"
                  fill="white"
                />
                <path
                  d="M27.8 0.3L23.4 19.7H18L22.4 0.3H27.8Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Large W watermark */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                inset: "-1px 5px -42px -15px",
                opacity: 0.08,
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 33 24"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M22 0V4.67L26.27 4.67V4.8L23.17 16.46H23.07L18.94 3.71H10.18V8.4H11.38V8.55L8.95 16.46H8.8L6.24 6.86H0V11.55H2.63V11.68L6.13 24H11L15.82 10.71H15.92L20.98 24H25.82L32.71 0H22Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* SVG filter for frost texture */}
            <svg className="absolute" width="0" height="0">
              <filter id="frost-texture">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.04"
                  numOctaves="5"
                  seed="2"
                  stitchTiles="stitch"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="6"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </svg>

            {/* Frost overlay */}
            <div className={`frost-overlay${isFrozen ? " active" : ""}`} />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-start" style={{ gap: "var(--space-75)" }}>
          <button
            className="pressable flex items-center cursor-pointer"
            style={{
              height: 32,
              borderRadius: "var(--radius-rounded)",
              border: "var(--border-md) solid var(--border-input)",
              paddingLeft: "var(--space-50)",
              paddingRight: "var(--space-50)",
              gap: 2,
              boxShadow: "var(--shadow-button)",
              background: "transparent",
            }}
            onClick={() => setState(isFrozen ? "unfrozen" : "frozen")}
          >
            {isFrozen ? (
              <Undo
                width={16}
                height={16}
                strokeWidth={1.5}
                color="#0D0D0D"
              />
            ) : (
              <SnowFlake
                width={16}
                height={16}
                strokeWidth={1.5}
                color="#0D0D0D"
              />
            )}
            <span
              className="font-medium whitespace-nowrap"
              style={{
                fontSize: 14,
                color: "var(--text-primary)",
                paddingLeft: "var(--space-25)",
                paddingRight: "var(--space-25)",
                lineHeight: 1,
              }}
            >
              {isFrozen ? "Unfreeze card" : "Freeze card"}
            </span>
          </button>
          <button
            className="pressable flex items-center cursor-pointer"
            style={{
              height: 32,
              borderRadius: "var(--radius-rounded)",
              border: "var(--border-md) solid var(--border-input)",
              paddingLeft: "var(--space-50)",
              paddingRight: "var(--space-50)",
              gap: 2,
              boxShadow: "var(--shadow-button)",
              background: "transparent",
            }}
          >
            <Eye
              width={16}
              height={16}
              strokeWidth={1.5}
              color="#0D0D0D"
            />
            <span
              className="font-medium whitespace-nowrap"
              style={{
                fontSize: 14,
                color: "var(--text-primary)",
                paddingLeft: "var(--space-25)",
                paddingRight: "var(--space-25)",
                lineHeight: 1,
              }}
            >
              View details
            </span>
          </button>
        </div>
      </div>

      {/* Segmented control */}
      <div
        className="fixed bottom-[20px] left-[20px] flex items-start"
        style={{
          borderRadius: "var(--radius-rounded)",
          background: "var(--nav-background)",
          paddingRight: 1.5,
        }}
      >
        {(["unfrozen", "frozen"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setState(key)}
            className="pressable cursor-pointer whitespace-nowrap font-medium"
            style={{
              height: 32,
              borderRadius: "var(--radius-rounded)",
              paddingLeft: "var(--space-50)",
              paddingRight: "var(--space-50)",
              fontSize: 14,
              lineHeight: 1,
              marginRight: -1.5,
              background:
                state === key ? "var(--surface-level-1)" : "transparent",
              border:
                state === key
                  ? "var(--border-md) solid var(--border-input)"
                  : "var(--border-md) solid transparent",
              boxShadow: state === key ? "var(--shadow-button)" : "none",
              color:
                state === key
                  ? "var(--text-primary)"
                  : "var(--text-secondary)",
              transition:
                "background 160ms cubic-bezier(0.4,0,0.2,1), color 160ms cubic-bezier(0.4,0,0.2,1), border-color 160ms cubic-bezier(0.4,0,0.2,1), box-shadow 160ms cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {key === "unfrozen" ? "Unfrozen" : "Frozen"}
          </button>
        ))}
      </div>
    </div>
  );
}
