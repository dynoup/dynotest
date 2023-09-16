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
  this.init = function () {
    this.state = getMyProfile();
  };

  this.subscribe = function (subscriber: any) {
    this.observers.push(subscriber);
  };
  this.notify = function () {
    this.emitter.emit('profile');
  };
  this.init();
}

const getMyProfile = () => {
  return me;
};

export default function profileRepository() {
  return new (repository as any)();
}
