import Owo from '../core/Component';
import FeedComponent from '../components/FeedComponent';

export default function Mainpage($id: string, $parent: HTMLDivElement) {
  const controller = Owo($id, $parent);
  controller.template(`<div>여기에 피드를 넣어야돼</div>`);
  FeedComponent('__Feed', controller.element);
}
