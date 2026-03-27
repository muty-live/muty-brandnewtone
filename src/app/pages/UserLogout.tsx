import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, LogOut } from 'lucide-react';

export function UserLogout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
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
          <h1 className="font-bold">ログアウト</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogOut className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">ログアウトしますか？</h2>
            <p className="text-muted-foreground">
              ログアウトすると、一部の機能が利用できなくなります
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleLogout}
              className="w-full py-4 bg-gradient-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              ログアウト
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