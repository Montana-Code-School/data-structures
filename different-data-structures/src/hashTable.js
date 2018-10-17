// HARD
class HashTable {
  constructor() {
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
  }

  insert(k, v){
    const i = getIndexBelowMaxForKey(k, this._limit);
  }

  retrieve(k){
    const i = getIndexBelowMaxForKey(k, this._limit);

  }

  remove(k){

  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
