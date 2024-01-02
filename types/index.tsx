import { StaticImageData } from "next/image";

export interface Tile {
  text: string;
  className?: string;
  img: StaticImageData;
}
