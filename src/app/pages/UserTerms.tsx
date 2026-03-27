import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function UserTerms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold">利用規約</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <div className="max-w-md mx-auto p-4">
        <div className="bg-secondary rounded-xl p-6 space-y-6">
          <section>
            <h2 className="text-lg font-bold mb-3">第1条（適用）</h2>
            <p className="text-sm text-muted-foreground">
              本規約は、本サービスの利用に関する条件を、本サービスを利用するすべてのユーザーと当社との間で定めるものです。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">第2条（利用登録）</h2>
            <p className="text-sm text-muted-foreground mb-2">
              本サービスの利用を希望する者は、本規約を遵守することに同意し、当社が定める一定の情報を当社に提供することにより、利用登録を申請することができます。
            </p>
            <p className="text-sm text-muted-foreground">
              当社は、当社の基準に従って、利用登録の可否を判断し、当社が利用登録を認める場合にはその旨を申請者に通知します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">第3条（禁止事項）</h2>
            <p className="text-sm text-muted-foreground mb-2">
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>反社会的勢力に対して直接または間接に利益を供与する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">第4条（本サービスの提供の停止等）</h2>
            <p className="text-sm text-muted-foreground">
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">第5条（利用制限および登録抹消）</h2>
            <p className="text-sm text-muted-foreground">
              当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">第6条（免責事項）</h2>
            <p className="text-sm text-muted-foreground">
              当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">第7条（サービス内容の変更等）</h2>
            <p className="text-sm text-muted-foreground">
              当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">第8条（利用規約の変更）</h2>
            <p className="text-sm text-muted-foreground">
              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}