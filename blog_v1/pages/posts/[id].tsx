import { getPostData, getAllPostIds } from '../../lib/api';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  return {
    props: {
      postData : JSON.parse(JSON.stringify(postData)),
    },
  };
}

export default function Post({ postData }) {
  return (
    <div>
      {postData.title}
      <br />
      {postData.author}
      <br />
      {postData.created}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}