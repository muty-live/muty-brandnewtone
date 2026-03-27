import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft } from 'lucide-react';
import logo from '../../assets/7518b57820fb1e403ea3c90ebd7d5029c977eed2.png';
import { useState } from 'react';

export function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('パスワードが一致しません');
      return;
    }
    if (!agreed) {
      alert('利用規約に同意してください');
      return;
    }
    register(username, password);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center">
            <img src={logo} alt="MUTY" className="h-12 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-2">新規登録</h1>
            <p className="text-muted-foreground">新しいアカウントを作成してください</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm mb-2">
                ユーザー名
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="ユーザー名を入力"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-2">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="パスワードを入力"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm mb-2">
                パスワード（確認）
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="パスワードを再入力"
                required
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm">
                <Link to="/user/terms" className="text-primary hover:underline">
                  利用規約
                </Link>
                に同意します
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              登録する
            </button>
          </form>

          <div className="text-center">
            <Link to="/login" className="text-primary hover:underline">
              すでにアカウントをお持ちの方はこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}