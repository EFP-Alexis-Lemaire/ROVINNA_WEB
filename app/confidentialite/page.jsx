import "../globals.css";

export const metadata = {
  title: "Politique de confidentialité — ROVINNA",
  description: "Comment ROVINNA collecte et protège tes données : formulaire de contact uniquement, aucun cookie, droits RGPD.",
};

export default function Confidentialite() {
  return (
    <main className="legal-wrap">
      <a className="back-link" href="/">← Retour à l’accueil</a>
      <span className="kicker">Vie privée · RGPD</span>
      <h1 className="serif">Politique de confidentialité</h1>
      <p className="updated">Dernière mise à jour : 26 septembre 2026</p>

      <p>
        Cette politique explique quelles données sont collectées sur <b>rovinna.be</b>, pourquoi,
        et quels sont tes droits. Elle est conforme au Règlement général sur la protection des
        données (RGPD, UE 2016/679) et à la loi belge du 30 juillet 2018.
      </p>

      <h2 className="serif">1. Responsable du traitement</h2>
      <p>
        <span className="ph">Lemaire Alexis</span>, particulier basé en Belgique.<br />
        Contact vie privée : <a href="mailto:support@rovinna.be">support@rovinna.be</a>
      </p>

      <h2 className="serif">2. Données collectées</h2>
      <p>Le site ne collecte que les données que tu nous transmets via le formulaire de contact :</p>
      <ul>
        <li>nom ;</li>
        <li>adresse e-mail ;</li>
        <li>sujet et contenu du message.</li>
      </ul>
      <p>
        Aucun compte n’est créé, aucune donnée de navigation n’est exploitée et le site
        n’utilise <b>aucun cookie ni traceur</b> (pas de mesure d’audience, pas de publicité).
      </p>

      <h2 className="serif">3. Finalités et bases légales</h2>
      <p>Tes données servent uniquement à :</p>
      <ul>
        <li>répondre à ta demande (support, partenariat, presse) — sur la base de ton <b>consentement</b> et des <b>mesures précontractuelles</b> ;</li>
        <li>assurer le suivi de nos échanges — sur la base de notre <b>intérêt légitime</b> à gérer la relation.</li>
      </ul>

      <h2 className="serif">4. Destinataires</h2>
      <p>
        Tes données ne sont <b>ni vendues, ni partagées, ni utilisées à des fins publicitaires</b>.
        Elles sont accessibles uniquement à l’éditeur du site, pour traiter ta demande.
      </p>

      <h2 className="serif">5. Durées de conservation</h2>
      <p>
        Les messages et échanges sont conservés <b>3 ans maximum</b> à compter du dernier contact,
        puis supprimés, sauf obligation légale contraire.
      </p>

      <h2 className="serif">6. Tes droits</h2>
      <p>Conformément au RGPD, tu disposes des droits suivants :</p>
      <ul>
        <li>droit d’accès, de rectification et d’effacement ;</li>
        <li>droit à la limitation et droit d’opposition ;</li>
        <li>droit à la portabilité de tes données.</li>
      </ul>
      <p>
        Pour les exercer, écris à <a href="mailto:support@rovinna.be">support@rovinna.be</a>.
        Réponse sous un mois maximum. Un justificatif d’identité peut être demandé en cas de doute.
      </p>

      <h2 className="serif">7. Réclamation</h2>
      <p>
        Si tu estimes que tes droits ne sont pas respectés, tu peux introduire une réclamation
        auprès de l’<b>Autorité de protection des données</b> (Belgique), rue de la Presse 35,
        1000 Bruxelles — <a href="https://www.dataprotectionauthority.be" target="_blank" rel="noopener">dataprotectionauthority.be</a>.
      </p>

      <h2 className="serif">8. Hébergement et transferts</h2>
      <p>
        Le site est hébergé par <b>Vercel Inc. (États-Unis)</b>. Des transferts de données hors de
        l’Union européenne peuvent donc intervenir ; ils sont encadrés par les clauses
        contractuelles types de la Commission européenne mises en place par l’hébergeur.
      </p>

      <h2 className="serif">9. Sécurité</h2>
      <p>
        Des mesures techniques et organisationnelles raisonnables sont mises en œuvre pour protéger
        tes données contre tout accès, modification ou divulgation non autorisés.
      </p>

      <h2 className="serif">10. Mineurs</h2>
      <p>
        Le site portant sur le vin, il s’adresse aux personnes en âge légal de consommer de
        l’alcool. Aucune donnée de mineur n’est sciemment collectée.
      </p>

      <h2 className="serif">11. Modifications</h2>
      <p>
        Cette politique peut évoluer, notamment lors de la sortie de l’application mobile
        (création de compte, nouvelles fonctionnalités). La version en ligne fait foi.
      </p>
    </main>
  );
}
