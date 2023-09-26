import { statePool } from '../..';
import Owo from '../../core/Component';
import FeedCard from './FeedCard';

type Feed = {
  userName: string;
  userId: string;
  postId: string;
  profileUrl: string;
  contents: string;
  imageUrl: string;
  isBookmarked: boolean;
};

export default async function FeedList($id: string, $parent: HTMLDivElement) {
  const controller = Owo($id, $parent);
  await controller.onStateBind(statePool.feed);
  controller.template(`<div>feedlist</div>`);
  controller.state.forEach((content: Feed) => {
    FeedCard(`__FeedCard_${content.postId}`, controller.element, content);
  });
  controller.onStyle({
    width: '80%',
  });
}
