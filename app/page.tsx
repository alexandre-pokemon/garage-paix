import Image from "next/image";

const PHONE_PRIMARY = "01 43 24 36 27";
const PHONE_PRIMARY_RAW = "+33143243627";
const PHONE_MOBILE = "07 84 87 93 17";
const PHONE_MOBILE_RAW = "+33784879317";
const EMAIL = "garagedelapaix94@gmail.com";
const ADDRESS_LINE_1 = "99 bis rue de la Paix";
const ADDRESS_LINE_2 = "94170 Le Perreux-sur-Marne";

const LOGO_SRC = "/logo-garage-paix.jpg";

type IconProps = { className?: string };

function IconWrench({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z" />
    </svg>
  );
}
function IconDroplet({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5s-7 7.5-7 12a7 7 0 0 0 14 0c0-4.5-7-12-7-12z" />
    </svg>
  );
}
function IconTire({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  );
}
function IconBrake({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    </svg>
  );
}
function IconChip({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M3 10h3M3 14h3M18 10h3M18 14h3M10 3v3M14 3v3M10 18v3M14 18v3" />
    </svg>
  );
}
function IconSnow({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    </svg>
  );
}
function IconCar({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13l2-5a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 8l2 5v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z" />
      <circle cx="7.5" cy="14.5" r="1.2" />
      <circle cx="16.5" cy="14.5" r="1.2" />
    </svg>
  );
}
function IconShield({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function IconStar({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.3l-6.2 3.7 1.6-7.1L2 9.3l7.2-.6L12 2l2.8 6.7 7.2.6-5.4 4.6 1.6 7.1z" />
    </svg>
  );
}
function IconPhone({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function IconMail({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function IconPin({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-7.5 7-12a7 7 0 0 0-14 0c0 4.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function IconClock({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function IconCheck({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l4 4L19 6" />
    </svg>
  );
}

const services = [
  {
    Icon: IconDroplet,
    title: "Vidange & révision",
    desc: "Huile, filtres, pneus, freins. Contrôle complet selon le carnet d'entretien constructeur.",
  },
  {
    Icon: IconBrake,
    title: "Système de freinage",
    desc: "Plaquettes, disques, étriers, liquide de frein. Sécurité contrôlée, sécurité garantie.",
  },
  {
    Icon: IconTire,
    title: "Pneus & géométrie",
    desc: "Montage, équilibrage, parallélisme. Toutes marques, toutes saisons.",
  },
  {
    Icon: IconChip,
    title: "Diagnostic électronique",
    desc: "Lecture des codes défaut multi-marques. On trouve la panne avant de la réparer.",
  },
  {
    Icon: IconSnow,
    title: "Climatisation",
    desc: "Recharge gaz, désinfection, contrôle d'étanchéité. Pour rouler frais en été.",
  },
  {
    Icon: IconWrench,
    title: "Mécanique générale",
    desc: "Embrayage, distribution, suspension, échappement. On s'occupe de tout.",
  },
  {
    Icon: IconShield,
    title: "Pré-contrôle technique",
    desc: "On vérifie tout avant le passage au CT pour éviter la contre-visite.",
  },
  {
    Icon: IconCar,
    title: "Carrosserie légère",
    desc: "Petits chocs, rayures, retouches peinture. Pour redonner un coup de jeune à votre auto.",
  },
];

const testimonials = [
  {
    name: "Sophie M.",
    location: "Le Perreux",
    text: "Honnêtes, rapides, et le devis tient toujours. Je ne vais plus nulle part ailleurs depuis 4 ans.",
    rating: 5,
  },
  {
    name: "Karim B.",
    location: "Nogent-sur-Marne",
    text: "Un voyant moteur s'allume, ils diagnostiquent en 30 minutes et réparent le jour même. Top.",
    rating: 5,
  },
  {
    name: "Laurent D.",
    location: "Champigny",
    text: "Prix très corrects par rapport au concessionnaire, et qualité au rendez-vous. Recommandé.",
    rating: 5,
  },
];

const advantages = [
  "Devis clair et gratuit avant chaque intervention",
  "Toutes marques : françaises, allemandes, asiatiques",
  "Pièces d'origine ou équivalentes au choix",
  "Mécanicien diplômé, plus de 20 ans d'expérience",
  "Véhicule de prêt sur demande",
  "Paiement en plusieurs fois sans frais",
];

const mapEmbedSrc =
  "https://www.google.com/maps?q=99+bis+rue+de+la+Paix,+94170+Le+Perreux-sur-Marne&output=embed";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center font-black tracking-tight" aria-label="Garage de la Paix — Accueil">
            <span className="inline-flex items-center bg-white rounded-lg px-2.5 py-1 shadow-sm">
              <Image
                src={LOGO_SRC}
                alt="Garage de la Paix"
                width={1600}
                height={680}
                priority
                className="h-7 sm:h-8 w-auto"
              />
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#savoir-faire" className="hover:text-white transition">Savoir-faire</a>
            <a href="#about" className="hover:text-white transition">Le garage</a>
            <a href="#avis" className="hover:text-white transition">Avis</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a
            href={`tel:${PHONE_PRIMARY_RAW}`}
            className="inline-flex items-center gap-2 px-3 sm:px-4 h-10 rounded-lg bg-orange-500 hover:bg-orange-400 transition text-white font-semibold text-sm shadow-lg shadow-orange-500/20"
          >
            <IconPhone className="w-4 h-4" />
            <span className="hidden sm:inline">{PHONE_PRIMARY}</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1220]/80 to-[#0b1220]" />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs sm:text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/80">Ouvert aujourd'hui — 8h30 → 19h</span>
                <span className="hidden sm:inline text-white/30">·</span>
                <span className="hidden sm:inline text-white/60">Le Perreux-sur-Marne (94170)</span>
              </div>

              <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                Votre voiture mérite<br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  un garagiste de confiance.
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl text-balance">
                Entretien, réparation et diagnostic auto au Perreux-sur-Marne.
                Toutes marques, devis gratuit, travail soigné depuis plus de 20 ans.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={`tel:${PHONE_PRIMARY_RAW}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 transition rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-orange-500/30"
                >
                  <IconPhone className="w-5 h-5" />
                  Appeler le {PHONE_PRIMARY}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 glass border border-white/15 hover:border-orange-400/50 hover:bg-white/10 transition rounded-xl font-semibold text-base sm:text-lg"
                >
                  Demander un devis gratuit
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => <IconStar key={i} className="w-4 h-4" />)}
                  </div>
                  <span>4,9 / 5 sur Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-400" />
                  <span>Devis gratuit & sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-400" />
                  <span>Toutes marques</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 to-red-600/20 blur-2xl rounded-[2rem]" />
                <div className="relative rounded-3xl bg-white p-6 sm:p-10 shadow-2xl ring-1 ring-orange-500/20">
                  <Image
                    src={LOGO_SRC}
                    alt="Logo officiel — Garage de la Paix"
                    width={1600}
                    height={680}
                    priority
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BAR */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "20+", label: "années d'expérience" },
            { num: "4,9★", label: "avis clients" },
            { num: "48h", label: "délai moyen" },
            { num: "100%", label: "toutes marques" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-br from-orange-300 to-orange-500 bg-clip-text text-transparent">
                {s.num}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-white/60 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <div className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Nos prestations</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-balance">
            Tout pour garder votre voiture<br />en pleine forme.
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            De la simple vidange au diagnostic complexe — chez nous, c'est diagnostiqué, expliqué, et bien réparé.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group relative p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-orange-400/40 hover:bg-white/[0.07] transition overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-orange-500/0 group-hover:bg-orange-500/10 blur-2xl transition" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-400/30 grid place-items-center text-orange-300 mb-4 group-hover:scale-110 transition">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAVOIR-FAIRE / ENGINE GALLERY */}
      <section id="savoir-faire" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <div className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Notre savoir-faire</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-balance">
            Du moteur à la pièce,<br />on connaît chaque détail.
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Mécanicien certifié, plus de 20 ans d'expérience sur toutes marques.
            Diagnostic précis, réparation propre, devis clair.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80",
              title: "Diagnostic moteur",
              desc: "Analyse complète multi-marques avec valise constructeur.",
            },
            {
              src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
              title: "Réparation certifiée",
              desc: "Travail soigné, pièces de qualité, garantie atelier.",
            },
            {
              src: "https://images.unsplash.com/photo-1632823469650-89b1bb18065f?auto=format&fit=crop&w=900&q=80",
              title: "Atelier équipé",
              desc: "Pont élévateur, outillage pro, tout pour intervenir vite.",
            },
            {
              src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=900&q=80",
              title: "Mécanique de précision",
              desc: "Distribution, embrayage, injection — gestes maîtrisés.",
            },
            {
              src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
              title: "Toutes marques",
              desc: "Françaises, allemandes, asiatiques — on s'adapte à votre auto.",
            },
            {
              src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
              title: "Devis transparent",
              desc: "Détaillé, expliqué, sans surprise. Le tarif annoncé est le tarif facturé.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-orange-400/40 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition duration-500"
                  style={{ backgroundImage: `url('${item.src}')` }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full glass border border-white/15 text-[11px] mb-2">
                  <IconShield className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-white/80 uppercase tracking-widest font-semibold">Certifié</span>
                </div>
                <div className="text-lg font-bold">{item.title}</div>
                <div className="text-sm text-white/70 mt-1">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / WHY US */}
      <section id="about" className="relative border-y border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-blue-600/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] shine">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1632823469650-89b1bb18065f?auto=format&fit=crop&w=900&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/15 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Mécanicien certifié
                </div>
                <div className="mt-3 text-2xl font-black">Un atelier à taille humaine.</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Pourquoi nous choisir</div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-balance">
              Le savoir-faire d'un pro,<br />la simplicité d'un voisin.
            </h2>
            <p className="mt-5 text-white/70 text-lg">
              Au Perreux-sur-Marne depuis plus de deux décennies, on connaît les voitures
              et on connaît nos clients. Pas de surprise sur la facture, pas de jargon technique
              incompréhensible — juste un travail bien fait, expliqué clairement.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-orange-500/20 grid place-items-center shrink-0">
                    <IconCheck className="w-4 h-4 text-orange-300" />
                  </div>
                  <span className="text-sm text-white/80">{a}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_PRIMARY_RAW}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-400 transition rounded-xl font-semibold text-sm shadow-lg shadow-orange-500/20"
              >
                <IconPhone className="w-4 h-4" /> Prendre rendez-vous
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-5 py-3 glass border border-white/15 hover:border-white/30 transition rounded-xl font-semibold text-sm"
              >
                <IconMail className="w-4 h-4" /> Nous écrire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="avis" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <div className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Ils nous font confiance</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-balance">
            Des clients heureux,<br />des voitures qui roulent.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-orange-400/30 transition"
            >
              <div className="flex text-orange-400 mb-4">
                {[...Array(t.rating)].map((_, i) => <IconStar key={i} />)}
              </div>
              <p className="text-white/80 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 grid place-items-center font-black text-white">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-white/50">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <div className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Nous trouver</div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-balance">
              Au cœur du Perreux,<br />à 5 min de Nogent et Champigny.
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <a
                href={`tel:${PHONE_PRIMARY_RAW}`}
                className="block p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-orange-400/50 hover:bg-white/[0.07] transition"
              >
                <div className="flex items-center gap-3 text-orange-400 mb-2">
                  <IconPhone className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Téléphone fixe</span>
                </div>
                <div className="text-2xl font-bold">{PHONE_PRIMARY}</div>
              </a>

              <a
                href={`tel:${PHONE_MOBILE_RAW}`}
                className="block p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-orange-400/50 hover:bg-white/[0.07] transition"
              >
                <div className="flex items-center gap-3 text-orange-400 mb-2">
                  <IconPhone className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Mobile</span>
                </div>
                <div className="text-2xl font-bold">{PHONE_MOBILE}</div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="block p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-orange-400/50 hover:bg-white/[0.07] transition"
              >
                <div className="flex items-center gap-3 text-orange-400 mb-2">
                  <IconMail className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Email</span>
                </div>
                <div className="text-base sm:text-lg font-semibold break-all">{EMAIL}</div>
              </a>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-3 text-orange-400 mb-2">
                  <IconPin className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Adresse</span>
                </div>
                <div className="text-lg font-semibold">{ADDRESS_LINE_1}</div>
                <div className="text-white/70">{ADDRESS_LINE_2}</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-3 text-orange-400 mb-3">
                  <IconClock className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Horaires</span>
                </div>
                <ul className="text-sm space-y-1.5">
                  <li className="flex justify-between"><span className="text-white/60">Lundi — Vendredi</span><span className="font-semibold">8h30 — 19h00</span></li>
                  <li className="flex justify-between"><span className="text-white/60">Samedi</span><span className="font-semibold">9h00 — 17h00</span></li>
                  <li className="flex justify-between"><span className="text-white/60">Dimanche</span><span className="text-white/40">Fermé</span></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] min-h-[400px] lg:min-h-0">
              <iframe
                title="Plan du Garage de la Paix"
                src={mapEmbedSrc}
                className="w-full h-full min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-400/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xl sm:text-2xl font-black">Une panne, un voyant, un bruit suspect ?</div>
              <div className="text-white/70 mt-1">Appelez-nous. On diagnostique gratuitement.</div>
            </div>
            <a
              href={`tel:${PHONE_PRIMARY_RAW}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 transition rounded-xl font-bold shadow-lg shadow-orange-500/20 whitespace-nowrap"
            >
              <IconPhone className="w-4 h-4" /> {PHONE_PRIMARY}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-6 items-start">
          <div>
            <div className="flex items-center gap-2 font-black">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 grid place-items-center">
                <IconWrench className="w-4 h-4" />
              </span>
              Garage de <span className="text-orange-400">la Paix</span>
            </div>
            <p className="mt-3 text-sm text-white/50 max-w-xs">
              Garage automobile indépendant au Perreux-sur-Marne. Entretien, réparation, diagnostic toutes marques.
            </p>
          </div>
          <div className="text-sm text-white/60 space-y-2">
            <div className="text-white/40 uppercase tracking-widest text-xs font-semibold">Zones desservies</div>
            <div>Le Perreux-sur-Marne · Nogent-sur-Marne · Champigny-sur-Marne · Joinville-le-Pont · Vincennes</div>
          </div>
          <div className="text-sm text-white/60 space-y-1">
            <div className="text-white/40 uppercase tracking-widest text-xs font-semibold mb-2">Contact</div>
            <a href={`tel:${PHONE_PRIMARY_RAW}`} className="block hover:text-white transition">{PHONE_PRIMARY}</a>
            <a href={`mailto:${EMAIL}`} className="block hover:text-white transition">{EMAIL}</a>
            <div className="text-white/50">{ADDRESS_LINE_1}, {ADDRESS_LINE_2}</div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Garage de la Paix — Tous droits réservés.</div>
          <div>Site démo réalisé avec soin 🔧</div>
        </div>
      </footer>
    </main>
  );
}
