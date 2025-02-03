"use client";
import { useSearchParams } from "next/navigation";

import ValentineCard from "./components/ValentineCard";
import PersonalizeButton from "./components/PersonalizeButton";

export default function Home() {
  const searchParams = useSearchParams();
  const nameFromParams = searchParams.get("name");
  const personName = nameFromParams ?? "mi amor";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-pink-100">
      <PersonalizeButton />
      <ValentineCard personName={personName} />
    </div>
  );
}
