// Call-to-action block for the invite page. Server-rendered on purpose: the
// copy of the invite link (and the Android fallback timer) must work even when
// the visitor taps before the page's JavaScript bundle has loaded (hydration),
// so both are done by a tiny inline script that runs while the HTML is parsed,
// not by React handlers.

// Capture-phase listener installed during parsing.
// - `data-copy-invite`: the synchronous execCommand copy runs inside the tap
//   (before navigation can cancel it); navigator.clipboard is tried as well.
// - `data-fallback-url`: in-app browsers that do not understand `intent:` stay
//   on the page; if it is still visible ~1.6 s later (no pagehide/blur/hidden),
//   go to the store URL instead.
// Navigation is never blocked.
const INVITE_SCRIPT = `(function(){
  if (window.__flowtrInviteCopy) return; window.__flowtrInviteCopy = true;
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[data-copy-invite],a[data-fallback-url]') : null;
    if (!a) return;
    var text = a.getAttribute('data-copy-invite');
    if (text) {
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
    }
    var fallback = a.getAttribute('data-fallback-url');
    if (fallback) {
      var left = false;
      var mark = function () { left = true; };
      var onVis = function () { if (document.visibilityState !== 'visible') left = true; };
      window.addEventListener('pagehide', mark);
      window.addEventListener('blur', mark);
      document.addEventListener('visibilitychange', onVis);
      setTimeout(function () {
        window.removeEventListener('pagehide', mark);
        window.removeEventListener('blur', mark);
        document.removeEventListener('visibilitychange', onVis);
        if (!left && document.visibilityState === 'visible') window.location.href = fallback;
      }, 1600);
    }
  }, true);
})();`;

const COPY_NOTE = "O convite fica copiado. Depois de instalar, a Flowtr abre no convite.";

type Props =
  | {
      platform: "android";
      intentUrl: string;
      playUrl: string;
      inviteUrl: string;
      acceptLabel?: string;
    }
  | {
      platform: "ios";
      appStoreUrl: string;
      appUrl: string;
      inviteUrl: string;
      openLabel?: string;
    }
  | {
      platform: "desktop";
      stores: { label: string; href: string }[];
    };

export function InviteActions(props: Props) {
  if (props.platform === "android") {
    return (
      <div className="mt-8 flex flex-col items-center">
        <script dangerouslySetInnerHTML={{ __html: INVITE_SCRIPT }} />
        <a
          className="btn btn-primary w-full sm:w-auto sm:min-w-80"
          href={props.intentUrl}
          data-copy-invite={props.inviteUrl}
          data-fallback-url={props.playUrl}
        >
          {props.acceptLabel ?? "Aceitar o convite"}
        </a>
        <p className="mt-3 text-sm leading-6 text-fg-muted">
          Abre a Flowtr. Se ainda não a tens, segue para o Google Play.
        </p>
        <p className="mt-2 text-sm leading-6 text-fg-muted">{COPY_NOTE}</p>
      </div>
    );
  }

  if (props.platform === "ios") {
    return (
      <div className="mt-8 flex flex-col items-center">
        <script dangerouslySetInnerHTML={{ __html: INVITE_SCRIPT }} />
        <a
          className="btn btn-primary w-full sm:w-auto sm:min-w-80"
          href={props.appStoreUrl}
          data-copy-invite={props.inviteUrl}
        >
          Descarregar na App Store
        </a>
        <a
          className="mt-3 text-sm leading-6 text-fg-muted underline underline-offset-4 hover:text-coral"
          href={props.appUrl}
        >
          {props.openLabel ?? "Já tens a Flowtr? Abrir o convite"}
        </a>
        <p className="mt-2 text-sm leading-6 text-fg-muted">{COPY_NOTE}</p>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
        {props.stores.map((s) => (
          <a key={s.href} className="btn btn-ghost" href={s.href}>
            {s.label}
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-fg-muted">Abre este link no telemóvel.</p>
    </div>
  );
}
