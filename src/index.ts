import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([10, 3, -5, 8, 50, 0, -90]);
// numbersCollection.sort();

// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection(
//   "This Is My New Refactored String"
// );
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(0);
linkedList.add(-403);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
