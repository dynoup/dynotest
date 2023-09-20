import PostDetail from '../components/Post/PostDetail';
import { ComponentProps } from '../packages/core/component.type';
import render from '../packages/core/render';
import useCoreComponent from '../packages/core/useCoreComponent';

export default function PostPage(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: PostPage,
    parent: props?.parent,
  });

  const PostDetailInstance = PostDetail({ parentComponent: componentObject });

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
