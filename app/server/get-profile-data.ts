import "server-only";
import { db } from "@/app/lib/firebase";

export type ProfileData = {
  userId: string;
  TotalVisits: number;
  createAt: number;
};

export async function getProfileData(profileId: string) {
  const snapshot = await db.collection("profiles").doc(profileId).get();

  return snapshot.data() as ProfileData;
}
