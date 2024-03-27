import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "~/components/Footer";
import { CarouselCustom } from "~/components/v0/CarouselCustom";
import YoutubeEmbed from "~/components/VideoEmbed";
import Search from "~/components/Search";

export default async function Home() {
  return (
    <div>
      <div className="flex bg-seraph dark:bg-primary">
        <Navbar />
      </div>
      <div>
        <CarouselCustom />
      </div>
      <div className="flex justify-between mx-24 my-4">
        <div className="w-[600px]">
          <YoutubeEmbed embedId={"36aM4-qu3K8"} />
        </div>
        <div className="w-[600px]">
          <Search />
        </div>
      </div>
      <div className="flex bg-seraph">
        {/* w-full otherwise justify-content does not work */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
