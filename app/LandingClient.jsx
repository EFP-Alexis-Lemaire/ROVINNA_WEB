"use client";

import { useState } from "react";

// 👉 Quand tes apps seront en ligne, remplace juste ces 2 URLs :
const APP_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";

// Icônes trait fin bordeaux, esprit app (sobre, pas d'emoji)
const ICONS = {
  cap: (<><path d="M22 9 12 4 2 9l10 5 10-5z" /><path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" /><path d="M22 9v5" /></>),
  glass: (<><path d="M7 3h10v5a5 5 0 0 1-10 0V3z" /><path d="M12 13v7" /><path d="M8.5 21h7" /></>),
  star: (<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.4 2.8 1-6.1L3.2 9.5l6.1-.9L12 3z" />),
  book: (<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z" /><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" /></>),
  chat: (<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />),
  users: (<><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M15.5 3.1a4 4 0 0 1 0 7.8" /></>),
  pin: (<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>),
  home: (<><path d="M3 11l9-8 9 8" /><path d="M5 10v10h5v-6h4v6h5V10" /></>),
  user: (<><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1" /></>),
  check: (<path d="M20 6 9 17l-5-5" />),
  arrow: (<><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>),
  download: (<><path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 21h16" /></>),
  play: (<path d="M8 5v14l11-7z" />),
  camera: (<><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="13" r="3.5" /><path d="M8.5 7 10 4h4l1.5 3" /></>),  search: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>),
  gift: (<><rect x="4" y="8" width="16" height="4" /><path d="M6 12v8h12v-8" /><path d="M12 8v12" /><path d="M12 8S8 8 6.6 6.7C5.7 5.9 6.4 4.5 7.6 4.7 9.2 5 12 8 12 8zm0 0s4 0 5.4-1.3c.9-.8.2-2.2-1-2-1.6.3-4.4 3.3-4.4 3.3z" /></>),
};

function Icon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

// Vrais logos des stores (tracés officiels Simple Icons, affichés en blanc sur fond sombre)
const APPLE_D = "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701";
const PLAY_D = "M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z";

function BrandIcon({ d, size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const FEATURES = [
  {
    n: "2 · Mémoriser",
    icon: "book",
    title: "Mémorise efficacement",
    text: "Des fiches intelligentes et des sessions adaptées à ton niveau. Une mémoire qui dure.",
    dark: false,
  },
  {
    n: "3 · Sommelier IA",
    icon: "chat",
    title: "Ton sommelier personnel",
    text: "Choisis ton vin selon ton plat, analyse une bouteille en photo, accords mets-vins instantanés.",
    dark: true,
  },
  {
    n: "4 · Communauté",
    icon: "users",
    title: "Partage ta passion du vin",
    text: "Échange avec d'autres passionnés, découvre de nouvelles bouteilles et inspire-toi.",
    dark: false,
  },
  {
    n: "5 · Déguster",
    icon: "glass",
    title: "Déguste comme un pro",
    text: "Dégustation guidée pas à pas : œil, nez, bouche, finale. Reconnais arômes et saveurs.",
    dark: false,
  },
];

const STEPS = [
  { id: "oeil", label: "👁️ Œil", title: "Observe la robe", text: "Verse au tiers, incline sur fond blanc. Couleur intense ou pâle ? Reflets ?" },
  { id: "nez", label: "👃 Nez", title: "Hume les arômes", text: "Premier nez sans agiter, puis second nez après agitation. Fruits, fleurs, épices ?" },
  { id: "agitation", label: "🌀 Agitation", title: "Oxygène le vin", text: "Fais tourner doucement pour libérer les arômes. Que perçois-tu en plus ?" },
  { id: "bouche", label: "👄 Bouche", title: "Goûte et structure", text: "Petite gorgée, fais circuler. Attaque, acidité, tanins, longueur ?" },
  { id: "finale", label: "⭐ Finale", title: "Conclus et note", text: "Note /5, température de service, accord idéal. Goutte te donne un retour immédiat." },
];

export default function LandingClient() {
  const [stepIdx, setStepIdx] = useState(0);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({ name: "", email: "", sujet: "Offre marketing / Partenariat", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3200);
  };

  const handleStoreClick = (e, store) => {
    if (store === "#") {
      e.preventDefault();
      showToast("App bientôt disponible sur les stores — laisse ton email ci-dessous.");
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const submitContact = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Envoi impossible");
      setStatus({ type: "ok", msg: "Merci ! Ton message a bien été envoyé. On te répond très vite." });
      setForm({ name: "", email: "", sujet: "Offre marketing / Partenariat", message: "" });
    } catch (err) {
      setStatus({ type: "err", msg: err.message });
    } finally {
      setLoading(false);
    }
  };

  const step = STEPS[stepIdx];

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <div className="logo">
            <div className="logo-drop"><img src="/goutte.svg" alt="Goutte, mascotte ROVINNA" /></div>
            <div>ROVINNA<small>rovinna.be</small></div>
          </div>
          <div className="nav-links">
            <a href="#apprendre">Apprendre</a>
            <a href="#features">Fonctionnalités</a>
            <a href="#degustation">Dégustation</a>
            <a href="#sommelier">Sommelier IA</a>
            <a href="#telecharger">Télécharger</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="btn btn-wine btn-sm" href="#telecharger">Télécharger l’app</a>
        </div>
      </nav>

      <header className="hero" id="apprendre">
        <div className="container hero-grid">
          <div>
            <span className="badge">1 · Apprendre — le cœur de l’app</span>
            <h1>Apprends le vin <em>pas à pas</em></h1>
            <p className="lead">
              Des parcours interactifs pour découvrir les régions, les cépages et les styles,
              à ton rythme. Leçons, dégustations guidées, examens : progresse et gagne des étoiles.
            </p>
            <div className="store-row">
              <a href={APP_STORE_URL} onClick={(e) => handleStoreClick(e, APP_STORE_URL)} className="store-btn">
                <span style={{ opacity: .95 }}><BrandIcon d={APPLE_D} size={26} /></span>
                <span><small>Télécharger sur</small><strong>App Store</strong></span>
                <span className="soon">Bientôt</span>
              </a>
              <a href={GOOGLE_PLAY_URL} onClick={(e) => handleStoreClick(e, GOOGLE_PLAY_URL)} className="store-btn">
                <span style={{ opacity: .95 }}><BrandIcon d={PLAY_D} size={24} /></span>
                <span><small>Disponible sur</small><strong>Google Play</strong></span>
                <span className="soon">Bientôt</span>
              </a>
            </div>
            <div className="trust">
              <span><Icon name="cap" size={15} /> <b>Cours interactifs</b></span>
              <span><Icon name="glass" size={15} /> <b>Dégustations guidées</b></span>
              <span><Icon name="star" size={15} /> <b>Examens & étoiles</b></span>
            </div>
          </div>

          <div className="phone-wrap">
            <div className="speech">Découvre le monde du vin, de manière simple et ludique.</div>
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="acct-top">
                  <div className="acct-avatar"><img src="/goutte.svg" alt="Goutte" style={{ width: 26, height: 32, objectFit: "contain" }} /></div>
                  <div><small>Bonjour</small><b>@vieuxlamas</b></div>
                  <div className="acct-xp"><Icon name="search" size={16} /> <img src="/goutte.svg" alt="Goutte" className="goutte-inline" /> 0</div>
                </div>
                <div className="xp-row"><span>Amateur</span><span>681 XP</span></div>
                <div className="xp-track"><i /></div>
                <div className="lesson-banner">
                  <span style={{ fontSize: 26 }}>🎃</span>
                  <span>Cahors, le vin noir ensorcelé</span>
                  <span className="ok">✓</span><span style={{ color: "var(--wine)" }}>›</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
                  <small style={{ fontWeight: 800, letterSpacing: ".06em", color: "var(--muted)" }}>TON PARCOURS</small>
                  <small style={{ fontWeight: 800, color: "var(--wine)" }}>Changer →</small>
                </div>
                <div className="parcours">
                  <h4>🇫🇷 Bourgogne</h4>
                  <small>Le terroir à la française</small>
                  <div className="dots">
                    <span className="dot done">✓</span><span className="dots-line" />
                    <span className="dot next">2</span><span className="dots-line" />
                    <span className="dot todo">3</span>
                  </div>
                  <div className="dot-labels"><span>Leçon</span><span>Déguster*</span><span>Examen</span></div>
                  <div className="parcours-note"><b>Leçon terminée</b>L’examen valide le parcours et donne tes étoiles.</div>
                  <div className="cta-mini">Passer l’examen →</div>
                  <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                    <button className="ghost2">Réviser</button>
                    <button className="ghost2">Rejouer</button>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, fontSize: 13 }}>
                    <span><span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--wine)" }}><Icon name="glass" size={17} /> <b style={{ color: "var(--ink)" }}>Dégustation guidée</b></span><br /><small style={{ color: "var(--muted)" }}>3 bouteilles · optionnel</small></span>
                    <b style={{ color: "var(--wine)" }}>Ouvrir →</b>
                  </div>
                  <p style={{ textAlign: "center", margin: "12px 0 0", fontSize: 13, fontWeight: 600, color: "#a08e90" }}>Choisir une autre leçon →</p>
                </div>
                <div className="stats-row">
                  <div><Icon name="book" size={18} /><b>4</b></div>
                  <div><Icon name="cap" size={18} /><b>0</b></div>
                  <div><img src="/goutte.svg" alt="Goutte" style={{ width: 16, height: 20, objectFit: "contain" }} /><b>0</b></div>
                </div>
                <div className="tab-bar five">
                  <div className="on"><Icon name="home" size={18} /><br />Leçons</div>
                  <div><Icon name="book" size={18} /><br />Mémos</div>
                  <div><Icon name="camera" size={18} /><br />Scan</div>
                  <div><Icon name="chat" size={18} /><br />Sommelier</div>
                  <div><Icon name="user" size={18} /><br />Profil</div>
                </div>
              </div>
            </div>
            <div className="float-card" style={{ top: "30%", right: "-6px" }}>
              <div className="ico"><Icon name="cap" size={22} /></div>
              <div>Des cours<br />interactifs</div>
            </div>
            <div className="float-card" style={{ bottom: "20%", left: "-10px" }}>
              <div className="ico"><Icon name="star" size={22} /></div>
              <div>Progresse et<br />gagne des étoiles</div>
            </div>
            <div className="mascot"><img src="/goutte.svg" alt="Goutte, mascotte ROVINNA" /></div>
          </div>
        </div>
      </header>

      <section id="features" className="section container">
        <div className="section-head">
          <span className="kicker">L’application</span>
          <h2>Tout pour progresser dans le vin</h2>
          <p>On commence par l’essentiel : <b>les leçons</b>. Puis mémos intelligents, sommelier IA, communauté et dégustation guidée.</p>
        </div>
        <div className="learn-banner">
          <div>
            <span className="kicker" style={{ background: "#fff", color: "#591420" }}>1 · Apprendre</span>
            <h3 className="serif">Apprends le vin pas à pas</h3>
            <p>Des parcours interactifs pour découvrir les régions, les cépages et les styles, à ton rythme : leçon, dégustation, examen.</p>
            <div className="learn-chips">
              <span className="learn-chip">Régions & spécificités</span>
              <span className="learn-chip">Cépages & styles</span>
              <span className="learn-chip">Examens & étoiles</span>
            </div>
          </div>
          <div className="quiz">
            <div className="quiz-k"><span>Révision personnalisée</span><span>1/3</span></div>
            <h4>Quelle ville est la capitale de la Bourgogne ?</h4>
            <div className="quiz-opt"><span>Mâcon</span></div>
            <div className="quiz-opt"><span>Beaune</span></div>
            <div className="quiz-opt good"><span>Dijon</span><span>✓</span></div>
            <div className="quiz-note"><b>✓ Bonne réponse !</b><br />Dijon est la capitale régionale ; Beaune, celle des vins.</div>
            <button className="btn-green" type="button">Continuer →</button>
          </div>
        </div>
        <div className="grid4">
          {FEATURES.map((f) => (
            <div key={f.n} className={`card ${f.dark ? "wine" : ""}`}>
              <div className="big"><span className="chip"><Icon name={f.icon} size={22} /></span></div>
              <div className="n">{f.n}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="degustation" className="section container">
        <div className="degust">
          <div className="degust-grid">
            <div>
              <span className="kicker" style={{ background: "#fff", color: "#5c0820" }}>5 · Déguster</span>
              <h2 className="serif" style={{ fontSize: "clamp(28px,4vw,44px)", margin: "14px 0" }}>Une dégustation guidée, pas à pas</h2>
              <p style={{ color: "#f3c8cf", lineHeight: 1.6 }}>Clique sur les étapes — comme dans l’app avec Goutte, ta petite goutte de vin qui te guide.</p>
              <div className="steps">
                {STEPS.map((s, i) => (
                  <button key={s.id} onClick={() => setStepIdx(i)} className={`step ${i === stepIdx ? "active" : ""}`}>
                    {s.label}
                  </button>
                ))}
              </div>
              <div className="progress"><i style={{ width: `${((stepIdx + 1) / STEPS.length) * 100}%` }} /></div>
              <p style={{ marginTop: 12, fontSize: 14, opacity: .9 }}>Guide · étape {stepIdx + 1}/5 : <b>{step.title}</b> — {step.text}</p>
            </div>
            <div className="notebook">
              <h4>Ma dégustation</h4>
              {["👁️ Robe", "👃 Nez", "👄 Bouche", "⭐ Finale"].map((l, i) => (
                <label key={l} style={{ opacity: i <= stepIdx ? 1 : .4 }}>
                  <input type="checkbox" checked={i <= stepIdx} readOnly /> {l} {i <= stepIdx ? "✓" : ""}
                </label>
              ))}
              <p style={{ fontSize: 13, color: "#7a5c60", marginTop: 12 }}>Bons vins, belles découvertes — comme ton carnet dans l’app.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sommelier" className="section container">
        <div className="section-head">
          <span className="kicker">3 · Sommelier IA</span>
          <h2>Ton sommelier personnel</h2>
          <p>Des conseils instantanés pour choisir un vin, analyser une bouteille et trouver les accords parfaits.</p>
        </div>
        <div className="somm-grid">
          <div className="card">
            <div style={{ width: 52, height: 62 }}><img src="/goutte.svg" alt="Goutte, ton sommelier IA" style={{ width: "100%", height: "100%", objectFit: "contain" }} /></div>
            <h3 className="serif">Une question ? Je suis là.</h3>
            <div className="idea"><span className="ic"><Icon name="glass" size={20} /></span><div><b>Quel vin ce soir ?</b><small>Recommandation du moment</small></div></div>
            <div className="idea"><span className="ic"><Icon name="chat" size={20} /></span><div><b>Accord mets-vin</b><small>Ajoute ton plat à la fin</small></div></div>
            <div className="idea"><span className="ic"><Icon name="gift" size={20} /></span><div><b>Cadeau ~30€</b><small>Précise pour qui</small></div></div>
            <div className="idea"><span className="ic"><Icon name="camera" size={20} /></span><div><b>Analyse une bouteille</b><small>Onglet Scan, en photo</small></div></div>
          </div>
          <div className="card wine">
            <div className="n">4 · Communauté</div>
            <h3>Partage ta passion du vin</h3>
            <p>Échange avec d’autres passionnés, découvre de nouvelles bouteilles et inspire-toi.</p>
            <div style={{ marginTop: 16, display: "grid", gap: 10, fontSize: 14.5 }}>
              <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: 14, padding: 12, display: "flex", gap: 10, alignItems: "flex-start" }}><Icon name="users" size={19} /><span><b>Échange et découvre</b> — pose tes questions, partage tes coups de cœur.</span></div>
              <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: 14, padding: 12, display: "flex", gap: 10, alignItems: "flex-start" }}><Icon name="star" size={19} /><span><b>Inspiration quotidienne</b> — accords mets-vins et idées bouteilles.</span></div>
              <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: 14, padding: 12, display: "flex", gap: 10, alignItems: "flex-start" }}><Icon name="camera" size={19} /><span><b>Partage tes bouteilles</b> — publie, commente, fais vivre la communauté.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="telecharger" className="section container">
        <div className="download">
          <span className="kicker">Télécharger</span>
          <h2 className="serif" style={{ fontSize: "clamp(28px,4vw,44px)", margin: "12px 0" }}>Bientôt sur tes stores préférés</h2>
          <p style={{ color: "#5a3a3f" }}>L’app arrive. Les liens App Store et Google Play seront activés ici dès la sortie.</p>
          <div className="store-row" style={{ justifyContent: "center" }}>
            <a href={APP_STORE_URL} onClick={(e) => handleStoreClick(e, APP_STORE_URL)} className="store-btn">
              <span style={{ opacity: .95 }}><BrandIcon d={APPLE_D} size={26} /></span>
              <span><small>Télécharger sur</small><strong>App Store</strong></span>
              <span className="soon">Bientôt</span>
            </a>
            <a href={GOOGLE_PLAY_URL} onClick={(e) => handleStoreClick(e, GOOGLE_PLAY_URL)} className="store-btn">
              <span style={{ opacity: .95 }}><BrandIcon d={PLAY_D} size={24} /></span>
              <span><small>Disponible sur</small><strong>Google Play</strong></span>
              <span className="soon">Bientôt</span>
            </a>
          </div>
          <div className="qr-row">
            <div className="qr"><div className="qr-box">QR iOS<br />bientôt</div><p style={{ fontSize: 13 }}>Scanne à la sortie</p></div>
            <div className="qr"><div className="qr-box">QR Android<br />bientôt</div><p style={{ fontSize: 13 }}>Scanne à la sortie</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="section container">
        <div className="section-head">
          <span className="kicker">Contact</span>
          <h2>Offres marketing & support</h2>
          <p>Une question, un partenariat, un bug ? Écris-nous, on répond vite.</p>
        </div>
        <div className="contact-grid">
          <div className="info-card">
            <h3 className="serif" style={{ marginTop: 0, fontSize: 26 }}>Parlons vin</h3>
            <ul>
              <li><b>Offres marketing & partenariats</b><br />Cavistes, domaines, restaurants, presse.</li>
              <li><b>Support</b><br />Compte, bug, idée de fonctionnalité.</li>
              <li><b>Email direct</b><br /><a href="mailto:support@rovinna.be">support@rovinna.be</a></li>
              <li><b>Basés en Belgique</b> — rovinna.be</li>
            </ul>
            <p style={{ fontSize: 13, opacity: .8 }}>Réponse sous 48h ouvrées en général.</p>
          </div>
          <form className="form" onSubmit={submitContact}>
            {status.msg && <div className={`alert ${status.type}`}>{status.msg}</div>}
            <div className="two">
              <div className="field">
                <label>Nom *</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jeanne Dupont" required />
              </div>
              <div className="field">
                <label>Email *</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jeanne@email.be" required />
              </div>
            </div>
            <div className="field">
              <label>Sujet *</label>
              <select value={form.sujet} onChange={(e) => setForm({ ...form, sujet: e.target.value })}>
                <option>Offre marketing / Partenariat</option>
                <option>Support / Aide</option>
                <option>Presse</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="field">
              <label>Message *</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Bonjour, je suis caviste à Beaune et je veux…" required />
            </div>
            <button className="btn btn-wine" style={{ width: "100%" }} disabled={loading}>
              {loading ? "Envoi…" : "Envoyer le message →"}
            </button>
            <p style={{ fontSize: 12, color: "#7a5c60", marginTop: 10 }}>En envoyant, tu acceptes d’être recontacté par l’équipe ROVINNA.</p>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="foot-grid">
            <div>
              <div className="logo" style={{ color: "#fff" }}>
                <div className="logo-drop"><img src="/goutte.svg" alt="Goutte, mascotte ROVINNA" /></div>
                <div>ROVINNA<small style={{ color: "#b98d93" }}>rovinna.be</small></div>
              </div>
              <p style={{ maxWidth: 360 }}>Apprends le vin pas à pas. Leçons, sommelier IA, mémos, communauté.</p>
            </div>
            <div style={{ display: "flex", gap: 40 }}>
              <div><b>App</b><br /><a href="#features">Fonctionnalités</a><br /><a href="#telecharger">Télécharger</a><br /><a href="#contact">Contact</a></div>
              <div><b>Légal</b><br /><a href="/mentions-legales">Mentions légales</a><br /><a href="/confidentialite">Confidentialité</a><br /><a href="/cgu">CGU</a><br /><a href="mailto:support@rovinna.be">support@rovinna.be</a></div>
            </div>
          </div>
          <div className="legal">© {new Date().getFullYear()} ROVINNA.be — Tous droits réservés. L’abus d’alcool est dangereux pour la santé. À consommer avec modération. Réservé aux adultes en âge légal de consommer de l’alcool.</div>
        </div>
      </footer>

      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>
    </>
  );
}
