export default function Hero() {
  return (
    <div className="flex border">
      <div className="w-full flex flex-col gap-2 mt-[35vh] border">
        <h1 className="text-5xl text-white leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1>

        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe eles com o mundo.
          <br />
          Acompanhe o engajamento com o Analytics de cliques.
        </h2>

        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">projectbio.com/</span>
          <input type="text" />
          <button>Criar agora</button>
        </div>

        <div className="w-full flex items-center justify-center bg-[redial-gradient(circle_at_50%_50%,#4b2dbb, transparent_55%])">
          <div className="">
            {/* <UserCard /> */}
            <div className="absolute -bottom-[7%] -right-[-45%]">
              {/* <TotalVisits /> */}
            </div>
            <div className="absolute top-[20%] -left-[45%] -z-10">
              {/* <ProjectCard /> */}
            </div>
            <div className="absolute top-[5%] -left-[55%] -z-10">
              {/* <ProjectCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
