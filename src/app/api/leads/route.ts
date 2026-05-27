import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type LeadRequestBody = {
  name?: string;
  email?: string;
  message?: string;
  acceptedPrivacy?: boolean;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const gmailUser = process.env.GMAIL_SMTP_USER;
const gmailAppPassword = process.env.GMAIL_SMTP_APP_PASSWORD;
const contactEmailTo = process.env.CONTACT_EMAIL_TO;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json(
      {
        message: "Faltan las variables de entorno de Supabase.",
      },
      { status: 500 }
    );
  }

  if (!gmailUser || !gmailAppPassword || !contactEmailTo) {
    return NextResponse.json(
      {
        message: "Faltan las variables de entorno de Gmail SMTP.",
      },
      { status: 500 }
    );
  }

  let body: LeadRequestBody;

  try {
    body = (await request.json()) as LeadRequestBody;
  } catch {
    return NextResponse.json(
      {
        message: "La solicitud no tiene un formato válido.",
      },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim().toLowerCase() ?? "";
  const message = body.message?.trim() ?? "";
  const acceptedPrivacy = body.acceptedPrivacy === true;

  if (!name) {
    return NextResponse.json(
      {
        message: "El nombre es obligatorio.",
      },
      { status: 400 }
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      {
        message: "El email no es válido.",
      },
      { status: 400 }
    );
  }

  if (!acceptedPrivacy) {
    return NextResponse.json(
      {
        message: "Debes aceptar la Política de Privacidad.",
      },
      { status: 400 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { error: supabaseError } = await supabase.from("book_leads").insert({
    name,
    email,
    message: message || null,
    accepted_privacy: true,
    accepted_privacy_at: new Date().toISOString(),
    source: "landing_biohacking_poker",
  });

  if (supabaseError) {
    console.error("Supabase insert error:", supabaseError);

    return NextResponse.json(
      {
        message: `No se ha podido guardar en Supabase: ${supabaseError.message}`,
      },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = message
    ? escapeHtml(message).replaceAll("\n", "<br />")
    : "Sin mensaje.";

  try {
    await transporter.sendMail({
      from: `"Biohacking Póker" <${gmailUser}>`,
      to: contactEmailTo,
      replyTo: email,
      subject: `Nueva solicitud del libro - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h1 style="font-size: 22px; margin-bottom: 16px;">
            Nueva solicitud desde la landing
          </h1>

          <p><strong>Nombre:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>

          <p><strong>Mensaje:</strong></p>

          <div style="padding: 14px; border: 1px solid #e5e7eb; border-radius: 10px; background: #f9fafb;">
            ${safeMessage}
          </div>

          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

          <p style="font-size: 13px; color: #6b7280;">
            El usuario ha aceptado la Política de Privacidad antes de enviar el formulario.
          </p>
        </div>
      `,
      text: `
Nueva solicitud desde la landing

Nombre: ${name}
Email: ${email}

Mensaje:
${message || "Sin mensaje."}

El usuario ha aceptado la Política de Privacidad antes de enviar el formulario.
      `,
    });
  } catch (emailError) {
    console.error("Gmail SMTP error:", emailError);

    return NextResponse.json(
      {
        message:
          "Los datos se han guardado en Supabase, pero no se ha podido enviar el correo.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Solicitud guardada y correo enviado correctamente.",
  });
}