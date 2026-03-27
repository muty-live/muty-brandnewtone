import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, ChevronRight, User, FileText, LogOut, Trash2, Coins, CreditCard } from 'lucide-react';
import { useEffect } from 'react';
import { BottomNavigation } from '../components/BottomNavigation';

export function UserSettings() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated || !user) {
      navigate('/login');
    }
  }, [isAuthenticated, user, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const menuItems = [
    {
      icon: Coins,
      label: 'コイン残高',
      value: `${user.coins.toLocaleString()}コイン`,
      to: '/user/coins',
    },
    {
      icon: CreditCard,
      label: '支払い方法',
      to: '/user/payment',
    },
    {
      icon: User,
      label: 'プロフィール設定',
      to: '/user/profile',
    },
    {
      icon: FileText,
      label: '利用規約',
      to: '/user/terms',
    },
    {
      icon: LogOut,
      label: 'ログアウト',
      to: '/user/logout',
      color: 'text-primary',
    },
    {
      icon: Trash2,
      label: 'アカウント削除',
      to: '/user/delete',
      color: 'text-red-500',
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold">ユーザー</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <div className="max-w-md mx-auto p-4">
        {/* ユーザー情報カード */}
        <div className="bg-secondary rounded-xl p-6 mb-6">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-20 h-20 rounded-full"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">{user.username}</h2>
              <p className="text-sm text-muted-foreground">ユーザーID: {user.id}</p>
            </div>
          </div>
        </div>

        {/* メニュー */}
        <div className="bg-secondary rounded-xl overflow-hidden mb-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.to}
                className="flex items-center gap-4 px-6 py-4 hover:bg-background/50 transition-colors border-b border-border last:border-b-0"
              >
                <Icon className={`w-5 h-5 ${item.color || 'text-muted-foreground'}`} />
                <span className={`flex-1 ${item.color || ''}`}>{item.label}</span>
                {item.value && (
                  <span className="text-primary font-bold">{item.value}</span>
                )}
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </Link>
            );
          })}
        </div>

        {/* 決済情報 */}
        <div className="bg-secondary rounded-xl p-6">
          <h3 className="font-bold text-lg mb-4">決済情報</h3>
          {user.creditCard ? (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <CreditCard className="w-8 h-8 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">{user.creditCard.brand}</p>
                  <p className="text-sm text-muted-foreground">
                    **** **** **** {user.creditCard.lastFour}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-2 px-4 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                  変更
                </button>
                <button className="flex-1 py-2 px-4 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                  削除
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-muted-foreground mb-4">登録されているカードはありません</p>
              <button className="py-2 px-6 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                カードを追加
              </button>
            </div>
          )}
        </div>

        {/* 配信者登録 */}
        
      </div>

      <BottomNavigation />
    </div>
  );
}