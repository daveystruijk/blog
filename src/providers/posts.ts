import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import { join, resolve } from 'path';

const POSTS_DIR = resolve('posts');

export function loadPost(slug: string) {
  const path = join(POSTS_DIR, `${slug}.md`);
  const contents = readFileSync(path, 'utf8');
  const post = matter(contents);
  return { slug, ...post };
}

export async function loadAllPosts() {
  const filenames = readdirSync(POSTS_DIR);
  return filenames.map((f) => f.split('.md')[0]).map(loadPost);
}
