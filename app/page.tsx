// * Global Imports
import Image from "next/image";

// * Local Imports
import { cn } from "@/lib/utils";
import Img01 from "@/assets/img/01.jpeg";
import Img02 from "@/assets/img/02.png";
import Img03 from "@/assets/img/03.png";
import Img04 from "@/assets/img/04.png";
import Img05 from "@/assets/img/05.png";
import { Header } from "@/components/header";
import { tiles } from "@/data/tiles";
import { GridTile } from "@/components/grid-tile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="w-[960px] max-w-full mx-auto p-6 h-full">
          <h1 className="tracking-wider font-medium leading-10">
            CASE STUDIES
          </h1>
          <div className="grid grid-cols-3 gap-4">
            {/* {tiles.map((tile, index) => (
              <GridTile
                className={tile.className}
                img={tile.img}
                text={tile.text}
                key={index}
              />
            ))} */}
            <GridTile
              className="col-span-2 row-span-1"
              img={Img01}
              text="Resumas"
            />
          </div>
        </div>
      </main>
    </>
  );
}
