import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-4 pt-5">
        <li className="text-lg font-semibold">
          <Link href={"/home"}>Home</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
