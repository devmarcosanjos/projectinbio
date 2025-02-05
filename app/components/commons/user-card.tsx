import Button from "@/app/components/ui/button";
import { Facebook, Github, Instagram, Plus, Twitter } from "lucide-react";

export default function UserCard() {
  const icons = [Facebook, Github, Instagram, Plus, Twitter];

  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5  border-write border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48 ">
        <img
          src="/me.webp"
          alt="Marcos"
          className="rounded-full object-cover w-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            Marcos Anjos
          </h3>
        </div>
        <p className="opacity-40">"Eu faço produtos para a internet"</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          {icons.map((Icon, index) => (
            <button
              key={index}
              className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[##2e2e2e]"
            >
              <Icon />
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          <Button className="w-full">Templete SaaS - Compre agora</Button>
          <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[##2e2e2e]">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
}
