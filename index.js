const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name); // use the name argument instead of a hardcoded value
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop(); // don't need a name argument
}

function destructivelyRemoveFirstCat(){
    cats.shift(); // don't need a name argument
}

function appendCat(name){
    return [...cats, name]; // use spread operator to create new array with appended value
}

function prependCat(name){
    return [name, ...cats]; // use spread operator to create new array with prepended value
}

function removeLastCat(){
    return cats.slice(0, -1); // use slice to create new array with last element removed
}

function removeFirstCat(){
    return cats.slice(1); // use slice to create new array with first element removed
}


