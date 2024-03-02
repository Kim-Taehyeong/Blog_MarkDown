import Header from "@/components/Header";
import Tag from "@/components/tag";
import { getAllPosts } from "@/lib/api";
import { Inter } from "next/font/google";
import Link from "next/link";

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Posts', href: '/posts', current: true },
  { name: 'Projects', href: '#', current: false },]

export default function Home({posts} : any) {
  return (
    <div>
    <Header navigation={navigation}></Header>
      <div className="bg-white py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Algorithm</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              알고리즘 풀이 공간입니다.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-4 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post : MetaPost) => (
              <article key={post.slug} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.created} className="text-gray-500">
                    {post.created}
                  </time>
                  <div className="mx-auto ml-0">
                    <Tag postData={post}></Tag>
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a className="hyperlink" href={`/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
    const posts = getAllPosts('algorithm');
                                     
    return {
      props: {
        posts : JSON.parse(JSON.stringify(posts)),
      },
    };
  }
