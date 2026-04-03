import { Link } from 'react-router';
import './style.css';
import '../Tag/style.css';
import '../Button/style.css';

export function Card() {
  return (
    <div className="card-debug-page" style={{ paddingBottom: '100px' }}>
      
      <div className="sample-section">
        <h2>通知カード</h2>
        <div className="sample-card-container">
          <Link className="card--notice" to="#">
            <div className="card--notice-info">
              <span className="card--notice-date">2026.03.15</span>
              <span className="tag--notice">お知らせ</span>
            </div>
            <h3 className="card--notice-title">新機能「投げ銭アイテム」を追加しました</h3>
            <p className="card--notice-comment">お気に入りの女優さんに、より多様なアイテムで応援できるようになりました。</p>
          </Link>
        </div>
      </div>

      <div className="sample-section">
        <h2>コンセプト</h2>
        <div className="sample-card-container">
          <div className="card--concept">
            <div className="card--concept-icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card--concept-icon">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <h4 className="card--concept-title">リアルタイムな交流</h4>
            <p className="card--concept-comment">お気に入りの女優とリアルタイムでコメントやギフトを通じてコミュニケーション。 特別な瞬間を共有できます。</p>
          </div>
        </div>
      </div>

      <div className="sample-section">
        <h2>配信カード（デフォルト）</h2>
        <div className="sample-card-container">
          <Link className="card--streaming" to="#">
            <div className="card--streaming-inner">
              <div className="card--streaming-image-container">
                <img alt="🎵 新曲初披露！応援してね" className="card--streaming-image" src="https://images.unsplash.com/photo-1765021560968-dcbc0523232d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" />
                <div className="card--streaming-image-layer"></div>
              </div>
              <div className="card--streaming-tag">
                <div className="tag tag--date">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tag--date-icon">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className="tag--date-taxt">6/2 18:00</span>
                </div>
              </div>
              <div className="card--streaming-streamer">
                <div className="card--streaming-streamer-inner">
                  <img alt="Hana" className="card--streaming-streamer-avater" src="https://images.unsplash.com/photo-1765021560968-dcbc0523232d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" />
                  <div className="card--streaming-streamer-data">
                    <div className="card--streaming-streamer-name">
                      <h3 className="card--streaming-streamer-nametext">Hana</h3>
                    </div>
                    <p className="card--streaming-streamer-follower">22,000 フォロワー</p>
                  </div>
                </div>
                <p className="card--streaming-comment">🎵 新曲初披露！応援してね</p>
                <div className="card--streaming-gap"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="sample-section">
        <h2>配信カード（配信中）</h2>
        <div className="sample-card-container">
          <Link className="card card--streaming" to="#">
            <div className="card--streaming-inner">
              <div className="card--streaming-image-container">
                <img alt="🎵 新曲初披露！応援してね" className="card--streaming-image" src="https://images.unsplash.com/photo-1765021560968-dcbc0523232d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" />
                <div className="card--streaming-image-layer"></div>
              </div>
              <div className="card--streaming-tag">
                <div className="tag tag--live">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tag--live-icon">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                  <span className="tag--live-text">LIVE</span>
                </div>
              </div>
              <div className="card--streaming-streamer">
                <div className="card--streaming-streamer-inner">
                  <img alt="Hana" className="card--streaming-streamer-avater" src="https://images.unsplash.com/photo-1765021560968-dcbc0523232d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" />
                  <div className="card--streaming-streamer-data">
                    <div className="card--streaming-streamer-name">
                      <h3 className="card--streaming-streamer-nametext">Hana</h3>
                    </div>
                    <p className="card--streaming-streamer-follower">22,000 フォロワー</p>
                  </div>
                </div>
                <p className="card--streaming-comment">🎵 新曲初披露！応援してね</p>
                <div className="card--streaming-gap"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="sample-section">
        <h2>女優カード</h2>
        <div className="sample-card-container">
          <Link className="card--actress" to="#">
            <div className="card--actress-image-container">
              <img alt="Rina" className="card--actress-image" src="https://images.unsplash.com/photo-1765021561080-a99798e74d69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" />
            </div>
            <div className="card--actress-info">
              <h3 className="card--actress-name">Rina</h3>
              <p className="card--actress-comment">モデル活動しています📸 雑談配信メイン</p>
              <div className="card--actress-follower">
                <span>9.8Kフォロワー</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="sample-section">
        <h2>女優プロフィール 投稿（デフォルト）</h2>
        <div className="sample-card-container">
          <div className="card--post">
            <div className="card--post-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card--post-icon">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              <span className="card--post-date">2026年3月21日 07:30</span>
            </div>
            <p className="card--post-comment">みんなのおかげでフォロワー15000人突破しました🎉 ありがとう！</p>
            <div className="card--post-action">
              <div className="card--post-action-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card--post-action-icon">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                <span className="card--post-action-text">1,203</span>
              </div>
              <div className="card--post-action-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card--post-action-icon">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                <span className="card--post-action-text">94</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="sample-section">
        <h2>ログインが必要です</h2>
        <div className="card--popup-login">
          <h3 className="card--popup-login-title">ログインが必要です</h3>
          <p className="card--popup-login-text">コメントや投げ銭などの機能を利用するにはログインが必要です。</p>
          <div className="card--popup-login-action">
            <button className="btn btn--secondary">キャンセル</button>
            <button className="btn btn--primary">ログイン</button>
          </div>
        </div>
      </div>

      <Link to="/sitemap" className="mt-8">サイトマップ</Link>
    </div>
  );
}