import * as nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Lazy create transporter (build-time bug-аас хамгаална)
const getTransporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mongolia time
    const now = new Date();
    const mongoliaTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Ulaanbaatar" })
    );

    const formattedDate = mongoliaTime.toLocaleDateString("mn-MN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = mongoliaTime.toLocaleTimeString("mn-MN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    // IP
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "Unknown";

    const transporter = getTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `🚚 Үнийн санал авах хүсэлт - ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial; padding:20px">
          <h2>🚚 Үнийн санал</h2>

          <p><b>Нэр:</b> ${name}</p>
          <p><b>Имэйл:</b> ${email}</p>
          <p><b>Утас:</b> ${phone}</p>
          <p><b>Мессеж:</b> ${message || "-"}</p>

          <hr />

          <p><b>Огноо:</b> ${formattedDate}</p>
          <p><b>Цаг:</b> ${formattedTime}</p>
          <p><b>IP:</b> ${ipAddress}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}