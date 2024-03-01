import { getAllPostIds, getAllPosts, getPostData} from "@/lib/api";
import Link from "next/link";

const Home = ({ posts }) => {
    return (
      <ul>
        {posts.map((post) => (
          <li>
          <Link href={`/${post.slug}`}> {post.created} - {post.title}</Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export async function getStaticProps() {
    // 게시물 데이터들을 가져옵니다.
    // 로컬에 있는 마크다운 파일을 가져오는 getAllPosts 과정은 이후에 설명하겠습니다.
    const posts = getAllPosts();
    // getStaticProps에서 반환하는 객체는 페이지 컴포넌트의 props로 넘어갑니다.                                  
    return {
      props: {
        posts : JSON.parse(JSON.stringify(posts)),
      },
    };
  }
  
  export default Home;