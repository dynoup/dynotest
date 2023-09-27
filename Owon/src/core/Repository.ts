function Repository(name: string) {
  const EventEmitter = require('events');
  this.state = {};
  this.observers = [];
  this.emitter = new EventEmitter();
  this.name = name;
  this.init = () => {};

  this.subscribe = (subscriber: any) => {
    this.observers.push(subscriber);
  };
  this.notify = () => {
    this.emitter.emit(this.name);
  };
  this.init();
}

export default function Owository(name: string) {
  return new (Repository as any)(name);
}
