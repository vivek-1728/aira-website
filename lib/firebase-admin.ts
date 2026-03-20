// ============================================================
// 🔒 Firebase Admin SDK — Server-Side Only
// ============================================================
// This module initializes the Firebase Admin SDK using
// credentials stored in environment variables (.env.local).
// It is ONLY imported by server-side code (API routes).
// ============================================================

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Prevent re-initialization during hot-reload
if (getApps().length === 0) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // .env stores \n as literal chars — convert to real newlines
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

// Export the Firestore instance for use in API routes
export const adminDb = getFirestore();
