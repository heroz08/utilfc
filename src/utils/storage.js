function Storage(type) {
  let storage = type === 'local' ? localStorage : sessionStorage;
  this.get = (key) => {
    const str = storage.getItem(key);
    try {
      if (str) return JSON.parse(str);
    } catch (e) {
      return str;
    }

    return null;
  };
  this.set = (key, value) => {
    if (key) {
      const str = JSON.stringify(value);
      storage.setItem(key, str);
    } else if (key && !value) {
      storage.removeItem(key);
    }
  };
  this.clear = () => {
    storage.clear()
  };
  this.remove = (key) => {
    storage.removeItem(key)
  }
}



const localstorage = new Storage('local');
const sessionstorage = new Storage();

export default {local: localstorage, session: sessionstorage};
