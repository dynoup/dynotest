import Owo from '../core/Component';

export default function FeedComponent($id: string, $parent: HTMLDivElement) {
  const $$ = Owo($id, $parent);
  $$.state = { name: 'Owon', age: 1 };
  $$.compo(
    `<div>내이름은 ${$$.state.name},나이는:${$$.state.age}입니다.</div>`
  );
}
