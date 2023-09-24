import Owo from '../../core/Component';

export default function LogoButton(
  $id: string,
  $parent: HTMLDivElement,
  innerText: string
) {
  const controller = Owo($id, $parent);
  controller.template(`<button id="${innerText}">${innerText}</button>`);
  controller.onStyle({ width: '50%', margin: ' 8px' });
  controller.onClick(`${innerText}`, () => {
    console.log(`${innerText} is clicked!`);
  });
}
