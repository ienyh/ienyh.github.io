

class IDBController {

  // _request; // IDBRequest 对象。这个对象通过三种事件 error、success、upgradeneeded，处理打开数据库的操作结果。
  _db; // 
  _objectStore; // 

  constructor (databaseName, version) {
    this._request = window.indexedDB.open(databaseName, version);

    this._request.onsuccess = event => { this._db = event.target.result; };
    this._request.onerror = () => { console.log('数据库打开失败'); };
    this._request.onupgradeneeded = this.upgradeneeded;

  }

  upgradeneeded = (event) => {
    this._db = event.target.result;
    if (!this._db.objectStoreNames.contains('objs')) {
      this._objectStore = this._db.createObjectStore('objs', { keyPath: 'id' });
    }
    console.log(this);
  }

  add = () => {
    console.log(this._db);
    const req = this._db?.transaction?.(['objs'], 'readwrite')
      .objectStore('objs')
      .add({ id: 1, mesh: { name: bim } });
    console.log(req)
    req.onsuccess = () => { console.log('写入成功'); }
    req.onerror = () => { console.log('写入失败'); }
  }
}

export default IDBController;