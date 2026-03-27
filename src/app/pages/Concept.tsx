import { ArrowLeft, Heart, Shield, Users } from 'lucide-react';
import { Link } from 'react-router';

export function Concept() {
  return (
    <div className="min-h-screen pb-20">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">CONCEPT</h1>
          <div className="w-10"></div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="max-w-md mx-auto px-4 py-8">
        {/* メインビジュアル */}
        <div className="mb-8">
          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">MUTY</h2>
            <p className="text-sm opacity-90">
              セクシー女優と視聴者を繋ぐ<br />
              新しいライブ配信プラットフォーム
            </p>
          </div>
        </div>

        {/* コンセプト説明 */}
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-3">MUTYとは</h3>
            <p className="text-muted-foreground leading-relaxed">
              MUTYは、セクシー女優がリアルタイムで配信を行い、ファンと直接コミュニケーションを取れる新しいプラットフォームです。
              TikTok LIVEスタイルの縦型配信により、スマートフォンで手軽に楽しめます。
            </p>
          </div>
        </div>

        {/* 3つの特徴 */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-bold mb-4">3つの特徴</h3>
          
          <div className="bg-secondary border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">リアルタイムな交流</h4>
            <p className="text-sm text-muted-foreground">
              お気に入りの女優とリアルタイムでコメントやギフトを通じてコミュニケーション。
              特別な瞬間を共有できます。
            </p>
          </div>

          <div className="bg-secondary border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">安心・安全な環境</h4>
            <p className="text-sm text-muted-foreground">
              厳格なガイドラインと運営体制により、すべてのユーザーが安心して楽しめる環境を提供します。
            </p>
          </div>

          <div className="bg-secondary border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">女優を直接応援</h4>
            <p className="text-sm text-muted-foreground">
              投げ銭システムにより、お気に入りの女優を直接応援できます。
              女優の活動をサポートしましょう。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-secondary border border-border rounded-lg p-6 text-center">
          <h3 className="font-bold mb-3">今すぐ配信を楽しもう</h3>
          <p className="text-sm text-muted-foreground mb-4">
            無料でアカウント登録して、配信を視聴できます
          </p>
          <Link
            to="/register"
            className="inline-block w-full py-3 bg-gradient-primary text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
          >
            新規登録
          </Link>
        </div>
      </div>
    </div>
  );
}
