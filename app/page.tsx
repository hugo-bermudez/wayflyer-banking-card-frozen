"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { SnowFlake, Eye, Undo } from "iconoir-react";

type CardState = "unfrozen" | "frozen";

export default function CardPage() {
  const [state, setState] = useState<CardState>("unfrozen");
  const isFrozen = state === "frozen";
  const freezeSoundRef = useRef<HTMLAudioElement>(null);
  const unfreezeSoundRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    const next = isFrozen ? "unfrozen" : "frozen";
    const audio = next === "frozen" ? freezeSoundRef.current : unfreezeSoundRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    setState(next);
  };

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
            className={`relative overflow-hidden bank-card${isFrozen ? " frozen" : ""}`}
            style={{
              width: 370,
              height: 236,
              borderRadius: "var(--radius-100)",
              border: "1px solid rgba(250,250,250,0.24)",
              background: isFrozen
                ? "linear-gradient(135deg, #7BD3E0, #538DCB)"
                : "linear-gradient(120deg, rgb(248,99,86) 7%, rgb(223,70,173) 58%, rgb(52,39,240) 166%)",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "var(--shadow-button)",
              transition: "background 600ms cubic-bezier(0.4, 0, 0.2, 1)",
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
                <div className="flex-1 flex justify-end" style={{ position: "relative", zIndex: 2 }}>
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
              <Image
                src="/icons/visa.svg"
                alt="Visa"
                width={66}
                height={20}
                className="shrink-0"
              />
            </div>

            {/* Large W watermark */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                inset: "-1px 5px -42px -15px",
                opacity: 0.04,
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

            {/* Frost texture */}
            <div className={`frost-texture${isFrozen ? " active" : ""}`} />
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
            onClick={toggle}
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
            onClick={() => {
              const audio = key === "frozen" ? freezeSoundRef.current : unfreezeSoundRef.current;
              if (audio) { audio.currentTime = 0; audio.play(); }
              setState(key);
            }}
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

      {/* Audio */}
      <audio ref={freezeSoundRef} src="/sound/freeze.m4a" preload="auto" />
      <audio ref={unfreezeSoundRef} src="/sound/unfreeze.m4a" preload="auto" />
    </div>
  );
}
