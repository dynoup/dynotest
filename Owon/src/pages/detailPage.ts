import Owo from '../core/Component';

export default function DetailPage($id: string, $parent: HTMLDivElement) {
  const controller = Owo($id, $parent);

  controller.template(
    '<div>userName: <div>여긴 디테일 페이지 입니다</section>'
  );
  controller.onStyle({ width: '300px' });
}
