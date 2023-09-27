function Pool(repository: any) {
  const StatePool = repository;
  this.StatePool = StatePool;

  return this.StatePool;
}

export default function StatePool(repository: any) {
  return new (Pool as any)(repository);
}
