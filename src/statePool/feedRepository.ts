import Owository from '../core/Repository';

async function getFeeds() {
  try {
    const response = await fetch('http://localhost:8080/getFeeds');
    if (!response.ok) {
      throw new Error('네트워크 응답이 실패했습니다.');
    }
    const data = await response.json();
    return data.feedList;
  } catch (error) {
    throw error;
  }
}

export default async function feedRepository() {
  const repository = Owository('feed');
  try {
    const data = await getFeeds();
    repository.state = data;
    console.log(repository);
    repository.notify();
    return repository;
  } catch (error) {
    console.error('오류 발생:', error);
  }
}
