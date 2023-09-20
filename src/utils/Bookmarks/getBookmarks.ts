export function getBookmarks() {
  const bookmarksJson = localStorage.getItem('bookmarks');

  return bookmarksJson ? JSON.parse(bookmarksJson) : null;
}
