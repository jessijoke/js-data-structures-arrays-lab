// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

let destructivelyAppendDriver = (name) => {
    drivers.push(name);
}

let destructivelyPrependDriver = (name) => {
    drivers.unshift(name);
}

let destructivelyRemoveLastDriver = (name) => {
    drivers.pop(name);
}

let destructivelyRemoveFirstDriver = (name) => {
    drivers.shift(name);
}
/*
let appendDriver = (name) => {
    let newDrivers = [...drivers, name];
}
*/
function appendDriver(name) {
    return [...drivers, name];
}

function prependDriver(name) {
    return [name, ...drivers];
}

function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
  }

function removeFirstDriver() {
    return drivers.slice(1);
}
