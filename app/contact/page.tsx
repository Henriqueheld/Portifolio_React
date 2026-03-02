"use client";

import { useMemo, useEffect, useState } from "react";

export default function contact() {
  const [email, setEmail] = useState("");
  const error = useMemo(() => {
    return !email.includes("@");
  }, [email]);

  //   const [error, setError] = useState(false);

  //   useEffect(() => {
  //     if(email.includes("@")){
  //         setError(false);
  //     }else{
  //         setError(true);
  //     }
  //     }, [email]);

  // console.log(error)

  function getEmail() {
    if (error) return;
    window.open(
      `https://wa.me/5541998282712?text=Email Recebido: ${email}`,
    );
  }

  return (
    <main className="w-screen h-screen flex flex-col gap-16 items-center justify-center ">
      <h1 className="text-6xl">Contato</h1>
      <div>
        <p>Digite seu gmail para eu entrar em contato</p>
        <input
          type="email"
          placeholder="Digite seu gmail"
          className="border border-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p className="text-red-500">Email inválido</p>}
        <button
          className="cursor-pointer border border-white py-2 rounded-full px-10 disabled:cursor-not-allowed disabled:opacity-20"
          onClick={() => getEmail()}
          disabled={error}
        >
          Enviar
        </button>
      </div>
    </main>
  );
}
