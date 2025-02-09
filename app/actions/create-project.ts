import { auth } from "@/app/lib/auth";
import { db, storage } from "@/app/lib/firebase";
import { profile } from "console";
import { randomUUID } from "crypto";
import { Timestamp } from "firebase-admin/firestore";
import { arrayBuffer } from "stream/consumers";

export async function createProject(formData: FormData) {
  const session = await auth();

  if (!session) return;

  const profileId = formData.get("profileId") as string;
  const projectName = formData.get("projectName") as string;
  const projectDescription = formData.get("projectDescription") as string;
  const projectUrl = formData.get("file") as string;
  const file = formData.get("file") as File;

  const generateId = randomUUID();
  // upload image -> /image/image.png
  const storageRef = storage.file(`project-images/${profileId}/${generateId}`);
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await storageRef.save(buffer);

  const imagePath = storageRef.name;

  try {
    await db
      .collection("projects")
      .doc(profileId)
      .collection("projects")
      .doc(generateId)
      .set({
        userId: session.user?.id,
        projectName,
        projectDescription,
        projectUrl,
        imagePath,
        createAt: Timestamp.now().toMillis(),
      });
  } catch (error) {
    console.log(error);
    return false;
  }
}
