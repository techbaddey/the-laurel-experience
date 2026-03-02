// /api/send-email.js
import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_TO, // destination email for form submissions
} = process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
  console.warn("Warning: Missing SMTP env vars for send-email.");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { formType, payload } = req.body;

    if (!formType || !payload) {
      return res.status(400).json({ error: "Missing formType or payload" });
    }

    // create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Compose subject and html body depending on formType
    let subject = `[TLE] New contact form`;
    let html = `<h3>New form submission</h3><pre>${JSON.stringify(payload, null, 2)}</pre>`;

    if (formType === "contact") {
      subject = `[TLE] Contact: ${payload.name || payload.email || "Contact form"}`;
      html = `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${payload.name || "—"}</p>
        <p><strong>Email:</strong> ${payload.email || "—"}</p>
        <p><strong>Phone:</strong> ${payload.phone || "—"}</p>
        <p><strong>Event Type:</strong> ${payload.eventType || "—"}</p>
        <p><strong>Date:</strong> ${payload.date || "—"}</p>
        <h4>Message</h4>
        <p>${(payload.message || "—").replace(/\n/g, "<br/>")}</p>
      `;
    } else if (formType === "booking") {
      subject = `[TLE] Booking / Consultation Request: ${payload.name || payload.email || "Booking"}`;
      html = `
        <h2>Booking / Consultation Request</h2>
        <p><strong>Name:</strong> ${payload.name || "—"}</p>
        <p><strong>Email:</strong> ${payload.email || "—"}</p>
        <p><strong>Type of Event:</strong> ${payload.eventType || "—"}</p>
        <p><strong>Number of Days:</strong> ${payload.days || "—"}</p>
        <p><strong>Guest Capacity:</strong> ${payload.guests || "—"}</p>
        <p><strong>Location:</strong> ${payload.location || "—"}</p>
        <p><strong>Event Date:</strong> ${payload.date || "—"}</p>
        <h4>Notes</h4>
        <p>${(payload.notes || "—").replace(/\n/g, "<br/>")}</p>
      `;
    }

    const mailOptions = {
      from: `"The Laurel Experience" <${SMTP_USER}>`,
      to: EMAIL_TO,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true, info: info.messageId });
  } catch (err) {
    console.error("send-email error:", err);
    return res.status(500).json({ error: err.message || "Server error" });
  }
}
