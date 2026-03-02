import Image from "next/image";
import Link from "next/link";

interface Props {
  scr: string;
  title: string;
  description: string;
  href: string;
}

export default function Card({ scr, title, description, href }: Props) {
  return (
    <Link href={href} className="hover:translate-3  duration-100 ease-linear" target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col h-80 w-70 rounded-lg border-2">
        <div className="bg-red-500 flex-1 relative">
          <Image src={scr} alt="Imagem projeto" fill />
        </div>
        <div className="flex-1 border-t border-black mt-1">
          <h2 className="text-white text-center text-3xl">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}
