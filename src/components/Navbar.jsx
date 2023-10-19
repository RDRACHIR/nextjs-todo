import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-800">
      <div className="container mx-auto flex justify-between items-center py-2">
        <Link href="/" className="text-slate-300 hover:text-slate-100">
          <h3 className="font-bold text-3xl">Todo List - NextJs</h3>
        </Link>
        <ul className="flex gap-x-2 text-lg font-bold">
          <li>
            <Link href="/" className="text-slate-300 hover:text-slate-100">
              Tasks
            </Link>
          </li>
          <li>
            <Link href="/new" className="text-slate-300 hover:text-slate-100">
              New
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-300 hover:text-slate-100">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
