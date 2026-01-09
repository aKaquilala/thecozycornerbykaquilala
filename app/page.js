import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-50">
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 py-24 px-10 bg-white rounded-lg shadow">
        <Image
          src="/images/book9.png"
          alt="Angeline's Cozy Corner"
          width={160}
          height={160}
          priority
        />

        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-amber-800">
            Welcome to Angeline's Cozy Corner ₊✩‧₊˚౨ৎ˚₊✩‧₊
          </h1>
          <p className="mt-4 text-amber-700">
            Angeline`s cozy book nook, serving hand-picked reads for every reader`s heart. ⋆𐙚 ̊
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/books"
            className="flex h-12 items-center justify-center rounded-full bg-amber-700 px-6 text-white hover:bg-amber-800"
          >
            Browse Books
          </Link>

          <Link
            href="/about"
            className="flex h-12 items-center justify-center rounded-full border border-amber-700 px-6 text-amber-700 hover:bg-amber-50"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}