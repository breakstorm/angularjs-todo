angular.module('todo').factory('todoStorage', function () {
  var key = "TODO"
  var storage = {
    list: [],
    // [{
    //     'id': 1,
    //     'content': 'hello',
    //     'done': false
    //   },
    //   {
    //     'id': 2,
    //     'content': 'world',
    //     'done': false
    //   }, {
    //     'id': 3,
    //     'content': 'angularjs',
    //     'done': true
    //   }
    // ],

    __saveStorage: function (target) {
      localStorage.setItem(key, JSON.stringify(target));
    },

    __getStorage: function () {
      return JSON.parse(localStorage.getItem(key));
    },

    get: function () {
      angular.copy(storage.__getStorage(), storage.list);
      return storage.list;
    },

    create: function (newValue) {
      const newItem = {
        'id': storage.list.length + 1,
        'content': newValue,
        'done': false
      };
      storage.list.push(newItem);
      storage.__saveStorage(storage.list);
      return storage.list;
    },

    delete: function (index) {
      storage.list = storage.list.filter((v, i, a) => {
        return i !== index;
      });
      storage.__saveStorage(storage.list);
      return storage.list;
    },

    done: function (index) {
      storage.list[index].done = !storage.list[index].done;
      storage.__saveStorage(storage.list);
      return storage.list;
    },

    update: function (newValue, index) {
      storage.list[index].content = newValue;
      storage.__saveStorage(storage.list);
      return storage.list;
    }
  }

  return storage;
});
