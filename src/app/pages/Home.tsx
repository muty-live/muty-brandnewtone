import { Send, User, Home as HomeIcon, Megaphone, Lightbulb, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import logo from '../../assets/7518b57820fb1e403ea3c90ebd7d5029c977eed2.png';
import conceptIcon from '../../assets/bb13f5c0e39f17b23d3b7b79f7b0a53803ece30e.png';
import actressIcon from '../../assets/05d53d289e1798f73b7014d2ab5b994d8935321a.png';
import topIcon from '../../assets/6b8b6f6ab81b4b64cd992c4e64b2f9adb88e00d1.png';
import userIcon from '../../imports/user_icon.svg';
import girlIcon from '../../imports/girl_icon.svg';
import mutyIcon from '../../imports/icon_muty2.svg';
import contactIcon from '../../imports/contact_icon4.svg';
import { mockLiveStreams } from '../data/mockData';
import { LiveCard } from '../components/LiveCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useRef, useEffect, useState } from 'react';
import { BottomNavigation } from '../components/BottomNavigation';

export function Home() {
  const { isAuthenticated } = useAuth();
  
  const liveStreams = mockLiveStreams.filter((s) => s.status === 'live');
  const scheduledStreams = mockLiveStreams.filter((s) => s.status === 'scheduled');

  return (
    <div className="min-h-screen pb-20">
      {/* 左上固定ロゴマーク */}
      

      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-4 h-16 flex items-center justify-between">
          <img src={logo} alt="MUTY" className="h-8" />
          <Link
            to="/contact"
            className="px-4 py-2 bg-[#2e2c2c] hover:bg-[#3a3838] rounded-lg transition-colors font-bold text-sm text-muted-foreground hover:text-foreground"
          >
            <img src={contactIcon} alt="Contact" className="w-5 h-5" />
          </Link>
        </div>
      </header>

      {/* 配信中セクション - 1枚のカードを中央表示 */}
      <section className="mb-8 py-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-90">
          <img src={mutyIcon} alt="" className="w-[1000px] h-[1000px] object-contain" style={{ filter: 'none' }} />
        </div>
        <div className="flex justify-center px-4 relative z-10">
          {liveStreams.length > 0 && (
            <div className="w-72">
              <LiveCard stream={liveStreams[0]} />
            </div>
          )}
        </div>
      </section>

      {/* 配信予定セクション - 画面幅いっぱい */}
      <section className="py-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            今後の配信予定
          </h2>
          <span className="text-sm text-muted-foreground">{scheduledStreams.length}件</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {scheduledStreams.map((stream) => (
            <LiveCard key={stream.id} stream={stream} />
          ))}
        </div>
      </section>

      {/* ボトムナビゲーション */}
        <BottomNavigation />
    </div>
  );
}