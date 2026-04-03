import { Link } from 'react-router';
import './style.css';

export function Input() {
  return (
    <div className="input-debug-page" style={{ paddingBottom: '100px' }}>
      
      <div className="sample-section">
        <h2>テキスト入力フォーム（デフォルト）</h2>
        <input id="name" required className="input" placeholder="山田 太郎" type="text" name="name" />
      </div>

      <div className="sample-section">
        <h2>テキスト入力フォーム（セレクトボックス）</h2>
        <select id="subject" name="subject" required className="input" defaultValue="">
          <option value="">選択してください</option>
          <option value="general">一般的なお問い合わせ</option>
          <option value="technical">技術的な問題</option>
          <option value="payment">お支払いについて</option>
          <option value="performer">女優登録について</option>
          <option value="account">アカウントについて</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div className="sample-section">
        <h2>テキスト入力フォーム（テキストエリア）</h2>
        <textarea id="message" name="message" required rows={6} className="input" placeholder="お問い合わせ内容をご記入ください"></textarea>
      </div>

      <div className="sample-section">
        <h2>テキスト入力フォーム（チェック）</h2>
        <div className="input--check-container">
          <input id="terms" className="input--check" type="checkbox" />
          <label htmlFor="terms" className="input--check-text">
            <Link className="input--check-link" to="/user/terms">利用規約</Link>に同意します
          </label>
        </div>
      </div>

      <div className="sample-section">
        <h2>検索エリア</h2>
        <div className="input--search-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input--search-icon">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input placeholder="女優名で検索..." className="input input--search" type="text" />
        </div>
      </div>

      <div className="sample-section">
        <h2>コメント投稿</h2>
        <div className="input--comment">
          <input placeholder="コメントを入力..." className="input--comment-form" type="text" />
          <button className="input--comment-send">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input--comment-send-icon">
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
          </button>
        </div>
      </div>

      <Link to="/sitemap" className="mt-8">サイトマップ</Link>
      
    </div>
  );
}