import { useParams, useNavigate } from 'react-router';
import { mockLiveStreams } from '../data/mockData';
import { Home, Users, Heart, Gift, Share2 } from 'lucide-react';

export function LiveEnded() {
  const { id } = useParams();
  const navigate = useNavigate();
  const stream = mockLiveStreams.find((s) => s.id === id);

  if (!stream) {
    return null;
  }

  // モック統計データ
  const stats = {
    totalViewers: 3450,
    peakViewers: 2103,
    likes: 1234,
    gifts: 567,
    totalRevenue: 125000,
    duration: '1時間32分',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-md mx-auto w-full p-4 flex flex-col items-center justify-center">
        <div className="w-full space-y-6">
          {/* アイコンとメッセージ */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🎉</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">配信終了</h1>
            <p className="text-muted-foreground">お疲れ様でした！</p>
          </div>

          {/* 配信者情報 */}
          <div className="bg-secondary rounded-xl p-4 flex items-center gap-4">
            <img
              src={stream.performer.avatar}
              alt={stream.performer.name}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1">
              <h2 className="font-bold text-lg">{stream.performer.name}</h2>
              <p className="text-sm text-muted-foreground">{stream.title}</p>
            </div>
          </div>

          {/* 統計情報 */}
          <div className="bg-secondary rounded-xl p-6">
            <h3 className="font-bold mb-4">配信統計</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-xl">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold mb-1">{stats.totalViewers.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">総視聴者数</p>
              </div>
              <div className="text-center p-4 bg-background rounded-xl">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold mb-1">{stats.peakViewers.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">最大同時視聴</p>
              </div>
              <div className="text-center p-4 bg-background rounded-xl">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold mb-1">{stats.likes.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">いいね数</p>
              </div>
              <div className="text-center p-4 bg-background rounded-xl">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Gift className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold mb-1">{stats.gifts.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">ギフト数</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">配信時間</span>
                <span className="font-bold">{stats.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">獲得収益</span>
                <span className="text-2xl font-bold text-primary">
                  ¥{stats.totalRevenue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* アクションボタン */}
          <div className="space-y-3">
            <button className="w-full py-4 bg-secondary rounded-xl flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>配信をシェア</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full py-4 bg-gradient-primary text-primary-foreground rounded-xl flex items-center justify-center gap-2 font-bold hover:opacity-90 transition-opacity"
            >
              <Home className="w-5 h-5" />
              <span>ホームに戻る</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}