"use client";

import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-800 text-white p-4 flex justify-between"
      >
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
          <Button color={"primary"} text={"Become a beta-tester"} />
        </div>
      </motion.div>
    </nav>
  );
}
