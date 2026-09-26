import "../globals.css";

export const metadata = {
  title: "CGU — ROVINNA",
  description: "Conditions générales d'utilisation du site rovinna.be.",
};

export default function CGU() {
  return (
    <main className="legal-wrap">
      <a className="back-link" href="/">← Retour à l’accueil</a>
      <span className="kicker">Conditions d’utilisation</span>
      <h1 className="serif">Conditions générales d’utilisation</h1>
      <p className="updated">Dernière mise à jour : 26 septembre 2026</p>

      <h2 className="serif">1. Objet</h2>
      <p>
        Les présentes conditions (CGU) encadrent l’utilisation du site <b>rovinna.be</b>, site vitrine
        de présentation de l’application mobile <b>ROVINNA</b> (en cours de développement). En
        naviguant sur le site, tu acceptes ces CGU.
      </p>

      <h2 className="serif">2. Le service</h2>
      <p>Le site permet de :</p>
      <ul>
        <li>découvrir les fonctionnalités à venir : leçons pas à pas, sommelier IA, mémos intelligents, communauté, dégustations guidées ;</li>
        <li>être redirigé vers l’App Store et Google Play <b>dès la sortie officielle</b> (liens actuellement inactifs, mention « Bientôt ») ;</li>
        <li>contacter l’éditeur via le formulaire (offres marketing, partenariats, support, presse).</li>
      </ul>

      <h2 className="serif">3. Accès au site</h2>
      <p>
        L’accès est gratuit et réservé aux personnes en âge légal de consommer de l’alcool, les
        contenus portant sur le vin. L’éditeur peut suspendre ou modifier le site à tout moment,
        sans préavis, notamment pour maintenance.
      </p>

      <h2 className="serif">4. Formulaire de contact</h2>
      <p>En utilisant le formulaire, tu t’engages à :</p>
      <ul>
        <li>fournir des informations exactes ;</li>
        <li>ne transmettre aucun contenu illicite, offensant ou portant atteinte aux droits de tiers ;</li>
        <li>ne pas détourner le formulaire (spam, démarchage, envois massifs).</li>
      </ul>
      <p>L’éditeur se réserve le droit de ne pas donner suite aux messages contraires à ces règles.</p>

      <h2 className="serif">5. Propriété intellectuelle</h2>
      <p>
        Tous les contenus du site (textes, visuels, logo et mascotte « Goutte », code, mise en page)
        sont protégés. Toute reproduction ou exploitation sans autorisation préalable est interdite.
      </p>

      <h2 className="serif">6. Responsabilité</h2>
      <ul>
        <li>Les contenus sont fournis à titre informatif : les conseils liés au vin ne remplacent pas l’avis d’un professionnel et n’encouragent en rien la consommation excessive.</li>
        <li>L’éditeur ne garantit ni l’exactitude exhaustive des contenus, ni la disponibilité permanente du site.</li>
        <li>Les liens vers des sites tiers (stores, partenaires) relèvent de la responsabilité de leurs éditeurs respectifs.</li>
      </ul>

      <h2 className="serif">7. Données personnelles</h2>
      <p>
        L’utilisation du formulaire implique la collecte de données personnelles, décrite dans la{" "}
        <a href="/confidentialite">politique de confidentialité</a> (aucun cookie, conservation 3 ans maximum, droits RGPD).
      </p>

      <h2 className="serif">8. Modifications des CGU</h2>
      <p>
        Ces CGU peuvent être mises à jour à tout moment, notamment à la sortie de l’application
        mobile. La version publiée sur cette page fait foi.
      </p>

      <h2 className="serif">9. Droit applicable et juridiction</h2>
      <p>
        Ces CGU sont soumises au <b>droit belge</b>. En cas de différend, une résolution amiable sera
        recherchée en priorité ; à défaut, les tribunaux belges compétents seront saisis.
      </p>

      <h2 className="serif">10. Contact</h2>
      <p>
        <a href="mailto:support@rovinna.be">support@rovinna.be</a> — ou via le{" "}
        <a href="/#contact">formulaire de contact</a>.
      </p>
    </main>
  );
}
