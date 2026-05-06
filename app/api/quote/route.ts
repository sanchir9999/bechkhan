import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Одоогийн огноо цаг
    const now = new Date();
    const mongoliaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Ulaanbaatar' }));
    const formattedDate = mongoliaTime.toLocaleDateString('mn-MN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const formattedTime = mongoliaTime.toLocaleTimeString('mn-MN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    // IP Address хүлээн авах
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown';

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `🚚 Үнийн санал авах хүсэлт - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Arial', sans-serif; color: #333; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 30px; text-align: center; }
            .header h2 { margin: 0; font-size: 24px; }
            .header p { margin: 5px 0 0 0; font-size: 14px; opacity: 0.9; }
            .content { padding: 30px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 13px; font-weight: bold; color: #dc2626; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
            .info-box { background-color: #f9fafb; padding: 15px; border-left: 4px solid #dc2626; border-radius: 4px; margin-bottom: 10px; }
            .info-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
            .info-row:last-child { border-bottom: none; }
            .label { font-weight: bold; color: #666; min-width: 150px; }
            .value { color: #333; text-align: right; }
            .message-box { background-color: #f0fdf4; border: 1px solid #86efac; padding: 15px; border-radius: 6px; white-space: pre-wrap; word-wrap: break-word; }
            .meta { background-color: #eff6ff; padding: 15px; border-radius: 6px; margin-top: 20px; }
            .meta-item { font-size: 12px; color: #666; padding: 5px 0; }
            .footer { background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🚚 Үнийн санал авах хүсэлт</h2>
              <p>Bechekhan MN - Ачаа тээвэрлэлтийн үйлчилгээ</p>
            </div>

            <div class="content">
              <!-- ХАРИУЦАХ МЭДЭЭЛЭЛ -->
              <div class="section">
                <div class="section-title">👤 Хариуцах мэдээлэл</div>
                <div class="info-box">
                  <div class="info-row">
                    <span class="label">Нэр:</span>
                    <span class="value"><strong>${name}</strong></span>
                  </div>
                  <div class="info-row">
                    <span class="label">Имэйл:</span>
                    <span class="value"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a></span>
                  </div>
                  <div class="info-row">
                    <span class="label">Утасны дугаар:</span>
                    <span class="value"><a href="tel:${phone}" style="color: #dc2626; text-decoration: none;">${phone}</a></span>
                  </div>
                </div>
              </div>

              <!-- МЕССЕЖ -->
              <div class="section">
                <div class="section-title">💬 Мессеж</div>
                <div class="message-box">${message || "(мессеж оруулаагүй)"}</div>
              </div>

              <!-- СҮЛЖЭЭНИЙ МЭДЭЭЛЭЛ -->
              <div class="section">
                <div class="section-title">📊 Хүргүүлэх мэдээлэл</div>
                <div class="meta">
                  <div class="meta-item"><strong>📅 Огноо:</strong> ${formattedDate}</div>
                  <div class="meta-item"><strong>⏰ Цаг:</strong> ${formattedTime} (Монгол цаг)</div>
                  <div class="meta-item"><strong>🌍 IP хаяг:</strong> ${ipAddress}</div>
                  <div class="meta-item"><strong>🔗 Сүлжээ:</strong> Web форм</div>
                </div>
              </div>
            </div>

            <div class="footer">
              <p>© 2025 Bechekhan MN - Орос Монгол Ачаа Тээвэр</p>
              <p>Энэ мэйл автоматаар илгээгдсэн. Хариу илгээх хэрэггүй.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
