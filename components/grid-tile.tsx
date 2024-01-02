// * Global/Package Imports
import Image from "next/image";

// * Local Imports
import { Tile } from "@/types";
import { cn } from "@/lib/utils";

export const GridTile = ({ text, img, className }: Tile) => {
  return (
    <div
      className={cn(
        "group min-h-[240px] rounded-md p-6 max-md:col-span-1 overflow-hidden relative flex items-end",
        className
      )}
    >
      <span
        className={cn(
          "text-lg group-hover:text-3xl text-white",
          "font-medium group-hover:font-extrabold",
          "tracking-wider transition-all cursor-default"
        )}
      >
        {text}
      </span>
      <div className="bg-gradient-to-t from-[#000a] from-5% group-hover:bg-[#000a] transition-all absolute w-full h-full inset-0 z-[-5]" />
      <Image
        src={img}
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
        alt=""
      />
    </div>
  );
};
