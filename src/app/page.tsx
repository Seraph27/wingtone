import Link from "next/link";
import Navbar from "./components/Navbar";
import { CreatePost } from "~/app/components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  return (
    <div className="flex bg-red-200">
      <Navbar /> 
    </div>
  );
}


