import "../globals.css";

export const metadata = {
  title: "Mentions légales — ROVINNA",
  description: "Mentions légales du site rovinna.be : éditeur, hébergeur, propriété intellectuelle.",
};

export default function MentionsLegales() {
  return (
    <main className="legal-wrap">
      <a className="back-link" href="/">← Retour à l’accueil</a>
      <span className="kicker">Site vitrine</span>
      <h1 className="serif">Mentions légales</h1>
      <p className="updated">Dernière mise à jour : 26 septembre 2026</p>

      <h2 className="serif">1. Éditeur du site</h2>
      <p>
        Le site <b>rovinna.be</b> est édité à titre privé par :<br />
        <span className="ph">Nom et prénom — à compléter</span><br />
        E-mail : <a href="mailto:support@rovinna.be">support@rovinna.be</a>
      </p>

      <h2 className="serif">2. Hébergeur</h2>
      <p>
        Le site est hébergé par <b>Vercel Inc.</b>, 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
        Site web : <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a>
      </p>

      <h2 className="serif">3. Objet du site</h2>
      <p>
        rovinna.be est le <b>site vitrine</b> de présentation de l’application mobile <b>ROVINNA</b>,
        actuellement en cours de développement : parcours d’apprentissage du vin, sommelier IA,
        dégustations guidées et communauté. Les liens vers l’App Store et Google Play seront
        activés à la sortie officielle de l’application.
      </p>

      <h2 className="serif">4. Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus du site (textes, visuels, logo et mascotte « Goutte », mise en page)
        est protégé par le droit d’auteur. Toute reproduction, représentation ou diffusion, totale ou
        partielle, sans autorisation préalable est interdite.
      </p>

      <h2 className="serif">5. Liens vers des sites tiers</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers (notamment les stores d’applications).
        L’éditeur n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à
        leurs contenus ou pratiques.
      </p>

      <h2 className="serif">6. Public concerné — alcool</h2>
      <p>
        Les contenus du site portent sur le vin. Ils s’adressent exclusivement aux personnes en âge
        légal de consommer de l’alcool. L’abus d’alcool est dangereux pour la santé : à consommer
        avec modération.
      </p>

      <h2 className="serif">7. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont soumises au <b>droit belge</b>. En cas de litige, et à
        défaut de résolution amiable, les tribunaux belges compétents seront saisis.
      </p>

      <h2 className="serif">8. Contact</h2>
      <p>
        Pour toute question : <a href="mailto:support@rovinna.be">support@rovinna.be</a> —
        ou via le <a href="/#contact">formulaire de contact</a>.
      </p>
    </main>
  );
}
