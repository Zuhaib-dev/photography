import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const sentAt = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    // ─────────────────────────────────────────────────────────────
    // EMAIL 1 — Notification to Zuhaib (owner)
    // ─────────────────────────────────────────────────────────────
    const mailToOwner = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'zuhaibrashid01@gmail.com',
      replyTo: email,
      subject: `📬 New message from ${name}${subject ? ` — ${subject}` : ''}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0f;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#111118;border-radius:16px;overflow:hidden;border:1px solid #1e1e2e;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%);padding:36px 32px;text-align:center;">
              <p style="margin:0 0 8px 0;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.7);">Portfolio Contact</p>
              <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">New Message Received</h1>
              <p style="margin:10px 0 0 0;font-size:13px;color:rgba(255,255,255,0.65);">${sentAt}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">

              <!-- Sender card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a2e;border-radius:12px;border:1px solid #2a2a3e;margin-bottom:20px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 16px 0;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#7c3aed;">Sender Details</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;border-bottom:1px solid #2a2a3e;">
                          <span style="font-size:12px;color:#6b7280;display:block;margin-bottom:2px;">Name</span>
                          <span style="font-size:15px;font-weight:600;color:#f1f5f9;">${name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0 6px 0;border-bottom:1px solid #2a2a3e;">
                          <span style="font-size:12px;color:#6b7280;display:block;margin-bottom:2px;">Email</span>
                          <a href="mailto:${email}" style="font-size:15px;font-weight:500;color:#818cf8;text-decoration:none;">${email}</a>
                        </td>
                      </tr>
                      ${subject ? `<tr><td style="padding:10px 0 6px 0;"><span style="font-size:12px;color:#6b7280;display:block;margin-bottom:2px;">Subject</span><span style="font-size:15px;font-weight:500;color:#f1f5f9;">${subject}</span></td></tr>` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a2e;border-radius:12px;border:1px solid #2a2a3e;border-left:3px solid #7c3aed;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#7c3aed;">Message</p>
                    <p style="margin:0;font-size:15px;line-height:1.8;color:#cbd5e1;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: ${subject || 'Your message'}" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#ffffff;text-decoration:none;padding:13px 32px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:0.3px;">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0d0d16;padding:20px 32px;text-align:center;border-top:1px solid #1e1e2e;">
              <p style="margin:0;font-size:12px;color:#4b5563;">
                Sent via your portfolio at <a href="https://www.zuhaibrashid.com" style="color:#7c3aed;text-decoration:none;">zuhaibrashid.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    }

    // ─────────────────────────────────────────────────────────────
    // EMAIL 2 — Confirmation to the sender
    // ─────────────────────────────────────────────────────────────
    const mailToSender = {
      from: `"Zuhaib Rashid" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Got your message, ${name}! I'll be in touch soon ✨`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Received</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0f;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#111118;border-radius:16px;overflow:hidden;border:1px solid #1e1e2e;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%);padding:44px 32px;text-align:center;">
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 20px auto;"><tr><td width="64" height="64" align="center" valign="middle" style="width:64px;height:64px;background:rgba(255,255,255,0.18);border-radius:50%;font-size:30px;font-weight:700;color:#ffffff;line-height:64px;">✓</td></tr></table>
              <h1 style="margin:0 0 10px 0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Message Received!</h1>
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.8);line-height:1.5;">
                Hey ${name}, thanks for reaching out. I've got your message and will get back to you shortly.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">

              <!-- Response time badge -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a2e;border-radius:12px;border:1px solid #2a2a3e;margin-bottom:24px;">
                <tr>
                  <td style="padding:18px 24px;text-align:center;">
                    <p style="margin:0;font-size:13px;color:#9ca3af;">⏱ Typical response time</p>
                    <p style="margin:6px 0 0 0;font-size:20px;font-weight:700;color:#a78bfa;">Within 24 hours</p>
                  </td>
                </tr>
              </table>

              <!-- Message echo -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a2e;border-radius:12px;border:1px solid #2a2a3e;border-left:3px solid #7c3aed;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#7c3aed;">Your Message</p>
                    <p style="margin:0;font-size:14px;line-height:1.8;color:#94a3b8;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- What's next -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a2e;border-radius:12px;border:1px solid #2a2a3e;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 16px 0;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#7c3aed;">What Happens Next</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #2a2a3e;">
                          <span style="display:inline-block;width:22px;height:22px;background:#7c3aed;border-radius:50%;text-align:center;line-height:22px;font-size:11px;font-weight:700;color:#fff;margin-right:10px;vertical-align:middle;">1</span>
                          <span style="font-size:14px;color:#cbd5e1;vertical-align:middle;">I review your message carefully</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #2a2a3e;">
                          <span style="display:inline-block;width:22px;height:22px;background:#7c3aed;border-radius:50%;text-align:center;line-height:22px;font-size:11px;font-weight:700;color:#fff;margin-right:10px;vertical-align:middle;">2</span>
                          <span style="font-size:14px;color:#cbd5e1;vertical-align:middle;">You receive a personal reply from me</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="display:inline-block;width:22px;height:22px;background:#7c3aed;border-radius:50%;text-align:center;line-height:22px;font-size:11px;font-weight:700;color:#fff;margin-right:10px;vertical-align:middle;">3</span>
                          <span style="font-size:14px;color:#cbd5e1;vertical-align:middle;">We discuss your project or idea in detail</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Social links -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                <tr>
                  <td align="center">
                    <p style="margin:0 0 14px 0;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#6b7280;">Find me on</p>
                    <a href="https://github.com/Zuhaib-dev" style="display:inline-block;margin:0 6px;background:#1a1a2e;border:1px solid #2a2a3e;color:#a78bfa;text-decoration:none;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:500;">GitHub</a>
                    <a href="https://www.linkedin.com/in/zuhaib-rashid-661345318/" style="display:inline-block;margin:0 6px;background:#1a1a2e;border:1px solid #2a2a3e;color:#a78bfa;text-decoration:none;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:500;">LinkedIn</a>
                    <a href="https://x.com/xuhaibx9" style="display:inline-block;margin:0 6px;background:#1a1a2e;border:1px solid #2a2a3e;color:#a78bfa;text-decoration:none;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:500;">X / Twitter</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="background-color:#0d0d16;padding:24px 32px;border-top:1px solid #1e1e2e;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 2px 0;font-size:15px;font-weight:700;color:#f1f5f9;">Zuhaib Rashid</p>
                    <p style="margin:0 0 4px 0;font-size:13px;color:#7c3aed;font-weight:500;">Full Stack Developer</p>
                    <a href="https://www.zuhaibrashid.com" style="font-size:12px;color:#6b7280;text-decoration:none;">zuhaibrashid.com</a>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <p style="margin:0;font-size:11px;color:#374151;">© 2026 Zuhaib Rashid</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    }

    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(mailToOwner),
      transporter.sendMail(mailToSender),
    ])

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
  }
}
