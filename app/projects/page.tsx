import Card from "@/components/card";
import Link from "next/link";

export default function projects() {
  return (
    <main className="h-screen w-screen bg-slate-950 flex flex-col align-middle items-center">
      <div className="w-screen  flex justify-center items-center h-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg border-b-2 mb-20">
        <h1 className="text-5xl text-blue-950 hover:text-white duration-600 ease-linear hover:">
          Meus Projetos
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10">
        <Card
          title="Calculadora"
          description="Calculadora com useEffect React"
          scr="/04559100001_2.jpg"
          href="https://github.com/Henriqueheld/Real_SkyRoute"
        />
        <Card
          title="SkyRoute"
          description="Site ficticio sobre frete de drones"
          scr="/Drone-ifood.webp"
          href="https://github.com/Henriqueheld/Real_SkyRoute"
        />
        <Card
          title="Exercicios C"
          description="Meu primeiros exercicios de logica de programação"
          scr="/images.jpg"
          href="https://github.com/Henriqueheld/lista-c-complementar-Henrique"
        />
        <Link
          href="http://localhost:3000/contact"
        >
        <button className="bg-black min-w-30 w-auto h-10 rounded-lg border border-white hover:cursor-pointer translate-0.5" >Contate-me</button>
        </Link>
      </div>
    </main>
  );
}
