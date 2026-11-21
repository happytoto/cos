const YOUTUBE = "https://www.youtube.com/@greenkokki";

export function SiteFooter() {
  return (
    <footer className="gk-footer">
      <div className="gk-footer-note">
        <p>
          이 페이지의 일부 링크는 제휴 링크가 포함되어 있고, 이를 통해 그린코끼리가 소정의 수수료를 받을 수
          있습니다. 여러분이 내는 금액은 달라지지 않고, 그린코끼리 운영에 많은 도움이 됩니다.
        </p>
      </div>
      <div className="gk-footer-bar">
        <span>© 그린코끼리 AI</span>
        <div className="gk-footer-links">
          <a href={YOUTUBE} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href={`${YOUTUBE}/join`} target="_blank" rel="noopener noreferrer">
            멤버십
          </a>
          <a href="https://greenkokki.com/#join">뉴스레터</a>
        </div>
      </div>
    </footer>
  );
}
