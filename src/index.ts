class Sorter {
  constructor(public collection: number[]) {}
  sort(): void {
    //length of collection
    const { length } = this.collection;
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
