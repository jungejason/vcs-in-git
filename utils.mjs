const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.debug(rand(1, 10));

export {
    rand,
}
