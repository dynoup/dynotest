import { rest } from 'msw';
import { posts, trends } from './data';

export const handlers = [
  rest.get('/api/trends', (req, res, ctx) => {
    return res(ctx.json({ trends }));
  }),
  rest.get('/api/posts', (req, res, ctx) => {
    return res(ctx.json({ posts }));
  }),
  rest.get('/api/posts/:postId', (req, res, ctx) => {
    const { postId } = req.params;
    const post = posts.find((post) => post.postId === postId);

    return post
      ? res(ctx.json({ post }))
      : res(
          ctx.status(404),
          ctx.json({
            errorMessage: 'Not Found!!!!!!!!',
          })
        );
  }),
];
