"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import ValentineCard from "./components/ValentineCard";
import PersonalizeButton from "./components/PersonalizeButton";

function HomeContent() {
  const searchParams = useSearchParams();
  const nameFromParams = searchParams.get("name");
  const personName = nameFromParams ?? "mi amor";

  return (
    <>
      <PersonalizeButton />
      <ValentineCard personName={personName} />
    </>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-pink-100">
      <Suspense fallback={<div>Loading...</div>}>
        {/* The useSearchParams() call happens *inside* HomeContent, 
            which is fully wrapped by Suspense. */}
        <HomeContent />
      </Suspense>
    </div>
  );
}
