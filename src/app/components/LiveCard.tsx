import { LiveStream } from '../types/live';
import { Eye, Clock, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LiveCardProps {
  stream: LiveStream;
}

export function LiveCard({ stream }: LiveCardProps) {
  const isLive = stream.status === 'live';
  const navigate = useNavigate();

  const handleAvatarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/profile/${stream.performer.id}`);
  };

  return (
    <Link to={`/live/${stream.id}`} className="group cursor-pointer">
      <div 
        className="relative aspect-[9/16] rounded-lg bg-secondary shadow-xl md:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_10px_20px_-5px_rgba(0,0,0,0.5)] transition-shadow duration-300"
      >
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={stream.thumbnail}
            alt={stream.title}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        
          {/* グラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
        </div>
        
        {/* ライブ/予定バッジ */}
        <div className="absolute top-3 left-3">
          {isLive ? (
            <div className="flex items-center gap-1.5 bg-gradient-primary px-3 py-1.5 -translate-x-[20px] -skew-x-12">
              <Zap className="w-3 h-3 text-background fill-background animate-pulse skew-x-12" />
              <span className="text-background text-xs font-bold skew-x-12">LIVE</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-black/70 px-3 py-1.5 rounded-lg">
              <Clock className="w-3 h-3 text-[#e7a3fe]" />
              <span className="text-white text-xs font-bold">{stream.scheduledTime}</span>
            </div>
          )}
        </div>

        {/* 視聴者数 */}
        {isLive && (
          null
        )}

        {/* 配信者情報 */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-3 mb-2">
            <ImageWithFallback
              src={stream.performer.avatar}
              alt={stream.performer.name}
              className="w-10 h-10 rounded-full border-2 border-white object-cover object-center cursor-pointer"
              onClick={handleAvatarClick}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 cursor-pointer" onClick={handleAvatarClick}>
                <h3 className="text-white font-bold truncate">{stream.performer.name}</h3>
              </div>
              <p className="text-white/90 text-xs truncate">{stream.performer.followers.toLocaleString()} フォロワー</p>
            </div>
          </div>
          <p className="text-white text-sm line-clamp-2 mb-2">{stream.title}</p>
          <div className="flex flex-wrap gap-1.5">
            {stream.tags.slice(0, 3).map((tag, index) => (
              null
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}