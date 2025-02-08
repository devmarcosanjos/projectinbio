"use client";

import { createLink } from "@/app/actions/create-link";
import { verifyLink } from "@/app/actions/verify-link";
import Button from "@/app/components/ui/button";
import TextInput from "@/app/components/ui/text-input";
import { sanitizeLink } from "@/app/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateLinkForm() {
  const router = useRouter();
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  function handLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value));
    setError("");
  }

  async function handleSubimt(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // quando user nao escreve um link
    if (link.length === 0) return setError("Escolha um link primeiro");

    // quando user escolhe link existente
    const isLinkTaken = await verifyLink(link);

    if (isLinkTaken) return setError("Desculpe, esse link está em uso.");

    // criar perfil
    const isLinkCreated = await createLink(link);

    if (!isLinkCreated) return "Erro ao criar o perfil. Tente novamente.";

    router.push(`/${link}`);
  }

  return (
    <div>
      <form onSubmit={handleSubimt} className="w-full flex items-center gap-2">
        <span className="text-white">projectinbio.com</span>
        <TextInput value={link} onChange={handLinkChange} />
        <Button className="w-[126px]">Criar</Button>
      </form>
      <div className="">
        <span className="text-accent-pink">{error}</span>
      </div>
    </div>
  );
}
