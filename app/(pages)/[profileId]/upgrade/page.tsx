import Header from "@/app/components/landing-page/header";
import Button from "@/app/components/ui/button";

export default function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Header />
      <h2 className="text-2xl font-bold text-white">Escolha o plano</h2>

      <div className="flex gap-4 font-bold text-white">
        <Button>R$ 9,90 / mês</Button>
        <Button>R$ 99,90 Vitalício</Button>
      </div>
    </div>
  );
}
