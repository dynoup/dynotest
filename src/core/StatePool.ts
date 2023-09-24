function Pool(repository: any) {
  const StatePool = { profile: repository };
  this.StatePool = StatePool;

  this.init = () => {
    console.log('statePool!');
  };

  this.init();
  return this.StatePool;
}

export default function StatePool(repository: any) {
  return new (Pool as any)(repository);
}
