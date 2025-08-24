import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-8 ">
      <div className="flex flex-col items-center gap-4 bg-[#34006B] text-white p-8 rounded-lg">

      <Image src="/logoArcadiumWhite.jpg" alt="logo" width={150} height={150}  />
      <h1 className="text-4xl">ArcadiumWeb</h1>

      <p className="font-bold w-96 text-center">Frontend do Arcadium: plataforma para avaliação e descoberta de jogos, com rankings, reviews e perfis personalizados.</p>
      </div>
    </div>
  );
}
