// netlify/functions/contact.js
import nodemailer from "nodemailer";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, body: "Invalid JSON" };
  }

  const {
    formType = "event",
    name = "",
    email = "",
    phone = "",
    eventType = "",
    date = "",
    location = "",
    guests = "",
    duration = "",
    budget = "",
    role = "",
    venue = "",
    referral = "",
    notes = "",
  } = data;

  // minimal server-side check
  if (!email || !name) {
    return { statusCode: 400, body: "Missing required fields" };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    const subject = `BojoStudios Inquiry — ${formType.toUpperCase()}`;
    // build HTML body
    const rows = [
      ["Form", formType],
      ["Name", name],
      ["Email", email],
      ["Phone", phone],
      ["Event Type", eventType || "-"],
      ["Role", role || "-"],
      ["Date", date || "-"],
      ["Venue / Location", venue || location || "-"],
      ["Guests", guests || "-"],
      ["Duration / Coverage", duration || "-"],
      ["Budget", budget || "-"],
      ["Referral", referral || "-"],
      ["Notes", notes || "-"],
    ];

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #111;">
        <h2>New Inquiry from BojoStudios Website</h2>
        <table cellpadding="6" cellspacing="0" border="0">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="font-weight:600; padding-right:12px; vertical-align:top;">${k}:</td><td>${v}</td></tr>`
            )
            .join("")}
        </table>

        <p style="margin-top:18px; color:#555;">Sent from BojoStudios contact form.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"BojoStudios Website" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject,
      html,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Email send error:", err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: err.message }) };
  }
}
