import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkImages from 'remark-images'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";


const postsDirectory = join(process.cwd(), '__posts/');

export async function getPostData(directory : string , id : string) {
    const fullPath = path.join(join(postsDirectory, directory), `${id}`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    var matterResult = matter(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkGfm)
      .use(remarkImages)
      .use(remarkRehype, {allowDangerousHtml: true})
      .use(rehypeKatex)
      .use(rehypePrettyCode)
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

  export function getAllPosts(directory : string) {
    const fileNames = fs.readdirSync(join(postsDirectory, directory))
    const filteredName = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, directory, `${fileName}`);
      if (fs.lstatSync(fullPath).isDirectory())
        return null
      return fileName
    }).filter((element) => element != null)

    const posts = filteredName
                  .map((fileName) => {
                    const fullPath = path.join(postsDirectory, directory, `${fileName}`);
                    const fileContents = fs.readFileSync(fullPath, 'utf8');
                  
                    // Use gray-matter to parse the post metadata section
                    var matterResult = matter(fileContents);
                    if (fileName)
                      matterResult.data['slug'] = `posts/${directory}/${fileName}`;
                    return matterResult.data
                  })
                  .filter((element) => element != null)
                  .sort((post1, post2) => (parseInt(post1.slug.replace(/[^0-9]/g, "")) < parseInt(post2.slug.replace(/[^0-9]/g, "")) ? -1 : 1))
    return posts
  }

  export function getAllPostIds(directory : string) {
    const fileNames = fs.readdirSync(join(postsDirectory, directory));
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName,
        },
      };
    });
  }

