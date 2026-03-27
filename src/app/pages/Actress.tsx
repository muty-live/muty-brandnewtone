import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router';
import { performers } from '../data/mockData';
import { useState } from 'react';
import { BottomNavigation } from '../components/BottomNavigation';

export function Actress() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPerformers = performers.filter((performer) =>
    performer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pb-20">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">ACTRESS</h1>
          <div className="w-10"></div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* 検索バー */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="女優名で検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* 女優一覧 */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">登録女優一覧</h2>
            <span className="text-sm text-muted-foreground">
              {filteredPerformers.length}名
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filteredPerformers.map((performer) => (
            <Link
              key={performer.id}
              to={`/profile/${performer.id}`}
              className="bg-secondary border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={performer.avatar}
                  alt={performer.name}
                  className="w-full h-full object-cover"
                />
                {performer.isVerified && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-bold mb-1 truncate">{performer.name}</h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {performer.bio}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{(performer.followers / 1000).toFixed(1)}Kフォロワー</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPerformers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">該当する女優が見つかりませんでした</p>
          </div>
        )}
      </div>

      {/* ボトムナビゲーション */}
      <BottomNavigation />
    </div>
  );
}