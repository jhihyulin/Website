import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-4xl font-bold text-center sm:text-left">
          Hi, there!
        </p>
        <p className="flex flex-row text-2xl sm:text-left text-center gap-4">
          I'm jhihyu, a hobbyist developer from Taiwan.
        </p>
        <div className="flex flex-row gap-4">
        </div>
      </main>
    </div>
  );
}
