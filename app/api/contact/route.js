export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, sujet, message } = body || {};

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Nom, email et message sont requis." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ ok: false, error: "Email invalide." }, { status: 400 });
    }

    // TODO : brancher Resend / Brevo / Formspree ici.
    // Exemple avec Resend :
    // await fetch("https://api.resend.com/emails", { method: "POST", headers: {...}, body: JSON.stringify({...}) })
    console.log("[CONTACT ROVINNA]", { name, email, sujet, message, date: new Date().toISOString() });

    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false, error: "Erreur serveur." }, { status: 500 });
  }
}
