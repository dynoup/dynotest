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
