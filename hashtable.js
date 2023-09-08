class HashTable {
    constructor() {
      this.table = new Array(15);
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.table.length;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      this.table[index].push({ key, value });
    }
  
    get(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i].key === key) {
            return this.table[index][i].value;
          }
        }
      }
      return undefined;
    }
  
    // remove method
    remove(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i].key === key) {
            this.table[index].splice(i, 1);
            return true;
          }
        }
      }
      return false;
    }
  
    
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(`${i}: ${JSON.stringify(this.table[i])}`);
        }
      }
    }
  }
  
  const ht = new HashTable();
  ht.set("janavi patil", "1");
  ht.set("ram badhe", "4");
  ht.set("seeta kau", "7");
  ht.display(); 
  console.log(ht.get("janavi patil")); 
  ht.remove("ram badhe");
  console.log(ht.get("ram badhe"));
  
  