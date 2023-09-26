import Owo from '../../core/Component';

type Feed = {
  userName: string;
  userId: string;
  postId: string;
  profileUrl: string;
  contents: string;
  imageUrl: string;
  isBookmarked: boolean;
};

export default function FeedCard(
  $id: string,
  $parent: HTMLDivElement,
  content: Feed
) {
  const controller = Owo($id, $parent);
  controller.template(
    `<div id="${content.userId}"><div style="display: flex;"><img src=${content.imageUrl} alt="ProfileImage" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" loading="lazy"/><h4 ">${content.userName} ${content.userId}</h4></div>${content.contents}</div>`
  );
  controller.onStyle({
    width: '80%',
    margin: ' 2px',
    border: '1px solid white',
    overflow: 'hidden',
  });
}
