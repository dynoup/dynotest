import { rest } from 'msw';

export const handlers = [
  rest.get('/getFeeds', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        feedList: [
          {
            userName: 'Dynoup',
            userId: '@dynoup',
            postId: '@dynoup_01',
            profileUrl: 'https://i.pravatar.cc/150?img=1',
            contents: '네카라쿠배가 되고싶어요!!',
            imageUrl: 'https://picsum.photos/id/1/200/300',
            isBookmarked: true,
          },
          {
            userName: 'Dev_Owon',
            userId: '@DevOwon',
            postId: '@DevOwon_02',
            profileUrl: 'https://i.pravatar.cc/150?img=2',
            contents: '코드는 말이죵~',
            imageUrl: 'https://picsum.photos/id/2/200/300',
            isBookmarked: false,
          },
          {
            userName: '댄버지',
            userId: '@ReactDan',
            postId: '@ReactDan_03',
            profileUrl: 'https://i.pravatar.cc/150?img=3',
            contents: 'React is not speedy at all',
            imageUrl: 'https://picsum.photos/id/3/200/300',
            isBookmarked: true,
          },
          {
            userName: '할렘가의 몽키',
            userId: '@Dat.queue',
            postId: '@Dat.queue_04',
            profileUrl: 'https://i.pravatar.cc/150?img=4',
            contents: '엘라스틱 서치 너무 좋다',
            imageUrl: 'https://picsum.photos/id/4/200/300',
            isBookmarked: false,
          },
          {
            userName: '할렘가의 몽키',
            userId: '@Dat.queue',
            postId: '@Dat.queue_05',
            profileUrl: 'https://i.pravatar.cc/150?img=5',
            contents:
              '[업데이트 예정] 테마 관리 기능 커밍쑨! 지금 적용중인 갠홈 스타일을 통채로 저장해두고, 원할 때 마다 클릭으로 변경할 수 있습니다.메인 로고, 폰트 스타일, 배경, 전체 레이아웃 등등이 저장됩니다. 말그대로 클릭 한 번으로 새 홈페이지 기분내기! 2.2.0 버전부터 적용 가능하고 추가금은..고민중에 있습니다! (해당 버전은 다음 슬롯 오픈때부터 업데이트 요청 가능합니다)',
            imageUrl: 'https://picsum.photos/id/5/200/300',
            isBookmarked: false,
          },
          {
            userName: '할렘가의 몽키',
            userId: '@Dat.queue',
            postId: '@Dat.queue_06',
            profileUrl: 'https://i.pravatar.cc/150?img=6',
            contents: 'DDD 를 아세요? 너무 좋아요',
            imageUrl: 'https://picsum.photos/id/6/200/300',
            isBookmarked: true,
          },
          {
            userName: 'Dev_Owon',
            userId: '@DevOwon',
            postId: '@DevOwon_07',
            profileUrl: 'https://i.pravatar.cc/150?img=7',
            contents: '전 사실 이달소의 팬이 아닙니다. 이달소의 일원이죠',
            imageUrl: 'https://picsum.photos/id/7/200/300',
            isBookmarked: false,
          },
          {
            userName: '댄버지',
            userId: '@ReactDan',
            postId: '@ReactDan_08',
            profileUrl: 'https://i.pravatar.cc/150?img=8',
            contents: '사실 나 스벨트 쓰고 싶었어요...',
            imageUrl: 'https://picsum.photos/id/8/200/300',
            isBookmarked: true,
          },
          {
            userName: '할렘가의 몽키',
            userId: '@Dat.queue',
            postId: '@Dat.queue_09',
            profileUrl: 'https://i.pravatar.cc/150?img=9',
            contents:
              '오늘 아침엔 꼬마김밥으로 시작했다. 사실 아침에 일어나 본적이 거의 없는 것 같다.',
            imageUrl: 'https://picsum.photos/id/9/200/300',
            isBookmarked: false,
          },
          {
            userName: '영감님',
            userId: '@Yeonguan',
            postId: '@Yeonguan_10',
            profileUrl: 'https://i.pravatar.cc/150?img=10',
            contents:
              '너디너리데이 발표 후기, 발표 30분 후 질문답변만 1시간 넘게했다. 즐거운 경험이었지만 한 편으로 현업과 연결될 창구가 이렇게 없나? 의문이 들었다..',
            imageUrl: 'https://picsum.photos/id/10/200/300',
            isBookmarked: false,
          },
          {
            userName: '서누님',
            userId: '@seonup',
            postId: '@seonup_11',
            profileUrl: 'https://i.pravatar.cc/150?img=11',
            contents:
              " Excited to share that my comprehensive React course, The Joy of React, has an official release date. It'll be ,available to purchase as of September 13th! This has been my full-time focus for ~2 years now, and I'm so friggin’ excited to share the final result. Translate with DeepL",
            imageUrl: 'https://picsum.photos/id/11/200/300',
            isBookmarked: false,
          },
          {
            userName: '일론머스트',
            userId: '@Musk',
            postId: '@Musk_12',
            profileUrl: 'https://i.pravatar.cc/150?img=21',
            contents:
              ' 1차 채용의 비대면 기술 인터뷰가 끝났고, 이 인터뷰 전에 서류합격자 분들께 사전에 전달드렸던 안내사항 문서를 공유해 봅니다., 백엔드 인터뷰이 준비사항 https://bysuco.notion.site/74491a74f7c14ea0a7f01bec173c6a30… 프론트엔드 인터뷰이 준비사항',
            imageUrl: 'https://picsum.photos/id/12/200/300',
            isBookmarked: false,
          },
          {
            userName: '폰 노이만',
            userId: '@Pawn',
            postId: '@Pawn_13',
            profileUrl: 'https://i.pravatar.cc/150?img=22',
            contents:
              "I think syncing state is the most common source of confusion and bugs in apps. Often useEffect is involved, ,like when putting a prop into state and then updating internal state when the prop changes. This is not useEffect's fault, it's just not intended to be used for that. Translate with DeepL",
            imageUrl: 'https://picsum.photos/id/13/200/300',
            isBookmarked: true,
          },
          {
            userName: '삼품동 소녀들',
            userId: '@Freak',
            postId: '@Freak_14',
            profileUrl: 'https://i.pravatar.cc/150?img=23',
            contents:
              '우선순위라는 표현은 좀 다른 표현으로 바꾸고 싶지만, 어쨋든 중요한 건 해야 할 일을 극단적으로 적게 잡고, 나머지 일들에는 1초도 시간을 쓰지 않는 ,것이다. 이게 안되면 어떤 관리 방식도 의미 없다.',
            imageUrl: 'https://picsum.photos/id/14/200/300',
            isBookmarked: false,
          },
          {
            userName: 'Dan',
            userId: '@RealDan',
            postId: '@RealDan_15',
            profileUrl: 'https://i.pravatar.cc/150?img=24',
            contents: '내가 진짜 댄이에요.. 저건 가짜계정...',
            imageUrl: 'https://picsum.photos/id/15/200/300',
            isBookmarked: false,
          },
          {
            userName: 'Toss',
            userId: '@Tooss',
            postId: '@Tooss_16',
            profileUrl: 'https://i.pravatar.cc/150?img=25',
            contents:
              '토스 Tech 4년 이상 공개채용, 국민 3명 중 1명이 사용하고, 월간 활성 사용자 수 1,510만명을 확보하고 있는 토스에서 4년 이상 엔지니어를 채용합니다. - 지원 기간 : 8/29(화) ~ 9/12(화) - 지원 대상 : 4년 이상의 경험을 가지고 있는 엔지니어 누구나',
            imageUrl: 'https://picsum.photos/id/16/200/300',
            isBookmarked: false,
          },
        ],
      })
    );
  }),
  rest.get('/getTrends', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        trendList: [
          {
            trendId: 'trends1',
            keyword: '신서유기',
            country: 'South Korea',
            count: 153604,
          },
          {
            trendId: 'trends2',
            keyword: '납작복숭아',
            country: 'South Korea',
            count: 2333,
          },
          {
            trendId: 'trends3',
            keyword: '신분당선',
            country: 'South Korea',
            count: 2984,
          },
          {
            trendId: 'trends4',
            keyword: '대중교통',
            country: 'South Korea',
            count: 4102,
          },
          {
            trendId: 'trends5',
            keyword: '서울',
            country: 'South Korea',
            count: 30320,
          },
        ],
      })
    );
  }),
  rest.get('/getProfile', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        profile: {
          pfpUrl:
            'https://cphoto.asiae.co.kr/listimglink/1/2023032808113468574_1679958693.jpg',
          userName: '너굴맨',
          userId: 'Dev_Owon',
          statedDate: '2022',
          following: 12,
          follower: 65535,
        },
      })
    );
  }),
];
