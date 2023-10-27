import Owo from '../../core/Component';

export default function SubmitButton(
  $id: string,
  $parent: HTMLDivElement,
  innerText: string
) {
  const controller = Owo($id, $parent);

  controller.template(`<div id="${innerText}">${innerText}</div>`);
  controller.onStyle({
    width: '140px',
    backgroundColor: '#00BFFF' /* 하늘색 배경색 */,
    border: 'none' /* 테두리 없음 */,
    color: '#FFFFFF' /* 글자색은 흰색 */,
    padding: '10px 20px' /* 내부 여백 설정 */,
    borderRadius: '50px' /* 타원형 둥근 모서리 */,
    cursor:
      'pointer' /* 마우스 커서를 포인터로 변경하여 클릭 가능한 상태로 표시 */,
    fontSize: '16px',
  });

  controller.onClick(`${innerText}`, () => {
    console.log(`${innerText} is clicked!`);
  });
}
