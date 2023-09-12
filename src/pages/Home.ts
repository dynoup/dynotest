import Owo from '../core/Component';
import FeedComponent from '../components/FeedComponent';

export default function Home($id: string, $parent: HTMLDivElement) {
  const $$ = Owo($id, $parent);
  $$.compo(`<div>여기에 피드를 넣어야돼</div>`);
  FeedComponent('__Feed', $$.element);
}
