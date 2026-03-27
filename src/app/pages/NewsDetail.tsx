import { ArrowLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router';

export function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 通知データ（実際のアプリではAPIから取得）
  const newsItems = [
    {
      id: 1,
      date: '2026.03.15',
      category: 'お知らせ',
      title: '新機能「投げ銭アイテム」を追加しました',
      content: 'お気に入りの女優さんに、より多様なアイテムで応援できるようになりました。',
      detail: `この度、MUTYでは新しい投げ銭アイテム機能を追加いたしました。

これまでの基本的なアイテムに加えて、以下のような新しいアイテムをご用意しました：

• ハート（100円）
• 花束（500円）
• ダイヤモンド（1,000円）
• 王冠（5,000円）
• スーパーカー（10,000円）

配信中の女優さんに直接応援の気持ちを伝えられる、魅力的なアイテムラインナップとなっております。

ぜひ、お気に入りの女優さんの配信で新しいアイテムをお試しください！`,
    },
    {
      id: 2,
      date: '2026.03.10',
      category: 'キャンペーン',
      title: '春の新人女優応援キャンペーン開催中',
      content: '新人女優さんの配信を視聴すると、特別ポイントがもらえるキャンペーンを実施中です。',
      detail: `春の新人女優応援キャンペーンを開催中です！

【キャンペーン期間】
2026年3月10日（月）〜 2026年3月31日（月）

【キャンペーン内容】
デビュー3ヶ月以内の新人女優さんの配信を視聴すると、通常の2倍のポイントが獲得できます。

【対象者】
すべてのMUTYユーザー

【獲得ポイント】
• 配信視聴：20ポイント → 40ポイント
• コメント投稿：10ポイント → 20ポイント
• 投げ銭：金額の10% → 20%

この機会に、フレッシュな新人女優さんたちを応援しましょう！`,
    },
    {
      id: 3,
      date: '2026.03.05',
      category: 'メンテナンス',
      title: 'システムメンテナンスのお知らせ',
      content: '3月20日（木）深夜2:00〜4:00の間、システムメンテナンスを実施いたします。',
      detail: `システムメンテナンスのお知らせ

平素よりMUTYをご利用いただき、誠にありがとうございます。

下記の日程にて、システムメンテナンスを実施させていただきます。

【メンテナンス日時】
2026年3月20日（木）深夜 2:00 〜 4:00（予定）

【メンテナンス内容】
• サーバーの安定性向上
• セキュリティアップデート
• 新機能追加の準備作業

【影響範囲】
メンテナンス時間中は、MUTYの全サービスがご利用いただけなくなります。

ご不便をおかけいたしますが、何卒ご理解とご協力のほどよろしくお願い申し上げます。`,
    },
    {
      id: 4,
      date: '2026.03.01',
      category: 'お知らせ',
      title: 'MUTYアプリ正式リリース',
      content: 'セクシー女優の配信プラットフォーム「MUTY」が正式リリースされました。',
      detail: `MUTYアプリ正式リリースのお知らせ

この度、セクシー女優専門の配信プラットフォーム「MUTY」が正式リリースされました！

【MUTYの特徴】
• リアルタイム配信：お気に入りの女優さんとリアルタイムでコミュニケーション
• 予約配信機能：事前に配信予定をチェックして、見逃しを防止
• 投げ銭システム：女優さんを直接応援できる充実したアイテム
• 高画質配信：美しい映像で配信をお楽しみいただけます

【今後の展開】
今後も、ユーザーの皆様により楽しんでいただけるよう、新機能の追加やサービスの改善を続けてまいります。

MUTYで、新しいエンターテイメント体験をお楽しみください！`,
    },
  ];

  const newsItem = newsItems.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">通知が見つかりませんでした</p>
          <Link to="/news" className="text-primary hover:underline">
            通知一覧に戻る
          </Link>
        </div>
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
          <h1 className="text-xl font-bold">通知詳細</h1>
          <div className="w-10"></div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-secondary border border-border rounded-lg p-6">
          {/* カテゴリーと日付 */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-muted-foreground">{newsItem.date}</span>
            <span className="px-2 py-1 text-xs bg-gradient-primary rounded" style={{ color: '#FFFFFF' }}>
              {newsItem.category}
            </span>
          </div>

          {/* タイトル */}
          <h2 className="text-2xl font-bold mb-6">{newsItem.title}</h2>

          {/* 詳細内容 */}
          <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
            {newsItem.detail}
          </div>
        </div>

        {/* 戻るボタン */}
        <div className="mt-6">
          <Link
            to="/news"
            className="block w-full py-3 bg-gradient-primary text-center rounded-xl font-bold hover:opacity-90 transition-opacity"
            style={{ color: '#FFFFFF' }}
          >
            通知一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
