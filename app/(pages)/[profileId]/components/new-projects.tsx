import { Plus } from "lucide-react";

export default function NewProjects(profileId: { profileId: string }) {
  return (
    <button className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center justify-center hover:border border-dashed ">
      <Plus className="size-10 text-accent-green" />
      <span className="">Novo projeto</span>
    </button>
  );
}
