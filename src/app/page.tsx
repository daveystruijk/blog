import Link from 'next/link';

import { loadAllPosts } from '../providers/posts';

export default async function Home() {
  const posts = await loadAllPosts();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.data.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
