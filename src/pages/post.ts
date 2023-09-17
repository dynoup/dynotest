import PostDetail from '../components/Post/PostDetail';
import render from '../core/render';
import useCoreComponent from '../core/useCoreComponent';
import { ComponentProps } from '../types/core/component';

export default function PostPage(props?: ComponentProps) {
  const componentObject = useCoreComponent({ component: PostPage });

  const PostDetailInstance = PostDetail();

  componentObject.render = () => {
    return `
        <section class="post section">
          <header class="section-header">
            <button type="button" aria-label="Go to previos page">
              <i class="bx bx-arrow-back"></i>
            </button>
            <h2 class="section-title">Post</h2>
          </header>

          <div class="section-content">
            ${render(PostDetailInstance)}
          </div>
        </section>
      `;
  };

  return () => componentObject;
}
