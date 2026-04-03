import { Link } from 'react-router';
import './style.css';

export function Button() {
  return (
    <div className="button-debug-page" style={{ paddingBottom: '100px' }}>
      
      <div className="sample-section">
        <h2>Primary（デフォルト）</h2>
        <button className="btn btn--primary">ボタン</button>
      </div>

      <div className="sample-section">
        <h2>Primary（ボタン白文字）</h2>
        <button className="btn btn--primary-white">ボタン</button>
      </div>

      <div className="sample-section">
        <h2>Destructive（削除・危険な操作）</h2>
        <button className="btn btn--destructive btn--md">削除する</button>
      </div>

      <div className="sample-section">
        <h2>Outline（枠線のみ）</h2>
        <button className="btn btn--outline btn--md">キャンセル</button>
      </div>

      <div className="sample-section">
        <h2>Secondary</h2>
        <button className="btn btn--secondary btn--md">セカンダリ</button>
      </div>

      <div className="sample-section">
        <h2>Ghost（背景なし）</h2>
        <button className="btn btn--ghost btn--md">ゴースト</button>
      </div>

      <div className="sample-section">
        <h2>Link（テキストリンク風）</h2>
        <button className="btn btn--link btn--md">リンクボタン</button>
      </div>

      <div className="sample-section">
        <h2>Googleでログインボタン</h2>
        <button type="submit" className="btn btn--google">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"></path>
            <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"></path>
            <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"></path>
            <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.737 7.395 3.977 10 3.977z" fill="#EA4335"></path>
          </svg>
          Googleでログイン
        </button>
      </div>

      <div className="sample-section">
        <h2>いいねボタン</h2>
        <button className="btn btn--like">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn--like-icon">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        </button>
      </div>

      <div className="sample-section">
        <h2>ギフトボタン</h2>
        <button className="btn btn--gift">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn--gift-icon">
            <rect x="3" y="8" width="18" height="4" rx="1"></rect>
            <path d="M12 8v13"></path>
            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
          </svg>
        </button>
      </div>

      <div className="sample-section">
        <h2>閉じるボタン</h2>
        <button className="btn btn--close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn--close-icon">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>

      <div className="sample-section">
        <h2>戻るボタン</h2>
        <button className="btn btn--back">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn--back-icon">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
        </button>
      </div>

      <div className="sample-section">
        <h2>＋ボタン</h2>
        <button className="btn btn--plus">+</button>
      </div>

      <div className="sample-section">
        <h2>-ボタン</h2>
        <button className="btn btn--minus">-</button>
      </div>

      <div className="sample-section">
        <h2>シェアボタン</h2>
        <button className="btn--share">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn--share-icon">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
          </svg>
        </button>
      </div>

      <div className="sample-section">
        <h2>サイズ比較</h2>
        <button className="btn btn--primary btn--sm">Small</button>
        <button className="btn btn--primary btn--md">Medium</button>
        <button className="btn btn--primary btn--lg">Large</button>
      </div>

      <div className="sample-section">
        <h2>無効状態（disabled）</h2>
        <button className="btn btn--primary btn--md" disabled>送信できません</button>
        <button className="btn btn--outline btn--md" disabled>キャンセル</button>
      </div>

      <Link to="/sitemap" className="mt-8">サイトマップ</Link>
      
    </div>
  );
}