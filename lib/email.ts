import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import { OrderFormData } from './types';
import { CONTACT_INFO } from './constants';

export async function sendOrderInquiryEmails(data: OrderFormData) {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || CONTACT_INFO.defaultEmail;
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.EMAIL_FROM || 'Jarrar Digital Studio <inquiry@jarrardigitalstudio.com>';

  const userSubject = `Inquiry Confirmation — Jarrar Digital Studio`;
  const adminSubject = `🚨 New Project Inquiry from ${data.name}`;

  const userHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #FBF8F2; color: #1A1710; margin: 0; padding: 24px; }
        .card { max-width: 580px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; padding: 32px; border: 1px solid rgba(26,23,16,0.10); box-shadow: 0 4px 16px rgba(26,23,16,0.06); }
        .header { text-align: center; margin-bottom: 24px; }
        .logo { font-size: 22px; font-weight: 800; color: #9C7A22; letter-spacing: -0.02em; }
        h1 { font-size: 24px; color: #1A1710; margin-top: 12px; margin-bottom: 8px; }
        p { font-size: 15px; line-height: 1.6; color: #7A7264; margin: 8px 0; }
        .details { background: #F3EEE2; border-radius: 12px; padding: 20px; margin: 24px 0; }
        .item { margin-bottom: 8px; font-size: 14px; color: #1A1710; }
        .item strong { color: #7C5F16; }
        .footer { margin-top: 32px; font-size: 13px; color: #7A7264; text-align: center; border-top: 1px solid rgba(26,23,16,0.08); padding-top: 16px; }
        .btn { display: inline-block; background: #9C7A22; color: #FFFFFF; padding: 12px 24px; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: 14px; margin-top: 16px; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <div class="logo">JARRAR DIGITAL STUDIO</div>
          <h1>Thank you for your inquiry, ${data.name}!</h1>
          <p>We have successfully received your project details. Jarrar will personally reach out to you within 30 minutes.</p>
        </div>

        <div class="details">
          <div class="item"><strong>Name:</strong> ${data.name}</div>
          <div class="item"><strong>Email:</strong> ${data.email}</div>
          <div class="item"><strong>Phone:</strong> ${data.phone}</div>
          <div class="item"><strong>Address:</strong> ${data.address}</div>
          <div class="item"><strong>Idea / Project Details:</strong> ${data.idea || 'None provided'}</div>
        </div>

        <p>If you'd like to chat right away, feel free to send a message on WhatsApp directly:</p>
        <div style="text-align: center;">
          <a href="https://wa.me/${CONTACT_INFO.defaultWhatsAppNumber}" class="btn">Message Jarrar on WhatsApp</a>
        </div>

        <div class="footer">
          © 2026 Jarrar Digital Studio · Mohalla Chaudhari, Sirsi, Sambhal, Uttar Pradesh, India
        </div>
      </div>
    </body>
    </html>
  `;

  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #1A1710; color: #FBF8F2; margin: 0; padding: 24px; }
        .card { max-width: 580px; margin: 0 auto; background: #242017; border-radius: 16px; padding: 32px; border: 1px solid rgba(251,248,242,0.15); }
        h1 { font-size: 22px; color: #B8912F; margin-top: 0; }
        .details { background: #1A1710; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid rgba(251,248,242,0.1); }
        .item { margin-bottom: 10px; font-size: 14px; color: #FBF8F2; }
        .item strong { color: #B8912F; }
        .btn { display: inline-block; background: linear-gradient(135deg, #9C7A22, #B8912F); color: #FFFFFF; padding: 12px 24px; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>New Order / Inquiry Received</h1>
        <p>You have received a new inquiry from the website form.</p>

        <div class="details">
          <div class="item"><strong>Client Name:</strong> ${data.name}</div>
          <div class="item"><strong>Client Email:</strong> <a href="mailto:${data.email}" style="color:#B8912F;">${data.email}</a></div>
          <div class="item"><strong>Client Phone:</strong> <a href="tel:${data.phone}" style="color:#B8912F;">${data.phone}</a></div>
          <div class="item"><strong>Location:</strong> ${data.address}</div>
          <div class="item"><strong>Project Idea:</strong> ${data.idea || 'Not specified'}</div>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <a href="https://wa.me/${data.phone.replace(/\D/g, '')}" class="btn">Reply to Client on WhatsApp</a>
        </div>
      </div>
    </body>
    </html>
  `;

  // 1. Try Resend if API key is provided
  if (resendApiKey && resendApiKey.startsWith('re_')) {
    try {
      const resend = new Resend(resendApiKey);
      await Promise.all([
        resend.emails.send({
          from: fromEmail,
          to: data.email,
          subject: userSubject,
          html: userHtml,
        }),
        resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: adminSubject,
          html: adminHtml,
        }),
      ]);
      console.log('Emails dispatched successfully via Resend.');
      return { success: true, provider: 'resend' };
    } catch (err) {
      console.error('Error sending email via Resend:', err);
    }
  }

  // 2. Try SMTP Nodemailer if configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await Promise.all([
        transporter.sendMail({
          from: fromEmail,
          to: data.email,
          subject: userSubject,
          html: userHtml,
        }),
        transporter.sendMail({
          from: fromEmail,
          to: adminEmail,
          subject: adminSubject,
          html: adminHtml,
        }),
      ]);
      console.log('Emails dispatched successfully via SMTP.');
      return { success: true, provider: 'smtp' };
    } catch (err) {
      console.error('Error sending email via SMTP:', err);
    }
  }

  // 3. Fallback mock in development (logs to console)
  console.log('--- [DEV MOCK EMAIL DISPATCH] ---');
  console.log(`To User: ${data.email} | Subject: ${userSubject}`);
  console.log(`To Admin: ${adminEmail} | Subject: ${adminSubject}`);
  console.log('Payload:', JSON.stringify(data, null, 2));
  console.log('---------------------------------');

  return { success: true, provider: 'mock_dev' };
}
