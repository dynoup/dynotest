// 추후에 컴포넌트 추상화 할 때 사용 될 예정

const onCreated = () => {
  console.log('여기에 노드를 등록합니다.');
};

const onMounted = (callback: () => void): void => {
  console.log('onMounted!');
};

const onUpdated = (callback: () => void): void => {
  console.log('onUpdated!');
};

const onUnmounted = (callback: () => void): void => {
  console.log('onUnmounted!');
};

export { onCreated, onMounted, onUnmounted, onUpdated };
