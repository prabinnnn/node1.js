const event = require("event");
const eventEmitter = new event.EventEmitter();

const sayhello = () => {
  console.log("i am hello");
};
eventEmitter.addlistener("hello", sayhello);
eventEmitter.emit("hello");
