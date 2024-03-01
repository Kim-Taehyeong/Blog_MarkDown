import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {read} from 'to-vfile'
import {unified} from 'unified'


const postsDirectory = join(process.cwd(), '__posts');

export function getPostSlugs() {
  // fs 모듈을 통해서 파일 디렉토리를 읽고 __posts 안에 있는 파일들(마크다운)을 가져옵니다.
  return fs.readdirSync(postsDirectory);
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    var matterResult = matter(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype, {allowDangerousHtml: true})
      .use(rehypeRaw)
      .use(rehypeStringify)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }

  export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
                  .map((fileName) => {
                    const fullPath = path.join(postsDirectory, `${fileName}`);
                    const fileContents = fs.readFileSync(fullPath, 'utf8');
                  
                    // Use gray-matter to parse the post metadata section
                    var matterResult = matter(fileContents);
                    matterResult.data['slug'] = `posts/${fileName.replace(/\.md$/, '')}`;
                    return matterResult.data
                  })
                  .sort((post1, post2) => (parseInt(post1.slug.replace(/[^0-9]/g, "")) < parseInt(post2.slug.replace(/[^0-9]/g, "")) ? -1 : 1))
    return posts
  }

  export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }