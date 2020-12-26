import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharacterCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 8, 50, 0, -100]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();

// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("This Is My New String!");
const sorter = new Sorter(charactersCollection);

sorter.sort();
console.log(charactersCollection.data);
