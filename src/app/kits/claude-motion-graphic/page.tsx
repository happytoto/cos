import type { Metadata } from "next";
import { SiteFooter } from "@/components/sites/greenkokki/site-footer";
import { SiteHeader } from "@/components/sites/greenkokki/site-header";

const TITLE = "클로드로 모션그래픽 만들기 · 그린코끼리 AI";
const DESCRIPTION = "설명 영상 스타일 59개 중에 고르고 주제만 넣으면, 클로드용 프롬프트를 바로 복사해요.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "그린코끼리 AI" }],
  icons: { icon: "/sites/greenkokki/logo.jpg" },
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function ClaudeMotionGraphicKitPage() {
  return (
    <div>
      <SiteHeader active="실전키트" />
      <div className="gk-back-wrap">
        <a href="https://greenkokki.com/kits" className="gk-back">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
          실전키트 목록으로
        </a>
      </div>
      {/* The kit is a standalone HTML document, embedded exactly as on the source site. */}
      <iframe
        src="/kits/claude-motion-graphic.html"
        title="클로드로 모션그래픽 만들기"
        className="gk-kit-frame"
        allow="clipboard-write"
      />
      <SiteFooter />
    </div>
  );
}
