import Link from "next/link";
import Header from "./component/Header";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center font-mPlus font-semibold text-2xl">
      <Header/>
      <div className="w-full lg:w-1/2 min-h-screen flex bg-brown-light text-red-dark">
        <Link href={"/search"} className="mt-120 text-120">Search</Link>
      </div>
    </div>
  );
}

