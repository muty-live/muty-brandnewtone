import { Link } from 'react-router';
import { Home, User, Users, Video, Gift, Settings, LogOut, Trash2, FileText, Phone, Newspaper, Info, UserPlus } from 'lucide-react';

export function Sitemap() {
  const sections = [
    {
      title: 'メインページ',
      icon: <Home className="w-5 h-5" />,
      links: [
        { path: '/', label: 'トップページ', description: '配信中・配信予定の一覧' },
        { path: '/concept', label: 'コンセプト', description: 'MUTYのコンセプト紹介' },
        { path: '/actress', label: '女優一覧', description: '出演女優のプロフィール一覧' },
        { path: '/news', label: 'お知らせ', description: '最新のお知らせ・ニュース' },
      ]
    },
    {
      title: 'ライブ配信',
      icon: <Video className="w-5 h-5" />,
      links: [
        { path: '/live/:id', label: 'ライブ視聴', description: 'ライブ配信視聴ページ（動的）' },
        { path: '/live-ended/:id', label: '配信終了', description: '配信終了後のページ（動的）' },
      ]
    },
    {
      title: '女優プロフィール',
      icon: <Users className="w-5 h-5" />,
      links: [
        { path: '/profile/:id', label: '女優プロフィール', description: 'タイムライン・投稿・配信情報（動的）' },
      ]
    },
    {
      title: 'ギフト・応援',
      icon: <Gift className="w-5 h-5" />,
      links: [
        { path: '/gift/:streamId/:giftId', label: 'ギフト送信', description: 'ギフトを送るページ（動的）' },
      ]
    },
    {
      title: '認証',
      icon: <User className="w-5 h-5" />,
      links: [
        { path: '/login', label: 'ログイン', description: 'ログインページ' },
        { path: '/register', label: '新規登録', description: 'ユーザー登録ページ' },
        { path: '/performer/register', label: '女優登録', description: '女優として登録' },
      ]
    },
    {
      title: 'ユーザー設定',
      icon: <Settings className="w-5 h-5" />,
      links: [
        { path: '/user/settings', label: 'アカウント設定', description: 'プロフィール・設定変更' },
        { path: '/user/logout', label: 'ログアウト', description: 'ログアウト確認' },
        { path: '/user/delete', label: 'アカウント削除', description: 'アカウント削除確認' },
        { path: '/user/terms', label: '利用規約', description: '利用規約の確認' },
      ]
    },
    {
      title: 'サポート',
      icon: <Phone className="w-5 h-5" />,
      links: [
        { path: '/contact', label: 'お問い合わせ', description: 'サポートへのお問い合わせ' },
      ]
    },
  ];

  return (
    <div className="min-h-screen" style={{ color: 'white' }}>
      {/* ヘッダー */}
      <header className="p-4 border-b border-border sticky top-0 z-10" style={{ backgroundColor: '#221F1F' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8" style={{ color: '#E6AEE4' }} />
            <h1 style={{ margin: 0 }}>サイトマップ</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            MUTYの全ページへのリンク一覧です
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto p-4 pb-24">
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <section key={idx} className="bg-secondary rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                  {section.icon}
                </div>
                <h2 style={{ margin: 0 }}>{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    to={link.path.includes(':') ? '#' : link.path}
                    className={`block p-4 rounded-lg hover:bg-muted transition-colors ${
                      link.path.includes(':') ? 'opacity-75 cursor-default' : ''
                    }`}
                    style={{ backgroundColor: '#221F1F', textDecoration: 'none', color: 'white' }}
                    onClick={(e) => link.path.includes(':') && e.preventDefault()}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 style={{ margin: 0, marginBottom: '0.25rem', color: '#E6AEE4' }}>
                          {link.label}
                        </h3>
                        <p className="text-sm text-muted-foreground" style={{ marginBottom: '0.5rem' }}>
                          {link.description}
                        </p>
                        <code className="text-xs bg-muted px-2 py-1 rounded inline-block">
                          {link.path}
                        </code>
                      </div>
                      {!link.path.includes(':') && (
                        <div style={{ color: '#E6AEE4', fontSize: '1.25rem' }}>→</div>
                      )}
                      {link.path.includes(':') && (
                        <div className="text-muted-foreground text-xs">動的</div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* 注意事項 */}
        <div className="mt-8 p-6 bg-muted rounded-xl">
          <h3 className="flex items-center gap-2" style={{ margin: 0, marginBottom: '0.75rem' }}>
            <Info className="w-5 h-5" style={{ color: '#E6AEE4' }} />
            注意事項
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>• 「動的」と表示されているページは、IDパラメータが必要なため直接アクセスできません</li>
            <li>• 実際のページへは、トップページや各一覧ページからアクセスしてください</li>
            <li>• 一部の機能はログインが必要です</li>
          </ul>
        </div>

        {/* トップに戻るボタン */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-xl hover:opacity-90 transition-opacity"
            style={{ textDecoration: 'none', fontWeight: 'bold' }}
          >
            <Home className="w-5 h-5" />
            トップページに戻る
          </Link>
        </div>
      </main>
    </div>
  );
}