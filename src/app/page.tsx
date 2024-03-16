import Link from "next/link";
import Navbar from "./_components/Navbar";
import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  return (
    <div className="flex bg-red-200">
      <Navbar /> 
    </div>
  );
}


