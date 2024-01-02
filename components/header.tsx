// * Global Imports
import Image from "next/image";

// * Local Imports
import logo from "@/assets/img/logo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="h-16 flex items-center px-6">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="huxai-logo"
            className={"h-12 w-fit object-contain cursor-pointer"}
            priority
          />
        </Link>
      </div>
    </header>
  );
};
