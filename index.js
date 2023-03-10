// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(name){
    return [...cats, name]
}
beforeEach();
function prependCat(name){
    return [name, ...cats];
}
beforeEach();
function removeLastCat(name){
return cats.slice(0, length- 1 );
}
beforeEach();
function removeFirstCat(name){
    return cats.slice(1)
}
beforeEach(); 
