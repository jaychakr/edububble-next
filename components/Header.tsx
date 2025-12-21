import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-2 border border-black bg-crimson font-chalkduster text-white rounded-xl">
      <div className="flex">
        <Image
          className=""
          src="/bubbles.svg"
          alt="Bubbles"
          width={30}
          height={20}
          priority
        />
        <h1 className="p-1">EduBubble</h1>
        <Image
          className=""
          src="/bubbles.svg"
          alt="Bubbles"
          width={30}
          height={20}
          priority
        />
      </div>
      <nav className="space-x-2">
        <button className="bg-blue-500 border border-black py-1 px-2 rounded-full">Log In</button>
        <button className="bg-blue-500 border border-black py-1 px-2 rounded-full">Sign Up</button>
      </nav>
    </header>
  );
}