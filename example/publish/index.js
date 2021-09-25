
class EventEmitter {

  static list = { };

  constructor () {
    throw Error('EventEmitter can not construct!');
  };

  static on = (event, func) => {
    (this.list[event] || (this.list[event] = [])).push(func);
    return this;
  }

  static emit = (...argv) => {
    const event = Array.prototype.shift.call(argv);
    const funcs = [...this.list[event]];
    // 如果缓存列表里没有 fn 就返回 false
    if (!funcs || funcs.length === 0) return false;
    // 遍历 event 值对应的缓存列表，依次执行 fn
    funcs.forEach(func => {
      func.apply(this, argv);
    });
    return this;
  }

}

export default EventEmitter;
