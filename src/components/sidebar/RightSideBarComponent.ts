import Owo from '../../core/Component';

export default function buttonComponent(
  $id: string,
  $parent: HTMLDivElement,
  innerText: string
) {
  const controller = Owo($id, $parent);

  controller.template(`<button id="${innerText}">${innerText}</button/>`);

  controller.onClick(`${innerText}`, () => {
    console.log(`${innerText} is clicked!`);
  });
}
