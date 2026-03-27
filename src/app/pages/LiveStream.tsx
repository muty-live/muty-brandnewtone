import { useParams, useNavigate, Link } from 'react-router';
import { mockLiveStreams, mockGifts } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { X, Heart, Gift, Share2, MoreVertical, Send, Zap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import './LiveStream.css';

export function LiveStream() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const stream = mockLiveStreams.find((s) => s.id === id);
  const [showLoginPopup, setShowLoginPopup] = useState(!isAuthenticated);
  const [showGiftMenu, setShowGiftMenu] = useState(false);
  const [message, setMessage] = useState('');
  const [remainingTime, setRemainingTime] = useState(899); // 14:59 in seconds
  const [showGiftTooltip, setShowGiftTooltip] = useState(true);
  const [showSecondGiftTooltip, setShowSecondGiftTooltip] = useState(true);
  const [comments] = useState([
    { id: 1, user: 'ユーザー1', text: 'こんにちは！', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, user: 'ユーザー2', text: '素敵な配信ですね✨', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 3, user: 'ユーザー3', text: '応援してます❤️', avatar: 'https://i.pravatar.cc/150?img=13' },
    { id: 4, user: 'ユーザー4', text: 'いつも見てます！', avatar: 'https://i.pravatar.cc/150?img=14' },
    { id: 5, user: 'ユーザー5', text: '最高です！', avatar: 'https://i.pravatar.cc/150?img=15' },
  ]);
  const commentsEndRef = useRef<HTMLDivElement>(null);

  // 残り時間のカウントダウン
  useEffect(() => {
    if (remainingTime <= 0) return;
    const timer = setInterval(() => {
      setRemainingTime((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [remainingTime]);

  // コメントが更新されたら自動スクロール
  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [comments]);

  // 残り時間を MM:SS 形式にフォーマット
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!stream) {
    return (
      <div className="livestream-container">
        <div className="livestream-content" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--muted-foreground)' }}>配信が見つかりませんでした</p>
        </div>
      </div>
    );
  }

  const handleSendMessage = () => {
    if (!isAuthenticated) {
      setShowLoginPopup(true);
      return;
    }
    if (message.trim()) {
      // メッセージ送信処理
      setMessage('');
    }
  };

  return (
    <div className="livestream-container">
      {/* 背景動画エリア */}
      <div className="livestream-bg">
        <img
          src={stream.thumbnail}
          alt={stream.title}
          className="livestream-bg-image"
        />
        <div className="livestream-bg-overlay"></div>
      </div>

      {/* コンテンツオーバーレイ */}
      <div className="livestream-content">
        {/* トップバー */}
        <div className="livestream-topbar">
          <button
            onClick={() => navigate('/')}
            className="livestream-btn"
          >
            <X className="livestream-btn-icon" />
          </button>
          <div className="flex-1 flex justify-center">
            {stream.status === 'live' && (
              <div className="livestream-live-badge">
                <Zap className="livestream-live-icon" />
                <span className="livestream-live-text">LIVE</span>
              </div>
            )}
          </div>
          <div className="text-white text-2xl font-bold" style={{ minWidth: '80px', textAlign: 'right', paddingRight: '1rem' }}>
            {formatTime(remainingTime)}
          </div>
        </div>

        {/* ボトムエリア */}
        <div className="livestream-bottom">
          {/* コメント表示エリア */}
          <div className="livestream-comments">
            {comments.map((comment) => (
              <div key={comment.id} className="livestream-comment">
                <img
                  src={comment.avatar}
                  alt={comment.user}
                  className="livestream-comment-avatar"
                />
                <div className="livestream-comment-content">
                  <p className="livestream-comment-text">
                    <span className="livestream-comment-user" style={{ color: '#E7A3FE' }}>{comment.user}</span>
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
            <div ref={commentsEndRef}></div>
          </div>

          {/* 配信者情報 */}
          <Link
            to={`/profile/${stream.performer.id}`}
            className="livestream-performer"
          >
            <img
              src={stream.performer.avatar}
              alt={stream.performer.name}
              className="livestream-performer-avatar"
              style={{ objectFit: 'cover' }}
            />
            <div className="livestream-performer-info">
              <div className="livestream-performer-name-wrap">
                <h3 className="livestream-performer-name">{stream.performer.name}</h3>
              </div>
              <p className="livestream-performer-title">{stream.title}</p>
            </div>
            <button className="livestream-follow-btn">
              フォロー
            </button>
          </Link>

          {/* アクションバー */}
          <div className="livestream-actions">
            <button
              onClick={() => {
                if (!isAuthenticated) {
                  setShowLoginPopup(true);
                }
              }}
              className="livestream-action-btn"
            >
              <Heart className="livestream-action-icon" />
            </button>
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => {
                  setShowGiftTooltip(false);
                  setShowSecondGiftTooltip(false);
                  if (!isAuthenticated) {
                    setShowLoginPopup(true);
                  } else {
                    setShowGiftMenu(true);
                  }
                }}
                className="livestream-action-btn-primary"
              >
                <Gift className="livestream-action-icon-primary" />
              </button>
              
              {/* ギフトツールチップ */}
              {showGiftTooltip && remainingTime <= 900 && remainingTime >= 840 && isAuthenticated && (
                <div style={{
                  position: 'absolute',
                  bottom: 'calc(100% + 10px)',
                  left: '0',
                  background: 'linear-gradient(135deg, #e7a3fe 0%, #fc4acb 100%)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  width: '240px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  zIndex: 1000,
                  animation: 'floatTooltip 2s ease-in-out infinite',
                }}>
                  <button
                    onClick={() => setShowGiftTooltip(false)}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    ×
                  </button>
                  <p style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    marginBottom: '4px',
                    marginTop: '0',
                  }}>
                    300コインプレゼント
                  </p>
                  <p style={{
                    color: 'white',
                    fontSize: '13px',
                    margin: '0',
                    lineHeight: '1.4',
                  }}>
                    ギフトを送ると名前を呼んでもらえるかも？
                  </p>
                  {/* 吹き出しの矢印 */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: '20px',
                    width: '0',
                    height: '0',
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '8px solid #e7a3fe',
                  }}></div>
                </div>
              )}

              {/* 2つ目のギフトツールチップ (3:00〜0:00) */}
              {showSecondGiftTooltip && remainingTime <= 180 && remainingTime >= 0 && isAuthenticated && (
                <div style={{
                  position: 'absolute',
                  bottom: 'calc(100% + 10px)',
                  left: '0',
                  background: 'linear-gradient(135deg, #e7a3fe 0%, #fc4acb 100%)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  width: '240px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  zIndex: 1000,
                  animation: 'floatTooltip 2s ease-in-out infinite',
                }}>
                  <button
                    onClick={() => setShowSecondGiftTooltip(false)}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    ×
                  </button>
                  <p style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    marginBottom: '4px',
                    marginTop: '0',
                  }}>
                    100コインプレゼント！
                  </p>
                  <p style={{
                    color: 'white',
                    fontSize: '13px',
                    margin: '0',
                    lineHeight: '1.4',
                  }}>
                    ここまで見てくれたあなたにささやかなプレゼント
                  </p>
                  {/* 吹き出しの矢印 */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: '20px',
                    width: '0',
                    height: '0',
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '8px solid #e7a3fe',
                  }}></div>
                </div>
              )}
            </div>
            <div className="livestream-input-wrap">
              <input
                type="text"
                placeholder={isAuthenticated ? 'コメントを入力...' : 'ログインしてコメント'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                onClick={() => !isAuthenticated && setShowLoginPopup(true)}
                className="livestream-input"
              />
              <button
                onClick={handleSendMessage}
                className="livestream-send-btn"
              >
                <Send className="livestream-send-icon" />
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* ログイン必要ポップアップ */}
      {showLoginPopup && (
        <div className="livestream-popup">
          <div className="livestream-popup-content">
            <h3 className="livestream-popup-title">ログインが必要です</h3>
            <p className="livestream-popup-text">
              コメントや投げ銭などの機能を利用するにはログインが必要です。
            </p>
            <div className="livestream-popup-actions">
              <button
                onClick={() => setShowLoginPopup(false)}
                className="livestream-popup-btn livestream-popup-btn-secondary"
              >
                キャンセル
              </button>
              <Link
                to="/login"
                className="livestream-popup-btn livestream-popup-btn-primary"
              >
                ログイン
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 投げ銭メニュー */}
      {showGiftMenu && (
        <div className="livestream-gift-menu">
          <div className="livestream-gift-menu-content">
            <div className="livestream-gift-menu-header">
              <h3 className="livestream-gift-menu-title">応援する</h3>
              <button
                onClick={() => setShowGiftMenu(false)}
                className="livestream-gift-menu-close"
              >
                <X style={{ width: '1.5rem', height: '1.5rem' }} />
              </button>
            </div>
            <div className="livestream-gift-grid">
              {mockGifts.map((gift) => (
                <Link
                  key={gift.id}
                  to={`/gift/${stream.id}/${gift.id}`}
                  className="livestream-gift-item"
                >
                  <span className="livestream-gift-icon">{gift.icon}</span>
                  <p className="livestream-gift-name">{gift.name}</p>
                  <p className="livestream-gift-price">{gift.price}</p>
                </Link>
              ))}
            </div>
            <div style={{ padding: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '1rem' }}>
              <p style={{ color: 'white', fontSize: '1rem', textAlign: 'center' }}>
                コイン残高：<span style={{ fontWeight: 'bold', color: '#E7A3FE' }}>3762</span>コイン
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 配信終了メッセージ */}
      {remainingTime === 0 && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #e7a3fe 0%, #fc4acb 100%)',
            borderRadius: '20px',
            padding: '40px 60px',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(231, 163, 254, 0.4)',
          }}>
            <h2 style={{
              color: 'white',
              fontSize: '28px',
              fontWeight: 'bold',
              margin: 0,
              lineHeight: 1.5,
            }}>
              ライブ配信が終了しました。
            </h2>
            <button
              onClick={() => navigate('/')}
              style={{
                marginTop: '24px',
                padding: '12px 32px',
                background: 'white',
                color: '#fc4acb',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              トップに戻る
            </button>
          </div>
        </div>
      )}
    </div>
  );
}