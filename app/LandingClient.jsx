"use client";

import { useState } from "react";

// 👉 Quand tes apps seront en ligne, remplace juste ces 2 URLs :
const APP_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";

const FEATURES = [
  {
    n: "2 · Mémoriser",
    icon: "🧠",
    title: "Mémorise efficacement",
    text: "Des fiches intelligentes et des sessions adaptées à ton niveau. Une mémoire qui dure !",
    dark: false,
  },
  {
    n: "3 · Sommelier IA",
    icon: "goutte",
    title: "Ton sommelier personnel",
    text: "Choisis ton vin selon ton plat, analyse une bouteille en photo, accords mets-vins instantanés.",
    dark: true,
  },
  {
    n: "4 · Communauté",
    icon: "❤️",
    title: "Partage ta passion du vin",
    text: "Échange avec d'autres passionnés, découvre de nouvelles bouteilles et inspire-toi.",
    dark: false,
  },
  {
    n: "5 · Déguster",
    icon: "👁️",
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
      showToast("📱 App bientôt disponible sur les stores — laisse ton email ci-dessous !");
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
      setStatus({ type: "ok", msg: "Merci ! Ton message a bien été envoyé. On te répond très vite 🍇" });
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
            <a href="#features">Fonctionnalités</a>
            <a href="#degustation">Dégustation</a>
            <a href="#sommelier">Sommelier IA</a>
            <a href="#telecharger">Télécharger</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="btn btn-wine btn-sm" href="#telecharger">Télécharger l’app</a>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">🍇 Bientôt sur iOS & Android</span>
            <h1>Apprends à <em>déguster comme un pro</em></h1>
            <p className="lead">
              Des exercices interactifs pour reconnaître les arômes, les saveurs et affiner ton palais.
              Ton sommelier IA, tes mémos intelligents et une communauté de passionnés.
            </p>
            <div className="store-row">
              <a href={APP_STORE_URL} onClick={(e) => handleStoreClick(e, APP_STORE_URL)} className="store-btn">
                <span style={{ fontSize: 28 }}>🍎</span>
                <span><small>Télécharger sur</small><strong>App Store</strong></span>
                <span className="soon">Bientôt</span>
              </a>
              <a href={GOOGLE_PLAY_URL} onClick={(e) => handleStoreClick(e, GOOGLE_PLAY_URL)} className="store-btn">
                <span style={{ fontSize: 28 }}>▶️</span>
                <span><small>Disponible sur</small><strong>Google Play</strong></span>
                <span className="soon">Bientôt</span>
              </a>
            </div>
            <div className="trust">
              <span>⭐ <b>4,9/5</b> visé au lancement</span>
              <span><img src="/goutte.svg" alt="Goutte" className="goutte-inline" /> <b>Guidée étape par étape</b></span>
              <span>🤖 <b>Propulsé par IA</b></span>
            </div>
          </div>

          <div className="phone-wrap">
            <div className="speech">Une dégustation guidée, étape par étape ! ♡</div>
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <b><img src="/goutte.svg" alt="Goutte" className="goutte-inline" /> Chablis</b><small style={{ color: "#999" }}>Quitter</small>
                </div>
                <div className="chat-bubble">
                  <b>J’ai trouvé : Chablis — Chablis 🍷</b><br />
                  ⚠️ <b>Ce vin n’est pas de Bordeaux</b> — il vient de Bourgogne.<br />
                  Note : 4/5 ⭐ — Excellent choix.<br />
                  🌡️ <b>Température : 10-12°C</b>
                </div>
                <div className="chat-bubble">
                  Je vais te guider étape par étape. On commence par <b>l’œil 👁️</b><br /><br />
                  👉 Dis-moi : quelle est la couleur ? Intense ou pâle ?
                </div>
                <div className="pill-row">
                  <span className="pill active">👁️ Œil</span>
                  <span className="pill">👃 Nez</span>
                  <span className="pill">👄 Bouche</span>
                  <span className="pill">⭐ Finale</span>
                </div>
                <div className="chat-bubble" style={{ color: "#999" }}>Décris ce que tu vois, sens, goûtes…</div>
                <div className="cta-mini">Terminer la dégustation →</div>
              </div>
            </div>
            <div className="float-card" style={{ top: "38%", right: "-6px" }}>
              <div className="ico">👃</div>
              <div>Reconnais<br />les arômes</div>
            </div>
            <div className="float-card" style={{ bottom: "22%", left: "-10px" }}>
              <div className="ico">📊</div>
              <div>Retours<br />personnalisés</div>
            </div>
            <div className="mascot"><img src="/goutte.svg" alt="Goutte, mascotte ROVINNA" /></div>
          </div>
        </div>
      </header>

      <section id="features" className="section container">
        <div className="section-head">
          <span className="kicker">L’application</span>
          <h2>Tout pour progresser dans le vin</h2>
          <p>4 piliers inspirés de l’app : mémoriser, sommelier IA, communauté et dégustation guidée.</p>
        </div>
        <div className="grid4">
          {FEATURES.map((f) => (
            <div key={f.n} className={`card ${f.dark ? "wine" : ""}`}>
              <div className="big">{f.icon === "goutte" ? <img src="/goutte.svg" alt="Goutte" style={{ width: 44, height: 52, objectFit: "contain" }} /> : f.icon}</div>
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
              <p style={{ fontSize: 13, color: "#7a5c60", marginTop: 12 }}>Bons vins, belles découvertes ♡ — comme ton carnet dans l’app.</p>
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
            <div style={{ width: 56, height: 66 }}><img src="/goutte.svg" alt="Goutte sommelier IA" style={{ width: "100%", height: "100%", objectFit: "contain" }} /></div>
            <h3 className="serif">Une question ? Je suis là !</h3>
            <div className="idea"><span className="ic"><img src="/goutte.svg" alt="Goutte" /></span><div><b>Quel vin ce soir ?</b><small>Recommandation du moment</small></div></div>
            <div className="idea"><span className="ic">🍽️</span><div><b>Accord mets-vin</b><small>Ajoute ton plat à la fin</small></div></div>
            <div className="idea"><span className="ic">🎁</span><div><b>Cadeau ~30€</b><small>Précise pour qui</small></div></div>
            <div className="idea"><span className="ic">🍾</span><div><b>Analyse une bouteille</b><small>En photo, instantanément</small></div></div>
          </div>
          <div className="card wine">
            <div className="n">4 · Communauté</div>
            <h3>Partage ta passion du vin</h3>
            <p>Échange avec d’autres passionnés, découvre de nouvelles bouteilles et inspire-toi.</p>
            <div style={{ marginTop: 16, display: "grid", gap: 10, fontSize: 14.5 }}>
              <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, padding: 12 }}>👥 <b>Échange et découvre</b> — pose tes questions, partage tes coups de cœur.</div>
              <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, padding: 12 }}>💡 <b>Inspiration quotidienne</b> — accords mets-vins et idées bouteilles.</div>
              <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, padding: 12 }}>📸 <b>Partage tes bouteilles</b> — publie, commente, fais vivre la communauté.</div>
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
              <span style={{ fontSize: 28 }}>🍎</span>
              <span><small>Télécharger sur</small><strong>App Store</strong></span>
              <span className="soon">Bientôt</span>
            </a>
            <a href={GOOGLE_PLAY_URL} onClick={(e) => handleStoreClick(e, GOOGLE_PLAY_URL)} className="store-btn">
              <span style={{ fontSize: 28 }}>▶️</span>
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
            <h3 className="serif" style={{ marginTop: 0, fontSize: 26 }}>Parlons vin 🍇</h3>
            <ul>
              <li>📣 <b>Offres marketing / Partenariats</b><br />cavistes, domaines, restaurants, presse.</li>
              <li>🛟 <b>Support</b><br />compte, bug, idée de fonctionnalité.</li>
              <li>✉️ <b>Email direct :</b> <a href="mailto:support@rovinna.app">support@rovinna.app</a></li>
              <li>📍 <b>Basés en Belgique</b> — rovinna.be</li>
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
              <p style={{ maxWidth: 360 }}>Apprends à déguster comme un pro. Sommelier IA, mémos, communauté.</p>
            </div>
            <div style={{ display: "flex", gap: 40 }}>
              <div><b>App</b><br /><a href="#features">Fonctionnalités</a><br /><a href="#telecharger">Télécharger</a><br /><a href="#contact">Contact</a></div>
              <div><b>Légal</b><br /><a href="#">Confidentialité</a><br /><a href="#">CGU</a><br /><a href="mailto:support@rovinna.app">support@rovinna.app</a></div>
            </div>
          </div>
          <div className="legal">© {new Date().getFullYear()} ROVINNA.be — Tous droits réservés. L’abus d’alcool est dangereux pour la santé. À consommer avec modération. Réservé aux adultes en âge légal de consommer de l’alcool.</div>
        </div>
      </footer>

      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>
    </>
  );
}
