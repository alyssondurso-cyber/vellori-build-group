const requiredFields = ["firstName", "lastName", "phone", "email", "cityZip", "contactMethod", "propertyType", "requestType", "service", "description", "timeline", "consent"];

const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character]));

export default async function handler(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed." });
  if (!process.env.RESEND_API_KEY) return response.status(503).json({ error: "Project requests are temporarily unavailable." });

  const { fields = {}, attachments = [] } = request.body || {};
  if (fields.website) return response.status(200).json({ ok: true });
  if (requiredFields.some((field) => !String(fields[field] || "").trim())) return response.status(400).json({ error: "Please complete all required fields." });
  if (fields.consent !== "accepted") return response.status(400).json({ error: "Consent is required." });
  if (!/^\S+@\S+\.\S+$/.test(fields.email)) return response.status(400).json({ error: "Please enter a valid email address." });
  if (!Array.isArray(attachments) || attachments.length > 3) return response.status(400).json({ error: "Please upload up to 3 photos." });

  const rows = [
    ["Name", `${fields.firstName} ${fields.lastName}`], ["Phone", fields.phone], ["Email", fields.email],
    ["City / ZIP", fields.cityZip], ["Address", fields.address], ["Preferred contact", fields.contactMethod],
    ["Property", fields.propertyType], ["Request", fields.requestType], ["Service", fields.service],
    ["Timeline", fields.timeline], ["Budget", fields.budget || "Not sure yet"], ["Visit date", fields.visitDate],
    ["Preferred day", fields.preferredDay], ["Preferred time", fields.preferredTime], ["Description", fields.description],
    ["Source page", fields.sourcePage], ["Referrer", fields.referrer], ["UTM source", fields.utmSource],
    ["UTM medium", fields.utmMedium], ["UTM campaign", fields.utmCampaign],
  ].filter(([, value]) => value);
  const details = rows.map(([label, value]) => `<tr><td style="padding:8px 14px;color:#75613b;font-weight:700;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 14px;color:#0D1B2A">${escapeHtml(value)}</td></tr>`).join("");
  const sendEmail = (payload) => fetch("https://api.resend.com/emails", {
    method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(payload),
  });

  const ownerEmail = await sendEmail({
    from: "VELLORI Website <projects@forms.velloribuild.com>", to: ["info@velloribuild.com"], reply_to: fields.email,
    subject: `New ${fields.service} request — ${fields.cityZip}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:720px;margin:auto"><div style="background:#0D1B2A;color:#fff;padding:26px"><div style="color:#C8A96B;letter-spacing:3px;font-size:12px">VELLORI BUILD GROUP</div><h1 style="font-family:Georgia,serif;font-weight:400">New project request</h1></div><table style="width:100%;border-collapse:collapse;background:#F8F5EE">${details}</table></div>`,
    attachments: attachments.map(({ filename, content }) => ({ filename: String(filename).slice(0, 120), content })),
  });
  if (!ownerEmail.ok) return response.status(502).json({ error: "We could not deliver your request. Please call or email VELLORI." });

  await sendEmail({
    from: "VELLORI Build Group <projects@forms.velloribuild.com>", to: [fields.email], reply_to: "info@velloribuild.com",
    subject: "We received your VELLORI project request",
    html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#0D1B2A"><div style="background:#0D1B2A;color:#fff;padding:30px"><div style="color:#C8A96B;letter-spacing:3px;font-size:12px">VELLORI BUILD GROUP</div><h1 style="font-family:Georgia,serif;font-weight:400">Thank you, ${escapeHtml(fields.firstName)}.</h1></div><div style="padding:30px;background:#F8F5EE;line-height:1.7"><p>We received your project request and will review the details you shared.</p><p>Our team will contact you through your preferred method: <strong>${escapeHtml(fields.contactMethod)}</strong>.</p><p>For immediate assistance, call <a href="tel:+15618874653">(561) 887-4653</a> or reply to this email.</p><p style="margin-top:28px;color:#75613b">Building Excellence. Creating Legacies.</p></div></div>`,
  });
  return response.status(200).json({ ok: true });
}
