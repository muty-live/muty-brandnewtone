import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export function UserDelete() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [confirmed, setConfirmed] = useState(false);

  const handleDelete = () => {
    if (confirmed) {
      // アカウント削除処理
      logout();
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b border-border">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold">アカウント削除</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">アカウントを削除しますか？</h2>
            <p className="text-muted-foreground mb-4">
              この操作は取り消すことができません
            </p>
          </div>

          <div className="bg-secondary rounded-xl p-4 space-y-2 text-sm">
            <p className="text-muted-foreground">削除されるもの:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• プロフィール情報</li>
              <li>• フォロー・フォロワー</li>
              <li>• コメント履歴</li>
              <li>• ギフト履歴</li>
              <li>• 保有コイン</li>
            </ul>
          </div>

          <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl">
            <input
              id="confirm"
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="confirm" className="text-sm">
              上記の内容を理解し、アカウントを削除することに同意します
            </label>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleDelete}
              disabled={!confirmed}
              className="w-full py-4 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              アカウントを削除
            </button>
            <button
              onClick={() => navigate(-1)}
              className="w-full py-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
            >
              キャンセル
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}