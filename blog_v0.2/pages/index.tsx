import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Posts', href: '/posts', current: false },
  { name: 'Projects', href: '#', current: false },]

export default function Home({posts} : any) {
  return (
    <main>
      <Header navigation={navigation}></Header>
      <p>Home...</p>
    </main>
  );
}
