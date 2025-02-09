import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import "server-only";
import { fileURLToPath } from "url";

const privateKeyFormatted = process.env
  .AUTH_FIREBASE_PRIVATE_KEY64!.split(String.raw`\n`)
  .join("\n");

export const firebaseCert = cert({
  projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
  clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
  privateKey: privateKeyFormatted,
});

// Instancia do app
if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
    storageBucket: process.env.AUTH_FIREBASE_STORAGE_BUCKET,
  });
}

export const db = getFirestore();

export const storage = getStorage().bucket();

export async function getDownloadUrlFromPath(path: string) {
  if (!path) return;

  const file = storage.file(path);

  const [url] = await file.getSignedUrl({
    action: "read",
    expires: "01-01-2500",
  });

  return url;
}
