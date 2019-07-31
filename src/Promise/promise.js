const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(executor) {
    this.value = null; // Promise的值
    this.status = PENDING; // Promise当前的状态
    this.onResolvedCallback = [];
    this.onRejectedCallback = [];

    try {
      executor(this.resolve, this.reject);
    } catch(e) {
      this.reject(e);
    }
  }

  static resolve(value) {
    if(this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      this.onResolvedCallback.forEach(fn => fn(value));
    }
    
  }

  static reject(value) {
    if(this.status === PENDING) {
      this.status = REJECTED;
      this.value = value;
      this.onRejectedCallback.forEach(fn => fn(value));
    }
  }

  // then方法接收两个参数，onResolved，onRejected，分别为Promise成功或失败后的回调
  then(onResolved, onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved : function (v) {};
    onResolved = typeof onResolved === 'function' ? onResolved : function (r) {};
  }
}