class Observer {
  constructor() {
    this.state = '原始值';
    this.subs = [];
  }

  addSub(fn) {
    this.subs.push(fn);
  }

  update(data) {
    this.state = data;
    this.subs.forEach(watcher => watcher.update(data));
  }
}

class Watcher {
  update(data) {
    console.log(data)
  }
}

const observer = new Observer();
const w1 = new Watcher();
const w2 = new Watcher();

observer.addSub(w1);
observer.addSub(w2);

observer.update('state值更新了')

observer.update('state值又更新了')