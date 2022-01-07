const locStorage = {
  set: (key, value) => {
    const item = {
      newComing: false,
      value,
    };
    window.localStorage.setItem(key, JSON.stringify(item));
  },
  get: (key) => {
    const obj = JSON.parse(window.localStorage.getItem(key));
    let res = "";
    if (obj) {
      res = obj.value;
    }
    return res;
  },
  rm: (key) => {
    window.localStorage.removeItem(key);
  },
  getNewComing: (key) => {
    let newComing;
    try {
      newComing = JSON.parse(window.localStorage.getItem(key)).newComing;
    } catch {
      newComing = undefined;
    }
    return newComing;
  },
  setNewComing: (key, newComing) => {
    const value = JSON.parse(window.localStorage.getItem(key)).value;
    const item = {
      newComing: newComing,
      value: value || null,
    };
    window.localStorage.setItem(key, JSON.stringify(item));
  },
};

export default locStorage;
