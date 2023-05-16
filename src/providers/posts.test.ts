import { expect, test } from 'vitest';

import { loadAllPosts, loadPost } from './posts';

test('loadPost', async () => {
  const post = loadPost('example-post');
  expect(post.slug).toEqual('example-post');
  expect(post).toHaveProperty('data');
  expect(post).toHaveProperty('content');
});

test('loadAllPosts', async () => {
  const posts = await loadAllPosts();
  expect(posts[0]).toBeDefined();
});
