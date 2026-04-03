import { Link } from 'react-router';
import './style.css';

export function Tag() {
  return (
    <div className="tag-debug-page" style={{ paddingBottom: '100px' }}>
      
      <div className="sample-section">
        <h2>Live配信タグ</h2>
        <div className="tag tag--live">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tag--live-icon">
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
          <span className="tag--live-text">LIVE</span>
        </div>
      </div>

      <div className="sample-section">
        <h2>Live配信中</h2>
        <div className="tag tag--live-now">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tag--live-now-icon">
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
          <span className="tag--live-now-text">LIVE</span>
        </div>
      </div>

      <div className="sample-section">
        <h2>配信予定日時</h2>
        <div className="tag tag--date">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tag--date-icon">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span className="tag--date-taxt">6/2 18:00</span>
        </div>
      </div>

      <div className="sample-section">
        <h2>通知カテゴリー</h2>
        <span className="tag--notice">お知らせ</span>
      </div>

      <div className="sample-section">
        <h2>チェックマークバッヂ</h2>
        <div className="sample-section--badge-container" style={{ position: 'relative', width: '80px', height: '80px', background: '#000' }}>
          <div className="badge--check">
            <svg className="badge--check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="sample-section">
        <h2>通知バッヂ</h2>
        <div className="sample-section--badge-container" style={{ position: 'relative', width: '80px', height: '80px', background: '#000' }}>
          <div className="badge--notice">
            <span className="badge--notice-text">3</span>
          </div>
        </div>
      </div>
      
      <Link to="/sitemap" className="mt-8">サイトマップ</Link>

    </div>
  );
}