import React from "react";

export const metadata = {
  title: "Arcadium",
  description: "Plataforma para reviews e rankings de jogos"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
