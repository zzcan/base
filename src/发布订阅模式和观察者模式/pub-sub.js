class Events {
  constructor() {
    this.subs = {};
  }

  on(type, fn) {
    const subList = this.subs[type];
    this.subs[type] = [...(subList || []), fn]
  }

  emit(type, arg) {
    const subList = this.subs[type];
    if(subList) subList.forEach(fn => fn(arg));
  }
}

const sub = new Events();

sub.on('data', arg => console.log(arg));

sub.emit('data', 'sssss')