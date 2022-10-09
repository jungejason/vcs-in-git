const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.debug(rand(1, 10));

const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}
console.log(getTime())

export {
    rand,
    getTime,
}
