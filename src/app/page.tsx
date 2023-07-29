import Link from 'next/link';

import { loadAllPosts } from '../providers/posts';

export default async function Home() {
  const posts = await loadAllPosts();

  return (
    <main>
      <h1 className="text-4xl font-extrabold">Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
              {post.data.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
