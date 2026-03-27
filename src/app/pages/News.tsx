import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { BottomNavigation } from '../components/BottomNavigation';

export function News() {
  const newsItems = [
    {
      id: 1,
      date: '2026.03.15',
      category: 'お知らせ',
      title: '新機能「投げ銭アイテム」を追加しました',
      content: 'お気に入りの女優さんに、より多様なアイテムで応援できるようになりました。',
    },
    {
      id: 2,
      date: '2026.03.10',
      category: 'キャンペーン',
      title: '春の新人女優応援キャンペーン開催中',
      content: '新人女優さんの配信を視聴すると、特別ポイントがもらえるキャンペーンを実施中です。',
    },
    {
      id: 3,
      date: '2026.03.05',
      category: 'メンテナンス',
      title: 'システムメンテナンスのお知らせ',
      content: '3月20日（木）深夜2:00〜4:00の間、システムメンテナンスを実施いたします。',
    },
    {
      id: 4,
      date: '2026.03.01',
      category: 'お知らせ',
      title: 'MUTYアプリ正式リリース',
      content: 'セクシー女優の配信プラットフォーム「MUTY」が正式リリースされました。',
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">通知</h1>
          <div className="w-10"></div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-4">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="block bg-secondary border border-border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-muted-foreground">{item.date}</span>
                <span className="px-2 py-1 text-xs bg-gradient-primary rounded" style={{ color: '#FFFFFF' }}>
                  {item.category}
                </span>
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.content}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* ボトムナビゲーション */}
      <BottomNavigation />
    </div>
  );
}