class Sorter {
  constructor(public collection: number[]) {}
  sort(): void {
    //length of collection
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      //second loop minus value at the end as that will be the highest
      for (let j = 0; j < length - i - i; j++) {
        //compare left hand side to right hand side
        if (this.collection[j] > this.collection[j + 1]) {
          //swap numbers
          const leftHandSide = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHandSide;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
