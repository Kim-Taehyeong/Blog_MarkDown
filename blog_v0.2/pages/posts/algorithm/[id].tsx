import Header from '@/components/Header';
import { getPostData, getAllPostIds } from '../../../lib/api';
import Tag from '@/components/tag';
import MarkdownContent from '@/components/markdownContent';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Posts', href: '/posts', current: true },
  { name: 'Projects', href: '#', current: false },]


export async function getStaticPaths() {
  const paths = getAllPostIds('algorithm');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params} : GetIdParams) {
  // Add the "await" keyword like this:
  const postData = await getPostData('algorithm', params.id);
  return {
    props: {
      postData : JSON.parse(JSON.stringify(postData)),
    },
  };
}

export default function Post({postData} : PostProp) {
  
  postData.tag.map((item, index) => {
  })
  return (
    <div>
      <Header navigation={navigation}></Header>
      <div className='my-20'>
        <div className="grid gap-4 grid-cols-10 grid-rows-1">
          <div className="grid grid-cols-subgrid col-span-2"></div>
          <div className="gird gird=cols-subgrid col-span-6">
            <Tag postData={postData}></Tag>
            <MarkdownContent postData={postData}></MarkdownContent>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    
  )
}