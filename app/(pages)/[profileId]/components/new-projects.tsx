"use client";

import Button from "@/app/components/ui/button";
import Modal from "@/app/components/ui/modal";
import TextArea from "@/app/components/ui/text-area";
import TextInput from "@/app/components/ui/text-input";
import { ArrowUpFromLine, Plus } from "lucide-react";
import React, { useState } from "react";

export default function NewProjects(profileId: { profileId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjetName] = useState("");
  const [projectDescription, setProjetDescription] = useState("");
  const [projectUrl, setProjetUrl] = useState("");
  const [projectImage, setProjetImage] = useState<string | null>("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  function triggerImageInput(id: string) {
    document.getElementById(id)?.click();
  }

  function handleImageInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;

    if (file) {
      const imageURL = URL.createObjectURL(file);
      return imageURL;
    }

    return null;
  }

  return (
    <div className="">
      <button
        onClick={handleOpenModal}
        className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center justify-center hover:border border-dashed "
      >
        <Plus className="size-10 text-accent-green" />
        <span className="">Novo projeto</span>
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10">
          <p className="text-white font-bold text-xl">Novo Projeto</p>
          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-3 text-xs">
              <div className="w-[100px] h-[100px] rounded-xl bg-background-tertiary overflow-hidden">
                {projectImage ? (
                  <img
                    src={projectImage}
                    alt="ProjectImage"
                    className="object-cover object-center"
                  />
                ) : (
                  <button
                    onClick={() => triggerImageInput("imageInput")}
                    className="w-full h-full"
                  >
                    100x100
                  </button>
                )}
              </div>
              <button
                onClick={() => triggerImageInput("imageInput")}
                className="text-white flex items-center gap-2"
              >
                <ArrowUpFromLine className="size-4" />
                <span>Adicionar imagem</span>
              </button>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
                onChange={(e) => setProjetImage(handleImageInput(e))}
              />
            </div>

            <div className="flex flex-col gap-4 w-[293px]">
              <div className="flex flex-col gap-1">
                <label htmlFor="project-name" className="text-white font-bold">
                  Titulo do projeto
                </label>
                <TextInput
                  id="project-name"
                  placeholder="Digite o nome do projeto"
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <label
                  htmlFor="project-description"
                  className="text-white font-bold"
                >
                  Descrição
                </label>
                <TextArea
                  id="project-description"
                  placeholder="Digite a descrição do projeto."
                  className="h-36"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="project-url" className="text-white font-bold">
                  URL do projeto
                </label>
                <TextInput
                  id="project-url"
                  placeholder="Digite a URL do seu projeto"
                  type="url"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <button className="font-bold text-white">Voltar</button>
            <Button>Salvar</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
