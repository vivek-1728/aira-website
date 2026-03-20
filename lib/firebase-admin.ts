// ============================================================
// 🔒 Firebase Admin SDK — Server-Side Only
// ============================================================
// This module initializes the Firebase Admin SDK using
// credentials stored in environment variables (.env.local).
// It is ONLY imported by server-side code (API routes).
// ============================================================

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Lazy-load initialization so Next.js doesn't crash during build time
export function getAdminDb() {
  if (getApps().length === 0) {
    // Check if variables exist to prevent silent failures
    if (!process.env.FIREBASE_PROJECT_ID) {
      console.warn("Firebase Admin missing FIREBASE_PROJECT_ID");
    }

    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID?.trim(),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL?.trim(),
        // .env stores \n as literal chars — convert to real newlines
        // Vercel sometimes adds quotes to multiline strings, strip them
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/(^"|"$)/g, "").trim()
          : undefined,
      }),
    });
  }

  return getFirestore();
}

