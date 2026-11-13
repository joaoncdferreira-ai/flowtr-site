"use client";

type StoreButton = {
  label: string;
  href: string;
  // iOS has no install referrer: the invite URL is put on the clipboard on tap
  // so the app can pick it up after installing.
  copyInvite: boolean;
};

async function copyToClipboard(text: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
  } catch {
    // fall through to the legacy path
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, text.length);
    document.execCommand("copy");
    document.body.removeChild(ta);
  } catch {
    // never block navigation
  }
}

export function StoreButtons({
  stores,
  inviteUrl,
}: {
  stores: StoreButton[];
  inviteUrl: string;
}) {
  const hasCopy = stores.some((s) => s.copyInvite);

  function onClick(s: StoreButton) {
    if (!s.copyInvite) return;
    // Start the copy synchronously inside the user gesture, then let the
    // default navigation proceed regardless of the outcome.
    void copyToClipboard(inviteUrl);
  }

  return (
    <>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-center">
        {stores.map((s) => (
          <a
            key={s.href}
            className="btn btn-ghost"
            href={s.href}
            onClick={() => onClick(s)}
          >
            {s.label}
          </a>
        ))}
      </div>
      {hasCopy ? (
        <p className="mt-4 text-sm leading-6 text-fg-muted">
          O convite fica copiado. Depois de instalar, abre a Flowtr e entras
          direto no desafio.
        </p>
      ) : null}
    </>
  );
}
