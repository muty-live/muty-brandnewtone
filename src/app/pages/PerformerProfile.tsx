import { useParams, useNavigate } from 'react-router';
import { mockPerformers, mockLiveStreams, mockPosts } from '../data/mockData';
import { ArrowLeft, BadgeCheck, Users, Gift, Share2, Zap, Heart, MessageCircle, Play, FileText, Image as ImageIcon } from 'lucide-react';
import { LiveCard } from '../components/LiveCard';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function PerformerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'posts' | 'media' | 'upcoming'>('posts');
  
  const performer = mockPerformers.find((p) => p.id === id);
  const performerStreams = mockLiveStreams.filter((s) => s.performer.id === id);
  const performerPosts = mockPosts.filter((p) => p.performerId === id);
  const mediaPosts = performerPosts.filter((p) => p.type === 'image' || p.type === 'video');
  const allStreams = performerStreams; // 配信中と配信予定の両方

  if (!performer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">配信者が見つかりませんでした</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold">プロフィール</h1>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className="max-w-md mx-auto">
        {/* カバー画像 */}
        <div className="relative h-48 bg-gradient-to-br from-primary/30 to-primary/10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        </div>

        {/* プロフィール情報 */}
        <div className="px-4 -mt-16 relative z-10">
          <div className="flex items-end justify-between mb-4">
            <img
              src={performer.avatar}
              alt={performer.name}
              className="w-28 h-28 rounded-full border-4 border-background object-cover object-center"
            />
            <button className="px-6 py-2.5 bg-gradient-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity">
              フォロー
            </button>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold">{performer.name}</h2>
              {performer.isVerified && <BadgeCheck className="w-6 h-6 text-primary" />}
            </div>
            <p className="text-muted-foreground mb-4">{performer.bio}</p>
          </div>

          {/* 統計情報 */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-secondary rounded-xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <p className="text-2xl font-bold">{(performer.followers / 1000).toFixed(1)}K</p>
              <p className="text-xs text-muted-foreground">フォロワー</p>
            </div>
            <div className="text-center border-x border-border">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Gift className="w-4 h-4 text-primary" />
              </div>
              <p className="text-2xl font-bold">{(performer.totalGifts / 1000).toFixed(0)}K</p>
              <p className="text-xs text-muted-foreground">獲得ギフト</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <p className="text-2xl font-bold">{performerStreams.length}</p>
              <p className="text-xs text-muted-foreground">配信</p>
            </div>
          </div>

          {/* タブ */}
          <div className="mb-8">
            <div className="flex border-b border-border mb-4">
              <button
                className={`flex-1 py-3 text-sm font-bold transition-all relative ${
                  activeTab === 'posts'
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveTab('posts')}
              >
                投稿
                {activeTab === 'posts' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary rounded-t-full"></div>
                )}
              </button>
              <button
                className={`flex-1 py-3 text-sm font-bold transition-all relative ${
                  activeTab === 'media'
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveTab('media')}
              >
                メディア
                {activeTab === 'media' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary rounded-t-full"></div>
                )}
              </button>
              <button
                className={`flex-1 py-3 text-sm font-bold transition-all relative ${
                  activeTab === 'upcoming'
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveTab('upcoming')}
              >
                配信
                {activeTab === 'upcoming' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary rounded-t-full"></div>
                )}
              </button>
            </div>

            {/* 投稿タイムライン */}
            {activeTab === 'posts' && (
              <div className="space-y-4">
                {performerPosts.length > 0 ? (
                  performerPosts.map((post) => (
                    <div key={post.id} className="bg-secondary rounded-xl p-4">
                      {/* 投稿タイプアイコン */}
                      <div className="flex items-center gap-2 mb-3">
                        {post.type === 'text' && <FileText className="w-4 h-4 text-primary" />}
                        {post.type === 'image' && <ImageIcon className="w-4 h-4 text-primary" />}
                        {post.type === 'video' && <Play className="w-4 h-4 text-primary" />}
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.createdAt).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>

                      {/* メディア表示 */}
                      {(post.type === 'image' || post.type === 'video') && post.mediaUrl && (
                        <div className="relative mb-3 rounded-lg overflow-hidden aspect-video">
                          <ImageWithFallback
                            src={post.type === 'video' ? post.thumbnailUrl || post.mediaUrl : post.mediaUrl}
                            alt="投稿メディア"
                            className="w-full h-full object-cover"
                          />
                          {post.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                <Play className="w-6 h-6 text-black fill-black ml-1" />
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* テキストコンテンツ */}
                      {post.content && <p className="text-sm mb-3">{post.content}</p>}

                      {/* いいね・コメント */}
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Heart className="w-4 h-4" />
                          <span className="text-xs">{post.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-xs">{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>投稿はありません</p>
                  </div>
                )}
              </div>
            )}

            {/* メディアグリッド */}
            {activeTab === 'media' && (
              <div>
                {mediaPosts.length > 0 ? (
                  <div className="grid grid-cols-3 gap-1">
                    {mediaPosts.map((post) => (
                      <div key={post.id} className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={post.type === 'video' ? post.thumbnailUrl || post.mediaUrl : post.mediaUrl || ''}
                          alt="メディア"
                          className="w-full h-full object-cover"
                        />
                        {post.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                              <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>メディアはありません</p>
                  </div>
                )}
              </div>
            )}

            {/* 今後の配信予定 */}
            {activeTab === 'upcoming' && (
              <div>
                {allStreams.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {allStreams.map((stream) => (
                      <LiveCard key={stream.id} stream={stream} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>配信予定はありません</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}