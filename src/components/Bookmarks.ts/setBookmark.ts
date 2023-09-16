export function getBookmarks() {
  const bookmarksJson = localStorage.getItem('bookmarks');

  return bookmarksJson ? JSON.parse(bookmarksJson) : null;
}

export function setBookmark(postId: string) {
  let bookmarks = getBookmarks();
  bookmarks = bookmarks ? [postId, ...bookmarks] : [postId];

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
