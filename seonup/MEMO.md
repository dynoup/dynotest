- [x] 렌더링
  - [x] diff
  - [x] createRoot
  - [x] Component // FIXME: 인스턴스들간에 function, 변수의 참조값을 공유하고 있음.
- [x] 컴포넌트 구성
  - [ ] App <----vvv
    - [ ] Nav
    - [ ] Trend
      - [ ] TrendItem
  - [ ] Feed
    - [ ] FeedItem
  - [ ] Post
    - [ ] Comment
- [x] DOM 이벤트 관리 <----vvv
- [ ] HTTP 요청
  - [ ] MSW
- [ ] 라우팅 <----vvv
  - [ ] Homes
  - [ ] Bookmarks
  - [ ] Profile
  - [ ] Post
- [ ] 상태관리
  - [ ] App에 현재 페이지가 뭔지 => Nav, 내용

# react

renderWithHooks function에서

1. current(VDOM)가 mount 상태인지 확인해서 current === mount ? mountHooks : updateHooks 한다.
2. component를 호출 한다.
