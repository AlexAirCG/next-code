import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div className="font-extrabold text-2xl">
          <span className="text-blue-500">My</span>
          <span className="text-red-500">D</span>
          <span className="text-yellow-500">a</span>
          <span className="text-green-500">y</span>
          <span className="text-white">24</span>
        </div>
      </div>
    </Link>
  );
}
