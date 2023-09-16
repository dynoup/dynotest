function Pool(repository: any) {
  const StatePool = { profile: repository };
  this.StatePool = StatePool;

  this.init = function () {
    console.log('statePool!');
  };

  this.init();
}

export default function StatePool(repository: any) {
  return new (Pool as any)(repository);
}
