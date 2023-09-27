import { ComponentProps } from '../../packages/core/component.type';
import useCoreComponent from '../../packages/core/useCoreComponent';
import { setEvents } from '../../packages/event/event';
import useState from '../../packages/state/useState';
import getLocalStorageBookmarks from '../../utils/Bookmarks/getBookmarks';
import setLocalStorageBookmark from '../../utils/Bookmarks/setBookmark';

export default function FeedItem(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: FeedItem,
    parent: props?.parent,
  });
  const [getBookmarks, setBookmark] = useState(
    componentObject,
    'bookmarks',
    getLocalStorageBookmarks()
  );

  function handleAddBookmark() {
    setLocalStorageBookmark(props?.post.postId);
    setBookmark((bookmarks: string[]) => [...bookmarks, props?.post.postId]);
  }

  setEvents([
    {
      componentKey: componentObject.key,
      selector: '.add-bookmark-button',
      action: 'click',
      handler: handleAddBookmark,
    },
  ]);

  componentObject.render = () => {
    return `
      <article class="feed-item">
        <a href="/post/${props?.post.postId}">
          <header class="post-header">
            <h3 class="post-title visibility-hidden">
              ${props?.post.userName}의 Post
            </h3>

            <button type="button" class="postor-profile">
              <figure>
                <div class="postor-image">
                  <img src="${props?.post.profileUrl}" alt="" />
                </div>

                <figcaption>
                  <dl>
                    <div class="postor-name">
                      <dt class="visibility-hidden">Poster Name</dt>
                      <dd>${props?.post.userName}</dd>
                    </div>
                    <div class="postor-id">
                      <dt class="visibility-hidden">Poster Id</dt>
                      <dd>${props?.post.userId}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </button>
          </header>

          <div class="post-content">
            <p>
              ${props?.post.contents}
              <img src="${props?.post.imageUrl}" alt="" />
            </p>
          </div>
        </a>

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
            <div>
              <dt>Number of Bookmarks</dt>
              <dd>${getBookmarks()}</dd>
            </div>
          </dl>

          <button type="button" class="add-bookmark-button" aria-label="Add post to Bookmarks">
            <i class="${
              props?.post.isBookmarked ? 'bx bx-bookmark' : 'bx bxs-bookmark'
            }"></i>
          </button>
        </footer>
      </article>
    `;
  };

  return () => componentObject;
}
