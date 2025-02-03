import "./globals.css";
import type { Metadata } from "next";
import { DynaPuff } from "next/font/google";
import type React from "react"; // Import React

const inter = DynaPuff({ subsets: ["latin"] });

export async function generateMetadata({
  searchParams = {},
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
} = {}): Promise<Metadata> {
  const personName = typeof searchParams.name === "string" ? searchParams.name : "My Valentine";

  return {
    title: `Valentine's Card for ${personName} | Imtiaz Raqib`,
    description: `A cute interactive Valentine's card for ${personName}. A cute lil project to show some love by Imtiaz Raqib.`,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="fixed bottom-0 left-0 right-0 py-4 text-center bg-pink-100 text-gray-700">
          <p>
            Made with ☕️ and ❤️ by{" "}
            <a className="underline decoration-pink-500" href="https://imtiazraqib.com" target="_blank">
              Imtiaz Raqib
            </a>
            .
          </p>
          <p className="text-xs">
            An adaptation from{" "}
            <a className="underline decoration-pink-500" href="https://mewtru.com/valentine" target="_blank">
              mewtru
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
