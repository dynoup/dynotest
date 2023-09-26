import Owository from '../core/Repository';

async function getTrends() {
  try {
    const response = await fetch('http://localhost:8080/getTrends');
    if (!response.ok) {
      throw new Error('네트워크 응답이 실패했습니다.');
    }
    const data = await response.json();
    return data.trendList;
  } catch (error) {
    throw error;
  }
}

export default async function trendRepository() {
  const repository = Owository('trend');
  try {
    const data = await getTrends();
    repository.state = data;
    console.log(repository);
    repository.notify();
    return repository;
  } catch (error) {
    console.error('오류 발생:', error);
  }
}
