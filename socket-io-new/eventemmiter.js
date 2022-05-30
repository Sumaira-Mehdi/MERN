import eventEmitter from "events";
const eventEmitter = new eventEmitter;

eventEmitter.on("run",() => {
    const a = ["a","b","c"];
    const b = [...a,2,3,34,56];
    console.log(b)
});
eventEmitter.emit("run");