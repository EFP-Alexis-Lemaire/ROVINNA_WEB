import "../globals.css";

export const metadata = {
  title: "Confidentialité de l’app — Rovinna",
  description:
    "Politique de confidentialité de l’application mobile Rovinna : données collectées, IA, photos, paiements, droits RGPD et suppression de compte.",
};

export default function PrivacyApp() {
  return (
    <main className="legal-wrap">
      <a className="back-link" href="/">← Retour à Rovinna</a>
      <span className="kicker">Application mobile · Vie privée</span>
      <h1 className="serif">Politique de confidentialité</h1>
      <p className="updated">
        Dernière mise à jour : septembre 2026 — Cette politique concerne l’<b>application mobile
        Rovinna</b>. Pour le site vitrine, voir la <a href="/confidentialite">politique du site</a>.
      </p>

      <h2 className="serif">Collecte des données</h2>
      <p>
        Rovinna collecte uniquement les données nécessaires au bon fonctionnement de
        l’application : adresse e-mail, pseudonyme, préférences de vin, progression dans les
        leçons et résultats de dégustations. Aucune donnée sensible (bancaire, médicale) n’est
        stockée sur nos serveurs.
      </p>

      <h2 className="serif">Utilisation des données</h2>
      <p>Vos données sont utilisées exclusivement pour :</p>
      <ul>
        <li>personnaliser votre expérience d’apprentissage ;</li>
        <li>calculer votre progression et vos statistiques ;</li>
        <li>générer des recommandations de vins adaptées ;</li>
        <li>vous envoyer des notifications de rappel (si activé).</li>
      </ul>
      <p>Rovinna ne vend jamais vos données à des tiers.</p>

      <h2 className="serif">Photos et images</h2>
      <p>
        Les photos de bouteilles que vous importez sont stockées de façon sécurisée sur nos
        serveurs Supabase (hébergés dans l’Union européenne). Elles sont utilisées uniquement
        pour l’analyse IA et l’affichage dans votre cave personnelle. Vous pouvez les supprimer
        à tout moment.
      </p>

      <h2 className="serif">Intelligence artificielle</h2>
      <p>
        Rovinna utilise l’API OpenAI (GPT-4o) via nos fonctions serveur pour analyser les
        bouteilles et guider les dégustations. Les images et textes envoyés à l’IA sont traités
        par OpenAI selon{" "}
        <a href="https://openai.com/privacy" target="_blank" rel="noopener">
          leur politique de confidentialité (openai.com/privacy)
        </a>
        . Les conversations avec Goutte peuvent être conservées dans votre compte afin de
        permettre l’historique et peuvent être supprimées depuis l’application.
      </p>

      <h2 className="serif">Paiements</h2>
      <p>
        Sur iOS, les abonnements numériques sont gérés par les achats intégrés Apple. Rovinna ne
        stocke jamais vos informations bancaires.
      </p>

      <h2 className="serif">Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li>accès à vos données personnelles ;</li>
        <li>rectification des informations inexactes ;</li>
        <li>effacement de votre compte et données (directement dans l’app : Profil → Paramètres → Zone dangereuse) ;</li>
        <li>portabilité de vos données.</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez :{" "}
        <a href="mailto:support@rovinna.be">support@rovinna.be</a>
      </p>

      <h2 className="serif">Cookies et traceurs</h2>
      <p>
        Rovinna n’utilise pas de cookies publicitaires. Des identifiants techniques anonymes sont
        utilisés pour maintenir votre session et améliorer les performances de l’application.
      </p>

      <h2 className="serif">Contact DPO</h2>
      <p>
        Pour toute question relative à la protection de vos données personnelles, contactez notre
        délégué à la protection des données à :{" "}
        <a href="mailto:privacy@rovinna.be">privacy@rovinna.be</a>
      </p>

      <p className="updated" style={{ marginTop: 32 }}>© 2026 Rovinna</p>
    </main>
  );
}
