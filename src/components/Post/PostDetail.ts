import { setEvents } from '../../core/event';
import useCoreComponent from '../../core/useCoreComponent';
import { ComponentProps } from '../../types/core/component';
import { getBookmarks, setBookmark } from '../Bookmarks.ts/setBookmark';

export default function PostDetail(props?: ComponentProps) {
  const coreComponentProps = useCoreComponent('PostDetail');

  function handleAddBookmark() {
    setBookmark(`postId`);
    console.log('[getBookmarks]', getBookmarks());
  }

  setEvents([
    {
      selector: '.add-bookmark-button',
      action: 'click',
      handler: handleAddBookmark,
    },
  ]);

  return {
    ...coreComponentProps,
    render() {
      return `
        <article class="post-detail">
          <header class="post-header">
            <h3 class="post-title visibility-hidden">Daniel Lee의 Post</h3>
    
            <button type="button" class="postor-profile">
              <figure>
                <div class="postor-image">
                  <img src="" alt="" />
                </div>
    
                <figcaption>
                  <dl>
                    <div class="postor-name">
                      <dt class="visibility-hidden">Poster Name</dt>
                      <dd>Daniel Lee</dd>
                    </div>
                    <div class="postor-id">
                      <dt class="visibility-hidden">Poster Id</dt>
                      <dd>@dylayed</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </button>
          </header>
    
          <div class="post-content">
            <p>
              주변 개발자 중 대학때 전공이 컴퓨터 쪽이 아니라 수학/물리같은
              순수과학인 경우가 생각보다 많은데. 나: 오 그럼 어쩌다 개발자가 된거야?
              A: 아 {수학|물리}는 정말 좋아하는데 내가 잘 못해서 다른 돈 벌 직업을
              찾다보니... 같은 케이스를 자주 만난다.
            </p>
          </div>
    
          <footer class="post-footer">
            <dl class="post-info">
              <div>
                <dt>Posted Time</dt>
                <dd>
                  <time datetime="00:53">12: 53 AM</time>
                </dd>
              </div>
              <div>
                <dt>Posted Date</dt>
                <dd>
                  <time datetime="2023-09-10">Sep 10, 2023</time>
                </dd>
              </div>
              <div>
                <dt>Number of Views</dt>
                <dd>32.2K</dd>
              </div>
            </dl>
    
            <button type="button" class="add-bookmark-button" aria-label="Add post to Bookmarks">
              <i class="bx bx-bookmark"></i>
            </button>
          </footer>
        </article>
      `;
    },
  };
}
