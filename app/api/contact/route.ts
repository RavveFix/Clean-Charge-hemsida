import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TO = 'ravon.strawder@cleancharge.se';
const FROM = 'Clean Charge <kontakt@cleancharge.se>';

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY saknas');
      return NextResponse.json({ error: 'Kunde inte skicka just nu.' }, { status: 500 });
    }
    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, email, phone, subject, message, website } = body ?? {};

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json({ error: 'Ogiltig data.' }, { status: 400 });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2 || trimmedName.length > 120) {
      return NextResponse.json({ error: 'Ange ditt namn.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) || trimmedEmail.length > 254) {
      return NextResponse.json({ error: 'Ange en giltig e-postadress.' }, { status: 400 });
    }
    if (trimmedMessage.length < 5 || trimmedMessage.length > 5000) {
      return NextResponse.json({ error: 'Meddelandet är för kort eller för långt.' }, { status: 400 });
    }

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safePhone = escapeHtml((phone ?? '').toString().trim().slice(0, 40));
    const safeSubject = escapeHtml((subject ?? 'Ingen kategori').toString().trim().slice(0, 200));
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br>');

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:#f8fafc;padding:24px;color:#0f172a;">
        <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;border:1px solid #e2e8f0;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;color:#10b981;">Nytt lead — cleancharge.se</p>
          <h1 style="margin:0 0 24px;font-size:22px;font-weight:800;color:#0f172a;">${safeSubject}</h1>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#64748b;width:120px;">Namn</td><td style="padding:8px 0;font-weight:600;">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">E-post</td><td style="padding:8px 0;font-weight:600;"><a href="mailto:${safeEmail}" style="color:#10b981;text-decoration:none;">${safeEmail}</a></td></tr>
            ${safePhone ? `<tr><td style="padding:8px 0;color:#64748b;">Telefon</td><td style="padding:8px 0;font-weight:600;"><a href="tel:${safePhone}" style="color:#10b981;text-decoration:none;">${safePhone}</a></td></tr>` : ''}
          </table>
          <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e2e8f0;">
            <p style="margin:0 0 8px;font-size:11px;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;color:#64748b;">Meddelande</p>
            <p style="margin:0;line-height:1.6;color:#1e293b;">${safeMessage}</p>
          </div>
          <p style="margin:24px 0 0;font-size:11px;color:#94a3b8;">Svara direkt på det här mejlet — det går till ${safeEmail}.</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: trimmedEmail,
      subject: `[Lead] ${safeSubject} — ${safeName}`,
      html,
    });

    if (error) {
      console.error('Resend error');
      return NextResponse.json({ error: 'Kunde inte skicka just nu.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Kunde inte skicka just nu.' }, { status: 500 });
  }
}
