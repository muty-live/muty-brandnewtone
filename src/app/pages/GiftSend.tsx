import { useParams, useNavigate } from 'react-router';
import { mockGifts, mockLiveStreams } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, Coins } from 'lucide-react';
import { useState } from 'react';

export function GiftSend() {
  const { streamId, giftId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const gift = mockGifts.find((g) => g.id === giftId);
  const stream = mockLiveStreams.find((s) => s.id === streamId);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const [showInsufficientPopup, setShowInsufficientPopup] = useState(false);

  if (!gift || !stream || !user) {
    return null;
  }

  const totalPrice = gift.price * quantity;
  const canAfford = user.coins >= totalPrice;

  const handleSend = () => {
    if (canAfford) {
      // ギフト送信処理
      navigate(`/live/${streamId}`);
    } else {
      setShowInsufficientPopup(true);
    }
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
          <h1 className="font-bold">ギフトを贈る</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <div className="flex-1 max-w-md mx-auto w-full p-4">
        <div className="bg-secondary rounded-xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={stream.performer.avatar}
              alt={stream.performer.name}
              className="w-16 h-16 rounded-full border-2 border-primary object-cover"
            />
            <div className="flex-1">
              <h2 className="font-bold text-lg">{stream.performer.name}</h2>
              <p className="text-sm text-muted-foreground">{stream.title}</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-xl p-6 mb-6">
          <div className="flex flex-col items-center mb-6">
            <span className="text-8xl mb-4">{gift.icon}</span>
            <h3 className="text-2xl font-bold mb-2">{gift.name}</h3>
            {gift.description && (
              <p className="text-sm text-white/80 mb-3">{gift.description}</p>
            )}
            
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2">数量</label>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 bg-muted rounded-full font-bold text-xl hover:bg-muted/80 transition-colors"
              >
                -
              </button>
              <span className="text-3xl font-bold w-16 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full font-bold text-xl hover:opacity-90 transition-opacity"
              >
                +
              </button>
            </div>
          </div>

          <div className="mb-6">
            
            
          </div>

          <div className="border-t border-border pt-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">合計金額</span>
              <span className="text-2xl font-bold text-primary">{totalPrice.toLocaleString()}コイン</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <Coins className="w-4 h-4 text-primary" />
                <span>保有コイン</span>
              </div>
              <span className={canAfford ? 'text-foreground' : 'text-red-500'}>
                {user.coins.toLocaleString()}コイン
              </span>
            </div>
          </div>

          <button
            onClick={handleSend}
            className="w-full py-4 bg-gradient-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            ギフトを送る
          </button>
        </div>

        {showInsufficientPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-secondary p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">コインが不足しています</h2>
              <p className="text-sm text-muted-foreground mb-4">
                ギフトを送信するには、必要なコイン数をチャージしてください。
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowInsufficientPopup(false)}
                  className="text-primary hover:underline"
                >
                  閉じる
                </button>
                <button
                  onClick={() => navigate('/charge')}
                  className="ml-4 text-primary hover:underline"
                >
                  コインをチャージする
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}