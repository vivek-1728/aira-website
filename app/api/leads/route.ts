// ============================================================
// POST /api/leads — Secure server-side lead submission
// ============================================================
// This API route receives form data from the contact page and
// writes it to Firestore using the Admin SDK. No Firebase
// credentials are ever sent to the browser.
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const adminDb = getAdminDb();

    // Parse the incoming JSON body
    const body = await req.json();
    const { name, email, projectType, budget, message } = body;

    // ── Basic server-side validation ──────────────────────────
    if (!name || !email || !projectType || !budget || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ── Write to Firestore "leads" collection ────────────────
    const docRef = await adminDb.collection("leads").add({
      name,
      email,
      projectType,
      budget,
      message,
      status: "new",                          // lifecycle tracking
      createdAt: FieldValue.serverTimestamp(), // exact submission time
    });

    // ── Send Email Notification via Resend ───────────────────
    try {
      if (!process.env.RESEND_API_KEY) {
        console.warn("RESEND_API_KEY is missing. Skipping email notification.");
      } else {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Aira.ai Leads <onboarding@resend.dev>',
          to: 'kappativivekananda@gmail.com', // MUST MATCH RESEND VERIFIED EMAIL
          subject: `New Lead: ${projectType.toUpperCase()} Project from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>🚨 New Lead Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget Range:</strong> ${budget}</p>
            <br/>
            <h3>Project Details:</h3>
            <p style="white-space: pre-wrap; background: #f4f4f5; padding: 16px; border-radius: 8px;">${message}</p>
          </div>
        `
        });
        console.log("Email notification sent successfully.");
      }
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // We don't fail the whole request if just the email fails
    }

    return NextResponse.json(
      { success: true, id: docRef.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit lead. Please try again." },
      { status: 500 }
    );
  }
}
