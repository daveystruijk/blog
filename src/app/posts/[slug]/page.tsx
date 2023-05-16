import { remark } from 'remark';
import html from 'remark-html';

import { loadAllPosts, loadPost } from '../../../providers/posts';

export async function generateStaticParams() {
  const posts = await loadAllPosts();
  return posts.map((post) => ({ params: { slug: post.slug } }));
}

async function renderMarkdown(content: string) {
  const result = await remark().use(html).process(content);
  return <div dangerouslySetInnerHTML={{ __html: result.toString() }} />;
}

export default async function Post({ params }: any) {
  const { slug } = params;
  const post = loadPost(slug);

  return <div>{renderMarkdown(post.content)}</div>;
}
