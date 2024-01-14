const event = require("events");
const eventEmitter = new event.EventEmitter();

const sayHello = () => {
  console.log("I am hello");
};

eventEmitter.addListener("hello", sayHello);
eventEmitter.emit("hello");
