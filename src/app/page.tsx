import ValentineCard from "./components/ValentineCard";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const personName = typeof searchParams.name === "string" ? searchParams.name : "My Valentine";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-pink-100">
      <ValentineCard personName={personName} />
    </main>
  );
}
