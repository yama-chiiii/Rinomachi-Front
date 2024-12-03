import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center font-mPlus font-semibold text-2xl">
      <div className="w-1/2 h-screen bg-brown-light text-red-dark">
        <Link href={"/search"} className="text-120">Search</Link>
      </div>
    </div>
  );
}

