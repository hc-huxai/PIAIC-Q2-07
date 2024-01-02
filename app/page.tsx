// * Local Imports
import Img01 from "@/assets/img/01.jpeg";
import Img02 from "@/assets/img/02.png";
import Img03 from "@/assets/img/03.png";
import Img04 from "@/assets/img/04.png";
import Img05 from "@/assets/img/05.png";
import { Header } from "@/components/header";
// import { tiles } from "@/data/tiles";
import { GridTile } from "@/components/grid-tile";
import { Tile } from "@/types";

export default function Home() {
  const tiles: Tile[] = [
    {
      img: Img01,
      text: "Resumas",
      className: "col-span-2",
    },
    {
      img: Img02,
      text: "Recruitment",
      className: "row-span-2",
    },
    {
      img: Img03,
      text: "Just count it!",
      className: "row-span-2",
    },
    {
      img: Img04,
      text: "FlipFlip",
      className: "",
    },
    {
      img: Img05,
      text: "Beauty Spaces",
      className: "col-span-2",
    },
  ] as const;

  return (
    <>
      <Header />
      <main>
        <div className="w-[960px] max-w-full mx-auto p-6 h-full">
          <h1 className="tracking-wider font-medium leading-10">
            CASE STUDIES
          </h1>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 w-full">
            {tiles.map((tile, index) => {
              return (
                <GridTile
                  className={tile.className}
                  img={tile.img}
                  text={tile.text}
                  key={index}
                />
              );
            })}
            {/* <GridTile
              className="col-span-2 row-span-1"
              img={Img01}
              text="Resumas"
            /> */}
          </div>
        </div>
      </main>
    </>
  );
}
