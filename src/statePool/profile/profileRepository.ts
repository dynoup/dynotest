let me = {
  userName: '너굴맨',
  userId: 'Dev_Owon',
  statedDate: '2022',
  following: 12,
  follower: 65535,
};

function repository() {
  const EventEmitter = require('events');
  this.state = {};
  this.observers = [];
  this.emitter = new EventEmitter();
  this.name = 'profile';
  this.init = () => {
    this.state = getMyProfile();
  };

  this.subscribe = (subscriber: any) => {
    this.observers.push(subscriber);
  };
  this.notify = (name: string) => {
    this.emitter.emit(name);
  };
  this.init();
}

const getMyProfile = () => {
  return me;
};

export default function profileRepository() {
  return new (repository as any)();
}
