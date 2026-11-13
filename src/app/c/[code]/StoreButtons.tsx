// Store buttons for the challenge invite page. Server-rendered on purpose:
// the iOS copy of the invite link must work even when the visitor taps before
// the page's JavaScript bundle has loaded (hydration), so it is done by a tiny
// inline script that runs while the HTML is parsed, not by a React handler.

type StoreButton = {
  label: string;
  href: string;
  // iOS has no install referrer: the invite URL is put on the clipboard on tap
  // so the app can pick it up after installing.
  copyInvite: boolean;
};

// Capture-phase listener installed during parsing. The synchronous
// execCommand copy runs inside the tap (before navigation can cancel it);
// navigator.clipboard is tried as well. Navigation is never blocked.
const COPY_SCRIPT = `(function(){
  if (window.__flowtrInviteCopy) return; window.__flowtrInviteCopy = true;
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[data-copy-invite]') : null;
    if (!a) return;
    var text = a.getAttribute('data-copy-invite');
    if (!text) return;
    try {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.top = '0'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.focus(); ta.select();
      ta.setSelectionRange(0, text.length);
      document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (_) {}
    try { if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function(){}); } catch (_) {}
  }, true);
})();`;

export function StoreButtons({
  stores,
  inviteUrl,
}: {
  stores: StoreButton[];
  inviteUrl: string;
}) {
  const hasCopy = stores.some((s) => s.copyInvite);
  return (
    <>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-center">
        {stores.map((s) => (
          <a
            key={s.href}
            className="btn btn-ghost"
            href={s.href}
            data-copy-invite={s.copyInvite ? inviteUrl : undefined}
          >
            {s.label}
          </a>
        ))}
      </div>
      {hasCopy ? (
        <>
          <script dangerouslySetInnerHTML={{ __html: COPY_SCRIPT }} />
          <p className="mt-4 text-sm leading-6 text-fg-muted">
            O convite fica copiado. Depois de instalar, a Flowtr abre
            diretamente no convite.
          </p>
        </>
      ) : null}
    </>
  );
}
