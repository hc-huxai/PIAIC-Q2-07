import Img01 from "@/assets/img/01.jpeg";
import Img02 from "@/assets/img/02.png";
import Img03 from "@/assets/img/03.png";
import Img04 from "@/assets/img/04.png";
import Img05 from "@/assets/img/05.png";
import { Tile } from "@/types";

export const tiles: Tile[] = [
  {
    img: Img01,
    text: "Resumas",
    className: "col-start-1 col-end-3 row-span-1",
  },
  {
    img: Img02,
    text: "Recruitment",
    className: "col-span-1 row-span-2",
  },
  {
    img: Img03,
    text: "Just count it!",
    className: "col-span-1 row-span-2",
  },
  {
    img: Img04,
    text: "FlipFlip",
    className: "col-span-1 row-span-1",
  },
  {
    img: Img05,
    text: "Beauty Spaces",
    className: "col-span-2 row-span-1",
  },
];
