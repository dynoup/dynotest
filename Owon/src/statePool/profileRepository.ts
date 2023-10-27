import Owository from '../core/Repository';

async function getProfile() {
  try {
    const response = await fetch('http://localhost:8080/getProfile');
    if (!response.ok) {
      throw new Error('네트워크 응답이 실패했습니다.');
    }
    const data = await response.json();
    return data.profile;
  } catch (error) {
    throw error;
  }
}

export default async function profileRepository() {
  const repository = Owository('profile');
  try {
    const data = await getProfile();
    repository.state = data;
    console.log(repository);
    repository.notify();
    return repository;
  } catch (error) {
    console.error('오류 발생:', error);
  }
}
