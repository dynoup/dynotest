function Observer() {
  const statePool: string[] = [];
  this.statePool = statePool;

  this.subscribe = function (statePool: any) {
    this.statePool = statePool;
  };

  this.getStatePoolNames = function () {
    console.log(this.statePool);
  };
}

export default function Owl() {
  return new (Observer as any)();
}
