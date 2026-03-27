import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import conceptIcon from '../../assets/bb13f5c0e39f17b23d3b7b79f7b0a53803ece30e.png';
import userIcon from '../../imports/user_icon.svg';
import girlIcon from '../../imports/girl_icon.svg';

export function BottomNavigation() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="max-w-md mx-auto px-1 h-16 flex items-center">
        <Link to="/" className="flex-1 flex flex-col items-center gap-1 text-primary">
          <img src={conceptIcon} alt="トップ" className="w-5 h-5" />
          <span className="text-xs">トップ</span>
        </Link>
        <Link to="/news" className="flex-1 flex flex-col items-center gap-1">
          <div className="relative">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.9 2 10 2.9 10 4V4.29C7.03 5.17 5 7.9 5 11V17L3 19V20H21V19L19 17V11C19 7.9 16.97 5.17 14 4.29V4C14 2.9 13.1 2 12 2ZM12 23C13.1 23 14 22.1 14 21H10C10 22.1 10.9 23 12 23Z" />
            </svg>
            <div className="absolute -top-1 -right-1 bg-gradient-primary rounded-full w-4 h-4 flex items-center justify-center">
              <span className="text-[10px] font-bold" style={{ color: '#221f1f' }}>3</span>
            </div>
          </div>
          <span className="text-xs text-muted-foreground hover:text-foreground transition-colors">通知</span>
        </Link>
        <Link to={isAuthenticated ? '/user/settings' : '/login'} className="flex-1 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <img src={userIcon} alt="ユーザー" className="w-5 h-5" />
          <span className="text-xs">ユーザー</span>
        </Link>
        <Link to="/actress" className="flex-1 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <img src={girlIcon} alt="女優一覧" className="w-5 h-5" />
          <span className="text-xs">女優一覧</span>
        </Link>
      </div>
    </nav>
  );
}
