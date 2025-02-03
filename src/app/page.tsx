import ValentineCard from "./components/ValentineCard";
import PersonalizeButton from "./components/PersonalizeButton";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const personName = typeof searchParams.name === "string" ? searchParams.name : "mi amor";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-pink-100">
      <PersonalizeButton />
      <ValentineCard personName={personName} />
    </div>
  );
}
