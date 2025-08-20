import React, { useMemo, useState } from "react";

// === DoceEncantoSite completo ===
export default function DoceEncantoSite() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-rose-50 text-gray-800">
      <img src="/logo.png" alt="Logo Doce Encanto" className="w-32 h-32 mb-6" />
      <h1 className="text-4xl font-bold text-rose-600 mb-4">Doce Encanto</h1>
      <p className="text-lg max-w-md text-center mb-6">
        Bem-vindo ao Doce Encanto! Aqui você encontra os bolos no pote mais
        deliciosos da cidade. Experimente nossos sabores irresistíveis!
      </p>
      <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full shadow-md">
        Fazer Pedido
      </button>
    </div>
  );
}