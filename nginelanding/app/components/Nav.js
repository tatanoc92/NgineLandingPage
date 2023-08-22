import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  const navData = [
    {
      name: "Home",
      path: "/",
      icon: "",
    },
    {
      name: "About",
      path: "/about",
      icon: "",
    },
    {
      name: "Pricing",
      path: "/pricing",
      icon: "",
    },
  ];

  return (
    <nav className="">
      <div className="bg-slate-800 text-white p-4 flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center px-4">
          {navData.map((link) => {
            return (
              <Link className="px-4" href={link.path}>
                <div>{link.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
