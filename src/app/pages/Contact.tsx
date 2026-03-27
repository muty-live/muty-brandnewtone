import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信のロジック（実際のAPIコールはここに実装）
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // 3秒後にフォームをリセット
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pb-20">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">お問い合わせ</h1>
          <div className="w-10"></div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="max-w-md mx-auto px-4 py-8">
        {submitted ? (
          <div className="bg-secondary border border-border rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">送信完了</h2>
            <p className="text-muted-foreground">
              お問い合わせありがとうございます。<br />
              内容を確認の上、ご連絡させていただきます。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* お名前 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="example@email.com"
              />
            </div>

            {/* お問い合わせ種別 */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">選択してください</option>
                <option value="general">一般的なお問い合わせ</option>
                <option value="technical">技術的な問題</option>
                <option value="payment">お支払いについて</option>
                <option value="performer">女優登録について</option>
                <option value="account">アカウントについて</option>
                <option value="other">その他</option>
              </select>
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            {/* 注意事項 */}
            <div className="bg-secondary border border-border rounded-lg p-4">
              <h3 className="text-sm font-medium mb-2">ご注意</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• お問い合わせ内容によっては、回答までに数日かかる場合がございます。</li>
                <li>• 土日祝日のお問い合わせは、翌営業日以降の対応となります。</li>
                <li>• 迷惑メール対策等で、メールが届かない場合がございます。</li>
              </ul>
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-primary text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              送信する
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
