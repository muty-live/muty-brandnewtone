import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Upload } from 'lucide-react';

export function PerformerRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showBankModal, setShowBankModal] = useState(false);
  const [formData, setFormData] = useState({
    stageName: '',
    bio: '',
    category: '',
    bankName: '',
    branchName: '',
    accountType: '普通',
    accountNumber: '',
    accountHolder: '',
  });

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      setShowBankModal(true);
    }
  };

  const handleBankSubmit = () => {
    setShowBankModal(false);
    // 登録完了処理
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b border-border">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold">配信者登録</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <div className="flex-1 max-w-md mx-auto w-full p-4">
        {/* ステップインジケーター */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-gradient-primary text-primary-foreground' : 'bg-secondary'}`}>
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-gradient-primary' : 'bg-secondary'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-gradient-primary text-primary-foreground' : 'bg-secondary'}`}>
              2
            </div>
          </div>
        </div>

        {step === 1 ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">基本情報</h2>

            <div>
              <label className="block text-sm mb-2">プロフィール画像</label>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                </div>
                <button className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                  画像を選択
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="stageName" className="block text-sm mb-2">
                配信者名 *
              </label>
              <input
                id="stageName"
                type="text"
                value={formData.stageName}
                onChange={(e) => setFormData({ ...formData, stageName: e.target.value })}
                className="w-full px-4 py-3 bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="配信者名を入力"
                required
              />
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm mb-2">
                自己紹介 *
              </label>
              <textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full px-4 py-3 bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="自己紹介を入力"
                rows={4}
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm mb-2">
                カテゴリー *
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              >
                <option value="">選択してください</option>
                <option value="music">音楽</option>
                <option value="dance">ダンス</option>
                <option value="talk">トーク</option>
                <option value="game">ゲーム</option>
                <option value="other">その他</option>
              </select>
            </div>

            <button
              onClick={handleNext}
              disabled={!formData.stageName || !formData.bio || !formData.category}
              className="w-full py-4 bg-gradient-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              次へ
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">本人確認</h2>
            <p className="text-sm text-muted-foreground">
              収益を受け取るために本人確認が必要です
            </p>

            <div>
              <label className="block text-sm mb-2">身分証明書</label>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  運転免許証、パスポート、マイナンバーカードなど
                </p>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  ファイルを選択
                </button>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-4">
              <h3 className="font-bold mb-2">提出書類について</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 有効期限内のもの</li>
                <li>• 鮮明に撮影されたもの</li>
                <li>• 氏名、生年月日が確認できるもの</li>
              </ul>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-4 bg-gradient-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              登録を完了
            </button>
          </div>
        )}
      </div>

      {/* 口座登録ポップアップ */}
      {showBankModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">振込先口座の登録</h3>
            <p className="text-sm text-muted-foreground mb-6">
              収益の振込先となる口座情報を入力してください
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="bankName" className="block text-sm mb-2">
                  銀行名 *
                </label>
                <input
                  id="bankName"
                  type="text"
                  value={formData.bankName}
                  onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="例：三井住友銀行"
                  required
                />
              </div>

              <div>
                <label htmlFor="branchName" className="block text-sm mb-2">
                  支店名 *
                </label>
                <input
                  id="branchName"
                  type="text"
                  value={formData.branchName}
                  onChange={(e) => setFormData({ ...formData, branchName: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="例：渋谷支店"
                  required
                />
              </div>

              <div>
                <label htmlFor="accountType" className="block text-sm mb-2">
                  口座種別 *
                </label>
                <select
                  id="accountType"
                  value={formData.accountType}
                  onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                >
                  <option value="普通">普通</option>
                  <option value="当座">当座</option>
                </select>
              </div>

              <div>
                <label htmlFor="accountNumber" className="block text-sm mb-2">
                  口座番号 *
                </label>
                <input
                  id="accountNumber"
                  type="text"
                  value={formData.accountNumber}
                  onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="7桁の数字"
                  maxLength={7}
                  required
                />
              </div>

              <div>
                <label htmlFor="accountHolder" className="block text-sm mb-2">
                  口座名義（カナ） *
                </label>
                <input
                  id="accountHolder"
                  type="text"
                  value={formData.accountHolder}
                  onChange={(e) => setFormData({ ...formData, accountHolder: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="例：ヤマダタロウ"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowBankModal(false)}
                  className="flex-1 px-4 py-3 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
                >
                  後で登録
                </button>
                <button
                  onClick={handleBankSubmit}
                  disabled={!formData.bankName || !formData.branchName || !formData.accountNumber || !formData.accountHolder}
                  className="flex-1 px-4 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  登録完了
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}