"use client";

import { useEffect, useState } from "react";

const TARGET_EMAIL = "garagedelapaix94@gmail.com";

type Props = {
  triggerClassName?: string;
  triggerLabel?: string;
};

export function QuoteFormButton({
  triggerClassName,
  triggerLabel = "Demander un devis",
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          triggerClassName ??
          "inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 transition rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-orange-500/30"
        }
      >
        {triggerLabel}
      </button>
      {open && <QuoteModal onClose={() => setOpen(false)} />}
    </>
  );
}

export function StickyQuoteButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Demander un devis"
        className="fixed z-40 bottom-5 right-5 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 transition text-white font-bold text-sm sm:text-base shadow-2xl shadow-orange-500/40 ring-2 ring-orange-400/30"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
        <span>Devis / RDV</span>
      </button>
      {open && <QuoteModal onClose={() => setOpen(false)} />}
    </>
  );
}

function QuoteModal({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nom = String(fd.get("nom") ?? "").trim();
    const tel = String(fd.get("tel") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const prestation = String(fd.get("prestation") ?? "").trim();
    const date = String(fd.get("date") ?? "").trim();
    const creneau = String(fd.get("creneau") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const subject = `Demande de devis — ${prestation || "Prestation"} — ${nom}`;
    const bodyLines = [
      `Nom : ${nom}`,
      `Téléphone : ${tel}`,
      email ? `Email : ${email}` : null,
      `Prestation : ${prestation}`,
      date ? `Date souhaitée : ${date}` : null,
      creneau ? `Créneau : ${creneau}` : null,
      "",
      "Message :",
      message || "(aucun)",
      "",
      "—",
      "Demande envoyée via le site du Garage de la Paix.",
    ].filter(Boolean);

    const mailto = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-form-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-lg max-h-[95vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[#0b1220] border border-white/10 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {sent ? (
          <div className="p-8 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 grid place-items-center mb-4">
              <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l4 4L19 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-2">Merci !</h3>
            <p className="text-white/70">
              Votre application email s&apos;est ouverte avec votre demande pré-remplie.
              Une fois envoyée, le garage vous recontactera sous 24h.
            </p>
            <button
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 transition font-semibold"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-2">
              Devis & rendez-vous
            </div>
            <h3 id="quote-form-title" className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              On vous rappelle sous 24h.
            </h3>
            <p className="text-white/60 text-sm mb-6">
              Devis gratuit et sans engagement. Tous les champs marqués * sont obligatoires.
            </p>

            <div className="space-y-4">
              <Field label="Nom et prénom *" name="nom" type="text" required autoComplete="name" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Téléphone *" name="tel" type="tel" required autoComplete="tel" pattern="[0-9 +.()-]{8,}" />
                <Field label="Email" name="email" type="email" autoComplete="email" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/80 mb-1.5">
                  Type de prestation *
                </label>
                <select
                  name="prestation"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-orange-400/60 focus:bg-white/[0.07] focus:outline-none transition text-white"
                >
                  <option value="" disabled>Choisir une prestation…</option>
                  <option value="Vidange">Vidange</option>
                  <option value="Pneus">Pneus</option>
                  <option value="Révision">Révision</option>
                  <option value="Freinage">Freinage</option>
                  <option value="Diagnostic">Diagnostic</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Date souhaitée" name="date" type="date" />
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-1.5">
                    Créneau préféré
                  </label>
                  <select
                    name="creneau"
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-orange-400/60 focus:bg-white/[0.07] focus:outline-none transition text-white"
                  >
                    <option value="">Indifférent</option>
                    <option value="Matin">Matin</option>
                    <option value="Après-midi">Après-midi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/80 mb-1.5">
                  Message / description du problème
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Ex. : voyant moteur allumé depuis hier, bruit au freinage…"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-orange-400/60 focus:bg-white/[0.07] focus:outline-none transition text-white placeholder-white/30 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 transition rounded-xl font-bold text-base shadow-xl shadow-orange-500/30"
            >
              Envoyer ma demande
            </button>
            <p className="mt-3 text-xs text-white/40 text-center">
              Vos données sont uniquement utilisées pour traiter votre demande.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
  pattern,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  pattern?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-white/80 mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        pattern={pattern}
        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-orange-400/60 focus:bg-white/[0.07] focus:outline-none transition text-white placeholder-white/30"
      />
    </div>
  );
}
