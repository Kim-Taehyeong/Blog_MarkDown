import Header from "@/components/Header";
import { getAllPosts } from "@/lib/api";
import { Inter } from "next/font/google";
import Link from "next/link";

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Posts', href: '/posts', current: true },
  { name: 'Projects', href: '#', current: false },]


export default function Home({posts} : any) {
  const contents = [
    {
      title: 'Algorithm',
      description: '알고리즘 문제 풀이에 관한 포스트',
      href: './posts/algorithm',
      imageUrl:
        '/algorithm.png',
    },
    {
      title: 'Blog',
      description: '블로그 제작기에 관한 포스트',
      href: './blog',
      imageUrl:
        '/blog.png',
    },
    // More people...
  ]
    return (
      <div>
      <Header navigation = {navigation}></Header>
        <div className="bg-white py-24 sm:py-12">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">다양한 포스트들</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                다양한 포스트들을 작성하면서 개발 후기들을 기록하는 공간입니다. 항상 많은 글을 적으려고 하지만 지금 처럼 적을 글이 생각이 안나네요.
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {contents.map((content) => (
                <li key={content.title}>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16" src={content.imageUrl} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        <a href={content.href}>{content.title}</a>
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{content.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  } 

