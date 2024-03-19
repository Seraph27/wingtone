import Link from "next/link";
import Navbar from "../components/Navbar";
import { CarouselCustom } from "~/components/v0/CarouselCustom";
import { api } from "~/trpc/server";
import { Carousel } from "~/components/ui/carousel";

export default async function Home() {
  return (
    <div>
      <div className="flex bg-seraph">
        <Navbar /> 
      </div>
      <div>
        <CarouselCustom/>
      </div>
    </div>
  );
}


