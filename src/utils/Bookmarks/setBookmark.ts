import getBookmarks from './getBookmarks';

export default function setBookmark(postId: string) {
  let bookmarks = getBookmarks();
  bookmarks = bookmarks ? [postId, ...bookmarks] : [postId];

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
