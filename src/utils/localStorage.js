const locStorage = {
  set: (key, value) => {
    const item = {
      newComing: false,
      value,
    };
    window.localStorage.setItem(key, JSON.stringify(item));
  },
  get: (key) => {
    return JSON.parse(JSON.parse(window.localStorage.getItem(key)).value);
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
